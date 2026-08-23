const fs = require('fs');
const path = require('path');

const texts = [];

// 1. Thai Quiz
const tqDir = 'src/lib/data/puzzles/thaiquiz/data';
const tqFiles = fs.readdirSync(tqDir).filter(f => f.endsWith('.ts'));
for (const f of tqFiles) {
  texts.push(fs.readFileSync(path.join(tqDir, f), 'utf8'));
}

// 2. The Chase
for (let pack = 1; pack <= 5; pack++) {
  const chaseDir = `src/lib/data/puzzles/thechase/data/pack${pack}`;
  const files = fs.readdirSync(chaseDir).filter(f => f.endsWith('.ts'));
  for (const f of files) {
    texts.push(fs.readFileSync(path.join(chaseDir, f), 'utf8'));
  }
}

const allCode = texts.join('\n');

// Extract all string literals inside single quotes and backticks and double quotes
const stringRegex = /'([^'\\]*(?:\\.[^'\\]*)*)'|"([^"\\]*(?:\\.[^"\\]*)*)"|`([^`\\]*(?:\\.[^`\\]*)*)`/g;
let m;
const allStrings = [];
while ((m = stringRegex.exec(allCode)) !== null) {
  const str = m[1] || m[2] || m[3];
  if (str && !str.includes('import ') && !str.includes('export ')) {
    allStrings.push(str);
  }
}

const combined = allStrings.join(' ');

// Find English phrases, abbreviations, acronyms, and scientific notation
const englishWords = new Set();
const engRegex = /[a-zA-Z0-9_\-\.\:\/°²³⁴₂₃₄]+/g;
while ((m = engRegex.exec(combined)) !== null) {
  const token = m[0];
  if (/[a-zA-Z]/.test(token) && token.length > 1 && !['id', 'question', 'choices', 'answer', 'category', 'difficulty', 'explanation', 'true', 'false', 'type', 'general_pop', 'geography', 'science_tech', 'history_royalty', 'entertainment', 'geo', 'lang', 'culture', 'food', 'history', 'trivia', 'science', 'japan'].includes(token)) {
    englishWords.add(token);
  }
}

// Extract multi-word English phrases (e.g. Harry Potter, James Cameron, Star Wars, etc.)
const phraseRegex = /([A-Z][a-zA-Z0-9\.\'\-]+(?:\s+[A-Za-z0-9\.\'\-]+)+)/g;
const phrases = new Set();
while ((m = phraseRegex.exec(combined)) !== null) {
  const p = m[0].trim();
  if (p.length > 3 && !p.startsWith('The Chase') && !p.startsWith('Thai Quiz')) {
    phrases.add(p);
  }
}

fs.writeFileSync('scratch/extracted_tts_words.json', JSON.stringify({
  phrases: Array.from(phrases).sort(),
  words: Array.from(englishWords).sort()
}, null, 2), 'utf8');

console.log(`Found ${phrases.size} English phrases and ${englishWords.size} unique English/alphanumeric tokens across 9000 questions.`);
