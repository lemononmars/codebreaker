import { from } from '$lib/supabase';
import { isAllowedTable, PUBLIC_INSERT_TABLES, PUBLIC_TABLES, publicError } from '$lib/apiGuards';

/**
 *
 * @param {null}
 * @return {object} array of objects
 */
/** @type {import('/api/puzzle/[type]/[id].ts').RequestHandler} */
export async function get({ params }) {

	const { type } = params;
	if (!isAllowedTable(type, PUBLIC_TABLES)) {
		return publicError(404, 'Not found');
	}

	const { data, error } = await from(type).select('*')

	if (error)
		return publicError();

	return {
		status: 200,
		headers: { 'Content-Type': 'application/json' },
		body: data
	};
}

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function post({ params, request }) {
	const { type } = params;
	const body = await request.json();
	if (!isAllowedTable(type, PUBLIC_INSERT_TABLES)) {
		return publicError(404, 'Not found');
	}

	const { data, error } = await from(type).insert([body]);

	if (error) {
		console.error(`API Error inserting to ${type}:`, error);
		return publicError();
	}

	return {
		status: 201,
		body: data[0]
	};
}
