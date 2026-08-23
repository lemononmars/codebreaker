import { getPuzzle, getDailySpellingBee, numPuzzles } from '$lib/data/puzzles/spellingbee';
import type { RequestHandler } from '@sveltejs/kit';

export const get: RequestHandler = async ({ params }) => {
	const { id } = params;

	if (id === 'daily') {
		const content = getDailySpellingBee();
		return { body: { content } as any };
	}

	const numericId = parseInt(id, 10);
	if (isNaN(numericId) || numericId < 0 || numericId >= numPuzzles) {
		const newID = Math.floor(Math.random() * numPuzzles);
		return {
			status: 303,
			headers: {
				location: `/puzzles/spellingbee/${newID}`
			}
		};
	}

	let content: any = getPuzzle(numericId);
	if (!content) {
		content = getDailySpellingBee();
	}

	return {
		body: { content } as any
	};
};