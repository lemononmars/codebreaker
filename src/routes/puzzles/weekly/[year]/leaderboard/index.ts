import { from } from '$lib/supabase';
import type { Leaderboard } from '$lib/interfaces';
import type { RequestHandler } from '@sveltejs/kit';

export const get: RequestHandler = async ({ params }) => {
   const { year } = params;
   const y = parseInt(year);
   const { data, error } = await from('leaderboard')
      .select('*')
      .eq('puzzle_type', 'weekly')
      .gte('puzzle_id', y * 100)
      .lte('puzzle_id', (y + 1) * 100);

   return {
      body: {
         leaderboardData: data || [],
         year: y
      }
   };
}
