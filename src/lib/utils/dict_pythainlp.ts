import fs from 'fs';
import path from 'path';

const tncPath = 'C:\\Users\\sakul_bp6myy0\\.gemini\\antigravity-ide\\brain\\370baa26-4230-4352-b754-5b041d74c689\\.system_generated\\steps\\53\\content.md';
const jsonPath = path.resolve('src/lib/utils/dict_pythainlp.json');

if (!fs.existsSync(jsonPath) && fs.existsSync(tncPath)) {
	try {
		const content = fs.readFileSync(tncPath, 'utf-8');
		const lines = content.split('\n');
		const map: Record<string, number> = {};
		for (const line of lines) {
			const parts = line.trim().split('\t');
			if (parts.length === 2) {
				const word = parts[0];
				const freq = parseInt(parts[1], 10);
				if (word && !isNaN(freq) && freq > 0) {
					map[word] = freq;
				}
			}
		}
		fs.writeFileSync(jsonPath, JSON.stringify(map));
		console.log(`[CONVERTED] Generated dict_pythainlp.json (${Object.keys(map).length} entries)`);
	} catch (e) {
		console.error('Failed to generate dict_pythainlp.json:', e);
	}
}

let freqMap: Record<string, number> = {};
if (fs.existsSync(jsonPath)) {
	try {
		freqMap = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));
	} catch {
		freqMap = {};
	}
}

export function getWordFrequency(word: string): number {
	if (!word) return 0;
	const clean = word.split(' ')[0];
	return freqMap[clean] ?? freqMap[word] ?? 0;
}
