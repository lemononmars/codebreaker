import { supabaseClient } from '$lib/supabase';
import type { RequestHandler } from '@sveltejs/kit';

export const get: RequestHandler = async ({ params }) => {
	const { uid } = params;

	const { data, error } = await supabaseClient
		.from('crossword')
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
		type: 'crossword',
		date: data.created_at
	};

	return {
		body: { content }
	};
};
