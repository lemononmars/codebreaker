import type { RequestHandler } from '@sveltejs/kit';
export const get: RequestHandler = async () => ({ status: 404 });
