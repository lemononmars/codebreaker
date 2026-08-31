import type { RequestHandler } from '@sveltejs/kit';
import { questionGovernanceRepository } from '$lib/server/questionGovernanceRepository';
import { recordDiagnostic } from '$lib/diagnostics';

export const post: RequestHandler = async ({ request }) => {
	try {
		const body = await request.json().catch(() => ({}));
		if (
			typeof body.questionKey !== 'string' || body.questionKey.length > 100 ||
			typeof body.category !== 'string' || ![-1, 1].includes(body.rating)
		) return { status: 400, body: { error: 'Invalid feedback' } as any };
		await questionGovernanceRepository.recordFeedback({
			questionKey: body.questionKey,
			category: body.category,
			rating: body.rating,
			reason: typeof body.reason === 'string' ? body.reason : undefined
		});
		return { status: 201, body: { ok: true } as any };
	} catch (error) {
		recordDiagnostic('quiz.feedback_failed', { message: error instanceof Error ? error.message : String(error) }, 'error');
		return { status: 500, body: { error: 'Unable to save feedback' } as any };
	}
};
