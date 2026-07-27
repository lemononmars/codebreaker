import { supabaseClient, from } from '$lib/supabase';

/**
 * a simple answer checker
 * answers are stored in the database
 *
 * @param {null}
 * @return {object} array of objects
 */
/** @type {import('/api/puzzle/weekly/[year]/[week]/[answer].ts').RequestHandler} */
export async function get() {
   const { data: puzzles, error: err1 } = await from('weekly_solution')
      .select('year, week, title, created_at, answer');

   if (puzzles) {
      const solveCounts: Record<number, number> = {};

      const { data: rpcCounts } = await supabaseClient.rpc('get_weekly_solve_counts');
      if (rpcCounts && Array.isArray(rpcCounts)) {
         rpcCounts.forEach((entry: any) => {
            const pid = Number(entry.puzzle_id);
            if (pid) {
               solveCounts[pid] = Number(entry.solve_count);
            }
         });
      } else {
         // Fallback if rpc is unavailable: paginated fetch
         let page = 0;
         const pageSize = 1000;
         let hasMore = true;

         while (hasMore) {
            const { data: leaderboard } = await from('leaderboard')
               .select('puzzle_id')
               .eq('puzzle_type', 'weekly')
               .range(page * pageSize, (page + 1) * pageSize - 1);

            if (leaderboard && leaderboard.length > 0) {
               leaderboard.forEach((entry: any) => {
                  const pid = Number(entry.puzzle_id);
                  if (pid) {
                     solveCounts[pid] = (solveCounts[pid] || 0) + 1;
                  }
               });
               if (leaderboard.length < pageSize) {
                  hasMore = false;
               } else {
                  page++;
               }
            } else {
               hasMore = false;
            }
         }
      }

      const content = puzzles.map((p: any) => {
         const pid = Number(p.year) * 100 + Number(p.week);
         const hasAnswer = !!(p.answer && p.answer.trim().length > 0);
         return {
            year: p.year,
            week: p.week,
            title: p.title,
            created_at: p.created_at,
            solves: solveCounts[pid] || 0,
            hasAnswer
         };
      });

      return {
         status: 200,
         headers: { 'Content-Type': 'application/json' },
         body: {
            content
         }
      };
   }

   return {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
      body: {
         content: []
      }
   };
}
