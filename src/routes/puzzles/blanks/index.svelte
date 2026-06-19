<script lang="ts">
	import { onMount } from 'svelte';
	import KeyboardLayout from '$lib/components/KeyboardLayout.svelte';
	import dict from '$lib/dict.json';
	import {
		AwardIcon,
		HeartIcon,
		ArrowLeftIcon,
		PlayIcon,
		RefreshCwIcon,
		XCircleIcon,
		ClockIcon,
		BookOpenIcon,
		SendIcon
	} from 'svelte-feather-icons';

	// Global leaderboard submission
	let submitName = '';
	let submitStatus: 'idle' | 'loading' | 'success' | 'error' | 'duplicate' = 'idle';
	let submitError = '';

	function getPuzzleId(mode: string, diff: string): number {
		if (mode === 'normal' && diff === 'normal') return 0;
		if (mode === 'normal' && diff === 'difficult') return 1;
		if (mode === 'timeattack' && diff === 'normal') return 2;
		if (mode === 'timeattack' && diff === 'difficult') return 3;
		if (mode === 'endless' && diff === 'normal') return 4;
		if (mode === 'endless' && diff === 'difficult') return 5;
		return 0;
	}

	async function submitToLeaderboard() {
		const name = submitName.trim();
		if (!name || score === 0) return;
		submitStatus = 'loading';
		try {
			if (typeof window !== 'undefined') {
				localStorage.setItem('codebreaker_player_name', name);
			}
			const puzzle_id = getPuzzleId(gameMode, difficulty);
			const res = await fetch('/api/post/leaderboard', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ name, puzzle_type: 'blanks', puzzle_id, score })
			});
			if (res.status === 400) {
				submitStatus = 'duplicate';
			} else if (!res.ok) {
				submitStatus = 'error';
				submitError = 'เกิดข้อผิดพลาด ลองใหม่อีกครั้ง';
			} else {
				submitStatus = 'success';
			}
		} catch (e) {
			submitStatus = 'error';
			submitError = 'ไม่สามารถเชื่อมต่อได้';
		}
	}

	// Game States
	let currentMode: 'selection' | 'countdown' | 'playing' | 'gameover' = 'selection';
	let gameMode: 'normal' | 'endless' | 'timeattack' = 'normal';
	let difficulty: 'normal' | 'difficult' = 'normal';

	// Game Statistics
	let score = 0;
	let streak = 0;
	let maxStreak = 0;
	let lives = 3;
	let totalAnswered = 0;
	let correctCount = 0;
	let highScores = {
		normal_normal: 0,
		normal_difficult: 0,
		timeattack_normal: 0,
		timeattack_difficult: 0,
		endless_normal: 0,
		endless_difficult: 0
	};

	// Question State
	interface QuestionWord {
		word: string;
		chars: string[];
		blankGroups: Array<{ char: string; indices: number[]; value: string }>;
		explanation: string;
	}

	let currentQuestion = '';
	let qWord: QuestionWord | null = null;
	let activeGroupIndex = 0;

	// Missed words tracking
	let missedWords: Array<{ correctWord: string; shownWord: string }> = [];

	// Interactive animation states
	let answerStatus: 'idle' | 'correct' | 'incorrect' = 'idle';
	let revealedCorrectAnswer = '';

	// Dictionary Set for fast validation of alternative words
	const dictSet = new Set(dict);
	let playableWords: string[] = [];

	// Timer state for Normal Mode (10s per question instead of 5s, since blanks require keyboard input)
	let timeLeft = 10.0;
	let timerInterval: any = null;

	// Time Attack Mode state (total game clock)
	let attackTimeLeft = 60;
	let attackTimerInterval: any = null;

	// Countdown state
	let countdown = 3;
	let countdownInterval: any = null;

	// Thai combining character checks
	function isUpperChar(c: string): boolean {
		return ['ั', 'ิ', 'ี', 'ึ', 'ื', '็', '่', '้', '๊', '๋', '์', 'ํ'].includes(c);
	}

	// Kedmanee / Thai lower combining characters
	function isLowerChar(c: string): boolean {
		return ['ุ', 'ู', 'ฺ'].includes(c);
	}

	interface ThaiBlock {
		base: string;
		upper: string;
		lower: string;
	}

	function parseThaiBlocks(word: string): ThaiBlock[] {
		const blocks: ThaiBlock[] = [];
		for (const char of word) {
			if (isUpperChar(char)) {
				if (blocks.length > 0) {
					blocks[blocks.length - 1].upper += char;
				} else {
					blocks.push({ base: '', upper: char, lower: '' });
				}
			} else if (isLowerChar(char)) {
				if (blocks.length > 0) {
					blocks[blocks.length - 1].lower += char;
				} else {
					blocks.push({ base: '', upper: '', lower: char });
				}
			} else {
				// Base character
				blocks.push({ base: char, upper: '', lower: '' });
			}
		}
		return blocks;
	}

	// Play synthesized arcade-style sound effects
	function playSFX(type: 'select' | 'correct' | 'incorrect') {
		if (typeof window === 'undefined') return;
		try {
			const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
			if (!AudioContextClass) return;
			const ctx = new AudioContextClass();

			if (type === 'select') {
				const osc = ctx.createOscillator();
				const gain = ctx.createGain();
				osc.type = 'sine';
				osc.frequency.setValueAtTime(600, ctx.currentTime);
				osc.frequency.exponentialRampToValueAtTime(1200, ctx.currentTime + 0.05);
				gain.gain.setValueAtTime(0.04, ctx.currentTime);
				gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05);
				osc.connect(gain);
				gain.connect(ctx.destination);
				osc.start();
				osc.stop(ctx.currentTime + 0.05);
			} else if (type === 'correct') {
				const osc1 = ctx.createOscillator();
				const osc2 = ctx.createOscillator();
				const gain = ctx.createGain();
				
				osc1.type = 'sine';
				osc1.frequency.setValueAtTime(523.25, ctx.currentTime); // C5
				osc1.frequency.exponentialRampToValueAtTime(1046.50, ctx.currentTime + 0.15); // C6

				osc2.type = 'sine';
				osc2.frequency.setValueAtTime(659.25, ctx.currentTime); // E5
				osc2.frequency.exponentialRampToValueAtTime(1318.51, ctx.currentTime + 0.15); // E6

				gain.gain.setValueAtTime(0.08, ctx.currentTime);
				gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.3);

				osc1.connect(gain);
				osc2.connect(gain);
				gain.connect(ctx.destination);

				osc1.start();
				osc2.start();
				osc1.stop(ctx.currentTime + 0.3);
				osc2.stop(ctx.currentTime + 0.3);
			} else if (type === 'incorrect') {
				const osc = ctx.createOscillator();
				const gain = ctx.createGain();
				osc.type = 'triangle';
				osc.frequency.setValueAtTime(220, ctx.currentTime);
				osc.frequency.linearRampToValueAtTime(110, ctx.currentTime + 0.2);
				gain.gain.setValueAtTime(0.1, ctx.currentTime);
				gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.2);
				osc.connect(gain);
				gain.connect(ctx.destination);
				osc.start();
				osc.stop(ctx.currentTime + 0.2);
			}
		} catch (e) {
			console.warn('AudioContext error:', e);
		}
	}

	// Normal Mode per-question countdown
	function startTimer() {
		stopTimer();
		timeLeft = 10.0;
		timerInterval = setInterval(() => {
			timeLeft -= 0.1;
			if (timeLeft <= 0.05) {
				timeLeft = 0;
				stopTimer();
				handleTimeout();
			}
		}, 100);
	}

	function handleTimeout() {
		if (currentMode !== 'playing' || answerStatus !== 'idle') return;
		submitAnswer(true);
	}

	function stopTimer() {
		if (timerInterval) {
			clearInterval(timerInterval);
			timerInterval = null;
		}
	}

	// Time Attack Mode global game clock
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

	function initPlayableWords() {
		const thaiRegex = /^[ก-ฮะ-์]+$/;
		playableWords = dict.filter(w => 
			w.length >= 4 && 
			w.length <= 8 && 
			thaiRegex.test(w)
		);
	}

	// Load & Save High Scores
	onMount(() => {
		initPlayableWords();
		if (typeof window !== 'undefined') {
			const saved = localStorage.getItem('codebreaker_blanks_highscores');
			if (saved) {
				try {
					highScores = { ...highScores, ...JSON.parse(saved) };
				} catch (e) {
					console.error(e);
				}
			}
			// Pre-fill saved player name
			submitName = localStorage.getItem('codebreaker_player_name') || '';
		}

		return () => {
			stopTimer();
			stopAttackTimer();
			if (countdownInterval) clearInterval(countdownInterval);
		};
	});

	function setupQuestion(selected: string): QuestionWord | null {
		const chars = selected.split('');
		const uniqueChars = Array.from(new Set(chars));

		if (difficulty === 'normal') {
			// Normal difficulty: blank out a character appearing >= 2 times
			const eligible = uniqueChars.filter((c) => chars.filter((x) => x === c).length >= 2);
			if (eligible.length === 0) return null;
			const target = eligible[Math.floor(Math.random() * eligible.length)];
			const indices = chars.map((c, i) => (c === target ? i : -1)).filter((i) => i !== -1);
			return {
				word: selected,
				chars,
				blankGroups: [{ char: target, indices, value: '' }],
				explanation: ''
			};
		} else {
			// Difficult mode: blank out two different character sets, each appearing at least twice
			const eligibleMultiples = uniqueChars.filter((c) => chars.filter((x) => x === c).length >= 2);
			if (eligibleMultiples.length < 2) return null;
			
			// Select two different target letters from the multiples list
			const idx1 = Math.floor(Math.random() * eligibleMultiples.length);
			const c1 = eligibleMultiples[idx1];
			
			const remaining = eligibleMultiples.filter(c => c !== c1);
			const c2 = remaining[Math.floor(Math.random() * remaining.length)];

			const indices1 = chars.map((c, i) => (c === c1 ? i : -1)).filter((i) => i !== -1);
			const indices2 = chars.map((c, i) => (c === c2 ? i : -1)).filter((i) => i !== -1);

			const blankGroups = [
				{ char: c1, indices: indices1, value: '' },
				{ char: c2, indices: indices2, value: '' }
			].sort((a, b) => a.indices[0] - b.indices[0]);

			return {
				word: selected,
				chars,
				blankGroups,
				explanation: ''
			};
		}
	}

	function getNextQuestion() {
		answerStatus = 'idle';
		stopTimer();

		let selectedWord = '';
		let q: QuestionWord | null = null;

		const wordSource = playableWords.length > 0 ? playableWords : dict;

		let attempts = 0;
		while (!q && attempts < 500) {
			attempts++;
			const idx = Math.floor(Math.random() * wordSource.length);
			selectedWord = wordSource[idx];
			q = setupQuestion(selectedWord);
		}

		if (q) {
			currentQuestion = selectedWord;
			qWord = q;
			activeGroupIndex = 0;
			revealedCorrectAnswer = qWord.word;
		} else {
			// Fallback
			qWord = {
				word: "กระทะ",
				chars: ["ก", "ร", "ะ", "ท", "ะ"],
				blankGroups: [{ char: "ะ", indices: [2, 4], value: "" }],
				explanation: ""
			};
			currentQuestion = "กระทะ";
			activeGroupIndex = 0;
			revealedCorrectAnswer = qWord.word;
		}

		if (gameMode === 'normal') {
			startTimer();
		}
	}

	// Start Game
	function startBlanksGame() {
		score = 0;
		streak = 0;
		maxStreak = 0;
		lives = 3;
		totalAnswered = 0;
		correctCount = 0;
		missedWords = [];
		currentMode = 'playing';
		stopAttackTimer();

		if (gameMode === 'timeattack') {
			startAttackTimer();
		}

		getNextQuestion();
	}

	// Input handlers
	function handleCharInput(char: string) {
		if (!qWord || answerStatus !== 'idle') return;
		
		playSFX('select');

		if (activeGroupIndex < qWord.blankGroups.length) {
			qWord.blankGroups[activeGroupIndex].value = char;
			qWord = qWord; // trigger Svelte reactivity

			// Auto advance to next unfilled blank group
			const nextUnfilled = qWord.blankGroups.findIndex((g, idx) => idx > activeGroupIndex && g.value === '');
			if (nextUnfilled !== -1) {
				activeGroupIndex = nextUnfilled;
			} else {
				// check if all are filled
				const allFilled = qWord.blankGroups.every(g => g.value !== '');
				if (allFilled) {
					submitAnswer();
				} else {
					const firstEmpty = qWord.blankGroups.findIndex(g => g.value === '');
					if (firstEmpty !== -1) {
						activeGroupIndex = firstEmpty;
					}
				}
			}
		}
	}

	// Helper to find the group of character
	function getGroupIndex(char: string): number {
		if (!qWord) return -1;
		return qWord.blankGroups.findIndex(g => g.char === char);
	}

	function handleBackspace() {
		if (!qWord || answerStatus !== 'idle') return;

		playSFX('select');

		if (qWord.blankGroups[activeGroupIndex].value !== '') {
			qWord.blankGroups[activeGroupIndex].value = '';
			qWord = qWord;
		} else if (activeGroupIndex > 0) {
			activeGroupIndex--;
			qWord.blankGroups[activeGroupIndex].value = '';
			qWord = qWord;
		}
	}

	function handleKeyType(event: CustomEvent<string>) {
		const char = event.detail;
		if (char === '⬅') {
			handleBackspace();
		} else if (char === '⇧') {
			// handled internally by KeyboardLayout
		} else {
			handleCharInput(char);
		}
	}

	function handleKeyDown(event: KeyboardEvent) {
		if (currentMode !== 'playing' || answerStatus !== 'idle') return;
		if (event.key === 'Backspace') {
			handleBackspace();
		} else if (event.key.length === 1) {
			handleCharInput(event.key);
		}
	}

	function submitAnswer(isTimeout = false) {
		if (!qWord || answerStatus !== 'idle') return;
		stopTimer();

		totalAnswered++;

		if (isTimeout) {
			answerStatus = 'incorrect';
			playSFX('incorrect');
			streak = 0;
			if (currentQuestion) {
				missedWords = [...missedWords, { correctWord: currentQuestion, shownWord: 'หมดเวลา' }];
			}
			if (gameMode === 'normal') {
				lives--;
				if (lives <= 0) {
					setTimeout(() => triggerGameOver(), 1800);
					return;
				}
			}
			setTimeout(() => {
				if (currentMode === 'playing') getNextQuestion();
			}, 2000);
			return;
		}

		// Reconstruct the word from user inputs
		const userChars = [...qWord.chars];
		qWord.blankGroups.forEach(g => {
			g.indices.forEach(idx => {
				userChars[idx] = g.value;
			});
		});
		const reconstructedWord = userChars.join('');

		// Check correctness against full dictionary OR original word
		const isCorrect = dictSet.has(reconstructedWord) || reconstructedWord === qWord.word;

		if (isCorrect) {
			answerStatus = 'correct';
			playSFX('correct');
			score += 15 + Math.min(streak * 3, 30);
			streak++;
			correctCount++;
			if (streak > maxStreak) maxStreak = streak;

			if (gameMode === 'timeattack') {
				attackTimeLeft = Math.min(attackTimeLeft + 3, 99); // +3s bonus on correct
			}
		} else {
			answerStatus = 'incorrect';
			playSFX('incorrect');
			streak = 0;

			if (currentQuestion) {
				missedWords = [
					...missedWords,
					{
						correctWord: currentQuestion,
						shownWord: reconstructedWord
					}
				];
			}

			if (gameMode === 'normal') {
				lives--;
				if (lives <= 0) {
					setTimeout(() => triggerGameOver(), 1800);
					return;
				}
			}
		}

		setTimeout(() => {
			if (currentMode === 'playing') getNextQuestion();
		}, 2000);
	}

	// Game over
	function triggerGameOver() {
		stopTimer();
		stopAttackTimer();
		currentMode = 'gameover';
		submitStatus = 'idle';

		const scoreKey = `${gameMode}_${difficulty}` as keyof typeof highScores;
		if (score > highScores[scoreKey]) {
			highScores[scoreKey] = score;
			if (typeof window !== 'undefined') {
				localStorage.setItem('codebreaker_blanks_highscores', JSON.stringify(highScores));
			}
		}
	}

	function goHome() {
		stopTimer();
		stopAttackTimer();
		if (countdownInterval) {
			clearInterval(countdownInterval);
			countdownInterval = null;
		}
		currentMode = 'selection';
	}

	function beginCountdown() {
		if (countdownInterval) clearInterval(countdownInterval);
		countdown = 3;
		currentMode = 'countdown';
		countdownInterval = setInterval(() => {
			countdown--;
			if (countdown <= 0) {
				clearInterval(countdownInterval);
				countdownInterval = null;
				startBlanksGame();
			}
		}, 1000);
	}

	$: currentHighScore = highScores[`${gameMode}_${difficulty}` as keyof typeof highScores] || 0;
	$: attackSeconds = Math.max(0, Math.ceil(attackTimeLeft));
	$: attackPct = Math.max(0, Math.min((attackTimeLeft / 60) * 100, 100));
	$: attackUrgent = attackTimeLeft < 15;
</script>

<svelte:window on:keydown={handleKeyDown} />

<svelte:head>
	<title>Code Breaker | ซ่อนอักษร ✏️</title>
	<meta name="description" content="เกมเติมตัวอักษรปริศนาในช่องว่าง" />
</svelte:head>

<div class="flex flex-col gap-6 w-full max-w-4xl mx-auto px-4 select-none pb-12 text-center">
	<div class="flex flex-col justify-center py-2 sm:py-4">
		<!-- 1. SELECT GAME MODE SCREEN -->
		{#if currentMode === 'selection'}
			<div class="flex flex-col gap-1 mb-2">
				<h1 class="text-2xl md:text-4xl font-black tracking-tight text-white">ซ่อนอักษร</h1>
				<p class="text-xs md:text-sm opacity-90 max-w-lg mx-auto leading-relaxed">
					หาตัวอักษร 1 ตัวที่เติมซ้ำในทุกช่องว่างแล้วเป็นคำในพจนานุกรม
				</p>
			</div>

			<!-- New Game Button -->
			<div class="w-full my-4">
				<button
					on:click={beginCountdown}
					class="btn btn-primary w-full gap-3 font-black text-2xl sm:text-3xl shadow-2xl hover:shadow-primary/45 hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 py-6 sm:py-8 h-auto rounded-3xl"
				>
					<PlayIcon size="28" class="sm:w-8 sm:h-8" />
					เริ่มเล่นเกมใหม่ 🚀
				</button>
			</div>

			<!-- Settings Dropdowns -->
			<div class="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full text-left my-2">
				<!-- Game Mode Select -->
				<div class="flex flex-col gap-2">
					<label for="gameMode" class="text-sm font-extrabold text-white/80 flex items-center gap-1.5 px-1">
						🏆 รูปแบบการเล่น
					</label>
					<select
						id="gameMode"
						bind:value={gameMode}
						class="select select-bordered w-full bg-neutral text-neutral-content border-base-300 font-extrabold focus:border-primary text-sm sm:text-base py-2.5 h-auto rounded-2xl cursor-pointer"
					>
						<option value="normal">Normal (❤️ 3 ชีวิต)</option>
						<option value="timeattack">Time Attack (⚡ 60 วินาที)</option>
						<option value="endless">Endless (♾️ เล่นไปเรื่อยๆ)</option>
					</select>
				</div>

				<!-- Difficulty Select -->
				<div class="flex flex-col gap-2">
					<label for="difficulty" class="text-sm font-extrabold text-white/80 flex items-center gap-1.5 px-1">
						⚙️ ระดับความยาก
					</label>
					<select
						id="difficulty"
						bind:value={difficulty}
						class="select select-bordered w-full bg-neutral text-neutral-content border-base-300 font-extrabold focus:border-primary text-sm sm:text-base py-2.5 h-auto rounded-2xl cursor-pointer"
					>
						<option value="normal">ทั่วไป (1 ตัวอักษร)</option>
						<option value="difficult">ท้าทาย (2 ตัวอักษรขึ้นไป)</option>
					</select>
				</div>
			</div>

			<!-- High Score Info + Leaderboard link -->
			<div class="flex items-center justify-between px-1 my-1">
				{#if currentHighScore > 0}
					<span class="text-xs sm:text-sm font-bold text-accent">
						👑 คะแนนสูงสุดในโหมดนี้: <span class="font-mono font-extrabold">{currentHighScore}</span> คะแนน
					</span>
				{:else}
					<span></span>
				{/if}
				<a href="/puzzles/blanks/leaderboard" class="btn btn-ghost btn-xs gap-1 opacity-60 hover:opacity-100">
					<AwardIcon size="12" /> ตารางคะแนน
				</a>
			</div>

		<!-- 2. COUNTDOWN SCREEN -->
		{:else if currentMode === 'countdown'}
			<div class="flex flex-col items-center justify-center gap-6 py-16 select-none">
				<p
					class="text-sm font-black uppercase tracking-widest opacity-70 text-secondary animate-pulse"
				>
					เตรียมพร้อม!
				</p>
				<div
					class="text-[9rem] sm:text-[12rem] font-black leading-none text-primary transition-all duration-300 drop-shadow-2xl tabular-nums"
					style="text-shadow: 0 0 80px hsl(var(--p) / 0.55);"
				>
					{countdown}
				</div>
				<p class="text-sm opacity-60 font-bold">
					{gameMode === 'normal'
						? '❤️ Survival Mode'
						: gameMode === 'timeattack'
						? '⚡ Time Attack'
						: '♾️ Endless Mode'} • {difficulty === 'normal' ? 'ทั่วไป' : 'ท้าทาย'}
				</p>
				<button on:click={goHome} class="btn btn-ghost btn-sm opacity-50 hover:opacity-100 mt-2">
					ยกเลิก
				</button>
			</div>

		<!-- 3. GAME PLAYING SCREEN -->
		{:else if currentMode === 'playing'}
			<div class="w-full flex flex-col gap-4">
				<!-- Score board and stats -->
				<div
					class="flex items-center justify-between bg-neutral text-neutral-content rounded-2xl p-4 px-6 shadow-lg text-sm sm:text-lg font-bold border border-base-300"
				>
					<div class="flex items-center gap-6">
						<span
							>คะแนน: <span class="text-primary font-black font-mono text-lg sm:text-2xl"
								>{score}</span
							></span
						>
						<span
							>คอมโบ: <span class="text-accent font-black font-mono text-lg sm:text-2xl"
								>🔥 {streak}</span
							></span
						>
					</div>
					<div class="flex items-center gap-3">
						{#if gameMode === 'normal'}
							<span class="opacity-60 text-xs sm:text-sm font-bold mr-1">ชีวิต:</span>
							<span class="flex items-center gap-1">
								{#each Array(3) as _, i}
									<HeartIcon
										size="20"
										class={i < lives ? 'text-error fill-error filter drop-shadow' : 'opacity-20'}
									/>
								{/each}
							</span>
						{:else if gameMode === 'timeattack'}
							<ClockIcon
								size="18"
								class="opacity-70 {attackUrgent ? 'text-error animate-pulse' : ''}"
							/>
							<span
								class="font-mono font-black {attackUrgent
									? 'text-error text-xl sm:text-2xl animate-pulse'
									: 'text-warning text-lg sm:text-2xl'}"
							>
								{attackSeconds}s
							</span>
						{:else}
							<span
								>ความแม่นยำ: <span class="text-success font-black font-mono text-lg sm:text-2xl"
									>{totalAnswered > 0 ? Math.round((correctCount / totalAnswered) * 100) : 0}%</span
								></span
							>
						{/if}
					</div>
				</div>

				<!-- Progress bar timers -->
				{#if gameMode === 'normal'}
					<div
						class="w-full bg-base-300/40 h-3 sm:h-4 rounded-full overflow-hidden relative border border-base-300 shadow-inner"
					>
						<div
							class="h-full rounded-full transition-all duration-100 ease-linear {timeLeft > 4
								? 'bg-gradient-to-r from-success to-warning'
								: 'bg-gradient-to-r from-warning to-error animate-pulse'}"
							style="width: {(timeLeft / 10) * 100}%"
						/>
					</div>
				{:else if gameMode === 'timeattack'}
					<div
						class="w-full bg-base-300/40 h-3 sm:h-4 rounded-full overflow-hidden relative border border-base-300 shadow-inner"
					>
						<div
							class="h-full rounded-full transition-all duration-100 ease-linear {attackUrgent
								? 'bg-gradient-to-r from-warning to-error animate-pulse'
								: 'bg-gradient-to-r from-warning to-success'}"
							style="width: {attackPct}%"
						/>
					</div>
				{/if}

				<!-- GUESS WORD ZONE (Thai combining characters stacked vertically) -->
				{#if qWord}
					{@const blocks = parseThaiBlocks(qWord.word)}
					<div 
						class="flex justify-center items-center flex-wrap gap-x-3 gap-y-6 py-10 my-4 bg-slate-900/40 rounded-3xl border transition-all duration-300
							{answerStatus === 'correct' 
								? 'border-success/60 shadow-[0_0_20px_rgba(34,197,94,0.15)] bg-success/5' 
								: answerStatus === 'incorrect' 
									? 'border-error/60 shadow-[0_0_20px_rgba(239,68,68,0.15)] bg-error/5 animate-shake' 
									: 'border-white/5 shadow-inner'}"
					>
						{#each (() => {
							let charIdx = 0;
							return blocks.map(block => {
								const baseIdx = block.base ? charIdx++ : -1;
								const upperIndices = [];
								for (let i = 0; i < block.upper.length; i++) {
									upperIndices.push(charIdx++);
								}
								const lowerIndices = [];
								for (let i = 0; i < block.lower.length; i++) {
									lowerIndices.push(charIdx++);
								}
								return { block, baseIdx, upperIndices, lowerIndices };
							});
						})() as item}
							{@const baseGroupIdx = item.baseIdx !== -1 ? getGroupIndex(item.block.base) : -1}
							{@const lowerGroupIdx = item.lowerIndices.length > 0 ? getGroupIndex(item.block.lower[0]) : -1}
							<div class="relative flex flex-col items-center justify-center w-16 h-36 sm:w-20 sm:h-44 bg-neutral/20 border border-base-300/40 rounded-2xl select-none p-1.5 shadow-inner">
								<!-- Upper Vowel/Tone Mark Stack -->
								<div class="h-10 flex flex-col-reverse items-center justify-end text-xl sm:text-2xl font-black text-white mb-[-4px] gap-0.5">
									{#if item.block.upper}
										{#each item.block.upper.split('') as char}
											{@const upperGroupIdx = getGroupIndex(char)}
											{#if upperGroupIdx !== -1}
												{@const group = qWord.blankGroups[upperGroupIdx]}
												{@const isActive = upperGroupIdx === activeGroupIndex}
												<button
													on:click={() => activeGroupIndex = upperGroupIdx}
													class="relative px-2 py-0.5 rounded-lg border transition-all duration-150 font-mono text-sm sm:text-base font-black
														{isActive 
															? upperGroupIdx === 0 
																? 'border-sky-500 bg-sky-500/20 text-sky-400 scale-105 shadow-[0_0_8px_rgba(14,165,233,0.4)]'
																: 'border-amber-500 bg-amber-500/20 text-amber-400 scale-105 shadow-[0_0_8px_rgba(245,158,11,0.4)]'
															: group.value !== '' 
																? 'border-success/50 bg-success/10 text-success' 
																: upperGroupIdx === 0 
																	? 'border-sky-500/40 bg-sky-500/5 text-sky-355 hover:border-sky-400'
																	: 'border-amber-500/40 bg-amber-500/5 text-amber-355 hover:border-amber-400'}"
												>
													{group.value || '_'}
													{#if difficulty === 'difficult'}
														<span class="absolute top-0 right-0.5 text-[7px] leading-none font-black {upperGroupIdx === 0 ? 'text-sky-400/85' : 'text-amber-400/85'}">
															{upperGroupIdx + 1}
														</span>
													{/if}
												</button>
											{:else}
												{char}
											{/if}
										{/each}
									{/if}
								</div>

								<!-- Base Consonant -->
								<div class="h-14 flex items-center justify-center text-4xl sm:text-5xl font-black text-white">
									{#if baseGroupIdx !== -1}
										{@const group = qWord.blankGroups[baseGroupIdx]}
										{@const isActive = baseGroupIdx === activeGroupIndex}
										<button
											on:click={() => activeGroupIndex = baseGroupIdx}
											class="relative w-12 h-12 rounded-xl border transition-all duration-150 flex items-center justify-center text-2xl sm:text-3xl font-black
												{isActive 
													? baseGroupIdx === 0
														? 'border-sky-500 bg-sky-500/20 text-sky-400 scale-105 shadow-[0_0_8px_rgba(14,165,233,0.4)]'
														: 'border-amber-500 bg-amber-500/20 text-amber-400 scale-105 shadow-[0_0_8px_rgba(245,158,11,0.4)]'
													: group.value !== '' 
														? 'border-success/50 bg-success/10 text-success' 
														: baseGroupIdx === 0
															? 'border-sky-500/40 bg-sky-500/5 text-sky-355 hover:border-sky-400'
															: 'border-amber-500/40 bg-amber-500/5 text-amber-355 hover:border-amber-400'}"
										>
											{group.value || '?'}
											{#if difficulty === 'difficult'}
												<span class="absolute top-0.5 right-1 text-[8px] leading-none font-black {baseGroupIdx === 0 ? 'text-sky-400/85' : 'text-amber-400/85'}">
													{baseGroupIdx + 1}
												</span>
											{/if}
										</button>
									{:else if item.block.base}
										{item.block.base}
									{/if}
								</div>

								<!-- Lower Vowel Stack -->
								<div class="h-6 flex items-start justify-center text-2xl sm:text-3xl font-black text-white mt-[-6px]">
									{#if lowerGroupIdx !== -1}
										{@const group = qWord.blankGroups[lowerGroupIdx]}
										{@const isActive = lowerGroupIdx === activeGroupIndex}
										<button
											on:click={() => activeGroupIndex = lowerGroupIdx}
											class="relative px-2.5 py-1 rounded-lg border transition-all duration-150 font-mono text-base sm:text-lg font-black
												{isActive 
													? lowerGroupIdx === 0
														? 'border-sky-500 bg-sky-500/20 text-sky-400 scale-105 shadow-[0_0_8px_rgba(14,165,233,0.4)]'
														: 'border-amber-500 bg-amber-500/20 text-amber-400 scale-105 shadow-[0_0_8px_rgba(245,158,11,0.4)]'
													: group.value !== '' 
														? 'border-success/50 bg-success/10 text-success' 
														: lowerGroupIdx === 0
															? 'border-sky-500/40 bg-sky-500/5 text-sky-355 hover:border-sky-400'
															: 'border-amber-500/40 bg-amber-500/5 text-amber-355 hover:border-amber-400'}"
										>
											{group.value || '_'}
											{#if difficulty === 'difficult'}
												<span class="absolute top-0 right-0.5 text-[7px] leading-none font-black {lowerGroupIdx === 0 ? 'text-sky-400/85' : 'text-amber-400/85'}">
													{lowerGroupIdx + 1}
												</span>
											{/if}
										</button>
									{:else if item.block.lower}
										{item.block.lower}
									{/if}
								</div>
							</div>
						{/each}
					</div>
				{/if}

				<!-- On Screen Mobile Keyboard Layout -->
				<div class="w-full max-w-lg mx-auto py-2">
					<KeyboardLayout on:type={handleKeyType} />
				</div>

				<!-- Quit Button -->
				<div class="flex justify-center mt-2 border-t border-base-300/40 pt-4">
					<button
						on:click={triggerGameOver}
						class="btn btn-outline btn-error btn-sm sm:btn-md gap-2 px-8 hover:bg-error hover:text-white transition-all duration-300 font-bold"
					>
						<XCircleIcon size="16" />
						จบเกม
					</button>
				</div>
			</div>

		<!-- 4. GAMEOVER STATS SCREEN -->
		{:else if currentMode === 'gameover'}
			<div class="flex flex-col items-center text-center gap-6 max-w-xl mx-auto py-4">
				<div
					class="w-16 h-16 rounded-2xl bg-neutral text-warning flex items-center justify-center shadow-lg animate-pulse border border-warning/30"
				>
					<AwardIcon size="32" />
				</div>

				<div class="flex flex-col gap-1">
					<h2 class="text-3xl sm:text-5xl font-black text-warning">สรุปผล 🎉</h2>
					<p class="text-xs sm:text-sm font-extrabold tracking-wide uppercase opacity-75">
						โหมด: {gameMode === 'normal' ? 'Normal' : gameMode === 'timeattack' ? 'Time Attack ⚡' : 'Endless'} • ความยาก: {difficulty === 'normal' ? 'ทั่วไป' : 'ท้าทาย'}
					</p>
				</div>

				<!-- Stats card -->
				<div class="card bg-neutral text-neutral-content shadow-xl w-full border border-base-300">
					<div class="card-body p-6 grid grid-cols-2 gap-4 text-center">
						<div class="flex flex-col items-center gap-1 border-r border-base-300">
							<span class="text-xs opacity-75 font-bold uppercase tracking-wider">คะแนน</span>
							<span class="text-4xl sm:text-5xl font-black font-mono text-primary">{score}</span>
						</div>
						<div class="flex flex-col items-center gap-1">
							<span class="text-xs opacity-75 font-bold uppercase tracking-wider">ความแม่นยำ</span>
							<span class="text-3xl sm:text-4xl font-black font-mono text-success">
								{totalAnswered > 0 ? Math.round((correctCount / totalAnswered) * 100) : 0}%
							</span>
						</div>

						<div class="col-span-2 divider my-0" />

						<div class="flex flex-col items-center gap-1 border-r border-base-300">
							<span class="text-xs opacity-75 font-bold uppercase tracking-wider">ตอบทั้งหมด</span>
							<span class="text-lg sm:text-xl font-extrabold text-secondary"
								>{totalAnswered} คำ</span
							>
						</div>
						<div class="flex flex-col items-center gap-1">
							<span class="text-xs opacity-75 font-bold uppercase tracking-wider">คอมโบสูงสุด</span>
							<span class="text-lg sm:text-xl font-extrabold text-warning">🔥 {maxStreak} คำ</span>
						</div>
					</div>
				</div>

				<!-- miss list -->
				{#if missedWords.length > 0}
					<div
						class="card bg-neutral text-neutral-content shadow-lg w-full text-left border border-base-300"
					>
						<div class="card-body p-5 sm:p-6">
							<h3 class="text-base sm:text-lg font-black text-error flex items-center gap-2 mb-3">
								<BookOpenIcon size="20" class="hidden sm:inline" />
								ข้อที่ตอบผิด ({missedWords.length} คำ)
							</h3>

							<div class="flex flex-col gap-3.5 max-h-[360px] overflow-y-auto pr-1">
								{#each missedWords as item, idx}
									<div
										class="p-3.5 bg-base-100 rounded-xl flex flex-col gap-2 shadow-inner border border-base-300"
									>
										<div class="flex flex-wrap items-center justify-between gap-2">
											<div class="flex items-center gap-2.5">
												<span class="badge badge-error badge-sm text-[10px] font-black"
													># {idx + 1}</span
												>
												<span class="text-success font-black text-base flex items-center gap-1">
													✅ {item.correctWord}
												</span>
												<span class="text-xs opacity-40 font-bold">คุณเติมได้:</span>
												<span class="text-error font-extrabold line-through text-base">
													{item.shownWord}
												</span>
											</div>
										</div>
									</div>
								{/each}
							</div>
						</div>
					</div>
				{/if}

				<!-- Global Leaderboard Submit -->
				{#if score > 0}
					<div class="card bg-neutral border border-base-300 shadow-lg w-full">
						<div class="card-body p-4 flex flex-col gap-3">
							<p class="text-sm font-black text-white flex items-center gap-2">
								<AwardIcon size="16" class="text-warning" />
								ส่งคะแนนขึ้นกระดานโลก
							</p>
							{#if submitStatus === 'success'}
								<div class="alert alert-success text-sm font-bold py-2 px-3">✅ ส่งคะแนนสำเร็จ! ดูอันดับได้ในตารางคะแนนทั่วโลก</div>
							{:else if submitStatus === 'duplicate'}
								<div class="alert alert-warning text-sm font-bold py-2 px-3">⚠️ ชื่อนี้เคยส่งคะแนนไปแล้ว</div>
							{:else if submitStatus === 'error'}
								<div class="alert alert-error text-sm font-bold py-2 px-3">❌ {submitError}</div>
							{:else}
								<div class="flex gap-2">
									<input
										type="text"
										bind:value={submitName}
										placeholder="ชื่อของคุณ..."
										maxlength="20"
										class="input input-bordered flex-1 bg-base-100 text-sm font-bold focus:border-primary"
										on:keydown={(e) => e.key === 'Enter' && submitToLeaderboard()}
									/>
									<button
										on:click={submitToLeaderboard}
										disabled={submitStatus === 'loading' || !submitName.trim()}
										class="btn btn-warning gap-2 font-black"
									>
										{#if submitStatus === 'loading'}
											<span class="loading loading-spinner loading-sm" />
										{:else}
											<SendIcon size="14" /> ส่ง
										{/if}
									</button>
								</div>
							{/if}
						</div>
					</div>
				{/if}

				<!-- Action Buttons -->
				<div class="flex flex-col sm:flex-row gap-3 w-full mt-3">
					<button
						on:click={beginCountdown}
						class="btn btn-primary flex-1 gap-2 btn-md sm:btn-lg font-black text-sm sm:text-base shadow-md"
					>
						<RefreshCwIcon size="16" />
						เล่นอีกรอบ!
					</button>
					<button
						on:click={goHome}
						class="btn btn-outline flex-1 gap-2 btn-md sm:btn-lg font-black text-sm sm:text-base shadow-md"
					>
						<ArrowLeftIcon size="16" />
						กลับหน้าหลัก
					</button>
					<a
						href="/puzzles/blanks/leaderboard"
						class="btn btn-outline btn-warning flex-1 gap-2 btn-md sm:btn-lg font-black text-sm sm:text-base shadow-md"
					>
						<AwardIcon size="16" />
						ตารางคะแนน
					</a>
				</div>
			</div>
		{/if}
	</div>
</div>

<style>
	@keyframes animate-in {
		from {
			opacity: 0;
			transform: translateY(6px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
	.animate-in {
		animation: animate-in 0.25s ease both;
	}
	:global(.animate-shake) {
		animation: shake 0.6s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
	}
	@keyframes shake {
		10%,
		90% {
			transform: translate3d(-1px, 0, 0);
		}
		20%,
		80% {
			transform: translate3d(2px, 0, 0);
		}
		30%,
		50%,
		70% {
			transform: translate3d(-4px, 0, 0);
		}
		40%,
		60% {
			transform: translate3d(4px, 0, 0);
		}
	}
</style>
