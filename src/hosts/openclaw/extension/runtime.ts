import { compactBashResultSync } from "../../../core/integrations/compact-bash-result.js";
import { loadBuiltinRulesSync } from "../../../core/rules.js";
import { isNodeExecutablePath, isTokenjuiceExecutablePath, parseShellWords } from "../../shared/hook-command.js";

import type {
  OpenClawAfterToolCallEvent,
  OpenClawBeforeToolCallEvent,
  OpenClawPluginApi,
  OpenClawToolContext,
  OpenClawToolResultContentBlock,
  OpenClawToolResultMessage,
  OpenClawToolResultPersistEvent,
  OpenClawToolResultPersistResult,
} from "./openclaw-types.js";

export type OpenClawExtensionRuntimeConfig = {
  /** Name of the OpenClaw tool we intercept. Defaults to "exec" (pi-coding-agent's bash tool). */
  toolName?: string;
  /** Maximum inline characters for the compacted output. */
  maxInlineChars?: number;
  /** TTL in ms for captured command strings before they are dropped. */
  commandCaptureTtlMs?: number;
  /** Maximum number of pending command captures retained in memory. */
  maxPendingCommands?: number;
};

const DEFAULT_OPENCLAW_TOOL_NAME = "exec";
const DEFAULT_MAX_INLINE_CHARS = 1200;
const DEFAULT_COMMAND_CAPTURE_TTL_MS = 5 * 60 * 1000;
const DEFAULT_MAX_PENDING_COMMANDS = 512;
const GENERIC_FALLBACK_MIN_SAVED_CHARS = 120;
const GENERIC_FALLBACK_MAX_RATIO = 0.75;

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function readStringParam(params: Record<string, unknown>, key: string): string | undefined {
  const value = params[key];
  return typeof value === "string" ? value : undefined;
}

function readNumberField(source: Record<string, unknown>, key: string): number | undefined {
  const value = source[key];
  return typeof value === "number" && Number.isFinite(value) ? value : undefined;
}

function extractFirstTextBlock(
  message: OpenClawToolResultMessage,
): { index: number; text: string } | null {
  if (!Array.isArray(message.content)) {
    return null;
  }
  for (let index = 0; index < message.content.length; index += 1) {
    const block = message.content[index];
    if (isRecord(block) && typeof (block as OpenClawToolResultContentBlock).text === "string") {
      return { index, text: (block as OpenClawToolResultContentBlock).text as string };
    }
  }
  return null;
}

function extractAggregatedText(message: OpenClawToolResultMessage): string | undefined {
  const details = message.details;
  if (!isRecord(details)) {
    return undefined;
  }
  const aggregated = details.aggregated;
  return typeof aggregated === "string" ? aggregated : undefined;
}

function extractExitCode(message: OpenClawToolResultMessage): number | undefined {
  const details = message.details;
  if (!isRecord(details)) {
    return undefined;
  }
  return readNumberField(details, "exitCode");
}

export function commandRequestsTokenjuiceRawBypass(command: string): boolean {
  const argv = parseShellWords(command);
  if (argv.length < 3) {
    return false;
  }

  const first = argv[0];
  const second = argv[1];
  let wrapIndex = -1;
  if (typeof first === "string" && isTokenjuiceExecutablePath(first)) {
    wrapIndex = 1;
  } else if (
    typeof first === "string"
    && isNodeExecutablePath(first)
    && typeof second === "string"
    && second.endsWith(".js")
    && argv.slice(1).some((part) => part.includes("tokenjuice"))
  ) {
    wrapIndex = 2;
  }

  if (wrapIndex === -1 || argv[wrapIndex] !== "wrap") {
    return false;
  }

  const optionEndIndex = argv.indexOf("--", wrapIndex + 1);
  const optionArgs = argv.slice(wrapIndex + 1, optionEndIndex === -1 ? undefined : optionEndIndex);
  return optionArgs.includes("--raw") || optionArgs.includes("--full");
}

function buildCompactionNotice(rawChars: number, reducedChars: number, reducerId?: string): string {
  const saved = Math.max(0, rawChars - reducedChars);
  const reducer = reducerId ?? "generic/fallback";
  return `tokenjuice compacted bash output (${reducer}): ${rawChars} → ${reducedChars} chars (saved ${saved})`;
}

function replaceTextBlockAt(
  message: OpenClawToolResultMessage,
  targetIndex: number,
  replacementText: string,
): OpenClawToolResultMessage {
  if (!Array.isArray(message.content)) {
    return message;
  }
  const content = message.content as OpenClawToolResultContentBlock[];
  const nextContent = content.map((block, index) => {
    if (index !== targetIndex || !isRecord(block)) {
      return block;
    }
    if (typeof (block as OpenClawToolResultContentBlock).text !== "string") {
      return block;
    }
    return { ...block, text: replacementText };
  });
  return { ...message, content: nextContent };
}

type PendingCommand = {
  command: string;
  capturedAt: number;
};

export function createTokenjuiceOpenClawExtension(config: OpenClawExtensionRuntimeConfig = {}) {
  const toolName = config.toolName && config.toolName.length > 0 ? config.toolName : DEFAULT_OPENCLAW_TOOL_NAME;
  const maxInlineChars = typeof config.maxInlineChars === "number" && config.maxInlineChars > 0
    ? config.maxInlineChars
    : DEFAULT_MAX_INLINE_CHARS;
  const commandCaptureTtlMs = typeof config.commandCaptureTtlMs === "number" && config.commandCaptureTtlMs > 0
    ? config.commandCaptureTtlMs
    : DEFAULT_COMMAND_CAPTURE_TTL_MS;
  const maxPendingCommands = typeof config.maxPendingCommands === "number" && config.maxPendingCommands > 0
    ? Math.floor(config.maxPendingCommands)
    : DEFAULT_MAX_PENDING_COMMANDS;

  return function tokenjuiceOpenClawExtension(api: OpenClawPluginApi): void {
    const pendingCommands = new Map<string, PendingCommand>();
    const rules = loadBuiltinRulesSync();

    function pruneExpiredCommands(): void {
      if (pendingCommands.size === 0) {
        return;
      }
      const now = Date.now();
      for (const [key, pending] of pendingCommands) {
        if (now - pending.capturedAt > commandCaptureTtlMs) {
          pendingCommands.delete(key);
        }
      }
      while (pendingCommands.size > maxPendingCommands) {
        const oldestKey = pendingCommands.keys().next().value;
        if (typeof oldestKey !== "string") {
          break;
        }
        pendingCommands.delete(oldestKey);
      }
    }

    api.logger.info(
      `tokenjuice-openclaw: enabled for tool=${toolName}, maxInlineChars=${maxInlineChars}, rules=${rules.length}`,
    );

    api.on("before_tool_call", (event: OpenClawBeforeToolCallEvent, _ctx: OpenClawToolContext) => {
      if (event.toolName !== toolName) {
        return;
      }
      const command = readStringParam(event.params, "command");
      const toolCallId = event.toolCallId;
      if (!command || !toolCallId) {
        return;
      }
      pendingCommands.set(toolCallId, { command, capturedAt: Date.now() });
      pruneExpiredCommands();
    });

    api.on("after_tool_call", (event: OpenClawAfterToolCallEvent, _ctx: OpenClawToolContext) => {
      if (event.toolName !== toolName) {
        return;
      }
      pruneExpiredCommands();
    });

    api.on(
      "tool_result_persist",
      (
        event: OpenClawToolResultPersistEvent,
        _ctx: OpenClawToolContext,
      ): OpenClawToolResultPersistResult | void => {
        if (event.toolName !== toolName) {
          return undefined;
        }
        if (event.isSynthetic) {
          return undefined;
        }

        const message = event.message;
        const toolCallId = event.toolCallId;
        if (!toolCallId) {
          return undefined;
        }

        const pending = pendingCommands.get(toolCallId);
        if (!pending) {
          return undefined;
        }
        pendingCommands.delete(toolCallId);

        if (commandRequestsTokenjuiceRawBypass(pending.command)) {
          return undefined;
        }

        const textBlock = extractFirstTextBlock(message);
        if (!textBlock) {
          return undefined;
        }

        const visibleText = textBlock.text;
        const aggregatedText = extractAggregatedText(message);
        const rawText = aggregatedText && aggregatedText.length >= visibleText.length
          ? aggregatedText
          : visibleText;

        if (!rawText.trim()) {
          return undefined;
        }

        const exitCode = extractExitCode(message);

        let outcome;
        try {
          outcome = compactBashResultSync(
            {
              source: "openclaw",
              command: pending.command,
              visibleText: rawText,
              maxInlineChars,
              ...(typeof exitCode === "number" ? { exitCode } : {}),
              inspectionPolicy: "allow-safe-inventory",
              genericFallbackMinSavedChars: GENERIC_FALLBACK_MIN_SAVED_CHARS,
              genericFallbackMaxRatio: GENERIC_FALLBACK_MAX_RATIO,
              skipGenericFallbackForCompoundCommands: true,
              metadata: {
                source: "openclaw-tool-result-persist",
                openclawToolName: event.toolName,
              },
            },
            rules,
          );
        } catch (error) {
          api.logger.warn(
            `tokenjuice-openclaw: compactBashResultSync threw for command=${pending.command.slice(0, 80)}: ${String(error)}`,
          );
          return undefined;
        }

        if (outcome.action !== "rewrite") {
          return undefined;
        }

        const reducer = outcome.result.classification.matchedReducer;
        const replacementText = `${outcome.result.inlineText}\n\n[${buildCompactionNotice(
          outcome.result.stats.rawChars,
          outcome.result.stats.reducedChars,
          reducer,
        )}]`;

        const nextMessage = replaceTextBlockAt(message, textBlock.index, replacementText);
        if (nextMessage === message) {
          return undefined;
        }

        return { message: nextMessage };
      },
    );
  };
}
