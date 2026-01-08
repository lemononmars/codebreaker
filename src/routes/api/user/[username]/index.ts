import { from } from '$lib/supabase';

export async function get({ params }: { params: Record<string, string> }) {
   const { username } = params;

   try {
      // Fetch user profile
      const { data: profile, error: profileError } = await from('user_profiles')
         .select('*')
         .eq('username', username)
         .single();

      if (profileError || !profile) {
         return {
            status: 404,
            body: { error: 'User not found' }
         };
      }

      // Fetch solved puzzles
      const { data: solvedPuzzles, error: puzzlesError } = await from('leaderboard')
         .select('*')
         .eq('name', username);

      return {
         body: {
            ...profile,
            solved_puzzles: solvedPuzzles || []
         }
      };
   } catch (error) {
      return {
         status: 500,
         body: { error: 'Internal server error' }
      };
   }
}
