const fs = require('fs');
const path = require('path');

const basePath = 'c:/coding projects/codebreaker/src/lib/data/puzzles/thechase/data';

function inspectPacks() {
  const packs = ['pack1', 'pack2', 'pack3', 'pack4', 'pack5'];
  let grandTotal = 0;
  const uniqueQuestions = new Set();
  const catStats = {};

  for (const pack of packs) {
    const packDir = path.join(basePath, pack);
    const files = fs.readdirSync(packDir).filter(f => f.startsWith('part') && f.endsWith('.ts'));
    let packQuestions = 0;

    console.log(`\n=== Checking ${pack} (${files.length} parts) ===`);

    for (const f of files) {
      const content = fs.readFileSync(path.join(packDir, f), 'utf8');
      const match = content.match(/export const [A-Z0-9_]+:\s*TheChaseQuestion\[\]\s*=\s*(\[[\s\S]*\]);?/);
      if (match) {
        try {
          const items = eval(match[1]);
          packQuestions += items.length;
          grandTotal += items.length;

          for (const item of items) {
            uniqueQuestions.add(item.question.trim());
            catStats[item.category] = (catStats[item.category] || 0) + 1;
          }
        } catch (e) {
          console.error(`Error parsing ${pack}/${f}:`, e.message);
        }
      }
    }
    console.log(`  Total items in ${pack}: ${packQuestions}`);
  }

  console.log('\n=== OVERALL CHASE DATABASE SUMMARY ===');
  console.log(`Grand Total Items: ${grandTotal}`);
  console.log(`Unique Question Strings: ${uniqueQuestions.size}`);
  console.log('Category Counts:', catStats);
}

inspectPacks();
