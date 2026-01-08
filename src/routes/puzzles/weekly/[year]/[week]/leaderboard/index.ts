import { from } from '$lib/supabase';
import type { Leaderboard } from '$lib/interfaces';

export async function get({ params }) {
   const { year, week } = params;
   const puzzle_id = year + (('0' + week).slice(-2));
   const { data, error } = await from('leaderboard')
      .select('*')
      .eq('puzzle_type', 'weekly')
      .eq('puzzle_id', puzzle_id);

   return {
      body: {
         leaderboardData: data || [],
         year,
         week
      }
   };
}
