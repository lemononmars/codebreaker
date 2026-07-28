import { puzzleHunts } from '$lib/data/puzzles/puzzlehunt';
import type { RequestHandler } from '@sveltejs/kit';

export const get: RequestHandler = async ({ params }) => {
  const { id } = params;
  const content = puzzleHunts.find((h) => String(h.id) === String(id)) || puzzleHunts[0];
  return {
    status: 200,
    body: { content }
  };
};