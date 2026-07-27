import { from } from '$lib/supabase';
import type { RequestHandler } from '@sveltejs/kit';

export const get: RequestHandler = async ({ params }) => {
	const { id } = params;

	const { data, error } = await from('puzzlehunt')
		.select('*')
		.eq('id', id)
		.single();

	if (error || !data) {
		console.error('Supabase error loading puzzlehunt:', error);
		return {
			status: 404
		};
	}

	const content = {
		...data,
		type: 'puzzlehunt',
		date: data.created_at || data.date
	};

	return {
		body: { content }
	};
};