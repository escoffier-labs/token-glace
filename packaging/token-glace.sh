#!/usr/bin/env bash
set -euo pipefail

NODE_BIN="${NODE_BIN:-node}"

exec "$NODE_BIN" "/usr/lib/token-glace/dist/cli/main.js" "$@"
