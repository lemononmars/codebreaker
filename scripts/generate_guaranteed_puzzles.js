import fs from 'fs';
import path from 'path';

const DIGIT_MASKS = {
	'0': 63,  // 6 sticks
	'1': 6,   // 2 sticks
	'2': 91,  // 5 sticks
	'3': 79,  // 5 sticks
	'4': 102, // 4 sticks
	'5': 109, // 5 sticks
	'6': 125, // 6 sticks
	'7': 7,   // 3 sticks
	'8': 127, // 7 sticks
	'9': 111  // 6 sticks
};

const OPERATOR_MASKS = {
	'-': 1,  // 1 stick
	'+': 3,  // 2 sticks
	'=': 12  // 2 sticks
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

function getSticks(eq) {
	return eq.split('').reduce((sum, char) => sum + countBits(getMask(char)), 0);
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

function isEquationValid(eq) {
	const parts = eq.split('=');
	if (parts.length !== 2) return false;
	const lhs = evaluateExpr(parts[0]);
	const rhs = evaluateExpr(parts[1]);
	return lhs !== null && rhs !== null && lhs === rhs;
}

// Generate valid solution equations
function generateValidSolutions(maxVal, forceTwoDigits = false) {
	const solutions = [];
	for (let a = 0; a <= maxVal; a++) {
		for (let b = 0; b <= maxVal; b++) {
			for (const op of ['+', '-']) {
				const res = op === '+' ? a + b : a - b;
				if (res >= 0 && res <= maxVal) {
					const eq = `${a}${op}${b}=${res}`;
					if (forceTwoDigits && !/\d{2}/.test(eq)) continue;
					solutions.push(eq);
				}
			}
		}
	}
	return solutions;
}

function findPuzzlesForSolution(solEq, targetMoves) {
	const tokens = solEq.split('');
	const n = tokens.length;
	const solSticks = getSticks(solEq);
	const puzzlesFound = [];

	const candidates = tokens.map((t) => {
		if (/[0-9]/.test(t)) return ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
		if (['-', '+', '='].includes(t)) return ['-', '+', '='];
		return [t];
	});

	function search(idx, current) {
		if (idx === n) {
			const puzzleEq = current.join('');
			if (puzzleEq === solEq) return;

			// 1. Must have exact same stick count
			if (getSticks(puzzleEq) !== solSticks) return;

			// 2. Puzzle MUST be an INCORRECT equation (LHS != RHS)
			if (isEquationValid(puzzleEq)) return;

			// 3. Measure exact stick moves
			let removed = 0, added = 0;
			for (let i = 0; i < n; i++) {
				const sM = getMask(tokens[i]);
				const pM = getMask(current[i]);
				removed += countBits(pM & ~sM);
				added += countBits(sM & ~pM);
			}

			if (removed === added && removed === targetMoves) {
				puzzlesFound.push(puzzleEq);
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
	return puzzlesFound;
}

function buildCategoryDataset(maxVal, forceTwoDigits, targetMoves, limit = 10) {
	const solutions = generateValidSolutions(maxVal, forceTwoDigits);
	const dataset = [];

	for (const sol of solutions) {
		const puzzles = findPuzzlesForSolution(sol, targetMoves);
		for (const p of puzzles) {
			const existing = dataset.find(item => item.equation === p);
			if (existing) {
				if (!existing.solutions.includes(sol)) {
					existing.solutions.push(sol);
				}
			} else {
				dataset.push({
					equation: p,
					moves: targetMoves,
					solutions: [sol]
				});
			}
			if (dataset.length >= limit) break;
		}
		if (dataset.length >= limit) break;
	}

	return dataset;
}

console.log('Generating GUARANTEED 100% Stick-Conserved Puzzles...');

const data1_0_19 = buildCategoryDataset(19, false, 1, 10);
const data1_2deg = buildCategoryDataset(99, true, 1, 10);
const data2_0_19 = buildCategoryDataset(19, false, 2, 10);
const data2_2deg = buildCategoryDataset(99, true, 2, 10);

const puzzlesData = {
	'1_stick_0_19': data1_0_19,
	'1_stick_2_digits': data1_2deg,
	'2_sticks_0_19': data2_0_19,
	'2_sticks_2_digits': data2_2deg
};

const outputPath = path.resolve('src/lib/mathsticks/puzzles.json');
fs.writeFileSync(outputPath, JSON.stringify(puzzlesData, null, 2));

console.log(`\nSUCCESS! Saved strictly verified puzzles to ${outputPath}`);
console.log(`- 1 Stick (0-19): ${data1_0_19.length} puzzles`);
console.log(`- 1 Stick (2 Digits): ${data1_2deg.length} puzzles`);
console.log(`- 2 Sticks (0-19): ${data2_0_19.length} puzzles`);
console.log(`- 2 Sticks (2 Digits): ${data2_2deg.length} puzzles`);
