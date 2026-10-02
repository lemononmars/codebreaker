import { describe, expect, it } from 'vitest';
import {
	MECHANIC_DETAILS,
	getMechanicDetail,
	getAllMechanicIds,
	getAdjacentMechanics
} from './puzzleMechanicDetails';
import { PUZZLE_MECHANIC_COUNT } from './puzzleMechanics';

describe('puzzleMechanicDetails dictionary', () => {
	it('contains details for all 94 mechanics', () => {
		const ids = getAllMechanicIds();
		expect(ids.length).toBe(PUZZLE_MECHANIC_COUNT);
		expect(ids.length).toBe(94);
	});

	it('has complete information, valid vector SVG, and answers for every mechanic', () => {
		for (const [id, detail] of Object.entries(MECHANIC_DETAILS)) {
			expect(detail.id).toBe(id);
			expect(detail.englishTitle.trim()).not.toBe('');
			expect(detail.thaiTitle.trim()).not.toBe('');
			expect(detail.japaneseTitle.trim()).not.toBe('');
			expect(detail.detailedDescription.trim().length).toBeGreaterThan(20);
			expect(detail.solvingTechnique.trim().length).toBeGreaterThan(10);
			expect(detail.technicalTerms.length).toBeGreaterThanOrEqual(2);

			for (const term of detail.technicalTerms) {
				expect(term.en.trim()).not.toBe('');
				expect(term.ja.trim()).not.toBe('');
				expect(term.th.trim()).not.toBe('');
			}

			expect(detail.puzzle.svg).toContain('<svg');
			expect(detail.puzzle.svg).toContain('</svg>');
			expect(detail.puzzle.solutionSvg).toContain('<svg');
			expect(detail.puzzle.solutionSvg).toContain('</svg>');
			expect(detail.puzzle.acceptedAnswers.length).toBeGreaterThanOrEqual(1);
			expect(detail.puzzle.answerDisplay.trim()).not.toBe('');
			expect(detail.puzzle.solutionExplanation.trim().length).toBeGreaterThan(10);
		}
	});

	it('returns null for nonexistent mechanic and correct data for existing one', () => {
		expect(getMechanicDetail('non-existent-id')).toBeNull();
		const valid = getMechanicDetail('answer-the-question-mark');
		expect(valid).not.toBeNull();
		expect(valid?.englishTitle).toBe('Answer the Question Mark');
	});

	it('calculates previous and next navigation links properly', () => {
		const firstAdj = getAdjacentMechanics('answer-the-question-mark');
		expect(firstAdj.prev).toBeNull();
		expect(firstAdj.next).not.toBeNull();
		expect(firstAdj.next?.id).toBe('read-in-number-order');

		const secondAdj = getAdjacentMechanics('read-in-number-order');
		expect(secondAdj.prev?.id).toBe('answer-the-question-mark');
		expect(secondAdj.next?.id).toBe('follow-the-arrows');
	});
});
