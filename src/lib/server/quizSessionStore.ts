import { getQuizQuestions, type QuizQuestionInstance } from '$lib/data/puzzles/thaiquiz/engine';
import { getChaseQuestions } from '$lib/data/puzzles/thechase/questions';
import type { ChaseQuestion } from '$lib/data/puzzles/thechase/types';
import type { ThaiQuizCategory } from '$lib/data/puzzles/thaiquiz/types';

export interface QuizSession {
	id: string;
	type: 'thechase' | 'thaiquiz' | 'quizshow';
	mode?: string;
	category?: string;
	createdAt: number;
	currentIndex: number;
	score: number;
	streak: number;
	maxStreak: number;
	questions: Array<{
		id: number;
		question: string;
		choices: string[];
		correctIndex: number;
		explanation: string;
		category: string;
		difficulty?: string;
		acceptableAnswers?: string[];
	}>;
}

// In-memory active game session storage (auto-pruned after 2 hours)
const SESSIONS = new Map<string, QuizSession>();
const SESSION_TTL_MS = 2 * 60 * 60 * 1000;

function cleanupExpiredSessions() {
	const now = Date.now();
	for (const [id, session] of SESSIONS.entries()) {
		if (now - session.createdAt > SESSION_TTL_MS) {
			SESSIONS.delete(id);
		}
	}
}

export function createQuizSession(options: {
	type: 'thechase' | 'thaiquiz' | 'quizshow';
	count?: number;
	category?: ThaiQuizCategory | string;
	mode?: string;
	pack?: number;
}): QuizSession {
	cleanupExpiredSessions();

	const sessionId = 'qs_' + Math.random().toString(36).substring(2, 11) + '_' + Date.now().toString(36);
	const count = options.count || (options.type === 'thechase' ? 25 : 10);

	let rawQuestions: any[] = [];

	if (options.type === 'thechase') {
		rawQuestions = getChaseQuestions({
			count,
			category: options.category && options.category !== 'all' ? options.category : undefined,
			pack: options.pack
		});
	} else {
		rawQuestions = getQuizQuestions({
			count,
			category: options.category && options.category !== 'all' ? (options.category as ThaiQuizCategory) : 'all'
		});
	}

	const session: QuizSession = {
		id: sessionId,
		type: options.type,
		mode: options.mode,
		category: options.category,
		createdAt: Date.now(),
		currentIndex: 0,
		score: 0,
		streak: 0,
		maxStreak: 0,
		questions: rawQuestions.map((q) => ({
			id: q.id,
			question: q.question,
			choices: q.choices,
			correctIndex: q.correctIndex,
			explanation: q.explanation || '',
			category: q.category,
			difficulty: q.difficulty,
			acceptableAnswers: q.acceptableAnswers
		}))
	};

	SESSIONS.set(sessionId, session);
	return session;
}

export function getQuizSession(sessionId: string): QuizSession | null {
	cleanupExpiredSessions();
	return SESSIONS.get(sessionId) || null;
}

export function getStrippedQuestion(session: QuizSession, index: number) {
	if (index < 0 || index >= session.questions.length) return null;
	const q = session.questions[index];
	return {
		sessionId: session.id,
		index,
		total: session.questions.length,
		id: q.id,
		question: q.question,
		choices: q.choices,
		category: q.category,
		difficulty: q.difficulty
		// Notice: correctIndex, explanation & acceptableAnswers are STRICTLY STRIPPED
	};
}

export function verifySessionAnswer(
	sessionId: string,
	questionId: number,
	chosenIndex: number,
	timeRemainingRatio = 1.0
) {
	const session = getQuizSession(sessionId);
	if (!session) {
		return { error: 'Session expired or not found' };
	}

	const currentQ = session.questions[session.currentIndex];
	if (!currentQ || currentQ.id !== questionId) {
		// Fallback: search by questionId in session
		const found = session.questions.find((q) => q.id === questionId);
		if (!found) return { error: 'Invalid question ID for session' };
	}

	const targetQ = currentQ?.id === questionId ? currentQ : session.questions.find((q) => q.id === questionId)!;
	const isCorrect = chosenIndex === targetQ.correctIndex;

	let points = 0;
	if (isCorrect) {
		session.streak++;
		if (session.streak > session.maxStreak) session.maxStreak = session.streak;
		// Base: 100 pts + streak bonus (up to 50 pts) + time speed multiplier
		const streakBonus = Math.min(50, (session.streak - 1) * 10);
		points = Math.round((100 + streakBonus) * Math.max(0.5, timeRemainingRatio));
		session.score += points;
	} else {
		session.streak = 0;
	}

	session.currentIndex++;

	return {
		isCorrect,
		correctIndex: targetQ.correctIndex,
		explanation: targetQ.explanation,
		points,
		totalScore: session.score,
		streak: session.streak,
		maxStreak: session.maxStreak,
		isCompleted: session.currentIndex >= session.questions.length
	};
}
