import { events } from '$lib/data/events';

/** @type {import('./__types/[id]').RequestHandler} */
export async function get({ params }) {
	const { id } = params;
	const content = events.find((n) => n.id == id);

	if (content) {
		return {
			body: { content }
		};
	}

	return {
		status: 404
	};
}
