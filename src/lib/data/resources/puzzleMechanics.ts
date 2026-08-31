export interface PuzzleMechanic {
	id: string;
	englishTitle: string;
	thaiTitle: string;
	japaneseTitle: string;
	description: string;
}

export interface PuzzleMechanicChapter {
	id: string;
	englishTitle: string;
	thaiTitle: string;
	japaneseTitle: string;
	accent: string;
	mechanics: PuzzleMechanic[];
}

export const PUZZLE_MECHANIC_CHAPTERS: PuzzleMechanicChapter[] = [
	{
		id: 'basics',
		englishTitle: 'Puzzle-Solving Basics',
		thaiTitle: 'พื้นฐานการไขปริศนา',
		japaneseTitle: '謎解きの基本',
		accent: 'badge-primary',
		mechanics: [
			{
				id: 'answer-the-question-mark',
				englishTitle: 'Answer the Question Mark',
				thaiTitle: 'หาคำตอบแทนเครื่องหมายคำถาม',
				japaneseTitle: '？を答える',
				description:
					'พิจารณารูปแบบหรือความสัมพันธ์รอบเครื่องหมายคำถาม แล้วหาสิ่งที่ควรอยู่ในตำแหน่งนั้น'
			},
			{
				id: 'read-in-number-order',
				englishTitle: 'Read in Number Order',
				thaiTitle: 'อ่านตามลำดับตัวเลข',
				japaneseTitle: '数字順に読む',
				description: 'เรียงตัวอักษรหรือชิ้นส่วนตามหมายเลขกำกับก่อนอ่านเป็นข้อความหรือคำตอบ'
			},
			{
				id: 'follow-the-arrows',
				englishTitle: 'Follow the Arrows',
				thaiTitle: 'อ่านตามลูกศร',
				japaneseTitle: '矢印を読む',
				description: 'ใช้ทิศทางหรือลำดับของลูกศรเป็นเส้นทางในการเลือกและอ่านข้อมูล'
			},
			{
				id: 'small-letters',
				englishTitle: 'Small Letters',
				thaiTitle: 'สังเกตตัวอักษรขนาดเล็ก',
				japaneseTitle: '小さい文字',
				description: 'แยกตัวอักษรที่เล็กกว่าส่วนอื่นออกมา หรือใช้ความต่างของขนาดเป็นเบาะแส'
			},
			{
				id: 'add-dakuten',
				englishTitle: 'Add Dakuten',
				thaiTitle: 'เติมเครื่องหมายเสียงขุ่น',
				japaneseTitle: '濁点を付ける',
				description:
					'เติมเครื่องหมาย dakuten ให้คานะเพื่อเปลี่ยนเสียงและสร้างคำใหม่ เช่น か เป็น が'
			},
			{
				id: 'matching-symbols-and-numbers',
				englishTitle: 'Matching Symbols and Numbers',
				thaiTitle: 'จับคู่สัญลักษณ์หรือตัวเลขที่เหมือนกัน',
				japaneseTitle: '同じ記号や数字',
				description: 'สิ่งที่มีสัญลักษณ์หรือตัวเลขเดียวกันถือว่าเชื่อมโยงกันและใช้จับคู่ข้อมูล'
			},
			{
				id: 'pictures-to-words',
				englishTitle: 'Turn Pictures into Words',
				thaiTitle: 'แปลงภาพเป็นคำ',
				japaneseTitle: 'イラストを言葉に',
				description: 'เรียกชื่อสิ่งที่เห็นในภาพ แล้วนำคำหรือเสียงอ่านนั้นไปใช้แก้โจทย์ต่อ'
			},
			{
				id: 'fill-in-the-blanks',
				englishTitle: 'Fill in the Blanks',
				thaiTitle: 'เติมคำในช่องว่าง',
				japaneseTitle: '穴埋め',
				description: 'เติมตัวอักษร คำ หรือตัวเลขที่ขาดหายโดยอาศัยบริบทและรูปแบบที่กำหนด'
			},
			{
				id: 'pattern-rules',
				englishTitle: 'Pattern Rules',
				thaiTitle: 'ค้นหากฎของรูปแบบ',
				japaneseTitle: '法則問題',
				description: 'หากฎร่วมของตัวอย่างหลายชุด แล้วนำกฎนั้นไปคำนวณหรือเติมคำตอบ'
			},
			{
				id: 'find-it',
				englishTitle: 'Find It',
				thaiTitle: 'ค้นหาสิ่งที่ซ่อนอยู่',
				japaneseTitle: '見つける',
				description: 'มองหาตัวอักษร รูป หรือรายละเอียดเป้าหมายที่แฝงอยู่ในข้อมูลจำนวนมาก'
			},
			{
				id: 'reading-instructions',
				englishTitle: 'Reading Instructions',
				thaiTitle: 'ทำตามคำสั่งการอ่าน',
				japaneseTitle: '読み方指示',
				description:
					'อ่านข้อความตามคำสั่งที่โจทย์ระบุ เช่น อ่านเฉพาะสีหนึ่ง อ่านข้าม หรือเริ่มจากจุดกำหนด'
			},
			{
				id: 'vertical-horizontal-reading',
				englishTitle: 'Vertical and Horizontal Reading',
				thaiTitle: 'อ่านแนวตั้งและแนวนอน',
				japaneseTitle: '縦読み／横読み',
				description: 'เปลี่ยนแนวการอ่านระหว่างแถวกับคอลัมน์เพื่อค้นหาข้อความที่ซ่อนอยู่'
			},
			{
				id: 'read-between',
				englishTitle: 'Read Between',
				thaiTitle: 'อ่านสิ่งที่อยู่ระหว่างกลาง',
				japaneseTitle: '間を読む',
				description: 'เลือกตัวอักษร ช่องว่าง หรือองค์ประกอบที่อยู่ระหว่างสิ่งสองสิ่งตามเบาะแส'
			},
			{
				id: 'correspondence-table',
				englishTitle: 'Correspondence Table',
				thaiTitle: 'ใช้ตารางจับคู่',
				japaneseTitle: '対応表',
				description: 'อ้างอิงตารางที่กำหนดความสัมพันธ์ระหว่างสัญลักษณ์ ตัวอักษร ตัวเลข หรือความหมาย'
			},
			{
				id: 'use-the-question-text',
				englishTitle: 'Use the Question Text',
				thaiTitle: 'ใช้ข้อความโจทย์เป็นส่วนหนึ่งของคำตอบ',
				japaneseTitle: '問題文を利用',
				description:
					'อ่านข้อความโจทย์อย่างละเอียด เพราะคำ สัญลักษณ์ หรือตำแหน่งในประโยคอาจเป็นวัตถุดิบของกลไก'
			}
		]
	},
	{
		id: 'wordplay',
		englishTitle: 'Wordplay',
		thaiTitle: 'การเล่นคำ',
		japaneseTitle: '言葉遊び',
		accent: 'badge-secondary',
		mechanics: [
			{
				id: 'tanuki-removal',
				englishTitle: 'Tanuki Removal',
				thaiTitle: 'ตัดตัวอักษรตามคำใบ้',
				japaneseTitle: 'たぬき問題',
				description:
					'ใช้ภาพหรือคำว่า たぬき เป็นนัยว่า “เอา た ออก” หรือประยุกต์ให้ลบตัวอักษรที่ระบุออกจากข้อความ'
			},
			{
				id: 'megane-replacement',
				englishTitle: 'Megane Replacement',
				thaiTitle: 'แทนที่ตัวอักษรตามคำใบ้',
				japaneseTitle: 'めがね問題',
				description:
					'ใช้คำอย่าง めがね เป็นคำสั่งให้เปลี่ยน め เป็น ね หรือแทนที่อักษรหนึ่งด้วยอีกอักษรหนึ่ง'
			},
			{
				id: 'nth-letter',
				englishTitle: 'Nth Letter',
				thaiTitle: 'เลือกตัวอักษรลำดับที่กำหนด',
				japaneseTitle: '何文字目？',
				description: 'นับตำแหน่งตัวอักษรในแต่ละคำแล้วหยิบลำดับที่โจทย์กำหนดมาต่อกัน'
			},
			{
				id: 'english-japanese-conversion',
				englishTitle: 'English–Japanese Conversion',
				thaiTitle: 'แปลงระหว่างภาษาอังกฤษกับภาษาญี่ปุ่น',
				japaneseTitle: '英語／日本語変換',
				description: 'แปลคำหรือสลับภาษาเพื่อให้ได้คำที่สามารถนำไปเข้ากลไกขั้นถัดไป'
			},
			{
				id: 'script-conversion',
				englishTitle: 'Script Conversion',
				thaiTitle: 'แปลงชนิดตัวอักษร',
				japaneseTitle: '文字種変換',
				description:
					'เปลี่ยนระบบอักษร เช่น ฮิรางานะ คาตากานะ คันจิ หรือตัวละติน โดยคงเสียงหรือความหมายเดิม'
			},
			{
				id: 'romaji-conversion',
				englishTitle: 'Romaji Conversion',
				thaiTitle: 'แปลงเป็นหรือจากโรมาจิ',
				japaneseTitle: 'ローマ字変換',
				description: 'เขียนเสียงภาษาญี่ปุ่นด้วยตัวอักษรโรมัน หรือแปลงโรมาจิกลับเป็นคานะ'
			},
			{
				id: 'symbol-letter-conversion',
				englishTitle: 'Symbol–Letter Conversion',
				thaiTitle: 'แปลงสัญลักษณ์เป็นตัวอักษร',
				japaneseTitle: '記号文字変換',
				description:
					'ตีความเครื่องหมาย ไอคอน หรือรูปทรงให้เป็นตัวอักษรตามรูปร่าง ชื่อ หรือตารางกำกับ'
			},
			{
				id: 'split-and-join-words',
				englishTitle: 'Split and Join Words',
				thaiTitle: 'แบ่งและรวมคำ',
				japaneseTitle: '言葉の分割／結合',
				description: 'แบ่งคำออกเป็นส่วนย่อยหรือรวมหลายส่วนเข้าด้วยกันเพื่อสร้างเสียงและความหมายใหม่'
			},
			{
				id: 'homophones',
				englishTitle: 'Homophones',
				thaiTitle: 'คำพ้องเสียง',
				japaneseTitle: '同音異義語',
				description: 'ใช้คำที่ออกเสียงเหมือนกันแต่เขียนหรือมีความหมายต่างกันเป็นจุดเปลี่ยนของคำตอบ'
			},
			{
				id: 'antonyms',
				englishTitle: 'Antonyms',
				thaiTitle: 'คำตรงข้าม',
				japaneseTitle: '対義語',
				description:
					'เปลี่ยนคำให้เป็นความหมายตรงข้าม เช่น บน–ล่าง หรือเข้า–ออก แล้วใช้คำใหม่แก้โจทย์'
			},
			{
				id: 'heads-and-tails',
				englishTitle: 'Heads and Tails',
				thaiTitle: 'อักษรหัวและอักษรท้าย',
				japaneseTitle: '頭／お尻',
				description: 'หยิบตัวอักษรแรกหรือตัวอักษรสุดท้ายของคำหลายคำมาต่อกัน'
			},
			{
				id: 'reverse-and-palindrome',
				englishTitle: 'Reverse Reading and Palindromes',
				thaiTitle: 'อ่านย้อนกลับและคำพาลินโดรม',
				japaneseTitle: '逆から読む／回文',
				description: 'อ่านลำดับจากท้ายไปหน้า หรือสังเกตข้อความที่อ่านได้เหมือนกันทั้งสองทิศทาง'
			},
			{
				id: 'letter-manipulation',
				englishTitle: 'Letter Manipulation',
				thaiTitle: 'จัดการตัวอักษร',
				japaneseTitle: '文字操作',
				description: 'เพิ่ม ลบ ย้าย สลับ หรือเปลี่ยนตัวอักษรตามคำสั่งเพื่อสร้างคำใหม่'
			},
			{
				id: 'add-the-same-letter',
				englishTitle: 'Add the Same Letter',
				thaiTitle: 'เติมตัวอักษรเดียวกัน',
				japaneseTitle: '同じ文字を加える',
				description: 'เติมอักษรตัวเดียวกันลงในหลายช่องหรือหลายคำเพื่อให้ทุกชุดกลายเป็นคำที่ถูกต้อง'
			},
			{
				id: 'complete-missing-letters',
				englishTitle: 'Complete Missing Letters',
				thaiTitle: 'เติมตัวอักษรที่ขาด',
				japaneseTitle: '足りない文字を補完',
				description: 'ตรวจว่าชุดตัวอักษรควรครบตามระบบใด แล้วเติมตัวที่หายไป'
			},
			{
				id: 'vowels-and-consonants',
				englishTitle: 'Vowels and Consonants',
				thaiTitle: 'สระและพยัญชนะ',
				japaneseTitle: '母音子音',
				description: 'แยกหรือแทนเสียงสระและพยัญชนะ เพื่อวิเคราะห์โครงสร้างเสียงของคำ'
			},
			{
				id: 'kanji-katakana-readings',
				englishTitle: 'Kanji and Katakana Readings',
				thaiTitle: 'การอ่านคันจิและคาตากานะ',
				japaneseTitle: '漢字カタカナ読み',
				description: 'ใช้เสียงอ่านหลายแบบของคันจิหรือการถอดเสียงคาตากานะเพื่อค้นหาคำที่ตั้งใจไว้'
			},
			{
				id: 'combined-kanji',
				englishTitle: 'Combined Kanji',
				thaiTitle: 'ประกอบคันจิ',
				japaneseTitle: '合体漢字',
				description: 'นำส่วนประกอบหรือคันจิหลายตัวมาซ้อนและรวมกันให้เกิดคันจิตัวใหม่'
			},
			{
				id: 'rotate-to-read',
				englishTitle: 'Rotate to Read',
				thaiTitle: 'หมุนทิศทางแล้วอ่าน',
				japaneseTitle: '向きを変えて読む',
				description: 'หมุนตัวอักษร กระดาษ หรือมุมมองเพื่อให้รูปร่างกลายเป็นข้อความที่อ่านได้'
			},
			{
				id: 'furigana-and-okurigana',
				englishTitle: 'Furigana and Okurigana',
				thaiTitle: 'ฟูริงานะและโอคุริงานะ',
				japaneseTitle: 'ふりがな／送りがな',
				description: 'ใช้ตัวกำกับเสียงอ่านหรือคานะท้ายคันจิเป็นเบาะแสในการเลือกและประกอบคำ'
			},
			{
				id: 'hidden-words',
				englishTitle: 'Hidden Words',
				thaiTitle: 'คำที่ซ่อนอยู่',
				japaneseTitle: '隠れた言葉',
				description: 'ค้นหาคำที่ซ่อนต่อเนื่องอยู่ภายในคำ ประโยค หรือรอยต่อระหว่างหลายคำ'
			},
			{
				id: 'word-chain',
				englishTitle: 'Word Chain',
				thaiTitle: 'เกมต่อคำ',
				japaneseTitle: 'しりとり',
				description: 'ต่อคำโดยให้เสียงหรืออักษรท้ายของคำก่อนหน้าเป็นจุดเริ่มของคำถัดไป'
			},
			{
				id: 'riddles',
				englishTitle: 'Riddles',
				thaiTitle: 'ปริศนาคำทาย',
				japaneseTitle: 'なぞなぞ',
				description: 'ตีความคำถามแบบเล่นคำหรือมุมมองนอกกรอบเพื่อหาคำตอบที่มีเหตุผลซ่อนอยู่'
			},
			{
				id: 'ari-nashi',
				englishTitle: 'Ari–Nashi Classification',
				thaiTitle: 'โจทย์แบ่งกลุ่มมี–ไม่มี',
				japaneseTitle: 'あるなし問題',
				description:
					'เปรียบเทียบกลุ่ม “มี” กับ “ไม่มี” เพื่อค้นหาคุณสมบัติร่วมที่แบ่งสองกลุ่มออกจากกัน'
			},
			{
				id: 'character-composition',
				englishTitle: 'Character Composition',
				thaiTitle: 'โครงสร้างตัวอักษร',
				japaneseTitle: '文字構成',
				description:
					'แยกตัวอักษรเป็นเส้น ส่วนประกอบ หรือตัวอักษรย่อย แล้วประกอบความหมายจากโครงสร้างนั้น'
			}
		]
	},
	{
		id: 'themes',
		englishTitle: 'Reference Themes',
		thaiTitle: 'ชุดความรู้และหัวข้ออ้างอิง',
		japaneseTitle: '題材系',
		accent: 'badge-accent',
		mechanics: [
			{
				id: 'gojuon',
				englishTitle: 'The Japanese Syllabary',
				thaiTitle: 'ตารางห้าสิบเสียงญี่ปุ่น',
				japaneseTitle: '五十音',
				description: 'ใช้ลำดับแถวและคอลัมน์ของตารางโกจูองเพื่อแทนตำแหน่งหรือแปลงเสียงคานะ'
			},
			{
				id: 'alphabet',
				englishTitle: 'The Alphabet',
				thaiTitle: 'ตัวอักษรภาษาอังกฤษ',
				japaneseTitle: 'アルファベット',
				description: 'ใช้ลำดับ A–Z รูปร่างตัวอักษร หรือค่าตัวเลขประจำตำแหน่งเป็นข้อมูลแก้ปริศนา'
			},
			{
				id: 'chinese-zodiac',
				englishTitle: 'Chinese Zodiac',
				thaiTitle: 'สิบสองนักษัตร',
				japaneseTitle: '十二支',
				description: 'อาศัยลำดับสัตว์ 12 นักษัตร ชื่อ หรือคุณสมบัติของแต่ละปีเป็นชุดอ้างอิง'
			},
			{
				id: 'days-of-the-week',
				englishTitle: 'Days of the Week',
				thaiTitle: 'วันในสัปดาห์',
				japaneseTitle: '曜日',
				description: 'ใช้ลำดับ ชื่อ สี หรือคันจิของวันทั้งเจ็ดในการเรียงและแปลงข้อมูล'
			},
			{
				id: 'planets',
				englishTitle: 'Planets',
				thaiTitle: 'ดาวเคราะห์',
				japaneseTitle: '惑星',
				description: 'ใช้ลำดับดาวเคราะห์จากดวงอาทิตย์ ชื่อ สัญลักษณ์ หรือคุณสมบัติเด่นเป็นกุญแจ'
			},
			{
				id: 'japanese-prefectures',
				englishTitle: 'Japanese Prefectures',
				thaiTitle: 'จังหวัดของญี่ปุ่น',
				japaneseTitle: '都道府県',
				description: 'อ้างอิงชื่อ ตำแหน่ง รูปร่าง หรือการแบ่งเขตของ 47 จังหวัดญี่ปุ่น'
			},
			{
				id: 'directions',
				englishTitle: 'Directions',
				thaiTitle: 'ทิศทาง',
				japaneseTitle: '方角',
				description: 'ใช้ทิศเหนือ ใต้ ออก ตก หรือทิศย่อยเพื่อกำหนดการเดิน การอ่าน และตำแหน่ง'
			},
			{
				id: 'colors',
				englishTitle: 'Colors',
				thaiTitle: 'สี',
				japaneseTitle: '色',
				description: 'สีอาจกำหนดลำดับ กลุ่ม ความหมาย หรือคำย่อที่ใช้เลือกข้อมูล'
			},
			{
				id: 'playing-cards',
				englishTitle: 'Playing Cards',
				thaiTitle: 'ไพ่สากล',
				japaneseTitle: 'トランプ',
				description: 'ใช้ดอกไพ่ สี หน้าไพ่ และค่าตั้งแต่ Ace ถึง King เป็นระบบแทนข้อมูล'
			},
			{
				id: 'musical-scale',
				englishTitle: 'Musical Scale',
				thaiTitle: 'โน้ตดนตรี',
				japaneseTitle: '音階',
				description: 'ใช้ลำดับเสียง โด–เร–มี หรือ C–D–E รวมถึงตำแหน่งบนบรรทัดห้าเส้น'
			},
			{
				id: 'clocks-and-time',
				englishTitle: 'Clocks and Time',
				thaiTitle: 'นาฬิกาและเวลา',
				japaneseTitle: '時計／時間',
				description: 'ตีความตำแหน่งเข็ม ชั่วโมง นาที หรือการหมุนรอบหน้าปัดเป็นทิศทางและตัวเลข'
			},
			{
				id: 'japanese-era-names',
				englishTitle: 'Japanese Era Names',
				thaiTitle: 'ศักราชญี่ปุ่น',
				japaneseTitle: '元号',
				description: 'แปลงและเรียงปีตามชื่อรัชศกญี่ปุ่น เช่น เมจิ โชวะ เฮเซ และเรวะ'
			},
			{
				id: 'mobile-phone-keypad',
				englishTitle: 'Mobile Phone Keypad',
				thaiTitle: 'แป้นพิมพ์โทรศัพท์มือถือ',
				japaneseTitle: '携帯文字盤',
				description: 'ใช้ตำแหน่งปุ่ม ตัวเลข และการกดซ้ำบนแป้นโทรศัพท์เพื่อแทนตัวอักษร'
			},
			{
				id: 'seasons-and-months',
				englishTitle: 'Seasons and Months',
				thaiTitle: 'ฤดูกาลและเดือน',
				japaneseTitle: '四季／月',
				description: 'ใช้ลำดับเดือน กลุ่มฤดูกาล จำนวนวัน หรือเหตุการณ์ประจำช่วงเวลาเป็นเบาะแส'
			},
			{
				id: 'fingers',
				englishTitle: 'Fingers',
				thaiTitle: 'นิ้วมือ',
				japaneseTitle: '指',
				description: 'ใช้ชื่อ ลำดับ หรือตำแหน่งของนิ้วทั้งห้าในการนับหรือชี้ข้อมูล'
			},
			{
				id: 'podium',
				englishTitle: 'Podium',
				thaiTitle: 'แท่นรางวัล',
				japaneseTitle: '表彰台',
				description: 'ใช้ลำดับที่หนึ่ง สอง สาม และระดับความสูงของแท่นเพื่อจัดตำแหน่งคำตอบ'
			},
			{
				id: 'stroke-count',
				englishTitle: 'Stroke Count',
				thaiTitle: 'จำนวนขีดของตัวอักษร',
				japaneseTitle: '画数',
				description: 'นับจำนวนเส้นที่ใช้เขียนคันจิหรืออักขระ แล้วใช้ผลลัพธ์เป็นตัวเลขกำกับ'
			},
			{
				id: 'four-character-idioms',
				englishTitle: 'Four-Character Idioms',
				thaiTitle: 'สำนวนคันจิสี่ตัว',
				japaneseTitle: '四字熟語',
				description: 'เติมหรือจัดคันจิสี่ตัวให้เป็นสำนวนญี่ปุ่นที่สมบูรณ์และมีความหมาย'
			},
			{
				id: 'number-readings',
				englishTitle: 'Number Readings',
				thaiTitle: 'เสียงอ่านของตัวเลข',
				japaneseTitle: '数字の読み方',
				description: 'ใช้เสียงอ่านหลายแบบของตัวเลข เช่น ญี่ปุ่น จีน หรือการเล่นเสียงเพื่อสร้างคำ'
			},
			{
				id: 'counters',
				englishTitle: 'Counters',
				thaiTitle: 'ลักษณนามและวิธีนับ',
				japaneseTitle: '数え方',
				description: 'เลือกคำลักษณนามหรือรูปเสียงที่เปลี่ยนไปตามชนิดและจำนวนของสิ่งของ'
			},
			{
				id: 'digital-digits',
				englishTitle: 'Digital Digits',
				thaiTitle: 'ตัวเลขดิจิทัล',
				japaneseTitle: 'デジタル数字',
				description: 'ใช้รูปแบบจอเจ็ดส่วน โดยเพิ่ม ลบ ย้าย หรือหมุนขีดเพื่อเปลี่ยนตัวเลข'
			},
			{
				id: 'physical-laws',
				englishTitle: 'Physical Laws',
				thaiTitle: 'กฎทางฟิสิกส์',
				japaneseTitle: '物理法則',
				description: 'ประยุกต์แรงโน้มถ่วง การสะท้อน สมดุล แม่เหล็ก หรือหลักธรรมชาติอื่นกับภาพโจทย์'
			},
			{
				id: 'number-sequences',
				englishTitle: 'Number Sequences',
				thaiTitle: 'ลำดับตัวเลข',
				japaneseTitle: '数列',
				description: 'หาความสัมพันธ์ระหว่างพจน์เพื่อเติมค่าที่หายหรือใช้ลำดับเป็นดัชนี'
			},
			{
				id: 'numbers-to-letters',
				englishTitle: 'Convert Numbers to Letters',
				thaiTitle: 'แปลงตัวเลขเป็นตัวอักษร',
				japaneseTitle: '数字を文字に変換',
				description: 'จับคู่ตัวเลขกับลำดับตัวอักษร เสียงอ่าน รหัส หรือระบบอ้างอิงที่โจทย์กำหนด'
			}
		]
	},
	{
		id: 'visuals',
		englishTitle: 'Shapes and Illustrations',
		thaiTitle: 'รูปทรงและภาพประกอบ',
		japaneseTitle: '図形／イラスト',
		accent: 'badge-info',
		mechanics: [
			{
				id: 'connect-the-dots',
				englishTitle: 'Connect the Dots',
				thaiTitle: 'ลากเส้นเชื่อมจุด',
				japaneseTitle: '点つなぎ',
				description: 'เชื่อมจุดตามลำดับหรือกฎที่กำหนดเพื่อให้เกิดภาพ ตัวอักษร หรือเส้นทาง'
			},
			{
				id: 'shade-the-shapes',
				englishTitle: 'Shade the Shapes',
				thaiTitle: 'ระบายรูปทรง',
				japaneseTitle: '図形を塗る',
				description:
					'ระบายพื้นที่ที่ผ่านเงื่อนไข แล้วอ่านข้อความหรือภาพที่เกิดจากส่วนทึบและส่วนว่าง'
			},
			{
				id: 'lines-and-cells',
				englishTitle: 'Lines and Cells',
				thaiTitle: 'เส้นและช่องตาราง',
				japaneseTitle: '線／マス',
				description: 'สังเกตความสัมพันธ์ระหว่างเส้นกรอบ ช่องตาราง และสิ่งที่วางอยู่ภายในหรือบนเส้น'
			},
			{
				id: 'frame-shapes',
				englishTitle: 'Frame Shapes',
				thaiTitle: 'รูปร่างของกรอบ',
				japaneseTitle: '枠の形',
				description: 'ใช้รูปทรงของกรอบล้อมรอบเป็นรหัสบอกกลุ่ม ตัวอักษร หรือวิธีอ่าน'
			},
			{
				id: 'boundaries-and-gaps',
				englishTitle: 'Boundaries and Gaps',
				thaiTitle: 'รอยต่อและช่องว่าง',
				japaneseTitle: '境目や隙間',
				description: 'มองพื้นที่ระหว่างรูป รอยต่อ หรือช่องว่างเชิงลบที่อาจประกอบเป็นภาพอีกชั้นหนึ่ง'
			},
			{
				id: 'cubes',
				englishTitle: 'Cubes',
				thaiTitle: 'ลูกบาศก์',
				japaneseTitle: '立方体',
				description: 'พับ คลี่ หมุน หรือจับคู่หน้าของลูกบาศก์เพื่อวิเคราะห์ตำแหน่งที่มองไม่เห็น'
			},
			{
				id: 'complete-the-missing-part',
				englishTitle: 'Complete the Missing Part',
				thaiTitle: 'เติมส่วนของภาพที่ขาด',
				japaneseTitle: '足りない部分を補完',
				description: 'อนุมานส่วนที่หายจากความสมมาตร รูปแบบซ้ำ หรือเส้นที่ควรต่อเนื่อง'
			},
			{
				id: 'same-appearance',
				englishTitle: 'Same Appearance',
				thaiTitle: 'สิ่งที่มีรูปลักษณ์เหมือนกัน',
				japaneseTitle: '同じ見た目',
				description: 'จับคู่รูปที่ดูเหมือนกันแม้ชื่อ ความหมาย การหมุน หรือบริบทจะแตกต่างกัน'
			},
			{
				id: 'white-is-invisible',
				englishTitle: 'White Is Invisible',
				thaiTitle: 'มองไม่เห็นส่วนสีขาว',
				japaneseTitle: '白が見えない',
				description: 'สมมติว่าส่วนสีขาวโปร่งใสหรือหายไป แล้วพิจารณารูปที่เหลือหรือภาพเมื่อซ้อนกัน'
			},
			{
				id: 'multiple-names-for-a-picture',
				englishTitle: 'Multiple Names for a Picture',
				thaiTitle: 'เรียกภาพเดียวด้วยหลายคำ',
				japaneseTitle: 'イラストを複数の言葉に',
				description: 'ลองชื่อ คำพ้อง หมวดหมู่ หรือมุมมองหลายแบบของภาพเดียวจนเข้ากับกลไก'
			},
			{
				id: 'letter-shaped-figures',
				englishTitle: 'Letter-Shaped Figures',
				thaiTitle: 'จัดตัวอักษรให้เป็นรูป',
				japaneseTitle: '文字アレンジ図形',
				description: 'มองตัวอักษรที่ถูกยืด บิด ซ้อน หรือจัดวางจนกลายเป็นภาพและถอดกลับเป็นคำ'
			},
			{
				id: 'letter-count-equals-object-count',
				englishTitle: 'Letter Count Equals Object Count',
				thaiTitle: 'จำนวนตัวอักษรเท่ากับจำนวนสิ่งของ',
				japaneseTitle: '文字数＝個数',
				description: 'ใช้จำนวนวัตถุเป็นตัวบอกความยาวคำ หรือใช้ความยาวคำเลือกจำนวนองค์ประกอบ'
			},
			{
				id: 'change-viewing-direction',
				englishTitle: 'Change the Viewing Direction',
				thaiTitle: 'เปลี่ยนทิศทางการมอง',
				japaneseTitle: '方向を変えて見る',
				description: 'มองจากด้านข้าง ด้านหลัง กลับหัว หรือผ่านมุมใหม่เพื่อเห็นข้อมูลอีกแบบ'
			},
			{
				id: 'alternate-representation',
				englishTitle: 'Use Another Representation',
				thaiTitle: 'เปลี่ยนเป็นรูปแบบการแทนค่าอื่น',
				japaneseTitle: '別の表現にする',
				description:
					'แปลงข้อมูลเดียวกันเป็นภาพ แผนผัง ไอคอน เสียง หรือตัวเลขเพื่อให้เห็นความสัมพันธ์'
			},
			{
				id: 'positional-relationships',
				englishTitle: 'Positional Relationships',
				thaiTitle: 'ความสัมพันธ์เชิงตำแหน่ง',
				japaneseTitle: '位置関係',
				description: 'ตีความการอยู่บน ล่าง ซ้าย ขวา ใน นอก หรือการซ้อนทับเป็นคำหรือคำสั่ง'
			},
			{
				id: 'special-arrows',
				englishTitle: 'Special Arrows',
				thaiTitle: 'ลูกศรพิเศษ',
				japaneseTitle: '特殊矢印',
				description:
					'ลูกศรอาจสั่งให้ย้าย หมุน แทนที่ อ่านย้อน หรือเชื่อมสิ่งต่าง ๆ มากกว่าชี้ทิศทางธรรมดา'
			}
		]
	},
	{
		id: 'puzzles',
		englishTitle: 'Puzzle Formats',
		thaiTitle: 'รูปแบบพัซเซิล',
		japaneseTitle: 'パズル',
		accent: 'badge-warning',
		mechanics: [
			{
				id: 'maze',
				englishTitle: 'Maze',
				thaiTitle: 'เขาวงกต',
				japaneseTitle: '迷路',
				description: 'หาเส้นทางจากจุดเริ่มถึงเป้าหมาย โดยเส้นทางที่ผ่านอาจสะกดคำหรือเลือกข้อมูล'
			},
			{
				id: 'one-stroke-drawing',
				englishTitle: 'One-Stroke Drawing',
				thaiTitle: 'ลากเส้นครั้งเดียว',
				japaneseTitle: '一筆書き',
				description: 'ลากผ่านทุกเส้นหรือทุกจุดตามเงื่อนไขโดยไม่ยกปากกาและไม่ใช้เส้นซ้ำ'
			},
			{
				id: 'crossword',
				englishTitle: 'Crossword',
				thaiTitle: 'ปริศนาอักษรไขว้',
				japaneseTitle: 'クロスワード',
				description: 'ตอบคำใบ้แล้วใส่คำในช่องแนวตั้งและแนวนอน โดยตัวอักษรที่ตัดกันต้องตรงกัน'
			},
			{
				id: 'skeleton-crossword',
				englishTitle: 'Skeleton Crossword',
				thaiTitle: 'ครอสเวิร์ดโครงเปล่า',
				japaneseTitle: 'スケルトン',
				description: 'นำชุดคำที่ให้มาใส่ในโครงตารางโดยอาศัยความยาวและจุดตัด แทนการตอบคำใบ้'
			},
			{
				id: 'polyominoes',
				englishTitle: 'Polyominoes',
				thaiTitle: 'โพลิโอมิโน',
				japaneseTitle: 'ポリオミノ',
				description: 'จัดชิ้นส่วนที่ประกอบจากช่องสี่เหลี่ยมให้ปิดพื้นที่หรือเป็นรูปร่างตามเงื่อนไข'
			},
			{
				id: 'anagram',
				englishTitle: 'Anagram',
				thaiTitle: 'สลับเรียงตัวอักษร',
				japaneseTitle: 'アナグラム',
				description: 'สลับลำดับตัวอักษรทั้งหมดของคำหรือวลีเพื่อสร้างคำตอบใหม่'
			},
			{
				id: 'wado-kaichin',
				englishTitle: 'Wado Kaichin',
				thaiTitle: 'ปริศนาคันจิร่วมสี่ทิศ',
				japaneseTitle: '和同開珎',
				description: 'เติมคันจิตรงกลางให้ประกอบกับคันจิรอบทั้งสี่ทิศเป็นคำที่ถูกต้องทุกคู่'
			},
			{
				id: 'amidakuji',
				englishTitle: 'Amidakuji',
				thaiTitle: 'บันไดสุ่มญี่ปุ่น',
				japaneseTitle: 'あみだくじ',
				description: 'ไล่เส้นแนวตั้งและเลี้ยวตามคานแนวนอนเพื่อจับคู่จุดเริ่มกับปลายทาง'
			},
			{
				id: 'numberlink',
				englishTitle: 'Numberlink',
				thaiTitle: 'เชื่อมคู่ตัวเลข',
				japaneseTitle: 'ナンバーリンク',
				description: 'เชื่อมตัวเลขที่เหมือนกันเป็นคู่ด้วยเส้นทางที่ไม่ตัดกันตามกฎของตาราง'
			},
			{
				id: 'network-words',
				englishTitle: 'Network Words',
				thaiTitle: 'เครือข่ายคำ',
				japaneseTitle: 'ネットワーズ',
				description: 'เชื่อมคำในแผนผังตามความสัมพันธ์หรือคำที่ใช้ร่วมกัน แล้วอ่านโครงข่ายที่ได้'
			},
			{
				id: 'logic-puzzles',
				englishTitle: 'Logic Puzzles',
				thaiTitle: 'ปริศนาตรรกะ',
				japaneseTitle: '論理パズル',
				description: 'ใช้เงื่อนไขทั้งหมดตัดความเป็นไปไม่ได้ออกอย่างเป็นระบบจนเหลือคำตอบเดียว'
			},
			{
				id: 'letter-substitution-puzzles',
				englishTitle: 'Letter Substitution Puzzles',
				thaiTitle: 'ปริศนาแทนตัวอักษร',
				japaneseTitle: '文字置換パズル',
				description: 'แทนตัวอักษรแต่ละตัวด้วยค่าอื่นอย่างสม่ำเสมอ แล้วหาตารางแทนค่าจากข้อจำกัด'
			},
			{
				id: 'cryptarithm',
				englishTitle: 'Cryptarithm',
				thaiTitle: 'โจทย์คำนวณแทนตัวเลขด้วยอักษร',
				japaneseTitle: '覆面算',
				description: 'ตัวอักษรแทนเลขโดดที่ไม่ซ้ำกัน และต้องหาค่าให้สมการเลขคณิตถูกต้อง'
			},
			{
				id: 'magic-square',
				englishTitle: 'Magic Square',
				thaiTitle: 'จัตุรัสกล',
				japaneseTitle: '魔方陣',
				description: 'จัดตัวเลขในตารางให้ผลรวมของแถว คอลัมน์ และแนวทแยงเป็นค่าตามเงื่อนไข'
			}
		]
	}
];

export const PUZZLE_MECHANIC_COUNT = PUZZLE_MECHANIC_CHAPTERS.reduce(
	(total, chapter) => total + chapter.mechanics.length,
	0
);
