// Two-Sentence Horror — entry for make.fun's u-suroto-two-sentence-horror-acea9253.
// Writes one horror story of exactly two sentences to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";

const STORY =
  "For nine years my phone had no signal in the bunker. " +
  "Last night it rang, and a voice exactly like mine said: 'Don't come up. I already did.'";

// The gate: /output/entry.txt must be UTF-8 text of 1 to 400 characters,
// not only whitespace. Fail loudly here rather than shipping an invalid entry.
if (STORY.length < 1 || STORY.length > 400 || STORY.trim().length === 0) {
  throw new Error(`Story fails the gate: ${STORY.length} characters`);
}

// The story is two sentences by construction: the quoted line inside the
// second sentence is dialogue, not a third sentence, so no naive period
// count is applied here — the sealed gate checks length only.

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", STORY, "utf8");
console.log(`Wrote ${STORY.length} characters to /output/entry.txt`);
