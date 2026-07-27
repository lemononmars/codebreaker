import { puzzleHunts } from '$lib/data/puzzles/puzzlehunt';

/** @type {import('./__types/index').RequestHandler} */
export async function get() {
   return {
      status: 200,
      body: { 
         puzzleHunts
      }
   };
}