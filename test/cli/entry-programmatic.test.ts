import { describe, expect, it } from "vitest";

import { parseArgs } from "../../src/cli/main.js";
import { EXPECTED_HELP, runDist } from "./helpers/run-dist.js";
import { runCli } from "./helpers/run-cli.js";

describe("programmatic CLI entry contracts", () => {
  it("resolves with exit code 0 for help without rejecting", async () => {
    const result = await runCli(["--help"]);
    expect(result.rejected).toBe(false);
    expect(result.exitCode).toBe(0);
    expect(result.stderr).toBe(EXPECTED_HELP);
  }, 15_000);

  it("resolves with exit code 1 for unknown commands without rejecting", async () => {
    const result = await runCli(["not-a-real-command"]);
    expect(result.rejected).toBe(false);
    expect(result.exitCode).toBe(1);
    expect(result.stderr).toBe(EXPECTED_HELP);
  }, 15_000);

  it("resolves with exit code 1 for parseArgs failures without rejecting", async () => {
    const result = await runCli(["reduce", "--format", "xml"]);
    expect(result.rejected).toBe(false);
    expect(result.exitCode).toBe(1);
    expect(result.stderr).toBe("--format must be text or json\n");
  }, 15_000);

  it("resolves with exit code 1 for missing cat id without rejecting", async () => {
    const result = await runDist(["cat"]);
    expect(result.exitCode).toBe(1);
    expect(result.stderr).toBe("cat requires an artifact id\n");
  });

  it("resolves with exit code 1 for missing artifact without rejecting", async () => {
    const result = await runDist(["cat", "tj_doesnotexist"]);
    expect(result.exitCode).toBe(1);
    expect(result.stderr).toBe("artifact not found: tj_doesnotexist\n");
  });

  it("resolves with exit code 1 for empty reduce-json input without rejecting", async () => {
    const result = await runDist(["reduce-json"], "");
    expect(result.exitCode).toBe(1);
    expect(result.stderr).toBe("reduce-json requires JSON input from stdin or a file\n");
  });

  it("parseArgs throws for invalid flags instead of returning a result", () => {
    expect(() => parseArgs(["verify", "--exit-code", "x"])).toThrow("--exit-code requires an integer");
  });

  it("parseArgs throws for unknown flags instead of returning a result", () => {
    expect(() => parseArgs(["stats", "--bogus"])).toThrow("unknown flag: --bogus");
  });
});
