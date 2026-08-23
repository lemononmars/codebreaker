// Master assembler for Thai Quiz Arena 4,000 Questions
const fs = require('fs');
const path = require('path');

const { getGeoQuestions } = require('./build_geo.cjs');
const { getLangQuestions } = require('./build_lang.cjs');
const { getCultureQuestions } = require('./build_culture.cjs');
const { getFoodQuestions } = require('./build_food.cjs');
const { getHistoryQuestions } = require('./build_history.cjs');
const { getTriviaQuestions } = require('./build_trivia.cjs');
const { getScienceQuestions } = require('./build_science.cjs');
const { getJapanQuestions } = require('./build_japan.cjs');

const dataDir = 'c:/coding projects/codebreaker/src/lib/data/puzzles/thaiquiz/data';

function parseBaseQuestions(fileName) {
  const fpath = path.join(dataDir, fileName);
  const text = fs.readFileSync(fpath, 'utf8');

  const match = text.match(/export const [A-Z_]+:\s*ThaiQuizItem\[\]\s*=\s*(\[[\s\S]*\]);?/);
  if (!match) {
    throw new Error(`Failed to match array in ${fileName}`);
  }

  const items = eval(match[1]);
  return items;
}

function assembleCategory(exportName, fileName, category, startId, baseItems, newItems) {
  const base104 = baseItems.slice(0, 104);
  const new396 = newItems.slice(0, 396);

  console.log(`\nAssembling ${category} (${fileName})...`);
  console.log(`  Base count: ${base104.length}`);
  console.log(`  New count:  ${new396.length}`);

  // Re-index base items to startId .. startId + baseItems.length - 1
  let currentId = startId;
  const combined = [];

  for (const b of base104) {
    combined.push({
      ...b,
      id: currentId++,
      category
    });
  }

  for (const n of new396) {
    combined.push({
      ...n,
      id: currentId++,
      category
    });
  }

  console.log(`  Combined total: ${combined.length} items (IDs ${startId} to ${currentId - 1})`);

  // Validate integrity
  const seenQuestions = new Set();
  for (const item of combined) {
    if (seenQuestions.has(item.question)) {
      console.warn(`  [WARN] Duplicate question: "${item.question.slice(0, 40)}..."`);
    }
    seenQuestions.add(item.question);

    if (!item.choices || item.choices.length !== 4) {
      throw new Error(`Invalid choices length in item ID ${item.id}`);
    }
    const uniqueChoices = new Set(item.choices);
    if (uniqueChoices.size !== 4) {
      throw new Error(`Duplicate choices in item ID ${item.id}: ${JSON.stringify(item.choices)}`);
    }
    if (item.correctIndex < 0 || item.correctIndex > 3) {
      throw new Error(`Invalid correctIndex in item ID ${item.id}`);
    }
    if (!item.acceptableAnswers || item.acceptableAnswers.length === 0) {
      throw new Error(`Empty acceptableAnswers in item ID ${item.id}`);
    }
  }

  const outContent = `import type { ThaiQuizItem } from '../types';\n\nexport const ${exportName}: ThaiQuizItem[] = ${JSON.stringify(combined, null, '\t')};\n`;
  fs.writeFileSync(path.join(dataDir, fileName), outContent, 'utf8');
  console.log(`  Successfully wrote ${fileName} (${combined.length} items)`);
}

// Assemble all 8 categories
try {
  assembleCategory('GEOGRAPHY_QUESTIONS', 'geography.ts', 'geography', 1, parseBaseQuestions('geography.ts'), getGeoQuestions());
  assembleCategory('LANGUAGE_LIT_QUESTIONS', 'language_lit.ts', 'language_lit', 501, parseBaseQuestions('language_lit.ts'), getLangQuestions());
  assembleCategory('CULTURE_TRADITION_QUESTIONS', 'culture_tradition.ts', 'culture_tradition', 1001, parseBaseQuestions('culture_tradition.ts'), getCultureQuestions());
  assembleCategory('FOOD_CUISINE_QUESTIONS', 'food_cuisine.ts', 'food_cuisine', 1501, parseBaseQuestions('food_cuisine.ts'), getFoodQuestions());
  assembleCategory('HISTORY_HERITAGE_QUESTIONS', 'history_heritage.ts', 'history_heritage', 2001, parseBaseQuestions('history_heritage.ts'), getHistoryQuestions());
  assembleCategory('GENERAL_TRIVIA_QUESTIONS', 'general_trivia.ts', 'general_trivia', 2501, parseBaseQuestions('general_trivia.ts'), getTriviaQuestions());
  assembleCategory('SCIENCE_QUESTIONS', 'science.ts', 'science', 3001, parseBaseQuestions('science.ts'), getScienceQuestions());
  assembleCategory('JAPANESE_POP_QUESTIONS', 'japanese_pop.ts', 'japanese_pop', 3501, parseBaseQuestions('japanese_pop.ts'), getJapanQuestions());

  console.log('\n=== ALL 8 CATEGORIES ASSEMBLED TO 500 ITEMS EACH (4,000 TOTAL) ===');
} catch (err) {
  console.error('Assembly error:', err);
  process.exit(1);
}
