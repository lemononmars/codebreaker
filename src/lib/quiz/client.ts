export interface DeliveredQuizQuestion {
	sessionId: string;
	index: number;
	total: number;
	id: number;
	question: string;
	choices: string[];
	category: string;
	difficulty?: string;
}

export interface QuizAnswerResult {
	isCorrect: boolean;
	correctIndex: number;
	explanation: string;
	points: number;
	totalScore: number;
	streak: number;
	maxStreak: number;
	isCompleted: boolean;
	nextQuestion: DeliveredQuizQuestion | null;
	chosenIndex?: number;
}

async function jsonRequest<T>(url: string, init?: RequestInit): Promise<T> {
	const response = await fetch(url, init);
	const body = await response.json();
	if (!response.ok) throw new Error(body.error || `Request failed (${response.status})`);
	return body as T;
}

export async function startQuizSession(options: {
	type: 'thaiquiz' | 'quizshow' | 'thechase';
	count: number;
	category?: string;
	mode?: string;
	pack?: number;
	excludeIds?: number[];
}): Promise<{ sessionId: string; total: number; firstQuestion: DeliveredQuizQuestion }> {
	return jsonRequest('/api/quiz/session', {
		method: 'POST',
		headers: { 'content-type': 'application/json' },
		body: JSON.stringify(options)
	});
}

export async function answerQuizQuestion(input: {
	sessionId: string;
	questionId: number;
	choiceIndex?: number;
	textAnswer?: string;
	skip?: boolean;
	simulateAccuracy?: number;
	timeRemainingRatio?: number;
}): Promise<QuizAnswerResult> {
	return jsonRequest('/api/quiz/verify', {
		method: 'POST',
		headers: { 'content-type': 'application/json' },
		body: JSON.stringify(input)
	});
}

export async function rateQuizQuestion(input: {
	questionKey: string;
	category: string;
	rating: -1 | 1;
	reason?: string;
}): Promise<void> {
	await jsonRequest('/api/quiz/feedback', {
		method: 'POST',
		headers: { 'content-type': 'application/json' },
		body: JSON.stringify(input)
	});
}
