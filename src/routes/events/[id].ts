import { events } from '$lib/data/events';
import type { RequestHandler } from '@sveltejs/kit';

export const get: RequestHandler = async ({ params }) => {
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
