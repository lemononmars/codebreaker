import { from } from '$lib/supabase';
import { publicError } from '$lib/apiGuards';
import type { RequestHandler } from '@sveltejs/kit';
import { staticLogicPuzzles } from '$lib/data/puzzles/logicpuzzle';

/**
 * Get all logic puzzles from database
 */
export const get: RequestHandler = async () => {
	try {
		const { data, error } = await from('logic_puzzles')
			.select('*')
			.order('created_at', { ascending: false });

		if (!error && Array.isArray(data) && data.length > 0) {
			return {
				status: 200,
				headers: { 'Content-Type': 'application/json' },
				body: data
			};
		}
	} catch (e) {
		console.warn('Fallback to static logic puzzles:', e);
	}

	return {
		status: 200,
		headers: { 'Content-Type': 'application/json' },
		body: staticLogicPuzzles
	};
};
export const GET = get;

/**
 * Insert a new logic puzzle into database
 */
export const post: RequestHandler = async ({ request }) => {
	try {
		const body = await request.json();
		const { id, ...rawPuzzleData } = body;

		const puzzleData = {
			title: String(rawPuzzleData.title || '').trim(),
			genre: String(rawPuzzleData.genre || 'slither').trim(),
			genre_title: String(rawPuzzleData.genre_title || rawPuzzleData.genre || 'Slitherlink').trim(),
			url: String(rawPuzzleData.url || '').trim(),
			width: Number(rawPuzzleData.width) || 5,
			height: Number(rawPuzzleData.height) || 5,
			difficulty: String(rawPuzzleData.difficulty || 'Easy'),
			author: String(rawPuzzleData.author || 'Codebreaker').trim()
		};

		if (!puzzleData.title || !puzzleData.url) {
			return publicError(400, 'Title and URL are required');
		}

		const { data, error } = await from('logic_puzzles').insert([puzzleData]).select();

		if (error) {
			console.error('API Error inserting logic puzzle:', error);
			return publicError(400, error.message || 'Error inserting logic puzzle');
		}

		return {
			status: 201,
			headers: { 'Content-Type': 'application/json' },
			body: data ? data[0] : null
		};
	} catch (err: any) {
		console.error('API exception inserting logic puzzle:', err);
		return publicError(500, err.message || 'Server error');
	}
};
export const POST = post;

/**
 * Update an existing logic puzzle in database
 */
export const put: RequestHandler = async ({ request }) => {
	try {
		const body = await request.json();
		const { id, ...rawUpdates } = body;

		if (!id) {
			return publicError(400, 'Missing puzzle ID');
		}

		const updates: any = {};
		if (rawUpdates.title !== undefined) updates.title = String(rawUpdates.title).trim();
		if (rawUpdates.genre !== undefined) updates.genre = String(rawUpdates.genre).trim();
		if (rawUpdates.genre_title !== undefined) updates.genre_title = String(rawUpdates.genre_title).trim();
		if (rawUpdates.url !== undefined) updates.url = String(rawUpdates.url).trim();
		if (rawUpdates.width !== undefined) updates.width = Number(rawUpdates.width) || 5;
		if (rawUpdates.height !== undefined) updates.height = Number(rawUpdates.height) || 5;
		if (rawUpdates.difficulty !== undefined) updates.difficulty = String(rawUpdates.difficulty);
		if (rawUpdates.author !== undefined) updates.author = String(rawUpdates.author).trim();

		const { data, error } = await from('logic_puzzles').update(updates).eq('id', id).select();

		if (error) {
			console.error('API Error updating logic puzzle:', error);
			return publicError(400, error.message || 'Error updating logic puzzle');
		}

		return {
			status: 200,
			headers: { 'Content-Type': 'application/json' },
			body: data ? data[0] : null
		};
	} catch (err: any) {
		console.error('API exception updating logic puzzle:', err);
		return publicError(500, err.message || 'Server error');
	}
};
export const PUT = put;

/**
 * Delete a logic puzzle from database
 */
export const del: RequestHandler = async ({ request, url }) => {
	try {
		let id = url.searchParams.get('id');
		if (!id) {
			try {
				const body = await request.json();
				id = body.id;
			} catch (e) {}
		}

		if (!id) {
			return publicError(400, 'Missing puzzle ID');
		}

		const { error } = await from('logic_puzzles').delete().eq('id', Number(id));

		if (error) {
			console.error('API Error deleting logic puzzle:', error);
			return publicError(400, error.message || 'Error deleting logic puzzle');
		}

		return {
			status: 200,
			headers: { 'Content-Type': 'application/json' },
			body: { success: true }
		};
	} catch (err: any) {
		console.error('API exception deleting logic puzzle:', err);
		return publicError(500, err.message || 'Server error');
	}
};
export const DELETE = del;
