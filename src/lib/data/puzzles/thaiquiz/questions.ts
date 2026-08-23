import type { ThaiQuizCategoryInfo, ThaiQuizItem } from './types';
import { GEOGRAPHY_QUESTIONS } from './data/geography';
import { LANGUAGE_LIT_QUESTIONS } from './data/language_lit';
import { CULTURE_TRADITION_QUESTIONS } from './data/culture_tradition';
import { FOOD_CUISINE_QUESTIONS } from './data/food_cuisine';
import { HISTORY_HERITAGE_QUESTIONS } from './data/history_heritage';
import { GENERAL_TRIVIA_QUESTIONS } from './data/general_trivia';
import { SCIENCE_QUESTIONS } from './data/science';
import { JAPANESE_POP_QUESTIONS } from './data/japanese_pop';

export const THAI_QUIZ_CATEGORIES: ThaiQuizCategoryInfo[] = [
	{
		id: 'geography',
		name: 'ภูมิศาสตร์และจังหวัด',
		englishName: 'Geography & Provinces',
		icon: '🗺️',
		description: 'คำขวัญ สถานที่สำคัญ ธรรมชาติ และภูมิศาสตร์ไทย',
		color: 'badge-primary'
	},
	{
		id: 'language_lit',
		name: 'ภาษาและวรรณคดี',
		englishName: 'Language & Literature',
		icon: '📜',
		description: 'สำนวน สุภาษิต คำราชาศัพท์ และวรรณคดีไทยคลาสสิก',
		color: 'badge-secondary'
	},
	{
		id: 'culture_tradition',
		name: 'วัฒนธรรมและประเพณี',
		englishName: 'Culture & Traditions',
		icon: '🏮',
		description: 'ประเพณี 4 ภาค วันสำคัญ และวิถีชีวิตไทยโบราณ',
		color: 'badge-accent'
	},
	{
		id: 'food_cuisine',
		name: 'อาหารและขนมไทย',
		englishName: 'Food & Cuisine',
		icon: '🍲',
		description: 'อาหารประจำถิ่น ขนมไทยโบราณ และวัตถุดิบเอกลักษณ์',
		color: 'badge-warning'
	},
	{
		id: 'history_heritage',
		name: 'ประวัติศาสตร์และบุคคล',
		englishName: 'History & Heritage',
		icon: '🏛️',
		description: 'ยุคสมัยสำคัญ บุคคลสำคัญ โบราณสถาน และมรดกโลก',
		color: 'badge-info'
	},
	{
		id: 'general_trivia',
		name: 'สัญลักษณ์และเกร็ดทั่วไป',
		englishName: 'General Trivia',
		icon: '🐘',
		description: 'สัญลักษณ์ประจำชาติ การคมนาคม และเรื่องน่ารู้รอบตัว',
		color: 'badge-success'
	},
	{
		id: 'science',
		name: 'วิทยาศาสตร์และธรรมชาติ',
		englishName: 'Science & Nature',
		icon: '🔬',
		description: 'ดาราศาสตร์ ฟิสิกส์ เคมี ชีววิทยา และสิ่งแวดล้อม',
		color: 'badge-primary'
	},
	{
		id: 'japanese_pop',
		name: 'ป๊อปคัลเจอร์ & อนิเมะญี่ปุ่น',
		englishName: 'Japanese Pop Culture',
		icon: '🎌',
		description: 'อนิเมะ มังงะ เกม เพลง และวัฒนธรรมป๊อปแดนอาทิตย์อุทัย',
		color: 'badge-secondary'
	}
];

export const THAI_QUIZ_DATABASE: ThaiQuizItem[] = [
	...GEOGRAPHY_QUESTIONS,
	...LANGUAGE_LIT_QUESTIONS,
	...CULTURE_TRADITION_QUESTIONS,
	...FOOD_CUISINE_QUESTIONS,
	...HISTORY_HERITAGE_QUESTIONS,
	...GENERAL_TRIVIA_QUESTIONS,
	...SCIENCE_QUESTIONS,
	...JAPANESE_POP_QUESTIONS
];

export {
	GEOGRAPHY_QUESTIONS,
	LANGUAGE_LIT_QUESTIONS,
	CULTURE_TRADITION_QUESTIONS,
	FOOD_CUISINE_QUESTIONS,
	HISTORY_HERITAGE_QUESTIONS,
	GENERAL_TRIVIA_QUESTIONS,
	SCIENCE_QUESTIONS,
	JAPANESE_POP_QUESTIONS
};
