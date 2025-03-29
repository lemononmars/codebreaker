import {from} from '$lib/supabase'

/**
 * grab info from leaderboards
 *
 * @param {null}
 * @return {object} array of objects
 */
/** @type {import('/api/leaderboard/[type].ts').RequestHandler} */
export async function get({ params }) {

   const {type, year} = params
	const { data, error } = await from('leaderboard')
      .select('*')
      .eq('puzzle_type', type)
      .gte('puzzle_id', year*100)
      .lte('puzzle_id', (year+1)*100);


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
		body: data
	};
}

