import fs from 'fs';
import path from 'path';

const tsPath = path.resolve('src/lib/utils/dict_pythainlp.ts');
const jsonPath = path.resolve('src/lib/utils/dict_pythainlp.json');

console.log('Reading dict_pythainlp.ts...');
const content = fs.readFileSync(tsPath, 'utf-8');

const regex = /\{\s*word:\s*"([^"]+)",\s*freq:\s*(\d+)\s*\}/g;
const map = {};
let match;
let count = 0;

while ((match = regex.exec(content)) !== null) {
	map[match[1]] = parseInt(match[2], 10);
	count++;
}

console.log(`Parsed ${count} entries. Writing to dict_pythainlp.json...`);
fs.writeFileSync(jsonPath, JSON.stringify(map));
console.log('Done!');
