// Master Assembler for The Chase 5,000 Questions (5 packs x 10 parts x 100 questions)
const fs = require('fs');
const path = require('path');

const { getChasePack1Questions } = require('./build_chase_pack1.cjs');
const { getChasePack2Questions } = require('./build_chase_pack2.cjs');
const { getChasePack3Questions } = require('./build_chase_pack3.cjs');
const { getChasePack4Questions } = require('./build_chase_pack4.cjs');
const { getChasePack5Questions } = require('./build_chase_pack5.cjs');

const baseDataDir = 'c:/coding projects/codebreaker/src/lib/data/puzzles/thechase/data';

function parseBasePart1(packName) {
  const fpath = path.join(baseDataDir, packName, 'part1.ts');
  const text = fs.readFileSync(fpath, 'utf8');
  const match = text.match(/export const [A-Z0-9_]+:\s*TheChaseQuestion\[\]\s*=\s*(\[[\s\S]*\]);?/);
  if (!match) {
    throw new Error(`Failed to parse base questions in ${packName}/part1.ts`);
  }
  const items = eval(match[1]);
  return items.slice(0, 100);
}

function assemblePack(packNum, packName, category, startId, newQuestionsGetter) {
  console.log(`\n=== Assembling ${packName} (${category}) ===`);
  const base100 = parseBasePart1(packName);
  const new900 = newQuestionsGetter();

  console.log(`  Base count: ${base100.length}`);
  console.log(`  New count:  ${new900.length}`);

  let currentId = startId;
  const combined = [];

  for (const b of base100) {
    combined.push({
      id: currentId++,
      category,
      question: b.question.trim(),
      choices: b.choices,
      correctIndex: b.correctIndex,
      explanation: b.explanation.trim(),
      difficulty: b.difficulty || "normal"
    });
  }

  for (const n of new900) {
    combined.push({
      id: currentId++,
      category,
      question: n.question.trim(),
      choices: n.choices,
      correctIndex: n.correctIndex,
      explanation: n.explanation.trim(),
      difficulty: n.difficulty || "normal"
    });
  }

  if (combined.length !== 1000) {
    throw new Error(`Expected 1000 items for ${packName}, got ${combined.length}`);
  }

  // Validate integrity
  for (const item of combined) {
    if (!item.choices || item.choices.length !== 3) {
      throw new Error(`Invalid choices count in ID ${item.id}`);
    }
    const unique = new Set(item.choices);
    if (unique.size !== 3) {
      throw new Error(`Duplicate choices in ID ${item.id}: ${JSON.stringify(item.choices)}`);
    }
    if (item.correctIndex < 0 || item.correctIndex > 2) {
      throw new Error(`Invalid correctIndex in ID ${item.id}: ${item.correctIndex}`);
    }
  }

  // Split into 10 parts of 100 items each
  const packDir = path.join(baseDataDir, packName);
  for (let partIdx = 1; partIdx <= 10; partIdx++) {
    const startIdx = (partIdx - 1) * 100;
    const partItems = combined.slice(startIdx, startIdx + 100);
    const exportName = `PACK${packNum}_PART${partIdx}_QUESTIONS`;
    const fileName = `part${partIdx}.ts`;

    const fileContent = `import type { TheChaseQuestion } from '../../types';\n\nexport const ${exportName}: TheChaseQuestion[] = ${JSON.stringify(partItems, null, '\t')};\n`;
    fs.writeFileSync(path.join(packDir, fileName), fileContent, 'utf8');
    console.log(`  Wrote ${packName}/${fileName} (100 items, IDs ${partItems[0].id} to ${partItems[99].id})`);
  }

  console.log(`Successfully completed ${packName} (1,000 items)`);
}

// Run assembly for all 5 packs
try {
  assemblePack(1, 'pack1', 'general_pop', 1001, getChasePack1Questions);
  assemblePack(2, 'pack2', 'geography', 2001, getChasePack2Questions);
  assemblePack(3, 'pack3', 'science_tech', 3001, getChasePack3Questions);
  assemblePack(4, 'pack4', 'history_royalty', 4001, getChasePack4Questions);
  assemblePack(5, 'pack5', 'entertainment', 5001, getChasePack5Questions);

  console.log('\n=== ALL 5 CHASE PACKS ASSEMBLED TO 1,000 ITEMS EACH (5,000 TOTAL) ===');
} catch (err) {
  console.error('Assembly error:', err);
  process.exit(1);
}
