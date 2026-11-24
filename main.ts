// Entry for make.fun's "Weirdest Job Title: Blind Judge Showdown".
// Writes exactly one job title (60 characters at most) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const TITLE = "Senior Vice President of Office Plant Morale";

// The gate requires 1-60 characters, so never write an over-long title.
if (TITLE.length === 0 || TITLE.length > 60) {
  throw new Error(`title must be 1-60 characters, got ${TITLE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TITLE, "utf8");
