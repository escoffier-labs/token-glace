import { constants as fsConstants } from "node:fs";
import { access, mkdir, readFile, rename, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { homedir } from "node:os";

import { extractHookCommandPaths } from "../shared/hook-command.js";
import {
  buildWrapLauncherHookCommand,
  buildWrappedCommand,
  commandAlreadyWrapped,
  resolveHostShell,
} from "../shared/pre-tool-wrap.js";

type ClaudeCodeHook = Record<string, unknown>;

type ClaudeCodeHookMatcherGroup = Record<string, unknown> & {
  matcher?: string;
  hooks: ClaudeCodeHook[];
};

type ClaudeCodeSettings = Record<string, unknown> & {
  hooks: Record<string, unknown>;
};

export type InstallClaudeCodeHookResult = {
  settingsPath: string;
  backupPath?: string;
  command: string;
};

export type ClaudeCodeDoctorReport = {
  settingsPath: string;
  status: "ok" | "warn" | "broken";
  issues: string[];
  fixCommand: string;
  expectedCommand: string;
  detectedCommand?: string;
  checkedPaths: string[];
  missingPaths: string[];
};

export type ClaudeCodeHookCommandOptions = {
  local?: boolean;
  binaryPath?: string;
  nodePath?: string;
};

const TOKENJUICE_CLAUDE_CODE_STATUS = "wrapping bash through tokenjuice for compaction";
const TOKENJUICE_CLAUDE_CODE_LEGACY_STATUS = "compacting bash output with tokenjuice";
const TOKENJUICE_CLAUDE_CODE_FIX_COMMAND = "tokenjuice install claude-code";
const TOKENJUICE_CLAUDE_CODE_HOOK_SUBCOMMAND = "claude-code-pre-tool-use";
const TOKENJUICE_CLAUDE_CODE_LEGACY_HOOK_SUBCOMMAND = "claude-code-post-tool-use";

function getClaudeCodeHome(): string {
  // Claude Code resolves its config directory from CLAUDE_CONFIG_DIR, so honor
  // it first to stay aligned with the host. CLAUDE_HOME is kept as a fallback
  // for backwards compatibility with existing tokenjuice installs.
  return process.env.CLAUDE_CONFIG_DIR || process.env.CLAUDE_HOME || join(homedir(), ".claude");
}

function getDefaultSettingsPath(): string {
  return join(getClaudeCodeHome(), "settings.json");
}

async function isExecutableFile(path: string): Promise<boolean> {
  try {
    await access(path, fsConstants.X_OK);
    return true;
  } catch {
    return false;
  }
}

async function buildClaudeCodeHookCommand(options: ClaudeCodeHookCommandOptions = {}): Promise<string> {
  return buildWrapLauncherHookCommand({
    ...options,
    subcommand: TOKENJUICE_CLAUDE_CODE_HOOK_SUBCOMMAND,
    hostName: "claude-code",
  });
}

function getClaudeCodeFixCommand(local = false): string {
  return local ? "tokenjuice install claude-code --local" : TOKENJUICE_CLAUDE_CODE_FIX_COMMAND;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function createTokenjuiceClaudeCodeHook(command: string): ClaudeCodeHookMatcherGroup {
  return {
    matcher: "Bash",
    hooks: [
      {
        type: "command",
        command,
        statusMessage: TOKENJUICE_CLAUDE_CODE_STATUS,
      },
    ],
  };
}

function isTokenjuiceClaudeCodeHookEntry(hook: unknown): boolean {
  if (!isRecord(hook)) {
    return false;
  }
  if (
    hook.statusMessage === TOKENJUICE_CLAUDE_CODE_STATUS
    || hook.statusMessage === TOKENJUICE_CLAUDE_CODE_LEGACY_STATUS
  ) {
    return true;
  }
  if (typeof hook.command !== "string") {
    return false;
  }
  return (
    hook.command.includes(TOKENJUICE_CLAUDE_CODE_HOOK_SUBCOMMAND)
    || hook.command.includes(TOKENJUICE_CLAUDE_CODE_LEGACY_HOOK_SUBCOMMAND)
  );
}

function isTokenjuiceClaudeCodeHook(group: ClaudeCodeHookMatcherGroup): boolean {
  return group.hooks.some(isTokenjuiceClaudeCodeHookEntry);
}

function findTokenjuiceClaudeCodeHookCommand(
  config: ClaudeCodeSettings,
): { command: string; hookEvent: "PreToolUse" | "PostToolUse" } | undefined {
  // Prefer the current PreToolUse shape; fall back to legacy PostToolUse so
  // doctor can detect stale installs and report a migration hint.
  for (const hookEvent of ["PreToolUse", "PostToolUse"] as const) {
    const groups = Array.isArray(config.hooks[hookEvent]) ? (config.hooks[hookEvent] as unknown[]) : [];
    for (const group of groups) {
      if (!(isRecord(group) && Array.isArray(group.hooks) && isTokenjuiceClaudeCodeHook(group as ClaudeCodeHookMatcherGroup))) {
        continue;
      }
      const matched = group.hooks.find(isTokenjuiceClaudeCodeHookEntry);
      if (isRecord(matched) && typeof matched.command === "string" && matched.command) {
        return { command: matched.command, hookEvent };
      }
    }
  }

  return undefined;
}

function sanitizeHooksSubtree(raw: unknown): Record<string, unknown> {
  return isRecord(raw) ? { ...raw } : {};
}

function sanitizeClaudeCodeSettings(raw: unknown): ClaudeCodeSettings {
  if (!isRecord(raw)) {
    return { hooks: {} };
  }

  return {
    ...raw,
    hooks: sanitizeHooksSubtree(raw.hooks),
  };
}

async function loadClaudeCodeSettings(settingsPath: string): Promise<{ config: ClaudeCodeSettings; backupPath?: string }> {
  try {
    const rawText = await readFile(settingsPath, "utf8");
    const parsed = JSON.parse(rawText) as unknown;
    const config = sanitizeClaudeCodeSettings(parsed);
    const backupPath = `${settingsPath}.bak`;
    await writeFile(backupPath, rawText, "utf8");
    return { config, backupPath };
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") {
      return { config: { hooks: {} } };
    }
    throw new Error(`failed to load claude code settings from ${settingsPath}: ${error instanceof Error ? error.message : String(error)}`);
  }
}

async function readClaudeCodeSettings(settingsPath: string): Promise<{ config: ClaudeCodeSettings; exists: boolean }> {
  try {
    const rawText = await readFile(settingsPath, "utf8");
    const parsed = JSON.parse(rawText) as unknown;
    return {
      config: sanitizeClaudeCodeSettings(parsed),
      exists: true,
    };
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") {
      return {
        config: { hooks: {} },
        exists: false,
      };
    }
    throw new Error(`failed to read claude code settings from ${settingsPath}: ${error instanceof Error ? error.message : String(error)}`);
  }
}

async function pathExists(path: string): Promise<boolean> {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
}

/**
 * Return `groups` with every tokenjuice hook entry removed from each group's
 * `.hooks[]`. Unrelated hooks are preserved; groups that end up empty are
 * dropped. This is the surgical counterpart to a simple group-level filter:
 * dropping a whole group would silently delete any user-authored hook that
 * happens to share a matcher group with the tokenjuice entry.
 */
function pruneTokenjuiceHookEntries(groups: unknown[]): unknown[] {
  const pruned: unknown[] = [];
  for (const group of groups) {
    if (!isRecord(group) || !Array.isArray(group.hooks)) {
      pruned.push(group);
      continue;
    }
    const retainedHooks = group.hooks.filter((hook) => !isTokenjuiceClaudeCodeHookEntry(hook));
    if (retainedHooks.length === 0) {
      continue;
    }
    if (retainedHooks.length === group.hooks.length) {
      pruned.push(group);
      continue;
    }
    pruned.push({ ...group, hooks: retainedHooks });
  }
  return pruned;
}

export async function installClaudeCodeHook(
  settingsPath = getDefaultSettingsPath(),
  options: ClaudeCodeHookCommandOptions = {},
): Promise<InstallClaudeCodeHookResult> {
  const { config, backupPath } = await loadClaudeCodeSettings(settingsPath);
  const command = await buildClaudeCodeHookCommand(options);

  // Drop any legacy PostToolUse tokenjuice entries left behind by a prior
  // version of this host, but preserve unrelated hooks that happen to live in
  // the same matcher group. This is the silent migration path: rerunning
  // `tokenjuice install claude-code` after the PreToolUse pivot leaves the
  // user with the new hook and zero legacy entries, no separate uninstall
  // step required.
  if (Array.isArray(config.hooks.PostToolUse)) {
    const prunedPost = pruneTokenjuiceHookEntries(config.hooks.PostToolUse);
    if (prunedPost.length === 0) {
      delete config.hooks.PostToolUse;
    } else {
      config.hooks.PostToolUse = prunedPost;
    }
  }

  const preToolUse = Array.isArray(config.hooks.PreToolUse) ? config.hooks.PreToolUse : [];
  const retained = pruneTokenjuiceHookEntries(preToolUse);
  retained.push(createTokenjuiceClaudeCodeHook(command));
  config.hooks.PreToolUse = retained;

  await mkdir(dirname(settingsPath), { recursive: true });
  const tempPath = `${settingsPath}.tmp`;
  await writeFile(tempPath, `${JSON.stringify(config, null, 2)}\n`, "utf8");
  await rename(tempPath, settingsPath);

  return {
    settingsPath,
    ...(backupPath ? { backupPath } : {}),
    command,
  };
}

export async function doctorClaudeCodeHook(
  settingsPath = getDefaultSettingsPath(),
  options: ClaudeCodeHookCommandOptions = {},
): Promise<ClaudeCodeDoctorReport> {
  const expectedCommand = await buildClaudeCodeHookCommand(options);
  const fixCommand = getClaudeCodeFixCommand(options.local);
  const { config, exists } = await readClaudeCodeSettings(settingsPath);
  const detected = findTokenjuiceClaudeCodeHookCommand(config);

  if (!exists) {
    return {
      settingsPath,
      status: "warn",
      issues: ["claude code settings.json is missing"],
      fixCommand,
      expectedCommand,
      checkedPaths: [],
      missingPaths: [],
    };
  }

  if (!detected) {
    return {
      settingsPath,
      status: "warn",
      issues: ["tokenjuice PreToolUse hook is not installed for Claude Code"],
      fixCommand,
      expectedCommand,
      checkedPaths: [],
      missingPaths: [],
    };
  }

  // A legacy PostToolUse tokenjuice entry — wrong contract on Claude Code,
  // additive context only, not a token reduction. Surface as a warn with a
  // migration hint so users notice on the next `tokenjuice doctor` run.
  if (detected.hookEvent === "PostToolUse") {
    const legacyChecked = extractHookCommandPaths(detected.command);
    return {
      settingsPath,
      status: "warn",
      issues: [
        "legacy PostToolUse tokenjuice hook detected; rerun `tokenjuice install claude-code` to migrate to PreToolUse",
      ],
      fixCommand,
      expectedCommand,
      detectedCommand: detected.command,
      checkedPaths: legacyChecked,
      missingPaths: [],
    };
  }

  const detectedCommand = detected.command;
  const checkedPaths = extractHookCommandPaths(detectedCommand);
  const missingPaths: string[] = [];
  for (const path of checkedPaths) {
    if (!(await isExecutableFile(path)) && !(path.endsWith(".js") && await pathExists(path))) {
      missingPaths.push(path);
    }
  }

  const issues: string[] = [];
  if (detectedCommand !== expectedCommand) {
    if (detectedCommand.includes("/Cellar/")) {
      issues.push("configured Claude Code hook is pinned to a versioned Homebrew Cellar path");
    } else {
      issues.push("configured Claude Code hook command does not match the current recommended command");
    }
  }
  if (missingPaths.length > 0) {
    issues.push(`configured Claude Code hook points at missing path${missingPaths.length === 1 ? "" : "s"}`);
  }

  return {
    settingsPath,
    status: missingPaths.length > 0 ? "broken" : issues.length > 0 ? "warn" : "ok",
    issues,
    fixCommand,
    expectedCommand,
    detectedCommand,
    checkedPaths,
    missingPaths,
  };
}

/**
 * Deprecation shim. The legacy `claude-code-post-tool-use` hook contract
 * (additive `hookSpecificOutput.additionalContext`) does not substitute the
 * underlying `tool_result` on Claude Code, so the unreduced bash output still
 * reaches the model and the inline hint is appended on top — net additive,
 * not compacting. The host pivoted to a PreToolUse "wrap" entrypoint in this
 * version (`runClaudeCodePreToolUseHook`); this shim lets settings.json files
 * left over from the old install fail soft instead of erroring per Bash call
 * until the user reruns `tokenjuice install claude-code`.
 */
export async function runClaudeCodePostToolUseHook(_rawText: string): Promise<number> {
  process.stderr.write(
    "[tokenjuice] claude-code-post-tool-use is deprecated; rerun `tokenjuice install claude-code` to migrate to the PreToolUse hook.\n",
  );
  return 0;
}

type ClaudeCodePreToolUsePayload = {
  hook_event_name?: unknown;
  tool_name?: unknown;
  tool_input?: unknown;
};

type ClaudeCodeBashToolInput = {
  command?: unknown;
  description?: unknown;
  run_in_background?: unknown;
  timeout?: unknown;
} & Record<string, unknown>;

async function resolveClaudeCodeHostShell(): Promise<string | undefined> {
  return resolveHostShell([
    process.env.TOKENJUICE_CLAUDE_CODE_SHELL,
    process.env.SHELL,
    "bash",
    "sh",
  ]);
}

export async function runClaudeCodePreToolUseHook(rawText: string, wrapLauncher = "tokenjuice"): Promise<number> {
  let payload: ClaudeCodePreToolUsePayload;
  try {
    payload = JSON.parse(rawText) as ClaudeCodePreToolUsePayload;
  } catch {
    return 0;
  }

  if (payload.hook_event_name !== "PreToolUse") {
    return 0;
  }
  if (payload.tool_name !== "Bash" || !isRecord(payload.tool_input)) {
    return 0;
  }

  const toolInput = payload.tool_input as ClaudeCodeBashToolInput;
  const command = typeof toolInput.command === "string" ? toolInput.command : undefined;
  if (!command || !command.trim()) {
    return 0;
  }
  if (commandAlreadyWrapped(command)) {
    return 0;
  }

  const shellPath = await resolveClaudeCodeHostShell();
  if (!shellPath) {
    return 0;
  }

  const wrappedCommand = buildWrappedCommand({ wrapLauncher, shellPath, command, source: "claude-code" });

  const response = {
    hookSpecificOutput: {
      hookEventName: "PreToolUse",
      permissionDecision: "allow",
      updatedInput: {
        ...toolInput,
        command: wrappedCommand,
      },
    },
  };
  process.stdout.write(`${JSON.stringify(response)}\n`);
  return 0;
}
