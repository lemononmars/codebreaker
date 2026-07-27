// @ts-nocheck
/**
 * Pentomino Engine Utility
 */

const PENTOMINOES = {
	F: [
		[1, 0],
		[2, 0],
		[0, 1],
		[1, 1],
		[1, 2]
	],
	I: [
		[0, 0],
		[0, 1],
		[0, 2],
		[0, 3],
		[0, 4]
	],
	L: [
		[0, 0],
		[0, 1],
		[0, 2],
		[0, 3],
		[1, 3]
	],
	P: [
		[0, 0],
		[1, 0],
		[0, 1],
		[1, 1],
		[0, 2]
	],
	N: [
		[0, 0],
		[0, 1],
		[1, 1],
		[1, 2],
		[1, 3]
	],
	T: [
		[0, 0],
		[1, 0],
		[2, 0],
		[1, 1],
		[1, 2]
	],
	U: [
		[0, 0],
		[2, 0],
		[0, 1],
		[1, 1],
		[2, 1]
	],
	V: [
		[0, 0],
		[0, 1],
		[0, 2],
		[1, 2],
		[2, 2]
	],
	W: [
		[0, 0],
		[0, 1],
		[1, 1],
		[1, 2],
		[2, 2]
	],
	X: [
		[1, 0],
		[0, 1],
		[1, 1],
		[2, 1],
		[1, 2]
	],
	Y: [
		[0, 0],
		[0, 1],
		[1, 1],
		[0, 2],
		[0, 3]
	],
	Z: [
		[0, 0],
		[1, 0],
		[1, 1],
		[1, 2],
		[2, 2]
	]
};

const ROWS = 8;
const COLS = 8;

function rotate(shape) {
	return shape.map(([x, y]) => [-y, x]);
}

function reflect(shape) {
	return shape.map(([x, y]) => [-x, y]);
}

function normalize(shape) {
	let minX = Math.min(...shape.map((p) => p[0]));
	let minY = Math.min(...shape.map((p) => p[1]));
	return shape.map(([x, y]) => [x - minX, y - minY]).sort((a, b) => a[0] - b[0] || a[1] - b[1]);
}

function getOrientations(shape) {
	const seen = new Set();
	const orientations = [];
	let current = shape;

	for (let f = 0; f < 2; f++) {
		for (let r = 0; r < 4; r++) {
			const normalized = normalize(current);
			const key = JSON.stringify(normalized);
			if (!seen.has(key)) {
				seen.add(key);
				orientations.push(normalized);
			}
			current = rotate(current);
		}
		current = reflect(current);
	}
	return orientations;
}

const pieceOrientations = {};
for (const [id, shape] of Object.entries(PENTOMINOES)) {
	pieceOrientations[id] = getOrientations(shape);
}

export function solvePentomino(blockedCells, forcedCells = []) {
	const forcedGrid = Array.from({ length: ROWS }, () => Array(COLS).fill(null));
	const forcedCounts = {};
	const pieces = Object.keys(PENTOMINOES);
	for (const id of pieces) forcedCounts[id] = 0;

	for (const { r, c, id } of forcedCells) {
		forcedGrid[r][c] = id;
		forcedCounts[id]++;
	}

	let usedPiecesMask = 0;
	const pieceMask = {};
	for (let i = 0; i < pieces.length; i++) {
		pieceMask[pieces[i]] = 1 << i;
	}

	const flatGrid = new Array(ROWS * COLS).fill(null);
	for (const [r, c] of blockedCells) flatGrid[r * COLS + c] = 'X_BLOCK';

	const placements = {};
	for (const id of pieces) {
		placements[id] = Array.from({ length: ROWS * COLS }, () => []);
		for (const orientation of pieceOrientations[id]) {
			for (let r = 0; r < ROWS; r++) {
				for (let c = 0; c < COLS; c++) {
					for (let i = 0; i < orientation.length; i++) {
						const [ox, oy] = orientation[i];
						const startR = r - oy;
						const startC = c - ox;
						let staticSafe = true;
						let coveredForced = 0;
						const flatCells = [];
						for (const [dx, dy] of orientation) {
							const nr = startR + dy;
							const nc = startC + dx;
							if (
								nr < 0 ||
								nr >= ROWS ||
								nc < 0 ||
								nc >= COLS ||
								flatGrid[nr * COLS + nc] === 'X_BLOCK'
							) {
								staticSafe = false;
								break;
							}
							if (forcedGrid[nr][nc] !== null) {
								if (forcedGrid[nr][nc] !== id) {
									staticSafe = false;
									break;
								}
								coveredForced++;
							}
							flatCells.push(nr * COLS + nc);
						}
						if (staticSafe && coveredForced === forcedCounts[id]) {
							placements[id][r * COLS + c].push(flatCells);
						}
					}
				}
			}
		}
	}

	const checkVisited = new Array(ROWS * COLS).fill(false);
	const stack = new Array(ROWS * COLS).fill(0);
	const allPiecesMask = (1 << pieces.length) - 1;

	function checkConnectivity() {
		for (let i = 0; i < ROWS * COLS; i++) {
			checkVisited[i] = false;
		}

		for (let i = 0; i < ROWS * COLS; i++) {
			if (flatGrid[i] === null && !checkVisited[i]) {
				let size = 0;
				let top = 0;
				stack[top++] = i;
				checkVisited[i] = true;

				while (top > 0) {
					const curr = stack[--top];
					size++;
					const currR = Math.floor(curr / COLS);
					const currC = curr % COLS;

					if (currR + 1 < ROWS) {
						const next = curr + COLS;
						if (flatGrid[next] === null && !checkVisited[next]) {
							checkVisited[next] = true;
							stack[top++] = next;
						}
					}
					if (currR - 1 >= 0) {
						const next = curr - COLS;
						if (flatGrid[next] === null && !checkVisited[next]) {
							checkVisited[next] = true;
							stack[top++] = next;
						}
					}
					if (currC + 1 < COLS) {
						const next = curr + 1;
						if (flatGrid[next] === null && !checkVisited[next]) {
							checkVisited[next] = true;
							stack[top++] = next;
						}
					}
					if (currC - 1 >= 0) {
						const next = curr - 1;
						if (flatGrid[next] === null && !checkVisited[next]) {
							checkVisited[next] = true;
							stack[top++] = next;
						}
					}
				}
				if (size % 5 !== 0) return false;
			}
		}
		return true;
	}

	function backtrack(startIdx) {
		if (usedPiecesMask === allPiecesMask) return true;

		let emptyIdx = -1;
		for (let i = startIdx; i < ROWS * COLS; i++) {
			if (flatGrid[i] === null) {
				emptyIdx = i;
				break;
			}
		}

		if (emptyIdx === -1) return true;

		for (const id of pieces) {
			const m = pieceMask[id];
			if ((usedPiecesMask & m) !== 0) continue;
			for (const f of placements[id][emptyIdx]) {
				if (
					flatGrid[f[0]] !== null ||
					flatGrid[f[1]] !== null ||
					flatGrid[f[2]] !== null ||
					flatGrid[f[3]] !== null ||
					flatGrid[f[4]] !== null
				)
					continue;

				flatGrid[f[0]] = id;
				flatGrid[f[1]] = id;
				flatGrid[f[2]] = id;
				flatGrid[f[3]] = id;
				flatGrid[f[4]] = id;

				usedPiecesMask |= m;

				if (checkConnectivity()) {
					if (backtrack(emptyIdx + 1)) return true;
				}

				usedPiecesMask &= ~m;
				flatGrid[f[0]] = null;
				flatGrid[f[1]] = null;
				flatGrid[f[2]] = null;
				flatGrid[f[3]] = null;
				flatGrid[f[4]] = null;
			}
		}
		return false;
	}

	if (backtrack(0)) {
		const grid = Array.from({ length: ROWS }, () => Array(COLS).fill(null));
		for (let i = 0; i < ROWS * COLS; i++) {
			grid[Math.floor(i / COLS)][i % COLS] = flatGrid[i];
		}
		return grid;
	}
	return null;
}

export function countSolutions(blockedCells, forcedCells = []) {
	const forcedGrid = Array.from({ length: ROWS }, () => Array(COLS).fill(null));
	const forcedCounts = {};
	const pieces = Object.keys(PENTOMINOES);
	for (const id of pieces) forcedCounts[id] = 0;

	for (const { r, c, id } of forcedCells) {
		forcedGrid[r][c] = id;
		forcedCounts[id]++;
	}

	let usedPiecesMask = 0;
	const pieceMask = {};
	for (let i = 0; i < pieces.length; i++) {
		pieceMask[pieces[i]] = 1 << i;
	}

	let count = 0;

	const flatGrid = new Array(ROWS * COLS).fill(null);
	for (const [r, c] of blockedCells) flatGrid[r * COLS + c] = 'X_BLOCK';

	// Precompute valid placements for each piece and starting cell
	const placements = {};
	for (const id of pieces) {
		placements[id] = Array.from({ length: ROWS * COLS }, () => []);
		for (const orientation of pieceOrientations[id]) {
			for (let r = 0; r < ROWS; r++) {
				for (let c = 0; c < COLS; c++) {
					for (let i = 0; i < orientation.length; i++) {
						const [ox, oy] = orientation[i];
						const startR = r - oy;
						const startC = c - ox;
						let staticSafe = true;
						let coveredForced = 0;
						const flatCells = [];
						for (const [dx, dy] of orientation) {
							const nr = startR + dy;
							const nc = startC + dx;
							if (
								nr < 0 ||
								nr >= ROWS ||
								nc < 0 ||
								nc >= COLS ||
								flatGrid[nr * COLS + nc] === 'X_BLOCK'
							) {
								staticSafe = false;
								break;
							}
							if (forcedGrid[nr][nc] !== null) {
								if (forcedGrid[nr][nc] !== id) {
									staticSafe = false;
									break;
								}
								coveredForced++;
							}
							flatCells.push(nr * COLS + nc);
						}
						if (staticSafe && coveredForced === forcedCounts[id]) {
							placements[id][r * COLS + c].push(flatCells);
						}
					}
				}
			}
		}
	}

	const checkVisited = new Array(ROWS * COLS).fill(false);
	const stack = new Array(ROWS * COLS).fill(0);
	const allPiecesMask = (1 << pieces.length) - 1;

	function checkConnectivity() {
		for (let i = 0; i < ROWS * COLS; i++) {
			checkVisited[i] = false;
		}

		for (let i = 0; i < ROWS * COLS; i++) {
			if (flatGrid[i] === null && !checkVisited[i]) {
				let size = 0;
				let top = 0;
				stack[top++] = i;
				checkVisited[i] = true;

				while (top > 0) {
					const curr = stack[--top];
					size++;
					const currR = Math.floor(curr / COLS);
					const currC = curr % COLS;

					if (currR + 1 < ROWS) {
						const next = curr + COLS;
						if (flatGrid[next] === null && !checkVisited[next]) {
							checkVisited[next] = true;
							stack[top++] = next;
						}
					}
					if (currR - 1 >= 0) {
						const next = curr - COLS;
						if (flatGrid[next] === null && !checkVisited[next]) {
							checkVisited[next] = true;
							stack[top++] = next;
						}
					}
					if (currC + 1 < COLS) {
						const next = curr + 1;
						if (flatGrid[next] === null && !checkVisited[next]) {
							checkVisited[next] = true;
							stack[top++] = next;
						}
					}
					if (currC - 1 >= 0) {
						const next = curr - 1;
						if (flatGrid[next] === null && !checkVisited[next]) {
							checkVisited[next] = true;
							stack[top++] = next;
						}
					}
				}
				if (size % 5 !== 0) return false;
			}
		}
		return true;
	}

	function backtrack(startIdx) {
		if (usedPiecesMask === allPiecesMask) {
			count++;
			return;
		}

		let emptyIdx = -1;
		for (let i = startIdx; i < ROWS * COLS; i++) {
			if (flatGrid[i] === null) {
				emptyIdx = i;
				break;
			}
		}

		if (emptyIdx === -1) return;

		for (const id of pieces) {
			const m = pieceMask[id];
			if ((usedPiecesMask & m) !== 0) continue;
			for (const f of placements[id][emptyIdx]) {
				if (
					flatGrid[f[0]] !== null ||
					flatGrid[f[1]] !== null ||
					flatGrid[f[2]] !== null ||
					flatGrid[f[3]] !== null ||
					flatGrid[f[4]] !== null
				)
					continue;

				flatGrid[f[0]] = id;
				flatGrid[f[1]] = id;
				flatGrid[f[2]] = id;
				flatGrid[f[3]] = id;
				flatGrid[f[4]] = id;

				usedPiecesMask |= m;

				if (checkConnectivity()) {
					backtrack(emptyIdx + 1);
				}

				usedPiecesMask &= ~m;
				flatGrid[f[0]] = null;
				flatGrid[f[1]] = null;
				flatGrid[f[2]] = null;
				flatGrid[f[3]] = null;
				flatGrid[f[4]] = null;
			}
		}
	}

	backtrack(0);
	return count;
}
