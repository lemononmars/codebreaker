import fs from 'fs';
import path from 'path';

const filePath = path.resolve('src/lib/dict.json');
const content = fs.readFileSync(filePath, 'utf-8');

// Simple regex parser to extract words
const wordRegex = /"([^"]+)"/g;
let match;
const frequencies = {};
let totalChars = 0;

while ((match = wordRegex.exec(content)) !== null) {
	const word = match[1];
	// Count each character (consonant, vowel, tone mark)
	for (const char of word) {
		frequencies[char] = (frequencies[char] || 0) + 1;
		totalChars++;
	}
}

const sorted = Object.entries(frequencies)
	.sort((a, b) => b[1] - a[1]);

console.log(`=== Thai Letter Frequencies (Total Characters: ${totalChars}) ===`);
sorted.forEach(([char, count]) => {
	const percentage = ((count / totalChars) * 100).toFixed(2);
	console.log(`Letter: ${char} | Count: ${count} | Percentage: ${percentage}%`);
});
