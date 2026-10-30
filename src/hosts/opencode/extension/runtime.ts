import { readFile, stat } from "node:fs/promises";

import { compactBashResult } from "../../../core/integrations/compact-bash-result.js";
import {
  buildCompactionNotice,
  buildTokenjuiceDetails,
} from "../../shared/tool-result.js";
import { formatErrorMessage } from "../../pi/extension/utils.js";

export type OpenCodeExtensionRuntimeConfig = Record<string, never>;

type OpenCodeToolInput = {
  tool: string;
  sessionID?: string;
  callID?: string;
  args?: unknown;
};

type OpenCodeToolOutput = {
  title?: string;
  output: string;
  metadata?: unknown;
};

type OpenCodeHooks = {
  "tool.execute.after": (input: OpenCodeToolInput, output: OpenCodeToolOutput) => Promise<void>;
};

// OpenCode V2 passes one mutable event to `ctx.tool.hook("execute.after", ...)`.
type OpenCodeV2ExecuteAfterEvent = {
  tool: string;
  input: unknown;
  status: string;
  result?: unknown;
};

type OpenCodeV2ToolHook = (
  name: "execute.after",
  handler: (event: OpenCodeV2ExecuteAfterEvent) => Promise<void>,
) => unknown;

const DEFAULT_MAX_INLINE_CHARS = 1200;
const GENERIC_FALLBACK_MIN_SAVED_CHARS = 120;
const GENERIC_FALLBACK_MAX_RATIO = 0.75;
const MAX_TRUSTED_FULL_OUTPUT_BYTES = 8 * 1024 * 1024;

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function readCommand(args: unknown): string {
  return isRecord(args) && typeof args.command === "string" ? args.command : "";
}

function readCwd(args: unknown): string | undefined {
  if (isRecord(args) && typeof args.workdir === "string" && args.workdir.trim()) {
    return args.workdir;
  }
  return undefined;
}

function extractFullOutputPath(metadata: unknown): string | undefined {
  if (!isRecord(metadata)) {
    return undefined;
  }
  if (metadata.truncated !== true) {
    return undefined;
  }
  if (typeof metadata.outputPath === "string" && metadata.outputPath.trim()) {
    return metadata.outputPath;
  }
  return undefined;
}

async function loadFullOutputText(fullOutputPath: string): Promise<string | null> {
  let details;
  try {
    details = await stat(fullOutputPath);
  } catch (error) {
    throw new Error(
      `tokenjuice failed to stat bash full output file ${fullOutputPath}: ${formatErrorMessage(error)}`,
    );
  }
  if (details.size > MAX_TRUSTED_FULL_OUTPUT_BYTES) {
    return null;
  }
  try {
    return await readFile(fullOutputPath, "utf8");
  } catch (error) {
    throw new Error(
      `tokenjuice failed to read bash full output file ${fullOutputPath}: ${formatErrorMessage(error)}`,
    );
  }
}

function readV2ResultText(result: Record<string, unknown>): string | undefined {
  if (typeof result.content === "string") {
    return result.content;
  }
  if (!Array.isArray(result.content)) {
    return undefined;
  }
  const parts: string[] = [];
  for (const part of result.content) {
    if (!isRecord(part) || part.type !== "text" || typeof part.text !== "string") {
      // Leave mixed or non-text results alone rather than drop parts.
      return undefined;
    }
    parts.push(part.text);
  }
  return parts.join("\n\n");
}

export function createTokenjuiceOpenCodeExtension(_config: OpenCodeExtensionRuntimeConfig = {}) {
  const afterBash: OpenCodeHooks["tool.execute.after"] = async (input, output) => {
    if (input.tool !== "bash") {
      return;
    }

    const command = readCommand(input.args);
    if (!command) {
      return;
    }

    const outputText = typeof output.output === "string" ? output.output : "";
    if (!outputText.trim()) {
      return;
    }

    const cwd = readCwd(input.args);
    const fullOutputPath = extractFullOutputPath(output.metadata);
    const trustedFullOutputText = fullOutputPath
      ? await loadFullOutputText(fullOutputPath)
      : undefined;
    if (fullOutputPath && trustedFullOutputText === null) {
      return;
    }

    let outcome;
    try {
      outcome = await compactBashResult({
        source: "opencode",
        command,
        ...(cwd ? { cwd } : {}),
        visibleText: outputText,
        ...(typeof trustedFullOutputText === "string"
          ? { trustedFullText: trustedFullOutputText }
          : {}),
        maxInlineChars: DEFAULT_MAX_INLINE_CHARS,
        inspectionPolicy: "allow-safe-inventory",
        minSavedCharsAny: 8,
        genericFallbackMinSavedChars: GENERIC_FALLBACK_MIN_SAVED_CHARS,
        genericFallbackMaxRatio: GENERIC_FALLBACK_MAX_RATIO,
        skipGenericFallbackForCompoundCommands: true,
        metadata: { source: "opencode-tool-result" },
      });
    } catch (error) {
      throw new Error(`tokenjuice failed to compact OpenCode bash output: ${formatErrorMessage(error)}`);
    }

    if (outcome.action === "keep") {
      return;
    }

    output.output = `${outcome.result.inlineText}\n\n[${buildCompactionNotice(outcome.result, fullOutputPath)}]`;

    const tokenjuiceDetails = buildTokenjuiceDetails(outcome.result);
    if (isRecord(output.metadata)) {
      (output.metadata as Record<string, unknown>).tokenjuice = tokenjuiceDetails;
    } else {
      (output as { metadata: unknown }).metadata = { tokenjuice: tokenjuiceDetails };
    }
  };

  // OpenCode V2 names the tool `shell` and reports model-visible text in `result.content`.
  const afterV2Execute = async (event: OpenCodeV2ExecuteAfterEvent): Promise<void> => {
    if (event.status !== "completed" || (event.tool !== "shell" && event.tool !== "bash") || !isRecord(event.result)) {
      return;
    }
    const result = event.result;
    const text = readV2ResultText(result);
    if (text === undefined) {
      return;
    }

    const output: OpenCodeToolOutput = { output: text, metadata: result.metadata };
    await afterBash({ tool: "bash", args: event.input }, output);
    if (output.output === text) {
      return;
    }

    event.result = {
      ...result,
      content: [{ type: "text", text: output.output }],
      metadata: output.metadata,
    };
  };

  return {
    id: "tokenjuice",
    // OpenCode V1 (1.18.29+) object entrypoint.
    async server(_context?: unknown): Promise<OpenCodeHooks> {
      return { "tool.execute.after": afterBash };
    },
    // OpenCode V2 entrypoint.
    async setup(context?: unknown): Promise<void> {
      const toolDomain = isRecord(context) ? context.tool : undefined;
      const hook = isRecord(toolDomain) ? toolDomain.hook : undefined;
      if (typeof hook !== "function") {
        return;
      }
      await (hook as OpenCodeV2ToolHook).call(toolDomain, "execute.after", afterV2Execute);
    },
  };
}
