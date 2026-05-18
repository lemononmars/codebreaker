import { from } from '$lib/supabase';
import type { RequestHandler } from '@sveltejs/kit';

export const get: RequestHandler = async ({ params }) => {
	const { uid } = params;

	const { data, error } = await from('wordsearch')
		.select('*')
		.eq('uid', uid)
		.single();

	if (error || !data) {
		console.error('Supabase error:', error);
		return {
			status: 404
		};
	}

	const content = {
		...data,
		type: 'wordsearch',
		date: data.created_at
	};

	return {
		body: { content }
	};
};
