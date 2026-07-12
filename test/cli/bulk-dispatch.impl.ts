import { vi, describe, expect, it } from "vitest";

const stub = { path: "/tmp/tokenjuice-stub" };

vi.mock("../../src/hosts/adal/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/adal/index.js")>();
  return {
    ...actual,
    doctorAdalInstructions: vi.fn<() => Promise<typeof stub>>(async () => stub),
    installAdalInstructions: vi.fn<() => Promise<typeof stub>>(async () => stub),
    uninstallAdalInstructions: vi.fn<() => Promise<typeof stub>>(async () => stub),
  };
});

vi.mock("../../src/hosts/aether/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/aether/index.js")>();
  return {
    ...actual,
    doctorAetherPrompt: vi.fn<() => Promise<typeof stub>>(async () => stub),
    installAetherPrompt: vi.fn<() => Promise<typeof stub>>(async () => stub),
    uninstallAetherPrompt: vi.fn<() => Promise<typeof stub>>(async () => stub),
  };
});

vi.mock("../../src/hosts/agent-layer/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/agent-layer/index.js")>();
  return {
    ...actual,
    doctorAgentLayerInstructions: vi.fn<() => Promise<typeof stub>>(async () => stub),
    installAgentLayerInstructions: vi.fn<() => Promise<typeof stub>>(async () => stub),
    uninstallAgentLayerInstructions: vi.fn<() => Promise<typeof stub>>(async () => stub),
  };
});

vi.mock("../../src/hosts/agentinit/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/agentinit/index.js")>();
  return {
    ...actual,
    doctorAgentInitInstructions: vi.fn<() => Promise<typeof stub>>(async () => stub),
    installAgentInitInstructions: vi.fn<() => Promise<typeof stub>>(async () => stub),
    uninstallAgentInitInstructions: vi.fn<() => Promise<typeof stub>>(async () => stub),
  };
});

vi.mock("../../src/hosts/agentlink/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/agentlink/index.js")>();
  return {
    ...actual,
    doctorAgentlinkInstructions: vi.fn<() => Promise<typeof stub>>(async () => stub),
    installAgentlinkInstructions: vi.fn<() => Promise<typeof stub>>(async () => stub),
    uninstallAgentlinkInstructions: vi.fn<() => Promise<typeof stub>>(async () => stub),
  };
});

vi.mock("../../src/hosts/agentloom/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/agentloom/index.js")>();
  return {
    ...actual,
    doctorAgentloomRule: vi.fn<() => Promise<typeof stub>>(async () => stub),
    installAgentloomRule: vi.fn<() => Promise<typeof stub>>(async () => stub),
    uninstallAgentloomRule: vi.fn<() => Promise<typeof stub>>(async () => stub),
  };
});

vi.mock("../../src/hosts/agents-cli/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/agents-cli/index.js")>();
  return {
    ...actual,
    doctorAgentsCliMemory: vi.fn<() => Promise<typeof stub>>(async () => stub),
    installAgentsCliMemory: vi.fn<() => Promise<typeof stub>>(async () => stub),
    uninstallAgentsCliMemory: vi.fn<() => Promise<typeof stub>>(async () => stub),
  };
});

vi.mock("../../src/hosts/agents-md/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/agents-md/index.js")>();
  return {
    ...actual,
    doctorAgentsMdInstructions: vi.fn<() => Promise<typeof stub>>(async () => stub),
    installAgentsMdInstructions: vi.fn<() => Promise<typeof stub>>(async () => stub),
    uninstallAgentsMdInstructions: vi.fn<() => Promise<typeof stub>>(async () => stub),
  };
});

vi.mock("../../src/hosts/agentsge/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/agentsge/index.js")>();
  return {
    ...actual,
    doctorAgentsGeRule: vi.fn<() => Promise<typeof stub>>(async () => stub),
    installAgentsGeRule: vi.fn<() => Promise<typeof stub>>(async () => stub),
    uninstallAgentsGeRule: vi.fn<() => Promise<typeof stub>>(async () => stub),
  };
});

vi.mock("../../src/hosts/agentsmesh/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/agentsmesh/index.js")>();
  return {
    ...actual,
    doctorAgentsMeshRule: vi.fn<() => Promise<typeof stub>>(async () => stub),
    installAgentsMeshRule: vi.fn<() => Promise<typeof stub>>(async () => stub),
    uninstallAgentsMeshRule: vi.fn<() => Promise<typeof stub>>(async () => stub),
  };
});

vi.mock("../../src/hosts/ai-memory-protocol/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/ai-memory-protocol/index.js")>();
  return {
    ...actual,
    doctorAiMemoryProtocolMemory: vi.fn<() => Promise<typeof stub>>(async () => stub),
    installAiMemoryProtocolMemory: vi.fn<() => Promise<typeof stub>>(async () => stub),
    uninstallAiMemoryProtocolMemory: vi.fn<() => Promise<typeof stub>>(async () => stub),
  };
});

vi.mock("../../src/hosts/aictl/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/aictl/index.js")>();
  return {
    ...actual,
    doctorAictlInstructions: vi.fn<() => Promise<typeof stub>>(async () => stub),
    installAictlInstructions: vi.fn<() => Promise<typeof stub>>(async () => stub),
    uninstallAictlInstructions: vi.fn<() => Promise<typeof stub>>(async () => stub),
  };
});

vi.mock("../../src/hosts/aider/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/aider/index.js")>();
  return {
    ...actual,
    doctorAiderConvention: vi.fn<() => Promise<typeof stub>>(async () => stub),
    installAiderConvention: vi.fn<() => Promise<typeof stub>>(async () => stub),
    uninstallAiderConvention: vi.fn<() => Promise<typeof stub>>(async () => stub),
  };
});

vi.mock("../../src/hosts/amazon-q/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/amazon-q/index.js")>();
  return {
    ...actual,
    doctorAmazonQRule: vi.fn<() => Promise<typeof stub>>(async () => stub),
    installAmazonQRule: vi.fn<() => Promise<typeof stub>>(async () => stub),
    uninstallAmazonQRule: vi.fn<() => Promise<typeof stub>>(async () => stub),
  };
});

vi.mock("../../src/hosts/amp/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/amp/index.js")>();
  return {
    ...actual,
    doctorAmpInstructions: vi.fn<() => Promise<typeof stub>>(async () => stub),
    installAmpInstructions: vi.fn<() => Promise<typeof stub>>(async () => stub),
    uninstallAmpInstructions: vi.fn<() => Promise<typeof stub>>(async () => stub),
  };
});

vi.mock("../../src/hosts/antigravity/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/antigravity/index.js")>();
  return {
    ...actual,
    doctorAntigravityRule: vi.fn<() => Promise<typeof stub>>(async () => stub),
    installAntigravityRule: vi.fn<() => Promise<typeof stub>>(async () => stub),
    uninstallAntigravityRule: vi.fn<() => Promise<typeof stub>>(async () => stub),
  };
});

vi.mock("../../src/hosts/anywhere-agents/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/anywhere-agents/index.js")>();
  return {
    ...actual,
    doctorAnywhereAgentsInstructions: vi.fn<() => Promise<typeof stub>>(async () => stub),
    installAnywhereAgentsInstructions: vi.fn<() => Promise<typeof stub>>(async () => stub),
    uninstallAnywhereAgentsInstructions: vi.fn<() => Promise<typeof stub>>(async () => stub),
  };
});

vi.mock("../../src/hosts/augment/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/augment/index.js")>();
  return {
    ...actual,
    doctorAugmentRule: vi.fn<() => Promise<typeof stub>>(async () => stub),
    installAugmentRule: vi.fn<() => Promise<typeof stub>>(async () => stub),
    uninstallAugmentRule: vi.fn<() => Promise<typeof stub>>(async () => stub),
  };
});

vi.mock("../../src/hosts/avante/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/avante/index.js")>();
  return {
    ...actual,
    doctorAvanteInstructions: vi.fn<() => Promise<typeof stub>>(async () => stub),
    installAvanteInstructions: vi.fn<() => Promise<typeof stub>>(async () => stub),
    uninstallAvanteInstructions: vi.fn<() => Promise<typeof stub>>(async () => stub),
  };
});

vi.mock("../../src/hosts/baz/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/baz/index.js")>();
  return {
    ...actual,
    doctorBazSkill: vi.fn<() => Promise<typeof stub>>(async () => stub),
    installBazSkill: vi.fn<() => Promise<typeof stub>>(async () => stub),
    uninstallBazSkill: vi.fn<() => Promise<typeof stub>>(async () => stub),
  };
});

vi.mock("../../src/hosts/bito/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/bito/index.js")>();
  return {
    ...actual,
    doctorBitoGuidelines: vi.fn<() => Promise<typeof stub>>(async () => stub),
    installBitoGuidelines: vi.fn<() => Promise<typeof stub>>(async () => stub),
    uninstallBitoGuidelines: vi.fn<() => Promise<typeof stub>>(async () => stub),
  };
});

vi.mock("../../src/hosts/blackbox/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/blackbox/index.js")>();
  return {
    ...actual,
    doctorBlackboxSkill: vi.fn<() => Promise<typeof stub>>(async () => stub),
    installBlackboxSkill: vi.fn<() => Promise<typeof stub>>(async () => stub),
    uninstallBlackboxSkill: vi.fn<() => Promise<typeof stub>>(async () => stub),
  };
});

vi.mock("../../src/hosts/blocks/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/blocks/index.js")>();
  return {
    ...actual,
    doctorBlocksSkill: vi.fn<() => Promise<typeof stub>>(async () => stub),
    installBlocksSkill: vi.fn<() => Promise<typeof stub>>(async () => stub),
    uninstallBlocksSkill: vi.fn<() => Promise<typeof stub>>(async () => stub),
  };
});

vi.mock("../../src/hosts/bob/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/bob/index.js")>();
  return {
    ...actual,
    doctorBobInstructions: vi.fn<() => Promise<typeof stub>>(async () => stub),
    installBobInstructions: vi.fn<() => Promise<typeof stub>>(async () => stub),
    uninstallBobInstructions: vi.fn<() => Promise<typeof stub>>(async () => stub),
  };
});

vi.mock("../../src/hosts/builder/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/builder/index.js")>();
  return {
    ...actual,
    doctorBuilderRule: vi.fn<() => Promise<typeof stub>>(async () => stub),
    installBuilderRule: vi.fn<() => Promise<typeof stub>>(async () => stub),
    uninstallBuilderRule: vi.fn<() => Promise<typeof stub>>(async () => stub),
  };
});

vi.mock("../../src/hosts/charlie/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/charlie/index.js")>();
  return {
    ...actual,
    doctorCharlieInstructions: vi.fn<() => Promise<typeof stub>>(async () => stub),
    installCharlieInstructions: vi.fn<() => Promise<typeof stub>>(async () => stub),
    uninstallCharlieInstructions: vi.fn<() => Promise<typeof stub>>(async () => stub),
  };
});

vi.mock("../../src/hosts/claude-code/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/claude-code/index.js")>();
  return {
    ...actual,
    doctorClaudeCodeHook: vi.fn<() => Promise<typeof stub>>(async () => stub),
    installClaudeCodeHook: vi.fn<() => Promise<typeof stub>>(async () => stub),
    runClaudeCodePostToolUseHook: vi.fn<() => Promise<number>>(async () => 0),
    runClaudeCodePreToolUseHook: vi.fn<() => Promise<number>>(async () => 0),
    uninstallClaudeCodeHook: vi.fn<() => Promise<typeof stub>>(async () => stub),
  };
});

vi.mock("../../src/hosts/clawdbot/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/clawdbot/index.js")>();
  return {
    ...actual,
    doctorClawdbotSkill: vi.fn<() => Promise<typeof stub>>(async () => stub),
    installClawdbotSkill: vi.fn<() => Promise<typeof stub>>(async () => stub),
    uninstallClawdbotSkill: vi.fn<() => Promise<typeof stub>>(async () => stub),
  };
});

vi.mock("../../src/hosts/cline/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/cline/index.js")>();
  return {
    ...actual,
    doctorClineHook: vi.fn<() => Promise<typeof stub>>(async () => stub),
    installClineHook: vi.fn<() => Promise<typeof stub>>(async () => stub),
    runClinePostToolUseHook: vi.fn<() => Promise<number>>(async () => 0),
    uninstallClineHook: vi.fn<() => Promise<typeof stub>>(async () => stub),
  };
});

vi.mock("../../src/hosts/codeant/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/codeant/index.js")>();
  return {
    ...actual,
    doctorCodeAntInstructions: vi.fn<() => Promise<typeof stub>>(async () => stub),
    installCodeAntInstructions: vi.fn<() => Promise<typeof stub>>(async () => stub),
    uninstallCodeAntInstructions: vi.fn<() => Promise<typeof stub>>(async () => stub),
  };
});

vi.mock("../../src/hosts/codebuddy/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/codebuddy/index.js")>();
  return {
    ...actual,
    doctorCodeBuddyHook: vi.fn<() => Promise<typeof stub>>(async () => stub),
    installCodeBuddyHook: vi.fn<() => Promise<typeof stub>>(async () => stub),
    runCodeBuddyPreToolUseHook: vi.fn<() => Promise<number>>(async () => 0),
    uninstallCodeBuddyHook: vi.fn<() => Promise<typeof stub>>(async () => stub),
  };
});

vi.mock("../../src/hosts/codebuff/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/codebuff/index.js")>();
  return {
    ...actual,
    doctorCodebuffInstructions: vi.fn<() => Promise<typeof stub>>(async () => stub),
    installCodebuffInstructions: vi.fn<() => Promise<typeof stub>>(async () => stub),
    uninstallCodebuffInstructions: vi.fn<() => Promise<typeof stub>>(async () => stub),
  };
});

vi.mock("../../src/hosts/codegen/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/codegen/index.js")>();
  return {
    ...actual,
    doctorCodegenInstructions: vi.fn<() => Promise<typeof stub>>(async () => stub),
    installCodegenInstructions: vi.fn<() => Promise<typeof stub>>(async () => stub),
    uninstallCodegenInstructions: vi.fn<() => Promise<typeof stub>>(async () => stub),
  };
});

vi.mock("../../src/hosts/coder-agents/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/coder-agents/index.js")>();
  return {
    ...actual,
    doctorCoderAgentsSkill: vi.fn<() => Promise<typeof stub>>(async () => stub),
    installCoderAgentsSkill: vi.fn<() => Promise<typeof stub>>(async () => stub),
    uninstallCoderAgentsSkill: vi.fn<() => Promise<typeof stub>>(async () => stub),
  };
});

vi.mock("../../src/hosts/coderabbit/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/coderabbit/index.js")>();
  return {
    ...actual,
    doctorCodeRabbitConfig: vi.fn<() => Promise<typeof stub>>(async () => stub),
    installCodeRabbitConfig: vi.fn<() => Promise<typeof stub>>(async () => stub),
    uninstallCodeRabbitConfig: vi.fn<() => Promise<typeof stub>>(async () => stub),
  };
});

vi.mock("../../src/hosts/codex/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/codex/index.js")>();
  return {
    ...actual,
    doctorCodexHook: vi.fn<() => Promise<typeof stub>>(async () => stub),
    installCodexHook: vi.fn<() => Promise<typeof stub>>(async () => stub),
    runCodexPostToolUseHook: vi.fn<() => Promise<number>>(async () => 0),
    uninstallCodexHook: vi.fn<() => Promise<typeof stub>>(async () => stub),
  };
});

vi.mock("../../src/hosts/command-code/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/command-code/index.js")>();
  return {
    ...actual,
    doctorCommandCodeHook: vi.fn<() => Promise<typeof stub>>(async () => stub),
    installCommandCodeHook: vi.fn<() => Promise<typeof stub>>(async () => stub),
    runCommandCodePostToolUseHook: vi.fn<() => Promise<number>>(async () => 0),
    uninstallCommandCodeHook: vi.fn<() => Promise<typeof stub>>(async () => stub),
  };
});

vi.mock("../../src/hosts/continue/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/continue/index.js")>();
  return {
    ...actual,
    doctorContinueRule: vi.fn<() => Promise<typeof stub>>(async () => stub),
    installContinueRule: vi.fn<() => Promise<typeof stub>>(async () => stub),
    uninstallContinueRule: vi.fn<() => Promise<typeof stub>>(async () => stub),
  };
});

vi.mock("../../src/hosts/copilot-agent/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/copilot-agent/index.js")>();
  return {
    ...actual,
    doctorCopilotAgentHook: vi.fn<() => Promise<typeof stub>>(async () => stub),
    installCopilotAgentHook: vi.fn<() => Promise<typeof stub>>(async () => stub),
    runCopilotAgentPostToolUseHook: vi.fn<() => Promise<number>>(async () => 0),
    uninstallCopilotAgentHook: vi.fn<() => Promise<typeof stub>>(async () => stub),
  };
});

vi.mock("../../src/hosts/copilot-cli/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/copilot-cli/index.js")>();
  return {
    ...actual,
    doctorCopilotCliHook: vi.fn<() => Promise<typeof stub>>(async () => stub),
    installCopilotCliHook: vi.fn<() => Promise<typeof stub>>(async () => stub),
    runCopilotCliPostToolUseHook: vi.fn<() => Promise<number>>(async () => 0),
    uninstallCopilotCliHook: vi.fn<() => Promise<typeof stub>>(async () => stub),
  };
});

vi.mock("../../src/hosts/crush/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/crush/index.js")>();
  return {
    ...actual,
    doctorCrushSkill: vi.fn<() => Promise<typeof stub>>(async () => stub),
    installCrushSkill: vi.fn<() => Promise<typeof stub>>(async () => stub),
    uninstallCrushSkill: vi.fn<() => Promise<typeof stub>>(async () => stub),
  };
});

vi.mock("../../src/hosts/cursor/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/cursor/index.js")>();
  return {
    ...actual,
    doctorCursorHook: vi.fn<() => Promise<typeof stub>>(async () => stub),
    installCursorHook: vi.fn<() => Promise<typeof stub>>(async () => stub),
    runCursorPreToolUseHook: vi.fn<() => Promise<number>>(async () => 0),
    uninstallCursorHook: vi.fn<() => Promise<typeof stub>>(async () => stub),
  };
});

vi.mock("../../src/hosts/deepagents/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/deepagents/index.js")>();
  return {
    ...actual,
    doctorDeepAgentsInstructions: vi.fn<() => Promise<typeof stub>>(async () => stub),
    installDeepAgentsInstructions: vi.fn<() => Promise<typeof stub>>(async () => stub),
    uninstallDeepAgentsInstructions: vi.fn<() => Promise<typeof stub>>(async () => stub),
  };
});

vi.mock("../../src/hosts/devin/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/devin/index.js")>();
  return {
    ...actual,
    doctorDevinHook: vi.fn<() => Promise<typeof stub>>(async () => stub),
    installDevinHook: vi.fn<() => Promise<typeof stub>>(async () => stub),
    runDevinPreToolUseHook: vi.fn<() => Promise<number>>(async () => 0),
    uninstallDevinHook: vi.fn<() => Promise<typeof stub>>(async () => stub),
  };
});

vi.mock("../../src/hosts/docker-agent/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/docker-agent/index.js")>();
  return {
    ...actual,
    doctorDockerAgentPrompt: vi.fn<() => Promise<typeof stub>>(async () => stub),
    installDockerAgentPrompt: vi.fn<() => Promise<typeof stub>>(async () => stub),
    uninstallDockerAgentPrompt: vi.fn<() => Promise<typeof stub>>(async () => stub),
  };
});

vi.mock("../../src/hosts/dot-agents/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/dot-agents/index.js")>();
  return {
    ...actual,
    doctorDotAgentsRule: vi.fn<() => Promise<typeof stub>>(async () => stub),
    installDotAgentsRule: vi.fn<() => Promise<typeof stub>>(async () => stub),
    uninstallDotAgentsRule: vi.fn<() => Promise<typeof stub>>(async () => stub),
  };
});

vi.mock("../../src/hosts/droid/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/droid/index.js")>();
  return {
    ...actual,
    doctorDroidHook: vi.fn<() => Promise<typeof stub>>(async () => stub),
    installDroidHook: vi.fn<() => Promise<typeof stub>>(async () => stub),
    runDroidPostToolUseHook: vi.fn<() => Promise<number>>(async () => 0),
    uninstallDroidHook: vi.fn<() => Promise<typeof stub>>(async () => stub),
  };
});

vi.mock("../../src/hosts/eca/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/eca/index.js")>();
  return {
    ...actual,
    doctorEcaSkill: vi.fn<() => Promise<typeof stub>>(async () => stub),
    installEcaSkill: vi.fn<() => Promise<typeof stub>>(async () => stub),
    uninstallEcaSkill: vi.fn<() => Promise<typeof stub>>(async () => stub),
  };
});

vi.mock("../../src/hosts/elyra/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/elyra/index.js")>();
  return {
    ...actual,
    doctorElyraSkill: vi.fn<() => Promise<typeof stub>>(async () => stub),
    installElyraSkill: vi.fn<() => Promise<typeof stub>>(async () => stub),
    uninstallElyraSkill: vi.fn<() => Promise<typeof stub>>(async () => stub),
  };
});

vi.mock("../../src/hosts/firebase-studio/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/firebase-studio/index.js")>();
  return {
    ...actual,
    doctorFirebaseStudioRule: vi.fn<() => Promise<typeof stub>>(async () => stub),
    installFirebaseStudioRule: vi.fn<() => Promise<typeof stub>>(async () => stub),
    uninstallFirebaseStudioRule: vi.fn<() => Promise<typeof stub>>(async () => stub),
  };
});

vi.mock("../../src/hosts/forgecode/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/forgecode/index.js")>();
  return {
    ...actual,
    doctorForgeCodeInstructions: vi.fn<() => Promise<typeof stub>>(async () => stub),
    installForgeCodeInstructions: vi.fn<() => Promise<typeof stub>>(async () => stub),
    uninstallForgeCodeInstructions: vi.fn<() => Promise<typeof stub>>(async () => stub),
  };
});

vi.mock("../../src/hosts/gemini-cli/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/gemini-cli/index.js")>();
  return {
    ...actual,
    doctorGeminiCliHook: vi.fn<() => Promise<typeof stub>>(async () => stub),
    installGeminiCliHook: vi.fn<() => Promise<typeof stub>>(async () => stub),
    runGeminiCliAfterToolHook: vi.fn<() => Promise<number>>(async () => 0),
    uninstallGeminiCliHook: vi.fn<() => Promise<typeof stub>>(async () => stub),
  };
});

vi.mock("../../src/hosts/gitlab-duo/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/gitlab-duo/index.js")>();
  return {
    ...actual,
    doctorGitLabDuoRule: vi.fn<() => Promise<typeof stub>>(async () => stub),
    installGitLabDuoRule: vi.fn<() => Promise<typeof stub>>(async () => stub),
    uninstallGitLabDuoRule: vi.fn<() => Promise<typeof stub>>(async () => stub),
  };
});

vi.mock("../../src/hosts/goose/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/goose/index.js")>();
  return {
    ...actual,
    doctorGooseHints: vi.fn<() => Promise<typeof stub>>(async () => stub),
    installGooseHints: vi.fn<() => Promise<typeof stub>>(async () => stub),
    uninstallGooseHints: vi.fn<() => Promise<typeof stub>>(async () => stub),
  };
});

vi.mock("../../src/hosts/gptme/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/gptme/index.js")>();
  return {
    ...actual,
    doctorGptmeInstructions: vi.fn<() => Promise<typeof stub>>(async () => stub),
    installGptmeInstructions: vi.fn<() => Promise<typeof stub>>(async () => stub),
    uninstallGptmeInstructions: vi.fn<() => Promise<typeof stub>>(async () => stub),
  };
});

vi.mock("../../src/hosts/greptile/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/greptile/index.js")>();
  return {
    ...actual,
    doctorGreptileRule: vi.fn<() => Promise<typeof stub>>(async () => stub),
    installGreptileRule: vi.fn<() => Promise<typeof stub>>(async () => stub),
    uninstallGreptileRule: vi.fn<() => Promise<typeof stub>>(async () => stub),
  };
});

vi.mock("../../src/hosts/grok-build/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/grok-build/index.js")>();
  return {
    ...actual,
    doctorGrokBuildInstructions: vi.fn<() => Promise<typeof stub>>(async () => stub),
    installGrokBuildInstructions: vi.fn<() => Promise<typeof stub>>(async () => stub),
    uninstallGrokBuildInstructions: vi.fn<() => Promise<typeof stub>>(async () => stub),
  };
});

vi.mock("../../src/hosts/grok-cli/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/grok-cli/index.js")>();
  return {
    ...actual,
    doctorGrokCliHook: vi.fn<() => Promise<typeof stub>>(async () => stub),
    installGrokCliHook: vi.fn<() => Promise<typeof stub>>(async () => stub),
    runGrokCliPostToolUseHook: vi.fn<() => Promise<number>>(async () => 0),
    uninstallGrokCliHook: vi.fn<() => Promise<typeof stub>>(async () => stub),
  };
});

vi.mock("../../src/hosts/jean2/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/jean2/index.js")>();
  return {
    ...actual,
    doctorJean2Instructions: vi.fn<() => Promise<typeof stub>>(async () => stub),
    installJean2Instructions: vi.fn<() => Promise<typeof stub>>(async () => stub),
    uninstallJean2Instructions: vi.fn<() => Promise<typeof stub>>(async () => stub),
  };
});

vi.mock("../../src/hosts/jetbrains-ai/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/jetbrains-ai/index.js")>();
  return {
    ...actual,
    doctorJetBrainsAiRule: vi.fn<() => Promise<typeof stub>>(async () => stub),
    installJetBrainsAiRule: vi.fn<() => Promise<typeof stub>>(async () => stub),
    uninstallJetBrainsAiRule: vi.fn<() => Promise<typeof stub>>(async () => stub),
  };
});

vi.mock("../../src/hosts/jules/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/jules/index.js")>();
  return {
    ...actual,
    doctorJulesInstructions: vi.fn<() => Promise<typeof stub>>(async () => stub),
    installJulesInstructions: vi.fn<() => Promise<typeof stub>>(async () => stub),
    uninstallJulesInstructions: vi.fn<() => Promise<typeof stub>>(async () => stub),
  };
});

vi.mock("../../src/hosts/junie/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/junie/index.js")>();
  return {
    ...actual,
    doctorJunieInstructions: vi.fn<() => Promise<typeof stub>>(async () => stub),
    installJunieInstructions: vi.fn<() => Promise<typeof stub>>(async () => stub),
    uninstallJunieInstructions: vi.fn<() => Promise<typeof stub>>(async () => stub),
  };
});

vi.mock("../../src/hosts/kilo/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/kilo/index.js")>();
  return {
    ...actual,
    doctorKiloRule: vi.fn<() => Promise<typeof stub>>(async () => stub),
    installKiloRule: vi.fn<() => Promise<typeof stub>>(async () => stub),
    uninstallKiloRule: vi.fn<() => Promise<typeof stub>>(async () => stub),
  };
});

vi.mock("../../src/hosts/kimi/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/kimi/index.js")>();
  return {
    ...actual,
    doctorKimiHook: vi.fn<() => Promise<typeof stub>>(async () => stub),
    installKimiHook: vi.fn<() => Promise<typeof stub>>(async () => stub),
    runKimiPostToolUseHook: vi.fn<() => Promise<number>>(async () => 0),
    uninstallKimiHook: vi.fn<() => Promise<typeof stub>>(async () => stub),
  };
});

vi.mock("../../src/hosts/kiro/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/kiro/index.js")>();
  return {
    ...actual,
    doctorKiroSteering: vi.fn<() => Promise<typeof stub>>(async () => stub),
    installKiroSteering: vi.fn<() => Promise<typeof stub>>(async () => stub),
    uninstallKiroSteering: vi.fn<() => Promise<typeof stub>>(async () => stub),
  };
});

vi.mock("../../src/hosts/knowns/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/knowns/index.js")>();
  return {
    ...actual,
    doctorKnownsInstructions: vi.fn<() => Promise<typeof stub>>(async () => stub),
    installKnownsInstructions: vi.fn<() => Promise<typeof stub>>(async () => stub),
    uninstallKnownsInstructions: vi.fn<() => Promise<typeof stub>>(async () => stub),
  };
});

vi.mock("../../src/hosts/leanctl/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/leanctl/index.js")>();
  return {
    ...actual,
    doctorLeanCtlInstructions: vi.fn<() => Promise<typeof stub>>(async () => stub),
    installLeanCtlInstructions: vi.fn<() => Promise<typeof stub>>(async () => stub),
    uninstallLeanCtlInstructions: vi.fn<() => Promise<typeof stub>>(async () => stub),
  };
});

vi.mock("../../src/hosts/localcode/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/localcode/index.js")>();
  return {
    ...actual,
    doctorLocalCodePlugin: vi.fn<() => Promise<typeof stub>>(async () => stub),
    installLocalCodePlugin: vi.fn<() => Promise<typeof stub>>(async () => stub),
    uninstallLocalCodePlugin: vi.fn<() => Promise<typeof stub>>(async () => stub),
  };
});

vi.mock("../../src/hosts/mcp-agent/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/mcp-agent/index.js")>();
  return {
    ...actual,
    doctorMcpAgentDefinition: vi.fn<() => Promise<typeof stub>>(async () => stub),
    installMcpAgentDefinition: vi.fn<() => Promise<typeof stub>>(async () => stub),
    uninstallMcpAgentDefinition: vi.fn<() => Promise<typeof stub>>(async () => stub),
  };
});

vi.mock("../../src/hosts/mini-swe-agent/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/mini-swe-agent/index.js")>();
  return {
    ...actual,
    doctorMiniSweAgentConfig: vi.fn<() => Promise<typeof stub>>(async () => stub),
    installMiniSweAgentConfig: vi.fn<() => Promise<typeof stub>>(async () => stub),
    uninstallMiniSweAgentConfig: vi.fn<() => Promise<typeof stub>>(async () => stub),
  };
});

vi.mock("../../src/hosts/mistral-vibe/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/mistral-vibe/index.js")>();
  return {
    ...actual,
    doctorMistralVibeInstructions: vi.fn<() => Promise<typeof stub>>(async () => stub),
    installMistralVibeInstructions: vi.fn<() => Promise<typeof stub>>(async () => stub),
    uninstallMistralVibeInstructions: vi.fn<() => Promise<typeof stub>>(async () => stub),
  };
});

vi.mock("../../src/hosts/mux/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/mux/index.js")>();
  return {
    ...actual,
    doctorMuxHook: vi.fn<() => Promise<typeof stub>>(async () => stub),
    installMuxHook: vi.fn<() => Promise<typeof stub>>(async () => stub),
    runMuxPostToolUseHook: vi.fn<() => Promise<number>>(async () => 0),
    uninstallMuxHook: vi.fn<() => Promise<typeof stub>>(async () => stub),
  };
});

vi.mock("../../src/hosts/novakit/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/novakit/index.js")>();
  return {
    ...actual,
    doctorNovaKitInstructions: vi.fn<() => Promise<typeof stub>>(async () => stub),
    installNovaKitInstructions: vi.fn<() => Promise<typeof stub>>(async () => stub),
    uninstallNovaKitInstructions: vi.fn<() => Promise<typeof stub>>(async () => stub),
  };
});

vi.mock("../../src/hosts/ona/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/ona/index.js")>();
  return {
    ...actual,
    doctorOnaSkill: vi.fn<() => Promise<typeof stub>>(async () => stub),
    installOnaSkill: vi.fn<() => Promise<typeof stub>>(async () => stub),
    uninstallOnaSkill: vi.fn<() => Promise<typeof stub>>(async () => stub),
  };
});

vi.mock("../../src/hosts/open-interpreter/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/open-interpreter/index.js")>();
  return {
    ...actual,
    doctorOpenInterpreterInstructions: vi.fn<() => Promise<typeof stub>>(async () => stub),
    installOpenInterpreterInstructions: vi.fn<() => Promise<typeof stub>>(async () => stub),
    uninstallOpenInterpreterInstructions: vi.fn<() => Promise<typeof stub>>(async () => stub),
  };
});

vi.mock("../../src/hosts/opencode/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/opencode/index.js")>();
  return {
    ...actual,
    doctorOpenCodeExtension: vi.fn<() => Promise<typeof stub>>(async () => stub),
    installOpenCodeExtension: vi.fn<() => Promise<typeof stub>>(async () => stub),
    uninstallOpenCodeExtension: vi.fn<() => Promise<typeof stub>>(async () => stub),
  };
});

vi.mock("../../src/hosts/openhands/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/openhands/index.js")>();
  return {
    ...actual,
    doctorOpenHandsHook: vi.fn<() => Promise<typeof stub>>(async () => stub),
    installOpenHandsHook: vi.fn<() => Promise<typeof stub>>(async () => stub),
    runOpenHandsPostToolUseHook: vi.fn<() => Promise<number>>(async () => 0),
    uninstallOpenHandsHook: vi.fn<() => Promise<typeof stub>>(async () => stub),
  };
});

vi.mock("../../src/hosts/openwebui/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/openwebui/index.js")>();
  return {
    ...actual,
    doctorOpenWebUITool: vi.fn<() => Promise<typeof stub>>(async () => stub),
    installOpenWebUITool: vi.fn<() => Promise<typeof stub>>(async () => stub),
    uninstallOpenWebUITool: vi.fn<() => Promise<typeof stub>>(async () => stub),
  };
});

vi.mock("../../src/hosts/pi/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/pi/index.js")>();
  return {
    ...actual,
    doctorPiExtension: vi.fn<() => Promise<typeof stub>>(async () => stub),
    installPiExtension: vi.fn<() => Promise<typeof stub>>(async () => stub),
    uninstallPiExtension: vi.fn<() => Promise<typeof stub>>(async () => stub),
  };
});

vi.mock("../../src/hosts/pi-go/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/pi-go/index.js")>();
  return {
    ...actual,
    doctorPiGoSkill: vi.fn<() => Promise<typeof stub>>(async () => stub),
    installPiGoSkill: vi.fn<() => Promise<typeof stub>>(async () => stub),
    uninstallPiGoSkill: vi.fn<() => Promise<typeof stub>>(async () => stub),
  };
});

vi.mock("../../src/hosts/plandex/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/plandex/index.js")>();
  return {
    ...actual,
    doctorPlandexConvention: vi.fn<() => Promise<typeof stub>>(async () => stub),
    installPlandexConvention: vi.fn<() => Promise<typeof stub>>(async () => stub),
    uninstallPlandexConvention: vi.fn<() => Promise<typeof stub>>(async () => stub),
  };
});

vi.mock("../../src/hosts/qoder/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/qoder/index.js")>();
  return {
    ...actual,
    doctorQoderInstructions: vi.fn<() => Promise<typeof stub>>(async () => stub),
    installQoderInstructions: vi.fn<() => Promise<typeof stub>>(async () => stub),
    uninstallQoderInstructions: vi.fn<() => Promise<typeof stub>>(async () => stub),
  };
});

vi.mock("../../src/hosts/qodo/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/qodo/index.js")>();
  return {
    ...actual,
    doctorQodoReviewConfig: vi.fn<() => Promise<typeof stub>>(async () => stub),
    installQodoReviewConfig: vi.fn<() => Promise<typeof stub>>(async () => stub),
    uninstallQodoReviewConfig: vi.fn<() => Promise<typeof stub>>(async () => stub),
  };
});

vi.mock("../../src/hosts/qwen-code/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/qwen-code/index.js")>();
  return {
    ...actual,
    doctorQwenCodeHook: vi.fn<() => Promise<typeof stub>>(async () => stub),
    installQwenCodeHook: vi.fn<() => Promise<typeof stub>>(async () => stub),
    runQwenCodePostToolUseHook: vi.fn<() => Promise<number>>(async () => 0),
    uninstallQwenCodeHook: vi.fn<() => Promise<typeof stub>>(async () => stub),
  };
});

vi.mock("../../src/hosts/replit/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/replit/index.js")>();
  return {
    ...actual,
    doctorReplitInstructions: vi.fn<() => Promise<typeof stub>>(async () => stub),
    installReplitInstructions: vi.fn<() => Promise<typeof stub>>(async () => stub),
    uninstallReplitInstructions: vi.fn<() => Promise<typeof stub>>(async () => stub),
  };
});

vi.mock("../../src/hosts/roo/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/roo/index.js")>();
  return {
    ...actual,
    doctorRooInstructions: vi.fn<() => Promise<typeof stub>>(async () => stub),
    installRooInstructions: vi.fn<() => Promise<typeof stub>>(async () => stub),
    uninstallRooInstructions: vi.fn<() => Promise<typeof stub>>(async () => stub),
  };
});

vi.mock("../../src/hosts/rovo/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/rovo/index.js")>();
  return {
    ...actual,
    doctorRovoInstructions: vi.fn<() => Promise<typeof stub>>(async () => stub),
    installRovoInstructions: vi.fn<() => Promise<typeof stub>>(async () => stub),
    uninstallRovoInstructions: vi.fn<() => Promise<typeof stub>>(async () => stub),
  };
});

vi.mock("../../src/hosts/ruler/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/ruler/index.js")>();
  return {
    ...actual,
    doctorRulerRule: vi.fn<() => Promise<typeof stub>>(async () => stub),
    installRulerRule: vi.fn<() => Promise<typeof stub>>(async () => stub),
    uninstallRulerRule: vi.fn<() => Promise<typeof stub>>(async () => stub),
  };
});

vi.mock("../../src/hosts/shared/hook-doctor.js/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/shared/hook-doctor.js/index.js")>();
  return {
    ...actual,
    doctorInstalledHooks: vi.fn<() => Promise<typeof stub>>(async () => stub),
  };
});

vi.mock("../../src/hosts/stagewise/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/stagewise/index.js")>();
  return {
    ...actual,
    doctorStagewiseSkill: vi.fn<() => Promise<typeof stub>>(async () => stub),
    installStagewiseSkill: vi.fn<() => Promise<typeof stub>>(async () => stub),
    uninstallStagewiseSkill: vi.fn<() => Promise<typeof stub>>(async () => stub),
  };
});

vi.mock("../../src/hosts/swe-agent/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/swe-agent/index.js")>();
  return {
    ...actual,
    doctorSweAgentConfig: vi.fn<() => Promise<typeof stub>>(async () => stub),
    installSweAgentConfig: vi.fn<() => Promise<typeof stub>>(async () => stub),
    uninstallSweAgentConfig: vi.fn<() => Promise<typeof stub>>(async () => stub),
  };
});

vi.mock("../../src/hosts/tabby/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/tabby/index.js")>();
  return {
    ...actual,
    doctorTabbySystemPrompt: vi.fn<() => Promise<typeof stub>>(async () => stub),
    installTabbySystemPrompt: vi.fn<() => Promise<typeof stub>>(async () => stub),
    uninstallTabbySystemPrompt: vi.fn<() => Promise<typeof stub>>(async () => stub),
  };
});

vi.mock("../../src/hosts/tabnine/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/tabnine/index.js")>();
  return {
    ...actual,
    doctorTabnineInstructions: vi.fn<() => Promise<typeof stub>>(async () => stub),
    installTabnineInstructions: vi.fn<() => Promise<typeof stub>>(async () => stub),
    uninstallTabnineInstructions: vi.fn<() => Promise<typeof stub>>(async () => stub),
  };
});

vi.mock("../../src/hosts/trae/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/trae/index.js")>();
  return {
    ...actual,
    doctorTraeRule: vi.fn<() => Promise<typeof stub>>(async () => stub),
    installTraeRule: vi.fn<() => Promise<typeof stub>>(async () => stub),
    uninstallTraeRule: vi.fn<() => Promise<typeof stub>>(async () => stub),
  };
});

vi.mock("../../src/hosts/uipath/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/uipath/index.js")>();
  return {
    ...actual,
    doctorUiPathInstructions: vi.fn<() => Promise<typeof stub>>(async () => stub),
    installUiPathInstructions: vi.fn<() => Promise<typeof stub>>(async () => stub),
    uninstallUiPathInstructions: vi.fn<() => Promise<typeof stub>>(async () => stub),
  };
});

vi.mock("../../src/hosts/vscode-copilot/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/vscode-copilot/index.js")>();
  return {
    ...actual,
    doctorVscodeCopilotHook: vi.fn<() => Promise<typeof stub>>(async () => stub),
    installVscodeCopilotHook: vi.fn<() => Promise<typeof stub>>(async () => stub),
    runVscodeCopilotPreToolUseHook: vi.fn<() => Promise<number>>(async () => 0),
    uninstallVscodeCopilotHook: vi.fn<() => Promise<typeof stub>>(async () => stub),
  };
});

vi.mock("../../src/hosts/warp/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/warp/index.js")>();
  return {
    ...actual,
    doctorWarpInstructions: vi.fn<() => Promise<typeof stub>>(async () => stub),
    installWarpInstructions: vi.fn<() => Promise<typeof stub>>(async () => stub),
    uninstallWarpInstructions: vi.fn<() => Promise<typeof stub>>(async () => stub),
  };
});

vi.mock("../../src/hosts/windsurf/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/windsurf/index.js")>();
  return {
    ...actual,
    doctorWindsurfRule: vi.fn<() => Promise<typeof stub>>(async () => stub),
    installWindsurfRule: vi.fn<() => Promise<typeof stub>>(async () => stub),
    uninstallWindsurfRule: vi.fn<() => Promise<typeof stub>>(async () => stub),
  };
});

vi.mock("../../src/hosts/zed/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/zed/index.js")>();
  return {
    ...actual,
    doctorZedInstructions: vi.fn<() => Promise<typeof stub>>(async () => stub),
    installZedInstructions: vi.fn<() => Promise<typeof stub>>(async () => stub),
    uninstallZedInstructions: vi.fn<() => Promise<typeof stub>>(async () => stub),
  };
});

vi.mock("../../src/hosts/zencoder/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/zencoder/index.js")>();
  return {
    ...actual,
    doctorZencoderRule: vi.fn<() => Promise<typeof stub>>(async () => stub),
    installZencoderRule: vi.fn<() => Promise<typeof stub>>(async () => stub),
    uninstallZencoderRule: vi.fn<() => Promise<typeof stub>>(async () => stub),
  };
});

import { runCli } from "./helpers/run-cli.js";

const INSTALL_TARGETS = ["adal","aether","aictl","ai-memory-protocol","aider","agent-layer","agentinit","agentlink","agentloom","agents-cli","agents-md","agentsge","agentsmesh","amazon-q","amp","antigravity","anywhere-agents","augment","avante","baz","bito","blackbox","blocks","clawdbot","bob","builder","charlie","codex","claude-code","cline","codeant","codebuff","codegen","coder-agents","coderabbit","codebuddy","command-code","continue","copilot-agent","crush","cursor","deepagents","devin","dot-agents","docker-agent","droid","eca","elyra","firebase-studio","forgecode","gemini-cli","gitlab-duo","goose","greptile","grok-build","grok-cli","gptme","jean2","jetbrains-ai","junie","jules","leanctl","kimi","kiro","kilo","knowns","localcode","mcp-agent","mini-swe-agent","swe-agent","stagewise","mistral-vibe","mux","novakit","ona","openhands","open-interpreter","openwebui","pi","pi-go","opencode","plandex","qodo","qoder","replit","qwen-code","roo","rovo","ruler","tabby","tabnine","trae","uipath","vscode-copilot","warp","windsurf","copilot-cli","zed","zencoder"] as const;
const UNINSTALL_TARGETS = ["adal","aether","aictl","ai-memory-protocol","aider","agent-layer","agentinit","agentlink","agentloom","agents-cli","agents-md","agentsge","agentsmesh","amazon-q","amp","antigravity","anywhere-agents","augment","avante","baz","bito","blackbox","blocks","clawdbot","bob","builder","charlie","codex","claude-code","cline","codeant","codebuff","codegen","coder-agents","coderabbit","codebuddy","command-code","continue","copilot-agent","crush","cursor","deepagents","devin","dot-agents","docker-agent","droid","eca","elyra","firebase-studio","forgecode","gitlab-duo","gemini-cli","goose","greptile","grok-build","grok-cli","gptme","jean2","jetbrains-ai","junie","jules","leanctl","kimi","kiro","kilo","knowns","localcode","mcp-agent","mini-swe-agent","swe-agent","stagewise","mistral-vibe","mux","novakit","ona","openhands","open-interpreter","openwebui","pi","pi-go","opencode","plandex","qodo","qoder","replit","qwen-code","roo","rovo","ruler","tabby","tabnine","trae","uipath","vscode-copilot","warp","windsurf","copilot-cli","zed","zencoder"] as const;
const DOCTOR_TARGETS = ["hooks","adal","aether","aictl","ai-memory-protocol","aider","agent-layer","agentinit","agentlink","agentloom","agents-cli","agents-md","agentsge","agentsmesh","amazon-q","amp","antigravity","anywhere-agents","augment","avante","baz","bito","blackbox","blocks","clawdbot","bob","builder","charlie","codex","claude-code","cline","codeant","codebuff","codegen","coder-agents","coderabbit","codebuddy","command-code","continue","copilot-agent","crush","cursor","deepagents","devin","dot-agents","docker-agent","droid","eca","elyra","firebase-studio","forgecode","gemini-cli","gitlab-duo","goose","greptile","grok-build","grok-cli","gptme","jean2","jetbrains-ai","junie","jules","leanctl","kimi","kiro","kilo","knowns","localcode","mcp-agent","mini-swe-agent","swe-agent","stagewise","mistral-vibe","mux","novakit","ona","openhands","open-interpreter","openwebui","pi","pi-go","opencode","plandex","qodo","qoder","replit","qwen-code","roo","rovo","ruler","tabby","tabnine","trae","uipath","vscode-copilot","warp","windsurf","copilot-cli","zed","zencoder","aimemoryprotocol","agent-init","agentsmd"] as const;
const STUB_JSON = `${JSON.stringify(stub, null, 2)}\n`;

describe("install argv dispatch", () => {
  it("dispatches every install target through --format json", async () => {
    for (const target of INSTALL_TARGETS) {
      const result = await runCli(["install", target, "--format", "json"]);
      expect(result.rejected).toBe(false);
      expect(result.exitCode).toBe(0);
      expect(result.stdout).toBe(STUB_JSON);
      expect(result.stderr).toBe("");
    }
  }, 600_000);
});

describe("uninstall argv dispatch", () => {
  it("dispatches every uninstall target through --format json", async () => {
    for (const target of UNINSTALL_TARGETS) {
      const result = await runCli(["uninstall", target, "--format", "json"]);
      expect(result.rejected).toBe(false);
      expect(result.exitCode).toBe(0);
      expect(result.stdout).toBe(STUB_JSON);
      expect(result.stderr).toBe("");
    }
  }, 600_000);
});

describe("install argv dispatch text execution", () => {
  it("executes every install text branch with stubbed hosts", async () => {
    for (const target of INSTALL_TARGETS) {
      const result = await runCli(["install", target]);
      expect(result.rejected).toBe(false);
      expect(result.exitCode).toBe(0);
    }
  }, 600_000);
});

describe("uninstall argv dispatch text execution", () => {
  it("executes every uninstall text branch with stubbed hosts", async () => {
    for (const target of UNINSTALL_TARGETS) {
      const result = await runCli(["uninstall", target]);
      expect(result.rejected).toBe(false);
      expect(result.exitCode).toBe(0);
    }
  }, 600_000);
});

describe("doctor argv dispatch text execution", () => {
  it("executes every doctor text branch with stubbed hosts", async () => {
    for (const target of DOCTOR_TARGETS) {
      if (target === "hooks") {
        continue;
      }
      const result = await runCli(["doctor", target]);
      expect(result.rejected).toBe(false);
      expect(result.exitCode).toBe(0);
    }
  }, 600_000);
});

describe("doctor argv dispatch", () => {
  it("dispatches every doctor target through --format json", async () => {
    for (const target of DOCTOR_TARGETS) {
      const result = await runCli(["doctor", target, "--format", "json"]);
      // hooks reports live doctor JSON; every stubbed host returns STUB_JSON.
      const stdoutMatches =
        target === "hooks" ? result.stdout.startsWith("{\n") : result.stdout === STUB_JSON;
      expect(result.rejected).toBe(false);
      expect(result.exitCode).toBe(0);
      expect(stdoutMatches).toBe(true);
      expect(result.stderr).toBe("");
    }
  }, 600_000);
});
