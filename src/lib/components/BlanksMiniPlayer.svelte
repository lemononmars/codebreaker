<script lang="ts">
	import { onMount } from 'svelte';
	import dict from '$lib/dict.json';
	import { CheckCircleIcon } from 'svelte-feather-icons';

	interface ThaiBlock {
		base: string;
		upper: string;
		lower: string;
	}

	let word = '';
	let blocks: ThaiBlock[] = [];
	let targetChar = '';
	let choices: string[] = [];
	let selectedChoice = '';
	let wrongChoice = '';
	let isSolved = false;

	const allThaiLetters = [
		'ก', 'ข', 'ค', 'ง', 'จ', 'ฉ', 'ช', 'ซ', 'ญ', 'ด', 'ต', 'ถ', 'ท', 'น',
		'บ', 'ป', 'ผ', 'ฝ', 'พ', 'ฟ', 'ม', 'ย', 'ร', 'ล', 'ว', 'ส', 'ห', 'อ'
	];

	function isUpperChar(c: string): boolean {
		return ['ั', 'ิ', 'ี', 'ึ', 'ื', '็', '่', '้', '๊', '๋', '์', 'ํ'].includes(c);
	}

	function isLowerChar(c: string): boolean {
		return ['ุ', 'ู', 'ฺ'].includes(c);
	}

	function parseThaiBlocks(w: string): ThaiBlock[] {
		const result: ThaiBlock[] = [];
		for (const char of w) {
			if (isUpperChar(char)) {
				if (result.length > 0) {
					result[result.length - 1].upper += char;
				} else {
					result.push({ base: '', upper: char, lower: '' });
				}
			} else if (isLowerChar(char)) {
				if (result.length > 0) {
					result[result.length - 1].lower += char;
				} else {
					result.push({ base: '', upper: '', lower: char });
				}
			} else {
				result.push({ base: char, upper: '', lower: '' });
			}
		}
		return result;
	}

	import dictPythaiRaw from '$lib/utils/dict_pythainlp.json?raw';
	const pythaiMap: Record<string, number> = JSON.parse(dictPythaiRaw);

	function loadNewQuestion() {
		isSolved = false;
		wrongChoice = '';
		selectedChoice = '';

		const eligibleWords = dict.filter((w) => {
			const bList = parseThaiBlocks(w);
			if (bList.length < 3 || bList.length > 7) return false;
			if ((pythaiMap[w] ?? 0) < 1) return false;
			const baseChars = bList.map((b) => b.base).filter((b) => allThaiLetters.includes(b));
			const uniqueBases = Array.from(new Set(baseChars));
			return uniqueBases.some((c) => baseChars.filter((x) => x === c).length >= 2);
		});

		let foundWord = '';
		let foundChar = '';
		let foundBlocks: ThaiBlock[] = [];

		let attempts = 0;
		while (attempts < 500 && eligibleWords.length > 0) {
			attempts++;
			const randomW = eligibleWords[Math.floor(Math.random() * eligibleWords.length)];
			const bList = parseThaiBlocks(randomW);
			const baseChars = bList.map((b) => b.base).filter((b) => allThaiLetters.includes(b));
			const uniqueBases = Array.from(new Set(baseChars));
			const multiples = uniqueBases.filter((c) => baseChars.filter((x) => x === c).length >= 2);

			if (multiples.length > 0) {
				foundChar = multiples[Math.floor(Math.random() * multiples.length)];
				foundWord = randomW;
				foundBlocks = bList;
				break;
			}
		}

		if (!foundWord) {
			foundWord = 'กงเกวียน';
			foundChar = 'ก';
			foundBlocks = parseThaiBlocks('กงเกวียน');
		}

		word = foundWord;
		blocks = foundBlocks;
		targetChar = foundChar;

		const distractors = allThaiLetters.filter((c) => c !== targetChar);
		const shuffledDistractors = [...distractors].sort(() => 0.5 - Math.random()).slice(0, 3);
		choices = [targetChar, ...shuffledDistractors].sort(() => 0.5 - Math.random());
	}

	onMount(() => {
		loadNewQuestion();
	});

	function handleChoiceClick(choice: string) {
		if (isSolved) return;
		selectedChoice = choice;
		if (choice === targetChar) {
			isSolved = true;
			wrongChoice = '';
		} else {
			wrongChoice = choice;
			setTimeout(() => (wrongChoice = ''), 800);
		}
	}
</script>

<div class="bg-slate-900/50 backdrop-blur-xl border border-slate-800/90 rounded-3xl p-4 sm:p-6 md:p-8 shadow-2xl relative overflow-hidden">
	<div class="absolute top-0 right-0 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none"></div>

	<!-- Header -->
	<div class="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4 border-b border-slate-800/70 pb-4">
		<div>
			<div class="flex items-center gap-2 mb-1">
				<span class="h-2 w-2 rounded-full bg-sky-400"></span>
				<span class="text-xs uppercase tracking-widest text-sky-400 font-bold">Daily Blanks</span>
			</div>
			<h2 class="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
				ซ่อนอักษร
			</h2>
		</div>
		<a
			href="/puzzles/blanks"
			class="inline-flex items-center gap-1.5 text-xs font-bold px-4 py-2 rounded-xl bg-sky-500/20 text-sky-300 border border-sky-500/40 hover:bg-sky-500/30 transition-all transform hover:-translate-y-0.5 shadow-md"
		>
			เล่นโหมดเต็ม →
		</a>
	</div>

	<!-- Content Box -->
	<div class="flex flex-col items-center space-y-6">
		<!-- Word Display with Blanks -->
		<div class="flex items-center justify-center gap-1 sm:gap-2 py-4 px-2 sm:px-4 bg-slate-950/70 border border-slate-800 rounded-2xl w-full max-w-lg shadow-inner overflow-x-auto">
			{#each blocks as b}
				{@const isBlank = b.base === targetChar}
				<div class="flex flex-col items-center justify-center select-none min-w-[28px] max-w-[44px] flex-1">
					<!-- Upper mark -->
					<div class="h-6 sm:h-8 font-black text-xl sm:text-3xl text-sky-400 flex items-center justify-center leading-none">
						{b.upper || ''}
					</div>
					<!-- Base box -->
					<div
						class="w-full aspect-square max-h-11 sm:max-h-14 rounded-xl border-2 flex items-center justify-center font-black text-base sm:text-2xl transition-all
						{isBlank
							? isSolved
								? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/50'
								: 'bg-sky-500/10 text-sky-300 border-sky-500/40 shadow-sm'
							: 'border-slate-800/80 bg-slate-900/60 text-white'}"
					>
						{isBlank ? (isSolved ? targetChar : '_') : b.base}
					</div>
					<!-- Lower mark -->
					<div class="h-6 sm:h-8 font-black text-xl sm:text-3xl text-sky-400 flex items-center justify-center leading-none">
						{b.lower || ''}
					</div>
				</div>
			{/each}
		</div>

		<!-- Fixed Height Container for Choices & Solved State (Prevents Card Resizing) -->
		<div class="w-full max-w-md h-[116px] sm:h-[64px] flex items-center justify-center">
			{#if !isSolved}
				<div class="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full h-full">
					{#each choices as choice}
						<button
							on:click={() => handleChoiceClick(choice)}
							class="w-full h-full rounded-2xl font-black text-xl sm:text-2xl border-2 transition-all transform hover:scale-105 active:scale-95 shadow-md flex items-center justify-center
							{wrongChoice === choice
								? 'bg-rose-500/20 text-rose-300 border-rose-500/50 animate-shake'
								: 'bg-slate-950 text-slate-100 border-slate-800 hover:border-sky-400 hover:text-sky-300'}"
						>
							{choice}
						</button>
					{/each}
				</div>
			{:else}
				<!-- Solved Row: Correct Badge + Next Question Button in same row -->
				<div class="flex flex-row items-center justify-center gap-3 w-full h-full">
					<div class="flex-1 h-full px-4 rounded-2xl text-xs sm:text-sm font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 flex items-center justify-center gap-2">
						<CheckCircleIcon size="18" /> ถูกต้อง! คำว่า "{word}"
					</div>
					<button
						on:click={loadNewQuestion}
						class="px-6 h-full rounded-2xl font-black bg-sky-500 hover:bg-sky-400 text-slate-950 transition-all shadow-lg shadow-sky-500/20 text-sm whitespace-nowrap flex items-center justify-center"
						style="color: #0f172a;"
					>
						ข้อต่อไป 🎲 →
					</button>
				</div>
			{/if}
		</div>
	</div>
</div>
