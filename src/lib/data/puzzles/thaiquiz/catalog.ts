import type { ThaiQuizCategoryInfo } from './types';

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
	},
	{
		id: 'year_2026',
		name: 'ข่าวเด่นปี 2026',
		englishName: '2026',
		icon: '🗓️',
		description: 'ข่าวใหญ่ เหตุการณ์ กีฬา วัฒนธรรม และการค้นพบสำคัญในปี 2026',
		color: 'badge-accent'
	}
];
