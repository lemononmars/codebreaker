import { from } from '$lib/supabase';
import type { RequestHandler } from '@sveltejs/kit';

export const get: RequestHandler = async ({ params }) => {
	const { id } = params;

	const { data, error } = await from('alphabet')
		.select('*')
		.eq('uid', id)
		.single();

	if (error || !data) {
		console.error('Supabase error loading alphabet puzzle:', error);
		return {
			status: 404
		};
	}

	const content = {
		...data,
		type: 'alphabet',
		date: data.created_at
	};

	return {
		body: { content }
	};
};
