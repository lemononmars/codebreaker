import type { ThaiQuizCategory, ThaiQuizItem } from '../types';
import { THE_CHASE_DATABASE } from '../../thechase/questions';

const CATEGORY_MAP: Record<string, ThaiQuizCategory | undefined> = {
	general_pop: 'general_trivia',
	geography: 'geography',
	history_royalty: 'history_heritage',
	science_tech: 'science'
};

function normalizeQuestion(question: string): string {
	return question.trim().toLocaleLowerCase('th-TH').replace(/\s+/g, ' ');
}

export function buildChaseExpansion(existingQuestions: string[]): ThaiQuizItem[] {
	const seenQuestions = new Set(existingQuestions.map(normalizeQuestion));
	const categoryCounts = new Map<ThaiQuizCategory, number>();
	const expansion: ThaiQuizItem[] = [];

	for (const source of THE_CHASE_DATABASE) {
		const category = CATEGORY_MAP[source.category];
		if (!category || (categoryCounts.get(category) || 0) >= 100) continue;

		const normalized = normalizeQuestion(source.question);
		if (seenQuestions.has(normalized)) continue;

		const correctAnswer = source.choices[source.correctIndex];
		const fourthChoiceSource = THE_CHASE_DATABASE.find((candidate) => {
			const candidateAnswer = candidate.choices[candidate.correctIndex];
			return CATEGORY_MAP[candidate.category] === category && !source.choices.includes(candidateAnswer);
		});
		const fourthChoice = fourthChoiceSource?.choices[fourthChoiceSource.correctIndex];
		if (!fourthChoice || source.choices.includes(fourthChoice)) continue;

		seenQuestions.add(normalized);
		categoryCounts.set(category, (categoryCounts.get(category) || 0) + 1);
		expansion.push({
			id: 200000 + source.id,
			category,
			question: source.question,
			choices: [...source.choices, fourthChoice],
			correctIndex: source.correctIndex,
			acceptableAnswers: [correctAnswer],
			explanation: source.explanation,
			difficulty: source.difficulty || 'normal',
			tags: ['the-chase-curated', source.category]
		});
	}

	return expansion;
}
