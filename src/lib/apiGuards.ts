export const PUZZLE_TABLES = new Set([
	'alphabet',
	'crossword',
	'cryptogram',
	'missingvowels',
	'puzzlehunt',
	'rebus',
	'spellingbee',
	'weekly',
	'wordsearch'
]);

export const PUBLIC_TABLES = new Set([...PUZZLE_TABLES, 'leaderboard']);

export const PUBLIC_INSERT_TABLES = new Set(['crossword', 'wordsearch', 'leaderboard']);

export function isAllowedTable(table: string, allowed: Set<string>) {
	return allowed.has(table);
}

export function publicError(status = 500, message = 'Internal server error') {
	return {
		status,
		headers: { 'Content-Type': 'application/json' },
		body: { error: message }
	};
}
