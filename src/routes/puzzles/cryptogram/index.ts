import {cryptogram} from '$lib/data/puzzles/cryptogram'
import type { RequestHandler } from '@sveltejs/kit';

export const get: RequestHandler = async ({ url }) => {
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