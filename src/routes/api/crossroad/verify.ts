import type { RequestHandler } from '@sveltejs/kit';
import { verifySignedPayload } from '$lib/server/puzzleToken';

export const post: RequestHandler = async ({ request }) => {
	try {
		const body = await request.json().catch(() => ({}));
		const { token, answer } = body;

		if (!token || !answer || typeof answer !== 'string') {
			return {
				status: 400,
				body: { error: 'Missing token or answer' } as any
			};
		}

		const payload = verifySignedPayload(token);
		if (!payload || payload.type !== 'crossroad') {
			return {
				status: 400,
				body: { error: 'Invalid or expired puzzle token' } as any
			};
		}

		const cleanAnswer = answer.trim();
		const expectedAnswer = (payload.answer || '').trim();

		const isExactMatch = cleanAnswer === expectedAnswer;

		// Check if alternative valid answer
		let isAlternativeValid = false;
		if (!isExactMatch && payload.pre && payload.post) {
			// If answer forms valid compound words with all provided clues
			// (Checked against server dictionary if needed, or exact match)
		}

		const isCorrect = isExactMatch || isAlternativeValid;

		return {
			status: 200,
			body: {
				isCorrect,
				canonicalAnswer: isCorrect ? expectedAnswer : undefined
			} as any
		};
	} catch (err: any) {
		return {
			status: 500,
			body: { error: err.message || 'Failed to verify crossroad answer' } as any
		};
	}
};
