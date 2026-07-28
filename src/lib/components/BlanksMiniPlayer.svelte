<script lang="ts">
	import { onMount } from 'svelte';
	import dict from '$lib/dict.json';
	import { CheckCircleIcon } from 'svelte-feather-icons';

	let word = '';
	let targetChar = '';
	let blankIndices: number[] = [];
	let choices: string[] = [];
	let selectedChoice = '';
	let wrongChoice = '';
	let isSolved = false;

	const allThaiLetters = [
		'ก', 'ข', 'ค', 'ง', 'จ', 'ฉ', 'ช', 'ซ', 'ญ', 'ด', 'ต', 'ถ', 'ท', 'น',
		'บ', 'ป', 'ผ', 'ฝ', 'พ', 'ฟ', 'ม', 'ย', 'ร', 'ล', 'ว', 'ส', 'ห', 'อ'
	];

	function loadNewQuestion() {
		isSolved = false;
		wrongChoice = '';
		selectedChoice = '';

		const eligibleWords = dict.filter(
			(w) => w.length >= 4 && w.length <= 7 && /^[ก-ฮ]+$/.test(w)
		);

		let foundWord = '';
		let foundChar = '';
		let foundIndices: number[] = [];

		let attempts = 0;
		while (attempts < 500) {
			attempts++;
			const randomW = eligibleWords[Math.floor(Math.random() * eligibleWords.length)];
			const chars = randomW.split('');
			const uniqueChars = Array.from(new Set(chars));
			const multiples = uniqueChars.filter((c) => chars.filter((x) => x === c).length >= 2);

			if (multiples.length > 0) {
				foundChar = multiples[Math.floor(Math.random() * multiples.length)];
				foundWord = randomW;
				foundIndices = chars.map((c, i) => (c === foundChar ? i : -1)).filter((i) => i !== -1);
				break;
			}
		}

		if (!foundWord) {
			foundWord = 'กงเกวียน';
			foundChar = 'ก';
			foundIndices = [0, 4];
		}

		word = foundWord;
		targetChar = foundChar;
		blankIndices = foundIndices;

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

<div class="bg-slate-900/50 backdrop-blur-xl border border-slate-800/90 rounded-3xl p-6 md:p-8 shadow-2xl relative overflow-hidden">
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
		<div class="flex items-center justify-center gap-1.5 sm:gap-3 py-6 px-4 bg-slate-950/70 border border-slate-800 rounded-2xl w-full max-w-lg shadow-inner">
			{#each word.split('') as char, idx}
				{#if blankIndices.includes(idx)}
					<div
						class="w-10 h-12 sm:w-14 sm:h-16 rounded-xl border-2 flex items-center justify-center font-black text-xl sm:text-3xl transition-all
						{isSolved
							? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/50'
							: 'bg-sky-500/10 text-sky-300 border-sky-500/40'}"
					>
						{isSolved ? targetChar : '_'}
					</div>
				{:else}
					<div class="w-10 h-12 sm:w-14 sm:h-16 flex items-center justify-center font-black text-xl sm:text-3xl text-white">
						{char}
					</div>
				{/if}
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
