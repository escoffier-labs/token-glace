import { defineConfig } from "vitest/config";

// Standalone on purpose: mergeConfig(base, ...) CONCATENATES include globs,
// which pulled the entire test/ suite into this run with 101 host modules
// mocked, poisoning real host tests. This config runs exactly one file.
export default defineConfig({
  test: {
    environment: "node",
    include: ["test/cli/bulk-dispatch.impl.ts"],
    env: {
      TOKENJUICE_NO_OMISSION: "",
    },
  },
});
