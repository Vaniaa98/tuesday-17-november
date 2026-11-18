// "The World in One Day" — Tuesday 17 November 2026 (Node 22, standard library only).
// The entry image is the entry.png beside this file: a one-page newspaper front
// page drawn as original HTML/CSS and SVG, rendered once to PNG. This program
// copies it byte-for-byte to /output/entry.png. No network, no dependencies.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
// A plain copy: the same input bytes always produce the same output bytes.
copyFileSync(join(here, "entry.png"), join(outDir, "entry.png"));
