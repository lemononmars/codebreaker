const fs = require('fs');
const path = require('path');

const basePath = 'c:/coding projects/codebreaker/src/lib/data/puzzles/thechase/data';

function analyzeUniqueBase() {
  const packs = [
    { name: 'pack1', cat: 'general_pop' },
    { name: 'pack2', cat: 'geography' },
    { name: 'pack3', cat: 'science_tech' },
    { name: 'pack4', cat: 'history_royalty' },
    { name: 'pack5', cat: 'entertainment' }
  ];

  for (const pack of packs) {
    const packDir = path.join(basePath, pack.name);
    const p1 = fs.readFileSync(path.join(packDir, 'part1.ts'), 'utf8');
    const match = p1.match(/export const [A-Z0-9_]+:\s*TheChaseQuestion\[\]\s*=\s*(\[[\s\S]*\]);?/);
    if (match) {
      const items = eval(match[1]);
      console.log(`\n=== ${pack.name} (${pack.cat}) Part 1 has ${items.length} items ===`);
      // Check for any issues in part 1
      for (const item of items) {
        if (item.choices.length !== 3) console.log(`[ERR choices!=3] ID ${item.id}`);
        if (new Set(item.choices).size !== 3) console.log(`[ERR dup choices] ID ${item.id}:`, item.choices);
        if (item.correctIndex < 0 || item.correctIndex > 2) console.log(`[ERR correctIdx] ID ${item.id}`);
      }
    }
  }
}

analyzeUniqueBase();
