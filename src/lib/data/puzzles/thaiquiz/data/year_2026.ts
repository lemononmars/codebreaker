import type { QuestionBlueprint, ThaiQuizItem } from '../types';

const SOURCES = {
	oscars: ['https://www.oscars.org/oscars/ceremonies/2026', 'The 98th Academy Awards | 2026'],
	grammys: [
		'https://www.grammy.com/news/2026-grammys-nominations-full-winners-nominees-list/',
		'2026 Grammys: Full Winners & Nominees'
	],
	fifa: [
		'https://inside.fifa.com/organisation/news/spain-crowned-world-cup-2026-champions-new-york-new-jersey',
		'Spain crowned FIFA World Cup 2026 champions'
	],
	nba: ['https://www.nba.com/news/season-review-2025-26', 'NBA 2025-26 Season Review'],
	nfl: ['https://www.nfl.com/super-bowl', 'Super Bowl LX'],
	wbc: [
		'https://www.mlb.com/world-baseball-classic/news/venezuela-wins-world-baseball-classic-2026',
		'Venezuela wins 2026 World Baseball Classic'
	],
	tennis: [
		'https://www.atptour.com/en/news/grand-slams-tournaments-records-stats',
		'2026 Grand Slam champions'
	],
	wimbledon: ['https://www.atptour.com/en/news/wimbledon-2026-results', 'Wimbledon 2026 results'],
	unesco: [
		'https://www.unesco.org/en/articles/unesco-world-heritage-25-new-sites-inscribed',
		'UNESCO World Heritage: 25 new sites inscribed'
	],
	sarnath: [
		'https://www.unesco.org/en/articles/ancient-buddhist-site-sarnath-inscribed-unesco-world-heritage-list',
		'Sarnath inscribed on the World Heritage List'
	],
	roman: [
		'https://science.nasa.gov/mission/roman-space-telescope/',
		'Nancy Grace Roman Space Telescope'
	],
	romanTech: [
		'https://science.nasa.gov/mission/roman-space-telescope/observatory-technical/',
		'Roman Observatory Technical Information'
	],
	lhs1140: [
		'https://www.nature.com/articles/d41586-026-02200-5',
		'A rocky exoplanet with an atmosphere'
	],
	exosatellite: [
		'https://www.nature.com/articles/s41586-026-10751-w',
		'Planetary-mass exosatellite detected'
	],
	exoplanets: [
		'https://warwick.ac.uk/news/pressreleases/ai-approach-uncovers-dozens-of-hidden-planets/',
		'AI approach uncovers dozens of hidden planets in TESS data'
	],
	olympics: [
		'https://getreadypack.olympics.com/milanocortina2026/en/static/_content/Athlete365_GetReadyPack_MilanoCortina.pdf',
		'Milano Cortina 2026 Athlete Guide'
	],
	olympicDates: [
		'https://support.olympics.com/hc/en-gb/articles/43002165477267-Where-and-when-will-the-2026-Olympic-Winter-Games-take-place',
		'Where and when will the 2026 Olympic Winter Games take place?'
	],
	costaRica: [
		'https://tse.go.cr/comunicado1168.html',
		'TSE declares Laura Fernández Delgado president-elect of Costa Rica'
	],
	newStart: [
		'https://www.diplomatie.gouv.fr/fr/presse-et-ressources/decouvrir-et-informer/actualites/expiration-du-traite-new-start',
		'Expiration of the New START treaty'
	],
	cricket: [
		'https://www.bcci.tv/news/article/bcci-congratulates-team-india-on-icc-men-s-t20-world-cup-2026-triumph',
		'India wins the 2026 ICC Men’s T20 World Cup'
	],
	nepal: [
		'https://apnews.com/article/2cf0332dcc8f56e313c27e846b8cbed5',
		"Former rapper's party sweeps Nepal's 2026 election"
	],
	peru: [
		'https://apnews.com/article/b86901d627e3305da6da68d61468f1e8',
		"Keiko Fujimori wins Peru's presidential election"
	],
	chile: [
		'https://apnews.com/article/00d398c96e0ff25378838dc8831dcbe8',
		'José Antonio Kast takes office in Chile'
	],
	davos: [
		'https://apnews.com/article/021c32dde9fc9df6511f3c099dc3ac1e',
		'World leaders meet at Davos in 2026'
	]
} as const;

type SourceKey = keyof typeof SOURCES;
type AnswerForm = QuestionBlueprint['answerForm'];

interface Entry {
	q: string;
	c: [string, string, string, string];
	a: string;
	aliases?: string[];
	e: string;
	d?: ThaiQuizItem['difficulty'];
	t: string[];
	s: SourceKey;
	k: string;
	f: AnswerForm;
}

const ENTRIES: Entry[] = [
	{
		q: 'ภาพยนตร์เรื่องใดคว้ารางวัลภาพยนตร์ยอดเยี่ยมบนเวทีออสการ์ครั้งที่ 98 ซึ่งจัดขึ้นในเดือนมีนาคม 2026?',
		c: ['One Battle after Another', 'Sinners', 'Hamnet', 'Marty Supreme'],
		a: 'One Battle after Another',
		e: 'One Battle after Another ได้รางวัล Best Picture ในงานออสการ์ครั้งที่ 98',
		t: ['ออสการ์', 'ภาพยนตร์'],
		s: 'oscars',
		k: 'ผู้ชนะรางวัลภาพยนตร์ยอดเยี่ยมออสการ์ 2026',
		f: 'work'
	},
	{
		q: 'ผู้กำกับคนใดคว้ารางวัลกำกับภาพยนตร์ยอดเยี่ยมจาก One Battle after Another ในงานออสการ์ปี 2026?',
		c: ['Paul Thomas Anderson', 'Ryan Coogler', 'Chloé Zhao', 'Josh Safdie'],
		a: 'Paul Thomas Anderson',
		aliases: ['พอล โธมัส แอนเดอร์สัน'],
		e: 'Paul Thomas Anderson ชนะสาขากำกับภาพยนตร์ยอดเยี่ยมจากเรื่องนี้',
		t: ['ออสการ์', 'ผู้กำกับ'],
		s: 'oscars',
		k: 'ผู้กำกับยอดเยี่ยมออสการ์ 2026',
		f: 'person'
	},
	{
		q: 'นักแสดงชายคนใดชนะรางวัลนำชายยอดเยี่ยมจากภาพยนตร์ Sinners บนเวทีออสการ์ครั้งที่ 98?',
		c: ['Michael B. Jordan', 'Timothée Chalamet', 'Leonardo DiCaprio', 'Wagner Moura'],
		a: 'Michael B. Jordan',
		aliases: ['ไมเคิล บี. จอร์แดน'],
		e: 'Michael B. Jordan ได้รางวัลจากบทนำใน Sinners',
		t: ['ออสการ์', 'นักแสดง'],
		s: 'oscars',
		k: 'นักแสดงนำชายยอดเยี่ยมออสการ์ 2026',
		f: 'person'
	},
	{
		q: 'นักแสดงหญิงคนใดชนะรางวัลนำหญิงยอดเยี่ยมจาก Hamnet ในพิธีออสการ์ปี 2026?',
		c: ['Jessie Buckley', 'Emma Stone', 'Rose Byrne', 'Renate Reinsve'],
		a: 'Jessie Buckley',
		aliases: ['เจสซี บัคลีย์'],
		e: 'Jessie Buckley ได้รางวัลนักแสดงนำหญิงยอดเยี่ยมจาก Hamnet',
		t: ['ออสการ์', 'นักแสดง'],
		s: 'oscars',
		k: 'นักแสดงนำหญิงยอดเยี่ยมออสการ์ 2026',
		f: 'person'
	},
	{
		q: 'ใครได้รับรางวัลนักแสดงสมทบชายยอดเยี่ยมจาก One Battle after Another ในงานออสการ์ 2026?',
		c: ['Sean Penn', 'Benicio Del Toro', 'Jacob Elordi', 'Stellan Skarsgård'],
		a: 'Sean Penn',
		aliases: ['ฌอน เพนน์'],
		e: 'Sean Penn เป็นผู้ชนะสาขานักแสดงสมทบชายยอดเยี่ยม',
		t: ['ออสการ์', 'นักแสดง'],
		s: 'oscars',
		k: 'นักแสดงสมทบชายยอดเยี่ยมออสการ์ 2026',
		f: 'person'
	},
	{
		q: 'ใครคว้ารางวัลนักแสดงสมทบหญิงยอดเยี่ยมจาก Weapons บนเวทีออสการ์ครั้งที่ 98?',
		c: ['Amy Madigan', 'Elle Fanning', 'Wunmi Mosaku', 'Teyana Taylor'],
		a: 'Amy Madigan',
		aliases: ['เอมี มาดิแกน'],
		e: 'Amy Madigan ชนะรางวัลจากภาพยนตร์ Weapons',
		t: ['ออสการ์', 'นักแสดง'],
		s: 'oscars',
		k: 'นักแสดงสมทบหญิงยอดเยี่ยมออสการ์ 2026',
		f: 'person'
	},
	{
		q: 'แอนิเมชันเรื่องใดชนะรางวัลภาพยนตร์แอนิเมชันยอดเยี่ยมในงานออสการ์ปี 2026?',
		c: ['KPop Demon Hunters', 'Zootopia 2', 'Elio', 'Arco'],
		a: 'KPop Demon Hunters',
		e: 'KPop Demon Hunters ชนะสาขา Animated Feature Film',
		t: ['ออสการ์', 'แอนิเมชัน'],
		s: 'oscars',
		k: 'แอนิเมชันยอดเยี่ยมออสการ์ 2026',
		f: 'work'
	},
	{
		q: 'เพลงใดจาก KPop Demon Hunters ได้รางวัลเพลงประกอบภาพยนตร์ยอดเยี่ยมบนเวทีออสการ์ 2026?',
		c: ['Golden', 'I Lied To You', 'Train Dreams', 'Dear Me'],
		a: 'Golden',
		e: 'Golden ได้รางวัล Best Original Song',
		t: ['ออสการ์', 'เพลง'],
		s: 'oscars',
		k: 'เพลงประกอบภาพยนตร์ยอดเยี่ยมออสการ์ 2026',
		f: 'work'
	},
	{
		q: 'ประเทศใดส่ง Sentimental Value ซึ่งชนะรางวัลภาพยนตร์นานาชาติยอดเยี่ยมในงานออสการ์ 2026?',
		c: ['นอร์เวย์', 'บราซิล', 'ฝรั่งเศส', 'สเปน'],
		a: 'นอร์เวย์',
		aliases: ['Norway'],
		e: 'Sentimental Value ตัวแทนจากนอร์เวย์เป็นผู้ชนะสาขานี้',
		t: ['ออสการ์', 'ภาพยนตร์นานาชาติ'],
		s: 'oscars',
		k: 'ประเทศผู้ชนะภาพยนตร์นานาชาติออสการ์ 2026',
		f: 'place'
	},
	{
		q: 'สารคดีขนาดยาวเรื่องใดชนะรางวัล Documentary Feature Film ในพิธีออสการ์ครั้งที่ 98?',
		c: [
			'Mr. Nobody against Putin',
			'The Perfect Neighbor',
			'The Alabama Solution',
			'Cutting through Rocks'
		],
		a: 'Mr. Nobody against Putin',
		e: 'Mr. Nobody against Putin เป็นสารคดีขนาดยาวยอดเยี่ยมของปีนั้น',
		t: ['ออสการ์', 'สารคดี'],
		s: 'oscars',
		k: 'สารคดียอดเยี่ยมออสการ์ 2026',
		f: 'work'
	},
	{
		q: 'ภาพยนตร์เรื่องใดชนะรางวัลกำกับภาพยอดเยี่ยมในงานออสการ์ปี 2026?',
		c: ['Sinners', 'Frankenstein', 'Train Dreams', 'Marty Supreme'],
		a: 'Sinners',
		e: 'Autumn Durald Arkapaw คว้ารางวัลกำกับภาพจาก Sinners',
		t: ['ออสการ์', 'กำกับภาพ'],
		s: 'oscars',
		k: 'ภาพยนตร์ผู้ชนะสาขากำกับภาพออสการ์ 2026',
		f: 'work'
	},
	{
		q: 'ภาพยนตร์เรื่องใดได้รับออสการ์สาขาออกแบบเครื่องแต่งกายยอดเยี่ยมในปี 2026?',
		c: ['Frankenstein', 'Avatar: Fire and Ash', 'Hamnet', 'Sinners'],
		a: 'Frankenstein',
		e: 'Kate Hawley ชนะรางวัลออกแบบเครื่องแต่งกายจาก Frankenstein',
		t: ['ออสการ์', 'เครื่องแต่งกาย'],
		s: 'oscars',
		k: 'ภาพยนตร์ผู้ชนะออกแบบเครื่องแต่งกายออสการ์ 2026',
		f: 'work'
	},
	{
		q: 'ภาพยนตร์เรื่องใดคว้ารางวัลเสียงยอดเยี่ยมบนเวทีออสการ์ครั้งที่ 98 ในปี 2026?',
		c: ['F1', 'Sinners', 'Sirāt', 'One Battle after Another'],
		a: 'F1',
		e: 'ทีมงานของ F1 ได้รับรางวัลสาขา Sound',
		t: ['ออสการ์', 'เสียง'],
		s: 'oscars',
		k: 'ภาพยนตร์ผู้ชนะสาขาเสียงออสการ์ 2026',
		f: 'work'
	},
	{
		q: 'ภาพยนตร์เรื่องใดได้รางวัลเทคนิคพิเศษยอดเยี่ยมในพิธีออสการ์ปี 2026?',
		c: ['Avatar: Fire and Ash', 'Jurassic World Rebirth', 'The Lost Bus', 'Sinners'],
		a: 'Avatar: Fire and Ash',
		e: 'Avatar: Fire and Ash ชนะสาขา Visual Effects',
		t: ['ออสการ์', 'เทคนิคพิเศษ'],
		s: 'oscars',
		k: 'ภาพยนตร์ผู้ชนะเทคนิคพิเศษออสการ์ 2026',
		f: 'work'
	},
	{
		q: 'พิธีกรของงานออสการ์ครั้งที่ 98 ซึ่งจัดที่ Dolby Theatre เมื่อ 15 มีนาคม 2026 คือใคร?',
		c: ['Conan O’Brien', 'Jimmy Kimmel', 'Trevor Noah', 'Seth Meyers'],
		a: 'Conan O’Brien',
		aliases: ['โคนัน โอไบรอัน'],
		e: 'Conan O’Brien ทำหน้าที่พิธีกรของงานออสการ์ครั้งที่ 98',
		t: ['ออสการ์', 'พิธีกร'],
		s: 'oscars',
		k: 'พิธีกรออสการ์ 2026',
		f: 'person'
	},

	{
		q: 'อัลบั้มใดของ Bad Bunny คว้ารางวัล Album of the Year ในงานแกรมมีปี 2026?',
		c: ['DeBÍ TiRAR MáS FOToS', 'GNX', 'MAYHEM', 'Man’s Best Friend'],
		a: 'DeBÍ TiRAR MáS FOToS',
		e: 'อัลบั้มของ Bad Bunny ชนะรางวัลใหญ่ Album of the Year',
		t: ['แกรมมี', 'ดนตรี'],
		s: 'grammys',
		k: 'อัลบั้มแห่งปีแกรมมี 2026',
		f: 'work'
	},
	{
		q: 'เพลงใดของ Kendrick Lamar และ SZA ชนะรางวัล Record of the Year ในงานแกรมมีครั้งที่ 68?',
		c: ['luther', 'DtMF', 'WILDFLOWER', 'APT.'],
		a: 'luther',
		e: 'luther ของ Kendrick Lamar และ SZA ได้รางวัล Record of the Year',
		t: ['แกรมมี', 'ดนตรี'],
		s: 'grammys',
		k: 'Record of the Year แกรมมี 2026',
		f: 'work'
	},
	{
		q: 'เพลงใดของ Billie Eilish และ FINNEAS ได้รางวัล Song of the Year บนเวทีแกรมมีปี 2026?',
		c: ['WILDFLOWER', 'Abracadabra', 'Manchild', 'Anxiety'],
		a: 'WILDFLOWER',
		e: 'WILDFLOWER ชนะรางวัล Song of the Year',
		t: ['แกรมมี', 'ดนตรี'],
		s: 'grammys',
		k: 'Song of the Year แกรมมี 2026',
		f: 'work'
	},
	{
		q: 'ศิลปินคนใดได้รับรางวัล Best New Artist ในงานแกรมมีประจำปี 2026?',
		c: ['Olivia Dean', 'Doechii', 'Chappell Roan', 'Sabrina Carpenter'],
		a: 'Olivia Dean',
		aliases: ['โอลิเวีย ดีน'],
		e: 'Olivia Dean เป็นผู้ชนะรางวัลศิลปินหน้าใหม่ยอดเยี่ยม',
		t: ['แกรมมี', 'ศิลปิน'],
		s: 'grammys',
		k: 'ศิลปินหน้าใหม่ยอดเยี่ยมแกรมมี 2026',
		f: 'person'
	},
	{
		q: 'งานประกาศรางวัลแกรมมีที่จัดขึ้นในวันที่ 1 กุมภาพันธ์ 2026 เป็นครั้งที่เท่าไร?',
		c: ['ครั้งที่ 68', 'ครั้งที่ 67', 'ครั้งที่ 69', 'ครั้งที่ 70'],
		a: 'ครั้งที่ 68',
		aliases: ['68'],
		e: 'พิธีในปี 2026 คือ 68th Annual Grammy Awards',
		t: ['แกรมมี', 'รางวัล'],
		s: 'grammys',
		k: 'ลำดับครั้งของแกรมมี 2026',
		f: 'number'
	},
	{
		q: 'ศิลปินคนใดสร้างประวัติศาสตร์ด้วยการคว้า Album of the Year ครั้งแรกของตนในงานแกรมมี 2026?',
		c: ['Bad Bunny', 'Kendrick Lamar', 'Lady Gaga', 'Bruno Mars'],
		a: 'Bad Bunny',
		aliases: ['แบด บันนี'],
		e: 'Bad Bunny คว้า Album of the Year ครั้งแรกด้วย DeBÍ TiRAR MáS FOToS',
		t: ['แกรมมี', 'ประวัติศาสตร์ดนตรี'],
		s: 'grammys',
		k: 'เจ้าของอัลบั้มแห่งปีแกรมมี 2026',
		f: 'person'
	},
	{
		q: 'สองศิลปินคู่ใดเป็นผู้ขับร้องเพลง luther ที่ได้ Record of the Year จากแกรมมี 2026?',
		c: [
			'Kendrick Lamar และ SZA',
			'ROSÉ และ Bruno Mars',
			'Billie Eilish และ FINNEAS',
			'Lady Gaga และ Bruno Mars'
		],
		a: 'Kendrick Lamar และ SZA',
		e: 'luther เป็นผลงานร่วมของ Kendrick Lamar และ SZA',
		t: ['แกรมมี', 'ศิลปิน'],
		s: 'grammys',
		k: 'ศิลปินเจ้าของ Record of the Year 2026',
		f: 'person'
	},
	{
		q: 'งานแกรมมีปี 2026 ซึ่ง Bad Bunny คว้าอัลบั้มแห่งปี จัดขึ้นในวันใด?',
		c: ['1 กุมภาพันธ์ 2026', '15 มีนาคม 2026', '12 กรกฎาคม 2026', '30 สิงหาคม 2026'],
		a: '1 กุมภาพันธ์ 2026',
		aliases: ['1 กุมภาพันธ์'],
		e: 'งานแกรมมีครั้งที่ 68 จัดเมื่อวันอาทิตย์ที่ 1 กุมภาพันธ์ 2026',
		t: ['แกรมมี', 'วันที่'],
		s: 'grammys',
		k: 'วันจัดงานแกรมมี 2026',
		f: 'date'
	},

	{
		q: 'ทีมชาติใดคว้าแชมป์ฟุตบอลโลก 2026 หลังชนะรอบชิงชนะเลิศที่นิวยอร์กนิวเจอร์ซีย์?',
		c: ['สเปน', 'อาร์เจนตินา', 'ฝรั่งเศส', 'บราซิล'],
		a: 'สเปน',
		aliases: ['Spain'],
		e: 'สเปนชนะอาร์เจนตินาและคว้าแชมป์โลกสมัยที่สอง',
		t: ['ฟุตบอลโลก', 'กีฬา'],
		s: 'fifa',
		k: 'แชมป์ฟุตบอลโลก 2026',
		f: 'place'
	},
	{
		q: 'สเปนเอาชนะทีมชาติใดในรอบชิงชนะเลิศฟุตบอลโลก 2026?',
		c: ['อาร์เจนตินา', 'เยอรมนี', 'อังกฤษ', 'โปรตุเกส'],
		a: 'อาร์เจนตินา',
		aliases: ['Argentina'],
		e: 'คู่ชิงชนะเลิศคือสเปนกับอาร์เจนตินา',
		t: ['ฟุตบอลโลก', 'กีฬา'],
		s: 'fifa',
		k: 'รองแชมป์ฟุตบอลโลก 2026',
		f: 'place'
	},
	{
		q: 'ผลการแข่งขันรอบชิงชนะเลิศฟุตบอลโลก 2026 ระหว่างสเปนกับอาร์เจนตินาจบที่เท่าไร?',
		c: ['สเปนชนะ 1-0', 'สเปนชนะ 2-0', 'อาร์เจนตินาชนะ 1-0', 'เสมอ 2-2'],
		a: 'สเปนชนะ 1-0',
		aliases: ['1-0'],
		e: 'สเปนชนะ 1-0 หลังต่อเวลาพิเศษ',
		t: ['ฟุตบอลโลก', 'ผลการแข่งขัน'],
		s: 'fifa',
		k: 'สกอร์นัดชิงฟุตบอลโลก 2026',
		f: 'number'
	},
	{
		q: 'รอบชิงชนะเลิศฟุตบอลโลก 2026 ต้องใช้ช่วงใดเพื่อตัดสินแชมป์หลัง 90 นาที?',
		c: ['ต่อเวลาพิเศษ', 'ยิงจุดโทษ', 'โกลเดนโกล', 'แข่งใหม่'],
		a: 'ต่อเวลาพิเศษ',
		aliases: ['extra time'],
		e: 'ประตูชัยเกิดขึ้นในเกมที่ต้องต่อเวลาพิเศษ',
		t: ['ฟุตบอลโลก', 'รอบชิง'],
		s: 'fifa',
		k: 'วิธีตัดสินนัดชิงฟุตบอลโลก 2026',
		f: 'term'
	},
	{
		q: 'รอบชิงชนะเลิศฟุตบอลโลก 2026 จัดขึ้นในพื้นที่เจ้าภาพใด?',
		c: ['นิวยอร์ก นิวเจอร์ซีย์', 'ลอสแอนเจลิส', 'เม็กซิโกซิตี', 'โทรอนโต'],
		a: 'นิวยอร์ก นิวเจอร์ซีย์',
		aliases: ['New York New Jersey'],
		e: 'นัดชิงจัดในพื้นที่ New York New Jersey',
		t: ['ฟุตบอลโลก', 'สนามแข่งขัน'],
		s: 'fifa',
		k: 'สถานที่นัดชิงฟุตบอลโลก 2026',
		f: 'place'
	},
	{
		q: 'แชมป์ฟุตบอลโลก 2026 นับเป็นแชมป์โลกสมัยที่เท่าไรของทีมชาติสเปน?',
		c: ['สมัยที่ 2', 'สมัยแรก', 'สมัยที่ 3', 'สมัยที่ 4'],
		a: 'สมัยที่ 2',
		aliases: ['2'],
		e: 'สเปนคว้าแชมป์โลกชายเป็นสมัยที่สอง',
		t: ['ฟุตบอลโลก', 'สถิติ'],
		s: 'fifa',
		k: 'จำนวนแชมป์โลกของสเปนหลังปี 2026',
		f: 'number'
	},
	{
		q: 'ฟุตบอลโลก 2026 ทำสถิติยอดผู้ชมรวมในสนามประมาณเท่าใดตลอดทัวร์นาเมนต์?',
		c: ['6.81 ล้านคน', '4.21 ล้านคน', '8.50 ล้านคน', '2.95 ล้านคน'],
		a: '6.81 ล้านคน',
		aliases: ['6,810,966 คน', '6810966'],
		e: 'FIFA รายงานยอดผู้ชมรวม 6,810,966 คน',
		t: ['ฟุตบอลโลก', 'สถิติผู้ชม'],
		s: 'fifa',
		k: 'ยอดผู้ชมฟุตบอลโลก 2026',
		f: 'number'
	},
	{
		q: 'ประเทศใดต่อไปนี้ไม่ได้เป็นหนึ่งในสามเจ้าภาพร่วมของฟุตบอลโลก 2026?',
		c: ['บราซิล', 'สหรัฐอเมริกา', 'แคนาดา', 'เม็กซิโก'],
		a: 'บราซิล',
		aliases: ['Brazil'],
		e: 'เจ้าภาพร่วมคือสหรัฐอเมริกา แคนาดา และเม็กซิโก',
		t: ['ฟุตบอลโลก', 'เจ้าภาพ'],
		s: 'fifa',
		k: 'เจ้าภาพฟุตบอลโลก 2026',
		f: 'place'
	},
	{
		q: 'ความสำเร็จของสเปนในฟุตบอลโลกชาย 2026 ทำให้ครองแชมป์โลกชายต่อจากแชมป์โลกหญิงของชาติใด?',
		c: ['สเปน', 'สหรัฐอเมริกา', 'อังกฤษ', 'เยอรมนี'],
		a: 'สเปน',
		e: 'FIFA เรียกความสำเร็จนี้ว่า global double ของสเปน',
		t: ['ฟุตบอลโลก', 'สถิติ'],
		s: 'fifa',
		k: 'global double ของสเปน',
		f: 'place'
	},
	{
		q: 'การแข่งขันฟุตบอลโลก 2026 ปิดฉากลงด้วยทีมจากทวีปใดคว้าแชมป์?',
		c: ['ยุโรป', 'อเมริกาใต้', 'เอเชีย', 'แอฟริกา'],
		a: 'ยุโรป',
		e: 'สเปนเป็นชาติจากทวีปยุโรป',
		t: ['ฟุตบอลโลก', 'ภูมิศาสตร์กีฬา'],
		s: 'fifa',
		k: 'ทวีปของแชมป์ฟุตบอลโลก 2026',
		f: 'place'
	},

	{
		q: 'ทีมใดคว้าแชมป์ NBA ฤดูกาล 2025-26 และเป็นแชมป์ครั้งแรกในรอบ 53 ปี?',
		c: ['New York Knicks', 'Boston Celtics', 'Oklahoma City Thunder', 'Los Angeles Lakers'],
		a: 'New York Knicks',
		aliases: ['นิวยอร์ก นิกส์', 'Knicks'],
		e: 'Knicks คว้าแชมป์ NBA ครั้งแรกนับจากปี 1973',
		t: ['NBA', 'บาสเกตบอล'],
		s: 'nba',
		k: 'แชมป์ NBA ปี 2026',
		f: 'other'
	},
	{
		q: 'ก่อนคว้าแชมป์ NBA ปี 2026 New York Knicks เคยได้แชมป์ครั้งล่าสุดในปีใด?',
		c: ['1973', '1983', '1993', '2003'],
		a: '1973',
		e: 'แชมป์ปี 2026 ยุติการรอคอยที่เริ่มหลังแชมป์ปี 1973',
		t: ['NBA', 'สถิติ'],
		s: 'nba',
		k: 'แชมป์ NBA ครั้งก่อนของ Knicks',
		f: 'date'
	},
	{
		q: 'ทีม New York Knicks ทำดับเบิลแชมป์ NBA และถ้วยรายการใดในฤดูกาล 2025-26?',
		c: ['NBA Cup', 'Commissioner’s Cup', 'EuroLeague', 'FIBA World Cup'],
		a: 'NBA Cup',
		e: 'Knicks ชนะทั้ง NBA Cup และ NBA Championship',
		t: ['NBA', 'บาสเกตบอล'],
		s: 'nba',
		k: 'ดับเบิลแชมป์ของ Knicks ปี 2026',
		f: 'work'
	},
	{
		q: 'ในเกม 4 ของ NBA Finals 2026 ทีม Knicks พลิกกลับมาจากตามหลังมากที่สุดกี่คะแนน?',
		c: ['29 คะแนน', '19 คะแนน', '24 คะแนน', '34 คะแนน'],
		a: '29 คะแนน',
		aliases: ['29'],
		e: 'NBA ระบุว่าเป็นการคัมแบ็กจาก 29 คะแนน ซึ่งมากที่สุดในประวัติศาสตร์รอบชิง',
		t: ['NBA', 'สถิติ'],
		s: 'nba',
		k: 'สถิติคัมแบ็ก NBA Finals 2026',
		f: 'number'
	},
	{
		q: 'ทีมใดชนะ Super Bowl LX ที่แข่งขันในปี 2026?',
		c: ['Seattle Seahawks', 'New England Patriots', 'Kansas City Chiefs', 'San Francisco 49ers'],
		a: 'Seattle Seahawks',
		aliases: ['ซีแอตเทิล ซีฮอว์กส์', 'Seahawks'],
		e: 'Seattle Seahawks เป็นแชมป์ Super Bowl LX',
		t: ['NFL', 'ซูเปอร์โบวล์'],
		s: 'nfl',
		k: 'แชมป์ Super Bowl LX',
		f: 'other'
	},
	{
		q: 'Seattle Seahawks เอาชนะทีมใดเพื่อคว้าแชมป์ Super Bowl LX?',
		c: ['New England Patriots', 'Buffalo Bills', 'Philadelphia Eagles', 'Baltimore Ravens'],
		a: 'New England Patriots',
		aliases: ['Patriots', 'นิวอิงแลนด์ แพทริออตส์'],
		e: 'คู่ชิง Super Bowl LX คือ Seahawks กับ Patriots',
		t: ['NFL', 'ซูเปอร์โบวล์'],
		s: 'nfl',
		k: 'รองแชมป์ Super Bowl LX',
		f: 'other'
	},
	{
		q: 'ผู้เล่นคนใดได้รับรางวัล MVP ของ Super Bowl LX ในปี 2026?',
		c: ['Kenneth Walker III', 'Jason Myers', 'Geno Smith', 'Drake Maye'],
		a: 'Kenneth Walker III',
		aliases: ['เคนเนธ วอล์กเกอร์ ที่สาม'],
		e: 'รันนิงแบ็ก Kenneth Walker III ได้รับเลือกเป็น MVP',
		t: ['NFL', 'MVP'],
		s: 'nfl',
		k: 'MVP Super Bowl LX',
		f: 'person'
	},
	{
		q: 'Jason Myers สร้างสถิติ Super Bowl LX ด้วยการเตะฟิลด์โกลกี่ครั้ง?',
		c: ['5 ครั้ง', '3 ครั้ง', '4 ครั้ง', '6 ครั้ง'],
		a: '5 ครั้ง',
		aliases: ['5'],
		e: 'Myers เตะฟิลด์โกลได้ 5 ครั้ง เป็นสถิติของ Super Bowl',
		t: ['NFL', 'สถิติ'],
		s: 'nfl',
		k: 'สถิติฟิลด์โกล Super Bowl LX',
		f: 'number'
	},
	{
		q: 'ชาติใดคว้าแชมป์ World Baseball Classic เป็นครั้งแรกในปี 2026?',
		c: ['เวเนซุเอลา', 'สหรัฐอเมริกา', 'ญี่ปุ่น', 'สาธารณรัฐโดมินิกัน'],
		a: 'เวเนซุเอลา',
		aliases: ['Venezuela'],
		e: 'เวเนซุเอลาชนะสหรัฐฯ และได้แชมป์ WBC ครั้งแรก',
		t: ['เบสบอล', 'WBC'],
		s: 'wbc',
		k: 'แชมป์ WBC 2026',
		f: 'place'
	},
	{
		q: 'เวเนซุเอลาเอาชนะชาติใดในรอบชิง World Baseball Classic 2026?',
		c: ['สหรัฐอเมริกา', 'ญี่ปุ่น', 'เม็กซิโก', 'เกาหลีใต้'],
		a: 'สหรัฐอเมริกา',
		aliases: ['USA', 'United States'],
		e: 'เวเนซุเอลาชนะทีม USA ในนัดชิง',
		t: ['เบสบอล', 'WBC'],
		s: 'wbc',
		k: 'รองแชมป์ WBC 2026',
		f: 'place'
	},
	{
		q: 'ผลรอบชิง World Baseball Classic 2026 ที่เวเนซุเอลาชนะสหรัฐฯ คือเท่าไร?',
		c: ['3-2', '5-3', '2-1', '4-0'],
		a: '3-2',
		e: 'เวเนซุเอลาเฉือนชนะ 3-2',
		t: ['เบสบอล', 'ผลการแข่งขัน'],
		s: 'wbc',
		k: 'สกอร์รอบชิง WBC 2026',
		f: 'number'
	},
	{
		q: 'ใครได้รับเลือกเป็นผู้เล่นทรงคุณค่าของ World Baseball Classic 2026?',
		c: ['Maikel Garcia', 'Eugenio Suárez', 'José Altuve', 'Aaron Judge'],
		a: 'Maikel Garcia',
		aliases: ['ไมเคล การ์เซีย'],
		e: 'Maikel Garcia ได้รับรางวัล Classic MVP',
		t: ['เบสบอล', 'MVP'],
		s: 'wbc',
		k: 'MVP WBC 2026',
		f: 'person'
	},
	{
		q: 'ผู้เล่นเวเนซุเอลาคนใดตี RBI double ในอินนิงที่ 9 จนนำไปสู่แชมป์ WBC 2026?',
		c: ['Eugenio Suárez', 'Maikel Garcia', 'Ronald Acuña Jr.', 'Salvador Pérez'],
		a: 'Eugenio Suárez',
		aliases: ['ยูเฮนิโอ ซัวเรซ'],
		e: 'ดับเบิลของ Suárez ส่งแต้มขึ้นนำในอินนิงที่ 9',
		t: ['เบสบอล', 'WBC'],
		s: 'wbc',
		k: 'ผู้ทำแต้มชี้ขาด WBC 2026',
		f: 'person'
	},

	{
		q: 'นักเทนนิสชายคนใดคว้าแชมป์ประเภทเดี่ยว Australian Open 2026?',
		c: ['Carlos Alcaraz', 'Novak Djokovic', 'Jannik Sinner', 'Alexander Zverev'],
		a: 'Carlos Alcaraz',
		aliases: ['คาร์ลอส อัลการาซ'],
		e: 'Carlos Alcaraz ชนะ Australian Open เป็นครั้งแรก',
		t: ['เทนนิส', 'Australian Open'],
		s: 'tennis',
		k: 'แชมป์ชายเดี่ยว Australian Open 2026',
		f: 'person'
	},
	{
		q: 'Carlos Alcaraz เอาชนะใครในรอบชิงชายเดี่ยว Australian Open 2026?',
		c: ['Novak Djokovic', 'Jannik Sinner', 'Alexander Zverev', 'Daniil Medvedev'],
		a: 'Novak Djokovic',
		aliases: ['โนวัก ยอโควิช'],
		e: 'Alcaraz ชนะ Djokovic สี่เซตในรอบชิง',
		t: ['เทนนิส', 'Australian Open'],
		s: 'tennis',
		k: 'คู่ชิง Australian Open 2026',
		f: 'person'
	},
	{
		q: 'ความสำเร็จใดทำให้ Carlos Alcaraz สร้างสถิติหลังคว้า Australian Open 2026?',
		c: [
			'ชายอายุน้อยที่สุดที่ครบ Career Grand Slam ในยุค Open',
			'แชมป์ไร้เสียเซตคนแรก',
			'แชมป์อายุมากที่สุด',
			'ผู้ชนะ 25 แกรนด์สแลม'
		],
		a: 'ชายอายุน้อยที่สุดที่ครบ Career Grand Slam ในยุค Open',
		e: 'วัย 22 ปี Alcaraz กลายเป็นชายอายุน้อยที่สุดในยุค Open ที่ชนะครบสี่เมเจอร์',
		d: 'normal',
		t: ['เทนนิส', 'สถิติ'],
		s: 'tennis',
		k: 'สถิติ Career Grand Slam ของ Alcaraz',
		f: 'other'
	},
	{
		q: 'นักเทนนิสชายคนใดคว้าแชมป์ Roland Garros 2026 ซึ่งเป็นแกรนด์สแลมแรกของเขา?',
		c: ['Alexander Zverev', 'Jannik Sinner', 'Carlos Alcaraz', 'Novak Djokovic'],
		a: 'Alexander Zverev',
		aliases: ['อเล็กซานเดอร์ ซเวเรฟ'],
		e: 'Zverev ชนะเมเจอร์แรกของอาชีพที่ปารีส',
		t: ['เทนนิส', 'Roland Garros'],
		s: 'tennis',
		k: 'แชมป์ชายเดี่ยว Roland Garros 2026',
		f: 'person'
	},
	{
		q: 'นักเทนนิสชายคนใดคว้าแชมป์ Wimbledon 2026 และป้องกันตำแหน่งได้สำเร็จ?',
		c: ['Jannik Sinner', 'Alexander Zverev', 'Carlos Alcaraz', 'Taylor Fritz'],
		a: 'Jannik Sinner',
		aliases: ['ยานนิก ซินเนอร์'],
		e: 'Sinner คว้าแชมป์ Wimbledon สองปีติดต่อกัน',
		t: ['เทนนิส', 'Wimbledon'],
		s: 'wimbledon',
		k: 'แชมป์ชายเดี่ยว Wimbledon 2026',
		f: 'person'
	},
	{
		q: 'Jannik Sinner เอาชนะใครในรอบชิงชายเดี่ยว Wimbledon 2026?',
		c: ['Alexander Zverev', 'Carlos Alcaraz', 'Novak Djokovic', 'Daniil Medvedev'],
		a: 'Alexander Zverev',
		aliases: ['อเล็กซานเดอร์ ซเวเรฟ'],
		e: 'Sinner ชนะ Zverev 6-7, 7-6, 6-3, 6-4',
		t: ['เทนนิส', 'Wimbledon'],
		s: 'wimbledon',
		k: 'คู่ชิง Wimbledon 2026',
		f: 'person'
	},
	{
		q: 'การแข่งขันชายเดี่ยวรอบชิง Wimbledon 2026 จบลงด้วยผู้ชนะใช้ทั้งหมดกี่เซต?',
		c: ['4 เซต', '3 เซต', '5 เซต', '2 เซต'],
		a: '4 เซต',
		aliases: ['4'],
		e: 'Sinner ชนะด้วยสกอร์สี่เซต 6-7, 7-6, 6-3, 6-4',
		t: ['เทนนิส', 'Wimbledon'],
		s: 'wimbledon',
		k: 'จำนวนเซตรอบชิง Wimbledon 2026',
		f: 'number'
	},
	{
		q: 'คู่ใดคว้าแชมป์ชายคู่ Australian Open 2026 ในการลงแข่งร่วมกันเพียงรายการระดับทัวร์ครั้งที่สอง?',
		c: [
			'Christian Harrison / Neal Skupski',
			'Kubler / Polmans',
			'Granollers / Zeballos',
			'Heliövaara / Patten'
		],
		a: 'Christian Harrison / Neal Skupski',
		e: 'Harrison และ Skupski ชนะชายคู่ที่เมลเบิร์น',
		t: ['เทนนิส', 'ชายคู่'],
		s: 'tennis',
		k: 'แชมป์ชายคู่ Australian Open 2026',
		f: 'person'
	},
	{
		q: 'คู่ใดคว้าแชมป์ชายคู่ Roland Garros 2026 ตามบันทึกผลของ ATP?',
		c: [
			'Marcel Granollers / Horacio Zeballos',
			'Harrison / Skupski',
			'Heliövaara / Patten',
			'Kubler / Polmans'
		],
		a: 'Marcel Granollers / Horacio Zeballos',
		e: 'Granollers และ Zeballos เป็นแชมป์ชายคู่ที่ปารีส',
		t: ['เทนนิส', 'ชายคู่'],
		s: 'tennis',
		k: 'แชมป์ชายคู่ Roland Garros 2026',
		f: 'person'
	},
	{
		q: 'คู่ใดคว้าแชมป์ชายคู่ Wimbledon 2026 ตามบันทึกผลการแข่งขันของ ATP?',
		c: [
			'Harri Heliövaara / Henry Patten',
			'Granollers / Zeballos',
			'Harrison / Skupski',
			'Kubler / Polmans'
		],
		a: 'Harri Heliövaara / Henry Patten',
		e: 'Heliövaara และ Patten ชนะชายคู่ Wimbledon 2026',
		t: ['เทนนิส', 'ชายคู่'],
		s: 'tennis',
		k: 'แชมป์ชายคู่ Wimbledon 2026',
		f: 'person'
	},

	{
		q: 'คณะกรรมการมรดกโลกยูเนสโกเพิ่มแหล่งมรดกโลกใหม่กี่แห่งในการประชุมปี 2026 ที่ปูซาน?',
		c: ['25 แห่ง', '15 แห่ง', '30 แห่ง', '48 แห่ง'],
		a: '25 แห่ง',
		aliases: ['25'],
		e: 'การประชุมครั้งที่ 48 ขึ้นทะเบียนแหล่งใหม่ 25 แห่ง',
		t: ['UNESCO', 'มรดกโลก'],
		s: 'unesco',
		k: 'จำนวนแหล่งมรดกโลกใหม่ปี 2026',
		f: 'number'
	},
	{
		q: 'การประชุมคณะกรรมการมรดกโลกครั้งที่ 48 ในปี 2026 จัดขึ้นที่เมืองใด?',
		c: ['ปูซาน', 'ปารีส', 'เกียวโต', 'เจนีวา'],
		a: 'ปูซาน',
		aliases: ['Busan', 'ปูซาน เกาหลีใต้'],
		e: 'การประชุมครั้งที่ 48 จัดที่ปูซาน สาธารณรัฐเกาหลี',
		t: ['UNESCO', 'มรดกโลก'],
		s: 'unesco',
		k: 'เมืองเจ้าภาพคณะกรรมการมรดกโลก 2026',
		f: 'place'
	},
	{
		q: 'แหล่งมรดกโลกใหม่ 25 แห่งที่ยูเนสโกรับรองในปี 2026 แบ่งเป็นแหล่งวัฒนธรรมกี่แห่ง?',
		c: ['19 แห่ง', '15 แห่ง', '20 แห่ง', '5 แห่ง'],
		a: '19 แห่ง',
		aliases: ['19'],
		e: 'มีแหล่งวัฒนธรรม 19 แห่ง ธรรมชาติ 5 แห่ง และแบบผสม 1 แห่ง',
		t: ['UNESCO', 'มรดกโลก'],
		s: 'unesco',
		k: 'จำนวนแหล่งวัฒนธรรมใหม่ UNESCO 2026',
		f: 'number'
	},
	{
		q: 'ยูเนสโกขึ้นทะเบียนแหล่งมรดกโลกทางธรรมชาติใหม่กี่แห่งในการประชุมปี 2026?',
		c: ['5 แห่ง', '1 แห่ง', '6 แห่ง', '19 แห่ง'],
		a: '5 แห่ง',
		aliases: ['5'],
		e: 'จาก 25 แห่งใหม่ มีแหล่งธรรมชาติ 5 แห่ง',
		t: ['UNESCO', 'ธรรมชาติ'],
		s: 'unesco',
		k: 'จำนวนแหล่งธรรมชาติใหม่ UNESCO 2026',
		f: 'number'
	},
	{
		q: 'ในบรรดาแหล่งมรดกโลกใหม่ปี 2026 มีกี่แห่งที่จัดเป็นแหล่งมรดกแบบผสม?',
		c: ['1 แห่ง', '2 แห่ง', '5 แห่ง', 'ไม่มี'],
		a: '1 แห่ง',
		aliases: ['1'],
		e: 'มีแหล่งแบบผสมหนึ่งแห่งในรายชื่อใหม่',
		t: ['UNESCO', 'มรดกโลก'],
		s: 'unesco',
		k: 'จำนวนแหล่งมรดกแบบผสมใหม่ UNESCO 2026',
		f: 'number'
	},
	{
		q: 'ประเทศแอฟริกาใดต่อไปนี้ได้มีแหล่งมรดกโลกแห่งแรกของประเทศในปี 2026?',
		c: ['ซูดานใต้', 'เคนยา', 'อียิปต์', 'โมร็อกโก'],
		a: 'ซูดานใต้',
		aliases: ['South Sudan'],
		e: 'ซูดานใต้เป็นหนึ่งในสามประเทศที่เข้าสู่บัญชีมรดกโลกเป็นครั้งแรก',
		t: ['UNESCO', 'แอฟริกา'],
		s: 'unesco',
		k: 'ประเทศที่มีมรดกโลกแห่งแรกในปี 2026',
		f: 'place'
	},
	{
		q: 'ประเทศหมู่เกาะใดเป็นหนึ่งในสามชาติที่มีแหล่งมรดกโลกแห่งแรกในปี 2026?',
		c: ['คอโมโรส', 'มอริเชียส', 'เซเชลส์', 'มาดากัสการ์'],
		a: 'คอโมโรส',
		aliases: ['Comoros'],
		e: 'คอโมโรสมีแหล่งมรดกโลกแห่งแรกจากการประชุมปี 2026',
		t: ['UNESCO', 'แอฟริกา'],
		s: 'unesco',
		k: 'คอโมโรสเข้าสู่บัญชีมรดกโลก',
		f: 'place'
	},
	{
		q: 'ชาติใดในอ่าวกินีมีแหล่งมรดกโลกแห่งแรกของตนจากการขึ้นทะเบียนของยูเนสโกปี 2026?',
		c: ['เซาตูเมและปรินซิปี', 'กาบอง', 'แคเมอรูน', 'อิเควทอเรียลกินี'],
		a: 'เซาตูเมและปรินซิปี',
		aliases: ['São Tomé and Príncipe', 'Sao Tome and Principe'],
		e: 'เซาตูเมและปรินซิปีเป็นหนึ่งในสามชาติที่เข้าสู่บัญชีครั้งแรก',
		t: ['UNESCO', 'แอฟริกา'],
		s: 'unesco',
		k: 'เซาตูเมและปรินซิปีเข้าสู่บัญชีมรดกโลก',
		f: 'place'
	},
	{
		q: 'พุทธสถานโบราณใดในรัฐอุตตรประเทศได้รับขึ้นทะเบียนมรดกโลกในเดือนกรกฎาคม 2026?',
		c: ['สารนาถ', 'พุทธคยา', 'นาลันทา', 'กุสินารา'],
		a: 'สารนาถ',
		aliases: ['Sarnath'],
		e: 'Ancient Buddhist Site, Sarnath ได้รับขึ้นทะเบียนในการประชุมครั้งที่ 48',
		t: ['UNESCO', 'พุทธศาสนา'],
		s: 'sarnath',
		k: 'สารนาถขึ้นทะเบียนมรดกโลกปี 2026',
		f: 'place'
	},
	{
		q: 'หลังสารนาถได้รับการรับรองในปี 2026 อินเดียมีแหล่งมรดกโลกทั้งหมดกี่แห่ง?',
		c: ['45 แห่ง', '40 แห่ง', '48 แห่ง', '50 แห่ง'],
		a: '45 แห่ง',
		aliases: ['45'],
		e: 'สารนาถกลายเป็นแหล่งมรดกโลกลำดับที่ 45 ของอินเดีย',
		t: ['UNESCO', 'อินเดีย'],
		s: 'sarnath',
		k: 'จำนวนมรดกโลกของอินเดียหลังสารนาถ',
		f: 'number'
	},

	{
		q: 'กล้องโทรทรรศน์อวกาศรุ่นใหม่ของ NASA ที่ปล่อยขึ้นสู่อวกาศเมื่อ 30 สิงหาคม 2026 มีชื่อว่าอะไร?',
		c: ['Nancy Grace Roman', 'James Webb', 'Euclid', 'Chandra'],
		a: 'Nancy Grace Roman',
		aliases: ['Roman Space Telescope', 'กล้องโทรทรรศน์อวกาศโรมัน'],
		e: 'NASA ปล่อย Nancy Grace Roman Space Telescope เมื่อ 30 สิงหาคม 2026',
		t: ['NASA', 'อวกาศ'],
		s: 'roman',
		k: 'กล้องอวกาศที่ปล่อยในปี 2026',
		f: 'work'
	},
	{
		q: 'กล้อง Nancy Grace Roman ที่ปล่อยในปี 2026 ตั้งชื่อตามนักดาราศาสตร์หญิงผู้มีฉายาใด?',
		c: ['มารดาแห่งกล้องฮับเบิล', 'มารดาแห่งยานอะพอลโล', 'ราชินีแห่งดาวหาง', 'ผู้ค้นพบพัลซาร์'],
		a: 'มารดาแห่งกล้องฮับเบิล',
		aliases: ['Mother of Hubble'],
		e: 'Nancy Grace Roman เป็นหัวหน้าดาราศาสตร์คนแรกของ NASA และได้รับฉายา Mother of Hubble',
		t: ['NASA', 'นักดาราศาสตร์'],
		s: 'roman',
		k: 'ที่มาชื่อกล้อง Roman',
		f: 'term'
	},
	{
		q: 'จรวดชนิดใดใช้ส่งกล้องโทรทรรศน์อวกาศ Roman ของ NASA ในเดือนสิงหาคม 2026?',
		c: ['Falcon Heavy', 'SLS', 'Atlas V', 'Ariane 6'],
		a: 'Falcon Heavy',
		e: 'Roman เดินทางขึ้นสู่อวกาศด้วยจรวด SpaceX Falcon Heavy',
		t: ['NASA', 'จรวด'],
		s: 'romanTech',
		k: 'จรวดส่งกล้อง Roman',
		f: 'term'
	},
	{
		q: 'กล้องโทรทรรศน์อวกาศ Roman มุ่งหน้าไปโคจรใกล้จุดลากร็องจ์ใดของระบบดวงอาทิตย์-โลก?',
		c: ['L2', 'L1', 'L4', 'L5'],
		a: 'L2',
		e: 'Roman จะทำงานใกล้จุด Sun-Earth L2 ห่างโลกราว 1.5 ล้านกิโลเมตร',
		t: ['NASA', 'วงโคจร'],
		s: 'romanTech',
		k: 'วงโคจรของกล้อง Roman',
		f: 'place'
	},
	{
		q: 'ภารกิจ Roman จะศึกษาปริศนาจักรวาลสำคัญใดควบคู่กับดาวเคราะห์นอกระบบ?',
		c: ['สสารมืดและพลังงานมืด', 'หลุมโอโซน', 'กระแสน้ำมหาสมุทร', 'สนามแม่เหล็กโลก'],
		a: 'สสารมืดและพลังงานมืด',
		e: 'เป้าหมายหลักรวมถึง dark matter, dark energy และ exoplanets',
		t: ['NASA', 'จักรวาลวิทยา'],
		s: 'roman',
		k: 'เป้าหมายวิทยาศาสตร์ของ Roman',
		f: 'term'
	},
	{
		q: 'มุมมองท้องฟ้าของกล้อง Roman กว้างกว่ากล้อง Hubble อย่างน้อยประมาณกี่เท่า?',
		c: ['100 เท่า', '10 เท่า', '50 เท่า', '1,000 เท่า'],
		a: '100 เท่า',
		aliases: ['100'],
		e: 'NASA ระบุว่า Roman มี field of view อย่างน้อย 100 เท่าของ Hubble',
		t: ['NASA', 'กล้องโทรทรรศน์'],
		s: 'roman',
		k: 'ขนาดมุมมองของ Roman เทียบ Hubble',
		f: 'number'
	},
	{
		q: 'เครื่องมือหลักของ Roman ที่สำรวจท้องฟ้าบริเวณกว้างเรียกว่าอะไร?',
		c: [
			'Wide Field Instrument',
			'Near Infrared Camera',
			'Cosmic Origins Spectrograph',
			'Advanced Camera for Surveys'
		],
		a: 'Wide Field Instrument',
		aliases: ['WFI'],
		e: 'หนึ่งในสองเครื่องมือวิทยาศาสตร์คือ Wide Field Instrument',
		t: ['NASA', 'เครื่องมือวิทยาศาสตร์'],
		s: 'roman',
		k: 'เครื่องมือสำรวจมุมกว้างของ Roman',
		f: 'term'
	},
	{
		q: 'เครื่องมือใดของ Roman ใช้สาธิตการบังแสงดาวเพื่อถ่ายภาพดาวเคราะห์นอกระบบ?',
		c: ['Coronagraph Instrument', 'Wide Field Instrument', 'Radar Mapper', 'Ultraviolet Imager'],
		a: 'Coronagraph Instrument',
		aliases: ['Coronagraph'],
		e: 'Coronagraph Instrument เป็นเทคโนโลยีสาธิตสำหรับมองดาวเคราะห์ข้างดาวฤกษ์',
		t: ['NASA', 'ดาวเคราะห์นอกระบบ'],
		s: 'roman',
		k: 'เครื่องมือถ่ายภาพดาวเคราะห์ของ Roman',
		f: 'term'
	},
	{
		q: 'กระจกหลักของกล้องโทรทรรศน์อวกาศ Roman มีเส้นผ่านศูนย์กลางเท่าใด?',
		c: ['2.4 เมตร', '1.2 เมตร', '4.8 เมตร', '6.5 เมตร'],
		a: '2.4 เมตร',
		aliases: ['2.4m', '2.4'],
		e: 'กระจกหลักของ Roman กว้าง 2.4 เมตร ใกล้เคียง Hubble',
		t: ['NASA', 'กล้องโทรทรรศน์'],
		s: 'romanTech',
		k: 'ขนาดกระจก Roman',
		f: 'number'
	},
	{
		q: 'กล้อง Roman ตรวจจับแสงในย่านใดเป็นหลักเพื่อมองผ่านฝุ่นและสำรวจเอกภพ?',
		c: ['อินฟราเรด', 'รังสีแกมมา', 'คลื่นวิทยุ', 'รังสีเอกซ์'],
		a: 'อินฟราเรด',
		aliases: ['Infrared'],
		e: 'Roman เป็นหอดูดาวสำรวจย่านใกล้อินฟราเรด',
		t: ['NASA', 'ดาราศาสตร์'],
		s: 'romanTech',
		k: 'ช่วงคลื่นของ Roman',
		f: 'term'
	},
	{
		q: 'NASA ตั้งเป้าระยะเวลาภารกิจพื้นฐานของกล้อง Roman ไว้ประมาณกี่ปี?',
		c: ['5 ปี', '2 ปี', '10 ปี', '20 ปี'],
		a: '5 ปี',
		aliases: ['5'],
		e: 'ภารกิจพื้นฐานประมาณห้าปี โดยมีเป้าหมายใช้งานถึงสิบปี',
		t: ['NASA', 'ภารกิจอวกาศ'],
		s: 'romanTech',
		k: 'ระยะเวลาภารกิจ Roman',
		f: 'number'
	},
	{
		q: 'กล้อง Roman ถูกปล่อยจากฐานปล่อยใดที่ Kennedy Space Center ในปี 2026?',
		c: ['Launch Complex 39A', 'Launch Complex 41', 'Launch Complex 40', 'Launch Complex 6'],
		a: 'Launch Complex 39A',
		aliases: ['LC-39A', '39A'],
		e: 'Falcon Heavy นำ Roman ขึ้นจาก Launch Complex 39A',
		t: ['NASA', 'ฐานปล่อย'],
		s: 'romanTech',
		k: 'ฐานปล่อยกล้อง Roman',
		f: 'place'
	},

	{
		q: 'นักดาราศาสตร์รายงานในปี 2026 ว่าพบฮีเลียมกำลังหลุดออกจากบรรยากาศของดาวเคราะห์หินดวงใด?',
		c: ['LHS 1140b', 'Proxima b', 'TRAPPIST-1e', 'K2-18b'],
		a: 'LHS 1140b',
		e: 'การตรวจพบฮีเลียมสนับสนุนว่า LHS 1140b น่าจะมีบรรยากาศ',
		t: ['การค้นพบ', 'ดาวเคราะห์นอกระบบ'],
		s: 'lhs1140',
		k: 'บรรยากาศของ LHS 1140b',
		f: 'work'
	},
	{
		q: 'ดาวเคราะห์ LHS 1140b ซึ่งมีข่าวการตรวจพบบรรยากาศในปี 2026 โคจรอยู่ในบริเวณใดของดาวฤกษ์?',
		c: ['เขตเอื้ออาศัย', 'นอกกาแล็กซี', 'แถบดาวเคราะห์น้อย', 'ขอบฟ้าเหตุการณ์'],
		a: 'เขตเอื้ออาศัย',
		aliases: ['habitable zone'],
		e: 'LHS 1140b โคจรใน habitable zone ของดาวแม่',
		t: ['การค้นพบ', 'ชีวดาราศาสตร์'],
		s: 'lhs1140',
		k: 'ตำแหน่งวงโคจร LHS 1140b',
		f: 'term'
	},
	{
		q: 'วัตถุ CD-35 2722 B ที่มีหลักฐานดาวบริวารนอกระบบในปี 2026 เป็นวัตถุชนิดใด?',
		c: ['ดาวแคระน้ำตาล', 'ดาวนิวตรอน', 'ดาวหาง', 'หลุมดำ'],
		a: 'ดาวแคระน้ำตาล',
		aliases: ['brown dwarf'],
		e: 'CD-35 2722 B เป็น brown dwarf companion ที่มีสัญญาณวัตถุโคจรรอบ',
		t: ['การค้นพบ', 'ดาราศาสตร์'],
		s: 'exosatellite',
		k: 'ชนิดวัตถุ CD-35 2722 B',
		f: 'term'
	},
	{
		q: 'หลักฐานดาวบริวารรอบ CD-35 2722 B ที่รายงานในปี 2026 ตรวจพบด้วยเทคนิคใด?',
		c: ['ความเร็วแนวเล็ง', 'ทรานซิต', 'เลนส์ความโน้มถ่วง', 'เรดาร์'],
		a: 'ความเร็วแนวเล็ง',
		aliases: ['radial velocity'],
		e: 'ทีมวิจัยวิเคราะห์สัญญาณ radial velocity จากสเปกตรัม VLT/CRIRES+',
		t: ['การค้นพบ', 'เทคนิคดาราศาสตร์'],
		s: 'exosatellite',
		k: 'วิธีตรวจพบ exosatellite',
		f: 'term'
	},
	{
		q: 'ดาวบริวารนอกระบบรอบ CD-35 2722 B ที่รายงานในปี 2026 มีมวลขั้นต่ำราวเท่าใด?',
		c: ['0.9 เท่าของดาวพฤหัสบดี', '0.9 เท่าของโลก', '9 เท่าของดวงอาทิตย์', '90 เท่าของดวงจันทร์'],
		a: '0.9 เท่าของดาวพฤหัสบดี',
		aliases: ['0.9 Jupiter masses'],
		e: 'แบบจำลองดีที่สุดให้มวลขั้นต่ำประมาณ 0.9 เท่าของดาวพฤหัสบดี',
		d: 'hard',
		t: ['การค้นพบ', 'ดาราศาสตร์'],
		s: 'exosatellite',
		k: 'มวล exosatellite รอบ CD-35 2722 B',
		f: 'number'
	},
	{
		q: 'ดาวบริวารนอกระบบรอบ CD-35 2722 B มีคาบโคจรที่รายงานในปี 2026 ราวกี่วัน?',
		c: ['170 วัน', '17 วัน', '70 วัน', '365 วัน'],
		a: '170 วัน',
		aliases: ['170'],
		e: 'แบบจำลองประมาณคาบโคจรราว 170 วัน',
		d: 'hard',
		t: ['การค้นพบ', 'ดาราศาสตร์'],
		s: 'exosatellite',
		k: 'คาบโคจร exosatellite',
		f: 'number'
	},
	{
		q: 'งานวิจัยปี 2026 ใช้แมชชีนเลิร์นนิงกับข้อมูลจากภารกิจใดและยืนยันดาวเคราะห์นอกระบบใหม่ 118 ดวง?',
		c: ['TESS', 'Voyager 1', 'Cassini', 'Juno'],
		a: 'TESS',
		e: 'นักวิจัยใช้แมชชีนเลิร์นนิงกับข้อมูล Transiting Exoplanet Survey Satellite',
		t: ['การค้นพบ', 'แมชชีนเลิร์นนิง'],
		s: 'exoplanets',
		k: 'ภารกิจต้นทางข้อมูลดาวเคราะห์ 118 ดวง',
		f: 'work'
	},

	{
		q: 'กีฬาโอลิมปิกฤดูหนาว 2026 จัดขึ้นภายใต้ชื่อเจ้าภาพใด?',
		c: ['Milano Cortina', 'Oslo Lillehammer', 'Sapporo Niseko', 'Calgary Banff'],
		a: 'Milano Cortina',
		aliases: ['มิลาน-กอร์ตีนา', 'มิลาน คอร์ตีนา'],
		e: 'อิตาลีจัดการแข่งขันภายใต้ชื่อ Milano Cortina 2026',
		t: ['โอลิมปิก', 'กีฬา'],
		s: 'olympics',
		k: 'ชื่อเจ้าภาพโอลิมปิกฤดูหนาว 2026',
		f: 'place'
	},
	{
		q: 'ประเทศใดเป็นเจ้าภาพการแข่งขันกีฬาโอลิมปิกฤดูหนาว 2026?',
		c: ['อิตาลี', 'ฝรั่งเศส', 'สวิตเซอร์แลนด์', 'ออสเตรีย'],
		a: 'อิตาลี',
		aliases: ['Italy'],
		e: 'มิลานและกอร์ตีนาดัมเปซโซอยู่ในอิตาลี',
		t: ['โอลิมปิก', 'เจ้าภาพ'],
		s: 'olympics',
		k: 'ประเทศเจ้าภาพโอลิมปิกฤดูหนาว 2026',
		f: 'place'
	},
	{
		q: 'กีฬาใดเปิดตัวเป็นครั้งแรกในโอลิมปิกฤดูหนาว Milano Cortina 2026?',
		c: ['สกีภูเขา', 'เคอร์ลิง', 'สโนว์บอร์ด', 'สเกตลีลา'],
		a: 'สกีภูเขา',
		aliases: ['Ski mountaineering', 'สกีเมาน์เทนเนียริง'],
		e: 'Ski mountaineering เป็นกีฬาที่เปิดตัวในโอลิมปิกฤดูหนาวปี 2026',
		t: ['โอลิมปิก', 'กีฬาใหม่'],
		s: 'olympics',
		k: 'กีฬาเปิดตัวในโอลิมปิกฤดูหนาว 2026',
		f: 'term'
	},
	{
		q: 'โอลิมปิกฤดูหนาว Milano Cortina 2026 มีรายการชิงเหรียญทองทั้งหมดกี่รายการ?',
		c: ['116 รายการ', '100 รายการ', '109 รายการ', '125 รายการ'],
		a: '116 รายการ',
		aliases: ['116'],
		e: 'คู่มือนักกีฬาระบุการแข่งขันชิงเหรียญ 116 รายการ',
		t: ['โอลิมปิก', 'สถิติ'],
		s: 'olympics',
		k: 'จำนวนรายการเหรียญโอลิมปิกฤดูหนาว 2026',
		f: 'number'
	},
	{
		q: 'พิธีเปิดโอลิมปิกฤดูหนาว Milano Cortina 2026 จัดขึ้นในวันที่ใด?',
		c: ['6 กุมภาพันธ์ 2026', '1 กุมภาพันธ์ 2026', '15 มีนาคม 2026', '6 มีนาคม 2026'],
		a: '6 กุมภาพันธ์ 2026',
		aliases: ['6 กุมภาพันธ์'],
		e: 'การแข่งขันโอลิมปิกฤดูหนาวเปิดอย่างเป็นทางการวันที่ 6 กุมภาพันธ์',
		t: ['โอลิมปิก', 'วันที่'],
		s: 'olympicDates',
		k: 'วันเปิดโอลิมปิกฤดูหนาว 2026',
		f: 'date'
	},
	{
		q: 'โอลิมปิกฤดูหนาว Milano Cortina 2026 ปิดการแข่งขันในวันที่ใด?',
		c: ['22 กุมภาพันธ์ 2026', '17 กุมภาพันธ์ 2026', '28 กุมภาพันธ์ 2026', '6 มีนาคม 2026'],
		a: '22 กุมภาพันธ์ 2026',
		aliases: ['22 กุมภาพันธ์'],
		e: 'มหกรรมโอลิมปิกฤดูหนาวจัดระหว่าง 6-22 กุมภาพันธ์ 2026',
		t: ['โอลิมปิก', 'วันที่'],
		s: 'olympicDates',
		k: 'วันปิดโอลิมปิกฤดูหนาว 2026',
		f: 'date'
	},

	{
		q: 'นักการเมืองหญิงคนใดได้รับเลือกเป็นประธานาธิบดีคอสตาริกาในการเลือกตั้งเดือนกุมภาพันธ์ 2026?',
		c: ['Laura Fernández Delgado', 'Keiko Fujimori', 'Claudia Sheinbaum', 'Xiomara Castro'],
		a: 'Laura Fernández Delgado',
		aliases: ['Laura Fernández', 'ลอรา เฟร์นันเดซ'],
		e: 'Laura Fernández Delgado ชนะการเลือกตั้งทั่วไปของคอสตาริกา',
		t: ['ข่าวโลก', 'การเลือกตั้ง'],
		s: 'costaRica',
		k: 'ผู้ชนะเลือกตั้งคอสตาริกา 2026',
		f: 'person'
	},
	{
		q: 'สนธิสัญญาควบคุมอาวุธนิวเคลียร์ใดระหว่างสหรัฐฯ กับรัสเซียหมดอายุเมื่อ 5 กุมภาพันธ์ 2026?',
		c: ['New START', 'NATO', 'Paris Agreement', 'Open Skies 2'],
		a: 'New START',
		e: 'New START ซึ่งจำกัดอาวุธนิวเคลียร์เชิงยุทธศาสตร์หมดอายุในวันดังกล่าว',
		t: ['ข่าวโลก', 'ความมั่นคง'],
		s: 'newStart',
		k: 'สนธิสัญญาที่หมดอายุในปี 2026',
		f: 'work'
	},
	{
		q: 'ชาติใดคว้าแชมป์คริกเก็ตชาย T20 World Cup 2026 และเป็นแชมป์สมัยที่สาม?',
		c: ['อินเดีย', 'นิวซีแลนด์', 'ออสเตรเลีย', 'อังกฤษ'],
		a: 'อินเดีย',
		aliases: ['India'],
		e: 'อินเดียชนะนิวซีแลนด์ในรอบชิงและคว้าแชมป์สมัยที่สาม',
		t: ['คริกเก็ต', 'ข่าวกีฬา'],
		s: 'cricket',
		k: 'แชมป์ T20 World Cup 2026',
		f: 'place'
	},
	{
		q: 'อินเดียเอาชนะชาติใดในรอบชิงคริกเก็ตชาย T20 World Cup 2026?',
		c: ['นิวซีแลนด์', 'ศรีลังกา', 'ปากีสถาน', 'แอฟริกาใต้'],
		a: 'นิวซีแลนด์',
		aliases: ['New Zealand'],
		e: 'คู่ชิงคืออินเดียกับนิวซีแลนด์',
		t: ['คริกเก็ต', 'ข่าวกีฬา'],
		s: 'cricket',
		k: 'รองแชมป์ T20 World Cup 2026',
		f: 'place'
	},
	{
		q: 'พรรคใดที่นำโดย Balen Shah ชนะอย่างถล่มทลายในการเลือกตั้งทั่วไปเนปาลปี 2026?',
		c: ['Rastriya Swatantra Party', 'Nepali Congress', 'CPN-UML', 'Maoist Centre'],
		a: 'Rastriya Swatantra Party',
		aliases: ['RSP'],
		e: 'Rastriya Swatantra Party ชนะการเลือกตั้งโดยมี Balen Shah เป็นผู้นำ',
		t: ['ข่าวโลก', 'การเลือกตั้ง'],
		s: 'nepal',
		k: 'พรรคชนะเลือกตั้งเนปาล 2026',
		f: 'work'
	},
	{
		q: 'ใครเข้ารับตำแหน่งประธานาธิบดีชิลีเมื่อ 11 มีนาคม 2026 หลังชนะเลือกตั้งแบบถล่มทลาย?',
		c: ['José Antonio Kast', 'Gabriel Boric', 'Javier Milei', 'Daniel Noboa'],
		a: 'José Antonio Kast',
		aliases: ['โฮเซ อันโตนิโอ คาสต์'],
		e: 'José Antonio Kast สาบานตนรับตำแหน่งที่ Valparaíso',
		t: ['ข่าวโลก', 'การเมือง'],
		s: 'chile',
		k: 'ประธานาธิบดีชิลีที่รับตำแหน่งปี 2026',
		f: 'person'
	},
	{
		q: 'นักการเมืองคนใดชนะการเลือกตั้งประธานาธิบดีเปรูรอบสองในปี 2026?',
		c: ['Keiko Fujimori', 'Roberto Sánchez', 'Dina Boluarte', 'Rafael López Aliaga'],
		a: 'Keiko Fujimori',
		aliases: ['เคโกะ ฟูจิโมริ'],
		e: 'Keiko Fujimori ได้รับการรับรองเป็นผู้ชนะในเดือนกรกฎาคม',
		t: ['ข่าวโลก', 'การเลือกตั้ง'],
		s: 'peru',
		k: 'ผู้ชนะเลือกตั้งเปรู 2026',
		f: 'person'
	},
	{
		q: 'การชนะเลือกตั้งประธานาธิบดีเปรูปี 2026 เป็นการลงสมัครชิงตำแหน่งครั้งที่เท่าไรของ Keiko Fujimori?',
		c: ['ครั้งที่ 4', 'ครั้งแรก', 'ครั้งที่ 2', 'ครั้งที่ 3'],
		a: 'ครั้งที่ 4',
		aliases: ['4'],
		e: 'AP รายงานว่า Fujimori ลงสมัครชิงตำแหน่งประธานาธิบดีเป็นครั้งที่สี่',
		t: ['ข่าวโลก', 'การเลือกตั้ง'],
		s: 'peru',
		k: 'จำนวนครั้งที่ Fujimori ลงสมัคร',
		f: 'number'
	},
	{
		q: 'เมืองใดในสวิตเซอร์แลนด์เป็นสถานที่จัดประชุม World Economic Forum ซึ่งผู้นำเศรษฐกิจโลกหารือกันในเดือนมกราคม 2026?',
		c: ['ดาวอส', 'ซูริก', 'เจนีวา', 'บาเซิล'],
		a: 'ดาวอส',
		aliases: ['Davos'],
		e: 'การประชุม World Economic Forum ประจำปีจัดที่ดาวอส',
		t: ['ข่าวโลก', 'เศรษฐกิจ'],
		s: 'davos',
		k: 'สถานที่ประชุม WEF 2026',
		f: 'place'
	}
];

export const YEAR_2026_QUESTIONS: ThaiQuizItem[] = ENTRIES.map((entry, index) => {
	const correctIndex = entry.c.indexOf(entry.a);
	if (correctIndex < 0) throw new Error(`Missing correct choice for 2026 question ${index + 1}`);
	const [sourceUrl, sourceTitle] = SOURCES[entry.s];
	return {
		id: 1301 + index,
		category: 'year_2026',
		question: entry.q,
		choices: entry.c,
		correctIndex: correctIndex as 0 | 1 | 2 | 3,
		acceptableAnswers: [entry.a, ...(entry.aliases ?? [])],
		explanation: entry.e,
		difficulty: entry.d ?? 'normal',
		tags: ['2026', ...entry.t],
		provenance: {
			sourceUrl,
			sourceTitle,
			factCheckedAt: '2026-08-31',
			reviewAfter: '2027-01-31'
		},
		blueprint: {
			skill: 'recall',
			knowledgePoint: entry.k,
			answerForm: entry.f
		},
		quality: {
			reviewStatus: 'approved',
			reviewedAt: '2026-08-31',
			reviewerNote: 'ตรวจสอบกับแหล่งข้อมูลที่ระบุ ณ วันที่ 31 สิงหาคม 2026'
		}
	};
});
