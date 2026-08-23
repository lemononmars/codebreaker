<script lang="ts">
	import { onMount } from 'svelte';
	import { fade, scale } from 'svelte/transition';
	import {
		CheckCircleIcon,
		XCircleIcon,
		Volume2Icon,
		RefreshCwIcon,
		BookOpenIcon,
		ArrowRightIcon
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

<div class="bg-slate-900/50 backdrop-blur-xl border border-slate-800/90 rounded-3xl p-6 md:p-8 shadow-2xl relative overflow-hidden flex flex-col justify-between gap-6 min-h-[420px]">
	<div class="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

	<!-- Header -->
	<div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 border-b border-slate-800/70 pb-4">
		<div>
			<div class="flex items-center gap-2 mb-1">
				<span class="h-2 w-2 rounded-full bg-amber-400"></span>
				<span class="text-xs uppercase tracking-widest text-amber-400 font-bold">Thai Common Knowledge</span>
			</div>
			<div class="flex items-center gap-2.5">
				<h2 class="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
					ควิซความรู้รอบตัวไทย 🇹🇭
				</h2>
				{#if activeCategory}
					<span class="badge {activeCategory.color} badge-sm font-semibold hidden sm:inline-flex">
						{activeCategory.icon} {activeCategory.name}
					</span>
				{/if}
			</div>
		</div>

		<div class="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-end">
			<button
				class="btn btn-xs sm:btn-sm btn-ghost text-amber-400 hover:bg-amber-400/15 gap-1.5"
				on:click={readQuestion}
				title="ฟังเสียงอ่านโจทย์ (TTS)"
			>
				<Volume2Icon size="15" class={isSpeaking ? 'animate-bounce' : ''} />
				<span class="text-xs">{isSpeaking ? 'กำลังอ่าน...' : 'ฟังโจทย์'}</span>
			</button>

			<a
				href="/puzzles/thaiquiz"
				class="inline-flex items-center gap-1.5 text-xs font-bold px-4 py-2 rounded-xl bg-amber-500/20 text-amber-300 border border-amber-500/40 hover:bg-amber-500/30 transition-all transform hover:-translate-y-0.5 shadow-md"
			>
				เล่นโหมดเต็ม →
			</a>
		</div>
	</div>

	<!-- Question Content & 4 Choices -->
	{#if currentItem}
		<div class="flex flex-col gap-5 my-auto" in:fade={{ duration: 200 }}>
			<div class="bg-slate-950/70 border border-slate-800 rounded-2xl p-4 sm:p-5 text-center shadow-inner">
				<p class="text-base sm:text-xl font-black text-white leading-relaxed tracking-tight max-w-2xl mx-auto">
					{currentItem.question}
				</p>
			</div>

			<!-- 4 Choices Grid -->
			<div class="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl mx-auto w-full">
				{#each choices as choice, cIdx}
					{@const isSelected = selectedChoiceIdx === cIdx}
					<button
						disabled={isAnswered}
						on:click={() => handleChoiceClick(cIdx)}
						class="p-3.5 sm:p-4 rounded-2xl border-2 text-left flex items-center justify-between gap-3 transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg
						{isAnswered && choice.isCorrect
							? 'bg-emerald-500/20 border-emerald-400 text-emerald-300'
							: isAnswered && isSelected && !choice.isCorrect
								? 'bg-rose-500/20 border-rose-500 text-rose-300 animate-shake'
								: 'bg-slate-950/80 border-slate-800 text-slate-200 hover:border-amber-400/80 hover:text-white'}"
					>
						<div class="flex items-center gap-2.5">
							<span class="w-6 h-6 rounded-lg bg-slate-900 border border-slate-700 flex items-center justify-center font-mono text-xs font-bold text-slate-400">
								{['1', '2', '3', '4'][cIdx]}
							</span>
							<span class="font-bold text-sm sm:text-base">{choice.text}</span>
						</div>

						{#if isAnswered && choice.isCorrect}
							<CheckCircleIcon size="18" class="text-emerald-400 shrink-0" />
						{:else if isAnswered && isSelected && !choice.isCorrect}
							<XCircleIcon size="18" class="text-rose-400 shrink-0" />
						{/if}
					</button>
				{/each}
			</div>

			<!-- Feedback & Explanation Card -->
			{#if isAnswered}
				<div class="bg-slate-950/90 border {isCorrect ? 'border-emerald-500/40' : 'border-rose-500/40'} rounded-2xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-xl" in:scale>
					<div class="flex flex-col gap-1 text-xs text-slate-300">
						<span class="font-bold {isCorrect ? 'text-emerald-400' : 'text-rose-400'} flex items-center gap-1.5 text-sm">
							{isCorrect ? '🎉 ถูกต้อง!' : '❌ ยังไม่ถูกต้อง'}
							<span class="text-slate-400 font-normal">คำตอบที่ถูกคือ: <strong class="text-white">{currentItem.choices[currentItem.correctIndex]}</strong></span>
						</span>
						<p class="text-[11px] text-slate-400 line-clamp-2">
							💡 {currentItem.explanation}
						</p>
					</div>

					<button
						class="btn btn-sm btn-warning text-warning-content font-black gap-1.5 shrink-0 self-end sm:self-center"
						on:click={loadNewQuestion}
					>
						<RefreshCwIcon size="14" />
						ข้อถัดไป
					</button>
				</div>
			{/if}
		</div>
	{/if}

	<!-- Footer Link -->
	<div class="flex items-center justify-between pt-3 border-t border-slate-800/60 text-xs text-slate-400">
		<span>คลังความรู้รอบตัวไทย 6 หมวดหมู่</span>
		<a href="/puzzles/thaiquiz" class="text-amber-400 hover:text-amber-300 font-bold inline-flex items-center gap-1">
			เข้าสู่ Thai Quiz Arena →
		</a>
	</div>
</div>
