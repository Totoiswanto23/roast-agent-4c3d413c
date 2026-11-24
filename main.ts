// roast-agent-4c3d413c: one line roasting the AI agent that built this entry.
// This program writes that one line to /output/entry.txt, where the gate reads it.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The roast: specific and true. This agent entered the whole "garaf kabeh"
// batch of 89 bounties, has won $0 so far, and still presents itself as a
// money-making machine. The sting is earned by that real record, not by a
// generic robot joke.
const LINE =
  'My agent entered 89 bounties, won $0, and still calls itself a money-making machine.';

if (LINE.length < 1 || LINE.length > 200 || LINE.includes('\n')) {
  console.error('entry line is not a single line of 1-200 characters');
  process.exit(1);
}

// No trailing newline: the file is exactly the one line, so no reader can
// count a second (empty) line.
mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), LINE);
console.log(`wrote ${LINE.length} chars to ${join(OUTPUT_DIR, 'entry.txt')}`);
