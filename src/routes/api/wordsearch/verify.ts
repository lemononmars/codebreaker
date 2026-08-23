import type { RequestHandler } from '@sveltejs/kit';

export const post: RequestHandler = async ({ request }) => {
	try {
		const body = await request.json().catch(() => ({}));
		const { grid, words, selectionCoords } = body;

		if (!grid || !Array.isArray(grid) || !words || !Array.isArray(words) || !selectionCoords || !Array.isArray(selectionCoords)) {
			return {
				status: 400,
				body: { error: 'Invalid payload: grid, words, and selectionCoords are required' } as any
			};
		}

		if (selectionCoords.length === 0) {
			return {
				status: 200,
				body: { matched: false } as any
			};
		}

		// Extract characters from grid
		const selectedText = selectionCoords
			.map(([r, c]: [number, number]) => (grid[r] && grid[r][c] ? grid[r][c] : ''))
			.join('');
		const reversedText = selectedText.split('').reverse().join('');
		const cleanSel = selectedText.normalize('NFC').trim();
		const cleanRev = reversedText.normalize('NFC').trim();

		let matchedWord: string | null = null;
		let matchedIndex = -1;

		for (let i = 0; i < words.length; i++) {
			const w = words[i];
			const wordStr = typeof w === 'string' ? w : w.word || '';
			const cleanW = wordStr.normalize('NFC').trim();
			const charsStr = Array.isArray(w.chars) ? w.chars.join('').normalize('NFC').trim() : '';

			const matches =
				wordStr === selectedText ||
				wordStr === reversedText ||
				cleanW === cleanSel ||
				cleanW === cleanRev ||
				(charsStr && (charsStr === cleanSel || charsStr === cleanRev));

			if (matches) {
				matchedWord = wordStr;
				matchedIndex = i;
				break;
			}
		}

		if (matchedWord) {
			return {
				status: 200,
				body: {
					matched: true,
					word: matchedWord,
					index: matchedIndex,
					line: {
						startR: selectionCoords[0][0],
						startC: selectionCoords[0][1],
						endR: selectionCoords[selectionCoords.length - 1][0],
						endC: selectionCoords[selectionCoords.length - 1][1]
					}
				} as any
			};
		}

		return {
			status: 200,
			body: { matched: false } as any
		};
	} catch (err: any) {
		return {
			status: 500,
			body: { error: err.message || 'Failed to verify word search line' } as any
		};
	}
};
