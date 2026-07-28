import { cryptogram as staticCryptogram } from '$lib/data/puzzles/cryptogram';
import { from } from '$lib/supabase';
import type { RequestHandler } from '@sveltejs/kit';

export const get: RequestHandler = async ({ params }) => {
	const { id } = params;

	try {
		const { data, error } = await from('cryptogram')
			.select('*')
			.eq('id', id)
			.single();

		if (!error && data) {
			const content = {
				...data,
				type: 'cryptogram',
				date: data.created_at
			};
			return { body: { content } };
		}
	} catch (e) {
		console.error('Failed fetching cryptogram [id] from Supabase:', e);
	}

	const fallback = staticCryptogram.find((p) => String(p.id) === String(id)) || staticCryptogram[0];

	return {
		body: { content: fallback }
	};
};
