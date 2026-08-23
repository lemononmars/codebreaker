import crypto from 'crypto';

const SECRET =
	process.env.VERIFICATION_SECRET ||
	process.env.VITE_SUPABASE_ANON_KEY ||
	'cb_weekly_puzzle_token_secret_salt_2026';

export interface WeeklyVerificationPayload {
	puzzle_type: 'weekly';
	puzzle_id: string | number;
	exp: number;
}

export function generateWeeklyToken(year: number | string, week: number | string): string {
	const puzzle_id = `${year}${('0' + week).slice(-2)}`;
	const payload: WeeklyVerificationPayload = {
		puzzle_type: 'weekly',
		puzzle_id,
		exp: Date.now() + 15 * 60 * 1000
	};
	const payloadStr = Buffer.from(JSON.stringify(payload)).toString('base64url');
	const signature = crypto.createHmac('sha256', SECRET).update(payloadStr).digest('base64url');
	return `${payloadStr}.${signature}`;
}

export function verifyWeeklyToken(token: string | undefined | null, expectedPuzzleId: string | number): boolean {
	if (!token || typeof token !== 'string') return false;
	const parts = token.split('.');
	if (parts.length !== 2) return false;

	const [payloadStr, signature] = parts;
	const expectedSig = crypto.createHmac('sha256', SECRET).update(payloadStr).digest('base64url');

	const sigBuf = Buffer.from(signature);
	const expSigBuf = Buffer.from(expectedSig);
	if (sigBuf.length !== expSigBuf.length || !crypto.timingSafeEqual(sigBuf, expSigBuf)) {
		return false;
	}

	try {
		const payload: WeeklyVerificationPayload = JSON.parse(
			Buffer.from(payloadStr, 'base64url').toString('utf8')
		);
		if (payload.puzzle_type !== 'weekly') return false;
		if (String(payload.puzzle_id) !== String(expectedPuzzleId)) return false;
		if (Date.now() > payload.exp) return false;
		return true;
	} catch {
		return false;
	}
}
