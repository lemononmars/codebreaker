export type BattlePuzzleType =
	| 'crossroad'
	| 'spellingbee'
	| 'blanks'
	| 'spellingquiz'
	| 'boggle'
	| 'wordladder'
	| 'thaiquiz';

export type BattleThemeId =
	| 'general'
	| 'animals'
	| 'food'
	| 'culture'
	| 'plants'
	| 'places'
	| 'science';

export interface BattleThemeInfo {
	id: BattleThemeId;
	name: string;
	englishName: string;
	icon: string;
	description: string;
	color: string;
}

export type BattleGameMode = 'race' | 'quiz';

export interface BattleGameConfig {
	puzzleType: BattlePuzzleType;
	mode: BattleGameMode;
	theme: BattleThemeId;
	difficulty: 'easy' | 'normal' | 'hard';
	rounds: number; // e.g. 1, 3, 5
	timePerRound: number; // in seconds, e.g. 30, 45, 60, 90
	roomName: string;
	isPublic: boolean;
	maxPlayers: number;
}

export interface BattlePlayer {
	id: string; // unique id (UUID or random string)
	name: string;
	avatar: string;
	color: string;
	isHost: boolean;
	isReady: boolean;
	isSpectator?: boolean;
	score: number;
	currentRoundScore: number;
	solvedCount: number;
	progress: number; // 0 to 100 percentage
	lastSeen: number;
}

export type RoomStatus = 0 | 1 | 2; // 0: Waiting / Lobby, 1: Playing / Battle, 2: Finished / Podium

interface BattleRoundBase<TType extends BattlePuzzleType, TPayload> {
	roundIndex: number;
	puzzleType: TType;
	theme: BattleThemeId;
	title: string;
	payload: TPayload;
}

export interface ThaiLetterBlock {
	base: string;
	upper: string;
	lower: string;
}

export type CrossroadRound = BattleRoundBase<'crossroad', {
	targetWord: string;
	topClue: string;
	bottomClue: string;
	leftClue: string;
	rightClue: string;
	allPre: string[];
	allPost: string[];
}>;

export type SpellingBeeRound = BattleRoundBase<'spellingbee', {
	id: number;
	word: string;
	letters: string[];
	solutions: string[];
	totalWords: number;
}>;

export type BlanksRound = BattleRoundBase<'blanks', {
	questions: Array<{ word: string; blocks: ThaiLetterBlock[]; targetChar: string }>;
	totalQuestions: number;
}>;

export type SpellingQuizRound = BattleRoundBase<'spellingquiz', {
	questions: Array<{
		correct: string;
		incorrect: string;
		leftOption: string;
		rightOption: string;
		leftIsCorrect: boolean;
		explanation: string;
	}>;
	totalQuestions: number;
}>;

export type BoggleRound = BattleRoundBase<'boggle', { grid: string[][]; seedWords: string[] }>;
export type WordLadderRound = BattleRoundBase<'wordladder', {
	start: string;
	end: string;
	minPath: string[];
	slotSize: number;
}>;

export interface BattleQuizQuestion {
	id: number;
	category: string;
	question: string;
	choices: string[];
	correctIndex: number;
	explanation: string;
}

export type ThaiQuizRound = BattleRoundBase<'thaiquiz', {
	questions: BattleQuizQuestion[];
	totalQuestions: number;
}>;

export type BattleRoundData =
	| CrossroadRound
	| SpellingBeeRound
	| BlanksRound
	| SpellingQuizRound
	| BoggleRound
	| WordLadderRound
	| ThaiQuizRound;

export interface BattleRoomMeta {
	config: BattleGameConfig;
	rounds: BattleRoundData[];
	currentRound: number;
	currentQuestionIndex?: number;
	roundStartTime: number | null;
	roundEndTime: number | null;
	revision?: number;
	actionReceipts?: Record<string, { playerId: string; timestamp: number }>;
	sharedFoundWords?: Record<string, { playerId: string; playerName: string; avatar: string }>;
	quizClaims?: Record<string, { playerId: string; playerName: string; avatar: string; score: number }>;
	lastAction?: {
		type: string;
		playerId: string;
		playerName: string;
		detail?: string;
		timestamp: number;
	};
}

export interface SupabaseRoomRow {
	room_id: string;
	game_title: string; // Serialized JSON of BattleRoomMeta
	host_user_id: string;
	players: BattlePlayer[];
	status: RoomStatus;
	is_public: boolean;
	created_at: string;
}

export interface PlayerLocalSession {
	id: string;
	name: string;
	avatar: string;
}
