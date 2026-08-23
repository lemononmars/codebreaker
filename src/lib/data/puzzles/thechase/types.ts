export interface TheChaseQuestion {
	id: number;
	question: string;
	choices: [string, string, string];
	correctIndex: 0 | 1 | 2;
	explanation: string;
	category: string;
	difficulty?: 'easy' | 'normal' | 'hard';
}

export interface ChaserProfile {
	id: string;
	name: string;
	title: string;
	thaiTitle: string;
	avatarEmoji: string;
	accentColor: string;
	accuracyRate: number; // 0.70 to 0.90
	minResponseTimeMs: number;
	maxResponseTimeMs: number;
	tagline: string;
}

export type ChaseGamePhase =
	| 'intro'
	| 'cash_builder_countdown'
	| 'cash_builder_playing'
	| 'cash_builder_summary'
	| 'offer_selection'
	| 'board_chase'
	| 'board_result'
	| 'final_chase_player_prep'
	| 'final_chase_player_playing'
	| 'final_chase_chaser_playing'
	| 'final_chase_pushback'
	| 'game_over'
	| 'victory';

export interface ChaseBoardStep {
	stepIndex: number; // 0 (Top / Chaser Start) to 7 (Home / Safe)
	label: string;
}

export interface TableOffers {
	lowAmount: number;
	lowStep: number; // usually 5 (closer to home)
	midAmount: number;
	midStep: number; // usually 4 (3 steps from Chaser)
	highAmount: number;
	highStep: number; // usually 3 (2 steps from Chaser)
}
