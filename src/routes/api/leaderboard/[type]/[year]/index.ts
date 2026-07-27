import {from} from '$lib/supabase'
import type { RequestHandler } from '@sveltejs/kit';

export const get: RequestHandler = async ({ params }) => {
   const {type, year} = params;
	const { data, error } = await from('leaderboard')
      .select('*')
      .eq('puzzle_type', type)
      .gte('puzzle_id', parseInt(year)*100)
      .lte('puzzle_id', (parseInt(year)+1)*100);


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

