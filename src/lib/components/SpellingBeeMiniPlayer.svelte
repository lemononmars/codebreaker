<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { goto } from '$app/navigation';
	import { search, isUpper, isLower } from '$lib/utils/thaiwords';
	import { todayDateThaiString } from '$lib/utils/date';
	import { numPuzzles } from '$lib/data/puzzles/spellingbee';
	import { RefreshCwIcon, CheckCircleIcon, XCircleIcon, PauseIcon, PlayIcon } from 'svelte-feather-icons';
	import { username } from '$lib/store';
	import { flip } from 'svelte/animate';

	let word = '';
	let puzzleId: number | string = '';
	let letters: string[] = [];
	let answer = '';
	let isLoading = true;
	let isFinished = false;
	let isWiggle = false;
	let isPaused = false;

	let time = 0;
	let timer: any;

	interface LogState {
		text: string;
		type: 'success' | 'error' | 'info' | '';
	}
	let log: LogState = { text: '', type: '' };

	$: minutes = String(Math.floor(time / 60000)).padStart(2, '0');
	$: seconds = String(Math.floor((time % 60000) / 1000)).padStart(2, '0');
	$: timeString = `${minutes}:${seconds}`;

	onMount(async () => {
		try {
			const res = await fetch('/api/puzzle/spellingbee/daily');
			const data = await res.json();
			if (data && data.word) {
				word = data.word;
				puzzleId = data.id || 'daily';
				letters = shuffle(data.word.split(''));
				startTimer();
			}
		} catch (e) {
			console.error('Failed to load daily spelling bee:', e);
		} finally {
			isLoading = false;
		}
	});

	onDestroy(() => {
		stopTimer();
	});

	function startTimer() {
		stopTimer();
		timer = setInterval(() => {
			if (!isPaused && !isFinished) {
				time += 100;
			}
		}, 100);
	}

	function stopTimer() {
		if (timer) {
			clearInterval(timer);
			timer = null;
		}
	}

	function togglePause() {
		isPaused = !isPaused;
	}

	function shuffle(arr: string[]) {
		const result = [...arr];
		for (let i = result.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[result[i], result[j]] = [result[j], result[i]];
		}
		return result;
	}

	function handleShuffle() {
		answer = '';
		letters = shuffle(letters);
	}

	function handleRandomNewPuzzle() {
		const randomId = Math.floor(Math.random() * numPuzzles);
		goto(`/puzzles/spellingbee/${randomId}`);
	}

	function addLetter(l: string) {
		if (!answer.includes(l)) {
			answer += l;
		} else if (answer[answer.length - 1] === l) {
			answer = answer.slice(0, answer.length - 1);
		}
	}

	function triggerWiggle() {
		isWiggle = true;
		setTimeout(() => (isWiggle = false), 600);
	}

	function checkAnswer() {
		if (!answer) return;

		if (!search(answer)) {
			log = { text: `'${answer}' ไม่อยู่ในพจนานุกรม`, type: 'error' };
			triggerWiggle();
			answer = '';
			return;
		}

		if (answer.split('').some((l) => !letters.includes(l))) {
			log = { text: `'${answer}' มีตัวอักษรห้ามใช้`, type: 'error' };
			triggerWiggle();
			answer = '';
			return;
		}

		if (answer.length < 7) {
			log = { text: `'${answer}' ใช้ตัวอักษรไม่ครบ (ต้อง 7 ตัว)`, type: 'error' };
			triggerWiggle();
			answer = '';
			return;
		}

		if (answer === word) {
			log = { text: `ถูกต้องแล้ว! 🎉 ใช้เวลา ${timeString}`, type: 'success' };
			stopTimer();
			isFinished = true;
			submitScore();
		} else {
			log = { text: `'${answer}' ยังไม่ใช่คำตอบประจำวัน`, type: 'info' };
			triggerWiggle();
			answer = '';
		}
	}

	async function submitScore() {
		try {
			await fetch('/api/post/leaderboard', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					puzzle_type: 'spellingbee',
					puzzle_id: puzzleId,
					name: $username || 'Guest',
					score: time
				})
			});
		} catch (e) {
			console.error(e);
		}
	}
</script>

<div class="bg-slate-900/50 backdrop-blur-xl border border-slate-800/90 rounded-3xl p-6 md:p-8 shadow-2xl relative overflow-hidden">
	<!-- Background Ambient Glow -->
	<div class="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

	<!-- Header -->
	<div class="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4 border-b border-slate-800/70 pb-4">
		<div>
			<div class="flex items-center gap-2 mb-1">
				<span class="h-2 w-2 rounded-full bg-amber-400"></span>
				<span class="text-xs uppercase tracking-widest text-amber-400 font-bold">Daily Spelling Bee</span>
			</div>
			<h2 class="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
				Daily Spelling Bee <span class="text-xs font-normal text-slate-400 font-mono">({todayDateThaiString()})</span>
			</h2>
		</div>
		<button
			on:click={handleRandomNewPuzzle}
			class="inline-flex items-center gap-1.5 text-xs font-bold px-4 py-2 rounded-xl bg-amber-500/20 text-amber-300 border border-amber-500/40 hover:bg-amber-500/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0 shadow-md"
		>
			สุ่มข้อใหม่ 🎲
		</button>
	</div>

	<!-- Content Box -->
	{#if isLoading}
		<div class="flex items-center justify-center h-48 text-slate-400">
			<span class="animate-pulse">Loading Spelling Bee...</span>
		</div>
	{:else}
		<div class="flex flex-col items-center space-y-6">
			<!-- Letter Tiles Grid with smooth position reorder animation -->
			<div class="flex flex-wrap justify-center gap-2 sm:gap-3 max-w-xl">
				{#each letters as l (l)}
					<div animate:flip={{ duration: 300 }}>
						<button
							on:click={() => addLetter(l)}
							class="w-14 h-14 sm:w-16 sm:h-16 rounded-xl border-2 font-black text-2xl sm:text-3xl flex items-center justify-center transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-md
							{answer.includes(l)
								? 'bg-amber-400 !text-slate-950 border-amber-300 shadow-amber-500/30 font-black'
								: 'bg-slate-950 text-amber-300 border-slate-700 hover:border-amber-400 hover:text-amber-200'}"
							style={answer.includes(l) ? 'color: #0f172a;' : ''}
						>
							<span class={isUpper(l) || isLower(l) ? 'translate-x-1' : ''}>{l}</span>
						</button>
					</div>
				{/each}
			</div>

			<!-- Input Display & Controls -->
			<div class="w-full max-w-md flex flex-col sm:flex-row items-center gap-2">
				<!-- Merged Pause / Play + Timer Button -->
				<button
					on:click={togglePause}
					class="px-3.5 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-300 hover:text-amber-400 hover:border-amber-500/40 transition-colors flex items-center gap-2 font-mono font-bold text-sm shadow-inner"
					title={isPaused ? 'เริ่มเวลาต่อ' : 'หยุดเวลา'}
				>
					{#if isPaused}
						<PlayIcon size="18" class="text-amber-400" />
					{:else}
						<PauseIcon size="18" class="text-amber-400" />
						<span class="text-amber-400">{timeString}</span>
					{/if}
				</button>

				<!-- Shuffle Button -->
				<button
					on:click={handleShuffle}
					class="p-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-300 hover:text-amber-400 hover:border-amber-500/40 transition-colors"
					title="สลับอักษร & ล้างคำตอบ"
				>
					<RefreshCwIcon size="20" />
				</button>

				<!-- Textfield with empty placeholder -->
				<div class="relative flex-1 w-full" class:wiggle={isWiggle}>
					<input
						type="text"
						bind:value={answer}
						on:keydown={(e) => { if (e.key === 'Enter') checkAnswer(); }}
						placeholder=""
						class="w-full px-4 py-3 rounded-xl !bg-slate-950 !text-white font-bold border border-slate-700 focus:outline-none focus:border-amber-400 transition-colors"
						style="background-color: #020617; color: #ffffff;"
					/>
					{#if answer}
						<button
							on:click={() => (answer = '')}
							class="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-200"
						>
							<XCircleIcon size="18" />
						</button>
					{/if}
				</div>

				<button
					on:click={checkAnswer}
					class="w-full sm:w-auto px-7 py-3 rounded-xl font-black bg-amber-400 hover:bg-amber-300 !text-slate-950 transition-all duration-200 shadow-md shadow-amber-500/20"
					style="color: #0f172a;"
				>
					ส่ง
				</button>
			</div>

			<!-- Status Feedback -->
			{#if log.text}
				<div
					class="px-4 py-2 rounded-xl text-sm font-semibold flex items-center gap-2
					{log.type === 'success'
						? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
						: log.type === 'error'
						? 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
						: 'bg-amber-500/20 text-amber-300 border border-amber-500/30'}"
				>
					{#if log.type === 'success'}
						<CheckCircleIcon size="16" />
					{/if}
					<span>{log.text}</span>
				</div>
			{/if}

			{#if isFinished}
				<div class="pt-2">
					<button
						on:click={handleRandomNewPuzzle}
						class="px-6 py-2.5 rounded-xl font-bold bg-emerald-500 hover:bg-emerald-400 !text-slate-950 transition-all shadow-lg shadow-emerald-500/20"
						style="color: #0f172a;"
					>
						สุ่มข้อต่อไป 🎲 →
					</button>
				</div>
			{/if}
		</div>
	{/if}
</div>

<style>
	@keyframes wiggle {
		0%, 100% { transform: translateX(0); }
		25% { transform: translateX(-6px); }
		75% { transform: translateX(6px); }
	}
	.wiggle {
		animation: wiggle 0.4s ease-in-out;
	}
</style>
