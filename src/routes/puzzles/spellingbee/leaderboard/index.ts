import { from } from '$lib/supabase';

export async function get() {
   const { data, error } = await from('leaderboard')
      .select('*')
      .eq('puzzle_type', 'spellingbee');

   return {
      body: {
         leaderboardData: data || []
      }
   };
}
