import type { BattleRoomMeta } from './types';

const MAX_ACTION_RECEIPTS = 500;

/** Claims a client action once within a room metadata version. */
export function claimBattleAction(
	meta: BattleRoomMeta,
	actionId: string,
	playerId: string,
	now = Date.now()
): boolean {
	if (!actionId || actionId.length > 160 || !playerId) return false;
	const receipts = { ...(meta.actionReceipts || {}) };
	if (receipts[actionId]) return false;
	receipts[actionId] = { playerId, timestamp: now };
	meta.actionReceipts = Object.fromEntries(
		Object.entries(receipts)
			.sort((a, b) => b[1].timestamp - a[1].timestamp)
			.slice(0, MAX_ACTION_RECEIPTS)
	);
	return true;
}
