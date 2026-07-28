import { cryptogram as staticCryptogram } from '$lib/data/puzzles/cryptogram';
import { from } from '$lib/supabase';
import type { RequestHandler } from '@sveltejs/kit';

export const get: RequestHandler = async ({ url }) => {
	const tag = url.searchParams.get('tag');

	try {
		let query = from('cryptogram')
			.select('*')
			.eq('is_public', true)
			.order('created_at', { ascending: false });

		if (tag) {
			query = query.contains('tags', [tag]);
		}

		const { data, error } = await query;

		if (!error && data && data.length > 0) {
			const puzzles = data.map((d) => ({
				...d,
				type: 'cryptogram',
				date: d.created_at
			}));
			return { body: { puzzles } };
		}
	} catch (e) {
		console.error('Failed fetching cryptogram from Supabase:', e);
	}

	let filtered = staticCryptogram;
	if (tag) {
		filtered = staticCryptogram.filter((p) => p.tags?.includes(tag));
	}

	return {
		body: { puzzles: filtered }
	};
};
