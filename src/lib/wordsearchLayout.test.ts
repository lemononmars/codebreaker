import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { compile } from 'svelte/compiler';
import ts from 'typescript';

const require = createRequire(import.meta.url);
// Render the real player; stub unrelated title/icons and unused download helpers.
const source = readFileSync('src/routes/puzzles/wordsearch/[uid].svelte', 'utf8').replace(
	/<script lang="ts">([\s\S]*?)<\/script>/,
	(_, script) =>
		'<script>' +
		ts.transpileModule(
			script
				.replace(/import .* from '\$lib\/wordsearchExport';/, '')
				.replace(/import TitleTab .*;/, () => "const TitleTab = { $$render: () => '' };")
				.replace(
					/import .* from 'svelte-feather-icons';/,
					() => "const RepeatIcon = { $$render: () => '' };"
				),
			{ compilerOptions: { target: ts.ScriptTarget.ES2020, module: ts.ModuleKind.ESNext } }
		).outputText +
		'</script>'
);
const compiled = compile(source, { generate: 'ssr', format: 'cjs' });
const renderedModule = { exports: {} as any };
new Function('require', 'module', 'exports', compiled.js.code)(
	require,
	renderedModule,
	renderedModule.exports
);
const WordSearch = renderedModule.exports.default;

describe('saved word search layout', () => {
	it.each([
		[12, 12],
		[8, 13]
	])('renders a saved %i × %i grid at its actual dimensions on first render', (rows, columns) => {
		const grid = Array.from({ length: rows }, () => Array(columns).fill('ม'));
		const { html } = WordSearch.render({
			content: { title: 'Saved puzzle', clues: { grid, wordsData: [] } }
		});
		expect((html.match(/data-r=/g) || []).length).toBe(rows * columns);
		expect(html).toContain(`width: ${columns * 36}px; height: ${rows * 36}px;`);
		expect(html).toContain(
			`grid-template-columns: repeat(${columns}, 36px); grid-template-rows: repeat(${rows}, 36px);`
		);
	});
});
