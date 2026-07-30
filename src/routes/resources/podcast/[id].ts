import { getPodcastById } from '$lib/data/podcasts';
import type { RequestHandler } from '@sveltejs/kit';

export const get: RequestHandler = async ({ params }) => {
	const { id } = params;
	const episode = getPodcastById(id);

	if (episode) {
		return {
			body: { episode }
		};
	}

	return {
		status: 404
	};
};
