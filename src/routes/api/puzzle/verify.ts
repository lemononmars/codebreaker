import type { RequestHandler } from '@sveltejs/kit';
import { from } from '$lib/supabase';
import { isAllowedTable, PUBLIC_TABLES, publicError } from '$lib/apiGuards';

export const post: RequestHandler = async ({ request }) => {
	try {
		const body = await request.json().catch(() => ({}));
		const { type, id, uid, answer, roundIndex } = body;

		if (!type || !isAllowedTable(type, PUBLIC_TABLES)) {
			return publicError(400, 'Invalid puzzle type');
		}

		if (!answer || typeof answer !== 'string') {
			return {
				status: 400,
				body: { error: 'Missing answer string' } as any
			};
		}

		const cleanGuess = answer.trim();

		// Fetch true answer from Supabase
		const field = (type === 'crossword' || type === 'missingvowels' || type === 'alphabet') ? 'uid' : 'id';
		const targetId = uid || id;

		const { data, error } = await from(type).select('*').eq(field, targetId).single();

		if (error || !data) {
			return {
				status: 404,
				body: { error: 'Puzzle record not found' } as any
			};
		}

		let isCorrect = false;
		let canonicalAnswer: string | undefined = undefined;

		if (type === 'rebus' || type === 'cryptogram') {
			const expected = (data.answer || '').trim();
			isCorrect = cleanGuess.toLowerCase() === expected.toLowerCase();
			if (isCorrect) canonicalAnswer = expected;
		} else if (type === 'missingvowels') {
			const answers: string[] = data.answers || [];
			if (typeof roundIndex === 'number' && roundIndex >= 0 && roundIndex < answers.length) {
				const expected = answers[roundIndex].trim();
				isCorrect = cleanGuess.toLowerCase() === expected.toLowerCase();
				if (isCorrect) canonicalAnswer = expected;
			} else {
				isCorrect = answers.some((a) => a.trim().toLowerCase() === cleanGuess.toLowerCase());
			}
		}

		return {
			status: 200,
			body: {
				isCorrect,
				canonicalAnswer
			} as any
		};
	} catch (err: any) {
		return {
			status: 500,
			body: { error: err.message || 'Failed to verify puzzle answer' } as any
		};
	}
};
