import { describe, it, expect } from 'vitest';
import { wordSearchSvg, wordSearchExcel } from './wordsearchExport';
import { readFileSync } from 'node:fs';

describe('word search exports', () => {
	const grid = [
		['ก้', '&', '<'],
		['A', 'B', 'C']
	];
	it('exports every cell of a rectangular grid and escapes user text in SVG', () => {
		const svg = wordSearchSvg(grid, ['<word>'], 'A&B', 'Author');
		expect(svg).toContain('A&amp;B');
		expect(svg).toContain('&lt;word&gt;');
		expect(svg).toContain('ก้');
		expect(svg.match(/dominant-baseline/g)).toHaveLength(6);
		expect(wordSearchSvg(grid, [], '', '', 88)).toContain('font-size="38.4"');
	});
	it('exports cells and word list as strings in separate Excel worksheets', () => {
		const excel = wordSearchExcel(grid, ['=1+1', '<word>'], 'A&B', 'Author');
		expect(excel).toContain('ss:Name="Puzzle"');
		expect(excel).toContain('ss:Name="Words"');
		expect(excel).toContain('<Data ss:Type="String">=1+1</Data>');
		expect(excel).toContain('&lt;word&gt;');
		expect(excel).toContain('ก้');
		expect(excel).not.toContain('ss:Formula');
	});
});

describe('word search scaling layout', () => {
	it('preserves requested grid width and allows scrolling from the first column', () => {
		const source = readFileSync('src/routes/tools/wordsearch.svelte', 'utf8');
		expect(source).toContain('class="grid shrink-0 mx-auto"');
		expect(source).toMatch(/grid-template-rows: repeat\(\{grid.length\}, \{cellSize\}px\)/);
		expect(source).not.toContain('overflow-x-auto border border-base-100/50 flex justify-center');
	});
});

describe('playable word search scale', () => {
	it('scales proportionally without a grid-size cap', () => {
		const source = readFileSync('src/routes/puzzles/wordsearch/[uid].svelte', 'utf8');
		const expression = source.match(/\$: cellSize = ([^;]+);/)![1];
		const size = new Function('scaleFactor', 'gridSize', `return ${expression}`);
		for (const gridSize of [10, 12, 15, 30, 50]) {
			expect(size(1, gridSize)).toBe(36);
			expect(size(1.3, gridSize)).toBeCloseTo(46.8);
			expect(size(0.5, gridSize)).toBe(18);
		}
	});
});
