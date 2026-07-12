function parseSupportedList(message: string): string[] {
  const match = message.match(/currently supports: (.+)$/);
  if (!match) {
    throw new Error(`unable to parse supported host list from: ${message}`);
  }
  return match[1]!.split(",").map((entry) => entry.trim());
}

export const INSTALL_TARGETS = parseSupportedList(
  "install currently supports: adal, aether, aictl, ai-memory-protocol, aider, agent-layer, agentinit, agentlink, agentloom, agents-cli, agents-md, agentsge, agentsmesh, amazon-q, amp, antigravity, anywhere-agents, augment, avante, baz, bito, blackbox, blocks, clawdbot, bob, builder, charlie, codex, claude-code, cline, codeant, codebuff, codegen, coder-agents, coderabbit, codebuddy, command-code, continue, copilot-agent, crush, cursor, deepagents, devin, dot-agents, docker-agent, droid, eca, elyra, firebase-studio, forgecode, gemini-cli, gitlab-duo, goose, greptile, grok-build, grok-cli, gptme, jean2, jetbrains-ai, junie, jules, leanctl, kimi, kiro, kilo, knowns, localcode, mcp-agent, mini-swe-agent, swe-agent, stagewise, mistral-vibe, mux, novakit, ona, openhands, open-interpreter, openwebui, pi, pi-go, opencode, plandex, qodo, qoder, replit, qwen-code, roo, rovo, ruler, tabby, tabnine, trae, uipath, vscode-copilot, warp, windsurf, copilot-cli, zed, zencoder",
);

export const UNINSTALL_TARGETS = parseSupportedList(
  "uninstall currently supports: adal, aether, aictl, ai-memory-protocol, aider, agent-layer, agentinit, agentlink, agentloom, agents-cli, agents-md, agentsge, agentsmesh, amazon-q, amp, antigravity, anywhere-agents, augment, avante, baz, bito, blackbox, blocks, clawdbot, bob, builder, charlie, codex, claude-code, cline, codeant, codebuff, codegen, coder-agents, coderabbit, codebuddy, command-code, continue, copilot-agent, crush, cursor, deepagents, devin, dot-agents, docker-agent, droid, eca, elyra, firebase-studio, forgecode, gitlab-duo, gemini-cli, goose, greptile, grok-build, grok-cli, gptme, jean2, jetbrains-ai, junie, jules, leanctl, kimi, kiro, kilo, knowns, localcode, mcp-agent, mini-swe-agent, swe-agent, stagewise, mistral-vibe, mux, novakit, ona, openhands, open-interpreter, openwebui, pi, pi-go, opencode, plandex, qodo, qoder, replit, qwen-code, roo, rovo, ruler, tabby, tabnine, trae, uipath, vscode-copilot, warp, windsurf, copilot-cli, zed, zencoder",
);

export const DOCTOR_TARGETS = [
  "hooks",
  ...INSTALL_TARGETS,
  "aimemoryprotocol",
  "agent-init",
  "agentsmd",
] as const;

export const TOP_LEVEL_COMMANDS = [
  "reduce",
  "reduce-json",
  "wrap",
  "install",
  "uninstall",
  "ls",
  "cat",
  "verify",
  "discover",
  "doctor",
  "stats",
  "codex-post-tool-use",
  "claude-code-pre-tool-use",
  "claude-code-post-tool-use",
  "cline-post-tool-use",
  "codebuddy-pre-tool-use",
  "command-code-post-tool-use",
  "cursor-pre-tool-use",
  "devin-pre-tool-use",
  "gemini-cli-after-tool",
  "grok-cli-post-tool-use",
  "kimi-post-tool-use",
  "mux-post-tool-use",
  "openhands-post-tool-use",
  "qwen-code-post-tool-use",
  "vscode-copilot-pre-tool-use",
  "copilot-agent-post-tool-use",
  "copilot-cli-post-tool-use",
  "droid-post-tool-use",
] as const;

export const HOOK_DISPATCH_COMMANDS = [
  { command: "codex-post-tool-use", exportName: "runCodexPostToolUseHook", module: "../../src/hosts/codex/index.js" },
  {
    command: "claude-code-pre-tool-use",
    exportName: "runClaudeCodePreToolUseHook",
    module: "../../src/hosts/claude-code/index.js",
  },
  {
    command: "claude-code-post-tool-use",
    exportName: "runClaudeCodePostToolUseHook",
    module: "../../src/hosts/claude-code/index.js",
  },
  { command: "cline-post-tool-use", exportName: "runClinePostToolUseHook", module: "../../src/hosts/cline/index.js" },
  {
    command: "codebuddy-pre-tool-use",
    exportName: "runCodeBuddyPreToolUseHook",
    module: "../../src/hosts/codebuddy/index.js",
  },
  {
    command: "command-code-post-tool-use",
    exportName: "runCommandCodePostToolUseHook",
    module: "../../src/hosts/command-code/index.js",
  },
  { command: "cursor-pre-tool-use", exportName: "runCursorPreToolUseHook", module: "../../src/hosts/cursor/index.js" },
  { command: "devin-pre-tool-use", exportName: "runDevinPreToolUseHook", module: "../../src/hosts/devin/index.js" },
  {
    command: "gemini-cli-after-tool",
    exportName: "runGeminiCliAfterToolHook",
    module: "../../src/hosts/gemini-cli/index.js",
  },
  {
    command: "grok-cli-post-tool-use",
    exportName: "runGrokCliPostToolUseHook",
    module: "../../src/hosts/grok-cli/index.js",
  },
  { command: "kimi-post-tool-use", exportName: "runKimiPostToolUseHook", module: "../../src/hosts/kimi/index.js" },
  { command: "mux-post-tool-use", exportName: "runMuxPostToolUseHook", module: "../../src/hosts/mux/index.js" },
  {
    command: "openhands-post-tool-use",
    exportName: "runOpenHandsPostToolUseHook",
    module: "../../src/hosts/openhands/index.js",
  },
  {
    command: "qwen-code-post-tool-use",
    exportName: "runQwenCodePostToolUseHook",
    module: "../../src/hosts/qwen-code/index.js",
  },
  {
    command: "vscode-copilot-pre-tool-use",
    exportName: "runVscodeCopilotPreToolUseHook",
    module: "../../src/hosts/vscode-copilot/index.js",
  },
  {
    command: "copilot-agent-post-tool-use",
    exportName: "runCopilotAgentPostToolUseHook",
    module: "../../src/hosts/copilot-agent/index.js",
  },
  {
    command: "copilot-cli-post-tool-use",
    exportName: "runCopilotCliPostToolUseHook",
    module: "../../src/hosts/copilot-cli/index.js",
  },
  { command: "droid-post-tool-use", exportName: "runDroidPostToolUseHook", module: "../../src/hosts/droid/index.js" },
] as const;
