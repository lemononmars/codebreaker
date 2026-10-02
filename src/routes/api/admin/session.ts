import type { RequestHandler } from '@sveltejs/kit';

export const post: RequestHandler = async ({ request }) => {
	const expected = process.env.ADMIN_REVIEW_PASSWORD || 'nazo';
	const authorized = request.headers.get('x-admin-password') === expected;
	return { status: authorized ? 200 : 401, body: { authorized } };
};
