<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { 
		CompassIcon, 
		AwardIcon, 
		HeartIcon, 
		HelpCircleIcon, 
		ArrowLeftIcon, 
		PlayIcon,
		RefreshCwIcon,
		CheckCircleIcon,
		XCircleIcon,
		ChevronLeftIcon,
		BookOpenIcon,
		ZapIcon,
		ClockIcon
	} from 'svelte-feather-icons';

	import { wordDatabase, type WordItem } from '$lib/data/puzzles/spelling/words';

	// Game States
	let currentMode: 'selection' | 'playing' | 'gameover' = 'selection';
	let gameMode: 'normal' | 'endless' | 'timeattack' = 'normal';
	
	// Game Statistics
	let score = 0;
	let streak = 0;
	let maxStreak = 0;
	let lives = 3;
	let totalAnswered = 0;
	let correctCount = 0;
	let highScores = { normal: 0, endless: 0, timeattack: 0 };

	// Question State
	let includeLoanWords = true;
	$: filteredQuizWords = includeLoanWords 
		? wordDatabase 
		: wordDatabase.filter(word => !word.isLoanWord);

	let currentQuestion: WordItem | null = null;
	let leftOption = '';
	let rightOption = '';
	let leftIsCorrect = false;
	
	// Interactive animations states
	let answerStatus: 'idle' | 'correct' | 'incorrect' = 'idle';
	let chosenSide: 'left' | 'right' | null = null;
	let activeKey: 'left' | 'right' | null = null;
	let lastAnswerCorrect = false;

	// Timer state for Normal Mode (5s per question)
	let timeLeft = 5.0;
	let timerInterval: any = null;

	// Time Attack Mode state (total game clock)
	let attackTimeLeft = 60;
	let attackTimerInterval: any = null;

	// Play synthesized arcade-style sound effects
	function playSFX(type: 'correct' | 'incorrect') {
		if (typeof window === 'undefined') return;
		try {
			const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
			if (!AudioContextClass) return;
			const ctx = new AudioContextClass();
			
			if (type === 'correct') {
				const osc = ctx.createOscillator();
				const gain = ctx.createGain();
				osc.type = 'sine';
				osc.frequency.setValueAtTime(523.25, ctx.currentTime);
				osc.frequency.exponentialRampToValueAtTime(880.00, ctx.currentTime + 0.12);
				gain.gain.setValueAtTime(0.1, ctx.currentTime);
				gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.25);
				osc.connect(gain);
				gain.connect(ctx.destination);
				osc.start();
				osc.stop(ctx.currentTime + 0.25);
			} else {
				const osc = ctx.createOscillator();
				const gain = ctx.createGain();
				osc.type = 'sawtooth';
				osc.frequency.setValueAtTime(160, ctx.currentTime);
				osc.frequency.linearRampToValueAtTime(80, ctx.currentTime + 0.25);
				gain.gain.setValueAtTime(0.12, ctx.currentTime);
				gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.25);
				osc.connect(gain);
				gain.connect(ctx.destination);
				osc.start();
				osc.stop(ctx.currentTime + 0.25);
			}
		} catch (e) {
			console.warn('AudioContext error:', e);
		}
	}

	// ── Normal Mode: 5s per-question countdown ──────────────────────────────
	function startTimer() {
		stopTimer();
		timeLeft = 5.0;
		timerInterval = setInterval(() => {
			timeLeft -= 0.1;
			if (timeLeft <= 0.05) {
				timeLeft = 0;
				stopTimer();
				handleTimeout();
			}
		}, 100);
	}

	function stopTimer() {
		if (timerInterval) {
			clearInterval(timerInterval);
			timerInterval = null;
		}
	}

	function handleTimeout() {
		if (currentMode !== 'playing' || answerStatus !== 'idle') return;

		totalAnswered++;
		answerStatus = 'incorrect';
		streak = 0;
		lastAnswerCorrect = false;

		playSFX('incorrect');

		if (gameMode === 'normal') {
			lives--;
			if (lives <= 0) {
				setTimeout(() => triggerGameOver(), 1200);
				return;
			}
		}

		setTimeout(() => {
			if (currentMode === 'playing') getNextQuestion();
		}, 1200);
	}

	// ── Time Attack Mode: 60s global game clock ──────────────────────────────
	function startAttackTimer() {
		stopAttackTimer();
		attackTimeLeft = 60;
		attackTimerInterval = setInterval(() => {
			attackTimeLeft -= 0.1;
			if (attackTimeLeft <= 0.05) {
				attackTimeLeft = 0;
				stopAttackTimer();
				triggerGameOver();
			}
		}, 100);
	}

	function stopAttackTimer() {
		if (attackTimerInterval) {
			clearInterval(attackTimerInterval);
			attackTimerInterval = null;
		}
	}

	// ── High Scores ────────────────────────────────────────────────────────────
	onMount(() => {
		if (typeof window !== 'undefined') {
			const saved = localStorage.getItem('codebreaker_spelling_highscores');
			if (saved) {
				try {
					const parsed = JSON.parse(saved);
					highScores.normal = parsed.normal || parsed.survival || 0;
					highScores.endless = parsed.endless || 0;
					highScores.timeattack = parsed.timeattack || 0;
				} catch (e) {
					console.error(e);
				}
			}
		}
	});

	onDestroy(() => {
		stopTimer();
		stopAttackTimer();
	});

	// ── Question generation ────────────────────────────────────────────────────
	function getNextQuestion() {
		answerStatus = 'idle';
		chosenSide = null;
		stopTimer();

		const idx = Math.floor(Math.random() * filteredQuizWords.length);
		const selected = filteredQuizWords[idx];
		currentQuestion = selected;

		leftIsCorrect = Math.random() < 0.5;
		const incorrectWord = selected.incorrect[Math.floor(Math.random() * selected.incorrect.length)];
		if (leftIsCorrect) {
			leftOption = selected.correct;
			rightOption = incorrectWord
		} else {
			leftOption = incorrectWord;
			rightOption = selected.correct;
		}

		if (gameMode === 'normal') {
			startTimer();
		}
	}

	// ── Start game ─────────────────────────────────────────────────────────────
	function startQuiz(mode: 'normal' | 'endless' | 'timeattack') {
		gameMode = mode;
		score = 0;
		streak = 0;
		maxStreak = 0;
		lives = 3;
		totalAnswered = 0;
		correctCount = 0;
		currentMode = 'playing';
		stopAttackTimer();

		if (mode === 'timeattack') {
			startAttackTimer();
		}

		getNextQuestion();
	}

	// ── Answer selection ───────────────────────────────────────────────────────
	function selectOption(side: 'left' | 'right') {
		if (currentMode !== 'playing' || answerStatus !== 'idle') return;

		stopTimer();

		chosenSide = side;
		totalAnswered++;
		const selectedCorrect = (side === 'left' && leftIsCorrect) || (side === 'right' && !leftIsCorrect);
		
		lastAnswerCorrect = selectedCorrect;

		if (selectedCorrect) {
			answerStatus = 'correct';
			playSFX('correct');
			score += 10 + Math.min(streak * 2, 20);
			streak++;
			correctCount++;
			if (streak > maxStreak) maxStreak = streak;

			// Time Attack: +1 second bonus
			if (gameMode === 'timeattack') {
				attackTimeLeft = Math.min(attackTimeLeft + 1, 99);
			}
		} else {
			answerStatus = 'incorrect';
			playSFX('incorrect');
			streak = 0;
			if (gameMode === 'normal') {
				lives--;
				if (lives <= 0) {
					setTimeout(() => triggerGameOver(), 1200);
					return;
				}
			}
		}

		setTimeout(() => {
			if (currentMode === 'playing') getNextQuestion();
		}, 1200);
	}

	// ── Keyboard shortcuts ─────────────────────────────────────────────────────
	function handleKeyDown(event: KeyboardEvent) {
		if (currentMode !== 'playing' || answerStatus !== 'idle') return;
		if (event.key === 'ArrowLeft') {
			activeKey = 'left';
			selectOption('left');
			setTimeout(() => activeKey = null, 150);
		} else if (event.key === 'ArrowRight') {
			activeKey = 'right';
			selectOption('right');
			setTimeout(() => activeKey = null, 150);
		}
	}

	// ── Game over ──────────────────────────────────────────────────────────────
	function triggerGameOver() {
		stopTimer();
		stopAttackTimer();
		currentMode = 'gameover';

		if (score > highScores[gameMode]) {
			highScores[gameMode] = score;
			if (typeof window !== 'undefined') {
				localStorage.setItem('codebreaker_spelling_highscores', JSON.stringify(highScores));
			}
		}
	}

	function goHome() {
		stopTimer();
		stopAttackTimer();
		currentMode = 'selection';
	}

	// Derived: formatted Time Attack clock display
	$: attackSeconds = Math.max(0, Math.ceil(attackTimeLeft));
	$: attackPct = Math.max(0, Math.min((attackTimeLeft / 60) * 100, 100));
	$: attackUrgent = attackTimeLeft < 15;
</script>

<svelte:window on:keydown={handleKeyDown} />

<svelte:head>
	<title>Code Breaker | สะกดศัพท์ ✏️</title>
	<meta
		name="description"
		content="เกมประลองคำสะกดภาษาไทย ค้นหาคำที่เขียนถูกต้องตามพจนานุกรมฉบับราชบัณฑิตยสภา เลือกโหมดปกติ เล่นเรื่อยๆ หรือโหมดจับเวลา"
	/>
</svelte:head>

<div class="flex flex-col gap-4 w-full max-w-4xl mx-auto px-4 select-none pb-8 text-center">
	<!-- Main navigation header -->
	<header class="w-full flex items-center justify-between border-b border-base-300 pb-2 mb-1">
		<button on:click={goHome} class="btn btn-outline btn-xs sm:btn-sm gap-1">
			<ChevronLeftIcon size="12" />
			กลับ
		</button>
		
		<div class="badge badge-accent badge-outline font-bold tracking-wider py-1.5 text-[10px] sm:text-xs">
			เล่น
		</div>
	</header>

	<div class="flex flex-col justify-center py-1 sm:py-2">
		
		<!-- 1. SELECT GAME MODE SCREEN -->
		{#if currentMode === 'selection'}
			<div class="flex flex-col items-center text-center gap-4 max-w-lg mx-auto py-2">
				<div class="avatar placeholder">
					<div class="w-16 h-16 rounded-2xl bg-neutral text-primary flex items-center justify-center shadow-lg relative">
						<span class="text-3xl">✏️</span>
						<div class="absolute -bottom-1 -right-1 badge badge-outline badge-secondary text-[8px] px-1 py-0 h-auto">
							THAI
						</div>
					</div>
				</div>

				<div class="flex flex-col gap-1">
					<h1 class="text-2xl md:text-3xl font-extrabold tracking-tight">
						เกมสะกดศัพท์
					</h1>
					<p class="text-xs opacity-80 max-w-md mx-auto leading-relaxed">
						"กะเพรา" สะกดถูกมั้ย? ทดสอบคลังศัพท์กับคำที่คนมักสะกดผิด
					</p>
				</div>

				<!-- Options Toggle -->
				<div class="card bg-neutral text-neutral-content shadow-md w-full">
					<div class="card-body p-4 flex flex-row items-center justify-between gap-4">
						<div class="flex items-center gap-2.5">
							<div class="w-8 h-8 rounded-lg bg-base-100 flex items-center justify-center text-primary shadow-inner">
								<CompassIcon size="16" />
							</div>
							<div class="flex flex-col items-start text-left">
								<span class="text-xs font-bold text-primary">รวมคำทับศัพท์ต่างประเทศ (Loan Words)</span>
								<span class="text-[10px] opacity-70 leading-tight">
									เช่น ดิจิทัล, อัปเดต, เว็บไซต์ ({wordDatabase.filter(w => w.isLoanWord).length} คำ)
								</span>
							</div>
						</div>
						
						<div class="form-control">
							<label class="label cursor-pointer gap-2 p-0">
								<input type="checkbox" class="toggle toggle-sm toggle-primary" bind:checked={includeLoanWords} />
							</label>
						</div>
					</div>
				</div>

				<!-- Modes Card grids -->
				<div class="grid sm:grid-cols-3 gap-3 w-full">
					<!-- Normal Mode Card -->
					<button 
						on:click={() => startQuiz('normal')}
						class="card bg-neutral text-neutral-content shadow-md hover:shadow-lg hover:border-error border border-transparent transition-all duration-300 hover:-translate-y-0.5 block text-center p-4"
					>
						<div class="flex flex-col items-center gap-2.5 h-full">
							<div class="w-10 h-10 bg-base-100 rounded-xl flex items-center justify-center text-error shadow-inner">
								<HeartIcon size="20" class="fill-error" />
							</div>
							<div class="flex flex-col gap-1 flex-1">
								<h2 class="text-sm font-bold text-error tracking-wide">
									Normal
								</h2>
								<p class="text-[11px] opacity-70 leading-snug">
									3 ชีวิต • 5วิ/คำ
								</p>
							</div>
							{#if highScores.normal > 0}
								<div class="mt-1 text-[10px] font-mono font-bold text-error">
									สูงสุด: {highScores.normal}
								</div>
							{/if}
						</div>
					</button>

					<!-- Time Attack Mode Card -->
					<button 
						on:click={() => startQuiz('timeattack')}
						class="card bg-neutral text-neutral-content shadow-md hover:shadow-lg hover:border-warning border border-transparent transition-all duration-300 hover:-translate-y-0.5 block text-center p-4"
					>
						<div class="flex flex-col items-center gap-2.5 h-full">
							<div class="w-10 h-10 bg-base-100 rounded-xl flex items-center justify-center text-warning shadow-inner">
								<ZapIcon size="20" />
							</div>
							<div class="flex flex-col gap-1 flex-1">
								<h2 class="text-sm font-bold text-warning tracking-wide">
									Time Attack
								</h2>
								<p class="text-[11px] opacity-70 leading-snug">
									60วิ • ตอบถูก +1วิ
								</p>
							</div>
							{#if highScores.timeattack > 0}
								<div class="mt-1 text-[10px] font-mono font-bold text-warning">
									สูงสุด: {highScores.timeattack}
								</div>
							{/if}
						</div>
					</button>

					
					<!-- Endless Mode Card -->
					<button 
						on:click={() => startQuiz('endless')}
						class="card bg-neutral text-neutral-content shadow-md hover:shadow-lg hover:border-success border border-transparent transition-all duration-300 hover:-translate-y-0.5 block text-center p-4"
					>
						<div class="flex flex-col items-center gap-2.5 h-full">
							<div class="w-10 h-10 bg-base-100 rounded-xl flex items-center justify-center text-success shadow-inner">
								<PlayIcon size="20" />
							</div>
							<div class="flex flex-col gap-1 flex-1">
								<h2 class="text-sm font-bold text-success tracking-wide">
									Endless
								</h2>
								<p class="text-[11px] opacity-70 leading-snug">
									ไม่มีวันแพ้ สะสมคะแนน
								</p>
							</div>
							{#if highScores.endless > 0}
								<div class="mt-1 text-[10px] font-mono font-bold text-success">
									สูงสุด: {highScores.endless}
								</div>
							{/if}
						</div>
					</button>
				</div>

				<div class="alert alert-info shadow-md text-left p-3 flex items-start gap-2">
					<HelpCircleIcon class="flex-shrink-0 mt-0.5" size="16" />
					<p class="text-[11px] leading-snug">
						<b>คำแนะนำ:</b> คลิกคำตอบ หรือใช้ปุ่มลูกศร <kbd class="kbd kbd-xs">◀</kbd> และ <kbd class="kbd kbd-xs">▶</kbd> บนคีย์บอร์ดเพื่อตอบ
					</p>
				</div>

				<!-- Dictionary Button -->
				<a href="/puzzles/spellingdictionary" class="card bg-neutral text-neutral-content shadow-md hover:shadow-lg hover:border-primary border border-transparent transition-all duration-300 hover:-translate-y-0.5 block w-full">
					<div class="card-body p-3 flex flex-row items-center gap-3 justify-center">
						<div class="w-8 h-8 rounded-lg bg-base-100 flex items-center justify-center text-primary shadow-inner">
							<BookOpenIcon size="16" />
						</div>
						<div class="flex flex-col items-start text-left flex-1">
							<span class="text-xs font-bold text-primary">รายชื่อคำสะกด</span>
							<span class="text-[10px] opacity-75 mt-0.5">อ่านทบทวนคำสะกดที่พบบ่อยทั้งหมด {wordDatabase.length} คำ</span>
						</div>
					</div>
				</a>
			</div>

		<!-- 2. GAME PLAYING SCREEN -->
		{:else if currentMode === 'playing'}
			<div class="w-full flex flex-col gap-3">
				
				<!-- Score board and stats (Horizontal Compact Row) -->
				<div class="flex items-center justify-between bg-neutral text-neutral-content rounded-xl p-3 px-4 shadow-md text-xs sm:text-sm font-semibold">
					<div class="flex items-center gap-4">
						<span>คะแนน: <span class="text-primary font-bold font-mono">{score}</span></span>
						<span>ต่อเนื่อง: <span class="text-accent font-bold font-mono">🔥 {streak}</span></span>
					</div>
					<div class="flex items-center gap-2">
						{#if gameMode === 'normal'}
							<span class="opacity-60 text-[10px] font-bold mr-1">พลังชีวิต:</span>
							<span class="flex items-center gap-0.5">
								{#each Array(3) as _, i}
									<HeartIcon 
										size="14" 
										class={i < lives ? 'text-error fill-error' : 'opacity-20'} 
									/>
								{/each}
							</span>
						{:else if gameMode === 'timeattack'}
							<ClockIcon size="13" class="opacity-60 {attackUrgent ? 'text-error animate-pulse' : ''}" />
							<span class="font-mono font-bold {attackUrgent ? 'text-error' : 'text-warning'} text-base">
								{attackSeconds}s
							</span>
						{:else}
							<span>ความแม่นยำ: <span class="text-success font-bold font-mono">{totalAnswered > 0 ? Math.round((correctCount / totalAnswered) * 100) : 0}%</span></span>
						{/if}
					</div>
				</div>

				<!-- Timer bars (Normal per-question, Time Attack global) -->
				{#if gameMode === 'normal'}
					<div class="w-full bg-base-300/40 h-2 rounded-full overflow-hidden relative border border-base-300 shadow-inner">
						<div 
							class="h-full rounded-full transition-all duration-100 ease-linear {
								timeLeft > 2.5 
									? 'bg-gradient-to-r from-success to-warning' 
									: 'bg-gradient-to-r from-warning to-error animate-pulse'
							}"
							style="width: {(timeLeft / 5) * 100}%"
						></div>
					</div>
				{:else if gameMode === 'timeattack'}
					<div class="w-full bg-base-300/40 h-2 rounded-full overflow-hidden relative border border-base-300 shadow-inner">
						<div 
							class="h-full rounded-full transition-all duration-100 ease-linear {
								attackUrgent 
									? 'bg-gradient-to-r from-warning to-error animate-pulse' 
									: 'bg-gradient-to-r from-warning to-success'
							}"
							style="width: {attackPct}%"
						></div>
					</div>
				{/if}

				<!-- Question instruction -->
				<div class="text-center">
					<span class="text-xs sm:text-sm opacity-70 font-semibold tracking-wider block uppercase">
						คำใดสะกดถูกต้อง? 🔍
					</span>
				</div>

				<!-- Left and Right choice panels — stacked on mobile, side-by-side on sm+ -->
				<div class="flex flex-col sm:grid sm:grid-cols-2 gap-3 w-full">
					
					<!-- Left Choice Card -->
					<button 
						on:click={() => selectOption('left')}
						class="card bg-neutral text-neutral-content border-2 shadow-md cursor-pointer hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 h-24 sm:h-36 flex flex-col items-center justify-center p-3 relative overflow-hidden group {
							chosenSide === 'left'
								? answerStatus === 'correct'
									? 'border-success bg-success/15 text-success'
									: 'border-error bg-error/15 text-error animate-shake'
								: chosenSide === 'right' && answerStatus !== 'idle'
									? 'opacity-40 border-base-300 pointer-events-none'
									: activeKey === 'left'
										? 'border-primary'
										: 'border-base-300 hover:border-primary'
						}"
					>
						<!-- Key shortcut indicator -->
						<div class="absolute left-4 top-1/2 -translate-y-1/2 hidden md:flex items-center gap-1 opacity-75">
							<kbd class="kbd kbd-sm font-mono text-sm font-bold shadow-md">◀</kbd>
						</div>

						<span class="text-2xl sm:text-4xl font-extrabold tracking-tight filter drop-shadow-md transition-transform group-hover:scale-105">
							{leftOption}
						</span>
					</button>

					<!-- Right Choice Card -->
					<button 
						on:click={() => selectOption('right')}
						class="card bg-neutral text-neutral-content border-2 shadow-md cursor-pointer hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 h-24 sm:h-36 flex flex-col items-center justify-center p-3 relative overflow-hidden group {
							chosenSide === 'right'
								? answerStatus === 'correct'
									? 'border-success bg-success/15 text-success'
									: 'border-error bg-error/15 text-error animate-shake'
								: chosenSide === 'left' && answerStatus !== 'idle'
									? 'opacity-40 border-base-300 pointer-events-none'
									: activeKey === 'right'
										? 'border-primary'
										: 'border-base-300 hover:border-primary'
						}"
					>
						<!-- Key shortcut indicator -->
						<div class="absolute right-4 top-1/2 -translate-y-1/2 hidden md:flex items-center gap-1 opacity-75">
							<kbd class="kbd kbd-sm font-mono text-sm font-bold shadow-md">▶</kbd>
						</div>

						<span class="text-2xl sm:text-4xl font-extrabold tracking-tight filter drop-shadow-md transition-transform group-hover:scale-105">
							{rightOption}
						</span>
					</button>
				</div>

				<!-- Fixed-height feedback zone — always occupies space to prevent layout shift -->
				<div class="h-10 flex items-center justify-center">
					{#if answerStatus === 'correct'}
						<div class="flex items-center gap-2 text-success font-black text-sm animate-in fade-in slide-in-from-bottom-2 duration-200">
							<CheckCircleIcon size="18" />
							ถูกต้อง! {#if gameMode === 'timeattack'}<span class="text-warning text-xs font-bold ml-1">+1s ⚡</span>{/if}
						</div>
					{:else if answerStatus === 'incorrect'}
						<div class="flex items-center gap-2 text-error font-black text-sm animate-in fade-in slide-in-from-bottom-2 duration-200">
							<XCircleIcon size="18" />
							{chosenSide !== null ? 'สะกดผิด!' : 'หมดเวลา!'}
						</div>
					{/if}
				</div>

			</div>

		<!-- 3. GAMEOVER STATS SCREEN -->
		{:else if currentMode === 'gameover'}
			<div class="flex flex-col items-center text-center gap-5 max-w-md mx-auto py-4">
				<div class="w-12 h-12 rounded-2xl bg-neutral text-warning flex items-center justify-center shadow-md animate-pulse">
					<AwardIcon size="24" />
				</div>

				<div class="flex flex-col gap-0.5">
					<h2 class="text-xl font-black">จบแล้ว 🎉</h2>
					<p class="text-[10px] opacity-75 font-semibold tracking-wide uppercase">
						โหมดการเล่น: {gameMode === 'normal' ? 'Normal (ปกติ)' : gameMode === 'timeattack' ? 'Time Attack ⚡' : 'Endless (เล่นเรื่อยๆ)'}
					</p>
				</div>

				<!-- Stats card -->
				<div class="card bg-neutral text-neutral-content shadow-md w-full">
					<div class="card-body p-4 grid grid-cols-2 gap-3 text-center">
						<div class="flex flex-col items-center gap-0.5 border-r border-base-300">
							<span class="text-[9px] opacity-60 font-bold uppercase tracking-wider">คะแนน</span>
							<span class="text-2xl font-black font-mono text-primary">{score}</span>
						</div>
						<div class="flex flex-col items-center gap-0.5">
							<span class="text-[9px] opacity-60 font-bold uppercase tracking-wider">ความแม่นยำ</span>
							<span class="text-xl font-black font-mono text-success">
								{totalAnswered > 0 ? Math.round((correctCount / totalAnswered) * 100) : 0}%
							</span>
						</div>
						
						<div class="col-span-2 divider my-0"></div>
						
						<div class="flex flex-col items-center gap-0.5 border-r border-base-300">
							<span class="text-[9px] opacity-60 font-bold uppercase tracking-wider">จำนวนคำศัพท์</span>
							<span class="text-sm font-black text-secondary">{totalAnswered} คำ</span>
						</div>
						<div class="flex flex-col items-center gap-0.5">
							<span class="text-[9px] opacity-60 font-bold uppercase tracking-wider">สถิติต่อเนื่องสูงสุด</span>
							<span class="text-sm font-black text-warning">🔥 {maxStreak}</span>
						</div>
					</div>
				</div>

				<!-- High Score celebration -->
				{#if score >= highScores[gameMode]}
					<div class="badge badge-warning font-bold py-2.5 animate-bounce text-xs">
						👑 New Record!!
					</div>
				{/if}

				<!-- Action Buttons -->
				<div class="flex flex-col sm:flex-row gap-2.5 w-full mt-2">
					<button 
						on:click={() => startQuiz(gameMode)}
						class="btn btn-primary flex-1 gap-2 btn-sm sm:btn-md"
					>
						<RefreshCwIcon size="12" />
						เล่นอีก!
					</button>
					<button 
						on:click={goHome}
						class="btn btn-outline flex-1 gap-2 btn-sm sm:btn-md"
					>
						<ArrowLeftIcon size="12" />
						กลับ
					</button>
				</div>
			</div>
		{/if}

	</div>
</div>

<style>
	:global(.animate-shake) {
		animation: shake 0.6s cubic-bezier(.36,.07,.19,.97) both;
	}
	@keyframes shake {
		10%, 90% { transform: translate3d(-1px, 0, 0); }
		20%, 80% { transform: translate3d(2px, 0, 0); }
		30%, 50%, 70% { transform: translate3d(-4px, 0, 0); }
		40%, 60% { transform: translate3d(4px, 0, 0); }
	}
	@keyframes animate-in {
		from { opacity: 0; transform: translateY(4px); }
		to   { opacity: 1; transform: translateY(0); }
	}
	.animate-in { animation: animate-in 0.2s ease both; }
</style>
