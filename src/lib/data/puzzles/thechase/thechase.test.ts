import { describe, it, expect } from 'vitest';
import { THE_CHASE_DATABASE, getChaseQuestions } from './questions';
import { CHASERS, calculateOffers, simulateChaserAnswer, resolveBoardStepState } from './engine';

describe('The Chase Game Mode & Dataset', () => {
	it('should have 5000 questions in total with unique IDs from 1001 to 6000', () => {
		expect(THE_CHASE_DATABASE.length).toBe(5000);

		const idSet = new Set<number>();
		for (const q of THE_CHASE_DATABASE) {
			expect(q.id).toBeGreaterThanOrEqual(1001);
			expect(q.id).toBeLessThanOrEqual(6000);
			expect(idSet.has(q.id)).toBe(false);
			idSet.add(q.id);

			expect(q.question.trim().length).toBeGreaterThan(10);
			expect(q.choices).toHaveLength(3);
			expect(new Set(q.choices).size).toBe(3); // All 3 choices must be unique
			expect(q.correctIndex).toBeGreaterThanOrEqual(0);
			expect(q.correctIndex).toBeLessThanOrEqual(2);
			expect(q.explanation.trim().length).toBeGreaterThan(5);
			expect(q.category.trim().length).toBeGreaterThan(0);
		}
	});

	it('should sample random questions properly with filters', () => {
		const sampled = getChaseQuestions({ count: 15 });
		expect(sampled).toHaveLength(15);

		const geoQuestions = getChaseQuestions({ count: 20, category: 'geography' });
		for (const q of geoQuestions) {
			expect(q.category).toBe('geography');
		}

		const excludeId = sampled[0].id;
		const withoutExcluded = getChaseQuestions({ count: 10, excludeIds: [excludeId] });
		expect(withoutExcluded.some((q) => q.id === excludeId)).toBe(false);
	});

	it('should provide valid Chaser profiles with balanced stats', () => {
		expect(CHASERS.length).toBeGreaterThanOrEqual(5);

		for (const chaser of CHASERS) {
			expect(chaser.id).toBeTypeOf('string');
			expect(chaser.name).toBeTypeOf('string');
			expect(chaser.accuracyRate).toBeGreaterThanOrEqual(0.75);
			expect(chaser.accuracyRate).toBeLessThanOrEqual(0.95);
			expect(chaser.minResponseTimeMs).toBeGreaterThan(500);
			expect(chaser.maxResponseTimeMs).toBeGreaterThan(chaser.minResponseTimeMs);
		}
	});

	it('should compute valid table offers for Low, Middle, and High stakes', () => {
		const offers = calculateOffers(30000);
		expect(offers.midAmount).toBe(30000);
		expect(offers.midStep).toBe(4);
		expect(offers.lowAmount).toBeLessThan(offers.midAmount);
		expect(offers.lowStep).toBe(5); // Closer to home
		expect(offers.highAmount).toBeGreaterThan(offers.midAmount);
		expect(offers.highStep).toBe(3); // Closer to chaser
	});

	it('should simulate Chaser answers within bounds', () => {
		const q = THE_CHASE_DATABASE[0];
		const chaser = CHASERS[0];
		const result = simulateChaserAnswer(q, chaser);

		expect([0, 1, 2]).toContain(result.chosenIndex);
		expect(result.delayMs).toBeGreaterThanOrEqual(chaser.minResponseTimeMs - 10);
		expect(result.delayMs).toBeLessThanOrEqual(chaser.maxResponseTimeMs + 10);
		if (result.isCorrect) {
			expect(result.chosenIndex).toBe(q.correctIndex);
		}
	});

	it('should properly resolve 7-step board game states', () => {
		// Player reaches home
		const safeResult = resolveBoardStepState(6, 2, true, true);
		expect(safeResult.status).toBe('safe');
		expect(safeResult.nextPlayerStep).toBe(7);

		// Chaser catches player
		const caughtResult = resolveBoardStepState(4, 3, false, true);
		expect(caughtResult.status).toBe('caught');
		expect(caughtResult.nextChaserStep).toBe(4);
		expect(caughtResult.nextPlayerStep).toBe(4);

		// Game continues
		const continueResult = resolveBoardStepState(4, 1, true, true);
		expect(continueResult.status).toBe('playing');
		expect(continueResult.nextPlayerStep).toBe(5);
		expect(continueResult.nextChaserStep).toBe(2);
	});
});
