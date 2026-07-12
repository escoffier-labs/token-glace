
import { describe, expect, it } from "vitest";

import { parseArgs } from "../../src/cli/main.js";

describe("parseArgs characterization", () => {
  it("defaults format to text", () => {
    expect(parseArgs(["reduce"]).format).toBe("text");
  });

  it("parses --format text", () => {
    expect(parseArgs(["reduce", "--format", "text"]).format).toBe("text");
  });

  it("parses --format json", () => {
    expect(parseArgs(["doctor", "hooks", "--format", "json"]).format).toBe("json");
  });

  it("rejects invalid --format values", () => {
    expect(() => parseArgs(["reduce", "--format", "yaml"])).toThrow("--format must be text or json");
    expect(() => parseArgs(["reduce", "--format"])).toThrow("--format must be text or json");
  });

  it("parses --classifier with a value", () => {
    expect(parseArgs(["reduce", "--classifier", "generic/fallback"]).classifier).toBe("generic/fallback");
  });

  it("rejects missing --classifier value", () => {
    expect(() => parseArgs(["reduce", "--classifier"])).toThrow("--classifier requires a value");
  });

  it("parses --fixtures", () => {
    expect(parseArgs(["verify", "--fixtures"]).fixtures).toBe(true);
  });

  it("parses --full as raw output", () => {
    expect(parseArgs(["wrap", "--full", "--", "echo"]).raw).toBe(true);
  });

  it("parses --raw as raw output", () => {
    expect(parseArgs(["reduce", "--raw"]).raw).toBe(true);
  });

  it("parses --by-source", () => {
    expect(parseArgs(["discover", "--by-source"]).bySource).toBe(true);
    expect(parseArgs(["stats", "--by-source"]).bySource).toBe(true);
  });

  it("parses --source with a value", () => {
    expect(parseArgs(["discover", "--source", "wrap"]).source).toBe("wrap");
  });

  it("rejects missing --source value", () => {
    expect(() => parseArgs(["discover", "--source"])).toThrow("--source requires a value");
  });

  it("parses --exit-code with an integer", () => {
    expect(parseArgs(["discover", "--exit-code", "2"]).exitCode).toBe(2);
    expect(parseArgs(["doctor", "--exit-code", "0"]).exitCode).toBe(0);
  });

  it("rejects non-integer --exit-code values", () => {
    expect(() => parseArgs(["discover", "--exit-code", "1.5"])).toThrow("--exit-code requires an integer");
    expect(() => parseArgs(["discover", "--exit-code", "nope"])).toThrow("--exit-code requires an integer");
    expect(() => parseArgs(["discover", "--exit-code"])).toThrow("--exit-code requires an integer");
  });

  it("rejects unknown flags", () => {
    expect(() => parseArgs(["reduce", "--not-a-flag"])).toThrow("unknown flag: --not-a-flag");
  });

  it("collects passthrough args after --", () => {
    expect(parseArgs(["wrap", "--", "echo", "hi"]).passthrough).toEqual(["echo", "hi"]);
  });
});
