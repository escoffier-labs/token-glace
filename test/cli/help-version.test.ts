import { describe, expect, it } from "vitest";

import { EXPECTED_HELP, VERSION_LINE, runDist } from "./helpers/run-dist.js";
import { runCli } from "./helpers/run-cli.js";

describe("help and version surfaces", () => {
  it("prints byte-exact usage for tokenjuice --help", async () => {
    const result = await runDist(["--help"]);
    expect(result.exitCode).toBe(0);
    expect(result.stdout).toBe("");
    expect(result.stderr).toBe(EXPECTED_HELP);
  });

  it("prints byte-exact usage for tokenjuice -h", async () => {
    const result = await runDist(["-h"]);
    expect(result.exitCode).toBe(0);
    expect(result.stderr).toBe(EXPECTED_HELP);
  });

  it("prints byte-exact usage for tokenjuice help", async () => {
    const result = await runDist(["help"]);
    expect(result.exitCode).toBe(0);
    expect(result.stderr).toBe(EXPECTED_HELP);
  });

  it("prints byte-exact usage for token-glace bin alias argv", async () => {
    const result = await runDist(["--help"]);
    expect(result.exitCode).toBe(0);
    expect(result.stderr).toBe(EXPECTED_HELP);
  });

  it("prints byte-exact version for tokenjuice --version", async () => {
    const result = await runDist(["--version"]);
    expect(result.exitCode).toBe(0);
    expect(result.stdout).toBe(VERSION_LINE);
    expect(result.stderr).toBe("");
  });

  it("prints byte-exact version for tokenjuice -v", async () => {
    const result = await runDist(["-v"]);
    expect(result.exitCode).toBe(0);
    expect(result.stdout).toBe(VERSION_LINE);
  });

  it("prints byte-exact version for tokenjuice version", async () => {
    const result = await runDist(["version"]);
    expect(result.exitCode).toBe(0);
    expect(result.stdout).toBe(VERSION_LINE);
  });

  it("matches in-process help output from runCli", async () => {
    const result = await runCli(["--help"]);
    expect(result.exitCode).toBe(0);
    expect(result.stdout).toBe("");
    expect(result.stderr).toBe(EXPECTED_HELP);
  });
});
