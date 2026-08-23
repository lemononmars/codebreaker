import type { RequestHandler } from '@sveltejs/kit';
import { getQuizSession, getStrippedQuestion } from '$lib/server/quizSessionStore';

export const get: RequestHandler = async ({ url }) => {
	try {
		const sessionId = url.searchParams.get('sessionId');
		const indexStr = url.searchParams.get('index');

		if (!sessionId) {
			return {
				status: 400,
				body: { error: 'Missing sessionId parameter' } as any
			};
		}

		const session = getQuizSession(sessionId);
		if (!session) {
			return {
				status: 404,
				body: { error: 'Quiz session not found or expired' } as any
			};
		}

		const index = indexStr !== null ? parseInt(indexStr, 10) : session.currentIndex;
		const question = getStrippedQuestion(session, index);

		if (!question) {
			return {
				status: 404,
				body: { error: 'Question index out of range or game completed', isCompleted: true } as any
			};
		}

		return {
			status: 200,
			body: {
				question
			} as any
		};
	} catch (err: any) {
		return {
			status: 500,
			body: { error: err.message || 'Failed to fetch question' } as any
		};
	}
};
