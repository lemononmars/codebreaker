import type { RequestHandler } from '@sveltejs/kit';
import { auditQuestion, questionKey, type QuestionReviewRecord } from '$lib/quiz/contentGovernance';
import { questionGovernanceRepository } from '$lib/server/questionGovernanceRepository';

function authorized(request: Request): boolean {
	const expected = process.env.ADMIN_REVIEW_PASSWORD || 'nazo';
	return request.headers.get('x-admin-password') === expected;
}

export const get: RequestHandler = async ({ request }) => {
	if (!authorized(request)) return { status: 401, body: { error: 'Unauthorized' } as any };
	const [{ THAI_QUIZ_DATABASE }, reviews, feedback] = await Promise.all([
		import('$lib/data/puzzles/thaiquiz/questions'),
		questionGovernanceRepository.listReviews(),
		questionGovernanceRepository.feedbackSummary()
	]);
	const byKey = new Map(reviews.map((review) => [review.questionKey, review]));
	return {
		status: 200,
		body: {
			questions: THAI_QUIZ_DATABASE.map((question) => {
				const key = questionKey(question);
				const stats = feedback[key] || { up: 0, down: 0, attempts: 0, correct: 0 };
				const storedReview = byKey.get(key);
				const review = stats.attempts ? { ...storedReview, questionKey: key, empiricalCorrectRate: stats.correct / stats.attempts } : storedReview;
				return { ...question, questionKey: key, audit: auditQuestion(question, review), review: storedReview, feedback: stats };
			})
		} as any
	};
};

export const post: RequestHandler = async ({ request }) => {
	if (!authorized(request)) return { status: 401, body: { error: 'Unauthorized' } as any };
	const body = await request.json().catch(() => ({}));
	if (typeof body.questionKey !== 'string' || body.questionKey.length > 100) {
		return { status: 400, body: { error: 'Invalid question key' } as any };
	}
	const review = body as QuestionReviewRecord;
	if (review.provenance?.sourceUrl && !/^https?:\/\//.test(review.provenance.sourceUrl)) {
		return { status: 400, body: { error: 'Source must be an HTTP URL' } as any };
	}
	await questionGovernanceRepository.putReview(review);
	return { status: 200, body: { ok: true } as any };
};
