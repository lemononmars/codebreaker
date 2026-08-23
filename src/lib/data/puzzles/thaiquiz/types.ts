export type ThaiQuizCategory =
	| 'geography'
	| 'language_lit'
	| 'culture_tradition'
	| 'food_cuisine'
	| 'history_heritage'
	| 'general_trivia'
	| 'science'
	| 'japanese_pop';

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
}
