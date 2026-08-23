/**
 * Web Speech API Text-to-Speech (TTS) & Web Audio SFX Utility for Thai Quiz Show & The Chase
 */

let activeUtterance: SpeechSynthesisUtterance | null = null;

export function isTTSSupported(): boolean {
	return typeof window !== 'undefined' && 'speechSynthesis' in window;
}

export function getThaiVoices(): SpeechSynthesisVoice[] {
	if (!isTTSSupported()) return [];
	const voices = window.speechSynthesis.getVoices();
	return voices.filter((v) => v.lang.startsWith('th') || v.lang.includes('TH'));
}

export function initVoices(callback?: (voices: SpeechSynthesisVoice[]) => void): () => void {
	if (!isTTSSupported()) return () => {};
	const update = () => {
		callback?.(getThaiVoices());
	};
	update();
	if (window.speechSynthesis.onvoiceschanged !== undefined) {
		window.speechSynthesis.onvoiceschanged = update;
	}
	return () => {
		if (window.speechSynthesis.onvoiceschanged === update) {
			window.speechSynthesis.onvoiceschanged = null;
		}
	};
}

export const PHONETIC_PREPROCESS_MAP: Array<[RegExp, string]> = [
	// ─── 1. MULTI-WORD PHRASES & FRANCHISES (HIGH PRIORITY) ────────────
	// Space & Physics
	[/\bJames Webb Space Telescope\b/gi, 'กล้องโทรทรรศน์อวกาศ เจมส์ เวบบ์'],
	[/\bJames Webb\b/gi, 'เจมส์ เวบบ์'],
	[/\bHubble Space Telescope\b/gi, 'กล้องโทรทรรศน์อวกาศ ฮับเบิล'],
	[/\bInternational Space Station\b/gi, 'สถานีอวกาศนานาชาติ ไอเอสเอส'],
	[/\bEvent Horizon Telescope\b/gi, 'อีเวนต์ ฮอไรซัน เทเลสโคป'],
	[/\bFalcon Heavy\b/gi, 'ฟอลคอน เฮฟวี'],
	[/\bFalcon 9\b/gi, 'ฟอลคอน ไนน์'],
	[/\bBlue Origin\b/gi, 'บลูออริจิน'],
	[/\bApollo 11\b/gi, 'อะพอลโล สิบเอ็ด'],
	[/\bVoyager 1\b/gi, 'วอยเอเจอร์ วัน'],
	[/\bVoyager 2\b/gi, 'วอยเอเจอร์ ทู'],
	[/\blight[- ]year\b/gi, 'ปีแสง'],

	// Movies & Series
	[/\bHarry Potter\b/gi, 'แฮร์รี่ พอตเตอร์'],
	[/\bLord of the Rings\b/gi, 'ลอร์ด ออฟ เดอะ ริงส์'],
	[/\bStar Wars\b/gi, 'สตาร์ วอร์ส'],
	[/\bStar Trek\b/gi, 'สตาร์ เทรค'],
	[/\bMarvel Cinematic Universe\b/gi, 'มาร์เวล ซิเนมาติก ยูนิเวิร์ส'],
	[/\bDC Comics\b|\bDC Universe\b/gi, 'ดีซี คอมิกส์'],
	[/\bAvengers: Endgame\b/gi, 'อเวนเจอร์ส เอนด์เกม'],
	[/\bAvengers: Infinity War\b/gi, 'อเวนเจอร์ส อินฟินิตี วอร์'],
	[/\bAvengers\b/gi, 'อเวนเจอร์ส'],
	[/\bSpider-Man\b/gi, 'สไปเดอร์แมน'],
	[/\bCaptain America\b/gi, 'กัปตันอเมริกา'],
	[/\bIron Man\b/gi, 'ไอรอนแมน'],
	[/\bAvatar: The Way of Water\b/gi, 'อวตาร วิถีแห่งสายน้ำ'],
	[/\bJurassic Park\b/gi, 'จูราสสิค พาร์ค'],
	[/\bJurassic World\b/gi, 'จูราสสิค เวิลด์'],
	[/\bThe Dark Knight\b/gi, 'เดอะ ดาร์ก ไนต์'],
	[/\bThe Matrix\b/gi, 'เดอะ เมทริกซ์'],
	[/\bJohn Wick\b/gi, 'จอห์น วิค'],
	[/\bMission: Impossible\b/gi, 'มิชชัน อิมพอสซิเบิล'],
	[/\bFast & Furious\b|\bFast and Furious\b/gi, 'ฟาสต์ แอนด์ ฟิวเรียส'],
	[/\bJames Bond\b/gi, 'เจมส์ บอนด์'],
	[/\bGame of Thrones\b/gi, 'เกม ออฟ โทรนส์'],
	[/\bHouse of the Dragon\b/gi, 'เฮาส์ ออฟ เดอะ ดรากอน'],
	[/\bStranger Things\b/gi, 'สเตรนเจอร์ ธิงส์'],
	[/\bSquid Game\b/gi, 'สควิดเกม'],
	[/\bThe Last of Us\b/gi, 'เดอะ ลาสต์ ออฟ อัส'],
	[/\bAcademy Award\b/gi, 'อคาเดมี อวอร์ด'],

	// Anime & Manga
	[/\bOne Piece\b/gi, 'วันพีซ'],
	[/\bDragon Ball Z\b/gi, 'ดราก้อนบอล แซด'],
	[/\bDragon Ball\b/gi, 'ดราก้อนบอล'],
	[/\bNaruto Shippuden\b/gi, 'นารูโตะ ตำนานวายุสลาตัน'],
	[/\bJoJo's Bizarre Adventure\b/gi, 'โจโจ้ ล่าข้ามศตวรรษ'],
	[/\bHunter x Hunter\b/gi, 'ฮันเตอร์ ฮันเตอร์'],
	[/\bAttack on Titan\b/gi, 'ผ่าพิภพไททัน'],
	[/\bShingeki no Kyojin\b/gi, 'ชินเงกิ โนะ เคียวจิน'],
	[/\bKimetsu no Yaiba\b/gi, 'คิเมะสึ โนะ ไยบะ'],
	[/\bDemon Slayer\b/gi, 'ดาบพิฆาตอสูร'],
	[/\bJujutsu Kaisen\b/gi, 'มหาเวทย์ผนึกมาร'],
	[/\bSpy x Family\b/gi, 'สปาย แฟมิลี'],
	[/\bChainsaw Man\b/gi, 'เชนซอว์แมน'],
	[/\bMy Hero Academia\b/gi, 'มายฮีโร่ อคาเดเมีย'],
	[/\bDeath Note\b/gi, 'เดธโน้ต'],
	[/\bFullmetal Alchemist\b/gi, 'ฟูลเมทัล อัลเคมิสต์ หรือ แขนกลคนแปรธาตุ'],
	[/\bFrieren: Beyond Journey's End\b|\bSousou no Frieren\b/gi, 'ฟรีเรน คำอธิษฐานในวันที่จากลา'],
	[/\bBocchi the Rock!?\b/gi, 'บจจิ เดอะ ร็อก'],
	[/\bOshi no Ko\b/gi, 'เกิดใหม่เป็นลูกโอชิ'],
	[/\bMob Psycho 100\b/gi, 'ม็อบไซโค หนึ่งร้อย'],
	[/\bOne Punch Man\b/gi, 'วันพันช์แมน'],
	[/\bSolo Leveling\b/gi, 'โซโล เลเวลลิง'],
	[/\bDetective Conan\b/gi, 'ยอดนักสืบจิ๋วโคนัน'],
	[/\bCrayon Shin-chan\b/gi, 'เครยอน ชินจัง'],
	[/\bSailor Moon\b/gi, 'เซเลอร์มูน'],
	[/\bMobile Suit Gundam\b/gi, 'โมบิลสูท กันดั้ม'],
	[/\bBlue Lock\b/gi, 'บลูล็อก ขังดวลแข้ง'],
	[/\bNeon Genesis Evangelion\b/gi, 'นีออน เจเนซิส เอวาเกเลียน'],
	[/\bStudio Ghibli\b/gi, 'สตูดิโอ จิบลิ'],
	[/\bSpirited Away\b/gi, 'สปิริตเต็ด อะเวย์ หรือ มิติวิญญาณมหัศจรรย์'],
	[/\bMy Neighbor Totoro\b/gi, 'โทโทโร่เพื่อนรัก'],
	[/\bHowl's Moving Castle\b/gi, 'ปราสาทเวทมนตร์ของฮาวล์'],
	[/\bPrincess Mononoke\b/gi, 'เจ้าหญิงจิตวิญญาณแห่งพงไพร'],
	[/\bYour Name\b/gi, 'หลับตาฝัน ถึงชื่อเธอ ยัวร์เนม'],
	[/\bWeathering With You\b/gi, 'ฤดูฝัน ฉันมีเธอ'],
	[/\bSword Art Online\b/gi, 'ซอร์ดอาร์ต ออนไลน์'],
	[/\bKamen Rider\b/gi, 'คาเมนไรเดอร์'],
	[/\bHatsune Miku\b/gi, 'ฮัตสึเนะ มิกุ'],
	[/\bKaiju No\. 8\b/gi, 'ไคจูหมายเลขแปด'],

	// Games
	[/\bGenshin Impact\b/gi, 'เกนชิน อิมแพกต์'],
	[/\bHonkai: Star Rail\b/gi, 'ฮงไก สตาร์เรล'],
	[/\bHonkai Impact 3rd\b/gi, 'ฮงไก อิมแพกต์ เธิร์ด'],
	[/\bZenless Zone Zero\b/gi, 'เซนเลส โซน ซีโร่'],
	[/\bBlue Archive\b/gi, 'บลู อาร์ไคฟ์'],
	[/\bFate\/Grand Order\b/gi, 'เฟท แกรนด์ ออร์เดอร์'],
	[/\bResident Evil\b/gi, 'เรซิเดนต์ อีวิล'],
	[/\bSilent Hill\b/gi, 'ไซเลนต์ ฮิลล์'],
	[/\bMetal Gear Solid\b/gi, 'เมทัล เกียร์ โซลิด'],
	[/\bFinal Fantasy\b/gi, 'ไฟนอล แฟนตาซี'],
	[/\bDragon Quest\b/gi, 'ดราก้อนเควสต์'],
	[/\bSuper Mario\b/gi, 'ซูเปอร์ มาริโอ'],
	[/\bThe Legend of Zelda\b/gi, 'เดอะเลเจนด์ ออฟ เซลด้า'],
	[/\bElden Ring\b/gi, 'เอลเดน ริง'],
	[/\bDark Souls\b/gi, 'ดาร์ก โซลส์'],
	[/\bSekiro: Shadows Die Twice\b/gi, 'เซคิโระ ชาโดว์ส ดาย ทไวซ์'],
	[/\bGhost of Tsushima\b/gi, 'โกสต์ ออฟ สึชิมะ'],
	[/\bMonster Hunter\b/gi, 'มอนสเตอร์ ฮันเตอร์'],
	[/\bStreet Fighter\b/gi, 'สตรีท ไฟเตอร์'],
	[/\bSonic the Hedgehog\b/gi, 'โซนิค เดอะ เฮดจ์ฮ็อก'],
	[/\bNieR:Automata\b|\bNieR Automata\b/gi, 'เนียร์ ออโตมาตา'],
	[/\bDevil May Cry\b/gi, 'เดวิล เมย์ คราย'],
	[/\bLeague of Legends\b/gi, 'ลีก ออฟ เลเจนด์ส'],
	[/\bCounter-Strike\b/gi, 'เคาน์เตอร์ สไตรก์'],
	[/\bGrand Theft Auto\b/gi, 'แกรนด์ เทฟต์ ออโต้'],
	[/\bGTA V\b/gi, 'จีทีเอ ไฟว์'],
	[/\bCyberpunk 2077\b/gi, 'ไซเบอร์พังก์ สองศูนย์เจ็ดเจ็ด'],
	[/\bThe Witcher 3\b/gi, 'เดอะ วิทเชอร์ สาม'],
	[/\bThe Witcher\b/gi, 'เดอะ วิทเชอร์'],
	[/\bApex Legends\b/gi, 'เอเปก เลเจนด์ส'],
	[/\bOverwatch 2\b/gi, 'โอเวอร์วอตช์ ทู'],
	[/\bAmong Us\b/gi, 'อะมัง อัส'],
	[/\bPlayStation 5\b/gi, 'เพลย์สเตชัน ไฟว์'],
	[/\bPlayStation 4\b/gi, 'เพลย์สเตชัน โฟร์'],
	[/\bPlayStation\b/gi, 'เพลย์สเตชัน'],
	[/\bNintendo Switch\b/gi, 'นินเทนโด สวิตช์'],
	[/\bXbox Series X\b/gi, 'เอ็กซ์บอกซ์ ซีรีส์ เอ็กซ์'],
	[/\bSteam Deck\b/gi, 'สตีมเด็ค'],
	[/\bBandai Namco\b/gi, 'บันได นัมโค'],
	[/\bSquare Enix\b/gi, 'สแควร์ เอนิกซ์'],

	// Music Artists
	[/\bGirls' Generation\b/gi, 'เกิร์ลส์ เจเนอเรชัน'],
	[/\bLE SSERAFIM\b/gi, 'เลอ เซราฟิม'],
	[/\bStray Kids\b/gi, 'สเตรย์คิดส์'],
	[/\bTaylor Swift\b/gi, 'เทย์เลอร์ สวิฟต์'],
	[/\bEd Sheeran\b/gi, 'เอ็ด ชีแรน'],
	[/\bBillie Eilish\b/gi, 'บิลลี ไอลิช'],
	[/\bBeyonc[eé]\b/gi, 'บียอนเซ่'],
	[/\bMichael Jackson\b/gi, 'ไมเคิล แจ็กสัน'],
	[/\bThe Beatles\b/gi, 'เดอะ บีเทิลส์'],
	[/\bBruno Mars\b/gi, 'บรูโน มาร์ส'],
	[/\bLady Gaga\b/gi, 'เลดี้ กาก้า'],
	[/\bAriana Grande\b/gi, 'อาริอานา กรานเด'],
	[/\bOlivia Rodrigo\b/gi, 'โอลิเวีย โรดริโก'],
	[/\bDua Lipa\b/gi, 'ดัว ลิปา'],
	[/\bKaty Perry\b/gi, 'เคที เพอร์รี'],
	[/\bPost Malone\b/gi, 'โพสต์ มาโลน'],
	[/\bThe Weeknd\b/gi, 'เดอะ วีกเอนด์'],
	[/\bBillboard Hot 100\b/gi, 'บิลบอร์ด ฮอต วันฮันเดรด'],
	[/\bGrammy Awards\b/gi, 'รางวัล แกรมมี อวอร์ดส์'],

	// Geography & History
	[/\bMount Everest\b/gi, 'ยอดเขาเอเวอเรสต์'],
	[/\bGrand Canyon\b/gi, 'แกรนด์แคนยอน'],
	[/\bGreat Barrier Reef\b/gi, 'เกรตแบร์ริเออร์รีฟ'],
	[/\bNiagara Falls\b/gi, 'น้ำตกไนแอการา'],
	[/\bVictoria Falls\b/gi, 'น้ำตกวิกตอเรีย'],
	[/\bAngel Falls\b/gi, 'น้ำตกเอนเจล'],
	[/\bAmazon River\b/gi, 'แม่น้ำแอมะซอน'],
	[/\bNile River\b/gi, 'แม่น้ำไนล์'],
	[/\bYangtze River\b/gi, 'แม่น้ำแยงซีเกียง'],
	[/\bMississippi River\b/gi, 'แม่น้ำมิสซิสซิปปี'],
	[/\bSahara Desert\b/gi, 'ทะเลทรายซาฮารา'],
	[/\bGobi Desert\b/gi, 'ทะเลทรายโกบี'],
	[/\bMariana Trench\b/gi, 'ร่องลึกก้นสมุทรมาเรียนา'],
	[/\bDead Sea\b/gi, 'ทะเลเดดซี'],
	[/\bLake Baikal\b/gi, 'ทะเลสาบไบคัล'],
	[/\bLake Superior\b/gi, 'ทะเลสาบสุพีเรีย'],
	[/\bGreat Wall of China\b/gi, 'กำแพงเมืองจีน'],
	[/\bMachu Picchu\b/gi, 'มาชูปิกชู'],
	[/\bTaj Mahal\b/gi, 'ทัชมาฮาล'],
	[/\bPyramids of Giza\b|\bPyramid of Giza\b/gi, 'มหาพีระมิดแห่งกิซา'],
	[/\bEiffel Tower\b/gi, 'หอไอเฟล'],
	[/\bBig Ben\b/gi, 'บิ๊กเบน'],
	[/\bStatue of Liberty\b/gi, 'เทพีเสรีภาพ'],
	[/\bBurj Khalifa\b/gi, 'เบิร์จ คาลิฟา'],
	[/\bSagrada Familia\b/gi, 'ซากราดา ฟามิเลีย'],
	[/\bLouvre Museum\b|\bLouvre\b/gi, 'พิพิธภัณฑ์ลูฟวร์'],
	[/\bTimes Square\b/gi, 'ไทม์สแควร์'],
	[/\bSilicon Valley\b/gi, 'ซิลิคอนแวลลีย์'],
	[/\bWall Street\b/gi, 'วอลล์สตรีท'],
	[/\bAngkor Wat\b/gi, 'นครวัด'],
	[/\bHa Long Bay\b/gi, 'อ่าวฮาลอง'],
	[/\bMount Fuji\b/gi, 'ภูเขาไฟฟูจิ'],
	[/\bWorld War II\b|\bWW2\b/gi, 'สงครามโลกครั้งที่สอง'],
	[/\bWorld War I\b|\bWW1\b/gi, 'สงครามโลกครั้งที่หนึ่ง'],
	[/\bKing Charles III\b/gi, 'คิง ชาร์ลส์ ที่สาม'],
	[/\bQueen Elizabeth II\b/gi, 'ควีน เอลิซาเบธ ที่สอง'],
	[/\bHenry VIII\b/gi, 'เฮนรี ที่แปด'],
	[/\bLouis XIV\b/gi, 'หลุยส์ ที่สิบสี่'],
	[/\bLouis XVI\b/gi, 'หลุยส์ ที่สิบหก'],
	[/\bNapoleon Bonaparte\b/gi, 'นโปเลียน โบนาปาร์ต'],
	[/\bJulius Caesar\b/gi, 'จูเลียส ซีซาร์'],
	[/\bAlexander the Great\b/gi, 'อเล็กซานเดอร์มหาราช'],

	// ─── 2. MATHEMATICS & CHEMICAL FORMULAS ────────────────────────────
	[/E\s*=\s*mc[²2]/gi, 'อี เท่ากับ เอ็มซี กำลังสอง'],
	[/\bCO[₂2]/gi, 'คาร์บอนไดออกไซด์'],
	[/\bCO\b/g, 'คาร์บอนมอนอกไซด์'],
	[/\bH[₂2]O[₂2]/gi, 'ไฮโดรเจนเปอร์ออกไซด์'],
	[/\bH[₂2]O\b|\bH[₂2]O/gi, 'เอชทูโอ'],
	[/\bO[₃3]/gi, 'โอโซน'],
	[/\bO[₂2]/gi, 'ออกซิเจน'],
	[/\bN[₂2]O/gi, 'ก๊าซหัวเราะ หรือ ไนตรัสออกไซด์'],
	[/\bN[₂2]/gi, 'ไนโตรเจน'],
	[/\bCH[₄4]/gi, 'มีเทน'],
	[/\bC[₂2]H[₅5]OH/gi, 'เอทานอล'],
	[/\bCH[₃3]COOH/gi, 'กรดแอซีติก'],
	[/\bC[₆6]H[₁1][₂2]O[₆6]/gi, 'กลูโคส'],
	[/\bCaCO[₃3]/gi, 'แคลเซียมคาร์บอเนต'],
	[/\bNaCl\b/g, 'โซเดียมคลอไรด์ หรือ เกลือแกง'],
	[/\bH[₂2]SO[₄4]/gi, 'กรดซัลฟิวริก'],
	[/\bHCl\b/g, 'กรดไฮโดรคลอริก'],
	[/\bHNO[₃3]/gi, 'กรดไนตริก'],
	[/\bNH[₃3]/gi, 'แอมโมเนีย'],
	[/\bKMnO[₄4]/gi, 'ด่างทับทิม หรือ โพแทสเซียมเปอร์แมงกาเนต'],
	[/\bSiO[₂2]/gi, 'ซิลิกา'],
	[/\bFe[₂2]O[₃3]/gi, 'สนิมเหล็ก หรือ ไอรอนออกไซด์'],
	[/\bNaOH\b/g, 'โซเดียมไฮดรอกไซด์ หรือ โซดาไฟ'],
	[/\bKOH\b/g, 'โพแทสเซียมไฮดรอกไซด์'],
	[/\bpH\b/g, 'พีเอช'],
	[/\bppm\b/gi, 'พีพีเอ็ม'],
	[/\bppb\b/gi, 'พีพีบี'],
	[/\bATP\b/gi, 'เอทีพี'],
	[/\bADP\b/gi, 'เอดีพี'],
	[/\bmRNA\b/gi, 'เอ็มอาร์เอ็นเอ'],
	[/\btRNA\b/gi, 'ทีอาร์เอ็นเอ'],
	[/\brRNA\b/gi, 'อาร์อาร์เอ็นเอ'],
	[/\bDNA\b/gi, 'ดีเอ็นเอ'],
	[/\bRNA\b/gi, 'อาร์เอ็นเอ'],
	[/\bCRISPR-Cas9\b/gi, 'คริสเปอร์ แคสไนน์'],
	[/\bCRISPR\b/gi, 'คริสเปอร์'],
	[/\bUV-([ABC])\b/gi, 'ยูวี $1'],
	[/\bUV\b/gi, 'ยูวี'],
	[/\bPM\s*2\.5\b/gi, 'พีเอ็ม สองจุดห้า'],
	[/\bPM\s*10\b/gi, 'พีเอ็ม สิบ'],

	// ─── 3. UNITS & MEASUREMENTS ────────────────────────────────────────
	[/\bkWh\b/gi, 'กิโลวัตต์ชั่วโมง'],
	[/\bkm\/h\b|กม\.\/ชม\./gi, 'กิโลเมตรต่อชั่วโมง'],
	[/\bm\/s[²2]/gi, 'เมตรต่อวินาทีกำลังสอง'],
	[/\bm\/s\b/gi, 'เมตรต่อวินาที'],
	[/กม\.\/วินาที/g, 'กิโลเมตรต่อวินาที'],
	[/\bg\/cm[³3]/gi, 'กรัมต่อลูกบาศก์เซนติเมตร'],
	[/°C/g, 'องศาเซลเซียส'],
	[/°F/g, 'องศาฟาเรนไฮต์'],
	[/\bTHz\b/gi, 'เทระเฮิรตซ์'],
	[/\bGHz\b/gi, 'กิกะเฮิรตซ์'],
	[/\bMHz\b/gi, 'เมกะเฮิรตซ์'],
	[/\bkHz\b/gi, 'กิโลเฮิรตซ์'],
	[/\bHz\b/g, 'เฮิรตซ์'],
	[/\bdB\b/gi, 'เดซิเบล'],
	[/\bMPa\b/g, 'เมกะปาสคาล'],
	[/\bkPa\b/g, 'กิโลปาสคาล'],
	[/\bhPa\b/g, 'เฮกโตปาสคาล'],
	[/\bcd\b/g, 'แคนเดลา'],
	[/\bmol\b/g, 'โมล'],
	[/\bAU\b/g, 'หน่วยดาราศาสตร์'],
	[/\bparsec\b/gi, 'พาร์เซก'],

	// ─── 4. COMPUTING, TECH & HARDWARE ACRONYMS ────────────────────────
	[/\bChatGPT\b/gi, 'แชตจีพีที'],
	[/\bGPT-4o\b/gi, 'จีพีที โฟร์โอ'],
	[/\bGPT-4\b/gi, 'จีพีที โฟร์'],
	[/\bGPT-3\.5\b/gi, 'จีพีที สามจุดห้า'],
	[/\bOpenAI\b/gi, 'โอเพนเอไอ'],
	[/\bDeepMind\b/gi, 'ดีปมายด์'],
	[/\bDeepSeek\b/gi, 'ดีปซีค'],
	[/\bClaude\b/gi, 'โคลด'],
	[/\bGemini\b/gi, 'เจมิไน'],
	[/\bLLM\b/g, 'แอลแอลเอ็ม'],
	[/\bAGI\b/g, 'เอจีไอ'],
	[/\bAI\b/g, 'เอไอ'],
	[/\bVRMMORPG\b/gi, 'วีอาร์ เกมเสมือนจริง'],
	[/\bVR\b/g, 'วีอาร์'],
	[/\bAR\b/g, 'เออาร์'],
	[/\bIoT\b/gi, 'ไอโอที'],
	[/\bCPU\b/gi, 'ซีพียู'],
	[/\bGPU\b/gi, 'จีพียู'],
	[/\bTPU\b/gi, 'ทีพียู'],
	[/\bRAM\b/gi, 'แรม'],
	[/\bROM\b/gi, 'รอม'],
	[/\bSSD\b/gi, 'เอสเอสดี'],
	[/\bHDD\b/gi, 'ฮาร์ดดิสก์'],
	[/\bUSB-C\b/gi, 'ยูเอสบี ซี'],
	[/\bUSB\b/gi, 'ยูเอสบี'],
	[/\bHDMI\b/gi, 'เอชดีเอ็มไอ'],
	[/\bWi-Fi 6\b/gi, 'ไวไฟ หก'],
	[/\bWi-Fi\b/gi, 'ไวไฟ'],
	[/\bBluetooth\b/gi, 'บลูทูธ'],
	[/\bNFC\b/gi, 'เอ็นเอฟซี'],
	[/\b5G\b/gi, 'ไฟว์จี'],
	[/\b4G LTE\b/gi, 'โฟร์จี แอลทีอี'],
	[/\b4G\b/gi, 'โฟร์จี'],
	[/\bGPS\b/gi, 'จีพีเอส'],
	[/\bGLONASS\b/gi, 'โกลนาส'],
	[/\bGalileo\b/gi, 'กาลิเลโอ'],
	[/\bAPI\b/gi, 'เอพีไอ'],
	[/\bHTTP\b/gi, 'เอชทีทีพี'],
	[/\bHTTPS\b/gi, 'เอชทีทีพีเอส'],
	[/\bURL\b/gi, 'ยูอาร์แอล'],
	[/\bIP Address\b/gi, 'ไอพี แอดเดรส'],
	[/\bIP\b/g, 'ไอพี'],
	[/\bDNS\b/gi, 'ดีเอ็นเอส'],
	[/\bTCP\/IP\b/gi, 'ทีซีพี ไอพี'],
	[/\bSQL\b/gi, 'เอสคิวแอล'],
	[/\bNoSQL\b/gi, 'โนเอสคิวแอล'],
	[/\bHTML5\b/gi, 'เอชทีเอ็มแอล ไฟว์'],
	[/\bHTML\b/gi, 'เอชทีเอ็มแอล'],
	[/\bCSS3\b/gi, 'ซีเอสเอส สาม'],
	[/\bCSS\b/gi, 'ซีเอสเอส'],
	[/\bJavaScript\b/gi, 'จาวาสคริปต์'],
	[/\bTypeScript\b/gi, 'ไทป์สคริปต์'],
	[/\bPython\b/gi, 'ไพธอน'],
	[/\bC\+\+\b/gi, 'ซีพลัสพลัส'],
	[/\bRust\b/gi, 'รัสต์'],
	[/\bLinux\b/gi, 'ลินุกซ์'],
	[/\bWindows 11\b/gi, 'วินโดวส์ สิบเอ็ด'],
	[/\bWindows 10\b/gi, 'วินโดวส์ สิบ'],
	[/\bWindows\b/gi, 'วินโดวส์'],
	[/\bmacOS\b/gi, 'แมคโอเอส'],
	[/\biOS\b/gi, 'ไอโอเอส'],
	[/\bAndroid\b/gi, 'แอนดรอยด์'],
	[/\bGitHub\b/gi, 'กิตฮับ'],
	[/\bGit\b/gi, 'กิต'],
	[/\bBlockchain\b/gi, 'บล็อกเชน'],
	[/\bBitcoin\b/gi, 'บิตคอยน์'],
	[/\bEthereum\b/gi, 'อีเธอเรียม'],
	[/\bDogecoin\b/gi, 'ดอจคอยน์'],
	[/\bNFT\b/gi, 'เอ็นเอฟที'],
	[/\bLED\b/gi, 'แอลอีดี'],
	[/\bOLED\b/gi, 'โอเล็ด'],
	[/\bQLED\b/gi, 'คิวเล็ด'],
	[/\bAMOLED\b/gi, 'อโมเล็ด'],
	[/\bAC\/DC\b/gi, 'เอซี ดีซี'],
	[/\bAC\b/g, 'ไฟฟ้ากระแสสลับ'],
	[/\bDC\b/g, 'ไฟฟ้ากระแสตรง'],

	// ─── 5. ORGANIZATIONS, CURRENCIES & TRANSIT CODES ──────────────────
	[/\bUNESCO\b/gi, 'ยูเนสโก'],
	[/\bUNICEF\b/gi, 'ยูนิเซฟ'],
	[/\bUNHCR\b/gi, 'ยูเอ็นเอชซีอาร์'],
	[/\bWHO\b/g, 'องค์การอนามัยโลก'],
	[/\bWTO\b/gi, 'ดับเบิลยูทีโอ'],
	[/\bIMF\b/gi, 'ไอเอ็มเอฟ'],
	[/\bWorld Bank\b/gi, 'เวิลด์แบงก์'],
	[/\bNATO\b/gi, 'นาโต'],
	[/\bASEAN\b/gi, 'อาเซียน'],
	[/\bAPEC\b/gi, 'เอเปก'],
	[/\bOPEC\b/gi, 'โอเปก'],
	[/\bWWF\b/gi, 'ดับเบิลยูดับเบิลยูเอฟ'],
	[/\bFIFA\b/gi, 'ฟีฟ่า'],
	[/\bIOC\b/gi, 'ไอโอซี'],
	[/\bInterpol\b/gi, 'อินเตอร์โพล'],
	[/\bFBI\b/gi, 'เอฟบีไอ'],
	[/\bCIA\b/gi, 'ซีไอเอ'],
	[/\bMI6\b/gi, 'เอ็มไอซิกส์'],
	[/\bKGB\b/gi, 'เคจีบี'],
	[/\bNASA\b/gi, 'นาซา'],
	[/\bESA\b/gi, 'อีเอสเอ'],
	[/\bJAXA\b/gi, 'แจ็กซา'],
	[/\bCERN\b/gi, 'เซิร์น'],
	[/\bLIGO\b/gi, 'ไลโก'],
	[/\bISS\b/gi, 'ไอเอสเอส'],
	[/\bJWST\b/gi, 'เจดับเบิลยูเอสที'],
	[/\bHubble\b/gi, 'ฮับเบิล'],
	[/\bSpaceX\b/gi, 'สเปซเอ็กซ์'],
	[/\bStarlink\b/gi, 'สตาร์ลิงก์'],
	[/\bStarship\b/gi, 'สตาร์ชิป'],
	[/\bGDP\b/gi, 'จีดีพี'],
	[/\bGNP\b/gi, 'จีเอ็นพี'],
	[/\bCPI\b/gi, 'ซีพีไอ'],
	[/\bUSD\b/gi, 'ดอลลาร์สหรัฐ'],
	[/\bEUR\b/gi, 'ยูโร'],
	[/\bGBP\b/gi, 'ปอนด์สเตอร์ลิง'],
	[/\bJPY\b/gi, 'เยนญี่ปุ่น'],
	[/\bCNY\b/gi, 'หยวนจีน'],
	[/\bKRW\b/gi, 'วอนเกาหลีใต้'],
	[/\bTHB\b/gi, 'บาทไทย'],
	[/\bSGD\b/gi, 'ดอลลาร์สิงคโปร์'],
	[/\bMYR\b/gi, 'ริงกิตมาเลเซีย'],
	[/\bIDR\b/gi, 'รูเปียห์อินโดนีเซีย'],
	[/\bVND\b/gi, 'ดงเวียดนาม'],
	[/\bBTS\b/gi, 'บีทีเอส'],
	[/\bMRT\b/gi, 'เอ็มอาร์ที'],
	[/\bSRT\b/gi, 'รถไฟแห่งประเทศไทย'],
	[/\bBRT\b/gi, 'บีอาร์ที'],
	[/\bBKK\b/gi, 'สุวรรณภูมิ'],
	[/\bDMK\b/gi, 'ดอนเมือง'],
	[/\bHKT\b/gi, 'ภูเก็ต'],
	[/\bCNX\b/gi, 'เชียงใหม่'],
	[/\bKBV\b/gi, 'กระบี่'],
	[/\bHDY\b/gi, 'หาดใหญ่'],
	[/\bCEI\b/gi, 'เชียงราย'],
	[/\bUBP\b/gi, 'อุบลราชธานี'],
	[/\bKKC\b/gi, 'ขอนแก่น'],
	[/\bUTH\b/gi, 'อุดรธานี'],
	[/\bUSM\b/gi, 'เกาะสมุย'],

	// ─── 6. SINGLE ENTITY NAMES & ACRONYMS ──────────────────────────────
	[/\bBLACKPINK\b/gi, 'แบล็กพิงก์'],
	[/\bTWICE\b/gi, 'ทไวซ์'],
	[/\bNewJeans\b/gi, 'นิวจีนส์'],
	[/\baespa\b/gi, 'เอสป้า'],
	[/\bSEVENTEEN\b/gi, 'เซเว่นทีน'],
	[/\bBIGBANG\b/gi, 'บิ๊กแบง'],
	[/\bQueen\b/g, 'วงควีน'],
	[/\bColdplay\b/gi, 'โคลด์เพลย์'],
	[/\bEminem\b/gi, 'เอมิเน็ม'],
	[/\bDrake\b/gi, 'เดรก'],
	[/\bRihanna\b/gi, 'ริฮานน่า'],
	[/\bBNK48\b/gi, 'บีเอ็นเค โฟร์ตีเอต'],
	[/\bCGM48\b/gi, 'ซีจีเอ็ม โฟร์ตีเอต'],
	[/\bPROXIE\b/gi, 'พร็อกซี'],
	[/\bBUS\b/g, 'วงบัส'],
	[/\b4EVE\b/gi, 'โฟร์อีฟ'],
	[/\bATLAS\b/gi, 'แอทลาส'],
	[/\bBillboard\b/gi, 'บิลบอร์ด'],
	[/\bGrammy\b/gi, 'แกรมมี'],
	[/\bOscar\b/gi, 'ออสการ์'],
	[/\bNetflix\b/gi, 'เน็ตฟลิกซ์'],
	[/\bDisney\+\b/gi, 'ดิสนีย์ พลัส'],
	[/\bHBO\b/gi, 'เอชบีโอ'],
	[/\b007\b/g, 'ศูนย์ศูนย์เจ็ด'],
	[/\bBatman\b/gi, 'แบทแมน'],
	[/\bSuperman\b/gi, 'ซูเปอร์แมน'],
	[/\bThor\b/gi, 'ธอร์'],
	[/\bTitanic\b/gi, 'ไททานิค'],
	[/\bOppenheimer\b/gi, 'ออปเพนไฮเมอร์'],
	[/\bInterstellar\b/gi, 'อินเตอร์สเตลลาร์'],
	[/\bInception\b/gi, 'อินเซปชัน'],
	[/\bMatrix\b/gi, 'เมทริกซ์'],
	[/\bAvatar\b/gi, 'อวตาร'],
	[/\bDoraemon\b/gi, 'โดราเอมอน'],
	[/\bNaruto\b/gi, 'นารูโตะ'],
	[/\bBleach\b/gi, 'บลีช เทพมรณะ'],
	[/\bJoJo\b/gi, 'โจโจ้'],
	[/\bFrieren\b/gi, 'ฟรีเรน'],
	[/\bAPTX\s*4869\b/gi, 'เอพีทีเอ็กซ์ สี่แปดหกเก้า'],
	[/\bGundam\b/gi, 'กันดั้ม'],
	[/\bGunpla\b/gi, 'กันพลา'],
	[/\bSlam Dunk\b/gi, 'สแลมดังก์'],
	[/\bHaikyu!!?\b/gi, 'ไฮคิว คู่ตบฟ้าประทาน'],
	[/\bEvangelion\b/gi, 'เอวาเกเลียน'],
	[/\bEVA-01\b/gi, 'เอวา ศูนย์หนึ่ง'],
	[/\bEVA\b/gi, 'เอวา'],
	[/\bGhibli\b/gi, 'จิบลิ'],
	[/\bSuzume\b/gi, 'การผนึกประตูของซูซุเมะ'],
	[/\bK-ON!?\b/gi, 'เค-อง ก๊วนดนตรีแป๋วแหวว'],
	[/\bSteins;Gate\b/gi, 'สไตน์สเกท'],
	[/\bSAO\b/gi, 'เอสเอโอ'],
	[/\bUltraman\b/gi, 'อุลตร้าแมน'],
	[/\bGodzilla\b/gi, 'ก็อดซิลล่า'],
	[/\bVocaloid\b/gi, 'โวคาลอยด์'],
	[/\bCosplay\b/gi, 'คอสเพลย์'],
	[/\bOtaku\b/gi, 'โอตาคุ'],
	[/\bDandadan\b/gi, 'ดันดาดัน'],
	[/\bZZZ\b/gi, 'แซดแซดแซด'],
	[/\bFGO\b/gi, 'เอฟจีโอ'],
	[/\bArknights\b/gi, 'อาร์กไนท์ส'],
	[/\bBiohazard\b/gi, 'ไบโอฮาซาร์ด'],
	[/\bPokemon\b/gi, 'โปเกมอน'],
	[/\bPikachu\b/gi, 'พิคาชู'],
	[/\bSekiro\b/gi, 'เซคิโระ'],
	[/\bTekken\b/gi, 'เทคเคน'],
	[/\bSonic\b/gi, 'โซนิค'],
	[/\bNieR\b/gi, 'เนียร์'],
	[/\b2B\b/g, 'ทูบี'],
	[/\b9S\b/g, 'ไนน์เอส'],
	[/\bDMC\b/g, 'ดีเอ็มซี'],
	[/\bBayonetta\b/gi, 'บาโยเน็ตต้า'],
	[/\bMinecraft\b/gi, 'มายคราฟต์'],
	[/\bRoblox\b/gi, 'โรบล็อกซ์'],
	[/\bFortnite\b/gi, 'ฟอร์ตไนท์'],
	[/\bLoL\b/g, 'แอลโอแอล'],
	[/\bValorant\b/gi, 'วาโลแรนต์'],
	[/\bDota 2\b/gi, 'โดต้า ทู'],
	[/\bCS:GO\b/gi, 'เคาน์เตอร์ สไตรก์'],
	[/\bGTA\b/gi, 'จีทีเอ'],
	[/\bPUBG\b/gi, 'พับจี'],
	[/\bOverwatch\b/gi, 'โอเวอร์วอตช์'],
	[/\bPS5\b/gi, 'พีเอสไฟว์'],
	[/\bPS4\b/gi, 'พีเอสโฟร์'],
	[/\bNintendo\b/gi, 'นินเทนโด'],
	[/\bXbox\b/gi, 'เอ็กซ์บอกซ์'],
	[/\bSteam\b/gi, 'สตีม'],
	[/\bCapcom\b/gi, 'แคปคอม'],
	[/\bFromSoftware\b/gi, 'ฟรอมซอฟต์แวร์'],
	[/\bGOTY\b/gi, 'เกม ออฟ เดอะ เยียร์'],
	[/\bJRPG\b/gi, 'เจ อาร์พีจี'],
	[/\bRPG\b/gi, 'อาร์พีจี'],
	[/\bMMORPG\b/gi, 'เอ็มเอ็มโอ อาร์พีจี'],
	[/\bMOBA\b/gi, 'โมบา'],
	[/\bFPS\b/gi, 'เอฟพีเอส'],
	[/\bEverest\b/gi, 'เอเวอเรสต์'],
	[/\bK2\b/g, 'ยอดเขา เคทู'],
	[/\bStonehenge\b/gi, 'สโตนเฮนจ์'],
	[/\bColosseum\b/gi, 'โคลอสเซียม'],
	[/\bHollywood\b/gi, 'ฮอลลีวูด'],
	[/\bBroadway\b/gi, 'บรอดเวย์'],
	[/\bBorobudur\b/gi, 'บุโรพุทโธ'],
	[/\bFuji\b/g, 'ฟูจิ']
];

export function preprocessThaiTTSText(text: string): string {
	let processed = text;
	for (const [pattern, replacement] of PHONETIC_PREPROCESS_MAP) {
		processed = processed.replace(pattern, replacement);
	}
	// For remaining isolated English capital acronyms (2-4 chars), insert dots/spaces so TTS spells them
	processed = processed.replace(/\b([A-Z]{2,4})\b/g, (match) => {
		return match.split('').join('. ');
	});
	return processed;
}

export function speakThai(
	text: string,
	options: {
		voiceURI?: string;
		rate?: number;
		pitch?: number;
		onStart?: () => void;
		onEnd?: () => void;
		onError?: () => void;
	} = {}
): Promise<void> {
	return new Promise((resolve) => {
		if (!isTTSSupported()) {
			options.onEnd?.();
			resolve();
			return;
		}

		stopSpeech();

		const { voiceURI, rate = 1.0, pitch = 1.0, onStart, onEnd, onError } = options;
		const preprocessedText = preprocessThaiTTSText(text);
		const utterance = new SpeechSynthesisUtterance(preprocessedText);
		utterance.rate = rate;
		utterance.pitch = pitch;

		// Select best Thai voice automatically (or specific requested voice)
		const voices = window.speechSynthesis.getVoices();
		if (voiceURI) {
			const matched = voices.find((v) => v.voiceURI === voiceURI);
			if (matched) {
				utterance.voice = matched;
				utterance.lang = matched.lang || 'th-TH';
			}
		}

		if (!utterance.voice) {
			const thaiVoice = voices.find((v) => v.lang.startsWith('th') || v.lang.includes('TH'));
			if (thaiVoice) {
				utterance.voice = thaiVoice;
				utterance.lang = thaiVoice.lang || 'th-TH';
			} else {
				utterance.lang = 'th-TH';
			}
		}

		utterance.onstart = () => {
			onStart?.();
		};

		utterance.onend = () => {
			activeUtterance = null;
			onEnd?.();
			resolve();
		};

		utterance.onerror = (e) => {
			activeUtterance = null;
			onError?.();
			resolve();
		};

		activeUtterance = utterance;
		window.speechSynthesis.speak(utterance);
	});
}

export function stopSpeech(): void {
	if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
		window.speechSynthesis.cancel();
		activeUtterance = null;
	}
}

// Web Audio API Synthesized Sound Effects
export function playQuizShowSound(type: 'buzz' | 'correct' | 'wrong' | 'tick' | 'lock' | 'step' | 'caught' | 'safe' | 'gong'): void {
	if (typeof window === 'undefined' || !window.AudioContext) return;
	try {
		const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
		const osc = ctx.createOscillator();
		const gain = ctx.createGain();
		osc.connect(gain);
		gain.connect(ctx.destination);

		const now = ctx.currentTime;

		if (type === 'buzz') {
			// Fast buzz ping (Buzzer sound)
			osc.type = 'sawtooth';
			osc.frequency.setValueAtTime(440, now);
			osc.frequency.exponentialRampToValueAtTime(880, now + 0.12);
			gain.gain.setValueAtTime(0.3, now);
			gain.gain.exponentialRampToValueAtTime(0.01, now + 0.15);
			osc.start(now);
			osc.stop(now + 0.15);
		} else if (type === 'correct') {
			// High double ding (Maru / 正解)
			osc.type = 'sine';
			osc.frequency.setValueAtTime(1046.5, now); // C6
			osc.frequency.setValueAtTime(1318.5, now + 0.12); // E6
			gain.gain.setValueAtTime(0.25, now);
			gain.gain.exponentialRampToValueAtTime(0.01, now + 0.35);
			osc.start(now);
			osc.stop(now + 0.35);
		} else if (type === 'wrong') {
			// Low double buzzer (Batsu / 不正解)
			osc.type = 'sawtooth';
			osc.frequency.setValueAtTime(180, now);
			osc.frequency.setValueAtTime(140, now + 0.15);
			gain.gain.setValueAtTime(0.3, now);
			gain.gain.exponentialRampToValueAtTime(0.01, now + 0.35);
			osc.start(now);
			osc.stop(now + 0.35);
		} else if (type === 'tick') {
			osc.type = 'triangle';
			osc.frequency.setValueAtTime(800, now);
			gain.gain.setValueAtTime(0.05, now);
			gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);
			osc.start(now);
			osc.stop(now + 0.04);
		} else if (type === 'lock') {
			// Dramatic UK Chase Lock-in button sound
			osc.type = 'sine';
			osc.frequency.setValueAtTime(587.33, now); // D5
			osc.frequency.exponentialRampToValueAtTime(880, now + 0.08); // A5
			gain.gain.setValueAtTime(0.3, now);
			gain.gain.exponentialRampToValueAtTime(0.01, now + 0.2);
			osc.start(now);
			osc.stop(now + 0.2);
		} else if (type === 'step') {
			// Board Step illumination sound
			osc.type = 'triangle';
			osc.frequency.setValueAtTime(440, now);
			osc.frequency.exponentialRampToValueAtTime(659.25, now + 0.18); // E5
			gain.gain.setValueAtTime(0.25, now);
			gain.gain.exponentialRampToValueAtTime(0.01, now + 0.25);
			osc.start(now);
			osc.stop(now + 0.25);
		} else if (type === 'caught') {
			// Dramatic Caught Doom chord
			osc.type = 'sawtooth';
			osc.frequency.setValueAtTime(110, now); // A2
			osc.frequency.exponentialRampToValueAtTime(55, now + 0.5); // A1
			gain.gain.setValueAtTime(0.4, now);
			gain.gain.exponentialRampToValueAtTime(0.01, now + 0.7);
			osc.start(now);
			osc.stop(now + 0.7);
		} else if (type === 'safe') {
			// Triumphant Fanfare Arpeggio
			osc.type = 'sine';
			osc.frequency.setValueAtTime(523.25, now); // C5
			osc.frequency.setValueAtTime(659.25, now + 0.1); // E5
			osc.frequency.setValueAtTime(783.99, now + 0.2); // G5
			osc.frequency.setValueAtTime(1046.5, now + 0.3); // C6
			gain.gain.setValueAtTime(0.3, now);
			gain.gain.exponentialRampToValueAtTime(0.01, now + 0.6);
			osc.start(now);
			osc.stop(now + 0.6);
		} else if (type === 'gong') {
			// Chaser entrance gong
			osc.type = 'sine';
			osc.frequency.setValueAtTime(220, now);
			osc.frequency.exponentialRampToValueAtTime(110, now + 0.8);
			gain.gain.setValueAtTime(0.35, now);
			gain.gain.exponentialRampToValueAtTime(0.01, now + 0.9);
			osc.start(now);
			osc.stop(now + 0.9);
		}
	} catch (e) {
		// Ignore audio context autoplay restriction errors
	}
}
