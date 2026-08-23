import { events } from '$lib/data/events';
import type { RequestHandler } from '@sveltejs/kit';

export const get: RequestHandler = async ({ params }) => {
	const { id } = params;
	const content = events.find((n) => String(n.id) === String(id));

	if (content) {
		return {
			body: { content } as any
		};
	}

	return {
		status: 404
	};
};
