import { from } from '$lib/supabase';
import { sendhook } from '$lib/discordServer';
import { isWeeklyPuzzleReleased } from '$lib/weeklyGuard';
import { generateWeeklyToken } from '$lib/verification';
import type { RequestHandler } from '@sveltejs/kit';

export const get: RequestHandler = async ({ params }) => {
	const { year, week, answer } = params;

	// Enforce date guard (Friday 4:30 PM UTC+7)
	if (!isWeeklyPuzzleReleased(Number(year), Number(week))) {
		return {
			status: 200,
			headers: { 'Content-Type': 'application/json' },
			body: {
				result: false
			}
		};
	}

	const { data, error } = await from('weekly_solution').select('*').eq('week', week).eq('year', year);
	if (data && data.length > 0) {
		const ans = await data[0].answer;

		sendhook('submitting ' + answer + ' for ' + year + '/' + week);

		if (answer.toUpperCase() === ans.toUpperCase()) {
			const token = generateWeeklyToken(year, week);
			return {
				status: 200,
				headers: { 'Content-Type': 'application/json' },
				body: {
					result: true,
					token
				}
			};
		}
	}

	return {
		status: 200,
		headers: { 'Content-Type': 'application/json' },
		body: {
			result: false
		}
	};
};
