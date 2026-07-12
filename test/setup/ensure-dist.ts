import { execFileSync } from "node:child_process";
import { existsSync } from "node:fs";
import { join } from "node:path";

/**
 * test/cli spawn-based characterization tests execute dist/cli/main.js as a
 * real child process. `pnpm verify` deliberately has no build step, so a fresh
 * checkout (CI) has no dist and every spawn exits 1 with module-not-found.
 * Build once when the artifact is absent; a stat check otherwise.
 */
export default function setup(): void {
  const entry = join(process.cwd(), "dist", "cli", "main.js");
  if (existsSync(entry)) {
    return;
  }
  execFileSync("pnpm", ["run", "build"], { stdio: "inherit", cwd: process.cwd() });
}
