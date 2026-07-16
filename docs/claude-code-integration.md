# Claude Code integration

## Default PostToolUse hook

`tokenjuice install claude-code` writes a `PostToolUse` hook for `Bash` into `~/.claude/settings.json`. The hook compacts `tool_response.stdout` after the command finishes and returns Claude Code's documented replacement shape:

```json
{
  "hookSpecificOutput": {
    "hookEventName": "PostToolUse",
    "updatedToolOutput": {
      "stdout": "<compacted stdout>",
      "stderr": "<original stderr>",
      "interrupted": false,
      "isImage": false
    }
  }
}
```

The hook leaves `tool_input.command` unchanged. Other `PostToolUse` hooks still receive the command Claude Code ran, so command observers and policy hooks do not need to unwrap a tokenjuice launcher.

Claude Code requires `updatedToolOutput` to match the Bash result schema. A plain string, `additionalContext`, or `suppressOutput` does not replace the original Bash output. See the [Claude Code hooks reference](https://code.claude.com/docs/en/hooks#posttooluse-decision-control).

Output at or below 16384 characters passes through unchanged. Set `TOKENJUICE_CLAUDE_CODE_MIN_REDUCE_CHARS` to a positive integer to change that threshold. Commands already routed through `tokenjuice wrap`, including `--raw` and `--full`, also pass through without a second compaction.

## Optional PreToolUse wrapping

Users who want command-side wrapping can opt in:

```bash
tokenjuice install claude-code --pre-tool-use
```

This mode rewrites the Bash command through `tokenjuice wrap` before execution. The rewrite persists into later hook payloads. A downstream hook reading `tool_input.command` sees the wrapper command instead of the original command, so this mode can interfere with command observers and enforcement hooks.

Running the default install command removes the tokenjuice-managed `PreToolUse` entry and installs `PostToolUse`. Running the opt-in command performs the reverse migration. Unrelated hooks and settings remain in place.

## Doctor and uninstall

Check the default mode:

```bash
tokenjuice doctor claude-code
```

Check an intentional wrapping install:

```bash
tokenjuice doctor claude-code --pre-tool-use
```

`tokenjuice uninstall claude-code` removes tokenjuice-managed entries from both hook events while preserving other handlers in the same matcher groups.
