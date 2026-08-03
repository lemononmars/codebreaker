/**
 * Utility functions for weekly puzzle release schedule date guard.
 * Puzzles release on the Nth Friday of the year at 4:30 PM UTC+7 (= 09:30 UTC).
 */

export function getNthFridayUploadTime(year: number, week: number): number {
	const y = Number(year) || 2026;
	const w = Number(week) || 1;
	const jan1Utc = Date.UTC(y, 0, 1);
	const dayOfWeek = new Date(jan1Utc).getUTCDay(); // 0 = Sun, 5 = Fri
	const daysUntilFirstFriday = (5 - dayOfWeek + 7) % 7;
	// 4:30 PM UTC+7 = 09:30 UTC (9.5 hours = 9.5 * 3600000 ms)
	const firstFridayUtc = jan1Utc + daysUntilFirstFriday * 86400000 + 9.5 * 3600000;
	return firstFridayUtc + (w - 1) * 7 * 86400000;
}

export function isWeeklyPuzzleReleased(year: number, week: number, nowMs: number = Date.now()): boolean {
	return getNthFridayUploadTime(year, week) <= nowMs;
}

export function getNthFridayOfYear(year: number, week: number): Date {
	return new Date(getNthFridayUploadTime(year, week));
}
