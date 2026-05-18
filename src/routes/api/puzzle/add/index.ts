import { from } from '$lib/supabase';
import type { RequestHandler } from '@sveltejs/kit';

/**
 * Insert a new puzzle of any type
 */
export const post: RequestHandler = async ({ request }) => {
	try {
		const body = await request.json();

		const { type, data: puzzleData } = body;

		if (!type || !puzzleData) {
			return {
				status: 400,
				body: { error: 'Missing type or data' }
			};
		}

		// Insert into the specified table (e.g. 'crossword', 'wordsearch', etc.)
		const { data, error } = await from(type).insert([puzzleData]);

		if (error) {
			console.error(`API Error inserting to ${type}:`, error);
			return {
				status: 500,
				body: error
			};
		}

		return {
			status: 201,
			body: data ? data[0] : null
		};
	} catch (error) {
		console.error('API Error:', error);
		return {
			status: 500,
			body: { error: 'Internal Server Error' }
		};
	}
};
