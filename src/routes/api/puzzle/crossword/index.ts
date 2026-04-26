import { from } from '$lib/supabase';
import type { RequestHandler } from '@sveltejs/kit';

/**
 * Get all crossword puzzles
 */
export const get: RequestHandler = async () => {
	const { data, error } = await from('crossword')
		.select('*')
		.order('created_at', { ascending: false });

	if (error) {
		return {
			status: 500,
			body: error
		};
	}

	return {
		status: 200,
		body: data
	};
};

/**
 * Insert a new crossword puzzle
 */
export const post: RequestHandler = async ({ request }) => {
	const body = await request.json();

	// Ensure we are inserting into the correct table
	const { data, error } = await from('crossword').insert([body]);

	if (error) {
		console.error('API Error:', error);
		return {
			status: 500,
			body: error
		};
	}

	return {
		status: 201,
		body: data ? data[0] : null
	};
};
