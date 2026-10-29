export type CompactionKind =
  | "head-tail-omission"
  | "middle-truncation"
  | "tail-truncation"
  | "hashed-middle-clip"
  | "git-diff-hunk-clip"
  | "inspection-package-lock-summary"
  | "repeated-emoji-banner-omission"
  | "github-actions-command-list-omission"
  | "github-actions-log-signal-filter"
  | "github-status-check-rollup-omission"
  | "no-omit-head-tail-passthrough"
  | "no-omit-char-clip-passthrough"
  | "no-omit-domain-passthrough";

export type CompactionMetadata = {
  authoritative: boolean;
  kinds: CompactionKind[];
};

export const NO_COMPACTION_METADATA: CompactionMetadata = {
  authoritative: false,
  kinds: [],
};

export const WRAP_OMISSION_FOOTER = "[tokenjuice] Output was compacted. Content was omitted.";

function buildCompactionMetadata(authoritative: boolean, ...kinds: CompactionKind[]): CompactionMetadata {
  if (kinds.length === 0) {
    return NO_COMPACTION_METADATA;
  }

  return {
    authoritative,
    kinds: Array.from(new Set(kinds)),
  };
}

export function createCompactionMetadata(...kinds: CompactionKind[]): CompactionMetadata {
  return buildCompactionMetadata(true, ...kinds);
}

export function createPassthroughCompactionMetadata(...kinds: CompactionKind[]): CompactionMetadata {
  return buildCompactionMetadata(false, ...kinds);
}

export function mergeCompactionMetadata(...values: Array<CompactionMetadata | undefined>): CompactionMetadata {
  const presentValues = values.filter((value): value is CompactionMetadata => Boolean(value) && (value?.kinds.length ?? 0) > 0);
  if (presentValues.length === 0) {
    return NO_COMPACTION_METADATA;
  }

  const kinds = presentValues.flatMap((value) => value.kinds);
  return buildCompactionMetadata(presentValues.every((value) => value.authoritative), ...kinds);
}
