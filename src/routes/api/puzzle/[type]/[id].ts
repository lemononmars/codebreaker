import { from } from '$lib/supabase';
import { isAllowedTable, PUBLIC_TABLES, publicError } from '$lib/apiGuards';
import type { RequestHandler } from '@sveltejs/kit';

export const get: RequestHandler = async ({ params }) => {
	const { type, id } = params;
	if (!isAllowedTable(type, PUBLIC_TABLES)) {
		return publicError(404, 'Not found');
	}

	const field = (type === 'crossword' || type === 'missingvowels' || type === 'alphabet') ? 'uid' : 'id';
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
export const post: RequestHandler = async ({ params }) => {
	const { type, id } = params;
	const data = [{ result: 'incorrect', hint: 'no hint for you' }];

	return {
		status: 200,
		headers: { 'Content-Type': 'application/json' },
		body: data[0]
	};
}
