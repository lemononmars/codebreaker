import { solveMathsticks } from '../src/lib/mathsticks/solver.js';

const inputEquation = process.argv[2] || '6 + 4 = 4';
console.log(`Solving Mathstick equation: "${inputEquation}"...\n`);

const solutions = solveMathsticks(inputEquation, 2);

if (solutions.length === 0) {
	console.log('No valid 1 or 2 stick solutions found.');
} else {
	console.log(`Found ${solutions.length} solution(s):`);
	solutions.forEach((s, idx) => {
		console.log(`  ${idx + 1}. ${s.equation} (${s.details})`);
	});
}
