/**
 * Generate Thai Word Ladder graphs for slot counts 3, 4, 5, 6.
 * A "slot" is a Thai consonant/base-vowel possibly followed by upper/lower vowels and tone marks.
 * Two words are adjacent if they have the same slot count and differ in exactly one slot.
 *
 * Run with: npx tsx scripts/generate-wordladder-graph.ts
 * Output: src/lib/data/wordladder-graph.json
 */

import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Parse dict.ts – extract string literals from the array
const dictPath = join(__dirname, '../src/lib/utils/dict.ts');
const rawDict = readFileSync(dictPath, 'utf-8');

// Extract all quoted strings from the dict array
const wordMatches = rawDict.matchAll(/"([^"]+)"/g);
const allWords: string[] = [];
for (const m of wordMatches) {
  allWords.push(m[1]);
}
console.log(`Total words in dict: ${allWords.length}`);

// ─── Thai slot segmentation ─────────────────────────────────────────────────
const CONS_RE = /[\u0E01-\u0E2E]/;          // ก–ฮ
const LEADING_VOWEL_RE = /[\u0E40-\u0E44]/; // เ แ โ ไ ใ
const DIAC_RE = /[\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0E32\u0E30\u0E33\u0E38\u0E39\u0E45]/;

function splitSlots(word: string): string[] {
  const chars = [...word];
  const slots: string[] = [];
  for (let i = 0; i < chars.length; i++) {
    const c = chars[i];
    if (CONS_RE.test(c) || LEADING_VOWEL_RE.test(c)) {
      slots.push(c);
    } else if (DIAC_RE.test(c)) {
      if (slots.length > 0) slots[slots.length - 1] += c;
    }
  }
  return slots;
}

function slotCount(word: string): number {
  return splitSlots(word).length;
}

// ─── Filter words ────────────────────────────────────────────────────────────
const thaiOnlyRe = /^[\u0E00-\u0E7F]+$/;

function isPureThai(word: string): boolean {
  return thaiOnlyRe.test(word);
}

const bySlots: Record<number, string[]> = { 3: [], 4: [], 5: [], 6: [] };

for (const word of allWords) {
  if (!isPureThai(word)) continue;
  const n = slotCount(word);
  if (n >= 3 && n <= 6) {
    bySlots[n].push(word);
  }
}

for (const n of [3, 4, 5, 6]) {
  bySlots[n] = [...new Set(bySlots[n])];
  console.log(`  ${n}-slot words: ${bySlots[n].length}`);
}

// ─── Build adjacency list ────────────────────────────────────────────────────
function diffSlots(a: string[], b: string[]): number {
  if (a.length !== b.length) return Infinity;
  let diff = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) diff++;
    if (diff > 1) return diff;
  }
  return diff;
}

type GraphData = {
  words: string[];
  adj: Record<number, number[]>;
};

const output: Record<number, GraphData> = {};

for (const n of [3, 4, 5, 6]) {
  const words = bySlots[n];
  const total = words.length;
  console.log(`\nBuilding graph for ${n}-slot words (${total} words)...`);

  const splits = words.map((w) => splitSlots(w));
  const adj: Record<number, number[]> = {};
  for (let i = 0; i < total; i++) adj[i] = [];

  let edgeCount = 0;

  for (let i = 0; i < total - 1; i++) {
    for (let j = i + 1; j < total; j++) {
      if (diffSlots(splits[i], splits[j]) === 1) {
        adj[i].push(j);
        adj[j].push(i);
        edgeCount++;
      }
    }
    if (i % 500 === 0) process.stdout.write(`  ${i}/${total}\r`);
  }

  console.log(`  Edges: ${edgeCount}`);

  const connected = new Set<number>();
  for (let i = 0; i < total; i++) {
    if (adj[i].length > 0) {
      connected.add(i);
      for (const j of adj[i]) connected.add(j);
    }
  }

  const connectedArr = [...connected].sort((a, b) => a - b);
  const oldToNew = new Map<number, number>();
  const newWords: string[] = [];
  connectedArr.forEach((old, newIdx) => {
    oldToNew.set(old, newIdx);
    newWords.push(words[old]);
  });

  const newAdj: Record<number, number[]> = {};
  for (const old of connectedArr) {
    const newIdx = oldToNew.get(old)!;
    newAdj[newIdx] = adj[old].map((j) => oldToNew.get(j)!).filter((x) => x !== undefined);
  }

  console.log(`  Connected words: ${newWords.length}`);
  output[n] = { words: newWords, adj: newAdj };
}

// ─── Write output ────────────────────────────────────────────────────────────
const outDir = join(__dirname, '../src/lib/data');
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, 'wordladder-graph.json');
writeFileSync(outPath, JSON.stringify(output), 'utf-8');
console.log(`\nWritten to ${outPath}`);
