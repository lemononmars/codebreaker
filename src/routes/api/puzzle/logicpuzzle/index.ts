import { from } from '$lib/supabase';
import { publicError } from '$lib/apiGuards';
import type { RequestHandler } from '@sveltejs/kit';

/**
 * Get all logic puzzles from database
 */
export const get: RequestHandler = async () => {
	const { data, error } = await from('logic_puzzles')
		.select('*')
		.order('created_at', { ascending: false });

	if (error) {
		console.error('API Error loading logic puzzles:', error);
		return publicError();
	}

	return {
		status: 200,
		body: data
	};
};

/**
 * Insert a new logic puzzle into database
 */
export const post: RequestHandler = async ({ request }) => {
	const body = await request.json();

	const { data, error } = await from('logic_puzzles').insert([body]);

	if (error) {
		console.error('API Error inserting logic puzzle:', error);
		return publicError();
	}

	return {
		status: 201,
		body: data ? data[0] : null
	};
};
