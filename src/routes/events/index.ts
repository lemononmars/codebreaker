import { events } from '$lib/data/events';
import type { RequestHandler } from '@sveltejs/kit';

export const get: RequestHandler = async ({ url }) => {
	const tag = url.searchParams.get('tag');
	if (tag) {
		return {
			status: 200,
			body: { 
				events: events.filter(n => n.tags?.includes(tag))
			} as any
		};
	}
	return {
		body: { events } as any
	};
};