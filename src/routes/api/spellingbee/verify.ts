import type { RequestHandler } from '@sveltejs/kit';
import { search, getSubWords } from '$lib/utils/thaiwords';

export const post: RequestHandler = async ({ request }) => {
	try {
		const body = await request.json().catch(() => ({}));
		const { puzzleWord, guess } = body;

		if (!puzzleWord || !guess || typeof guess !== 'string') {
			return {
				status: 400,
				body: { error: 'Missing puzzleWord or guess' } as any
			};
		}

		const cleanGuess = guess.trim();
		if (cleanGuess.length < 3) {
			return {
				status: 200,
				body: { isValid: false, reason: 'short' } as any
			};
		}

		// Verify that guess only uses available letters
		const available = puzzleWord.split('');
		const guessChars = cleanGuess.split('');
		const tempAvail = [...available];

		let canForm = true;
		for (const c of guessChars) {
			const idx = tempAvail.indexOf(c);
			if (idx === -1) {
				canForm = false;
				break;
			}
			tempAvail.splice(idx, 1);
		}

		if (!canForm) {
			return {
				status: 200,
				body: { isValid: false, reason: 'invalid_chars' } as any
			};
		}

		// Check in Thai dictionary
		const inDict = search(cleanGuess);
		if (!inDict) {
			return {
				status: 200,
				body: { isValid: false, reason: 'not_in_dictionary' } as any
			};
		}

		// Check if Pangram (uses all distinct letters of puzzleWord)
		const distinctPuzzleChars = new Set(puzzleWord.split(''));
		const isPangram = Array.from(distinctPuzzleChars).every((c) => cleanGuess.includes(c));

		// Calculate score (length 3 = 1, length 4 = 2, length 5 = 3, + 5 for Pangram)
		const baseScore = Math.max(1, cleanGuess.length - 2);
		const score = isPangram ? baseScore + 5 : baseScore;

		const totalSolutions = getSubWords(puzzleWord, false).filter((s) => s.length >= 3);

		return {
			status: 200,
			body: {
				isValid: true,
				isPangram,
				score,
				word: cleanGuess,
				totalSolutionsCount: totalSolutions.length
			} as any
		};
	} catch (err: any) {
		return {
			status: 500,
			body: { error: err.message || 'Failed to verify word' } as any
		};
	}
};
