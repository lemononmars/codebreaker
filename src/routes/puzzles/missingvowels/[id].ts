import { from } from '$lib/supabase';
import type { RequestHandler } from '@sveltejs/kit';

const defaultMissingVowels = {
	uid: 'default-1',
	title: 'คำไทยพยัญชนะล้วน',
	words: ['กงเกวียน', 'สถานบันเทิง', 'วิทยาศาสตร์', 'พฤกษศาสตร์'],
	author: 'Code Breaker',
	created_at: new Date().toISOString()
};

export const get: RequestHandler = async ({ params }) => {
	const { id } = params;

	try {
		const { data, error } = await from('missingvowels')
			.select('*')
			.eq('uid', id)
			.single();

		if (!error && data) {
			const content = {
				...data,
				type: 'missingvowels',
				date: data.created_at
			};
			return { body: { content } };
		}
	} catch (e) {
		// Fallback
	}

	const content = {
		...defaultMissingVowels,
		type: 'missingvowels',
		date: defaultMissingVowels.created_at
	};

	return {
		body: { content }
	};
};
