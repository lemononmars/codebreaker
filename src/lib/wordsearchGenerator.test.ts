import { describe, it, expect } from 'vitest';
import { generateWordSearch } from './wordsearchGenerator';

const aminoAcids = `Alanine
Arginine
Asparagine
Aspartate
Cysteine
Glutamate
Glutamine
Glycine
Histidine
Isoleucine
Leucine
Lysine
Methionine
Phenylalanine
Proline
Serine
Threonine
Tryptophan
Tyrosine
Valine`;
function seeded(seed: number) {
	return () => (seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0) / 4294967296;
}
function occurrences(grid: string[][], chars: string[]) {
	const paths = new Set<string>();
	for (let r = 0; r < grid.length; r++)
		for (let c = 0; c < grid[0].length; c++)
			for (let dr = -1; dr <= 1; dr++)
				for (let dc = -1; dc <= 1; dc++) {
					if (!dr && !dc) continue;
					if (chars.every((ch, i) => grid[r + i * dr]?.[c + i * dc] === ch))
						paths.add(
							[`${r},${c}`, `${r + (chars.length - 1) * dr},${c + (chars.length - 1) * dc}`]
								.sort()
								.join(':')
						);
				}
	return paths.size;
}
describe('word search language support', () => {
	it.each([1, 2, 3].flatMap((difficulty) => [1, 7, 42].map((seed) => [difficulty, seed])))(
		'generates the amino acid list uniquely at difficulty %i (seed %i)',
		(difficulty, seed) => {
			const { grid, wordsData } = generateWordSearch(aminoAcids, 15, 15, difficulty, seeded(seed));
			expect(wordsData).toHaveLength(20);
			expect(grid.flat().every((ch) => /^[A-Z]$/.test(ch))).toBe(true);
			for (const word of wordsData) {
				expect(word.word).toBe(word.word.toUpperCase());
				expect(occurrences(grid, word.chars)).toBe(1);
			}
		}
	);
	it.each(['Apple\nกล้วย', 'Appleกล้วย'])('rejects mixed Thai/English input: %s', (input) => {
		expect(() => generateWordSearch(input, 12, 12, 1, seeded(42))).toThrow(/mixed-language/);
	});
	it('deduplicates case variants and accepts a single English word', () => {
		const { grid, wordsData } = generateWordSearch(
			'Alanine\nALANINE\nalanine',
			12,
			12,
			1,
			seeded(42)
		);
		expect(wordsData).toHaveLength(1);
		expect(wordsData[0].chars.join('')).toBe('ALANINE');
		expect(occurrences(grid, wordsData[0].chars)).toBe(1);
	});
	it('preserves Thai combining marks and uses Thai filler', () => {
		const { grid, wordsData } = generateWordSearch('กุ้ง\nปลา', 8, 13, 1, seeded(42));
		expect(grid).toHaveLength(8);
		expect(grid.every((row) => row.length === 13)).toBe(true);
		expect(grid.flat().join('')).not.toMatch(/[A-Z]/);
		expect(wordsData.find((w) => w.word === 'กุ้ง')?.chars).toEqual(['กุ้', 'ง']);
		for (const w of wordsData) expect(occurrences(grid, w.chars)).toBe(1);
	});
	it('counts palindromes and single letters once per physical placement', () => {
		const { grid, wordsData } = generateWordSearch('LEVEL\nA', 10, 10, 1, seeded(42));
		for (const w of wordsData) expect(occurrences(grid, w.chars)).toBe(1);
	});
	it('reports a word that cannot fit instead of a uniqueness error', () => {
		expect(() => generateWordSearch('Phenylalanine', 10, 10, 1)).toThrow(/PHENYLALANINE.*13/);
	});
});
