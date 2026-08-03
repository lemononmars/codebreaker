import { from } from '$lib/supabase';
import { isWeeklyPuzzleReleased } from '$lib/weeklyGuard';
import type { RequestHandler } from '@sveltejs/kit';

export const get: RequestHandler = async ({ params }) => {
	const { year, week } = params;

	// Enforce date guard (Friday 4:30 PM UTC+7)
	if (!isWeeklyPuzzleReleased(Number(year), Number(week))) {
		return {
			status: 302,
			redirect: '/puzzles/weekly'
		};
	}

	const { data, error } = await from('weekly_solution').select('*').eq('week', week).eq('year', year);
	if (data && data.length > 0) {
		const title = data[0].title;
		const answer = data[0].answer;
		const answerGuide = data[0].answer_guide || '';
		const hasAnswer = !!(answer && answer.trim().length > 0);
		return {
			body: { year, week, title, hasAnswer, answerGuide }
		};
	}

	return {
		status: 302,
		redirect: '/puzzles/weekly'
	};
};