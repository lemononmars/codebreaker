import { from } from '$lib/supabase';
import type { RequestHandler } from '@sveltejs/kit';

export const get: RequestHandler = async ({ params }) => {
	const { year, week } = params;
	const puzzle_id = year + (('0' + week).slice(-2));
	const { data } = await from('leaderboard')
		.select('*')
		.eq('puzzle_type', 'weekly')
		.eq('puzzle_id', puzzle_id);

	return {
		body: {
			leaderboardData: data || [],
			year,
			week
		} as any
	};
};
