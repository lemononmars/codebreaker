import fs from 'fs';
import path from 'path';

// 1. Read PyThaiNLP TNC Frequency data
const tncPath = 'C:\\Users\\sakul_bp6myy0\\.gemini\\antigravity-ide\\brain\\370baa26-4230-4352-b754-5b041d74c689\\.system_generated\\steps\\53\\content.md';
const tncContent = fs.readFileSync(tncPath, 'utf-8');

const freqMap = new Map();
const lines = tncContent.split('\n');
for (const line of lines) {
  const parts = line.trim().split('\t');
  if (parts.length === 2) {
    const word = parts[0];
    const freq = parseInt(parts[1], 10);
    if (word && !isNaN(freq)) {
      freqMap.set(word, freq);
    }
  }
}
console.log(`Loaded ${freqMap.size} word frequencies from PyThaiNLP TNC corpus`);

// 2. Read src/lib/utils/dict.ts
const dictPath = path.resolve('src/lib/utils/dict.ts');
const dictContent = fs.readFileSync(dictPath, 'utf-8');

const wordMatches = dictContent.match(/"([^"]+)"/g);
if (!wordMatches) {
  console.error("Failed to parse dict.ts");
  process.exit(1);
}

const words = wordMatches.map(w => w.replace(/"/g, ''));
console.log(`Loaded ${words.length} words from dict.ts`);

// 3. Rank words by PyThaiNLP frequency
const ranked = words.map(word => ({
  word,
  freq: freqMap.get(word) || 0
}));

// Sort descending by frequency (words with higher frequency first)
ranked.sort((a, b) => b.freq - a.freq);

const matchedCount = ranked.filter(item => item.freq > 0).length;
console.log(`Words with PyThaiNLP frequency match: ${matchedCount} / ${words.length}`);

// 4. Create copy as src/lib/utils/dict_freq.ts
const outputPath = path.resolve('src/lib/utils/dict_freq.ts');
const fileHeader = `// Thai dictionary sorted by PyThaiNLP (TNC corpus) word frequency
export interface DictFreqItem {
  word: string;
  freq: number;
}

export const dictFreq: DictFreqItem[] = [\n`;

const formattedLines = ranked.map(item => `  { word: "${item.word}", freq: ${item.freq} }`).join(',\n');
const fileFooter = `\n];

const freqLookupMap = new Map<string, number>();

export function getWordFrequency(word: string): number {
  if (freqLookupMap.size === 0 && dictFreq.length > 0) {
    for (let i = 0; i < dictFreq.length; i++) {
      freqLookupMap.set(dictFreq[i].word, dictFreq[i].freq);
    }
  }
  const clean = word.split(' ')[0];
  return freqLookupMap.get(clean) ?? freqLookupMap.get(word) ?? 0;
}
`;

fs.writeFileSync(outputPath, fileHeader + formattedLines + fileFooter, 'utf-8');
console.log(`\nSuccessfully updated copy at: ${outputPath}`);
