import type { RequestHandler } from '@sveltejs/kit';
import { verifySessionAnswer } from '$lib/server/quizSessionStore';

export const post: RequestHandler = async ({ request }) => {
	try {
		const body = await request.json().catch(() => ({}));
		const { sessionId, questionId, choiceIndex, textAnswer, skip = false, simulateAccuracy, timeRemainingRatio = 1.0 } = body;

		if (typeof sessionId !== 'string' || !sessionId || typeof questionId !== 'number') {
			return {
				status: 400,
				body: { error: 'Missing required parameters: sessionId, questionId, choiceIndex' } as any
			};
		}

		const result = await verifySessionAnswer(sessionId, questionId, choiceIndex, textAnswer, skip === true, simulateAccuracy, timeRemainingRatio);

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
