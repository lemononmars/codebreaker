<script lang="ts">
	import { onMount } from 'svelte';
	import { search, isUpper, isLower } from '$lib/utils/thaiwords';
	import { todayDateThaiString } from '$lib/utils/date';
	import { PlayCircleIcon, RefreshCwIcon, CheckCircleIcon, XCircleIcon } from 'svelte-feather-icons';
	import { username } from '$lib/store';

	let word = '';
	let puzzleId: number | string = '';
	let letters: string[] = [];
	let answer = '';
	let isLoading = true;
	let isPlaying = false;
	let isFinished = false;
	let isWiggle = false;

	let time = 0;
	let timer: any;

	interface LogState {
		text: string;
		type: 'success' | 'error' | 'info' | '';
	}
	let log: LogState = { text: '', type: '' };

	$: timeString = (time < 60000 ? '' : Math.floor(time / 60000) + 'm ') + (Math.floor(time / 1000) % 60) + 's';

	onMount(async () => {
		try {
			const res = await fetch('/api/puzzle/spellingbee/daily');
			const data = await res.json();
			if (data && data.word) {
				word = data.word;
				puzzleId = data.id || 'daily';
				letters = shuffle(data.word.split(''));
			}
		} catch (e) {
			console.error('Failed to load daily spelling bee:', e);
		} finally {
			isLoading = false;
		}
	});

	function shuffle(arr: string[]) {
		const result = [...arr];
		for (let i = result.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[result[i], result[j]] = [result[j], result[i]];
		}
		return result;
	}

	function startPlay() {
		isPlaying = true;
		time = 0;
		timer = setInterval(() => (time += 100), 100);
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
			clearInterval(timer);
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
				<span class="text-xs uppercase tracking-widest text-amber-400 font-bold">Daily Mini Game</span>
			</div>
			<h2 class="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
				สะกดศัพท์ ประจำวัน <span class="text-xs font-normal text-slate-400 font-mono">({todayDateThaiString()})</span>
			</h2>
		</div>
		<a
			href="/puzzles/spellingbee"
			class="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/30 hover:bg-amber-500/20 transition-colors"
		>
			เล่นโหมดเต็ม →
		</a>
	</div>

	<!-- Content Box -->
	{#if isLoading}
		<div class="flex items-center justify-center h-48 text-slate-400">
			<span class="animate-pulse">กำลังโหลด ปริศนาสะกดศัพท์...</span>
		</div>
	{:else if !isPlaying}
		<div class="flex flex-col items-center justify-center py-8 text-center space-y-4">
			<p class="text-slate-300 text-sm max-w-md">
				ทายคำศัพท์ 7 ตัวอักษรของวันนี้! กดปุ่มเริ่มเพื่อเริ่มนับเวลาและเรียงคำตอบ
			</p>
			<button
				on:click={startPlay}
				class="inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-lg shadow-amber-500/20 text-lg transition-all duration-300 transform hover:scale-105 active:scale-95"
			>
				<span>เริ่มเล่นสะกดศัพท์</span>
				<PlayCircleIcon size={24} />
			</button>
		</div>
	{:else}
		<div class="flex flex-col items-center space-y-6">
			<!-- Timer display -->
			<div class="flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-950 border border-slate-800 text-amber-400 text-sm font-mono font-bold">
				<span class="w-2 h-2 rounded-full bg-amber-400 animate-ping"></span>
				TIME: {timeString}
			</div>

			<!-- Letter Tiles Grid -->
			<div class="flex flex-wrap justify-center gap-2 sm:gap-3 max-w-xl">
				{#each letters as l (l)}
					<button
						on:click={() => addLetter(l)}
						class="w-14 h-14 sm:w-16 sm:h-16 rounded-xl border-2 font-bold text-2xl sm:text-3xl flex items-center justify-center transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-md
						{answer.includes(l)
							? 'bg-amber-500 text-slate-950 border-amber-300 shadow-amber-500/30'
							: 'bg-slate-950 text-slate-100 border-slate-700 hover:border-amber-400 hover:text-amber-400'}"
					>
						<span class={isUpper(l) || isLower(l) ? 'translate-x-1' : ''}>{l}</span>
					</button>
				{/each}
			</div>

			<!-- Input Display & Controls -->
			<div class="w-full max-w-md flex flex-col sm:flex-row items-center gap-2">
				<button
					on:click={() => (letters = shuffle(letters))}
					class="p-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-300 hover:text-amber-400 hover:border-amber-500/40 transition-colors"
					title="สลับอักษร"
				>
					<RefreshCwIcon size={20} />
				</button>

				<div class="relative flex-1 w-full" class:wiggle={isWiggle}>
					<input
						type="text"
						bind:value={answer}
						placeholder="พิมพ์หรือกดเลือกคำ..."
						class="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-white text-xl font-semibold focus:outline-none focus:border-amber-400 transition-colors"
					/>
					{#if answer}
						<button
							on:click={() => (answer = '')}
							class="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-200"
						>
							<XCircleIcon size={18} />
						</button>
					{/if}
				</div>

				<button
					on:click={checkAnswer}
					class="w-full sm:w-auto px-6 py-3 rounded-xl font-bold bg-amber-400 hover:bg-amber-300 text-slate-950 transition-all duration-200"
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
						<CheckCircleIcon size={16} />
					{/if}
					<span>{log.text}</span>
				</div>
			{/if}

			{#if isFinished}
				<div class="pt-2">
					<a
						href="/puzzles/spellingbee"
						class="px-6 py-2.5 rounded-xl font-bold bg-emerald-500 hover:bg-emerald-400 text-slate-950 transition-all"
					>
						ดูอันดับ Leaderboard →
					</a>
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
