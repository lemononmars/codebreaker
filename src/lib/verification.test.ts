import { describe, it, expect } from 'vitest';
import { generateWeeklyToken, verifyWeeklyToken } from './verification';

describe('Weekly Puzzle Verification Token', () => {
	it('generates and verifies a valid weekly token', () => {
		const token = generateWeeklyToken(2026, 8);
		expect(token).toBeTruthy();
		expect(verifyWeeklyToken(token, '202608')).toBe(true);
		expect(verifyWeeklyToken(token, 202608)).toBe(true);
	});

	it('rejects token for incorrect puzzle_id', () => {
		const token = generateWeeklyToken(2026, 8);
		expect(verifyWeeklyToken(token, '202609')).toBe(false);
		expect(verifyWeeklyToken(token, '202508')).toBe(false);
	});

	it('rejects tampered token', () => {
		const token = generateWeeklyToken(2026, 8);
		const parts = token.split('.');
		const tampered = parts[0] + '.tampered_signature';
		expect(verifyWeeklyToken(tampered, '202608')).toBe(false);
	});

	it('rejects null, empty, or malformed tokens', () => {
		expect(verifyWeeklyToken(null, '202608')).toBe(false);
		expect(verifyWeeklyToken(undefined, '202608')).toBe(false);
		expect(verifyWeeklyToken('', '202608')).toBe(false);
		expect(verifyWeeklyToken('invalid.token.extra', '202608')).toBe(false);
		expect(verifyWeeklyToken('invalid', '202608')).toBe(false);
	});

	it('rejects expired token', () => {
		const payload = {
			puzzle_type: 'weekly',
			puzzle_id: '202608',
			exp: Date.now() - 1000 // expired 1 sec ago
		};
		const payloadStr = Buffer.from(JSON.stringify(payload)).toString('base64url');
		const SECRET =
			process.env.VERIFICATION_SECRET ||
			process.env.VITE_SUPABASE_ANON_KEY ||
			'cb_weekly_puzzle_token_secret_salt_2026';
		const crypto = require('crypto');
		const signature = crypto.createHmac('sha256', SECRET).update(payloadStr).digest('base64url');
		const expiredToken = `${payloadStr}.${signature}`;

		expect(verifyWeeklyToken(expiredToken, '202608')).toBe(false);
	});
});
