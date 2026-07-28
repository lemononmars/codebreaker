<script lang="ts">
	import { onMount } from 'svelte';
	import { wordDatabase, type WordItem } from '$lib/data/puzzles/spelling/words';
	import { CheckCircleIcon, XCircleIcon } from 'svelte-feather-icons';

	let currentItem: WordItem | null = null;
	let choices: { text: string; isCorrect: boolean }[] = [];
	let selectedText = '';
	let isAnswered = false;
	let isCorrectChoice = false;

	function loadNewQuestion() {
		isAnswered = false;
		isCorrectChoice = false;
		selectedText = '';

		const item = wordDatabase[Math.floor(Math.random() * wordDatabase.length)];
		currentItem = item;

		const wrong = item.incorrect[Math.floor(Math.random() * item.incorrect.length)];
		const list = [
			{ text: item.correct, isCorrect: true },
			{ text: wrong, isCorrect: false }
		];
		choices = list.sort(() => 0.5 - Math.random());
	}

	onMount(() => {
		loadNewQuestion();
	});

	function handleChoiceClick(choice: { text: string; isCorrect: boolean }) {
		if (isAnswered) return;
		selectedText = choice.text;
		isAnswered = true;
		isCorrectChoice = choice.isCorrect;
	}
</script>

<div class="bg-slate-900/50 backdrop-blur-xl border border-slate-800/90 rounded-3xl p-6 md:p-8 shadow-2xl relative overflow-hidden">
	<div class="absolute top-0 right-0 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none"></div>

	<!-- Header -->
	<div class="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4 border-b border-slate-800/70 pb-4">
		<div>
			<div class="flex items-center gap-2 mb-1">
				<span class="h-2 w-2 rounded-full bg-teal-400"></span>
				<span class="text-xs uppercase tracking-widest text-teal-400 font-bold">Daily Spelling Quiz</span>
			</div>
			<h2 class="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
				ปริศนาสะกดศัพท์
			</h2>
		</div>
		<a
			href="/puzzles/spellingquiz"
			class="inline-flex items-center gap-1.5 text-xs font-bold px-4 py-2 rounded-xl bg-teal-500/20 text-teal-300 border border-teal-500/40 hover:bg-teal-500/30 transition-all transform hover:-translate-y-0.5 shadow-md"
		>
			เล่นโหมดเต็ม →
		</a>
	</div>

	<!-- Content Box -->
	{#if currentItem}
		<div class="flex flex-col items-center space-y-6">
			<!-- 2 Choices -->
			<div class="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-lg">
				{#each choices as c}
					<button
						on:click={() => handleChoiceClick(c)}
						disabled={isAnswered}
						class="py-4 px-6 rounded-2xl font-black text-xl sm:text-2xl border-2 transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-md text-center
						{isAnswered && c.isCorrect
							? 'bg-emerald-500 text-slate-950 border-emerald-300 shadow-emerald-500/30'
							: isAnswered && !c.isCorrect && selectedText === c.text
							? 'bg-rose-500/20 text-rose-300 border-rose-500/50'
							: 'bg-slate-950 text-slate-100 border-slate-800 hover:border-teal-400 hover:text-teal-300'}"
						style={isAnswered && c.isCorrect ? 'color: #0f172a;' : ''}
					>
						{c.text}
					</button>
				{/each}
			</div>

			<!-- Fixed Height Container for Helper Text / Answer Response (Prevents Card Resizing) -->
			<div class="w-full max-w-lg h-12 flex items-center justify-center">
				{#if !isAnswered}
					<p class="text-xs text-slate-400 font-semibold tracking-wide text-center">
						เลือกคำที่สะกดถูก
					</p>
				{:else}
					<div class="flex flex-row items-center justify-center gap-3 w-full h-full">
						<div
							class="flex-1 h-full px-4 rounded-2xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2
							{isCorrectChoice
								? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
								: 'bg-rose-500/20 text-rose-300 border border-rose-500/30'}"
						>
							{#if isCorrectChoice}
								<CheckCircleIcon size="18" />
								<span>ถูกต้อง! "{currentItem.correct}"</span>
							{:else}
								<XCircleIcon size="18" />
								<span>เฉลยคือ "{currentItem.correct}"</span>
							{/if}
						</div>

						<button
							on:click={loadNewQuestion}
							class="px-6 h-full rounded-2xl font-black bg-teal-500 hover:bg-teal-400 text-slate-950 transition-all shadow-lg shadow-teal-500/20 text-sm whitespace-nowrap flex items-center justify-center"
							style="color: #0f172a;"
						>
							ข้อต่อไป 🎲 →
						</button>
					</div>
				{/if}
			</div>
		</div>
	{/if}
</div>
