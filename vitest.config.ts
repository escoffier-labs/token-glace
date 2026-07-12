import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "node",
    globalSetup: ["test/setup/global-artifacts.ts"],
    include: ["test/**/*.test.ts"],
    env: {
      // Dogfooding machines export TOKENJUICE_NO_OMISSION=1 so their own agent
      // sessions skip compaction. Leaking it into the suite disables the exact
      // behavior under test (23 hook tests fail with additionalContext
      // undefined). Empty string is not truthy to readNoOmissionFromEnv.
      TOKENJUICE_NO_OMISSION: "",
    },
  },
});
