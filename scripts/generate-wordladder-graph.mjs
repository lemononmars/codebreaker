/**
 * Generate Thai Word Ladder graphs for slot counts 3, 4, 5, 6.
 * Run with: node scripts/generate-wordladder-graph.mjs
 * Output: src/lib/data/wordladder-graph.json
 */

import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Parse dict.ts – extract string literals from the array
const dictPath = join(__dirname, '../src/lib/utils/dict.ts');
const rawDict = readFileSync(dictPath, 'utf-8');

const wordMatches = rawDict.matchAll(/"([^"]+)"/g);
const allWords = [];
for (const m of wordMatches) {
  allWords.push(m[1]);
}
console.log(`Total words in dict: ${allWords.length}`);

// ─── Thai slot segmentation ─────────────────────────────────────────────────
// consonants: U+0E01–U+0E2E (ก–ฮ)
const CONS_RE = /[\u0E01-\u0E2E]/;
// leading vowels: เ แ โ ไ ใ (U+0E40–U+0E44)
const LEADING_VOWEL_RE = /[\u0E40-\u0E44]/;
// diacritics: sara a, sara aa, sara i, sara ii, sara ue, sara u, sara uu,
//             phinthu, maitaikhu, mai ek, mai tho, mai tri, mai jattawa, thanthakhat
const DIAC_RE = /[\u0E31\u0E32\u0E33\u0E34\u0E35\u0E36\u0E37\u0E38\u0E39\u0E3A\u0E45\u0E47\u0E48\u0E49\u0E4A\u0E4B\u0E4C\u0E4D\u0E4E\u0E30]/;

function splitSlots(word) {
  const chars = [...word]; // Unicode-safe split
  const slots = [];
  for (let i = 0; i < chars.length; i++) {
    const c = chars[i];
    if (CONS_RE.test(c) || LEADING_VOWEL_RE.test(c)) {
      slots.push(c);
    } else if (DIAC_RE.test(c)) {
      if (slots.length > 0) slots[slots.length - 1] += c;
    }
    // skip other chars (digits, punctuation, etc.)
  }
  return slots;
}

// ─── Filter words ────────────────────────────────────────────────────────────
// Only pure Thai characters (U+0E00–U+0E7F), no spaces/punctuation
const thaiOnlyRe = /^[\u0E00-\u0E7F]+$/;

function isPureThai(word) {
  return thaiOnlyRe.test(word);
}

const bySlots = { 3: [], 4: [], 5: [], 6: [] };

for (const word of allWords) {
  if (!isPureThai(word)) continue;
  const n = splitSlots(word).length;
  if (n >= 3 && n <= 6) {
    bySlots[n].push(word);
  }
}

for (const n of [3, 4, 5, 6]) {
  bySlots[n] = [...new Set(bySlots[n])];
  console.log(`  ${n}-slot words: ${bySlots[n].length}`);
}

// ─── Build adjacency list ────────────────────────────────────────────────────
function diffSlots(a, b) {
  if (a.length !== b.length) return Infinity;
  let diff = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) diff++;
    if (diff > 1) return diff;
  }
  return diff;
}

const output = {};

for (const n of [3, 4, 5, 6]) {
  const words = bySlots[n];
  const total = words.length;
  console.log(`\nBuilding graph for ${n}-slot words (${total} words)...`);

  const splits = words.map((w) => splitSlots(w));
  const adj = {};
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
    if (i % 200 === 0) process.stdout.write(`  ${i}/${total}\r`);
  }

  console.log(`  Edges: ${edgeCount}`);

  // Keep only words with at least one neighbour
  const connected = new Set();
  for (let i = 0; i < total; i++) {
    if (adj[i].length > 0) {
      connected.add(i);
      for (const j of adj[i]) connected.add(j);
    }
  }

  const connectedArr = [...connected].sort((a, b) => a - b);
  const oldToNew = new Map();
  const newWords = [];
  connectedArr.forEach((old, newIdx) => {
    oldToNew.set(old, newIdx);
    newWords.push(words[old]);
  });

  const newAdj = {};
  for (const old of connectedArr) {
    const newIdx = oldToNew.get(old);
    newAdj[newIdx] = adj[old].map((j) => oldToNew.get(j)).filter((x) => x !== undefined);
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
