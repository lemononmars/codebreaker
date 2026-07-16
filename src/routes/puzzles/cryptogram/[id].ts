import { cryptogram } from '$lib/data/puzzles/cryptogram';
import { from } from '$lib/supabase';
import type { RequestHandler } from '@sveltejs/kit';

export const get: RequestHandler = async ({ params }) => {
	let id = Number(params.id);
	const total: number = Object.keys(cryptogram).length;
	id = ((id + total - 1) % total) + 1;

	try {
		const { data, error } = await from('cryptogram').select('*').eq('uid', id).single();

		if (!error && data) {
			const content = {
				...data,
				type: 'cryptogram',
				date: data.created_at
			};
			return {
				body: { content }
			};
		}
	} catch (err) {
		console.error('Supabase error loading cryptogram puzzle:', err);
	}

	// Fallback to static data
	const content = cryptogram.find((n) => n.id === id);

	if (content) {
		return {
			body: { content }
		};
	}

	return {
		status: 404
	};
};
