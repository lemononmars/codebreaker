import type { TheChaseQuestion, ChaserProfile, TableOffers } from './types';

export const CHASERS: ChaserProfile[] = [
	{
		id: 'beast',
		name: 'The Beast',
		title: 'มาร์ก "ราชสีห์จอมพลัง" (The Beast)',
		thaiTitle: 'จอมพลังแห่งวงการควิซ',
		avatarEmoji: '🦁',
		accentColor: '#f97316',
		accuracyRate: 0.86,
		minResponseTimeMs: 1200,
		maxResponseTimeMs: 2500,
		tagline: 'เตรียมตัวให้พร้อม เพราะข้าจะไม่ปล่อยให้เหยื่อหลุดรอดไปได้!'
	},
	{
		id: 'governess',
		name: 'The Governess',
		title: 'แอนน์ "ครูใหญ่ผู้เข้มงวด" (The Governess)',
		thaiTitle: 'ครูใหญ่ไร้ความปรานี',
		avatarEmoji: '👑',
		accentColor: '#ec4899',
		accuracyRate: 0.88,
		minResponseTimeMs: 1000,
		maxResponseTimeMs: 2200,
		tagline: 'บทเรียนวันนี้จะสอนให้เจ้ารู้ว่าใครคือผู้คุมกฎแห่งเวทีนี้!'
	},
	{
		id: 'sinnerman',
		name: 'The Sinnerman',
		title: 'พอล "อัจฉริยะสายฟ้าแลบ" (The Sinnerman)',
		thaiTitle: 'แพทย์อัจฉริยะความเร็วแสง',
		avatarEmoji: '⚡',
		accentColor: '#eab308',
		accuracyRate: 0.85,
		minResponseTimeMs: 900,
		maxResponseTimeMs: 2000,
		tagline: 'ความเร็วและความแม่นยำคือยาขนานเอกของข้า!'
	},
	{
		id: 'vixen',
		name: 'The Vixen',
		title: 'เจนนี "จิ้งจอกสาวเจ้าปัญญา" (The Vixen)',
		thaiTitle: 'จิ้งจอกเก่งรอบด้าน',
		avatarEmoji: '🦊',
		accentColor: '#a855f7',
		accuracyRate: 0.84,
		minResponseTimeMs: 1100,
		maxResponseTimeMs: 2400,
		tagline: 'อย่าให้รอยยิ้มหลอกตา เพราะสัญชาตญาณนักล่าของข้าไม่เคยพลาด!'
	},
	{
		id: 'dark_destroyer',
		name: 'The Dark Destroyer',
		title: 'ชอว์น "ทนายความผู้พิชิต" (The Dark Destroyer)',
		thaiTitle: 'ผู้ทำลายล้างผู้เยือกเย็น',
		avatarEmoji: '⚔️',
		accentColor: '#3b82f6',
		accuracyRate: 0.82,
		minResponseTimeMs: 1300,
		maxResponseTimeMs: 2700,
		tagline: 'คำตัดสินในศาลนี้มีเพียงหนึ่งเดียว... เจ้าโดนจับ!'
	},
	{
		id: 'menace',
		name: 'The Menace',
		title: 'ดารักห์ "ผู้พิทักษ์แห่งความมืด" (The Menace)',
		thaiTitle: 'นักวิจัยผู้เฉียบคม',
		avatarEmoji: '😈',
		accentColor: '#10b981',
		accuracyRate: 0.87,
		minResponseTimeMs: 1000,
		maxResponseTimeMs: 2300,
		tagline: 'ข้าศึกษาจุดอ่อนของเจ้ามาอย่างละเอียดแล้ว!'
	}
];

export function getRandomChaser(): ChaserProfile {
	return CHASERS[Math.floor(Math.random() * CHASERS.length)];
}

export function calculateOffers(cashBuilt: number): TableOffers {
	const base = cashBuilt > 0 ? cashBuilt : 10000;
	return {
		lowAmount: Math.max(1000, Math.floor(base * 0.3)),
		lowStep: 5, // 2 steps from Home (Closer to home, 5 steps from Chaser)
		midAmount: base,
		midStep: 4, // 3 steps from Home (3 steps from Chaser)
		highAmount: Math.max(base * 3, 50000),
		highStep: 3 // 4 steps from Home (2 steps from Chaser, high risk)
	};
}

export function simulateChaserAnswer(
	question: TheChaseQuestion,
	chaser: ChaserProfile
): {
	isCorrect: boolean;
	chosenIndex: 0 | 1 | 2;
	delayMs: number;
} {
	const isCorrect = Math.random() < chaser.accuracyRate;
	let chosenIndex: 0 | 1 | 2;

	if (isCorrect) {
		chosenIndex = question.correctIndex;
	} else {
		// Pick one of the other 2 choices
		const incorrectChoices = ([0, 1, 2] as const).filter((i) => i !== question.correctIndex);
		chosenIndex = incorrectChoices[Math.floor(Math.random() * incorrectChoices.length)];
	}

	const delayMs =
		chaser.minResponseTimeMs +
		Math.random() * (chaser.maxResponseTimeMs - chaser.minResponseTimeMs);

	return {
		isCorrect,
		chosenIndex,
		delayMs: Math.round(delayMs)
	};
}

export function resolveBoardStepState(
	playerStep: number,
	chaserStep: number,
	playerMoved: boolean,
	chaserMoved: boolean
): {
	nextPlayerStep: number;
	nextChaserStep: number;
	status: 'safe' | 'caught' | 'playing';
} {
	const nextPlayer = playerMoved ? playerStep + 1 : playerStep;
	const nextChaser = chaserMoved ? chaserStep + 1 : chaserStep;

	if (nextPlayer >= 7) {
		return { nextPlayerStep: 7, nextChaserStep: nextChaser, status: 'safe' };
	}

	if (nextChaser >= nextPlayer) {
		return { nextPlayerStep: nextPlayer, nextChaserStep: nextChaser, status: 'caught' };
	}

	return { nextPlayerStep: nextPlayer, nextChaserStep: nextChaser, status: 'playing' };
}
