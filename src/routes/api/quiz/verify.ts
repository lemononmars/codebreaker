import type { RequestHandler } from '@sveltejs/kit';
import { verifySessionAnswer } from '$lib/server/quizSessionStore';

export const post: RequestHandler = async ({ request }) => {
	try {
		const body = await request.json().catch(() => ({}));
		const { sessionId, questionId, choiceIndex, timeRemainingRatio = 1.0 } = body;

		if (!sessionId || typeof questionId !== 'number' || typeof choiceIndex !== 'number') {
			return {
				status: 400,
				body: { error: 'Missing required parameters: sessionId, questionId, choiceIndex' } as any
			};
		}

		const result = verifySessionAnswer(sessionId, questionId, choiceIndex, timeRemainingRatio);

		if (result.error) {
			return {
				status: 400,
				body: { error: result.error } as any
			};
		}

		return {
			status: 200,
			body: result as any
		};
	} catch (err: any) {
		return {
			status: 500,
			body: { error: err.message || 'Failed to verify answer' } as any
		};
	}
};
