export interface BogglePathCell {
	r: number;
	c: number;
}

export function canBuildWordFromLetters(word: string, letters: string[]): boolean {
	const available = new Map<string, number>();
	for (const letter of letters) {
		available.set(letter, (available.get(letter) || 0) + 1);
	}

	for (const letter of word) {
		const remaining = available.get(letter) || 0;
		if (remaining === 0) return false;
		available.set(letter, remaining - 1);
	}
	return word.length > 0;
}

export function isValidBogglePath(grid: string[][], path: BogglePathCell[]): boolean {
	if (path.length === 0) return false;
	const used = new Set<string>();

	for (let index = 0; index < path.length; index++) {
		const cell = path[index];
		if (!grid[cell.r]?.[cell.c]) return false;

		const key = `${cell.r},${cell.c}`;
		if (used.has(key)) return false;
		used.add(key);

		if (index > 0) {
			const previous = path[index - 1];
			const rowDelta = Math.abs(previous.r - cell.r);
			const colDelta = Math.abs(previous.c - cell.c);
			if (rowDelta > 1 || colDelta > 1 || (rowDelta === 0 && colDelta === 0)) return false;
		}
	}

	return true;
}

export function getBogglePathWord(grid: string[][], path: BogglePathCell[]): string {
	if (!isValidBogglePath(grid, path)) return '';
	return path.map((cell) => grid[cell.r][cell.c]).join('');
}
