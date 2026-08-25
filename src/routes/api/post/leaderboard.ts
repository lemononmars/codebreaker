import { from } from '$lib/supabase';
import type { Leaderboard } from '$lib/interfaces';
import { sendhook } from '$lib/discordServer';
import { verifyWeeklyToken } from '$lib/verification';
import type { RequestHandler } from '@sveltejs/kit';

async function isDuplicateSubmission(
	puzzle_type: string,
	puzzle_id: string | number,
	name: string
): Promise<boolean> {
	if (puzzle_type === 'blanks' || puzzle_type === 'spellingquiz') {
		return false;
	}

	const { data: duplicateData } = await from('leaderboard')
		.select('*')
		.eq('puzzle_type', puzzle_type)
		.eq('puzzle_id', puzzle_id)
		.eq('name', name);

	return !!(duplicateData && duplicateData.length > 0);
}

export const post: RequestHandler = async ({ request }) => {
	const submission: Leaderboard & { verification_token?: string } = await request.json();
	const { name, puzzle_type, puzzle_id, verification_token } = submission;

	// verify solution token for weekly puzzles
	if (puzzle_type === 'weekly') {
		const isValid = verifyWeeklyToken(verification_token, puzzle_id);
		if (!isValid) {
			return {
				status: 403,
				body: { error: 'Invalid or expired solution verification token.' }
			};
		}
	}

	// check for duplicate (skip for blanks and spellingquiz)
	if (await isDuplicateSubmission(puzzle_type, puzzle_id, name)) {
		return {
			status: 400,
			body: { error: 'You have already submitted a score for this puzzle.' }
		};
	}

	let finalScore = submission.score;

	// weekly puzzle requires scoring system
	if (puzzle_type === 'weekly') {
		const puzzleYear = Number(String(puzzle_id).slice(0, 4));
		const currentYear = new Date().getFullYear();

		if (puzzleYear !== currentYear) {
			finalScore = 5;
		} else {
			const { data } = await from('leaderboard').select('*').eq('puzzle_id', puzzle_id);
			if (data) {
				finalScore = 10 - Math.min(data.length, 5);
			} else {
				finalScore = 10;
			}
		}
	}

	const recordToInsert = {
		name,
		puzzle_type,
		puzzle_id,
		score: finalScore
	};

	const { data, error } = await from('leaderboard').insert(recordToInsert);

	if (error) {
		sendhook(':x: error submitting ' + puzzle_type + '/' + puzzle_id);
		return {
			status: 500,
			body: { error: 'Internal server error' }
		};
	}

	sendhook(
		':game_die: ' + puzzle_type + '/' + puzzle_id + ' solved by ' + name + ' - ' + submission.score
	);
	return {
		status: 200,
		body: data
	};
};
