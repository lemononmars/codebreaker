<script lang="ts">
	import { onMount } from 'svelte';
	import { fade, slide } from 'svelte/transition';
	import {
		ArrowLeftIcon,
		AwardIcon,
		BarChart2Icon,
		BookOpenIcon,
		CheckCircleIcon,
		ExternalLinkIcon,
		EyeIcon,
		EyeOffIcon,
		GridIcon,
		HelpCircleIcon,
		InfoIcon,
		RotateCcwIcon,
		TvIcon
	} from 'svelte-feather-icons';
	import AnswerChecker from '$lib/components/AnswerChecker.svelte';
	import {
		answerLogsData,
		letterTable,
		round1Leaderboard,
		round1Puzzles,
		round2Leaderboard,
		round2Puzzles,
		statsComments,
		submitTBSAnswer
	} from '$lib/data/puzzles/tbs2021';

	// Main Tab State: 'round1' | 'round2' | 'wrapup' | 'leaderboard'
	let activeTab: 'round1' | 'round2' | 'wrapup' | 'leaderboard' = 'round1';

	// Round 1 State
	let r1ActiveIndex = 0;
	let r1Answers = Array(6).fill('');
	let r1Solved = Array(6).fill(false);
	let r1InputVal = '';
	let r1Feedback = { message: '', isCorrect: false, type: 'neutral' };
	let showR1SuccessModal = false;
	let r1ExpandedSections: Record<number, boolean[]> = {};

	// 5x5 Clue Table State
	let showLetterTable = true;
	let letterStates = [
		[0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0]
	];

	// Round 2 State
	let r2ActiveIndex = 0;
	let r2Answers = Array(5).fill('');
	let r2Solved = Array(5).fill(false);
	let r2InputVal = '';
	let r2Feedback = { message: '', isCorrect: false, type: 'neutral' };
	let showR2SuccessModal = false;
	let r2ShowHint = Array(5).fill(false);

	// Leaderboard State
	let lbSelectedDay = 'all';
	let lbSelectedRound = 1;

	// Time Tracking
	let startTime = 0;
	let totalTimeSpent = '';

	// Interactive Time Chart State (Wrapup)
	let showRound1Time = true;
	let showRound2Time = true;
	let hoveredTimeIndex: number | null = null;

	$: r1TimeList = round1Leaderboard
		.filter((e) => parseInt(e.timetotal, 10) < 36000000 && parseInt(e.timetotal, 10) > 0)
		.sort((a, b) => parseInt(a.timetotal, 10) - parseInt(b.timetotal, 10))
		.map((e) => ({
			name: decodeURIComponent(e.name),
			hours: parseInt(e.timetotal, 10) / 3600000,
			timetotal: e.timetotal
		}));

	$: r2TimeList = round2Leaderboard
		.filter((e) => parseInt(e.timetotal, 10) < 36000000 && parseInt(e.timetotal, 10) > 0)
		.sort((a, b) => parseInt(a.timetotal, 10) - parseInt(b.timetotal, 10))
		.map((e) => ({
			name: decodeURIComponent(e.name),
			hours: parseInt(e.timetotal, 10) / 3600000,
			timetotal: e.timetotal
		}));

	function getChartX(index: number, total: number) {
		const left = 60;
		const right = 760;
		if (total <= 1) return left;
		return left + (index / (total - 1)) * (right - left);
	}

	function getChartY(hours: number) {
		const bottom = 250;
		const top = 30;
		const maxHours = 10;
		return bottom - (Math.min(hours, maxHours) / maxHours) * (bottom - top);
	}

	$: r1PolylinePoints = r1TimeList
		.map((item, idx) => `${getChartX(idx, r1TimeList.length)},${getChartY(item.hours)}`)
		.join(' ');

	$: r2PolylinePoints = r2TimeList
		.map((item, idx) => `${getChartX(idx, r2TimeList.length)},${getChartY(item.hours)}`)
		.join(' ');

	const STORAGE_KEY = 'saveTBS2021Puzzles_v2';

	onMount(() => {
		loadProgress();
		// Accordions must be minimized by default
		for (let i = 0; i < round1Puzzles.length; i++) {
			r1ExpandedSections[i] = [false, false, false];
		}
	});

	function loadProgress() {
		try {
			const saved = localStorage.getItem(STORAGE_KEY);
			if (saved) {
				const data = JSON.parse(saved);
				if (Array.isArray(data.r1Answers)) r1Answers = data.r1Answers;
				if (Array.isArray(data.r1Solved)) r1Solved = data.r1Solved;
				if (Array.isArray(data.r2Answers)) r2Answers = data.r2Answers;
				if (Array.isArray(data.r2Solved)) r2Solved = data.r2Solved;
				if (Array.isArray(data.letterStates)) letterStates = data.letterStates;
				if (data.startTime) startTime = data.startTime;
			} else {
				startTime = Date.now();
				saveProgress();
			}
		} catch (e) {
			startTime = Date.now();
		}
	}

	function saveProgress() {
		try {
			const data = {
				r1Answers,
				r1Solved,
				r2Answers,
				r2Solved,
				letterStates,
				startTime
			};
			localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
		} catch (e) {
			// ignore storage errors
		}
	}

	// 5x5 Grid Click
	function toggleCell(r: number, c: number) {
		letterStates[r][c] = (letterStates[r][c] + 1) % 3;
		letterStates = [...letterStates];
		saveProgress();
	}

	function resetLetterTable() {
		letterStates = [
			[0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0]
		];
		saveProgress();
	}

	// Submit Round 1
	function handleR1Submit() {
		if (r1ActiveIndex === 0) return; // Info screen
		const puzzleId = r1ActiveIndex - 1;
		const res = submitTBSAnswer(0, puzzleId, r1InputVal);

		if (res.isCorrect) {
			r1Answers[puzzleId] = r1InputVal.trim().toUpperCase();
			r1Solved[puzzleId] = true;
			r1Feedback = { message: res.message, isCorrect: true, type: 'correct' };
			saveProgress();

			if (res.isFinished) {
				const duration = Date.now() - startTime;
				totalTimeSpent = `${Math.floor(duration / 60000)} นาที ${Math.floor((duration % 60000) / 1000)} วินาที`;
				showR1SuccessModal = true;
			}
		} else {
			const isWarn = res.message.startsWith('⚠️');
			r1Feedback = { message: res.message, isCorrect: false, type: isWarn ? 'warn' : 'incorrect' };
		}
	}

	// Submit Round 2
	function handleR2Submit() {
		const puzzleId = r2ActiveIndex;
		const res = submitTBSAnswer(1, puzzleId, r2InputVal);

		if (res.isCorrect) {
			r2Answers[puzzleId] = r2InputVal.trim().toUpperCase();
			r2Solved[puzzleId] = true;
			r2Feedback = { message: res.message, isCorrect: true, type: 'correct' };
			saveProgress();

			if (res.isFinished) {
				const duration = Date.now() - startTime;
				totalTimeSpent = `${Math.floor(duration / 60000)} นาที ${Math.floor((duration % 60000) / 1000)} วินาที`;
				showR2SuccessModal = true;
			}
		} else {
			const isWarn = res.message.startsWith('⚠️');
			r2Feedback = { message: res.message, isCorrect: false, type: isWarn ? 'warn' : 'incorrect' };
		}
	}

	$: r1CompletedCount = r1Solved.filter(Boolean).length;
	$: r2CompletedCount = r2Solved.filter(Boolean).length;
	$: isRound1Done = r1Solved[5] === true;

	// Switch Round 1 Puzzle
	function selectR1Puzzle(index: number) {
		r1ActiveIndex = index;
		r1Feedback = { message: '', isCorrect: false, type: 'neutral' };
		if (index > 0) {
			r1InputVal = r1Answers[index - 1] || '';
		}
	}

	// Switch Round 2 Puzzle
	function selectR2Puzzle(index: number) {
		r2ActiveIndex = index;
		r2Feedback = { message: '', isCorrect: false, type: 'neutral' };
		r2InputVal = r2Answers[index] || '';
	}

	// Leaderboard Filtering (without search bar)
	$: currentLeaderboardData = (lbSelectedRound === 1 ? round1Leaderboard : round2Leaderboard).filter(
		(item) => {
			if (lbSelectedDay === 'all') return true;
			const dayDigit = item.time.split('/')[0];
			if (lbSelectedDay === '26') return dayDigit === '26';
			if (lbSelectedDay === '27') return dayDigit === '27';
			if (lbSelectedDay === '28') return dayDigit === '28';
			if (lbSelectedDay === 'other') return !['26', '27', '28'].includes(dayDigit);
			return true;
		}
	);

	function formatDurationMs(msStr: string) {
		const ms = parseInt(msStr, 10);
		if (!ms || isNaN(ms)) return '-';
		const totalSec = Math.floor(ms / 1000);
		const hrs = Math.floor(totalSec / 3600);
		const mins = Math.floor((totalSec % 3600) / 60);
		const secs = totalSec % 60;
		if (hrs > 0) {
			return `${hrs} ชม. ${mins.toString().padStart(2, '0')} นาที ${secs.toString().padStart(2, '0')} วินาที`;
		}
		return `${mins} นาที ${secs.toString().padStart(2, '0')} วินาที`;
	}
</script>

<svelte:head>
	<title>Code Breaker | TBS 2021 Puzzles</title>
	<meta
		name="description"
		content="ปริศนาจากงาน Thailand Board Game Show 2021 (TBS 2021) ด่านที่ 1 และด่านที่ 2 พร้อมสถิติและตารางอันดับ"
	/>
</svelte:head>

<div class="container mx-auto px-4 py-8 sm:py-12 flex flex-col gap-8 max-w-6xl select-none text-left">
	<!-- Navigation Breadcrumb -->
	<div class="flex items-center justify-between">
		<a href="/puzzles" class="btn btn-ghost btn-xs gap-1.5 font-bold text-slate-400 hover:text-white">
			<ArrowLeftIcon size="14" />
			<span>กลับไปหน้า Puzzles</span>
		</a>
		<div class="flex items-center gap-2">
			<span class="badge bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 text-xs px-3 py-1 font-bold rounded-lg">
				TBS 2021
			</span>
		</div>
	</div>

	<!-- Header Banner -->
	<header class="text-center max-w-3xl mx-auto space-y-3">
		<div class="inline-flex p-3 rounded-3xl bg-slate-900 border border-slate-800 shadow-xl mb-1">
			<img src="/puzzles/tbs2021/favicon.png" alt="TBS 2021 Logo" class="w-12 h-12 object-contain" />
		</div>
		<h1 class="text-3xl sm:text-5xl font-black tracking-tight bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
			Thailand Board Game Show 2021
		</h1>
		<p class="text-slate-400 text-sm sm:text-base leading-relaxed">
			กิจกรรมถอดรหัสปริศนาออนไลน์ประจำงาน TBS 2021 โดย Code Breaker
		</p>
	</header>

	<!-- Main Navigation Tabs -->
	<div class="flex justify-center border-b border-slate-800 pb-2">
		<div class="tabs tabs-boxed bg-slate-900/90 p-1.5 rounded-2xl border border-slate-800 flex flex-wrap justify-center gap-1">
			<button
				class="tab rounded-xl text-xs sm:text-sm font-bold transition-all gap-2 px-4 py-2 {activeTab === 'round1' ? 'tab-active bg-emerald-500 text-slate-950 shadow-lg' : 'text-slate-400 hover:text-white'}"
				on:click={() => (activeTab = 'round1')}
			>
				<GridIcon size="16" />
				<span>ด่านที่ 1 (Round 1)</span>
				{#if r1CompletedCount > 0}
					<span class="badge badge-xs {activeTab === 'round1' ? 'bg-slate-950 text-emerald-400' : 'bg-emerald-500/20 text-emerald-400'}">{r1CompletedCount}/6</span>
				{/if}
			</button>

			<button
				class="tab rounded-xl text-xs sm:text-sm font-bold transition-all gap-2 px-4 py-2 {activeTab === 'round2' ? 'tab-active bg-cyan-500 text-slate-950 shadow-lg' : 'text-slate-400 hover:text-white'}"
				on:click={() => (activeTab = 'round2')}
			>
				<TvIcon size="16" />
				<span>ด่านที่ 2 (Round 2)</span>
				{#if r2CompletedCount > 0}
					<span class="badge badge-xs {activeTab === 'round2' ? 'bg-slate-950 text-cyan-400' : 'bg-cyan-500/20 text-cyan-400'}">{r2CompletedCount}/5</span>
				{/if}
			</button>

			<button
				class="tab rounded-xl text-xs sm:text-sm font-bold transition-all gap-2 px-4 py-2 {activeTab === 'wrapup' ? 'tab-active bg-teal-500 text-slate-950 shadow-lg' : 'text-slate-400 hover:text-white'}"
				on:click={() => (activeTab = 'wrapup')}
			>
				<BarChart2Icon size="16" />
				<span>เบื้องหลังและสถิติ (Wrapup)</span>
			</button>

			<button
				class="tab rounded-xl text-xs sm:text-sm font-bold transition-all gap-2 px-4 py-2 {activeTab === 'leaderboard' ? 'tab-active bg-amber-500 text-slate-950 shadow-lg' : 'text-slate-400 hover:text-white'}"
				on:click={() => (activeTab = 'leaderboard')}
			>
				<AwardIcon size="16" />
				<span>ตารางอันดับ (Leaderboard)</span>
			</button>
		</div>
	</div>

	<!-- TAB 1: ROUND 1 -->
	{#if activeTab === 'round1'}
		<div class="flex flex-col gap-8 text-left" in:fade={{ duration: 200 }}>
			<!-- 5x5 Clue Matrix Card -->
			<div class="bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-3xl p-6 shadow-2xl flex flex-col items-center gap-4 text-left">
				<div class="flex flex-wrap items-center justify-between w-full border-b border-slate-800 pb-3 gap-2">
					<div class="flex items-center gap-2">
						<GridIcon size="18" class="text-emerald-400" />
						<h2 class="font-black text-lg text-slate-100">ตารางตัวอักษร 5x5 (Clue Grid)</h2>
					</div>
					<div class="flex items-center gap-2">
						<button
							class="btn btn-ghost btn-xs text-slate-400 hover:text-white gap-1"
							on:click={() => (showLetterTable = !showLetterTable)}
						>
							{#if showLetterTable}
								<EyeOffIcon size="14" />
								<span>ซ่อนตาราง</span>
							{:else}
								<EyeIcon size="14" />
								<span>แสดงตาราง</span>
							{/if}
						</button>
						<button class="btn btn-ghost btn-xs text-slate-400 hover:text-rose-400 gap-1" on:click={resetLetterTable}>
							<RotateCcwIcon size="14" />
							<span>รีเซ็ต</span>
						</button>
					</div>
				</div>

				{#if showLetterTable}
					<div class="flex flex-col items-center gap-3 py-2 w-full" transition:slide>
						<div class="grid grid-cols-5 gap-2.5 sm:gap-3 p-3 bg-slate-950/70 border border-slate-800 rounded-2xl shadow-inner">
							{#each letterTable as row, r}
								{#each row as char, c}
									<button
										class="w-11 h-11 sm:w-14 sm:h-14 font-black text-lg sm:text-2xl rounded-xl transition-all duration-200 shadow-md flex items-center justify-center
											{letterStates[r][c] === 1 ? 'bg-emerald-500 text-slate-950 scale-105 ring-2 ring-emerald-400/50' : ''}
											{letterStates[r][c] === 2 ? 'bg-cyan-500 text-slate-950 scale-105 ring-2 ring-cyan-400/50' : ''}
											{letterStates[r][c] === 0 ? 'bg-slate-900 border border-slate-700/70 text-slate-200 hover:bg-slate-800 hover:border-slate-500' : ''}"
										on:click={() => toggleCell(r, c)}
										title="คลิกเพื่อเปลี่ยนสถานะไฮไลท์"
									>
										{char}
									</button>
								{/each}
							{/each}
						</div>
						<p class="text-xs text-slate-400 flex items-center gap-1.5 mt-1 text-left">
							<InfoIcon size="14" class="text-emerald-400 shrink-0" />
							<span>คลิกที่ช่องเพื่อเปลี่ยนสีช่วยทด (สีเขียว / สีฟ้า / สีปกติ) — ปุ่มในตารางไม่มีผลต่อการตรวจคำตอบ</span>
						</p>
					</div>
				{/if}
			</div>

			<!-- Main Round 1 Split View -->
			<div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start text-left">
				<!-- Left: Puzzle Select List -->
				<div class="lg:col-span-4 bg-slate-900/60 border border-slate-800 rounded-3xl p-4 shadow-xl flex flex-col gap-2 text-left">
					<h3 class="font-bold text-sm text-slate-400 px-3 py-1 uppercase tracking-wider text-left">รายการปริศนา ด่านที่ 1</h3>
					{#each round1Puzzles as p, idx}
						<button
							class="w-full flex items-center justify-between p-3.5 rounded-2xl transition-all text-left font-bold text-sm
								{r1ActiveIndex === idx ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/50 shadow-md' : 'text-slate-300 hover:bg-slate-800/60'}"
							on:click={() => selectR1Puzzle(idx)}
						>
							<div class="flex items-center gap-3">
								{#if idx === 0}
									<div class="w-8 h-8 rounded-xl bg-slate-800 text-slate-300 flex items-center justify-center text-xs">
										<BookOpenIcon size="16" />
									</div>
								{:else}
									<div class="w-8 h-8 rounded-xl bg-slate-800 flex items-center justify-center overflow-hidden border border-slate-700">
										<img src={p.icon} alt="icon" class="w-6 h-6 object-contain" />
									</div>
								{/if}
								<span>{p.title}</span>
							</div>

							{#if idx > 0 && r1Solved[idx - 1]}
								<span class="badge bg-emerald-500/20 text-emerald-400 border-none text-xs gap-1 font-bold">
									<CheckCircleIcon size="12" /> แก้แล้ว
								</span>
							{/if}
						</button>
					{/each}
				</div>

				<!-- Right: Active Puzzle Detail -->
				<div class="lg:col-span-8 bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl flex flex-col gap-6 text-left">
					<div class="flex flex-wrap items-center justify-between border-b border-slate-800 pb-4 gap-3">
						<div class="flex items-center gap-3">
							{#if r1ActiveIndex > 0}
								<div class="w-12 h-12 rounded-2xl bg-slate-950 p-2 border border-slate-800 flex items-center justify-center">
									<img src={round1Puzzles[r1ActiveIndex].icon} alt="icon" class="w-8 h-8 object-contain" />
								</div>
							{/if}
							<div>
								<h2 class="text-xl sm:text-2xl font-black text-white">{round1Puzzles[r1ActiveIndex].title}</h2>
								{#if r1ActiveIndex > 0 && r1Solved[r1ActiveIndex - 1]}
									<span class="text-xs text-emerald-400 font-bold flex items-center gap-1 mt-0.5">
										<CheckCircleIcon size="12" /> คุณตอบข้อนี้ถูกต้องแล้ว: <span class="font-mono">{r1Answers[r1ActiveIndex - 1]}</span>
									</span>
								{/if}
							</div>
						</div>
					</div>

					<!-- Answer Checker Input (for puzzles 1-6) -->
					{#if r1ActiveIndex > 0}
						<div class="bg-slate-950/80 border border-slate-800 p-4 rounded-2xl flex flex-col gap-3 text-left">
							<div class="flex items-center justify-between">
								<span class="text-xs font-bold text-slate-400">ส่งคำตอบสำหรับ {round1Puzzles[r1ActiveIndex].title}:</span>
								<span class="text-xs text-slate-500">คำตอบเป็นภาษาอังกฤษ 5 ตัวอักษร</span>
							</div>

							<AnswerChecker
								bind:value={r1InputVal}
								placeholder="พิมพ์คำตอบภาษาอังกฤษ..."
								buttonText={r1Solved[r1ActiveIndex - 1] ? 'ถูกต้องแล้ว' : 'ส่งคำตอบ'}
								btnClass="bg-emerald-500 hover:bg-emerald-400 text-slate-950"
								disabled={r1Solved[r1ActiveIndex - 1]}
								on:submit={handleR1Submit}
							/>

							{#if r1Feedback.message}
								<div
									class="p-3 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2
										{r1Feedback.type === 'correct' ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40' : ''}
										{r1Feedback.type === 'warn' ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40' : ''}
										{r1Feedback.type === 'incorrect' ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40' : ''}"
									transition:slide
								>
									<span>{r1Feedback.message}</span>
								</div>
							{/if}
						</div>
					{/if}

					<!-- Clue Accordion Sections (Collapsed by default) -->
					<div class="flex flex-col gap-3 text-left">
						{#each round1Puzzles[r1ActiveIndex].sections as sec, sIdx}
							<div class="border border-slate-800 bg-slate-950/50 rounded-2xl overflow-hidden text-left">
								<button
									class="w-full p-4 flex items-center justify-between font-bold text-sm sm:text-base text-slate-200 hover:bg-slate-800/40 transition-colors text-left"
									on:click={() => {
										r1ExpandedSections[r1ActiveIndex][sIdx] = !r1ExpandedSections[r1ActiveIndex][sIdx];
										r1ExpandedSections = { ...r1ExpandedSections };
									}}
								>
									<span class="flex items-center gap-2">
										<span class="w-6 h-6 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs font-black">
											{sIdx + 1}
										</span>
										<span>{sec.title}</span>
									</span>
									<span class="text-xs text-slate-500">
										{r1ExpandedSections[r1ActiveIndex]?.[sIdx] ? 'ย่อ' : 'ขยาย'}
									</span>
								</button>

								{#if r1ExpandedSections[r1ActiveIndex]?.[sIdx]}
									<div class="p-4 pt-0 border-t border-slate-800/50 text-slate-300 text-sm leading-relaxed text-left" transition:slide>
										{@html sec.content}
									</div>
								{/if}
							</div>
						{/each}
					</div>
				</div>
			</div>
		</div>
	{/if}

	<!-- TAB 2: ROUND 2 -->
	{#if activeTab === 'round2'}
		<div class="flex flex-col gap-8 text-left" in:fade={{ duration: 200 }}>
			{#if !isRound1Done}
				<!-- Locked Banner (No Skip Button) -->
				<div class="bg-slate-900 border border-slate-800 rounded-3xl p-8 text-center flex flex-col items-center gap-4 max-w-xl mx-auto shadow-2xl">
					<div class="w-16 h-16 rounded-3xl bg-amber-500/10 text-amber-400 flex items-center justify-center border border-amber-500/20 shadow-lg">
						<TvIcon size="32" />
					</div>
					<h2 class="text-2xl font-black text-white">ตอบปริศนาข้อสุดท้ายของด่าน 1 ก่อน ถึงจะเริ่มเล่นด่าน 2 ได้</h2>
					<p class="text-slate-400 text-sm leading-relaxed text-left">
						คุณต้องแก้ปริศนาด่านที่ 1 ให้ครบทั้ง 6 ข้อก่อน จึงจะสามารถปลดล็อคเข้าเล่นด่านที่ 2 ได้
					</p>
					<div class="flex flex-wrap gap-3 mt-2">
						<button class="btn btn-emerald bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-xl border-none" on:click={() => (activeTab = 'round1')}>
							กลับไปเล่นด่านที่ 1
						</button>
					</div>
				</div>
			{:else}
				<!-- Round 2 Content -->
				<div class="flex flex-col gap-6 text-left">
					<!-- Overview Banner image -->
					<div class="bg-slate-900/60 border border-slate-800 rounded-3xl p-4 sm:p-6 shadow-xl flex flex-col items-center">
						<img src="/puzzles/tbs2021/round2overview.png" alt="Round 2 Overview" class="max-w-full rounded-2xl border border-slate-800 shadow-md max-h-72 object-contain" />
					</div>

					<div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start text-left">
						<!-- Left: Puzzle Navigation -->
						<div class="lg:col-span-4 bg-slate-900/60 border border-slate-800 rounded-3xl p-4 shadow-xl flex flex-col gap-2 text-left">
							<h3 class="font-bold text-sm text-slate-400 px-3 py-1 uppercase tracking-wider text-left">รายการปริศนา ด่านที่ 2</h3>
							{#each round2Puzzles as p, idx}
								<button
									class="w-full flex items-center justify-between p-3.5 rounded-2xl transition-all text-left font-bold text-sm
										{r2ActiveIndex === idx ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/50 shadow-md' : 'text-slate-300 hover:bg-slate-800/60'}"
									on:click={() => selectR2Puzzle(idx)}
								>
									<div class="flex items-center gap-3">
										<div class="w-8 h-8 rounded-xl bg-slate-800 text-cyan-400 flex items-center justify-center text-xs font-black">
											{idx === 4 ? '★' : idx + 1}
										</div>
										<span>{p.title}</span>
									</div>

									{#if r2Solved[idx]}
										<span class="badge bg-cyan-500/20 text-cyan-400 border-none text-xs gap-1 font-bold">
											<CheckCircleIcon size="12" /> แก้แล้ว
										</span>
									{/if}
								</button>
							{/each}
						</div>

						<!-- Right: Active Round 2 Puzzle Card -->
						<div class="lg:col-span-8 bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl flex flex-col gap-6 text-left">
							<div class="flex flex-wrap items-center justify-between border-b border-slate-800 pb-4 gap-3">
								<h2 class="text-xl sm:text-2xl font-black text-white">{round2Puzzles[r2ActiveIndex].title}</h2>
								{#if r2Solved[r2ActiveIndex]}
									<span class="text-xs text-cyan-400 font-bold flex items-center gap-1">
										<CheckCircleIcon size="12" /> ถูกต้อง: <span class="font-mono">{r2Answers[r2ActiveIndex]}</span>
									</span>
								{/if}
							</div>

							<!-- Image View -->
							{#if r2ActiveIndex === 4 && r2CompletedCount < 4}
								<div class="p-8 text-center bg-slate-950/80 border border-slate-800 rounded-2xl">
									<p class="text-slate-300 font-bold text-left">🔒 ตอบปริศนาทั้ง 4 ข้อแรกให้ครบก่อน แล้วปริศนาข้อสุดท้ายจะปรากฏขึ้นมา</p>
								</div>
							{:else}
								<div class="bg-slate-950 p-4 rounded-2xl border border-slate-800 flex flex-col items-center justify-center">
									<img
										src={round2Puzzles[r2ActiveIndex].image}
										alt={round2Puzzles[r2ActiveIndex].title}
										class="max-w-full rounded-xl max-h-[60vh] object-contain shadow-lg"
									/>
									{#if round2Puzzles[r2ActiveIndex].link}
										<a
											href={round2Puzzles[r2ActiveIndex].link}
											target="_blank"
											rel="noopener noreferrer"
											class="btn btn-cyan btn-sm bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-xl mt-4 gap-2 border-none shadow-lg"
										>
											<ExternalLinkIcon size="16" />
											<span>คลิกที่นี่เพื่อเล่น Numberlink บน puzz.link</span>
										</a>
									{/if}
								</div>

								<!-- Answer Input -->
								<div class="bg-slate-950/80 border border-slate-800 p-4 rounded-2xl flex flex-col gap-3 text-left">
									<div class="flex items-center justify-between">
										<span class="text-xs font-bold text-slate-400">ส่งคำตอบสำหรับ {round2Puzzles[r2ActiveIndex].title}:</span>
										<button
											class="text-xs font-bold text-amber-400 hover:underline flex items-center gap-1"
											on:click={() => (r2ShowHint[r2ActiveIndex] = !r2ShowHint[r2ActiveIndex])}
										>
											<HelpCircleIcon size="14" />
											<span>{r2ShowHint[r2ActiveIndex] ? 'ซ่อนคำใบ้' : 'ขอคำใบ้'}</span>
										</button>
									</div>

									{#if r2ShowHint[r2ActiveIndex]}
										<div class="bg-amber-500/10 border border-amber-500/30 p-3 rounded-xl text-amber-300 text-xs leading-relaxed text-left" transition:slide>
											{@html round2Puzzles[r2ActiveIndex].hint}
										</div>
									{/if}

									<AnswerChecker
										bind:value={r2InputVal}
										placeholder="พิมพ์คำตอบภาษาอังกฤษ..."
										buttonText={r2Solved[r2ActiveIndex] ? 'ถูกต้องแล้ว' : 'ส่งคำตอบ'}
										btnClass="bg-cyan-500 hover:bg-cyan-400 text-slate-950"
										disabled={r2Solved[r2ActiveIndex]}
										on:submit={handleR2Submit}
									/>

									{#if r2Feedback.message}
										<div
											class="p-3 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2
												{r2Feedback.type === 'correct' ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40' : ''}
												{r2Feedback.type === 'warn' ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40' : ''}
												{r2Feedback.type === 'incorrect' ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40' : ''}"
											transition:slide
										>
											<span>{r2Feedback.message}</span>
										</div>
									{/if}
								</div>
							{/if}
						</div>
					</div>
				</div>
			{/if}
		</div>
	{/if}

	<!-- TAB 3: WRAPUP & BEHIND THE SCENES -->
	{#if activeTab === 'wrapup'}
		<div class="flex flex-col lg:flex-row gap-8 items-start text-left w-full" in:fade={{ duration: 200 }}>
			<!-- Table of Contents (Sticky sidebar, no dots, left justified) -->
			<div class="w-full lg:w-64 shrink-0 bg-slate-900/90 border border-slate-800 rounded-3xl p-5 shadow-xl lg:sticky lg:top-20 text-left">
				<h3 class="font-black text-sm text-white mb-3 flex items-center gap-2 border-b border-slate-800 pb-2 text-left">
					<BookOpenIcon size="16" class="text-teal-400" />
					<span>สารบัญ</span>
				</h3>
				<ul class="text-xs font-medium space-y-2 text-slate-400 list-none pl-0 text-left">
					<li><a href="#beginning" class="hover:text-teal-300 block py-0.5 transition-colors text-left">ที่มา</a></li>
					<li><a href="#platform" class="hover:text-teal-300 block py-0.5 transition-colors text-left">แพลตฟอร์ม</a></li>
					<li><a href="#webapp" class="hover:text-teal-300 block py-0.5 transition-colors text-left">ทำไมกลายเป็นเว็บไปได้?</a></li>
					<li><a href="#time" class="hover:text-teal-300 block py-0.5 transition-colors text-left">เวลาที่ใช้</a></li>
					<li><a href="#guesses" class="hover:text-teal-300 block py-0.5 transition-colors text-left">จำนวนครั้งที่ตอบผิด</a></li>
					<li><a href="#rates" class="hover:text-teal-300 block py-0.5 transition-colors text-left">คะแนนโหวต</a></li>
					<li><a href="#comments" class="hover:text-teal-300 block py-0.5 transition-colors text-left">ความเห็น</a></li>
					<li><a href="#reflection" class="hover:text-teal-300 block py-0.5 transition-colors text-left">ประเมินตัวเอง</a></li>
					<li><a href="#thanks" class="hover:text-teal-300 block py-0.5 transition-colors text-left">ขอบคุณ</a></li>
					<li><a href="#backstage" class="hover:text-teal-300 block py-0.5 transition-colors text-left">เก็บตก</a></li>
				</ul>
			</div>

			<!-- Main Article Content (Verbatim writeups, left justified, min-w-0 to prevent clipping) -->
			<div class="flex-1 min-w-0 w-full bg-slate-900/60 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl flex flex-col gap-10 text-slate-300 leading-relaxed text-sm sm:text-base text-left break-words">
				<!-- Section 1: ที่มา -->
				<section id="beginning" class="scroll-mt-24 space-y-3 text-left">
					<h2 class="text-2xl sm:text-3xl font-black text-white border-b border-slate-800 pb-2 text-left">ที่มา</h2>
					<p class="text-left">ก่อนหน้านี้ในงาน Thailand Board Game Show 2020 ได้มีการจัดกิจกรรมแก้ปริศนาในงาน โดยงานนั้นซูมจัดการ 100% เนื่องจากผมยุ่งตัวเป็นเกลียว</p>
					<p class="text-left">ในปีนี้ ผู้จัดงาน Thailand Board Game Show 2021 เลยไว้ใจให้จัดกิจกรรมแก้ปริศนาอีกครั้งหนึ่ง นั่นก็คือเป็นครั้งที่สองของทั้ง TBS และทั้ง Code Breaker</p>
				</section>

				<!-- Section 2: แพลตฟอร์ม -->
				<section id="platform" class="scroll-mt-24 space-y-3 text-left">
					<h2 class="text-2xl sm:text-3xl font-black text-white border-b border-slate-800 pb-2 text-left">แพลตฟอร์ม</h2>
					<p class="text-left">แพลตฟอร์มที่ใช้คือ gather.town จึงนับว่าเป็นกิจกรรมปริศนาออนไลน์เต็มรูปแบบ โดยใน gather.town ผู้ใช้งานจะมีปฏิสัมพันธ์กับสิ่งของได้ดังนี้</p>
					<ul class="list-disc list-inside space-y-1 pl-2 text-left">
						<li>แสดงข้อความหรือภาพเมื่อเดินไปใกล้ช่อง (prompt message)</li>
						<li>กด x เพื่อเปิดสื่อ ได้แก่ โน้ต, เว็บไซต์, วีดีโอ, ภาพ</li>
					</ul>
					<p class="text-left">ถ้ามี role เป็น admin, owner หรือ builder จะทำได้มากกว่านี้ คือเพิ่มสิ่งกีดขวาง และเพิ่มจุดวาร์ปไปช่องอื่น แต่เนื่องจากไม่มี role เหล่านั้นเลยไม่สามารถใช้ลูกเล่นนั้นได้ ทำให้ต้องเปลี่ยนปริศนาข้อนึงที่ให้ผู้เล่นเดินเขาวงกตล่องหน ให้เป็นเดินหาข้อความแทน</p>
					<p class="text-left">มีตะกุกตะกักบ้างตอนวางของในแผนที่ เชคของเป็นครั้งคราวเพราะคนอื่นต้องเข้ามาจัดบูธเวลาเดียวกัน บางทีของที่ตั้งไว้ก็โดนลบไป (แต่เราก็ไปลบของคนอื่นโดยไม่ได้ตั้งใจเหมือนกัน เช่นเรือโจรสลัดลำใหญ่มหึมาของ Siam Board Games ที่น่าจะเผลอลบไป 3 ครั้ง ได้)</p>
					<p class="text-left">ลูกเล่นนึงที่ใช้คือ ประตูเข้ารหัส เป็นลูกเล่นของ gather.town ที่ยังเป็น beta ตั้งค่าวุ่นวายหน่อย แต่ก็ใช้งานได้ ติดปัญหาเล็กน้อยคือประตูจะเปิดค้าง 5 วินาที จึงอาจมีคนหลุดเข้าไปบ้าง แต่ไม่ได้เป็นอะไรที่ซีเรียสนัก</p>
				</section>

				<!-- Section 3: ทำไมกลายเป็นเว็บไปได้? -->
				<section id="webapp" class="scroll-mt-24 space-y-4 text-left">
					<h2 class="text-2xl sm:text-3xl font-black text-white border-b border-slate-800 pb-2 text-left">ทำไมกลายเป็นเว็บไปได้?</h2>
					<p class="text-left">ในตอนแรกสุดมีการวางแผนให้ผู้เล่นต้องเดินไปหาสตาฟเพื่อตรวจคำตอบ แต่ในเมื่อเราเล่นแบบออนไลน์รูปแบบอยู่แล้ว ถ้ามีหน้าสำหรับตรวจคำตอบให้เลยจะสะดวกกว่า จึงคิดว่าจะใช้แนบลิงก์ Google Sites หรือ Google Forms ให้ใน gather.town เลย แต่ไป ๆ มา ๆ ด้วยความที่เพิ่งได้รู้จักกับ Svelte หมาด ๆ เลยนึกครึ้มทำเป็น web app ซะเลย</p>
					<p class="text-left">ที่จริง มี github project ที่ใช้สร้างเว็บสำหรับ puzzle hunt โดยเฉพาะ ที่ <a href="https://github.com/galacticpuzzlehunt/gph-site" target="_blank" rel="noopener noreferrer" class="text-teal-400 underline font-bold">gph-site</a> และได้เคยลอง fork มาทำเล่นจนเสร็จแล้ว แต่ติดตรงที่ต้องให้ผู้เล่นสร้างบัญชีในเว็บ ซึ่งจะวุ่นวายถ้าต้องกรอกข้อมูลนู่นนี่นั่นเพียงเพื่อแก้ปริศนาสั้น ๆ (ที่ลงท้ายดันนานกว่าที่คิด) เลยไม่สามารถใช้ได้ อย่างไรก็ตาม ลูกเล่นหลายอย่างก็หยิบจาก gph-site นี่หละ เอามาเขียนใหม่เอง</p>
					<p class="text-left">ตอนแรก ๆ ก็กะว่าทำเป็นหน้าแยกกัน ตรวจคำตอบแล้วจบ อย่างน้อยสุดก็ให้ผู้เล่นกรอกชื่อและอีเมลหลังเล่นเสร็จ เพื่อส่งให้ทีมงานไปแจกรางวัล แต่นึกสนุกอยากทำให้เหมือน puzzle hunt ที่เคยไปเล่น ก็เลยใส่ลูกเล่นเพิ่ม ไป ๆ มา ๆ กลายเป็น full-stack ไปได้ (...) ถ้ามี login ด้วยนี่คือครบเลย tech ที่ใช้เขียนเว็บได้แก่: Svelte, Sapper, Node.js, PostgresSQL, host บน Heroku ส่วน user interface ใช้ <a href="https://sveltematerialui.com/" target="_blank" rel="noopener noreferrer" class="text-teal-400 underline font-bold">Svelte Material UI</a></p>

					<p class="font-bold text-white pt-2 text-left">ลูกเล่นที่วางแผนใส่ในเว็บ และใส่เป็นที่เรียบร้อยแล้ว เป็นลำดับตามนี้</p>
					<ol class="list-decimal list-inside space-y-3 pl-2 text-left">
						<li><strong>ตรวจคำตอบบน server</strong> - ตอนแรกว่าจะฝังคำตอบที่เข้ารหัสไว้ใน javascript เลย แต่ด้วยความที่ต้องใช้ server เพื่อทำอย่างอื่นอยู่แล้วเลยตรวจคำตอบบน server ไปเลย ส่วนหนึ่งก็คือกันโกงนั่นแหละ แต่อีกส่วนคือจะได้เก็บข้อมูลอื่น ๆ ได้</li>
						<li><strong>แสดงคำใบ้</strong> - ในด่าน 1 ให้คำใบ้ตรง ๆ เลย แต่ผู้เล่นสามารถเลือกเปิดได้ ส่วนในด่าน 2 เป็นของซูม ไม่แน่ใจว่าตอนแรกวางแผนอะไรไว้ แต่สุดท้ายก็เลือกให้แสดงเมื่อเปิดปริศนา 20 นาที (30 นาทีสำหรับข้อสุดท้าย)</li>
						<li><strong>ตารางอักษร</strong> - ตอนแรกวางแผนใช้ภาพนิ่ง แต่นึกได้ว่าถ้าทำให้ตารางเป็นปุ่มช่วยทดด้วย น่าจะเล่นสะดวกขึ้นมาก ก็เลยออกมาเป็นอย่างที่เห็น ที่จริงซ่าคิดจะใส่ลูกเล่นแพรวพราว เช่น ทดได้ เปลี่ยนสีได้ แต่กลัวจะไม่ได้ทำอย่างอื่นเลยพับไป</li>
						<li><strong>บันทึกคำตอบ</strong> - ผู้เล่นบางคนไม่ได้เล่นต่อเนื่องตั้งแต่ต้นจนจบ เลยเพิ่มลูกเล่นนี้ขึ้นมา จะได้ไม่ต้องขุดคำตอบเก่า ๆ มาตอบใหม่อีกที นอกจากนั้นทำให้สามารถกันไม่ให้ใช้เครื่องเดียวกันส่งคำตอบซ้ำ ๆ หลายครั้ง เพื่อกรอกอีเมลหลีายคนได้ (แต่ถ้า clear cache เป็นก็ทำได้อยู่ดีแหละ...) <br><br> ซึ่งกลายเป็นว่าลูกเล่นสำคัญในด่านที่ 2 เพราะว่าผู้เล่นต้องเดินไปมาระหว่างกระดาน ถ้าต้องทดคำตอบแล้วเดินมาตอบที่กระดานกลางก็จะดูน่าหงุดหงิดมาก เลยเก็บคำตอบไว้ใช่ระหว่างหน้าได้</li>
						<li><strong>ตารางอันดับ</strong> - ตอนแรกไม่ได้คิดถึงขั้นนี้ เพราะรู้ว่าต้องสร้าง database ซึ่งไม่เคยใช้มาก่อนเลย แต่พอคิดขึ้นได้ว่าสุดท้ายต้องเก็บข้อมูลผู้เล่นที่เล่นจบอยู่ดี เลยไปศึกษาและโชคดีที่ทำเสร็จได้ไม่ยากนัก เนื่องจาก heroku มี PostgresSQL เป็น add-on ให้อยู่แล้ว</li>
						<li><strong>เก็บข้อมูลเวลา และจำนวนครั้งที่ตอบผิด</strong> - อธิบายละเอียดด้านล่าง ข้อมูลเหล่านี้จะเป็นประโยชน์มากเวลาออกแบบกิจกรรมปริศนาในภายภาคหน้า ซึ่งส่วนนี้ทำได้ไม่ยากเพราะต้องตรวจคำตอบบน server อยู่แล้ว</li>
						<li><strong>Discord</strong> - ได้ไอเดียมาจาก gph-site ที่แจ้งเตือนใน Discord ทุกครั้งที่มีการส่งคำตอบ เลยลองทำขึ้นมาดูบ้าง เนื่องจากเป็นระบบส่งข้อความอย่างเดียว เลยสามารถใช้ webhook ได้ ไม่ต้องถึงขั้นเขียน bot <br><br>
						ทีแรกก็ว่าจะมาเชคเป็นบางครั้งบางคราว แต่ปรากฏว่าอ่านแล้วสนุก ก็เลยแทบจะเปิดค้างไว้... โดยเฉพาะตอนที่เข้าไปดูคนอื่นเล่นอยู่ ทำให้บางครั้งสามารถเดินเข้าไปบอกคำใบ้ได้เลย (แต่ใจนึงก็กลัวเป็น unsolicited advice ยังไงไม่รู้)<br><br>
						สิ่งนึงที่เพิ่มตอนหลัง ๆ คือ สร้าง alias ให้ทุกคน (เช่น mountain_dew) เวลาอ่านใน Discord จะได้รู้ว่าเป็นคำตอบของใคร โดยไม่ต้องรู้ว่าเป็นใคร</li>
						<li><strong>ให้คำใบ้เวลาคำตอบใกล้เคียง</strong> - ข้อดีของการเล่นบนเว็บคือ สามารถให้คำใบ้ได้ถ้ามาถูกทางแล้วแต่ยังตอบไม่ถูก โดยเฉพาะข้อที่เมื่อแก้ในขั้นแรกแล้วได้วลี ที่ต้องเอาไปทำต่ออีกทีหนึ่ง (ในภาษา puzzle hunt คือ keep going)<br><br>
						สิ่งที่ต่างจาก puzzle hunt ทั่วไปคือ แจ้งให้ผู้เล่นทราบถ้าคำตอบผิดไปเพียง 1 ตัวอักษร ซึ่งในกิจกรรมปริศนาปกติจะไม่ค่อยมีกัน เพราะถ้าผิดแล้วจะผิดแบบไปคนละโลกเลย แต่ด่านที่ 1 มีความแปลกตรงที่ให้หาตำแหน่งของตัวอักษรในตาราง ทำให้บางครั้งผู้เล่นอาจอ่านผิดไปเป็นช่องข้าง ๆ แทน หรือตัวอักษรบางตัวอาจจะยากเกินไป (เช่น มีชู้ = #) ทำให้หาได้ไม่ครบ จึงดูสมเหตสมผลที่จะแจ้งให้ และดีใจที่ผู้เล่นชอบ<br><br>
						จะเห็นว่า ลูกเล่นนี้ใส่ไว้ตอนท้าย ๆ ... ไม่ใช่ว่าไม่สำคัญ แต่เพราะรู้ว่าใช้เวลาไม่นานมาก</li>
						<li><strong>แชร์ลงโซเชียล</strong> - ได้รับแรงบันดาลใจจากปริศนาใน LINE ของค่าย riddler ว่าเวลาเล่นจบแล้วเราอยากแชร์ (=ขิง) ว่าได้อันดับเท่าไหร่ ดีที่มีคนเขียน component ไว้ให้ใช้ได้เลย ไม่ต้องขุด api มาศึกษาเอง (แต่ที่จริงก็อ่านไประดับนึงละ)</li>
						<li><strong>ให้คะแนนปริศนา</strong> - ในเมื่อมี database แล้ว ก็เลยนึกสนุกอยากเก็บข้อมูลให้มากขึ้น เลยใส่ระบบลงคะแนนหลังจากตอบเสร็จแล้ว</li>
					</ol>

					<p class="font-bold text-white pt-2 text-left">รายการสิ่งที่อยากทำแต่ไม่ได้ทำ</p>
					<ul class="list-disc list-inside space-y-2 pl-2 text-left">
						<li><strong>Notification</strong> - แจ้งเตือน เตือนอะไร? เตือนให้ทุกคนเห็นว่ามีคนแก้ข้อนี้ได้แล้ว! เนื่องจากใช้ socket.io อยู่แล้วเลยทำได้ไม่ยาก แต่คิดไปคิดมาคนเล่นน่าจะรู้สึกกดดันมากกว่าท้าทาย ก็เลยพับไป เหลือเพียงแค่นับจำนวนคนที่เล่น ณ เวลานั้น</li>
						<li><strong>แก้ snackbar</strong> - หลังจากที่ผู้เล่นส่งคำตอบ จะมีข้อความโผล่ด้านล่างว่าถูกหรือไม่ (snackbar) โดยใช้ของ default บน Svelte Material UI แต่พอใช้จริงก็มีปัญหาว่าโผล่สั้นไป ตัวอักษรเล็กไป หรือไปชนกับ interface ของ gather.town แต่ว่าไม่ได้ย้อนกลับมาทำส่วนนี้ เพราะเท่าที่มีอยู่ก็พอใช้ได้แล้ว รอบหน้าต้องหาทางออกใหม่</li>
						<li><strong>Badge</strong> - เรามี point แล้ว (นับว่าทำเสร็จไปกี่ข้อ) มี leaderboard แล้ว จะครบสามเกลอ PBL ได้ก็ต้องเพิ่ม badge สิ! แต่พอจะนั่งเขียนโค้ดก็เห็นว่าต้องเก็บข้อมูลเยอะมาก และละเอียดมาก (เช่น badge คนที่คลิกตารางครบ 100 ครั้ง) ก็เลยล้มเลิกไป แต่งานหน้าก็อาจซ่าลองทำดู</li>
						<li><strong>ห้องแชท</strong> - ถ้าผู้เล่นที่เล่นพร้อมกันสามารถส่งข้อความหากันได้ทันทีเลย ก็ดูน่าสนุกนะ แต่ต้องกรองแสปม กันสปอยล์ ก็เลยไม่ได้ทำ และในงานจริงก็ค้นพบว่าผู้เล่นส่งข้อความคุยกันใน gather.town กันได้ ก็เลยคิดว่าดีแล้วที่ไม่ไปทำซ้ำซ้อน</li>
						<li><strong>ใส่เสียง</strong> - พยายามมาพักนึง อยากให้มีเสียงกระดิ่งเวลาตอบถูกหรือเสียงออดเวลาตอบผิด เพิ่ม immediate feedback แต่ไม่สำเร็จ ทั้ง ๆ ที่เป็น html ปกติซะด้วยซ้ำ รอบหน้าแก้ตัวใหม่</li>
					</ul>

					<p class="text-left">หลังจากงานนี้เสร็จสิ้นและย้ายหน้าเว็บไปเป็นแบบ static เรียบร้อย และลบรหัสสำคัญ (database, webhook) แล้ว จะลงลิงก์ source code ให้เอาไป fork ต่อได้ตามอัธยาศัย</p>
				</section>

				<!-- Section 4: เวลาที่ใช้ (Interactive Chart with X-Y axes for both stages) -->
				<section id="time" class="scroll-mt-24 space-y-4 text-left">
					<h2 class="text-2xl sm:text-3xl font-black text-white border-b border-slate-800 pb-2 text-left">เวลาที่ใช้</h2>
					<p class="text-left">เนื่องจากงานนี้จัดเพียง 3 วัน และมีกิจกรรมอื่นในงานให้ร่วมสนุกอีก เลยไม่อยากให้ใช้เวลากับปริศนามากเกินไป จึงได้เก็บข้อมูลว่าผู้เล่นใช้เวลากับปริศนาเท่าไหร่ แต่เป็นการเก็บข้อมูลแบบหยาบ ๆ นั่นคือ จับเวลาเริ่มครั้งเดียวตอนที่เปิดหน้าปริศนาครั้งแรก และนับจนถึงเวลาที่ส่งคำตอบสุดท้ายของด่าน 1 และด่าน 2 จึงมีบางคนที่เปิดวันแรก แต่ได้เริ่มเล่นจริงวันสุดท้าย ทำให้เวลาไม่ตรงกับความเป็นจริง</p>
					<p class="text-left">ฉะนั้นจึงตัดเวลาที่เกิน 10 ชั่วโมงออก และนำเวลาที่เหลือมาเรียงลำดับได้ตามนี้</p>

					<!-- Interactive Time Graph with X-Y axes -->
					<div class="bg-slate-950 p-4 sm:p-6 rounded-2xl border border-slate-800 space-y-4 text-left">
						<div class="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-3">
							<div class="flex items-center gap-3 text-xs font-bold">
								<button
									class="flex items-center gap-2 px-3 py-1.5 rounded-xl border transition-all {showRound1Time ? 'bg-purple-500/20 border-purple-500/40 text-purple-300' : 'bg-slate-900 border-slate-800 text-slate-500'}"
									on:click={() => (showRound1Time = !showRound1Time)}
								>
									<span class="w-3 h-3 rounded-full bg-purple-400"></span>
									<span>เวลาที่ใช้ในด่าน 1 ({r1TimeList.length} คน)</span>
								</button>
								<button
									class="flex items-center gap-2 px-3 py-1.5 rounded-xl border transition-all {showRound2Time ? 'bg-teal-500/20 border-teal-500/40 text-teal-300' : 'bg-slate-900 border-slate-800 text-slate-500'}"
									on:click={() => (showRound2Time = !showRound2Time)}
								>
									<span class="w-3 h-3 rounded-full bg-teal-400"></span>
									<span>เวลาที่ใช้ในด่าน 2 ({r2TimeList.length} คน)</span>
								</button>
							</div>
							<span class="text-xs text-slate-500">เอาเมาส์ชี้บนกราฟเพื่อดูรายละเอียด</span>
						</div>

						<div class="relative w-full overflow-x-auto">
							<svg viewBox="0 0 800 300" class="w-full min-w-[600px] h-auto overflow-visible select-none">
								<!-- Grid Lines & Y Axis -->
								{#each [0, 2, 4, 6, 8, 10] as h}
									{@const y = getChartY(h)}
									<line x1="60" y1={y} x2="760" y2={y} stroke="#1e293b" stroke-width="1" stroke-dasharray={h === 0 ? '0' : '4 4'} />
									<text x="50" y={y + 4} text-anchor="end" fill="#64748b" font-size="11" font-family="monospace">{h} ชม.</text>
								{/each}

								<!-- Axis lines -->
								<line x1="60" y1="30" x2="60" y2="250" stroke="#334155" stroke-width="1.5" />
								<line x1="60" y1="250" x2="760" y2="250" stroke="#334155" stroke-width="1.5" />

								<!-- Axis Labels -->
								<text x="60" y="20" text-anchor="start" fill="#94a3b8" font-size="11" font-weight="bold">แกน Y: ชั่วโมง (Hours)</text>
								<text x="60" y="275" text-anchor="start" fill="#64748b" font-size="11">ผู้เล่นที่เร็วสุด (ซ้าย)</text>
								<text x="760" y="275" text-anchor="end" fill="#64748b" font-size="11">ผู้เล่นที่ช้าสุด (ขวา)</text>

								<!-- Round 1 Curve -->
								{#if showRound1Time}
									<polyline fill="none" stroke="#c084fc" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" points={r1PolylinePoints} />
									{#each r1TimeList as p, i}
										<circle
											cx={getChartX(i, r1TimeList.length)}
											cy={getChartY(p.hours)}
											r={hoveredTimeIndex === i ? 6 : 3}
											fill="#c084fc"
											stroke="#020617"
											stroke-width="1.5"
											class="cursor-pointer transition-all"
											on:mouseenter={() => (hoveredTimeIndex = i)}
										/>
									{/each}
								{/if}

								<!-- Round 2 Curve -->
								{#if showRound2Time}
									<polyline fill="none" stroke="#2dd4bf" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" points={r2PolylinePoints} />
									{#each r2TimeList as p, i}
										<circle
											cx={getChartX(i, r2TimeList.length)}
											cy={getChartY(p.hours)}
											r={hoveredTimeIndex === i ? 6 : 3}
											fill="#2dd4bf"
											stroke="#020617"
											stroke-width="1.5"
											class="cursor-pointer transition-all"
											on:mouseenter={() => (hoveredTimeIndex = i)}
										/>
									{/each}
								{/if}

								<!-- Vertical Hover Guide Line -->
								{#if hoveredTimeIndex !== null}
									{@const hoverX = getChartX(hoveredTimeIndex, Math.max(r1TimeList.length, r2TimeList.length))}
									<line x1={hoverX} y1="30" x2={hoverX} y2="250" stroke="#f59e0b" stroke-width="1" stroke-dasharray="3 3" />
								{/if}
							</svg>
						</div>

						<!-- Interactive Tooltip Display -->
						{#if hoveredTimeIndex !== null}
							{@const p1 = r1TimeList[hoveredTimeIndex]}
							{@const p2 = r2TimeList[hoveredTimeIndex]}
							<div class="bg-slate-900 border border-slate-800 p-4 rounded-xl flex flex-wrap items-center justify-between gap-4 text-xs text-left" transition:slide>
								<div class="font-bold text-slate-300">
									อันดับตามลำดับเวลา: <span class="text-amber-400 font-mono">#{hoveredTimeIndex + 1}</span>
								</div>
								<div class="flex flex-wrap gap-4 text-left">
									{#if p1}
										<div class="flex items-center gap-2 text-purple-300">
											<span class="w-2.5 h-2.5 rounded-full bg-purple-400"></span>
											<span>ด่าน 1: <strong>{p1.name}</strong> ({p1.hours.toFixed(2)} ชม. / {formatDurationMs(p1.timetotal)})</span>
										</div>
									{/if}
									{#if p2}
										<div class="flex items-center gap-2 text-teal-300">
											<span class="w-2.5 h-2.5 rounded-full bg-teal-400"></span>
											<span>ด่าน 2: <strong>{p2.name}</strong> ({p2.hours.toFixed(2)} ชม. / {formatDurationMs(p2.timetotal)})</span>
										</div>
									{/if}
								</div>
							</div>
						{/if}
					</div>

					<p class="text-left">ครึ่งนึงของผู้เล่นจบด่านที่ 1 ได้ใน 2 ชั่วโมง นานกว่าที่คิดไว้มากกกกกกกก เพราะมี 6 ข้อ แต่ต้องเดินรอบแผนที่ด้วย ก็เลยบอกไม่ได้ว่านานที่ปริศนาเอง หรือนานเพราะหาคำใบ้</p>
					<p class="text-left">และจบด่านที่ 2 ใน 4 ชั่วโมง ถ้าหักด่านแรกก็เหลือ 2 ชั่วโมง ก็คือพอ ๆ กัน (แต่ไม่ต้องเดินรอบแผนที่แล้ว)</p>
					<p class="text-left">โดยรวมนับว่าสนุกสำหรับคนที่ชอบเล่นอยู่แล้ว นั่นคือ 11 ข้อ ข้อละ 20 นาทีแต่ก็นานเกินไปมากโขถ้าเป้าหมายการออกแบบคือบุคคลทั่วไป</p>
					<p class="text-left">แต่ก็จะเห็นได้ว่า มีผู้เล่นจำนวนหนึ่งที่ใช้เวลาถึง 3 ชั่วโมงในด่านที่ 1 และ 6 ชั่วในด่านที่ 2 ส่วนผู้เล่นที่ใช้เวลาถึง 8 ชั่วโมง มีถึง 7 คน ก็ไม่น่าจะใช่เรื่องบังเอิญที่จะเป็นกลุ่มที่ไม่ได้เล่นต่อเนื่องทั้งหมด</p>
				</section>

				<!-- Section 5: จำนวนครั้งที่ตอบผิด -->
				<section id="guesses" class="scroll-mt-24 space-y-4 text-left">
					<h2 class="text-2xl sm:text-3xl font-black text-white border-b border-slate-800 pb-2 text-left">จำนวนครั้งที่ตอบผิด</h2>
					<p class="text-left">ก่อนจะถึงเป้าหมายก็ต้องมีการล้มลุกคลุกคลานกันบ้าง เลยรวบรวมว่าข้อไหนที่มีคนตอบผิดเยอะสุด โดยวัดจากอัตราส่วนคำตอบที่ผิด และคำตอบที่ถูก</p>

					<!-- Guesses Ratio Card -->
					<div class="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-3 text-left">
						<h4 class="font-bold text-xs text-rose-400 uppercase tracking-wider text-left">อัตราส่วนของจำนวนครั้งที่ตอบผิดกับจำนวนที่ตอบถูก</h4>
						<div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
							{#each answerLogsData as item}
								{@const ratio = (parseInt(item.incorrect, 10) / parseInt(item.correct, 10)).toFixed(1)}
								{@const label = item.round === '0' ? `1-${item.id === '5' ? 'Final' : parseInt(item.id, 10) + 1}` : `2-${item.id === '4' ? 'Final' : parseInt(item.id, 10) + 1}`}
								<div class="flex items-center gap-3 text-xs text-left">
									<span class="font-mono w-14 text-slate-400 font-bold">{label}</span>
									<div class="flex-1 bg-slate-900 rounded-full h-3.5 overflow-hidden p-0.5 border border-slate-800">
										<div class="bg-gradient-to-r from-rose-500 to-amber-500 h-full rounded-full transition-all" style="width: {Math.min(parseFloat(ratio) * 6, 100)}%"></div>
									</div>
									<span class="w-12 text-right font-mono font-bold text-rose-300">{ratio}x</span>
								</div>
							{/each}
						</div>
					</div>

					<p class="text-left">เช่น ในข้อ 1-1 (ปลา) โดยเฉลี่ยแล้วผู้เล่นจะตอบผิด 2 ครั้ง ก่อนจะตอบถูก 1 ครั้ง ส่วนข้อ 2-2 (วงกลม) ผู้เล่นจะตอบผิด 15 ครั้งก่อนจะเจอคำตอบที่ถูก (!!!) ซึ่งนับว่าเยอะมาก</p>
					<p class="text-left">ข้อที่มีคนตอบผิดบ่อยเป็นอันดับ 1 คือ ข้อ 2-2 (Puzzle B) เพราะข้อมูลกระจายหลายจุด เวลาตอบเลยต้องค่อย ๆ ตอบเท่าที่หาได้ แล้วเพิ่มไปเรื่อย ๆ</p>
					<p class="text-left">ข้อที่มีคนตอบผิดมากเป็นอันดับ 2 คือ ข้อ 1-5 (ดาบ) เพราะผู้เล่นมองไม่ออกว่าดาบห่างจากช่องที่ยืนอยู่กี่ช่อง</p>
				</section>

				<!-- Section 6: คะแนนโหวต -->
				<section id="rates" class="scroll-mt-24 space-y-4 text-left">
					<h2 class="text-2xl sm:text-3xl font-black text-white border-b border-slate-800 pb-2 text-left">คะแนนโหวต</h2>
					<p class="text-left">ลูกเล่นนึงคือ การให้คนเล่นลงคะแนนหลังจากแก้ปริศนาเสร็จ เพื่อจะได้รับ feedback ทันที โดยมีข้อมูลสรุปดังนี้</p>

					<!-- Ratings Chart Card -->
					<div class="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-3 text-left">
						<div class="flex items-center justify-between text-xs font-bold text-slate-400 pb-2 border-b border-slate-800">
							<span class="text-emerald-400">ความสนุก (Fun)</span>
							<span class="text-purple-400">ความยาก (Difficulty)</span>
						</div>
						<div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-left">
							{#each answerLogsData.slice(0, 10) as item}
								{@const fun = (parseInt(item.fun, 10) / parseInt(item.num, 10)).toFixed(1)}
								{@const diff = (parseInt(item.difficulty, 10) / parseInt(item.num, 10)).toFixed(1)}
								{@const label = item.round === '0' ? `1-${item.id === '5' ? 'Final' : parseInt(item.id, 10) + 1}` : `2-${item.id === '4' ? 'Final' : parseInt(item.id, 10) + 1}`}
								<div class="flex flex-col gap-1 text-xs text-left">
									<div class="flex justify-between text-slate-400 font-bold">
										<span>ข้อ {label}</span>
										<span>สนุก: <strong class="text-emerald-400">{fun}</strong> | ยาก: <strong class="text-purple-400">{diff}</strong></span>
									</div>
									<div class="flex gap-2">
										<div class="flex-1 bg-slate-900 rounded-full h-2 overflow-hidden border border-slate-800">
											<div class="bg-emerald-400 h-full rounded-full" style="width: {(parseFloat(fun) / 5) * 100}%"></div>
										</div>
										<div class="flex-1 bg-slate-900 rounded-full h-2 overflow-hidden border border-slate-800">
											<div class="bg-purple-400 h-full rounded-full" style="width: {(parseFloat(diff) / 5) * 100}%"></div>
										</div>
									</div>
								</div>
							{/each}
						</div>
					</div>

					<p class="text-xs text-slate-400 italic text-left">หมายเหตุ - เอ๊ะ ข้อสุดท้ายหายไปไหนนะ? อ้อ ถ้าตอบข้อสุดท้ายถูกแล้วจะเปลี่ยนไปหน้ากรอกข้อมูลทันที เลยไม่มีคนลงกลับมาลงคะแนนให้...</p>
					<p class="text-left">คะแนนความสนุกไม่ห่างกันเลย อยู่ 3.5 - 4.5 อันนี้ไม่รู้เหมือนกันว่าทำไมเกาะกลุ่มกัน เพราะโจทย์คล้าย ๆ กัน เพราะความสนุกกะยาก หรือเพราะไม่กล้าโหวตว่าไม่สนุกกันนะ</p>
					<p class="text-left">ข้อที่สนุกสุด กลับเป็น 2-3 (จราจร) ที่ไม่ได้มีอะไรซ่อนไว้เบื้องหลัง</p>
				</section>

				<!-- Section 7: ความเห็น -->
				<section id="comments" class="scroll-mt-24 space-y-4 text-left">
					<h2 class="text-2xl sm:text-3xl font-black text-white border-b border-slate-800 pb-2 text-left">ความเห็น</h2>
					<p class="text-left">หลังจากที่เล่นจบด่าน 2 แล้ว ได้เปิดโอกาสให้ผู้ชนะได้ส่งความเห็นสั้น ๆ มา ซึ่งรวบรวมได้ดังนี้</p>
					<div class="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-96 overflow-y-auto pr-2 text-left">
						{#each statsComments as comment}
							<div class="bg-slate-950/90 p-3.5 rounded-xl border border-slate-800 text-xs text-slate-300 text-left">
								"{comment}"
							</div>
						{/each}
					</div>
				</section>

				<!-- Section 8: ประเมินตัวเอง -->
				<section id="reflection" class="scroll-mt-24 space-y-4 text-left">
					<h2 class="text-2xl sm:text-3xl font-black text-white border-b border-slate-800 pb-2 text-left">ประเมินตัวเอง</h2>

					<h3 class="text-xl font-bold text-teal-300 pt-2 text-left">ด้านของปริศนา</h3>
					<p class="text-left">ปริศนาด่านที่ 2 ซูมเป็นคนเขียน โดยได้ไป playtest และแก้บ้าง จึงละไว้ (เว้นแต่ว่าซูมจะเขียนเพิ่ม ก็จะเอามาไว้ตรงนี้) แต่ที่พอจะคอมเมนท์ได้คือ มีการสื่อสารผิดพลาด ในตอนแรกเข้าใจว่าฝั่ง TBS จะทำกราฟฟิคให้ใหม่ แต่สุดท้ายก็ใช้ภาพที่ร่างไว้ ก็เลยเป็นภาพพื้นหลังสีขาวธรรมดา ๆ</p>
					<p class="text-left">ส่วนปริศนาด่านที่ 1 นับว่าทำออกมาได้เป็นที่น่าพอใจตามโจทย์ที่ได้รับมา คือให้เดินทั่วงานเพื่อหาคำใบ้ อย่างคำใบ้ข้อปลาบางจุดที่ถึงกับต้องเดินเข้าไปในบูธถึงจะเห็น และได้ใช้ลูกเล่นของ gather.town พอสมควร (prompt message, blank object)</p>
					<p class="text-left">ที่จริงแล้ว มีเป้าหมายการออกแบบอีกอย่าง คือออกแบบ pure puzzle ที่ใช้แค่คำใบ้ก็หาคำตอบได้ ในการทดสอบตอนแรก (2 คน) คนทดสอบทำได้แม้จะไม่บอกอะไรเลย นอกจากว่าใช้ตาราง 5x5 แต่สำหรับคนทั่วไปก็ท้าทายเกิน อย่างข้อปลา (1-1) ในตอนแรกกะให้หาปลา แล้วสังเกตว่าจำนวนช่องรวมกันได้ 25 ช่อง เต็มตารางพอดี และมีวิธีวางให้ลงทุกช่อง แต่คนทดสอบนึกไม่ถึง สุดท้ายเลยต้องเขียนเป็นคำสั่งว่าให้เอากลุ่มปลามาวางเหมือน tetris ก็เลยต้องล้มพับเป้าหมายนี้ไป</p>
					<p class="text-left">แล้วทำไมถึงไม่เอาคำอธิบายใส่ในแผนที่เลยหละ? เพราะมันจะรกมาก ยิ่งต้องเดินไปมาหาข้อมูล แล้วเดินกลับมาอ่านคำอธิบายอีก ซึ่งถ้าข้อมูลเยอะไปสุดท้ายผู้เล่นก็ต้องจดลงกระดาษอยู่ดี และอาจสงสัย (พลางสาปแช่ง) ว่า แล้วทำไมไม่เขียนออกมาให้เลยในหน้ากระดาษเดียว ก็เลยสรุปได้ออกมาเป็นผลลัพธ์อย่างที่เห็น</p>

					<p class="font-bold text-white pt-2 text-left">ส่วนที่เปลี่ยน หลังจาก draft แรก</p>
					<ul class="list-disc list-inside space-y-3 pl-2 text-left">
						<li><strong>เปลี่ยนคำตอบ</strong> - ในตอนแรกใช้คำว่า READ UNDER LETTERS USED TWICE ซึ่งก็ตรงไปตรงมา แต่พบว่าต้องมาหาต่อว่าข้อไหนใช้กี่ตัวอักษร และต้องบอกใบ้ในแผนที่ว่าเป็นคำใบ้ที่เท่าไหร่ ผู้เล่นจะได้รู้ว่าหาครบหรือยัง ทำให้นึกขึ้นได้ว่าที่จริงแล้วก็ทำให้เป็น 5 ตัวอักษรให้หมดเลย จะได้จำง่าย โชคดีที่ปรับคำตอบข้ออื่นได้ไม่ยากมาก เช่น จาก READ เป็น READS จาก LETTERS เป็น CELLS จาก USED เป็น TAKEN แต่ก็ต้องเพิ่มคำแปลให้ จะได้ไม่สับสนเกินไป ส่วนคำตอบสุดท้ายยังเหมือนเดิม<br><br>
						ถามว่าทำไมต้องอ่านข้างล่าง ไม่อ่านในช่องไปเลย? เหตุผลหนึ่งคือจะได้เป็นการบังคับทางอ้อมให้แก้ปริศนาครบ 5 ข้อ เพราะถ้าขาด 1 ข้อ จะขาดตัวอักษร 2 ตัวเลย ทำให้เดายากขึ้น อีกเหตุผลนึงคือ จะได้ขยายให้เป็นคำสั่งที่มี 5 คำ ถ้าเป็นแค่ READS CELLS TAKEN TWICE มันจะขาดไปคำนึง ก็ต้องเพิ่มคำสร้อยไป อย่าง THEN, ONLY, WHICH</li>
						<li>เรียงตำแหน่งให้อ่านจากบนลงล่าง หรือซ้ายไปขวา อย่างใดอย่างหนึ่ง ทำให้ไม่ต้องใบ้ในแผนที่ว่าข้อมูลนี้เป็นตัวอักษรที่เท่าไหร่ เพราะถ้าหาข้อมูลครบแล้วคำตอบจะอ่านได้ชัด</li>
						<li>ทว่าการปรับให้เล่นง่ายขึ้น ก็ต้องแลกมาด้วยการสร้างตารางใหม่หมด และแก้ปริศนาหลายข้อ อย่างข้อ 1-3 (ใบเฟิร์น) ต้องใช้ตัวอักษรในตารางมาสร้างคำใบ้ แม้จะมีเงื่อนไขเต็มไปหมด แต่ก็โชคดีที่สร้างตารางได้แถมใช้เวลาไม่นานนัก แต่กลับมีผลข้างเคียงที่ไม่ตั้งใจคือ ตัวอักษรเดียวกันซ้อนบนล่างกันหลายคู่ ไม่รู้ว่ามาอย่างไรเหมือนกัน</li>
						<li><strong>ข้อปลา (1-1)</strong> - จากที่ต้องมาเรียงตัวอักษรเอาเองโดยดูจากขนาดของตัวต่อ (3,4,5,6,7) ให้เป็นการอ่านเรียงจากบนลงล่าง แต่ก็ยังคงออกแบบให้อ่านเรียงจากขนาดได้เช่นเก่า</li>
						<li><strong>ข้อ minesweeper (1-2)</strong>- ตอนแรกทำเป็นเขาวงกต แต่พอไม่ได้มี role ใน gather.town เลยสร้างไม่ได้ จึงเปลี่ยนมาเป็น logic puzzle ที่คนส่วนใหญ่รู้จัก โดยยังคงวิธีหาข้อมูลเหมือนเดิม คือการเดินไปบนช่องเปล่า ๆ แล้วมีข้อมูลโผล่ขึ้นมา</li>
						<li><strong>ข้อใบเฟิร์น (1-3)</strong> - ให้อ่านจากปลายหนึ่งไปอีกปลายหนึ่ง ตอนแรกผู้เล่นต้องเอาใบเฟิร์นไปไล่ทาบในตารางจนเจอตัวอักษรที่ตรง แต่ผู้ทดสอบบอกว่าสับสนไป และอีกอย่างคือปรับให้ตัวอักษรที่ใช้ตอบอยู่ในคำเลย เพราะในตอนแรกต้องหยิบตัวอักษรอื่นที่วางตรงกับตำแหน่งของไฟที่ติดกับใบเฟิร์น</li>
						<li><strong>ข้อดาบ (1-4)</strong> - ปรับจากที่ต้องเอาตัวอักษรมาเรียงใหม่ตามเลข (เช่น 1/7 หมายถึงเป็นตัวอักษรแรก) เป็นอ่านจากบนลงล่าง โดยยังเก็บตัวเลขที่บอกลำดับไว้เหมือนเดิม ส่วนวิธีหาข้อมูลและวิธีอ่านตำแหน่งยังคงเหมือนเดิม</li>
						<li><strong>ข้อวิทยุ (1-5)</strong> - ตอนแรกเขียนคำใบ้เป็น
							<ol class="list-decimal list-inside pl-4 my-2 space-y-1 text-left">
								<li>ชี้เมาอีโทวันอังคาร</li>
								<li>นางโกหกโอเอกวันพฤหัส</li>
								<li>กลางกิ๊กเอจัตวาวันศุกร์</li>
								<li>ก้อยฆ่าไอสามัญวันจันทร์</li>
								<li>#####</li>
							</ol>
							ผู้เล่นต้องคิดต่อว่า 1) ประโยคแต่ละประโยคแยกออกมาได้เป็น 5 คำ 2) เป้าหมายคือต้องหาคำตอบที่หายไป 3) เวลาอ่านให้อ่านเป็นแถวแนวนอน แต่ตอน playtest ต้องอธิบายอยู่ดีว่าทำอะไร สุดท้ายเลยปรับเป็นแบบที่เห็นในงานคือบอกเลยว่า "แถวที่ 1 - มีชู้ = #" และบอกหมวดหมู่เลยว่าเป็นหมวดอะไร เช่น นิ้ว วัน สระภาษาอังกฤษ เสียงวรรณยุกต์ แต่ก็ดันลืมบอกแถวแรกว่าเป็นศีล ก็เลยทำให้สับสนกัน (ซึ่งกลายเป็นว่าคนส่วนใหญ่คิดไปว่า การมีชู้คือมี 3 คน ทำให้ได้เลขที่ถูกโดยไม่ตั้งใจ)
						</li>
					</ul>

					<div class="flex justify-center p-4 bg-slate-950 rounded-2xl border border-slate-800 my-4">
						<img src="/puzzles/tbs2021/solution round 1.png" alt="solution round 1" class="rounded-xl max-w-full shadow-lg" />
					</div>

					<h3 class="text-xl font-bold text-teal-300 pt-2 text-left">ด้านการเขียนเว็บ</h3>
					<p class="text-left">นับว่าประสบความสำเร็จ เพราะไม่ได้มีเป้าหมายจะมาไกลขนาดนี้ในทีแรก ตอนแรกก็กลัวว่าถ้า server มีปัญหาที่หาวิธีแก้ไม่ได้แล้วจะหายนะ แต่ก็ไม่ได้เกิดปัญหาใหญ่มาก ก็จะมี server ล่มสองครั้ง ซึ่งพอ restart ก็กลับมาเป็นปกติ ถ้าในอนาคตต้องทำโปรเจคใหญ่กว่านี้ มีคนเล่นพร้อมกันหลักพัน (!?!) (ในงานนี้ มีเล่นพร้อมกันสูงสุด 80 คน) ต้องหา solution ที่ดีกว่านี้ อาจจะต้องจ้างคนมาทำจริงจังเลย และอาจต้องจ่ายเงินค่า domain name, host, database, etc.</p>

					<h3 class="text-xl font-bold text-teal-300 pt-2 text-left">ด้านผลตอบรับของผู้เล่น</h3>
					<p class="text-left">ผู้จัดงานถึงกับบอกว่าปริศนาเป็นตัวชูโรงของงานเลย (!!!)</p>

					<h3 class="text-xl font-bold text-teal-300 pt-2 text-left">รอบหน้าอยากเพิ่มอะไร</h3>
					<ul class="list-disc list-inside space-y-1 pl-2 text-left">
						<li>อยากใส่โจทย์ที่ต้องเล่นบนเว็บ (เช่น <a href="https://2020.galacticpuzzlehunt.com/puzzle/so-you-think-you-can-spell#right" target="_blank" rel="noopener noreferrer" class="text-teal-400 underline font-bold">GPH Spell Puzzle</a>) อาจจะเป็นอักษรไขว้ธรรมดาก็ได้</li>
						<li>อยากใส่โจทย์ความรู้ทั่วไป (trivia) ที่เกี่ยวกับบอร์ดเกม เป็นส่วนหนึ่งของปริศนา</li>
					</ul>
				</section>

				<!-- Section 9: ขอบคุณ -->
				<section id="thanks" class="scroll-mt-24 space-y-3 text-left">
					<h2 class="text-2xl sm:text-3xl font-black text-white border-b border-slate-800 pb-2 text-left">ขอบคุณ</h2>
					<ul class="list-disc list-inside space-y-2 pl-2 text-left">
						<li>ขอบคุณพี่มิลค์ ผู้จัดงาน Thailand Board Game Show ที่ให้ Code Breaker ได้เป็นส่วนร่วมงานครั้งนี้</li>
						<li>ขอบคุณอิมและธนะ ที่เป็นผู้ทดสอบ draft แรกสุด</li>
						<li>ขอบคุณผู้เล่นกลุ่มแรก ๆ ที่ให้ feedback เรื่องความยากของปริศนา ทำให้สามารถนำไปใช้เพื่อปรับหรือเพิ่มคำใบ้ได้ทันที่ และทำให้คนอื่นที่มาเล่นทีหลังได้เล่นสนุกขึ้น</li>
						<li>ขอบคุณข้อติชม ทั้งจากแบบสอบถามบนเว็บ จากข้อความใน chat บน gather.town และจากการที่ได้พูดคุยโดยตรงใน gather.town เลย ้โดยเฉพาะ <a href="https://www.twitch.tv/beaver41" target="_blank" rel="noopener noreferrer" class="text-teal-400 underline font-bold">Twitch beaver41</a> ที่อัดไลฟ์ระหว่างไข เลยกลับมาดูย้อนหลังได้ว่าติดตรงไหน</li>
					</ul>
				</section>

				<!-- Section 10: เก็บตก -->
				<section id="backstage" class="scroll-mt-24 space-y-4 text-left">
					<h2 class="text-2xl sm:text-3xl font-black text-white border-b border-slate-800 pb-2 text-left">เก็บตก</h2>
					<ul class="list-disc list-inside space-y-4 pl-2 text-left">
						<li>
							<span>ข้อ 2-3 (จราจร) แทบจะทุกคนจะตอบ CDREAKW ก่อน (คือใส่ครบ 7 ตัว) แล้วตามด้วย CDRAW เพราะคิดว่า 1 เป็นจำนวนเฉพาะ ซึ่งก็ปกติ แต่มีผู้เล่นคนนึงที่คิดว่า 2 ไม่ใช่จำนวนเฉพาะ เลยตอบโดยไม่มีตัว D ทำให้งมอยู่นานมาก</span>
							<div class="mt-2 pl-4">
								<img src="/puzzles/tbs2021/extra even prime.png" alt="spam answer" class="rounded-xl max-w-sm border border-slate-800 shadow-md" />
							</div>
						</li>
						<li>
							<span>ในตอนเปิดงาน มีคนเขียน script ส่งคำตอบเป็นตัวอักษร 5 ตัวทั้งหมดที่เป็นไปได้! ถ้าจะไล่คำ 5 ตัวอักษรทั้งหมด จะได้ 26x26x26x26x26 กรณี แต่ด้วยเงื่อนไขที่เพิ่มขึ้นมาว่าต้องอ่านบนลงล่างหรือซ้ายไปขวาได้ เลยเหลือเพียง 2x(5x5x5x5x5) = 6250 กรณี ถ้าส่งคำตอบวินาทีละ 10 ครั้งก็จะใช้เวลาเพียง 10 นาทีก็จะไล่จนครบ</span>
							<div class="mt-2 pl-4">
								<img src="/puzzles/tbs2021/extra spam.png" alt="spam answer" class="rounded-xl max-w-sm border border-slate-800 shadow-md" />
							</div>
							<span class="block mt-2">แต่ยังดีที่ server ยังไม่ล่ม และใช้ script แค่ 2 ข้อจาก 5 ข้อ เลยไม่ได้ส่งผลกระทบอะไรต่อคนอื่น เสียดายอย่างคือพอได้คำตอบเสร็จก็ไม่ได้เล่นต่อ .... หรือเปลี่ยนเครื่องก็ไม่รู้เหมือนกัน</span>
						</li>
						<li>
							<span>มีคนตั้งสมมติฐานว่า ถ้าเปิดประตูโดยใช้รหัสว่า ENTER ก็น่าจะแก้ปริศนาชิงรางวัลว่า PRIZE นะ (!!!) ไม่แน่ใจว่าสุดท้ายได้ลองจริงมั้ย</span>
						</li>
						<li>
							<span>มีคนแอบมาเล่นตอนตี 5 ด้วย! ที่ตลกคือ alias เป็นคำว่า restless night พอดี</span>
							<div class="mt-2 pl-4">
								<img src="/puzzles/tbs2021/extra restless.png" alt="spam answer" class="rounded-xl max-w-md border border-slate-800 shadow-md" />
							</div>
						</li>
					</ul>
				</section>
			</div>
		</div>
	{/if}

	<!-- TAB 4: LEADERBOARD -->
	{#if activeTab === 'leaderboard'}
		<div class="flex flex-col gap-6 text-left" in:fade={{ duration: 200 }}>
			<!-- Leaderboard Controls Card (Without Search Bar) -->
			<div class="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4 text-left">
				<!-- Round Switcher -->
				<div class="flex items-center gap-2">
					<button
						class="btn btn-sm rounded-xl font-bold {lbSelectedRound === 1 ? 'bg-emerald-500 text-slate-950 border-none' : 'btn-ghost text-slate-300'}"
						on:click={() => (lbSelectedRound = 1)}
					>
						ด่านที่ 1
					</button>
					<button
						class="btn btn-sm rounded-xl font-bold {lbSelectedRound === 2 ? 'bg-cyan-500 text-slate-950 border-none' : 'btn-ghost text-slate-300'}"
						on:click={() => (lbSelectedRound = 2)}
					>
						ด่านที่ 2
					</button>
				</div>

				<!-- Day Filter Tabs -->
				<div class="tabs tabs-boxed bg-slate-950 p-1 rounded-2xl border border-slate-800">
					<button class="tab tab-xs sm:tab-sm rounded-xl {lbSelectedDay === 'all' ? 'tab-active bg-amber-500 text-slate-950 font-bold' : 'text-slate-400'}" on:click={() => (lbSelectedDay = 'all')}>ทั้งหมด</button>
					<button class="tab tab-xs sm:tab-sm rounded-xl {lbSelectedDay === '26' ? 'tab-active bg-amber-500 text-slate-950 font-bold' : 'text-slate-400'}" on:click={() => (lbSelectedDay = '26')}>วันศุกร์ (26)</button>
					<button class="tab tab-xs sm:tab-sm rounded-xl {lbSelectedDay === '27' ? 'tab-active bg-amber-500 text-slate-950 font-bold' : 'text-slate-400'}" on:click={() => (lbSelectedDay = '27')}>วันเสาร์ (27)</button>
					<button class="tab tab-xs sm:tab-sm rounded-xl {lbSelectedDay === '28' ? 'tab-active bg-amber-500 text-slate-950 font-bold' : 'text-slate-400'}" on:click={() => (lbSelectedDay = '28')}>วันอาทิตย์ (28)</button>
					<button class="tab tab-xs sm:tab-sm rounded-xl {lbSelectedDay === 'other' ? 'tab-active bg-amber-500 text-slate-950 font-bold' : 'text-slate-400'}" on:click={() => (lbSelectedDay = 'other')}>วันอื่น</button>
				</div>
			</div>

			<!-- Leaderboard Table (Standardized spent time format) -->
			<div class="bg-slate-900/80 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl text-left">
				<div class="overflow-x-auto">
					<table class="table table-zebra w-full text-slate-200 text-left">
						<thead>
							<tr class="bg-slate-950 text-slate-400 text-xs uppercase border-b border-slate-800">
								<th class="w-16 text-center">อันดับ</th>
								<th>ผู้เล่น (Username)</th>
								<th>เวลาที่ส่งคำตอบ</th>
								<th class="text-right">เวลาที่ใช้</th>
							</tr>
						</thead>
						<tbody>
							{#if currentLeaderboardData.length === 0}
								<tr>
									<td colspan="4" class="text-center py-8 text-slate-500 font-bold">
										ไม่พบข้อมูลผู้เล่นตามเงื่อนไขที่เลือก
									</td>
								</tr>
							{:else}
								{#each currentLeaderboardData as row, idx}
									<tr class="hover:bg-slate-800/40 border-b border-slate-800/50">
										<td class="text-center font-bold font-mono">
											{#if idx === 0}
												<span class="text-amber-400">🥇 1</span>
											{:else if idx === 1}
												<span class="text-slate-300">🥈 2</span>
											{:else if idx === 2}
												<span class="text-amber-600">🥉 3</span>
											{:else}
												<span class="text-slate-400">{idx + 1}</span>
											{/if}
										</td>
										<td class="font-bold text-white text-left">
											{decodeURIComponent(row.name)}
										</td>
										<td class="text-xs text-slate-400 font-mono text-left">
											{row.time}
										</td>
										<td class="text-right font-mono text-xs text-emerald-400 font-bold">
											{formatDurationMs(row.timetotal)}
										</td>
									</tr>
								{/each}
							{/if}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	{/if}
</div>

<!-- Round 1 Completion Modal -->
<input type="checkbox" id="r1-success-modal" class="modal-toggle" bind:checked={showR1SuccessModal} />
<!-- svelte-ignore a11y-label-has-associated-control -->
<label class="modal cursor-pointer bg-slate-950/80 backdrop-blur-md" for="r1-success-modal">
	<label class="modal-box relative bg-slate-900 border border-slate-800 text-slate-100 rounded-3xl p-8 shadow-2xl max-w-md" for="">
		<div class="text-center">
			<div class="text-5xl mb-4">🎉</div>
			<h3 class="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-3">
				ยินดีด้วย! ผ่านด่านที่ 1 แล้ว
			</h3>
			<p class="text-slate-300 text-sm leading-relaxed mb-6 text-left">
				คุณใช้เวลาไปทั้งสิ้น <span class="font-bold text-emerald-400">{totalTimeSpent}</span><br />
				ตอนนี้คุณสามารถลุยต่อในด่านที่ 2 ได้ทันที!
			</p>
			<div class="flex justify-center gap-3">
				<button
					class="btn bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-slate-950 font-bold border-none px-6 rounded-xl shadow-lg transition-all"
					on:click={() => {
						showR1SuccessModal = false;
						activeTab = 'round2';
					}}
				>
					เริ่มด่านที่ 2 ทันที →
				</button>
			</div>
		</div>
	</label>
</label>

<!-- Round 2 Completion Modal -->
<input type="checkbox" id="r2-success-modal" class="modal-toggle" bind:checked={showR2SuccessModal} />
<!-- svelte-ignore a11y-label-has-associated-control -->
<label class="modal cursor-pointer bg-slate-950/80 backdrop-blur-md" for="r2-success-modal">
	<label class="modal-box relative bg-slate-900 border border-slate-800 text-slate-100 rounded-3xl p-8 shadow-2xl max-w-md" for="">
		<div class="text-center">
			<div class="text-5xl mb-4">🏆</div>
			<h3 class="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent mb-3">
				คุณคือผู้พิชิต TBS 2021!
			</h3>
			<p class="text-slate-300 text-sm leading-relaxed mb-6 text-left">
				สุดยอดมาก! คุณสามารถไขปริศนาของงาน Thailand Board Game Show 2021 ครบทั้งหมดแล้ว!
			</p>
			<div class="flex justify-center">
				<label for="r2-success-modal" class="btn bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold border-none px-8 rounded-xl shadow-lg">
					ปิดหน้าต่าง
				</label>
			</div>
		</div>
	</label>
</label>
