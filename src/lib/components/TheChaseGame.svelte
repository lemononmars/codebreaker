<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { fade, fly, scale, slide } from 'svelte/transition';
	import {
		ZapIcon,
		ShieldIcon,
		TrendingUpIcon,
		TrendingDownIcon,
		PlayIcon,
		RefreshCwIcon,
		AwardIcon,
		AlertCircleIcon,
		CheckCircleIcon,
		XCircleIcon,
		HelpCircleIcon,
		Volume2Icon,
		ActivityIcon,
		ArrowRightIcon
	} from 'svelte-feather-icons';
	import type { TheChaseQuestion, ChaserProfile, TableOffers, ChaseGamePhase } from '$lib/data/puzzles/thechase/types';
	import { getChaseQuestions, THE_CHASE_DATABASE } from '$lib/data/puzzles/thechase/questions';
	import { CHASERS, getRandomChaser, calculateOffers, simulateChaserAnswer, resolveBoardStepState } from '$lib/data/puzzles/thechase/engine';
	import { speakThai, stopSpeech, playQuizShowSound } from '$lib/utils/tts';

	export let onExit: () => void = () => {};

	// Game State
	let phase: ChaseGamePhase = 'intro';
	let chaser: ChaserProfile = CHASERS[0];
	let bankedAmount = 0;
	let currentScore = 0;

	// Cash Builder State
	let cashBuilderTime = 60;
	let cashBuilderTimer: any = null;
	let cashBuilderQuestions: TheChaseQuestion[] = [];
	let cashBuilderIdx = 0;
	let cashBuilderCorrect = 0;
	let cashBuilderAnswering = false;

	// Offer State
	let offers: TableOffers | null = null;
	let chosenOffer: 'low' | 'mid' | 'high' = 'mid';

	// Head-to-Head Board State
	let playerStep = 4; // 0 to 7
	let chaserStep = 0; // 0 to 7
	let boardQuestions: TheChaseQuestion[] = [];
	let currentBoardQIdx = 0;
	let playerChoice: number | null = null;
	let chaserChoice: number | null = null;
	let boardState: 'reading' | 'player_locked' | 'chaser_locked' | 'revealing_player' | 'revealing_chaser' | 'moving' | 'question_done' = 'reading';
	let chaserLockTimeout: any = null;
	let isSpeechMuted = false;

	// Final Chase State
	let finalTargetSteps = 0;
	let finalPlayerTime = 60;
	let finalChaserTime = 60;
	let finalChaseTimer: any = null;
	let finalQuestions: TheChaseQuestion[] = [];
	let finalQIdx = 0;
	let finalChaserSteps = 0;
	let pushbackPending = false;
	let pushbackAnswerChoice: number | null = null;

	onMount(() => {
		resetAll();
	});

	onDestroy(() => {
		clearAllTimers();
		stopSpeech();
	});

	function clearAllTimers() {
		clearInterval(cashBuilderTimer);
		clearInterval(finalChaseTimer);
		clearTimeout(chaserLockTimeout);
	}

	function resetAll() {
		clearAllTimers();
		stopSpeech();
		phase = 'intro';
		chaser = getRandomChaser();
		bankedAmount = 0;
		currentScore = 0;
		cashBuilderCorrect = 0;
		playerStep = 4;
		chaserStep = 0;
		finalTargetSteps = 0;
		finalChaserSteps = 0;
		pushbackPending = false;
	}

	// =========================================================================
	// PHASE 1: CASH BUILDER (60 วินาที)
	// =========================================================================

	function startCashBuilder() {
		resetAll();
		phase = 'cash_builder_countdown';
		playQuizShowSound('buzz');

		setTimeout(() => {
			phase = 'cash_builder_playing';
			cashBuilderQuestions = getChaseQuestions({ count: 25 });
			cashBuilderIdx = 0;
			cashBuilderCorrect = 0;
			cashBuilderTime = 60;
			cashBuilderAnswering = false;

			playQuizShowSound('lock');
			readCashBuilderQuestion();

			cashBuilderTimer = setInterval(() => {
				if (cashBuilderTime > 0) {
					cashBuilderTime--;
					if (cashBuilderTime <= 5) {
						playQuizShowSound('tick');
					}
				} else {
					finishCashBuilder();
				}
			}, 1000);
		}, 1000);
	}

	function readCashBuilderQuestion() {
		const q = cashBuilderQuestions[cashBuilderIdx];
		if (!q || isSpeechMuted) return;
		speakThai(q.question, { rate: 1.15 });
	}

	function handleCashBuilderChoice(idx: number) {
		if (cashBuilderAnswering || phase !== 'cash_builder_playing') return;
		const q = cashBuilderQuestions[cashBuilderIdx];
		if (!q) return;

		cashBuilderAnswering = true;
		const isCorrect = idx === q.correctIndex;

		if (isCorrect) {
			playQuizShowSound('correct');
			cashBuilderCorrect++;
			currentScore += 10000;
		} else {
			playQuizShowSound('wrong');
		}

		setTimeout(() => {
			cashBuilderAnswering = false;
			cashBuilderIdx++;
			if (cashBuilderIdx < cashBuilderQuestions.length) {
				readCashBuilderQuestion();
			} else {
				// Re-up questions if player is blazing fast
				cashBuilderQuestions = [...cashBuilderQuestions, ...getChaseQuestions({ count: 10 })];
				readCashBuilderQuestion();
			}
		}, 300);
	}

	function finishCashBuilder() {
		clearAllTimers();
		stopSpeech();
		bankedAmount = cashBuilderCorrect * 10000;
		phase = 'cash_builder_summary';
		playQuizShowSound('safe');
	}

	// =========================================================================
	// PHASE 2: CHASER OFFERS
	// =========================================================================

	function proceedToOffers() {
		phase = 'offer_selection';
		offers = calculateOffers(bankedAmount);
		playQuizShowSound('gong');
		if (!isSpeechMuted) {
			speakThai(`${chaser.title} เสนอข้อเสนอให้กับคุณ`, { rate: 1.0 });
		}
	}

	function selectOffer(type: 'low' | 'mid' | 'high') {
		if (!offers) return;
		chosenOffer = type;
		playQuizShowSound('lock');

		if (type === 'low') {
			bankedAmount = offers.lowAmount;
			playerStep = offers.lowStep;
		} else if (type === 'mid') {
			bankedAmount = offers.midAmount;
			playerStep = offers.midStep;
		} else {
			bankedAmount = offers.highAmount;
			playerStep = offers.highStep;
		}

		chaserStep = 0;
		startBoardChase();
	}

	// =========================================================================
	// PHASE 3: HEAD-TO-HEAD BOARD CHASE (7 STEPS)
	// =========================================================================

	function startBoardChase() {
		phase = 'board_chase';
		boardQuestions = getChaseQuestions({ count: 20 });
		currentBoardQIdx = 0;
		startBoardQuestion();
	}

	function startBoardQuestion() {
		const q = boardQuestions[currentBoardQIdx];
		if (!q) {
			boardQuestions = [...boardQuestions, ...getChaseQuestions({ count: 10 })];
		}
		playerChoice = null;
		chaserChoice = null;
		boardState = 'reading';

		const currentQ = boardQuestions[currentBoardQIdx];
		if (currentQ && !isSpeechMuted) {
			speakThai(currentQ.question, { rate: 1.1 });
		}
	}

	function handleBoardPlayerChoice(idx: number) {
		if (boardState !== 'reading') return;
		playerChoice = idx;
		boardState = 'player_locked';
		playQuizShowSound('lock');

		const currentQ = boardQuestions[currentBoardQIdx];
		if (!currentQ) return;

		// Simulate Chaser thinking & locking in
		const sim = simulateChaserAnswer(currentQ, chaser);
		chaserLockTimeout = setTimeout(() => {
			chaserChoice = sim.chosenIndex;
			boardState = 'chaser_locked';
			playQuizShowSound('tick');

			// Step 1: Reveal Player Answer
			setTimeout(() => {
				boardState = 'revealing_player';
				const pCorrect = playerChoice === currentQ.correctIndex;
				if (pCorrect) {
					playQuizShowSound('correct');
				} else {
					playQuizShowSound('wrong');
				}

				// Step 2: Reveal Chaser Answer
				setTimeout(() => {
					boardState = 'revealing_chaser';
					const cCorrect = chaserChoice === currentQ.correctIndex;
					if (cCorrect) {
						playQuizShowSound('correct');
					} else {
						playQuizShowSound('wrong');
					}

					// Step 3: Move on Board
					setTimeout(() => {
						boardState = 'moving';
						const stepResult = resolveBoardStepState(playerStep, chaserStep, pCorrect, cCorrect);
						playerStep = stepResult.nextPlayerStep;
						chaserStep = stepResult.nextChaserStep;
						playQuizShowSound('step');

						setTimeout(() => {
							if (stepResult.status === 'safe') {
								// Escaped safely to Final Chase!
								playQuizShowSound('safe');
								phase = 'board_result';
							} else if (stepResult.status === 'caught') {
								// Caught by Chaser!
								playQuizShowSound('caught');
								phase = 'game_over';
							} else {
								// Next question
								currentBoardQIdx++;
								startBoardQuestion();
							}
						}, 1200);
					}, 1000);
				}, 1200);
			}, 800);
		}, sim.delayMs);
	}

	// =========================================================================
	// PHASE 4: THE FINAL CHASE
	// =========================================================================

	function proceedToFinalChase() {
		phase = 'final_chase_player_prep';
		finalQuestions = getChaseQuestions({ count: 40 });
		finalQIdx = 0;
		finalTargetSteps = 1; // 1 step head start for making it to Final Chase
		playQuizShowSound('gong');
	}

	function startFinalPlayerRound() {
		phase = 'final_chase_player_playing';
		finalPlayerTime = 60;
		playQuizShowSound('buzz');
		readFinalPlayerQuestion();

		finalChaseTimer = setInterval(() => {
			if (finalPlayerTime > 0) {
				finalPlayerTime--;
				if (finalPlayerTime <= 5) playQuizShowSound('tick');
			} else {
				finishFinalPlayerRound();
			}
		}, 1000);
	}

	function readFinalPlayerQuestion() {
		const q = finalQuestions[finalQIdx];
		if (!q || isSpeechMuted) return;
		speakThai(q.question, { rate: 1.15 });
	}

	function handleFinalPlayerChoice(idx: number) {
		if (phase !== 'final_chase_player_playing') return;
		const q = finalQuestions[finalQIdx];
		if (!q) return;

		if (idx === q.correctIndex) {
			playQuizShowSound('correct');
			finalTargetSteps++;
		} else {
			playQuizShowSound('wrong');
		}

		finalQIdx++;
		if (finalQIdx < finalQuestions.length) {
			readFinalPlayerQuestion();
		} else {
			finalQuestions = [...finalQuestions, ...getChaseQuestions({ count: 15 })];
			readFinalPlayerQuestion();
		}
	}

	function finishFinalPlayerRound() {
		clearAllTimers();
		stopSpeech();
		phase = 'final_chase_chaser_playing';
		finalChaserSteps = 0;
		finalChaserTime = 60;
		playQuizShowSound('gong');

		setTimeout(() => {
			runChaserFinalStep();
			finalChaseTimer = setInterval(() => {
				if (!pushbackPending) {
					if (finalChaserTime > 0) {
						finalChaserTime--;
					} else {
						// Chaser ran out of time -> PLAYER WINS!
						clearAllTimers();
						stopSpeech();
						playQuizShowSound('safe');
						phase = 'victory';
					}
				}
			}, 1000);
		}, 1500);
	}

	function runChaserFinalStep() {
		if (phase !== 'final_chase_chaser_playing' || pushbackPending) return;

		const q = finalQuestions[finalQIdx];
		if (!q) return;

		const sim = simulateChaserAnswer(q, chaser);

		setTimeout(() => {
			if (phase !== 'final_chase_chaser_playing' || pushbackPending) return;

			if (sim.isCorrect) {
				playQuizShowSound('correct');
				finalChaserSteps++;

				if (finalChaserSteps >= finalTargetSteps) {
					// Chaser caught player in final chase
					clearAllTimers();
					stopSpeech();
					playQuizShowSound('caught');
					phase = 'game_over';
					return;
				}

				finalQIdx++;
				runChaserFinalStep();
			} else {
				// Chaser answered incorrectly -> PUSHBACK OPPORTUNITY!
				playQuizShowSound('wrong');
				pushbackPending = true;
				pushbackAnswerChoice = null;
			}
		}, sim.delayMs);
	}

	function handlePushbackChoice(idx: number) {
		const q = finalQuestions[finalQIdx];
		if (!q) return;

		pushbackAnswerChoice = idx;
		const isCorrect = idx === q.correctIndex;

		if (isCorrect) {
			playQuizShowSound('safe');
			// Push Chaser back 1 step (minimum 0)
			finalChaserSteps = Math.max(0, finalChaserSteps - 1);
		} else {
			playQuizShowSound('wrong');
		}

		setTimeout(() => {
			pushbackPending = false;
			finalQIdx++;
			runChaserFinalStep();
		}, 1200);
	}
</script>

<div class="flex flex-col gap-4 max-w-4xl mx-auto w-full select-none" in:fade={{ duration: 250 }}>

	<!-- ========================================================================= -->
	<!-- 1. INTRO / WELCOME SCREEN                                                 -->
	<!-- ========================================================================= -->
	{#if phase === 'intro'}
		<div class="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900/95 to-amber-950/60 border border-amber-500/40 p-6 sm:p-8 shadow-2xl flex flex-col gap-5">
			<div class="absolute -right-16 -top-16 w-80 h-80 bg-amber-500/15 rounded-full blur-3xl pointer-events-none"></div>

			<div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
				<div class="flex items-center gap-3">
					<span class="text-4xl sm:text-5xl">{chaser.avatarEmoji}</span>
					<div>
						<div class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-300 text-[11px] font-black">
							<ZapIcon size="11" class="animate-pulse" />
							<span>The Chase UK Quiz Show</span>
						</div>
						<h2 class="text-2xl sm:text-3xl font-black text-white tracking-tight mt-1">
							{chaser.title}
						</h2>
						<p class="text-xs text-amber-400 font-medium">{chaser.thaiTitle} • แม่นยำ {Math.round(chaser.accuracyRate * 100)}%</p>
					</div>
				</div>

				<button
					class="btn btn-sm btn-ghost border border-slate-800 text-slate-400 hover:text-white rounded-xl text-xs gap-1.5"
					on:click={() => (chaser = getRandomChaser())}
					title="สุ่ม Chaser ท่านอื่น"
				>
					<RefreshCwIcon size="13" />
					<span>สุ่มผู้ล่าคนใหม่</span>
				</button>
			</div>

			<div class="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800/80 text-xs sm:text-sm text-slate-300 italic">
				💬 "{chaser.tagline}"
			</div>

			<!-- Rules of The Chase -->
			<div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
				<div class="p-3.5 rounded-2xl bg-slate-950/60 border border-slate-800 flex flex-col gap-1.5">
					<div class="flex items-center gap-2 text-amber-400 font-bold text-xs">
						<span>1. Cash Builder</span>
					</div>
					<p class="text-[11px] text-slate-400 leading-relaxed">
						60 วินาทีตอบคำถาม 3 ตัวเลือกแบบสปีดควิซ สะสมข้อละ ฿10,000
					</p>
				</div>

				<div class="p-3.5 rounded-2xl bg-slate-950/60 border border-slate-800 flex flex-col gap-1.5">
					<div class="flex items-center gap-2 text-amber-400 font-bold text-xs">
						<span>2. The Board Chase</span>
					</div>
					<p class="text-[11px] text-slate-400 leading-relaxed">
						ประลอง 3 ตัวเลือกบนบอร์ด 7 ขั้น หนี Chaser เข้าบ้านให้ทันก่อนโดนจับ
					</p>
				</div>

				<div class="p-3.5 rounded-2xl bg-slate-950/60 border border-slate-800 flex flex-col gap-1.5">
					<div class="flex items-center gap-2 text-amber-400 font-bold text-xs">
						<span>3. The Final Chase</span>
					</div>
					<p class="text-[11px] text-slate-400 leading-relaxed">
						สร้างแต้มต่อแล้วป้องกันเงินรางวัลจาก Chaser พร้อมโอกาส Pushback ดันผู้ล่ากลับ!
					</p>
				</div>
			</div>

			<div class="flex items-center justify-between pt-2">
				<button class="btn btn-sm btn-ghost text-slate-400 hover:text-white" on:click={onExit}>
					กลับหน้าหลัก
				</button>
				<button
					class="btn btn-warning btn-md font-black text-slate-950 gap-2 px-8 rounded-2xl shadow-xl shadow-amber-500/20"
					on:click={startCashBuilder}
				>
					<PlayIcon size="18" />
					<span>เข้าสู่สังเวียน The Chase!</span>
				</button>
			</div>
		</div>

	<!-- ========================================================================= -->
	<!-- 2. CASH BUILDER PLAYING (60s)                                             -->
	<!-- ========================================================================= -->
	{:else if phase === 'cash_builder_playing' || phase === 'cash_builder_countdown'}
		<div class="flex flex-col gap-4">
			<!-- HUD -->
			<div class="flex items-center justify-between bg-slate-900 border border-slate-800 rounded-2xl px-4 py-3 shadow-lg">
				<div class="flex items-center gap-3">
					<div class="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center font-black text-amber-400 text-lg">
						{cashBuilderTime}s
					</div>
					<div>
						<div class="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Cash Builder Round</div>
						<div class="text-base font-black text-white">ข้อที่ {cashBuilderIdx + 1}</div>
					</div>
				</div>

				<div class="text-right">
					<div class="text-[10px] text-slate-400 uppercase font-bold tracking-wider">เงินรางวัลสะสม</div>
					<div class="text-lg sm:text-xl font-black text-amber-400 font-mono">฿{(cashBuilderCorrect * 10000).toLocaleString()}</div>
				</div>
			</div>

			<!-- Question Card -->
			{#if cashBuilderQuestions[cashBuilderIdx]}
				{@const q = cashBuilderQuestions[cashBuilderIdx]}
				<div class="flex flex-col gap-4 bg-slate-900 border border-slate-800 rounded-3xl p-5 sm:p-7 shadow-2xl" in:fly={{ y: 10, duration: 150 }}>
					<h3 class="text-lg sm:text-2xl font-black text-white leading-snug min-h-[4rem] flex items-center">
						{q.question}
					</h3>

					<!-- 3 Choice Buttons (A, B, C) -->
					<div class="grid grid-cols-1 gap-2.5 pt-2">
						{#each q.choices as choice, idx}
							<button
								class="btn btn-lg justify-start h-auto py-3.5 px-5 rounded-2xl font-bold text-sm sm:text-base border-slate-700 bg-slate-950/70 text-slate-100 hover:bg-amber-500 hover:text-slate-950 hover:border-amber-400 transition-all text-left flex items-center gap-3"
								disabled={cashBuilderAnswering}
								on:click={() => handleCashBuilderChoice(idx)}
							>
								<span class="w-7 h-7 rounded-lg bg-slate-800 font-mono text-xs flex items-center justify-center font-black text-amber-400 shrink-0">
									{['A', 'B', 'C'][idx]}
								</span>
								<span class="grow">{choice}</span>
							</button>
						{/each}
					</div>
				</div>
			{/if}
		</div>

	<!-- ========================================================================= -->
	<!-- 3. CASH BUILDER SUMMARY                                                   -->
	<!-- ========================================================================= -->
	{:else if phase === 'cash_builder_summary'}
		<div class="rounded-3xl bg-slate-900 border border-slate-800 p-6 sm:p-8 flex flex-col items-center text-center gap-4 shadow-2xl" in:scale={{ duration: 200 }}>
			<div class="w-16 h-16 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-3xl">
				💰
			</div>
			<div>
				<h3 class="text-xl sm:text-2xl font-black text-white">หมดเวลา Cash Builder!</h3>
				<p class="text-xs text-slate-400 mt-1">คุณตอบถูกทั้งหมด {cashBuilderCorrect} ข้อ</p>
			</div>

			<div class="text-3xl sm:text-5xl font-black text-amber-400 font-mono py-2">
				฿{bankedAmount.toLocaleString()}
			</div>

			<p class="text-xs text-slate-300 max-w-md">
				ถึงเวลาเผชิญหน้ากับ <strong>{chaser.name}</strong> บนโต๊ะเจรจาข้อเสนอ!
			</p>

			<button
				class="btn btn-warning btn-md font-black text-slate-950 px-8 rounded-2xl gap-2 shadow-lg shadow-amber-500/20 mt-2"
				on:click={proceedToOffers}
			>
				<span>ไปรับข้อเสนอของผู้ล่า</span>
				<ArrowRightIcon size="16" />
			</button>
		</div>

	<!-- ========================================================================= -->
	<!-- 4. TABLE OFFERS SELECTION                                                 -->
	<!-- ========================================================================= -->
	{:else if phase === 'offer_selection' && offers}
		<div class="flex flex-col gap-5" in:fade={{ duration: 250 }}>
			<div class="flex items-center gap-3 bg-slate-900 border border-slate-800 rounded-2xl p-4">
				<span class="text-3xl">{chaser.avatarEmoji}</span>
				<div>
					<h3 class="font-black text-white text-base">{chaser.name} ยื่นข้อเสนอบนกระดาน</h3>
					<p class="text-xs text-slate-400">เลือกจำนวนเงินและตำแหน่งเริ่มต้นที่คุณต้องการลงแข่งขัน</p>
				</div>
			</div>

			<!-- 3 Offer Cards -->
			<div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
				<!-- High Offer -->
				<button
					class="flex flex-col items-center justify-between p-5 rounded-3xl bg-slate-900/90 border border-red-500/40 hover:border-red-400 hover:bg-slate-900 hover:scale-[1.02] transition-all text-center gap-3 shadow-xl group"
					on:click={() => selectOffer('high')}
				>
					<div class="inline-flex items-center gap-1 text-[11px] font-black text-red-400 bg-red-500/10 px-3 py-1 rounded-full border border-red-500/20">
						<TrendingUpIcon size="12" />
						<span>ข้อเสนอด้านบน (High Risk)</span>
					</div>
					<div class="text-2xl sm:text-3xl font-black text-red-400 font-mono group-hover:scale-105 transition-transform">
						฿{offers.highAmount.toLocaleString()}
					</div>
					<div class="text-[11px] text-slate-400">
						ห่างจาก Chaser <strong>2 ขั้น</strong><br>(4 ก้าวถึงบ้าน)
					</div>
					<div class="btn btn-xs btn-error font-bold w-full rounded-xl mt-1">เลือกข้อเสนอสูง</div>
				</button>

				<!-- Mid Offer -->
				<button
					class="flex flex-col items-center justify-between p-5 rounded-3xl bg-slate-900/90 border-2 border-amber-500 hover:border-amber-400 hover:bg-slate-900 hover:scale-[1.02] transition-all text-center gap-3 shadow-xl shadow-amber-500/10 group"
					on:click={() => selectOffer('mid')}
				>
					<div class="inline-flex items-center gap-1 text-[11px] font-black text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
						<ShieldIcon size="12" />
						<span>ข้อเสนอปกติ (เงินที่ทำได้)</span>
					</div>
					<div class="text-2xl sm:text-3xl font-black text-amber-400 font-mono group-hover:scale-105 transition-transform">
						฿{offers.midAmount.toLocaleString()}
					</div>
					<div class="text-[11px] text-slate-400">
						ห่างจาก Chaser <strong>3 ขั้น</strong><br>(3 ก้าวถึงบ้าน)
					</div>
					<div class="btn btn-xs btn-warning font-bold text-slate-950 w-full rounded-xl mt-1">เลือกข้อเสนอนี้</div>
				</button>

				<!-- Low Offer -->
				<button
					class="flex flex-col items-center justify-between p-5 rounded-3xl bg-slate-900/90 border border-emerald-500/40 hover:border-emerald-400 hover:bg-slate-900 hover:scale-[1.02] transition-all text-center gap-3 shadow-xl group"
					on:click={() => selectOffer('low')}
				>
					<div class="inline-flex items-center gap-1 text-[11px] font-black text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
						<TrendingDownIcon size="12" />
						<span>ข้อเสนอด้านล่าง (Safe Buffer)</span>
					</div>
					<div class="text-2xl sm:text-3xl font-black text-emerald-400 font-mono group-hover:scale-105 transition-transform">
						฿{offers.lowAmount.toLocaleString()}
					</div>
					<div class="text-[11px] text-slate-400">
						ห่างจาก Chaser <strong>5 ขั้น</strong><br>(2 ก้าวถึงบ้าน)
					</div>
					<div class="btn btn-xs btn-success font-bold w-full rounded-xl mt-1">เลือกข้อเสนอต่ำ</div>
				</button>
			</div>
		</div>

	<!-- ========================================================================= -->
	<!-- 5. HEAD-TO-HEAD BOARD CHASE (7 STEPS)                                     -->
	<!-- ========================================================================= -->
	{:else if phase === 'board_chase'}
		<div class="grid grid-cols-1 md:grid-cols-12 gap-4">

			<!-- LEFT / TOP: 7-STEP CHASE BOARD (5 cols) -->
			<div class="md:col-span-4 bg-slate-900 border border-slate-800 rounded-3xl p-4 flex flex-col gap-2 shadow-2xl">
				<div class="flex items-center justify-between border-b border-slate-800 pb-2">
					<div class="text-xs font-black text-white flex items-center gap-1.5">
						<span>⚡ THE CHASE BOARD</span>
					</div>
					<span class="font-mono text-xs font-bold text-amber-400">฿{bankedAmount.toLocaleString()}</span>
				</div>

				<!-- 8 Steps (Step 0 = Chaser Start, Steps 1-6 = Board, Step 7 = Home) -->
				<div class="flex flex-col gap-1.5 py-1">
					{#each [0, 1, 2, 3, 4, 5, 6, 7] as stepIdx}
						{@const isChaserHere = chaserStep === stepIdx}
						{@const isPlayerHere = playerStep === stepIdx}
						{@const isHome = stepIdx === 7}

						<div
							class="h-9 rounded-xl border transition-all flex items-center justify-between px-3 relative overflow-hidden
							{isHome ? 'bg-gradient-to-r from-emerald-950/80 to-slate-900 border-emerald-500/60' : 'bg-slate-950/80 border-slate-800'}
							{isPlayerHere ? 'ring-2 ring-blue-400 shadow-lg shadow-blue-500/20' : ''}
							{isChaserHere ? 'ring-2 ring-red-500 shadow-lg shadow-red-500/20' : ''}"
						>
							<div class="flex items-center gap-2 z-10">
								<span class="font-mono text-[10px] text-slate-500 font-bold">
									{stepIdx === 0 ? 'START' : isHome ? 'HOME' : `STEP ${stepIdx}`}
								</span>
							</div>

							<!-- Occupant Markers -->
							<div class="flex items-center gap-1.5 z-10">
								{#if isChaserHere}
									<span class="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-red-500/20 border border-red-500/50 text-red-400 text-[10px] font-black animate-pulse">
										{chaser.avatarEmoji} CHASER
									</span>
								{/if}
								{#if isPlayerHere}
									<span class="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-blue-500/20 border border-blue-500/50 text-blue-300 text-[10px] font-black animate-bounce">
										🔵 YOU
									</span>
								{/if}
							</div>
						</div>
					{/each}
				</div>
			</div>

			<!-- RIGHT: QUESTION & 3-CHOICE LOCK-IN (8 cols) -->
			<div class="md:col-span-8 flex flex-col gap-4">
				{#if boardQuestions[currentBoardQIdx]}
					{@const q = boardQuestions[currentBoardQIdx]}
					<div class="bg-slate-900 border border-slate-800 rounded-3xl p-5 sm:p-7 shadow-2xl flex flex-col gap-4">

						<!-- Question status banner -->
						<div class="flex items-center justify-between border-b border-slate-800 pb-2.5">
							<span class="text-xs text-slate-400 font-bold">ข้อที่ {currentBoardQIdx + 1}</span>
							<div class="flex items-center gap-2">
								{#if boardState === 'player_locked'}
									<span class="text-xs text-blue-400 font-bold animate-pulse">🔒 คุณเลือกแล้ว (รอ Chaser)...</span>
								{:else if boardState === 'revealing_player' || boardState === 'revealing_chaser'}
									<span class="text-xs text-amber-400 font-bold">⚡ กำลังเฉลยคำตอบ...</span>
								{/if}
							</div>
						</div>

						<h3 class="text-lg sm:text-xl font-black text-white leading-snug min-h-[3.5rem] flex items-center">
							{q.question}
						</h3>

						<!-- 3 Choices -->
						<div class="flex flex-col gap-2.5 pt-1">
							{#each q.choices as choice, idx}
								{@const isPlayerSelected = playerChoice === idx}
								{@const isChaserSelected = chaserChoice === idx}
								{@const isCorrectChoice = q.correctIndex === idx}
								{@const showPlayerReveal = boardState === 'revealing_player' || boardState === 'revealing_chaser' || boardState === 'moving'}
								{@const showChaserReveal = boardState === 'revealing_chaser' || boardState === 'moving'}

								<button
									class="btn btn-lg justify-start h-auto py-3.5 px-4 rounded-2xl font-bold text-sm sm:text-base transition-all text-left flex items-center justify-between border
									{isPlayerSelected && !showPlayerReveal ? 'bg-blue-600 border-blue-400 text-white' : ''}
									{showPlayerReveal && isPlayerSelected && isCorrectChoice ? 'bg-emerald-600 border-emerald-400 text-white' : ''}
									{showPlayerReveal && isPlayerSelected && !isCorrectChoice ? 'bg-rose-600 border-rose-400 text-white' : ''}
									{!isPlayerSelected && !showPlayerReveal ? 'bg-slate-950/70 border-slate-800 text-slate-200 hover:border-amber-400 hover:bg-slate-950' : ''}
									{showPlayerReveal && !isPlayerSelected && isCorrectChoice ? 'border-emerald-500/50 bg-emerald-950/30 text-emerald-300' : ''}
									{showPlayerReveal && !isPlayerSelected && !isCorrectChoice ? 'bg-slate-950/40 border-slate-800 text-slate-500' : ''}"
									disabled={boardState !== 'reading'}
									on:click={() => handleBoardPlayerChoice(idx)}
								>
									<div class="flex items-center gap-3">
										<span class="w-6 h-6 rounded-md bg-slate-800/80 font-mono text-xs flex items-center justify-center font-black">
											{['A', 'B', 'C'][idx]}
										</span>
										<span>{choice}</span>
									</div>

									<div class="flex items-center gap-1.5">
										{#if showPlayerReveal && isPlayerSelected}
											<span class="badge badge-xs {isCorrectChoice ? 'badge-success' : 'badge-error'} font-bold">YOU</span>
										{/if}
										{#if showChaserReveal && isChaserSelected}
											<span class="badge badge-xs badge-neutral border-red-500 text-red-400 font-bold">{chaser.avatarEmoji}</span>
										{/if}
									</div>
								</button>
							{/each}
						</div>

						<!-- Trivia Explanation after reveal -->
						{#if boardState === 'moving' || boardState === 'revealing_chaser'}
							<div class="p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300 leading-relaxed" in:slide={{ duration: 150 }}>
								💡 <strong>คำอธิบาย:</strong> {q.explanation}
							</div>
						{/if}
					</div>
				{/if}
			</div>
		</div>

	<!-- ========================================================================= -->
	<!-- 6. BOARD RESULT (SAFE TO FINAL CHASE)                                     -->
	<!-- ========================================================================= -->
	{:else if phase === 'board_result'}
		<div class="rounded-3xl bg-slate-900 border border-emerald-500/40 p-6 sm:p-8 flex flex-col items-center text-center gap-4 shadow-2xl" in:scale={{ duration: 200 }}>
			<div class="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-3xl">
				🏆
			</div>
			<div>
				<h3 class="text-2xl sm:text-3xl font-black text-white">คุณรอดกลับบ้านสำเร็จ!</h3>
				<p class="text-xs text-slate-300 mt-1">เงินรางวัล <strong>฿{bankedAmount.toLocaleString()}</strong> เข้าสู่รอบ Final Chase!</p>
			</div>

			<button
				class="btn btn-success btn-md font-black text-slate-950 px-8 rounded-2xl gap-2 shadow-lg shadow-emerald-500/20 mt-2"
				on:click={proceedToFinalChase}
			>
				<span>เข้าสู่รอบตัดสิน The Final Chase!</span>
				<ArrowRightIcon size="16" />
			</button>
		</div>

	<!-- ========================================================================= -->
	<!-- 7. FINAL CHASE PREP & PLAYER ROUND                                        -->
	<!-- ========================================================================= -->
	{:else if phase === 'final_chase_player_prep'}
		<div class="rounded-3xl bg-slate-900 border border-slate-800 p-6 sm:p-8 flex flex-col items-center text-center gap-4 shadow-2xl" in:fade={{ duration: 200 }}>
			<span class="text-5xl">⚡</span>
			<h3 class="text-2xl sm:text-3xl font-black text-white">THE FINAL CHASE</h3>
			<p class="text-xs sm:text-sm text-slate-300 max-w-md leading-relaxed">
				คุณมีเวลา <strong>60 วินาที</strong> ในการตอบคำถามให้ได้มากที่สุด ทุก 1 ข้อที่ถูกต้องจะเพิ่ม <strong>Target Step (ก้าวหนี)</strong> ให้กับคุณ!
			</p>
			<button class="btn btn-warning btn-md font-black text-slate-950 px-8 rounded-2xl mt-2" on:click={startFinalPlayerRound}>
				<PlayIcon size="18" />
				<span>เริ่มจับเวลา 60 วินาที</span>
			</button>
		</div>

	{:else if phase === 'final_chase_player_playing'}
		<div class="flex flex-col gap-4">
			<div class="flex items-center justify-between bg-slate-900 border border-slate-800 rounded-2xl px-4 py-3 shadow-lg">
				<div class="flex items-center gap-3">
					<div class="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center font-black text-amber-400 text-lg">
						{finalPlayerTime}s
					</div>
					<div>
						<div class="text-[10px] text-slate-400 font-bold uppercase">Final Chase: Set The Target</div>
						<div class="text-base font-black text-white">ข้อที่ {finalQIdx + 1}</div>
					</div>
				</div>

				<div class="text-right">
					<div class="text-[10px] text-slate-400 font-bold uppercase">Target Steps</div>
					<div class="text-xl font-black text-amber-400 font-mono">{finalTargetSteps} ก้าว</div>
				</div>
			</div>

			{#if finalQuestions[finalQIdx]}
				{@const q = finalQuestions[finalQIdx]}
				<div class="bg-slate-900 border border-slate-800 rounded-3xl p-5 sm:p-7 shadow-2xl flex flex-col gap-4">
					<h3 class="text-lg sm:text-xl font-black text-white min-h-[3.5rem] flex items-center">
						{q.question}
					</h3>

					<div class="grid grid-cols-1 gap-2.5">
						{#each q.choices as choice, idx}
							<button
								class="btn btn-lg justify-start h-auto py-3.5 px-4 rounded-2xl font-bold text-sm sm:text-base border-slate-700 bg-slate-950/70 text-slate-100 hover:bg-amber-500 hover:text-slate-950 hover:border-amber-400 transition-all text-left flex items-center gap-3"
								on:click={() => handleFinalPlayerChoice(idx)}
							>
								<span class="w-6 h-6 rounded-md bg-slate-800 font-mono text-xs flex items-center justify-center font-black text-amber-400">
									{['A', 'B', 'C'][idx]}
								</span>
								<span>{choice}</span>
							</button>
						{/each}
					</div>
				</div>
			{/if}
		</div>

	<!-- ========================================================================= -->
	<!-- 8. FINAL CHASE: CHASER RUN & PUSHBACK                                     -->
	<!-- ========================================================================= -->
	{:else if phase === 'final_chase_chaser_playing'}
		<div class="flex flex-col gap-4">
			<!-- Chaser Status HUD -->
			<div class="flex items-center justify-between bg-slate-900 border border-slate-800 rounded-2xl px-4 py-3 shadow-lg">
				<div class="flex items-center gap-3">
					<div class="w-10 h-10 rounded-xl bg-red-500/20 border border-red-500/40 flex items-center justify-center font-black text-red-400 text-lg">
						{finalChaserTime}s
					</div>
					<div>
						<div class="text-[10px] text-slate-400 font-bold uppercase">{chaser.name} กำลังไล่ล่า!</div>
						<div class="text-sm font-black text-white">Chaser: {finalChaserSteps} / {finalTargetSteps} ก้าว</div>
					</div>
				</div>

				<div class="text-right">
					<div class="text-[10px] text-slate-400 font-bold uppercase">เงินเดิมพัน</div>
					<div class="text-base font-black text-amber-400 font-mono">฿{bankedAmount.toLocaleString()}</div>
				</div>
			</div>

			<!-- Pushback Modal or Active Question -->
			{#if pushbackPending}
				{@const q = finalQuestions[finalQIdx]}
				<div class="bg-gradient-to-br from-amber-950/80 to-slate-900 border-2 border-amber-500 rounded-3xl p-5 sm:p-7 shadow-2xl flex flex-col gap-4 animate-pulse">
					<div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-black w-fit">
						<ActivityIcon size="14" />
						<span>PUSHBACK OPPORTUNITY! (Chaser ตอบผิด!)</span>
					</div>

					<h3 class="text-lg sm:text-xl font-black text-white">{q.question}</h3>

					<p class="text-xs text-amber-300">ตอบถูกเพื่อดัน Chaser ถอยหลัง 1 ก้าว!</p>

					<div class="grid grid-cols-1 gap-2.5">
						{#each q.choices as choice, idx}
							<button
								class="btn btn-lg justify-start h-auto py-3.5 px-4 rounded-2xl font-bold text-sm sm:text-base border-amber-500/40 bg-slate-950 text-slate-100 hover:bg-amber-500 hover:text-slate-950 transition-all text-left flex items-center gap-3"
								on:click={() => handlePushbackChoice(idx)}
							>
								<span class="w-6 h-6 rounded-md bg-slate-800 font-mono text-xs flex items-center justify-center font-black text-amber-400">
									{['A', 'B', 'C'][idx]}
								</span>
								<span>{choice}</span>
							</button>
						{/each}
					</div>
				</div>
			{:else}
				<div class="bg-slate-900 border border-slate-800 rounded-3xl p-8 text-center flex flex-col items-center gap-3 shadow-2xl">
					<span class="text-5xl animate-bounce">{chaser.avatarEmoji}</span>
					<h3 class="text-xl font-black text-white">{chaser.title} กำลังประมวลผลคำถาม...</h3>
					<p class="text-xs text-slate-400">หาก Chaser ตอบผิด เวลาจะหยุดและคุณจะมีโอกาส Pushback ทันที!</p>
				</div>
			{/if}
		</div>

	<!-- ========================================================================= -->
	<!-- 9. VICTORY / GAME OVER                                                    -->
	<!-- ========================================================================= -->
	{:else if phase === 'victory'}
		<div class="rounded-3xl bg-slate-900 border border-emerald-500 p-7 sm:p-10 flex flex-col items-center text-center gap-5 shadow-2xl shadow-emerald-500/10" in:scale={{ duration: 250 }}>
			<div class="w-20 h-20 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-4xl">
				👑
			</div>
			<div>
				<h2 class="text-2xl sm:text-4xl font-black text-emerald-400">YOU BEAT THE CHASER!</h2>
				<p class="text-sm text-slate-300 mt-1">คุณสามารถเอาชนะ {chaser.name} และคว้ารางวัลกลับบ้านสำเร็จ!</p>
			</div>

			<div class="text-3xl sm:text-5xl font-black text-amber-400 font-mono py-2">
				฿{bankedAmount.toLocaleString()}
			</div>

			<div class="flex items-center gap-3 mt-2">
				<button class="btn btn-outline border-slate-700 text-slate-300 hover:text-white" on:click={onExit}>
					กลับหน้าหลัก
				</button>
				<button class="btn btn-warning font-black text-slate-950 px-6 rounded-2xl" on:click={resetAll}>
					<RefreshCwIcon size="16" />
					<span>เล่นใหม่อีกครั้ง</span>
				</button>
			</div>
		</div>

	{:else if phase === 'game_over'}
		<div class="rounded-3xl bg-slate-900 border border-red-500/50 p-7 sm:p-10 flex flex-col items-center text-center gap-5 shadow-2xl shadow-red-500/10" in:scale={{ duration: 250 }}>
			<div class="w-20 h-20 rounded-full bg-red-500/20 border border-red-500/40 flex items-center justify-center text-4xl">
				💀
			</div>
			<div>
				<h2 class="text-2xl sm:text-4xl font-black text-red-500">CAUGHT BY THE CHASER!</h2>
				<p class="text-sm text-slate-300 mt-1">{chaser.title} ไล่ตามทันและจับคุณได้สำเร็จ!</p>
			</div>

			<div class="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-xs text-slate-400 max-w-sm italic">
				"{chaser.tagline}"
			</div>

			<div class="flex items-center gap-3 mt-2">
				<button class="btn btn-outline border-slate-700 text-slate-300 hover:text-white" on:click={onExit}>
					กลับหน้าหลัก
				</button>
				<button class="btn btn-error font-black text-white px-6 rounded-2xl" on:click={resetAll}>
					<RefreshCwIcon size="16" />
					<span>ท้าดวลอีกครั้ง</span>
				</button>
			</div>
		</div>
	{/if}

</div>
