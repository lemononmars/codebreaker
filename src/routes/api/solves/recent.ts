import { from } from '$lib/supabase';
import type { RequestHandler } from '@sveltejs/kit';

export const get: RequestHandler = async () => {
	try {
		const { data, error } = await from('leaderboard')
			.select('*')
			.neq('puzzle_type', 'seventh')
			.order('created_at', { ascending: false })
			.limit(6);

		if (error || !data) {
			return {
				status: 200,
				headers: { 'Content-Type': 'application/json' },
				body: []
			};
		}

		return {
			status: 200,
			headers: { 'Content-Type': 'application/json' },
			body: data
		};
	} catch {
		return {
			status: 200,
			headers: { 'Content-Type': 'application/json' },
			body: []
		};
	}
};
