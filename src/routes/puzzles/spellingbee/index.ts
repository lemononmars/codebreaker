import { numPuzzles } from '$lib/data/puzzles/spellingbee';
import type { RequestHandler } from '@sveltejs/kit';

export const get: RequestHandler = async () => {
  const randomId = Math.floor(Math.random() * numPuzzles);
  return {
    status: 303,
    headers: {
      location: `/puzzles/spellingbee/${randomId}`
    }
  };
};