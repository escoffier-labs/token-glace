import { describe, expect, it } from "vitest";

import { runDist } from "./helpers/run-dist.js";

describe("core command flag coverage", () => {
  it("reduce supports json, raw, store, classifier, and trace flags", async () => {
    const result = await runDist(
      ["reduce", "--format", "json", "--raw", "--store", "--classifier", "generic/fallback", "--trace"],
      "line one\nline two\n",
    );
    expect(result.exitCode).toBe(0);
    expect(result.stdout.startsWith("{\n")).toBe(true);
    expect(result.stderr).toBe("");
  });

  it("wrap supports raw, tee, store, source, and trace flags", async () => {
    const result = await runDist([
      "wrap",
      "--raw",
      "--tee",
      "--store",
      "--source",
      "wrap",
      "--trace",
      "--",
      "printf",
      "ok",
    ]);
    expect(result.exitCode).toBe(0);
    expect(result.stderr).toBe("");
  });

  it("verify supports fixtures and json output", async () => {
    const result = await runDist(["verify", "--fixtures", "--format", "json"]);
    expect(result.exitCode).toBe(0);
    expect(result.stdout.startsWith("{\n")).toBe(true);
    expect(result.stderr).toBe("");
  });

  it("discover supports json output and analysis flags", async () => {
    const result = await runDist(
      [
        "discover",
        "--format",
        "json",
        "--source-command",
        "echo hi",
        "--tool-name",
        "exec",
        "--exit-code",
        "0",
        "--source",
        "wrap",
        "--by-source",
      ],
      "sample\n",
    );
    expect(result.exitCode).toBe(0);
    expect(result.stdout.startsWith("{\n")).toBe(true);
    expect(result.stderr).toBe("");
  });

  it("stats supports json output and timezone filtering", async () => {
    const result = await runDist(["stats", "--format", "json", "--timezone", "utc", "--by-source"]);
    expect(result.exitCode).toBe(0);
    expect(result.stdout.startsWith("{\n")).toBe(true);
    expect(result.stderr).toBe("");
  });

  it("doctor analyzes piped input with json output", async () => {
    const result = await runDist(
      [
        "doctor",
        "--format",
        "json",
        "--source-command",
        "echo hi",
        "--tool-name",
        "exec",
        "--exit-code",
        "0",
      ],
      "doctor sample\n",
    );
    expect(result.exitCode).toBe(0);
    expect(result.stdout.startsWith("{\n")).toBe(true);
    expect(result.stderr).toBe("");
  });

  it("ls supports json output", async () => {
    const result = await runDist(["ls", "--format", "json"]);
    expect(result.exitCode).toBe(0);
    expect(result.stdout.startsWith("[")).toBe(true);
    expect(result.stderr).toBe("");
  });
});
