const fs = require('fs');

const raw = JSON.parse(fs.readFileSync('scratch/extracted_tts_words.json', 'utf8'));

// Filter and categorize high-impact terms from phrases and words
const phrases = raw.phrases;
const words = raw.words;

console.log('Sample phrases (first 50):', phrases.slice(0, 50));
console.log('Sample words (first 50):', words.slice(0, 50));
