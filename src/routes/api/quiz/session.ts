import type { RequestHandler } from '@sveltejs/kit';
import { createQuizSession, getStrippedQuestion } from '$lib/server/quizSessionStore';

export const post: RequestHandler = async ({ request }) => {
	try {
		const body = await request.json().catch(() => ({}));
		const { type = 'thaiquiz', count, category, mode, pack } = body;

		const session = createQuizSession({
			type,
			count,
			category,
			mode,
			pack
		});

		const firstQuestion = getStrippedQuestion(session, 0);

		return {
			status: 200,
			body: {
				sessionId: session.id,
				total: session.questions.length,
				type: session.type,
				firstQuestion
			} as any
		};
	} catch (err: any) {
		return {
			status: 500,
			body: { error: err.message || 'Failed to create quiz session' } as any
		};
	}
};
