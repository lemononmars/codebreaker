import { from } from '$lib/supabase';
import type { RequestHandler } from '@sveltejs/kit';

export const get: RequestHandler = async ({ url }) => {
	const tag = url.searchParams.get('tag');

	let query = from('cryptogram')
		.select('*')
		.eq('is_public', true)
		.order('created_at', { ascending: false });

	if (tag) {
		query = query.contains('tags', [tag]);
	}

	const { data, error } = await query;

	if (error) {
		console.error('Supabase error listing cryptogram puzzles:', error);
		return {
			status: 500,
			body: { error: error.message }
		};
	}

	const puzzles = data.map((d) => ({
		...d,
		type: 'cryptogram',
		date: d.created_at
	}));

	return {
		body: { puzzles }
	};
};
