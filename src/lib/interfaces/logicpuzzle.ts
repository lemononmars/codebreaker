export interface ILogicPuzzle {
	id: number;
	title: string;
	genre: string;
	genre_title: string;
	url: string;
	width?: number;
	height?: number;
	difficulty: 'Easy' | 'Medium' | 'Hard' | 'Expert' | string;
	author?: string;
	created_at?: string;
	description?: string;
	thumbnail?: string;
}
