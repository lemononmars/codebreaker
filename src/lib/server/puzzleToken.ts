import crypto from 'crypto';

const SERVER_SECRET = process.env.PUZZLE_SECRET || 'codebreaker_jit_secret_key_2026';

export function signPayload(data: Record<string, any>): string {
	const json = JSON.stringify({ ...data, ts: Date.now() });
	const hmac = crypto.createHmac('sha256', SERVER_SECRET).update(json).digest('hex');
	return Buffer.from(json).toString('base64url') + '.' + hmac;
}

export function verifySignedPayload(token: string): Record<string, any> | null {
	try {
		const [b64, signature] = token.split('.');
		if (!b64 || !signature) return null;
		const json = Buffer.from(b64, 'base64url').toString('utf8');
		const expectedHmac = crypto.createHmac('sha256', SERVER_SECRET).update(json).digest('hex');
		if (signature !== expectedHmac) return null;
		const parsed = JSON.parse(json);
		// Check token age (expire after 24h)
		if (Date.now() - parsed.ts > 24 * 60 * 60 * 1000) return null;
		return parsed;
	} catch {
		return null;
	}
}
