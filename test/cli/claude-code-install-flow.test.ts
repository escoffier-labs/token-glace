import { mkdir, mkdtemp, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { delimiter, join } from "node:path";

import { afterEach, describe, expect, it } from "vitest";

import { runCli } from "./helpers/run-cli.js";

const tempDirs: string[] = [];

afterEach(async () => {
  await Promise.all(tempDirs.splice(0).map((dir) => rm(dir, { recursive: true, force: true })));
});

describe("Claude Code install verification", () => {
  it("prints a verification command that accepts an opt-in PreToolUse install", async () => {
    const home = await mkdtemp(join(tmpdir(), "tokenjuice-claude-code-cli-"));
    tempDirs.push(home);
    const binDir = join(home, "bin");
    await mkdir(binDir);
    await writeFile(join(binDir, "tokenjuice"), "#!/bin/sh\nexit 0\n", { mode: 0o755 });
    const env = {
      HOME: home,
      CLAUDE_CONFIG_DIR: home,
      PATH: [binDir, process.env.PATH].filter(Boolean).join(delimiter),
    };

    const install = await runCli(["install", "claude-code", "--pre-tool-use"], { env });

    expect(install.exitCode).toBe(0);
    expect(install.stderr).toBe("");
    const verifyCommand = install.stdout.match(/^\s*Verify\s*:\s*(.+)$/mu)?.[1];
    expect(verifyCommand).toBe("tokenjuice doctor claude-code --pre-tool-use");

    const verify = await runCli(verifyCommand!.split(" ").slice(1), { env });

    expect(verify.exitCode).toBe(0);
    expect(verify.stderr).toBe("");
    expect(verify.stdout).toContain("health: ok\n");
  });

  it("lets oversized PostToolUse payloads reach the fail-open adapter", async () => {
    const payload = JSON.stringify({
      hook_event_name: "PostToolUse",
      tool_name: "Read",
      padding: "x".repeat(16 * 1024 * 1024),
    });

    const result = await runCli(["claude-code-post-tool-use"], { stdin: payload });

    expect(result.exitCode).toBe(0);
    expect(result.stdout).toBe("");
    expect(result.stderr).toBe("");
  }, 40_000);
});
