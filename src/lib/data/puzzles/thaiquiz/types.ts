export type ThaiQuizCategory =
	| 'geography'
	| 'language_lit'
	| 'culture_tradition'
	| 'food_cuisine'
	| 'history_heritage'
	| 'general_trivia'
	| 'science'
	| 'japanese_pop'
	| 'year_2026';

export interface ThaiQuizCategoryInfo {
	id: ThaiQuizCategory;
	name: string;
	englishName: string;
	icon: string;
	description: string;
	color: string;
}

export interface ThaiQuizItem {
	id: number;
	category: ThaiQuizCategory;
	question: string;
	choices: [string, string, string, string];
	correctIndex: 0 | 1 | 2 | 3;
	acceptableAnswers: string[];
	explanation: string;
	difficulty: 'easy' | 'normal' | 'hard';
	tags: string[];
	provenance?: QuestionProvenance;
	blueprint?: QuestionBlueprint;
	quality?: QuestionQualityMetadata;
}

export interface QuestionProvenance {
	sourceUrl: string;
	sourceTitle: string;
	factCheckedAt: string;
	reviewAfter?: string;
}

export interface QuestionBlueprint {
	skill: 'recall' | 'understand' | 'apply' | 'compare';
	knowledgePoint: string;
	answerForm: 'person' | 'place' | 'date' | 'term' | 'number' | 'work' | 'other';
}

export interface QuestionQualityMetadata {
	reviewStatus: 'draft' | 'needs_review' | 'approved' | 'retired';
	reviewedAt?: string;
	reviewerNote?: string;
}
