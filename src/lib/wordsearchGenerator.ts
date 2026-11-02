import { splitWord } from '$lib/utils/thaiwords';

export type WordSearchWord = { word: string; chars: string[]; found: boolean };

export function generateWordSearch(
	wordsInput: string,
	rows: number,
	columns: number,
	difficulty: number,
	random = Math.random
) {
	if (![rows, columns].every((n) => Number.isInteger(n) && n >= 2 && n <= 50)) {
		throw new Error(
			'ขนาดตารางต้องเป็นจำนวนเต็มตั้งแต่ 2 ถึง 50 / Grid dimensions must be integers from 2 to 50.'
		);
	}
	const rawWords = wordsInput
		.split('\n')
		.map((w) => w.trim())
		.filter((w) => w.length > 0);
	const hasThai = rawWords.some((w) => /[\u0E00-\u0E7F]/.test(w));
	const hasEnglish = rawWords.some((w) => /[A-Za-z]/.test(w));
	if (hasThai && hasEnglish)
		throw new Error(
			'กรุณาใช้ภาษาเดียวในรายการคำศัพท์ / Use either Thai or English; mixed-language lists are not supported.'
		);
	if (!hasThai && rawWords.some((w) => !/^[A-Za-z]+$/.test(w)))
		throw new Error(
			'คำศัพท์ภาษาอังกฤษต้องใช้ตัวอักษร A–Z เท่านั้น / English words must contain only letters A–Z.'
		);
	const tokenize = hasThai ? splitWord : (word: string) => Array.from(word);
	const wordsList = [
		...new Set(rawWords.map((w) => (hasThai ? w.normalize('NFC') : w.toUpperCase())))
	].sort((a, b) => tokenize(b).length - tokenize(a).length);
	const tooLong = wordsList.find((w) => tokenize(w).length > Math.max(rows, columns));
	if (tooLong)
		throw new Error(
			`คำยาวเกินขนาดตาราง / "${tooLong}" needs at least ${
				tokenize(tooLong).length
			} rows or columns.`
		);

	if (wordsList.length === 0) {
		throw new Error('กรุณาใส่คำศัพท์อย่างน้อย 1 คำ / Enter at least one word.');
	}

	const dirsEasy = [
		[0, 1],
		[1, 0]
	];
	const dirsMed = [
		[0, 1],
		[1, 0],
		[1, 1],
		[-1, 1]
	];
	const dirsHard = [
		[0, 1],
		[1, 0],
		[1, 1],
		[-1, 1],
		[0, -1],
		[-1, 0],
		[-1, -1],
		[1, -1]
	];
	const availableDirs = difficulty === 1 ? dirsEasy : difficulty === 2 ? dirsMed : dirsHard;
	const allDirs = [
		[0, 1],
		[1, 0],
		[1, 1],
		[-1, 1],
		[0, -1],
		[-1, 0],
		[-1, -1],
		[1, -1]
	];
	const alphabet = (
		hasThai ? 'กขคฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรลวศษสหฬอฮ' : 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
	).split('');

	function countWord(wordChars: string[], g: string[][]) {
		const matches = new Set<string>();
		if (!wordChars.length) return 0;
		for (let r = 0; r < rows; r++) {
			for (let c = 0; c < columns; c++) {
				for (let dir of allDirs) {
					let match = true;
					for (let i = 0; i < wordChars.length; i++) {
						let rr = r + i * dir[0];
						let cc = c + i * dir[1];
						if (rr < 0 || rr >= rows || cc < 0 || cc >= columns || g[rr][cc] !== wordChars[i]) {
							match = false;
							break;
						}
					}
					if (match) {
						const endR = r + (wordChars.length - 1) * dir[0];
						const endC = c + (wordChars.length - 1) * dir[1];
						matches.add([`${r},${c}`, `${endR},${endC}`].sort().join(':'));
					}
				}
			}
		}
		return matches.size;
	}

	let bestGrid: string[][] | null = null;
	let bestWordsData: WordSearchWord[] = [];
	const maxAttempts = 100;

	for (let globalAttempt = 0; globalAttempt < maxAttempts; globalAttempt++) {
		let newGrid = Array.from({ length: rows }, () => Array(columns).fill(''));
		let newWordsData: WordSearchWord[] = [];

		function placeWord(wordChars: string[]) {
			const candidates: { r: number; c: number; dir: number[]; overlap: number; tie: number }[] =
				[];
			for (const dir of availableDirs)
				for (let r = 0; r < rows; r++)
					for (let c = 0; c < columns; c++) {
						let overlap = 0;
						let fits = true;
						for (let i = 0; i < wordChars.length; i++) {
							const rr = r + i * dir[0],
								cc = c + i * dir[1];
							if (
								rr < 0 ||
								rr >= rows ||
								cc < 0 ||
								cc >= columns ||
								(newGrid[rr][cc] !== '' && newGrid[rr][cc] !== wordChars[i])
							) {
								fits = false;
								break;
							}
							if (newGrid[rr][cc] === wordChars[i]) overlap++;
						}
						if (fits) candidates.push({ r, c, dir, overlap, tie: random() });
					}
			candidates.sort((a, b) => b.overlap - a.overlap || a.tie - b.tie);
			const candidate = candidates[0];
			if (!candidate) return false;
			for (let i = 0; i < wordChars.length; i++)
				newGrid[candidate.r + i * candidate.dir[0]][candidate.c + i * candidate.dir[1]] =
					wordChars[i];
			return true;
		}

		let allPlaced = true;
		wordsList.forEach((w) => {
			const chars = tokenize(w);
			const existing = countWord(chars, newGrid);
			const pos = existing === 1 || (existing === 0 && placeWord(chars));
			if (pos) {
				newWordsData.push({ word: w, chars, found: false });
			} else {
				allPlaced = false;
			}
		});

		if (!allPlaced) continue; // Try again if couldn't fit words
		if (difficulty === 3) {
			wordsList.forEach((w) => {
				const chars = tokenize(w);
				if (chars.length > 2) {
					const nearMissLen = chars.length - 1;
					const nearMissChars = chars.slice(0, nearMissLen);
					nearMissChars[nearMissLen - 1] = alphabet[Math.floor(random() * alphabet.length)];
					placeWord(nearMissChars);
				}
			});
		}

		let fillLetters = [...alphabet];
		if (difficulty === 2) {
			const allWordChars = wordsList.flatMap((w) => tokenize(w));
			if (allWordChars.length > 0) fillLetters = allWordChars;
		} else if (difficulty === 3) {
			const allWordChars = wordsList.flatMap((w) => tokenize(w));
			if (allWordChars.length > 0) fillLetters = [...fillLetters, ...allWordChars, ...allWordChars];
		}

		for (let r = 0; r < rows; r++) {
			for (let c = 0; c < columns; c++) {
				if (newGrid[r][c] === '') {
					newGrid[r][c] = fillLetters[Math.floor(random() * fillLetters.length)];
				}
			}
		}

		// Validate Uniqueness
		let isUnique = true;
		for (let w of wordsList) {
			const chars = tokenize(w);
			// Count physical placements once, including palindromes and embedded words.
			if (countWord(chars, newGrid) !== 1) {
				isUnique = false;
				break;
			}
		}

		if (isUnique) {
			bestGrid = newGrid;
			bestWordsData = newWordsData;
			break;
		}
	}

	if (!bestGrid) {
		throw new Error(
			'ไม่สามารถสร้างตารางคำตอบเดียวได้ กรุณาเพิ่มขนาดตารางหรือลดจำนวนคำ / Could not place all words uniquely. Increase the grid size or reduce the word list.'
		);
	}

	return { grid: bestGrid, wordsData: bestWordsData.sort((a, b) => a.word.localeCompare(b.word)) };
}
