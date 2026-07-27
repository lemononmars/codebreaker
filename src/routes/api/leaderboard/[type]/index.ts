import {from} from '$lib/supabase'
import type { RequestHandler } from '@sveltejs/kit';

export const get: RequestHandler = async ({ params }) => {
   const {type} = params
	const { data, error } = await from('leaderboard').select('*').eq('puzzle_type', type);


   if(error) {
      return {
         status: 500,
         headers: { 'Content-Type': 'application/json' },
         body: []
      }
   }
	return {
		status: 200,
		headers: { 'Content-Type': 'application/json' },
		body: data as any
	};
}

