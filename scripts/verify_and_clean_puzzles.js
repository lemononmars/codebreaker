import fs from 'fs';
import path from 'path';
import { solveMathsticks, getTotalEquationSticks } from '../src/lib/mathsticks/solver.js';

const puzzlesPath = path.resolve('src/lib/mathsticks/puzzles.json');
const puzzles = JSON.parse(fs.readFileSync(puzzlesPath, 'utf-8'));

let totalFixed = 0;

for (const [catName, catList] of Object.entries(puzzles)) {
	console.log(`Verifying category: ${catName}...`);
	for (const p of catList) {
		const origEq = p.equation;
		const reqMoves = p.moves;
		const initialSticks = getTotalEquationSticks(origEq);

		// Run solver to find all mathematically valid and stick-conserved solutions
		const solverSols = solveMathsticks(origEq, reqMoves);

		// Filter solutions that strictly match required moves & stick count
		const verifiedSols = solverSols
			.filter((s) => s.moves === reqMoves && getTotalEquationSticks(s.equation) === initialSticks)
			.map((s) => s.equation);

		console.log(`  Puzzle: "${origEq}" (${initialSticks} sticks) -> Verified Solutions:`, verifiedSols);
		p.solutions = verifiedSols;
		totalFixed++;
	}
}

fs.writeFileSync(puzzlesPath, JSON.stringify(puzzles, null, 2));
console.log(`\nVerification complete! Cleaned all solutions in ${puzzlesPath}`);
