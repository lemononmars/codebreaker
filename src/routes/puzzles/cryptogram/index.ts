import {cryptogram} from '$lib/data/puzzles/cryptogram'

/** @type {import('./__types/puzzles/rebus/index.ts').RequestHandler} */
export async function get({ url }) {
   const tag = url.searchParams.get('tag')
   if(tag) {
      return {
         status: 200,
         body: { 
            puzzles: cryptogram.filter(n => n.tags?.includes(tag))
         }
      }
   }
   else {
      return {
         body: { puzzles: cryptogram }
      };
   }
}