import { puzzleHunts } from '$lib/data/puzzles/puzzlehunt';
import type { RequestHandler } from '@sveltejs/kit';

export const get: RequestHandler = async () => {
  return {
    status: 200,
    body: { puzzleHunts }
  };
};