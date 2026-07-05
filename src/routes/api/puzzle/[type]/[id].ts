import { from } from '$lib/supabase';
import { isAllowedTable, PUBLIC_TABLES, publicError } from '$lib/apiGuards';

/**
 * Returns tye puzzle package to be displayed
 *
 * @param {null}
 * @return {object} array of objects
 */
/** @type {import('/api/puzzle/[type]/[id].ts').RequestHandler} */
export async function get({ params }) {
	const { type, id } = params;
<<<<<<< HEAD
	if (!isAllowedTable(type, PUBLIC_TABLES)) {
		return publicError(404, 'Not found');
	}

	const field = (type === 'crossword' || type === 'missingvowels' || type === 'alphabet') ? 'uid' : 'id';
=======
	const field =
		type === 'crossword' || type === 'missingvowels' || type === 'alphabet' ? 'uid' : 'id';
>>>>>>> 42220a430d2e5b35a90c69952393aeacd19acfce
	const { data, error } = await from(type).select('*').eq(field, id);

	if (error)
		return publicError();

	return {
		status: 200,
		headers: { 'Content-Type': 'application/json' },
		body: data[0]
	};
}

/**
 * check the answer for the requested puzzle
 *
 * @param {null}
 * @return {object} array of objects
 */
/** @type {import('/api/puzzle/[type]/[id].ts').RequestHandler} */
export async function post({ params }) {
	const { type, id } = params;
	const data = [{ result: 'incorrect', hint: 'no hint for you' }];

	return {
		status: 200,
		headers: { 'Content-Type': 'application/json' },
		body: data[0]
	};
}
