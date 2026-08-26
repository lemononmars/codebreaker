import { describe, it, expect } from 'vitest';
import { createQuizSession, getStrippedQuestion, verifySessionAnswer } from '$lib/server/quizSessionStore';
import { signPayload, verifySignedPayload } from '$lib/server/puzzleToken';

describe('Universal JIT Delivery & Anti-Scraping Architecture', () => {
	describe('Quiz JIT Delivery (Thai Quiz & The Chase)', () => {
		it('should create a quiz session and strictly redact answers in delivered questions', () => {
			const session = createQuizSession({
				type: 'thaiquiz',
				count: 10,
				category: 'science'
			});

			expect(session.id).toBeTypeOf('string');
			expect(session.questions).toHaveLength(10);

			// Check stripped question delivered to client
			const strippedQ = getStrippedQuestion(session, 0);
			expect(strippedQ).not.toBeNull();
			expect(strippedQ?.sessionId).toBe(session.id);
			expect(strippedQ?.id).toBeTypeOf('number');
			expect(strippedQ?.question.length).toBeGreaterThan(5);
			expect(strippedQ?.choices).toHaveLength(4);

			// CRITICAL ANTI-SCRAPING / ANTI-CHEAT VERIFICATIONS:
			expect((strippedQ as any).correctIndex).toBeUndefined();
			expect((strippedQ as any).explanation).toBeUndefined();
			expect((strippedQ as any).acceptableAnswers).toBeUndefined();
		});

		it('should create The Chase session and strictly redact answers', () => {
			const session = createQuizSession({
				type: 'thechase',
				count: 15,
				category: 'geography'
			});

			expect(session.questions).toHaveLength(15);
			const strippedQ = getStrippedQuestion(session, 2);
			expect(strippedQ?.choices).toHaveLength(3);

			// Anti-cheat verification
			expect((strippedQ as any).correctIndex).toBeUndefined();
			expect((strippedQ as any).explanation).toBeUndefined();
		});

		it('should accurately verify user answers on the server side', () => {
			const session = createQuizSession({
				type: 'thaiquiz',
				count: 5
			});

			const firstQ = session.questions[0];
			const correctIdx = firstQ.correctIndex;
			const wrongIdx = (correctIdx + 1) % firstQ.choices.length;

			// Submit wrong answer
			const wrongResult = verifySessionAnswer(session.id, firstQ.id, wrongIdx);
			expect(wrongResult.isCorrect).toBe(false);
			expect(wrongResult.correctIndex).toBe(correctIdx);
			expect(wrongResult.explanation).toBe(firstQ.explanation);
			expect(wrongResult.points).toBe(0);
			expect(wrongResult.streak).toBe(0);

			// Next question: submit correct answer
			const secondQ = session.questions[1];
			const correctResult = verifySessionAnswer(session.id, secondQ.id, secondQ.correctIndex, 1.0);
			expect(correctResult.isCorrect).toBe(true);
			expect(correctResult.points).toBeGreaterThanOrEqual(100);
			expect(correctResult.streak).toBe(1);
			expect(correctResult.totalScore).toBe(correctResult.points);
		});

		it('should reject out-of-order and replayed answers without advancing or scoring', () => {
			const session = createQuizSession({ type: 'thaiquiz', count: 3 });
			const first = session.questions[0];
			const second = session.questions[1];

			const outOfOrder = verifySessionAnswer(session.id, second.id, second.correctIndex);
			expect(outOfOrder.error).toBe('Question is not current');
			expect(session.currentIndex).toBe(0);
			expect(session.score).toBe(0);

			const accepted = verifySessionAnswer(session.id, first.id, first.correctIndex);
			expect(accepted.isCorrect).toBe(true);
			const scoreAfterFirst = session.score;

			const replayed = verifySessionAnswer(session.id, first.id, first.correctIndex);
			expect(replayed.error).toBe('Question is not current');
			expect(session.currentIndex).toBe(1);
			expect(session.score).toBe(scoreAfterFirst);
		});

		it('should reject invalid choices and clamp unsafe session sizes', () => {
			const session = createQuizSession({ type: 'thaiquiz', count: 100000 });
			expect(session.questions.length).toBeLessThanOrEqual(50);

			const first = session.questions[0];
			const invalid = verifySessionAnswer(session.id, first.id, 99, 100);
			expect(invalid.error).toBe('Invalid choice index');
			expect(session.currentIndex).toBe(0);
		});

		it('should reject unsupported session types and Chase packs at runtime', () => {
			expect(() => createQuizSession({ type: 'unsupported' } as any)).toThrow('Invalid quiz session type');
			expect(() => createQuizSession({ type: 'thechase', pack: 99 })).toThrow('Invalid Chase pack');
		});
	});

	describe('Stateless Token Signing & Verifying (Crossroad / Rebus / Puzzles)', () => {
		it('should create HMAC-signed tokens and verify valid payloads', () => {
			const payload = {
				type: 'crossroad',
				answer: 'ทดสอบ',
				pre: ['การ'],
				post: ['ลอง']
			};

			const token = signPayload(payload);
			expect(token).toBeTypeOf('string');
			expect(token).toContain('.');

			const verified = verifySignedPayload(token);
			expect(verified).not.toBeNull();
			expect(verified?.type).toBe('crossroad');
			expect(verified?.answer).toBe('ทดสอบ');
		});

		it('should reject tampered or corrupted tokens', () => {
			const token = signPayload({ answer: 'ลับ' });
			const tampered = token.slice(0, -5) + 'abcde';
			expect(verifySignedPayload(tampered)).toBeNull();
			expect(verifySignedPayload('invalid_token_string')).toBeNull();
		});
	});
});
