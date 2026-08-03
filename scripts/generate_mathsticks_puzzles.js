import fs from 'fs';
import path from 'path';

const DIGIT_MASKS = {
	'0': 63, '1': 6, '2': 91, '3': 79, '4': 102,
	'5': 109, '6': 125, '7': 7, '8': 127, '9': 111
};

const OPERATOR_MASKS = {
	'-': 1, '+': 3, '=': 12
};

function countBits(n) {
	let c = 0;
	while (n > 0) { c += n & 1; n >>= 1; }
	return c;
}

function getMask(t) {
	if (DIGIT_MASKS[t] !== undefined) return DIGIT_MASKS[t];
	if (OPERATOR_MASKS[t] !== undefined) return OPERATOR_MASKS[t];
	return 0;
}

function evaluateExpr(expr) {
	try {
		const clean = expr.replace(/\s+/g, '');
		if (!/^[0-9\+\-\*\/]+$/.test(clean)) return null;
		const result = Function(`"use strict"; return (${clean})`)();
		return typeof result === 'number' && !isNaN(result) && isFinite(result) ? result : null;
	} catch {
		return null;
	}
}

function solveEquation(equation, maxMoves = 2) {
	const tokens = equation.split('');
	const n = tokens.length;
	const solutions = [];
	const visited = new Set();

	const candidates = tokens.map((t) => {
		if (/[0-9]/.test(t)) return ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
		if (['-', '+', '='].includes(t)) return ['-', '+', '='];
		return [t];
	});

	function search(idx, current) {
		if (idx === n) {
			const cand = current.join('');
			if (cand === equation || visited.has(cand)) return;

			const parts = cand.split('=');
			if (parts.length !== 2) return;

			const lhs = evaluateExpr(parts[0]);
			const rhs = evaluateExpr(parts[1]);
			if (lhs === null || rhs === null || lhs !== rhs) return;

			let removed = 0, added = 0;
			for (let i = 0; i < n; i++) {
				const oM = getMask(tokens[i]);
				const cM = getMask(current[i]);
				removed += countBits(oM & ~cM);
				added += countBits(cM & ~oM);
			}

			if (removed === added && removed >= 1 && removed <= maxMoves) {
				visited.add(cand);
				solutions.push({ equation: cand, moves: removed });
			}
			return;
		}

		for (const c of candidates[idx]) {
			current.push(c);
			search(idx + 1, current);
			current.pop();
		}
	}

	search(0, []);
	return solutions;
}

// Generate valid base equations
function generateValidEquations(maxVal) {
	const valid = [];
	for (let a = 0; a <= maxVal; a++) {
		for (let b = 0; b <= maxVal; b++) {
			for (const op of ['+', '-']) {
				const res = op === '+' ? a + b : a - b;
				if (res >= 0 && res <= maxVal) {
					valid.push(`${a}${op}${b}=${res}`);
				}
			}
		}
	}
	return valid;
}

console.log('Generating Mathstick puzzles...');

const cat1_0_19 = [];
const cat1_2deg = [];
const cat2_0_19 = [];
const cat2_2deg = [];

// Base equations 0-19
const base0_19 = generateValidEquations(19);
// Base equations 0-99
const base0_99 = generateValidEquations(99);

function addPuzzleToCat(puzzleEq, cat, solutionList, movesNeeded) {
	const existing = cat.find(p => p.equation === puzzleEq);
	if (!existing) {
		cat.push({
			equation: puzzleEq,
			moves: movesNeeded,
			solutions: solutionList.map(s => s.equation)
		});
	}
}

// For 0-19 range:
for (const eq of base0_19) {
	const sols = solveEquation(eq, 2);
	// Every solution `s` can serve as a puzzle for `eq`
	for (const s of sols) {
		if (s.moves === 1 && cat1_0_19.length < 50) {
			addPuzzleToCat(s.equation, cat1_0_19, [{ equation: eq, moves: 1 }], 1);
		} else if (s.moves === 2 && cat2_0_19.length < 50) {
			addPuzzleToCat(s.equation, cat2_0_19, [{ equation: eq, moves: 2 }], 2);
		}
	}
	if (cat1_0_19.length >= 40 && cat2_0_19.length >= 40) break;
}

// For 2 digits (0-99) range:
for (const eq of base0_99) {
	if (!/\d{2}/.test(eq)) continue; // Must contain at least one 2-digit number
	const sols = solveEquation(eq, 2);
	for (const s of sols) {
		if (s.moves === 1 && cat1_2deg.length < 50) {
			addPuzzleToCat(s.equation, cat1_2deg, [{ equation: eq, moves: 1 }], 1);
		} else if (s.moves === 2 && cat2_2deg.length < 50) {
			addPuzzleToCat(s.equation, cat2_2deg, [{ equation: eq, moves: 2 }], 2);
		}
	}
	if (cat1_2deg.length >= 40 && cat2_2deg.length >= 40) break;
}

const puzzlesData = {
	'1_stick_0_19': cat1_0_19,
	'1_stick_2_digits': cat1_2deg,
	'2_sticks_0_19': cat2_0_19,
	'2_sticks_2_digits': cat2_2deg
};

const outputPath = path.resolve('src/lib/mathsticks/puzzles.json');
fs.writeFileSync(outputPath, JSON.stringify(puzzlesData, null, 2));

console.log(`Puzzles generated successfully! Saved to ${outputPath}`);
console.log(`- 1 Stick (0-19): ${cat1_0_19.length}`);
console.log(`- 1 Stick (2 Digits): ${cat1_2deg.length}`);
console.log(`- 2 Sticks (0-19): ${cat2_0_19.length}`);
console.log(`- 2 Sticks (2 Digits): ${cat2_2deg.length}`);
