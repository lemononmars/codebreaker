import type { RequestHandler } from '@sveltejs/kit';
import { publishToFacebook } from '$lib/server/facebookServer';

function authorized(request: Request, bodyPassword?: string): boolean {
	const expected = process.env.ADMIN_REVIEW_PASSWORD || 'nazo';
	const headerPass = request.headers.get('x-admin-password');
	return headerPass === expected || bodyPassword === expected;
}

export const post: RequestHandler = async ({ request }) => {
	const body = await request.json().catch(() => ({}));
	const {
		adminPassword,
		caption,
		imageUrl,
		published = true,
		scheduledPublishTime,
		dryRun = false
	} = body;

	if (!authorized(request, adminPassword)) {
		return {
			status: 401,
			body: { success: false, error: 'Unauthorized: รหัสผ่านแอดมินไม่ถูกต้อง' } as any
		};
	}

	if (!caption || typeof caption !== 'string' || caption.trim().length === 0) {
		return {
			status: 400,
			body: { success: false, error: 'ข้อความโพสต์ (caption) ต้องไม่ว่างเปล่า' } as any
		};
	}

	const result = await publishToFacebook({
		caption: caption.trim(),
		imageUrl: imageUrl ? String(imageUrl).trim() : undefined,
		published: Boolean(published),
		scheduledPublishTime: scheduledPublishTime ? Number(scheduledPublishTime) : undefined,
		dryRun: Boolean(dryRun)
	});

	if (!result.success) {
		return {
			status: 400,
			body: result as any
		};
	}

	return {
		status: 200,
		body: result as any
	};
};
