<script lang="ts">
	import { onMount } from 'svelte';
	import { fade, scale } from 'svelte/transition';
	import {
		CheckCircleIcon,
		XCircleIcon,
		Volume2Icon,
		RefreshCwIcon
	} from 'svelte-feather-icons';

	import { THAI_QUIZ_DATABASE, THAI_QUIZ_CATEGORIES } from '$lib/data/puzzles/thaiquiz/questions';
	import type { ThaiQuizItem } from '$lib/data/puzzles/thaiquiz/types';
	import { speakThai, stopSpeech, playQuizShowSound } from '$lib/utils/tts';

	let currentItem: ThaiQuizItem | null = null;
	let choices: { text: string; isCorrect: boolean }[] = [];
	let selectedChoiceIdx: number | null = null;
	let isAnswered = false;
	let isCorrect = false;
	let isSpeaking = false;

	function loadNewQuestion() {
		stopSpeech();
		isSpeaking = false;
		isAnswered = false;
		isCorrect = false;
		selectedChoiceIdx = null;

		const randomItem = THAI_QUIZ_DATABASE[Math.floor(Math.random() * THAI_QUIZ_DATABASE.length)];
		currentItem = randomItem;

		const choiceList = randomItem.choices.map((c, idx) => ({
			text: c,
			isCorrect: idx === randomItem.correctIndex
		}));

		choices = choiceList.sort(() => 0.5 - Math.random());
	}

	onMount(() => {
		loadNewQuestion();
	});

	function handleChoiceClick(idx: number) {
		if (isAnswered || !currentItem) return;
		selectedChoiceIdx = idx;
		isAnswered = true;
		isCorrect = choices[idx].isCorrect;

		if (isCorrect) {
			playQuizShowSound('correct');
		} else {
			playQuizShowSound('wrong');
		}
	}

	async function readQuestion() {
		if (!currentItem || isSpeaking) return;
		isSpeaking = true;
		await speakThai(currentItem.question, {
			rate: 0.95,
			onEnd: () => {
				isSpeaking = false;
			}
		});
		isSpeaking = false;
	}

	$: activeCategory = currentItem ? THAI_QUIZ_CATEGORIES.find((c) => c.id === currentItem?.category) : null;
</script>

<div class="flex flex-col justify-between gap-3 sm:gap-4 w-full">
	<!-- Compact Subheader -->
	<div class="flex items-center justify-between border-b border-slate-800/70 pb-2.5">
		<div class="flex items-center gap-2">
			<span class="h-2 w-2 rounded-full bg-yellow-400"></span>
			<span class="text-xs uppercase tracking-wider text-yellow-400 font-bold">Thai Quiz</span>
			{#if activeCategory}
				<span class="badge {activeCategory.color} badge-xs font-semibold text-[10px] hidden sm:inline-flex">
					{activeCategory.icon} {activeCategory.name}
				</span>
			{/if}
		</div>

		<div class="flex items-center gap-2">
			<button
				class="btn btn-xs btn-ghost text-amber-400 hover:bg-amber-400/15 gap-1 px-2"
				on:click={readQuestion}
				title="TTS Voice"
			>
				<Volume2Icon size="13" class={isSpeaking ? 'animate-bounce' : ''} />
				<span class="text-[11px]">{isSpeaking ? 'Reading...' : 'Listen'}</span>
			</button>

			<a
				href="/puzzles/thaiquiz"
				class="inline-flex items-center text-[11px] sm:text-xs font-bold px-2.5 py-1 rounded-lg bg-amber-500/20 text-amber-300 border border-amber-500/40 hover:bg-amber-500/30 transition-all shadow-sm"
			>
				Full Mode →
			</a>
		</div>
	</div>

	<!-- Question Content & 4 Choices -->
	{#if currentItem}
		<div class="flex flex-col gap-2.5 sm:gap-3.5 my-auto" in:fade={{ duration: 150 }}>
			<!-- Question Box -->
			<div class="bg-slate-950/80 border border-slate-800 rounded-xl p-2.5 sm:p-4 text-center shadow-inner">
				<p class="text-xs sm:text-base font-black text-white leading-snug tracking-tight max-w-xl mx-auto">
					{currentItem.question}
				</p>
			</div>

			<!-- 4 Choices Grid (2x2 on all screens) -->
			<div class="grid grid-cols-2 gap-1.5 sm:gap-2.5 max-w-xl mx-auto w-full">
				{#each choices as choice, cIdx}
					{@const isSelected = selectedChoiceIdx === cIdx}
					<button
						disabled={isAnswered}
						on:click={() => handleChoiceClick(cIdx)}
						class="p-2 sm:p-3 rounded-xl border-2 text-left flex items-center justify-between gap-1.5 sm:gap-2 transition-all duration-150 transform active:scale-95 shadow-sm
						{isAnswered && choice.isCorrect
							? 'bg-emerald-500/20 border-emerald-400 text-emerald-300'
							: isAnswered && isSelected && !choice.isCorrect
								? 'bg-rose-500/20 border-rose-500 text-rose-300 animate-shake'
								: 'bg-slate-950/80 border-slate-800 text-slate-200 hover:border-amber-400/80 hover:text-white'}"
					>
						<div class="flex items-center gap-1.5 min-w-0">
							<span class="w-4 h-4 sm:w-5 sm:h-5 rounded bg-slate-900 border border-slate-700 flex items-center justify-center font-mono text-[10px] sm:text-xs font-bold text-slate-400 shrink-0">
								{['1', '2', '3', '4'][cIdx]}
							</span>
							<span class="font-bold text-xs sm:text-sm truncate">{choice.text}</span>
						</div>

						{#if isAnswered && choice.isCorrect}
							<CheckCircleIcon size="14" class="text-emerald-400 shrink-0" />
						{:else if isAnswered && isSelected && !choice.isCorrect}
							<XCircleIcon size="14" class="text-rose-400 shrink-0" />
						{/if}
					</button>
				{/each}
			</div>

			<!-- Feedback Card (compact) -->
			{#if isAnswered}
				<div class="bg-slate-950/90 border {isCorrect ? 'border-emerald-500/40' : 'border-rose-500/40'} rounded-xl p-2 sm:p-2.5 flex items-center justify-between gap-2 shadow-lg max-w-xl mx-auto w-full" in:scale>
					<div class="flex flex-col gap-0.5 text-[11px] sm:text-xs text-slate-300 min-w-0">
						<span class="font-bold {isCorrect ? 'text-emerald-400' : 'text-rose-400'} flex items-center gap-1">
							{isCorrect ? '🎉 Correct!' : '❌ Incorrect!'}
							<span class="text-slate-400 font-normal truncate">Answer: <strong class="text-white">{currentItem.choices[currentItem.correctIndex]}</strong></span>
						</span>
					</div>

					<button
						class="btn btn-xs btn-warning text-warning-content font-bold gap-1 shrink-0 px-2"
						on:click={loadNewQuestion}
					>
						<RefreshCwIcon size="11" />
						Next 🎲
					</button>
				</div>
			{/if}
		</div>
	{/if}
</div>
