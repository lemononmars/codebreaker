import { getDailySpellingBee } from '$lib/data/puzzles/spellingbee';
import type { RequestHandler } from '@sveltejs/kit';

export const get: RequestHandler = async () => {
	const puzzle = getDailySpellingBee();
	return {
		status: 200,
		headers: { 'Content-Type': 'application/json' },
		body: puzzle
	};
};
