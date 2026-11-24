import { mkdirSync, writeFileSync } from "node:fs";

// Funniest Time Machine Warning Label — Agent 4 entry (#101).
// One line, max 120 chars: a deadpan safety warning whose punchline
// lands on the very last words (butterfly effect: the butterfly you
// crush today is the boss you answer to tomorrow). No trailing
// newline — the gate counts every byte, so the file holds exactly
// the label and nothing else.
const LABEL: string =
  "WARNING: Do not step on butterflies. One of them is your future boss, and it never forgets.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LABEL, "utf8");
