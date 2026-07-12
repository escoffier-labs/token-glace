import { readFileSync } from "node:fs";
import { mkdtemp } from "node:fs/promises";
import { spawn } from "node:child_process";
import { tmpdir } from "node:os";
import { join } from "node:path";

import { createIsolatedHome } from "./isolated-home.js";

const repoRoot = process.cwd();
const mainJs = join(repoRoot, "dist/cli/main.js");
const packageJson = JSON.parse(readFileSync(join(repoRoot, "package.json"), "utf8")) as { version: string };
export const EXPECTED_HELP = readFileSync(join(repoRoot, "test/cli/fixtures/usage.stderr.txt"), "utf8");

export type RunDistResult = {
  exitCode: number;
  stdout: string;
  stderr: string;
};

export async function runDist(argv: string[], stdin?: string): Promise<RunDistResult> {
  // Every spawn gets a throwaway cwd AND an isolated home/env. Install-family
  // subcommands write into their project dir, which defaults to cwd: running
  // them from the repo root once littered 124 AGENTS.md.bak.N files.
  const cwd = await mkdtemp(join(tmpdir(), "tokenjuice-cli-cwd-"));
  const { env } = await createIsolatedHome();
  // isolated-home blanks PATH for in-process mocks; wrap tests spawn real
  // binaries, so the child keeps the parent PATH.
  env.PATH = process.env.PATH;
  return await new Promise<RunDistResult>((resolve, reject) => {
    const child = spawn(process.execPath, [mainJs, ...argv], {
      cwd,
      env,
      stdio: ["pipe", "pipe", "pipe"],
    });

    let stdout = "";
    let stderr = "";
    child.stdout.setEncoding("utf8");
    child.stderr.setEncoding("utf8");
    child.stdout.on("data", (chunk) => {
      stdout += chunk;
    });
    child.stderr.on("data", (chunk) => {
      stderr += chunk;
    });
    child.on("error", reject);
    child.on("close", (code) => {
      resolve({
        exitCode: code ?? 1,
        stdout,
        stderr,
      });
    });

    if (stdin !== undefined) {
      child.stdin.write(stdin);
    }
    child.stdin.end();
  });
}

export const VERSION_LINE = `${packageJson.version}\n`;
