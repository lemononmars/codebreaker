import { from } from '$lib/supabase';

/**
 *
 * @param {null}
 * @return {object} array of objects
 */
/** @type {import('/api/puzzle/[type]/[id].ts').RequestHandler} */
export async function get({ params }) {

	const { type } = params;

	const { data, error } = await from(type).select('*')

	if (error)
		return {
			status: 500,
			headers: { 'Content-Type': 'application/json' },
			body: error
		};

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

	const { data, error } = await from(type).insert([body]);

	if (error) {
		return {
			status: 500,
			body: error
		};
	}

	return {
		status: 201,
		body: data[0]
	};
}
