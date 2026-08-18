import { describe, it, expect } from 'vitest';
import { submitTBSAnswer, solutions, round1Puzzles, round2Puzzles } from './tbs2021';

describe('TBS 2021 Puzzles Data & Checker', () => {
	it('validates Round 1 solutions properly', () => {
		expect(submitTBSAnswer(0, 0, 'reads').isCorrect).toBe(true);
		expect(submitTBSAnswer(0, 1, 'UNDER').isCorrect).toBe(true);
		expect(submitTBSAnswer(0, 2, ' cells ').isCorrect).toBe(true);
		expect(submitTBSAnswer(0, 3, 'taken').isCorrect).toBe(true);
		expect(submitTBSAnswer(0, 4, 'twice').isCorrect).toBe(true);

		const finalR1 = submitTBSAnswer(0, 5, 'enter');
		expect(finalR1.isCorrect).toBe(true);
		expect(finalR1.isFinished).toBe(true);
	});

	it('validates Round 2 solutions properly', () => {
		expect(submitTBSAnswer(1, 0, 'skip').isCorrect).toBe(true);
		expect(submitTBSAnswer(1, 1, 'roll').isCorrect).toBe(true);
		expect(submitTBSAnswer(1, 2, 'draw').isCorrect).toBe(true);
		expect(submitTBSAnswer(1, 3, 'pick').isCorrect).toBe(true);

		const finalR2 = submitTBSAnswer(1, 4, 'prize');
		expect(finalR2.isCorrect).toBe(true);
		expect(finalR2.isFinished).toBe(true);
	});

	it('returns keepGoing hints for partial solutions', () => {
		const keepRes = submitTBSAnswer(1, 3, 'abc');
		expect(keepRes.isCorrect).toBe(false);
		expect(keepRes.message).toContain('ใช่แล้ว เพลงนี้หละ');
	});

	it('identifies off-by-one character mistakes', () => {
		const offByOne = submitTBSAnswer(0, 0, 'READY'); // READS vs READY (differs by 1 char)
		expect(offByOne.isCorrect).toBe(false);
		expect(offByOne.message).toContain('ผิดตัวอักษรเดียว');
	});

	it('loads puzzle definitions without error', () => {
		expect(round1Puzzles.length).toBe(7);
		expect(round2Puzzles.length).toBe(5);
		expect(solutions[0].length).toBe(6);
		expect(solutions[1].length).toBe(5);
	});
});
