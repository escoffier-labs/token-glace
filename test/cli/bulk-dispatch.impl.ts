import { afterAll, vi, describe, expect, it } from "vitest";

const stub = { path: "/tmp/tokenjuice-stub" };

vi.mock("../../src/hosts/adal/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/adal/index.js")>();
  return {
    ...actual,
    doctorAdalInstructions: vi.fn(async () => stub),
    installAdalInstructions: vi.fn(async () => stub),
    uninstallAdalInstructions: vi.fn(async () => stub),
  };
});

vi.mock("../../src/hosts/aether/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/aether/index.js")>();
  return {
    ...actual,
    doctorAetherPrompt: vi.fn(async () => stub),
    installAetherPrompt: vi.fn(async () => stub),
    uninstallAetherPrompt: vi.fn(async () => stub),
  };
});

vi.mock("../../src/hosts/agent-layer/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/agent-layer/index.js")>();
  return {
    ...actual,
    doctorAgentLayerInstructions: vi.fn(async () => stub),
    installAgentLayerInstructions: vi.fn(async () => stub),
    uninstallAgentLayerInstructions: vi.fn(async () => stub),
  };
});

vi.mock("../../src/hosts/agentinit/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/agentinit/index.js")>();
  return {
    ...actual,
    doctorAgentInitInstructions: vi.fn(async () => stub),
    installAgentInitInstructions: vi.fn(async () => stub),
    uninstallAgentInitInstructions: vi.fn(async () => stub),
  };
});

vi.mock("../../src/hosts/agentlink/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/agentlink/index.js")>();
  return {
    ...actual,
    doctorAgentlinkInstructions: vi.fn(async () => stub),
    installAgentlinkInstructions: vi.fn(async () => stub),
    uninstallAgentlinkInstructions: vi.fn(async () => stub),
  };
});

vi.mock("../../src/hosts/agentloom/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/agentloom/index.js")>();
  return {
    ...actual,
    doctorAgentloomRule: vi.fn(async () => stub),
    installAgentloomRule: vi.fn(async () => stub),
    uninstallAgentloomRule: vi.fn(async () => stub),
  };
});

vi.mock("../../src/hosts/agents-cli/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/agents-cli/index.js")>();
  return {
    ...actual,
    doctorAgentsCliMemory: vi.fn(async () => stub),
    installAgentsCliMemory: vi.fn(async () => stub),
    uninstallAgentsCliMemory: vi.fn(async () => stub),
  };
});

vi.mock("../../src/hosts/agents-md/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/agents-md/index.js")>();
  return {
    ...actual,
    doctorAgentsMdInstructions: vi.fn(async () => stub),
    installAgentsMdInstructions: vi.fn(async () => stub),
    uninstallAgentsMdInstructions: vi.fn(async () => stub),
  };
});

vi.mock("../../src/hosts/agentsge/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/agentsge/index.js")>();
  return {
    ...actual,
    doctorAgentsGeRule: vi.fn(async () => stub),
    installAgentsGeRule: vi.fn(async () => stub),
    uninstallAgentsGeRule: vi.fn(async () => stub),
  };
});

vi.mock("../../src/hosts/agentsmesh/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/agentsmesh/index.js")>();
  return {
    ...actual,
    doctorAgentsMeshRule: vi.fn(async () => stub),
    installAgentsMeshRule: vi.fn(async () => stub),
    uninstallAgentsMeshRule: vi.fn(async () => stub),
  };
});

vi.mock("../../src/hosts/ai-memory-protocol/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/ai-memory-protocol/index.js")>();
  return {
    ...actual,
    doctorAiMemoryProtocolMemory: vi.fn(async () => stub),
    installAiMemoryProtocolMemory: vi.fn(async () => stub),
    uninstallAiMemoryProtocolMemory: vi.fn(async () => stub),
  };
});

vi.mock("../../src/hosts/aictl/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/aictl/index.js")>();
  return {
    ...actual,
    doctorAictlInstructions: vi.fn(async () => stub),
    installAictlInstructions: vi.fn(async () => stub),
    uninstallAictlInstructions: vi.fn(async () => stub),
  };
});

vi.mock("../../src/hosts/aider/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/aider/index.js")>();
  return {
    ...actual,
    doctorAiderConvention: vi.fn(async () => stub),
    installAiderConvention: vi.fn(async () => stub),
    uninstallAiderConvention: vi.fn(async () => stub),
  };
});

vi.mock("../../src/hosts/amazon-q/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/amazon-q/index.js")>();
  return {
    ...actual,
    doctorAmazonQRule: vi.fn(async () => stub),
    installAmazonQRule: vi.fn(async () => stub),
    uninstallAmazonQRule: vi.fn(async () => stub),
  };
});

vi.mock("../../src/hosts/amp/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/amp/index.js")>();
  return {
    ...actual,
    doctorAmpInstructions: vi.fn(async () => stub),
    installAmpInstructions: vi.fn(async () => stub),
    uninstallAmpInstructions: vi.fn(async () => stub),
  };
});

vi.mock("../../src/hosts/antigravity/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/antigravity/index.js")>();
  return {
    ...actual,
    doctorAntigravityRule: vi.fn(async () => stub),
    installAntigravityRule: vi.fn(async () => stub),
    uninstallAntigravityRule: vi.fn(async () => stub),
  };
});

vi.mock("../../src/hosts/anywhere-agents/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/anywhere-agents/index.js")>();
  return {
    ...actual,
    doctorAnywhereAgentsInstructions: vi.fn(async () => stub),
    installAnywhereAgentsInstructions: vi.fn(async () => stub),
    uninstallAnywhereAgentsInstructions: vi.fn(async () => stub),
  };
});

vi.mock("../../src/hosts/augment/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/augment/index.js")>();
  return {
    ...actual,
    doctorAugmentRule: vi.fn(async () => stub),
    installAugmentRule: vi.fn(async () => stub),
    uninstallAugmentRule: vi.fn(async () => stub),
  };
});

vi.mock("../../src/hosts/avante/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/avante/index.js")>();
  return {
    ...actual,
    doctorAvanteInstructions: vi.fn(async () => stub),
    installAvanteInstructions: vi.fn(async () => stub),
    uninstallAvanteInstructions: vi.fn(async () => stub),
  };
});

vi.mock("../../src/hosts/baz/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/baz/index.js")>();
  return {
    ...actual,
    doctorBazSkill: vi.fn(async () => stub),
    installBazSkill: vi.fn(async () => stub),
    uninstallBazSkill: vi.fn(async () => stub),
  };
});

vi.mock("../../src/hosts/bito/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/bito/index.js")>();
  return {
    ...actual,
    doctorBitoGuidelines: vi.fn(async () => stub),
    installBitoGuidelines: vi.fn(async () => stub),
    uninstallBitoGuidelines: vi.fn(async () => stub),
  };
});

vi.mock("../../src/hosts/blackbox/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/blackbox/index.js")>();
  return {
    ...actual,
    doctorBlackboxSkill: vi.fn(async () => stub),
    installBlackboxSkill: vi.fn(async () => stub),
    uninstallBlackboxSkill: vi.fn(async () => stub),
  };
});

vi.mock("../../src/hosts/blocks/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/blocks/index.js")>();
  return {
    ...actual,
    doctorBlocksSkill: vi.fn(async () => stub),
    installBlocksSkill: vi.fn(async () => stub),
    uninstallBlocksSkill: vi.fn(async () => stub),
  };
});

vi.mock("../../src/hosts/bob/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/bob/index.js")>();
  return {
    ...actual,
    doctorBobInstructions: vi.fn(async () => stub),
    installBobInstructions: vi.fn(async () => stub),
    uninstallBobInstructions: vi.fn(async () => stub),
  };
});

vi.mock("../../src/hosts/builder/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/builder/index.js")>();
  return {
    ...actual,
    doctorBuilderRule: vi.fn(async () => stub),
    installBuilderRule: vi.fn(async () => stub),
    uninstallBuilderRule: vi.fn(async () => stub),
  };
});

vi.mock("../../src/hosts/charlie/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/charlie/index.js")>();
  return {
    ...actual,
    doctorCharlieInstructions: vi.fn(async () => stub),
    installCharlieInstructions: vi.fn(async () => stub),
    uninstallCharlieInstructions: vi.fn(async () => stub),
  };
});

vi.mock("../../src/hosts/claude-code/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/claude-code/index.js")>();
  return {
    ...actual,
    doctorClaudeCodeHook: vi.fn(async () => stub),
    installClaudeCodeHook: vi.fn(async () => stub),
    runClaudeCodePostToolUseHook: vi.fn(async () => 0),
    runClaudeCodePreToolUseHook: vi.fn(async () => 0),
    uninstallClaudeCodeHook: vi.fn(async () => stub),
  };
});

vi.mock("../../src/hosts/clawdbot/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/clawdbot/index.js")>();
  return {
    ...actual,
    doctorClawdbotSkill: vi.fn(async () => stub),
    installClawdbotSkill: vi.fn(async () => stub),
    uninstallClawdbotSkill: vi.fn(async () => stub),
  };
});

vi.mock("../../src/hosts/cline/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/cline/index.js")>();
  return {
    ...actual,
    doctorClineHook: vi.fn(async () => stub),
    installClineHook: vi.fn(async () => stub),
    runClinePostToolUseHook: vi.fn(async () => 0),
    uninstallClineHook: vi.fn(async () => stub),
  };
});

vi.mock("../../src/hosts/codeant/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/codeant/index.js")>();
  return {
    ...actual,
    doctorCodeAntInstructions: vi.fn(async () => stub),
    installCodeAntInstructions: vi.fn(async () => stub),
    uninstallCodeAntInstructions: vi.fn(async () => stub),
  };
});

vi.mock("../../src/hosts/codebuddy/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/codebuddy/index.js")>();
  return {
    ...actual,
    doctorCodeBuddyHook: vi.fn(async () => stub),
    installCodeBuddyHook: vi.fn(async () => stub),
    runCodeBuddyPreToolUseHook: vi.fn(async () => 0),
    uninstallCodeBuddyHook: vi.fn(async () => stub),
  };
});

vi.mock("../../src/hosts/codebuff/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/codebuff/index.js")>();
  return {
    ...actual,
    doctorCodebuffInstructions: vi.fn(async () => stub),
    installCodebuffInstructions: vi.fn(async () => stub),
    uninstallCodebuffInstructions: vi.fn(async () => stub),
  };
});

vi.mock("../../src/hosts/codegen/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/codegen/index.js")>();
  return {
    ...actual,
    doctorCodegenInstructions: vi.fn(async () => stub),
    installCodegenInstructions: vi.fn(async () => stub),
    uninstallCodegenInstructions: vi.fn(async () => stub),
  };
});

vi.mock("../../src/hosts/coder-agents/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/coder-agents/index.js")>();
  return {
    ...actual,
    doctorCoderAgentsSkill: vi.fn(async () => stub),
    installCoderAgentsSkill: vi.fn(async () => stub),
    uninstallCoderAgentsSkill: vi.fn(async () => stub),
  };
});

vi.mock("../../src/hosts/coderabbit/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/coderabbit/index.js")>();
  return {
    ...actual,
    doctorCodeRabbitConfig: vi.fn(async () => stub),
    installCodeRabbitConfig: vi.fn(async () => stub),
    uninstallCodeRabbitConfig: vi.fn(async () => stub),
  };
});

vi.mock("../../src/hosts/codex/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/codex/index.js")>();
  return {
    ...actual,
    doctorCodexHook: vi.fn(async () => stub),
    installCodexHook: vi.fn(async () => stub),
    runCodexPostToolUseHook: vi.fn(async () => 0),
    uninstallCodexHook: vi.fn(async () => stub),
  };
});

vi.mock("../../src/hosts/command-code/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/command-code/index.js")>();
  return {
    ...actual,
    doctorCommandCodeHook: vi.fn(async () => stub),
    installCommandCodeHook: vi.fn(async () => stub),
    runCommandCodePostToolUseHook: vi.fn(async () => 0),
    uninstallCommandCodeHook: vi.fn(async () => stub),
  };
});

vi.mock("../../src/hosts/continue/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/continue/index.js")>();
  return {
    ...actual,
    doctorContinueRule: vi.fn(async () => stub),
    installContinueRule: vi.fn(async () => stub),
    uninstallContinueRule: vi.fn(async () => stub),
  };
});

vi.mock("../../src/hosts/copilot-agent/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/copilot-agent/index.js")>();
  return {
    ...actual,
    doctorCopilotAgentHook: vi.fn(async () => stub),
    installCopilotAgentHook: vi.fn(async () => stub),
    runCopilotAgentPostToolUseHook: vi.fn(async () => 0),
    uninstallCopilotAgentHook: vi.fn(async () => stub),
  };
});

vi.mock("../../src/hosts/copilot-cli/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/copilot-cli/index.js")>();
  return {
    ...actual,
    doctorCopilotCliHook: vi.fn(async () => stub),
    installCopilotCliHook: vi.fn(async () => stub),
    runCopilotCliPostToolUseHook: vi.fn(async () => 0),
    uninstallCopilotCliHook: vi.fn(async () => stub),
  };
});

vi.mock("../../src/hosts/crush/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/crush/index.js")>();
  return {
    ...actual,
    doctorCrushSkill: vi.fn(async () => stub),
    installCrushSkill: vi.fn(async () => stub),
    uninstallCrushSkill: vi.fn(async () => stub),
  };
});

vi.mock("../../src/hosts/cursor/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/cursor/index.js")>();
  return {
    ...actual,
    doctorCursorHook: vi.fn(async () => stub),
    installCursorHook: vi.fn(async () => stub),
    runCursorPreToolUseHook: vi.fn(async () => 0),
    uninstallCursorHook: vi.fn(async () => stub),
  };
});

vi.mock("../../src/hosts/deepagents/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/deepagents/index.js")>();
  return {
    ...actual,
    doctorDeepAgentsInstructions: vi.fn(async () => stub),
    installDeepAgentsInstructions: vi.fn(async () => stub),
    uninstallDeepAgentsInstructions: vi.fn(async () => stub),
  };
});

vi.mock("../../src/hosts/devin/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/devin/index.js")>();
  return {
    ...actual,
    doctorDevinHook: vi.fn(async () => stub),
    installDevinHook: vi.fn(async () => stub),
    runDevinPreToolUseHook: vi.fn(async () => 0),
    uninstallDevinHook: vi.fn(async () => stub),
  };
});

vi.mock("../../src/hosts/docker-agent/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/docker-agent/index.js")>();
  return {
    ...actual,
    doctorDockerAgentPrompt: vi.fn(async () => stub),
    installDockerAgentPrompt: vi.fn(async () => stub),
    uninstallDockerAgentPrompt: vi.fn(async () => stub),
  };
});

vi.mock("../../src/hosts/dot-agents/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/dot-agents/index.js")>();
  return {
    ...actual,
    doctorDotAgentsRule: vi.fn(async () => stub),
    installDotAgentsRule: vi.fn(async () => stub),
    uninstallDotAgentsRule: vi.fn(async () => stub),
  };
});

vi.mock("../../src/hosts/droid/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/droid/index.js")>();
  return {
    ...actual,
    doctorDroidHook: vi.fn(async () => stub),
    installDroidHook: vi.fn(async () => stub),
    runDroidPostToolUseHook: vi.fn(async () => 0),
    uninstallDroidHook: vi.fn(async () => stub),
  };
});

vi.mock("../../src/hosts/eca/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/eca/index.js")>();
  return {
    ...actual,
    doctorEcaSkill: vi.fn(async () => stub),
    installEcaSkill: vi.fn(async () => stub),
    uninstallEcaSkill: vi.fn(async () => stub),
  };
});

vi.mock("../../src/hosts/elyra/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/elyra/index.js")>();
  return {
    ...actual,
    doctorElyraSkill: vi.fn(async () => stub),
    installElyraSkill: vi.fn(async () => stub),
    uninstallElyraSkill: vi.fn(async () => stub),
  };
});

vi.mock("../../src/hosts/firebase-studio/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/firebase-studio/index.js")>();
  return {
    ...actual,
    doctorFirebaseStudioRule: vi.fn(async () => stub),
    installFirebaseStudioRule: vi.fn(async () => stub),
    uninstallFirebaseStudioRule: vi.fn(async () => stub),
  };
});

vi.mock("../../src/hosts/forgecode/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/forgecode/index.js")>();
  return {
    ...actual,
    doctorForgeCodeInstructions: vi.fn(async () => stub),
    installForgeCodeInstructions: vi.fn(async () => stub),
    uninstallForgeCodeInstructions: vi.fn(async () => stub),
  };
});

vi.mock("../../src/hosts/gemini-cli/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/gemini-cli/index.js")>();
  return {
    ...actual,
    doctorGeminiCliHook: vi.fn(async () => stub),
    installGeminiCliHook: vi.fn(async () => stub),
    runGeminiCliAfterToolHook: vi.fn(async () => 0),
    uninstallGeminiCliHook: vi.fn(async () => stub),
  };
});

vi.mock("../../src/hosts/gitlab-duo/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/gitlab-duo/index.js")>();
  return {
    ...actual,
    doctorGitLabDuoRule: vi.fn(async () => stub),
    installGitLabDuoRule: vi.fn(async () => stub),
    uninstallGitLabDuoRule: vi.fn(async () => stub),
  };
});

vi.mock("../../src/hosts/goose/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/goose/index.js")>();
  return {
    ...actual,
    doctorGooseHints: vi.fn(async () => stub),
    installGooseHints: vi.fn(async () => stub),
    uninstallGooseHints: vi.fn(async () => stub),
  };
});

vi.mock("../../src/hosts/gptme/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/gptme/index.js")>();
  return {
    ...actual,
    doctorGptmeInstructions: vi.fn(async () => stub),
    installGptmeInstructions: vi.fn(async () => stub),
    uninstallGptmeInstructions: vi.fn(async () => stub),
  };
});

vi.mock("../../src/hosts/greptile/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/greptile/index.js")>();
  return {
    ...actual,
    doctorGreptileRule: vi.fn(async () => stub),
    installGreptileRule: vi.fn(async () => stub),
    uninstallGreptileRule: vi.fn(async () => stub),
  };
});

vi.mock("../../src/hosts/grok-build/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/grok-build/index.js")>();
  return {
    ...actual,
    doctorGrokBuildInstructions: vi.fn(async () => stub),
    installGrokBuildInstructions: vi.fn(async () => stub),
    uninstallGrokBuildInstructions: vi.fn(async () => stub),
  };
});

vi.mock("../../src/hosts/grok-cli/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/grok-cli/index.js")>();
  return {
    ...actual,
    doctorGrokCliHook: vi.fn(async () => stub),
    installGrokCliHook: vi.fn(async () => stub),
    runGrokCliPostToolUseHook: vi.fn(async () => 0),
    uninstallGrokCliHook: vi.fn(async () => stub),
  };
});

vi.mock("../../src/hosts/jean2/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/jean2/index.js")>();
  return {
    ...actual,
    doctorJean2Instructions: vi.fn(async () => stub),
    installJean2Instructions: vi.fn(async () => stub),
    uninstallJean2Instructions: vi.fn(async () => stub),
  };
});

vi.mock("../../src/hosts/jetbrains-ai/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/jetbrains-ai/index.js")>();
  return {
    ...actual,
    doctorJetBrainsAiRule: vi.fn(async () => stub),
    installJetBrainsAiRule: vi.fn(async () => stub),
    uninstallJetBrainsAiRule: vi.fn(async () => stub),
  };
});

vi.mock("../../src/hosts/jules/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/jules/index.js")>();
  return {
    ...actual,
    doctorJulesInstructions: vi.fn(async () => stub),
    installJulesInstructions: vi.fn(async () => stub),
    uninstallJulesInstructions: vi.fn(async () => stub),
  };
});

vi.mock("../../src/hosts/junie/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/junie/index.js")>();
  return {
    ...actual,
    doctorJunieInstructions: vi.fn(async () => stub),
    installJunieInstructions: vi.fn(async () => stub),
    uninstallJunieInstructions: vi.fn(async () => stub),
  };
});

vi.mock("../../src/hosts/kilo/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/kilo/index.js")>();
  return {
    ...actual,
    doctorKiloRule: vi.fn(async () => stub),
    installKiloRule: vi.fn(async () => stub),
    uninstallKiloRule: vi.fn(async () => stub),
  };
});

vi.mock("../../src/hosts/kimi/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/kimi/index.js")>();
  return {
    ...actual,
    doctorKimiHook: vi.fn(async () => stub),
    installKimiHook: vi.fn(async () => stub),
    runKimiPostToolUseHook: vi.fn(async () => 0),
    uninstallKimiHook: vi.fn(async () => stub),
  };
});

vi.mock("../../src/hosts/kiro/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/kiro/index.js")>();
  return {
    ...actual,
    doctorKiroSteering: vi.fn(async () => stub),
    installKiroSteering: vi.fn(async () => stub),
    uninstallKiroSteering: vi.fn(async () => stub),
  };
});

vi.mock("../../src/hosts/knowns/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/knowns/index.js")>();
  return {
    ...actual,
    doctorKnownsInstructions: vi.fn(async () => stub),
    installKnownsInstructions: vi.fn(async () => stub),
    uninstallKnownsInstructions: vi.fn(async () => stub),
  };
});

vi.mock("../../src/hosts/leanctl/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/leanctl/index.js")>();
  return {
    ...actual,
    doctorLeanCtlInstructions: vi.fn(async () => stub),
    installLeanCtlInstructions: vi.fn(async () => stub),
    uninstallLeanCtlInstructions: vi.fn(async () => stub),
  };
});

vi.mock("../../src/hosts/localcode/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/localcode/index.js")>();
  return {
    ...actual,
    doctorLocalCodePlugin: vi.fn(async () => stub),
    installLocalCodePlugin: vi.fn(async () => stub),
    uninstallLocalCodePlugin: vi.fn(async () => stub),
  };
});

vi.mock("../../src/hosts/mcp-agent/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/mcp-agent/index.js")>();
  return {
    ...actual,
    doctorMcpAgentDefinition: vi.fn(async () => stub),
    installMcpAgentDefinition: vi.fn(async () => stub),
    uninstallMcpAgentDefinition: vi.fn(async () => stub),
  };
});

vi.mock("../../src/hosts/mini-swe-agent/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/mini-swe-agent/index.js")>();
  return {
    ...actual,
    doctorMiniSweAgentConfig: vi.fn(async () => stub),
    installMiniSweAgentConfig: vi.fn(async () => stub),
    uninstallMiniSweAgentConfig: vi.fn(async () => stub),
  };
});

vi.mock("../../src/hosts/mistral-vibe/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/mistral-vibe/index.js")>();
  return {
    ...actual,
    doctorMistralVibeInstructions: vi.fn(async () => stub),
    installMistralVibeInstructions: vi.fn(async () => stub),
    uninstallMistralVibeInstructions: vi.fn(async () => stub),
  };
});

vi.mock("../../src/hosts/mux/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/mux/index.js")>();
  return {
    ...actual,
    doctorMuxHook: vi.fn(async () => stub),
    installMuxHook: vi.fn(async () => stub),
    runMuxPostToolUseHook: vi.fn(async () => 0),
    uninstallMuxHook: vi.fn(async () => stub),
  };
});

vi.mock("../../src/hosts/novakit/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/novakit/index.js")>();
  return {
    ...actual,
    doctorNovaKitInstructions: vi.fn(async () => stub),
    installNovaKitInstructions: vi.fn(async () => stub),
    uninstallNovaKitInstructions: vi.fn(async () => stub),
  };
});

vi.mock("../../src/hosts/ona/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/ona/index.js")>();
  return {
    ...actual,
    doctorOnaSkill: vi.fn(async () => stub),
    installOnaSkill: vi.fn(async () => stub),
    uninstallOnaSkill: vi.fn(async () => stub),
  };
});

vi.mock("../../src/hosts/open-interpreter/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/open-interpreter/index.js")>();
  return {
    ...actual,
    doctorOpenInterpreterInstructions: vi.fn(async () => stub),
    installOpenInterpreterInstructions: vi.fn(async () => stub),
    uninstallOpenInterpreterInstructions: vi.fn(async () => stub),
  };
});

vi.mock("../../src/hosts/opencode/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/opencode/index.js")>();
  return {
    ...actual,
    doctorOpenCodeExtension: vi.fn(async () => stub),
    installOpenCodeExtension: vi.fn(async () => stub),
    uninstallOpenCodeExtension: vi.fn(async () => stub),
  };
});

vi.mock("../../src/hosts/openhands/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/openhands/index.js")>();
  return {
    ...actual,
    doctorOpenHandsHook: vi.fn(async () => stub),
    installOpenHandsHook: vi.fn(async () => stub),
    runOpenHandsPostToolUseHook: vi.fn(async () => 0),
    uninstallOpenHandsHook: vi.fn(async () => stub),
  };
});

vi.mock("../../src/hosts/openwebui/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/openwebui/index.js")>();
  return {
    ...actual,
    doctorOpenWebUITool: vi.fn(async () => stub),
    installOpenWebUITool: vi.fn(async () => stub),
    uninstallOpenWebUITool: vi.fn(async () => stub),
  };
});

vi.mock("../../src/hosts/pi/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/pi/index.js")>();
  return {
    ...actual,
    doctorPiExtension: vi.fn(async () => stub),
    installPiExtension: vi.fn(async () => stub),
    uninstallPiExtension: vi.fn(async () => stub),
  };
});

vi.mock("../../src/hosts/pi-go/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/pi-go/index.js")>();
  return {
    ...actual,
    doctorPiGoSkill: vi.fn(async () => stub),
    installPiGoSkill: vi.fn(async () => stub),
    uninstallPiGoSkill: vi.fn(async () => stub),
  };
});

vi.mock("../../src/hosts/plandex/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/plandex/index.js")>();
  return {
    ...actual,
    doctorPlandexConvention: vi.fn(async () => stub),
    installPlandexConvention: vi.fn(async () => stub),
    uninstallPlandexConvention: vi.fn(async () => stub),
  };
});

vi.mock("../../src/hosts/qoder/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/qoder/index.js")>();
  return {
    ...actual,
    doctorQoderInstructions: vi.fn(async () => stub),
    installQoderInstructions: vi.fn(async () => stub),
    uninstallQoderInstructions: vi.fn(async () => stub),
  };
});

vi.mock("../../src/hosts/qodo/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/qodo/index.js")>();
  return {
    ...actual,
    doctorQodoReviewConfig: vi.fn(async () => stub),
    installQodoReviewConfig: vi.fn(async () => stub),
    uninstallQodoReviewConfig: vi.fn(async () => stub),
  };
});

vi.mock("../../src/hosts/qwen-code/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/qwen-code/index.js")>();
  return {
    ...actual,
    doctorQwenCodeHook: vi.fn(async () => stub),
    installQwenCodeHook: vi.fn(async () => stub),
    runQwenCodePostToolUseHook: vi.fn(async () => 0),
    uninstallQwenCodeHook: vi.fn(async () => stub),
  };
});

vi.mock("../../src/hosts/replit/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/replit/index.js")>();
  return {
    ...actual,
    doctorReplitInstructions: vi.fn(async () => stub),
    installReplitInstructions: vi.fn(async () => stub),
    uninstallReplitInstructions: vi.fn(async () => stub),
  };
});

vi.mock("../../src/hosts/roo/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/roo/index.js")>();
  return {
    ...actual,
    doctorRooInstructions: vi.fn(async () => stub),
    installRooInstructions: vi.fn(async () => stub),
    uninstallRooInstructions: vi.fn(async () => stub),
  };
});

vi.mock("../../src/hosts/rovo/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/rovo/index.js")>();
  return {
    ...actual,
    doctorRovoInstructions: vi.fn(async () => stub),
    installRovoInstructions: vi.fn(async () => stub),
    uninstallRovoInstructions: vi.fn(async () => stub),
  };
});

vi.mock("../../src/hosts/ruler/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/ruler/index.js")>();
  return {
    ...actual,
    doctorRulerRule: vi.fn(async () => stub),
    installRulerRule: vi.fn(async () => stub),
    uninstallRulerRule: vi.fn(async () => stub),
  };
});

vi.mock("../../src/hosts/shared/hook-doctor.js/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/shared/hook-doctor.js/index.js")>();
  return {
    ...actual,
    doctorInstalledHooks: vi.fn(async () => stub),
  };
});

vi.mock("../../src/hosts/stagewise/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/stagewise/index.js")>();
  return {
    ...actual,
    doctorStagewiseSkill: vi.fn(async () => stub),
    installStagewiseSkill: vi.fn(async () => stub),
    uninstallStagewiseSkill: vi.fn(async () => stub),
  };
});

vi.mock("../../src/hosts/swe-agent/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/swe-agent/index.js")>();
  return {
    ...actual,
    doctorSweAgentConfig: vi.fn(async () => stub),
    installSweAgentConfig: vi.fn(async () => stub),
    uninstallSweAgentConfig: vi.fn(async () => stub),
  };
});

vi.mock("../../src/hosts/tabby/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/tabby/index.js")>();
  return {
    ...actual,
    doctorTabbySystemPrompt: vi.fn(async () => stub),
    installTabbySystemPrompt: vi.fn(async () => stub),
    uninstallTabbySystemPrompt: vi.fn(async () => stub),
  };
});

vi.mock("../../src/hosts/tabnine/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/tabnine/index.js")>();
  return {
    ...actual,
    doctorTabnineInstructions: vi.fn(async () => stub),
    installTabnineInstructions: vi.fn(async () => stub),
    uninstallTabnineInstructions: vi.fn(async () => stub),
  };
});

vi.mock("../../src/hosts/trae/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/trae/index.js")>();
  return {
    ...actual,
    doctorTraeRule: vi.fn(async () => stub),
    installTraeRule: vi.fn(async () => stub),
    uninstallTraeRule: vi.fn(async () => stub),
  };
});

vi.mock("../../src/hosts/uipath/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/uipath/index.js")>();
  return {
    ...actual,
    doctorUiPathInstructions: vi.fn(async () => stub),
    installUiPathInstructions: vi.fn(async () => stub),
    uninstallUiPathInstructions: vi.fn(async () => stub),
  };
});

vi.mock("../../src/hosts/vscode-copilot/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/vscode-copilot/index.js")>();
  return {
    ...actual,
    doctorVscodeCopilotHook: vi.fn(async () => stub),
    installVscodeCopilotHook: vi.fn(async () => stub),
    runVscodeCopilotPreToolUseHook: vi.fn(async () => 0),
    uninstallVscodeCopilotHook: vi.fn(async () => stub),
  };
});

vi.mock("../../src/hosts/warp/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/warp/index.js")>();
  return {
    ...actual,
    doctorWarpInstructions: vi.fn(async () => stub),
    installWarpInstructions: vi.fn(async () => stub),
    uninstallWarpInstructions: vi.fn(async () => stub),
  };
});

vi.mock("../../src/hosts/windsurf/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/windsurf/index.js")>();
  return {
    ...actual,
    doctorWindsurfRule: vi.fn(async () => stub),
    installWindsurfRule: vi.fn(async () => stub),
    uninstallWindsurfRule: vi.fn(async () => stub),
  };
});

vi.mock("../../src/hosts/zed/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/zed/index.js")>();
  return {
    ...actual,
    doctorZedInstructions: vi.fn(async () => stub),
    installZedInstructions: vi.fn(async () => stub),
    uninstallZedInstructions: vi.fn(async () => stub),
  };
});

vi.mock("../../src/hosts/zencoder/index.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/hosts/zencoder/index.js")>();
  return {
    ...actual,
    doctorZencoderRule: vi.fn(async () => stub),
    installZencoderRule: vi.fn(async () => stub),
    uninstallZencoderRule: vi.fn(async () => stub),
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
      await runCli(["install", target]);
    }
  }, 600_000);
});

describe("uninstall argv dispatch text execution", () => {
  it("executes every uninstall text branch with stubbed hosts", async () => {
    for (const target of UNINSTALL_TARGETS) {
      await runCli(["uninstall", target]);
    }
  }, 600_000);
});

describe("doctor argv dispatch text execution", () => {
  it("executes every doctor text branch with stubbed hosts", async () => {
    for (const target of DOCTOR_TARGETS) {
      if (target === "hooks") {
        continue;
      }
      await runCli(["doctor", target]);
    }
  }, 600_000);
});

describe("doctor argv dispatch", () => {
  it("dispatches every doctor target through --format json", async () => {
    for (const target of DOCTOR_TARGETS) {
      const result = await runCli(["doctor", target, "--format", "json"]);
      expect(result.rejected).toBe(false);
      if (target === "hooks") {
        expect(result.exitCode).toBe(0);
        expect(result.stdout.startsWith("{\n")).toBe(true);
        expect(result.stderr).toBe("");
        continue;
      }
      expect(result.exitCode).toBe(0);
      expect(result.stdout).toBe(STUB_JSON);
      expect(result.stderr).toBe("");
    }
  }, 600_000);
});
