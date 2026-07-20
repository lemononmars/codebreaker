import { cryptogram } from '$lib/data/puzzles/cryptogram';
import { from } from '$lib/supabase';
import type { RequestHandler } from '@sveltejs/kit';

export const get: RequestHandler = async ({ params }) => {
	const { id } = params;

	const { data, error } = await from('cryptogram')
		.select('*')
		.eq('id', id)
		.single();

	if (error || !data) {
		console.error('Supabase error loading cryptogram puzzle:', error);
		return {
			status: 404
		};
	}

	const content = {
		...data,
		type: 'cryptogram',
		date: data.created_at
	};

	return {
		body: { content }
	};
};
