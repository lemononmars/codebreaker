import {from} from '$lib/supabase'

/**
 * grab info from leaderboards
 *
 * @param {null}
 * @return {object} array of objects
 */
/** @type {import('/api/leaderboard/[type].ts').RequestHandler} */
export async function get({ params }) {

   const {type, year, week} = params
   const puzzle_id = year + (('0' + week).slice(-2))
	const { data, error } = await from('leaderboard').select('*').eq('puzzle_type', type).eq('puzzle_id', puzzle_id);


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

