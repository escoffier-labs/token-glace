import { realpath } from "node:fs/promises";
import { PassThrough } from "node:stream";
import { fileURLToPath } from "node:url";

import { vi } from "vitest";

import { captureProcessStdio } from "./stdio.js";

let cachedMainPath: string | undefined;

async function resolveMainPath(): Promise<string> {
  if (!cachedMainPath) {
    cachedMainPath = await realpath(fileURLToPath(new URL("../../../src/cli/main.ts", import.meta.url)));
  }
  return cachedMainPath;
}

export type RunCliOptions = {
  stdin?: string;
  env?: NodeJS.ProcessEnv;
  cwd?: string;
};

export type RunCliResult = {
  exitCode: number;
  stdout: string;
  stderr: string;
  rejected: boolean;
  rejectionMessage: string | undefined;
};

function restoreStdin(originalStdin: typeof process.stdin, restoreIsTty: () => void): void {
  Object.defineProperty(process, "stdin", {
    configurable: true,
    value: originalStdin,
  });
  restoreIsTty();
}

function mockStdin(payload: string): () => void {
  const originalStdin = process.stdin;
  const stream = new PassThrough();
  const originalIsTty = process.stdin.isTTY;
  Object.defineProperty(stream, "isTTY", {
    configurable: true,
    value: false,
  });
  stream.end(payload);
  Object.defineProperty(process, "stdin", {
    configurable: true,
    value: stream,
  });

  return () => {
    restoreStdin(originalStdin, () => {
      Object.defineProperty(process.stdin, "isTTY", {
        configurable: true,
        value: originalIsTty,
      });
    });
  };
}

async function waitForCliCompletion(): Promise<void> {
  const deadline = Date.now() + 30_000;
  while (Date.now() < deadline) {
    if (process.exitCode !== undefined) {
      return;
    }
    await new Promise<void>((resolve) => {
      setImmediate(resolve);
    });
  }
  process.exitCode = 1;
}

let runCliChain: Promise<unknown> = Promise.resolve();

export async function runCli(argv: string[], options: RunCliOptions = {}): Promise<RunCliResult> {
  let release = () => {};
  const previous = runCliChain;
  runCliChain = new Promise<void>((resolve) => {
    release = resolve;
  });
  await previous;
  try {
    return await runCliOnce(argv, options);
  } finally {
    release();
  }
}

async function runCliOnce(argv: string[], options: RunCliOptions = {}): Promise<RunCliResult> {
  const mainPath = await resolveMainPath();
  const stdio = captureProcessStdio();
  const restoreStdinFn = options.stdin === undefined ? undefined : mockStdin(options.stdin);

  const originalArgv = process.argv.slice();
  const originalExitCode = process.exitCode;
  const envSnapshot = { ...process.env };
  const originalCwd = process.cwd();
  const touchedEnvKeys = new Set<string>();

  if (options.env) {
    for (const [key, value] of Object.entries(options.env)) {
      touchedEnvKeys.add(key);
      if (value === undefined) {
        delete process.env[key];
      } else {
        process.env[key] = value;
      }
    }
  }

  if (options.cwd) {
    process.chdir(options.cwd);
  }

  process.argv = ["node", mainPath, ...argv];
  process.exitCode = undefined;

  let rejected = false;
  let rejectionMessage: string | undefined;

  vi.resetModules();
  try {
    await import("../../../src/cli/main.js");
    await waitForCliCompletion();
  } catch (error: unknown) {
    rejected = true;
    rejectionMessage = error instanceof Error ? error.message : String(error);
  }

  {
    const { stdout, stderr } = stdio.getOutput();
    stdio.release();
    restoreStdinFn?.();

    const exitCode = process.exitCode ?? (rejected ? 1 : 0);
    process.argv = originalArgv;
    process.exitCode = originalExitCode;
    for (const key of touchedEnvKeys) {
      const value = envSnapshot[key];
      if (value === undefined) {
        delete process.env[key];
      } else {
        process.env[key] = value;
      }
    }
    process.chdir(originalCwd);

    return {
      exitCode,
      stdout,
      stderr,
      rejected,
      rejectionMessage,
    };
  }
}
