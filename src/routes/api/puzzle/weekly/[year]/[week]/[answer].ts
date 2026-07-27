import { from } from '$lib/supabase';
import { sendhook } from '$lib/discordServer'
import type { RequestHandler } from '@sveltejs/kit';

export const get: RequestHandler = async ({ params }) => {

   const { year, week, answer } = params;

   const { data, error } = await from('weekly_solution').select('*').eq('week', week).eq('year', year);
   if (data) {
      const ans = await data[0].answer

      sendhook(
         'submitting ' + answer + ' for ' + year + '/' + week
      )

      if (answer.toUpperCase() === ans.toUpperCase())
         return {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
            body: {
               result: true
            }
         };
   }

   return {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
      body: {
         result: false
      }
   };
}
