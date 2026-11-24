// Office joke entry: one line, written to the grader's output file.
// The joke is kept as a list of fragments and joined at run time so the
// program builds its single line from parts instead of printing a literal.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const fragments = [
  "I asked IT for a second monitor;",
  "they scheduled a meeting",
  "to discuss whether I really need one.",
];

const joke = fragments.join(" ");

// Guard the bounty gate before writing: one line, 1-199 characters,
// and nothing but the joke itself.
if (joke.length < 1 || joke.length > 199 || joke.includes("\n")) {
  throw new Error(`entry out of bounds: ${joke.length} characters`);
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), joke, "utf8");
