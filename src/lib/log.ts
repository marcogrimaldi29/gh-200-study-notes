/**
 * Parses a runner log, written as plain text in a `log` code block, into the
 * structure an Actions log viewer shows. Runs at build time only.
 *
 * Understood, in both the workflow-command form a step prints (`::error::`) and
 * the form the raw log stores (`##[error]`):
 *
 *   ::group::Title / ::endgroup::   a foldable section
 *   ::error …::msg                  a red annotation line ("Error: msg")
 *   ::warning …::msg                an orange annotation line
 *   ::notice …::msg                 a blue annotation line
 *   ::debug::msg                    a muted debug line
 *
 * Annotation parameters (file=, line=, col=, title=) are kept and shown as a
 * muted location after the message, the way the annotation lists them.
 */

export type Annotation = 'error' | 'warning' | 'notice' | 'debug';

export interface LogLine {
  kind: 'line';
  n: number;
  text: string;
  annotation?: Annotation;
  location?: string;
}

export interface LogGroup {
  kind: 'group';
  n: number;
  title: string;
  lines: LogLine[];
}

export type LogItem = LogLine | LogGroup;

const COMMAND = /^(?:::(group|endgroup|error|warning|notice|debug)(?:\s+([^:]*?))?::|##\[(group|endgroup|error|warning|notice|debug)\])(.*)$/;

function location(params?: string): string | undefined {
  if (!params) return undefined;
  const map = Object.fromEntries(
    params
      .split(',')
      .map((p) => p.split('=').map((s) => s.trim()))
      .filter((kv) => kv.length === 2),
  );
  if (!map.file) return map.title || undefined;
  return `${map.file}${map.line ? `#L${map.line}` : ''}${map.col ? `:${map.col}` : ''}`;
}

export function parseLog(source: string): LogItem[] {
  const items: LogItem[] = [];
  let group: LogGroup | null = null;
  let n = 0;

  for (const raw of source.replace(/\r/g, '').split('\n')) {
    const m = raw.match(COMMAND);
    const cmd = m ? (m[1] || m[3]) : undefined;

    if (cmd === 'group') {
      group = { kind: 'group', n: ++n, title: m![4].trim(), lines: [] };
      items.push(group);
      continue;
    }
    if (cmd === 'endgroup') {
      group = null;
      continue;
    }

    const line: LogLine = { kind: 'line', n: ++n, text: raw };
    if (cmd) {
      line.annotation = cmd as Annotation;
      line.text = m![4];
      line.location = location(m![2]);
    }
    (group ? group.lines : items).push(line);
  }
  return items;
}
