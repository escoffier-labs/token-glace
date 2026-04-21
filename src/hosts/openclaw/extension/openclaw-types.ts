// structural types that mirror the shape of `openclaw/plugin-sdk` without
// requiring it as a runtime dependency. openclaw does not publish its plugin
// sdk to npm, so we duck-type against the shape we observe at runtime.

export type OpenClawPluginLogger = {
  debug?: (message: string) => void;
  info: (message: string) => void;
  warn: (message: string) => void;
  error: (message: string) => void;
};

export type OpenClawBeforeToolCallEvent = {
  toolName: string;
  params: Record<string, unknown>;
  runId?: string;
  toolCallId?: string;
};

export type OpenClawAfterToolCallEvent = {
  toolName: string;
  params: Record<string, unknown>;
  runId?: string;
  toolCallId?: string;
  result?: unknown;
  error?: string;
  durationMs?: number;
};

export type OpenClawToolContext = {
  agentId?: string;
  sessionKey?: string;
  sessionId?: string;
  runId?: string;
  toolName?: string;
  toolCallId?: string;
};

export type OpenClawToolResultContentBlock = {
  type?: string;
  text?: string;
  [key: string]: unknown;
};

export type OpenClawToolResultMessage = {
  role?: string;
  toolCallId?: string;
  toolName?: string;
  content?: OpenClawToolResultContentBlock[] | unknown;
  details?: Record<string, unknown>;
  [key: string]: unknown;
};

export type OpenClawToolResultPersistEvent = {
  toolName?: string;
  toolCallId?: string;
  message: OpenClawToolResultMessage;
  isSynthetic?: boolean;
};

export type OpenClawToolResultPersistResult = {
  message?: OpenClawToolResultMessage;
};

export type OpenClawPluginApi = {
  pluginConfig?: Record<string, unknown>;
  logger: OpenClawPluginLogger;
  on(
    hookName: "before_tool_call",
    handler: (event: OpenClawBeforeToolCallEvent, ctx: OpenClawToolContext) => void,
  ): void;
  on(
    hookName: "after_tool_call",
    handler: (event: OpenClawAfterToolCallEvent, ctx: OpenClawToolContext) => void,
  ): void;
  on(
    hookName: "tool_result_persist",
    handler: (
      event: OpenClawToolResultPersistEvent,
      ctx: OpenClawToolContext,
    ) => OpenClawToolResultPersistResult | void,
  ): void;
  on(hookName: string, handler: (...args: unknown[]) => unknown): void;
};
