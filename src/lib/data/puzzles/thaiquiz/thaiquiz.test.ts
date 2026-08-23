import { describe, it, expect } from 'vitest';
import { THAI_QUIZ_DATABASE, THAI_QUIZ_CATEGORIES } from './questions';
import { getQuizQuestions, calculateQuestionScore, getDailySeed, validateQuizShowAnswer } from './engine';
import { preprocessThaiTTSText } from '../../../utils/tts';

describe('Thai Quiz Dataset & Engine', () => {
	it('should have 4000 questions with 4 choices, rich funnel clues, and acceptableAnswers', () => {
		expect(THAI_QUIZ_DATABASE.length).toBe(4000);

		for (const q of THAI_QUIZ_DATABASE) {
			expect(q.id).toBeTypeOf('number');
			// Rephrased funnel questions are descriptive (> 35 characters)
			expect(q.question.trim().length).toBeGreaterThan(35);
			expect(q.choices).toHaveLength(4);
			expect(q.correctIndex).toBeGreaterThanOrEqual(0);
			expect(q.correctIndex).toBeLessThanOrEqual(3);
			expect(q.explanation.trim().length).toBeGreaterThan(5);

			// Must have explicit acceptable answers list
			expect(Array.isArray(q.acceptableAnswers)).toBe(true);
			expect(q.acceptableAnswers.length).toBeGreaterThan(0);

			// All choices must be non-empty and unique
			const uniqueChoices = new Set(q.choices);
			expect(uniqueChoices.size).toBe(4);
		}
	});

	it('should cover all 8 Thai Quiz categories with 500 questions each', () => {
		expect(THAI_QUIZ_CATEGORIES).toHaveLength(8);
		for (const cat of THAI_QUIZ_CATEGORIES) {
			const items = THAI_QUIZ_DATABASE.filter((q) => q.category === cat.id);
			expect(items).toHaveLength(500);
		}
	});

	it('should generate shuffled questions and preserve correct choice text', () => {
		const questions = getQuizQuestions({ count: 5, shuffleChoices: true });
		expect(questions).toHaveLength(5);

		for (const q of questions) {
			const original = THAI_QUIZ_DATABASE.find((item) => item.id === q.id)!;
			const correctText = original.choices[original.correctIndex];
			expect(q.choices[q.correctIndex]).toBe(correctText);
		}
	});

	it('should deterministically generate questions with the same seed', () => {
		const seed = 20260823;
		const run1 = getQuizQuestions({ count: 5, seed });
		const run2 = getQuizQuestions({ count: 5, seed });

		expect(run1.map((q) => q.id)).toEqual(run2.map((q) => q.id));
		expect(run1.map((q) => q.choices)).toEqual(run2.map((q) => q.choices));
	});

	it('should correctly calculate streak and time bonuses', () => {
		const zero = calculateQuestionScore(false, 0);
		expect(zero.points).toBe(0);

		const base = calculateQuestionScore(true, 0, 0);
		expect(base.points).toBe(100);

		const withStreakAndTime = calculateQuestionScore(true, 3, 5);
		expect(withStreakAndTime.points).toBeGreaterThan(145);
		expect(withStreakAndTime.bonus).toBe(25);
	});

	it('should accurately validate quiz show answers without false positives', () => {
		const target = 'ดอกราชพฤกษ์ (คูน)';
		const acceptable = ['ราชพฤกษ์', 'ดอกราชพฤกษ์', 'คูน', 'ดอกคูน', 'ต้นคูน', 'ต้นราชพฤกษ์'];

		// False matches that must NOT pass
		expect(validateQuizShowAnswer('ชบา', target, acceptable)).toBe(false);
		expect(validateQuizShowAnswer('ดอกชบา', target, acceptable)).toBe(false);
		expect(validateQuizShowAnswer('ดอกกุหลาบ', target, acceptable)).toBe(false);
		expect(validateQuizShowAnswer('ดอกมะลิ', target, acceptable)).toBe(false);
		expect(validateQuizShowAnswer('ดอกไม้', target, acceptable)).toBe(false);
		expect(validateQuizShowAnswer('สัญลักษณ์', target, acceptable)).toBe(false);

		// Valid matches that MUST pass
		expect(validateQuizShowAnswer('ดอกราชพฤกษ์', target, acceptable)).toBe(true);
		expect(validateQuizShowAnswer('ราชพฤกษ์', target, acceptable)).toBe(true);
		expect(validateQuizShowAnswer('คูน', target, acceptable)).toBe(true);
		expect(validateQuizShowAnswer('ดอกคูน', target, acceptable)).toBe(true);
		expect(validateQuizShowAnswer('ต้นคูน', target, acceptable)).toBe(true);

		// Province and person aliases
		expect(validateQuizShowAnswer('โคราช', 'นครราชสีมา', ['นครราชสีมา', 'โคราช'])).toBe(true);
		expect(validateQuizShowAnswer('นครราชสีมา', 'นครราชสีมา', ['นครราชสีมา', 'โคราช'])).toBe(true);
		expect(validateQuizShowAnswer('พระนเรศวร', 'สมเด็จพระนเรศวรมหาราช', ['พระนเรศวร'])).toBe(true);
		expect(validateQuizShowAnswer('มารีกีมาร์', 'ท้าวทองกีบม้า (มารี กีมาร์)', ['ท้าวทองกีบม้า', 'มารีกีมาร์'])).toBe(true);

		// Typo tolerance (1-2 letters off)
		expect(validateQuizShowAnswer('โดราเอมอล', 'โดราเอมอน (Doraemon)', ['โดราเอมอน', 'Doraemon'])).toBe(true);
		expect(validateQuizShowAnswer('โกโจ ซาโตรู', 'โกโจ ซาโตรุ (Gojo Satoru)', ['โกโจ ซาโตรุ', 'Gojo'])).toBe(true);
		expect(validateQuizShowAnswer('พระนเรสวน', 'สมเด็จพระนเรศวรมหาราช', ['พระนเรศวร'])).toBe(true);
		expect(validateQuizShowAnswer('สุราษธานี', 'สุราษฎร์ธานี', ['สุราษฎร์ธานี'])).toBe(true);
		expect(validateQuizShowAnswer('pikachuu', 'พิคาชู (Pikachu)', ['พิคาชู', 'Pikachu'])).toBe(true);
	});

	it('should accurately preprocess English words and acronyms for Thai TTS reading', () => {
		expect(preprocessThaiTTSText('สารพันธุกรรม DNA และ RNA')).toBe('สารพันธุกรรม ดีเอ็นเอ และ อาร์เอ็นเอ');
		expect(preprocessThaiTTSText('มังงะ One Piece และ Doraemon')).toBe('มังงะ วันพีซ และ โดราเอมอน');
		expect(preprocessThaiTTSText('สมการ E = mc²')).toBe('สมการ อี เท่ากับ เอ็มซี กำลังสอง');
		expect(preprocessThaiTTSText('สถานีอวกาศ ISS')).toBe('สถานีอวกาศ ไอเอสเอส');
	});
});
