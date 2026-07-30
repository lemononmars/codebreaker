<script lang="ts">
	import Logo3D from '$lib/components/Logo3D.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import SpellingBeeMiniPlayer from '$lib/components/SpellingBeeMiniPlayer.svelte';
	import BlanksMiniPlayer from '$lib/components/BlanksMiniPlayer.svelte';
	import SpellingQuizMiniPlayer from '$lib/components/SpellingQuizMiniPlayer.svelte';
	import ShopCard from '$lib/components/ShopCard.svelte';
	import {
		puzzleDescriptions,
		shopProductDescriptions,
		shopImgUrlPrefix
	} from '$lib/data/metadata';
	import { onMount } from 'svelte';
	import { getPuzzleImageURL } from '$lib/supabase';
	import { CheckCircleIcon, ImageIcon, CalendarIcon } from 'svelte-feather-icons';

	// SVG Icon map matching Puzzles page
	const puzzleSvgIcons: Record<string, string> = {
		rebus: `<svg class="w-10 h-10 text-cyan-400 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/><path d="M16 13.5l2.5-2.5 2.5 2.5"/><circle cx="16" cy="7" r="2"/></svg>`,
		wordsearch: `<svg class="w-10 h-10 text-cyan-400 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="8" y1="8" x2="14" y2="14"/><line x1="14" y1="8" x2="8" y2="14"/></svg>`,
		crossword: `<svg class="w-10 h-10 text-cyan-400 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/><line x1="9" y1="3" x2="9" y2="21"/><line x1="15" y1="3" x2="15" y2="21"/></svg>`,
		alphabet: `<svg class="w-10 h-10 text-cyan-400 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="8" height="8" rx="1"/><rect x="13" y="13" width="8" height="8" rx="1"/><text x="7" y="9" font-size="6" font-family="sans-serif" font-weight="black" text-anchor="middle" fill="currentColor">A</text><text x="17" y="19" font-size="6" font-family="sans-serif" font-weight="black" text-anchor="middle" fill="currentColor">Z</text></svg>`,
		missingvowels: `<svg class="w-10 h-10 text-cyan-400 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="9" x2="20" y2="9"/><line x1="4" y1="15" x2="20" y2="15"/><line x1="10" y1="3" x2="8" y2="21"/><line x1="16" y1="3" x2="14" y2="21"/></svg>`,
		cryptogram: `<svg class="w-10 h-10 text-cyan-400 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`,
		spellingbee: `<svg class="w-10 h-10 text-cyan-400 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>`,
		crossroad: `<svg class="w-10 h-10 text-cyan-400 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20M2 12h20M7 7l10 10M17 7L7 17"/></svg>`,
		blanks: `<svg class="w-10 h-10 text-cyan-400 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>`,
		spellingquiz: `<svg class="w-10 h-10 text-cyan-400 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="9" y1="15" x2="15" y2="15"/></svg>`,
		puzzlehunt: `<svg class="w-10 h-10 text-cyan-400 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>`
	};

	function getPuzzleIconSvg(type: string) {
		return (
			puzzleSvgIcons[type] ||
			`<svg class="w-10 h-10 text-cyan-400 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`
		);
	}

	const randomPuzzleTypes = puzzleDescriptions
		.filter((p) => p.type !== 'adventure')
		.sort(() => 0.5 - Math.random())
		.slice(0, 4);

	let recentWeeklyPuzzles: any[] = [];
	let isLoadingWeekly = true;
	let imageErrors: Record<string, boolean> = {};

	function handleImageError(id: string) {
		imageErrors = { ...imageErrors, [id]: true };
	}

	interface SolveRecord {
		name?: string;
		username?: string;
		puzzle_type?: string;
		puzzle_id?: string;
		created_at?: string;
	}

	let latestSolves: SolveRecord[] = [];
	let isLoadingSolves = true;

	const defaultSolves: SolveRecord[] = [
		{ name: 'CipherMaster', puzzle_type: 'weekly', puzzle_id: 'W-28', created_at: new Date(Date.now() - 5 * 60000).toISOString() },
		{ name: 'EnigmaHunter', puzzle_type: 'rebus', created_at: new Date(Date.now() - 25 * 60000).toISOString() },
		{ name: 'PuzzlePro', puzzle_type: 'spellingbee', created_at: new Date(Date.now() - 2 * 3600000).toISOString() },
		{ name: 'LogicFan', puzzle_type: 'cryptogram', created_at: new Date(Date.now() - 5 * 3600000).toISOString() }
	];

	function timeAgoThai(dateStr?: string) {
		if (!dateStr) return 'เมื่อสักครู่';
		try {
			const diffMs = Date.now() - new Date(dateStr).getTime();
			if (isNaN(diffMs) || diffMs < 0) return 'เมื่อสักครู่';
			const mins = Math.floor(diffMs / 60000);
			if (mins < 1) return 'เมื่อสักครู่';
			if (mins < 60) return `${mins} นาที ที่แล้ว`;
			const hours = Math.floor(mins / 60);
			if (hours < 24) return `${hours} ชั่วโมง ที่แล้ว`;
			const days = Math.floor(hours / 24);
			return `${days} วัน ที่แล้ว`;
		} catch (e) {
			return 'เมื่อสักครู่';
		}
	}

	function scrollToElement(e: MouseEvent, targetId: string) {
		e.preventDefault();
		const el = document.getElementById(targetId);
		if (el) {
			el.scrollIntoView({ behavior: 'smooth' });
		}
	}

	onMount(async () => {
		try {
			const res = await fetch('/api/puzzle/weekly/');
			const data = await res.json();
			if (data.content) {
				recentWeeklyPuzzles = data.content
					.sort((a: any, b: any) => {
						if (a.year !== b.year) return b.year - a.year;
						return b.week - a.week;
					})
					.slice(0, 4);
			}
		} catch (error) {
			console.error('Failed to load weekly puzzles:', error);
		} finally {
			isLoadingWeekly = false;
		}

		try {
			const res = await fetch('/api/solves/recent');
			const data = await res.json();
			if (Array.isArray(data) && data.length > 0) {
				latestSolves = data;
			} else {
				latestSolves = defaultSolves;
			}
		} catch (error) {
			latestSolves = defaultSolves;
		} finally {
			isLoadingSolves = false;
		}
	});

	function getNthFridayOfYear(year: number, week: number): Date {
		const y = Number(year) || 2026;
		const w = Number(week) || 1;
		const jan1 = new Date(y, 0, 1);
		const dayOfWeek = jan1.getDay();
		const daysUntilFirstFriday = (5 - dayOfWeek + 7) % 7;
		const firstFriday = new Date(y, 0, 1 + daysUntilFirstFriday, 18, 0, 0);
		return new Date(firstFriday.getTime() + (w - 1) * 7 * 24 * 3600 * 1000);
	}

	function getWeeklyUploadedDate(year: number, week: number) {
		try {
			const nthFriday = getNthFridayOfYear(year, week);
			return nthFriday.toLocaleDateString('th-TH', {
				year: 'numeric',
				month: 'short',
				day: 'numeric'
			});
		} catch (e) {
			return '';
		}
	}

	function getWeeklyPuzzleImage(year: number, week: number) {
		const weekStr = String(week).padStart(2, '0');
		return getPuzzleImageURL('weekly', `${year}${weekStr}.jpg`);
	}
</script>

<svelte:head>
	<title>Code Breaker | Solve Puzzles, Break Codes</title>
	<meta
		name="description"
		content="Welcome to Code Breaker! Solve a variety of high-quality puzzles, build custom crosswords and word searches, and explore our collection of puzzle tools."
	/>
	<meta property="og:title" content="Code Breaker" />
	<meta
		property="og:description"
		content="Welcome to Code Breaker! Solve a variety of high-quality puzzles, build custom crosswords and word searches, and explore our collection of puzzle tools."
	/>
	<meta property="og:type" content="website" />
	<meta property="og:image" content="/og-main.png" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:image" content="/og-main.png" />
</svelte:head>

<div class="space-y-16 pb-12">
	<!-- Hero Section with Centered 3D Showcase -->
	<section class="relative pt-8 pb-12 px-4 min-h-[380px] sm:min-h-[460px] flex items-center justify-center overflow-hidden text-center">
		<!-- 3D Model Background -->
		<div class="absolute inset-0 z-0 flex items-center justify-center max-w-7xl mx-auto opacity-70 pointer-events-auto">
			<div class="w-full max-w-xs sm:max-w-md lg:max-w-xl h-[320px] sm:h-[420px] mx-auto flex items-center justify-center">
				<Logo3D />
			</div>
		</div>

		<!-- Hero Intro & Content (Centered) -->
		<div class="relative z-10 max-w-4xl mx-auto w-full text-center flex flex-col items-center justify-center space-y-6 pointer-events-auto">
			<h1 class="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
				Welcome to <br class="hidden sm:inline" />
				<span class="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">Code Breaker</span>
			</h1>

			<!-- Hero CTA Buttons: Transparent background, white text, accent border -->
			<div class="flex flex-wrap gap-3 justify-center pt-2">
				<a
					href="#daily-spelling-bee"
					on:click={(e) => scrollToElement(e, 'daily-spelling-bee')}
					class="px-5 py-2.5 rounded-xl font-bold text-white bg-slate-900/60 hover:bg-slate-900/90 border border-amber-500/50 hover:border-amber-400 shadow-lg shadow-amber-500/10 transition-all duration-300 transform hover:-translate-y-0.5 text-xs sm:text-sm flex items-center gap-1.5 backdrop-blur-md"
				>
					<span>เล่นสะกดศัพท์ 🐝</span>
				</a>
				<a
					href="#daily-blanks"
					on:click={(e) => scrollToElement(e, 'daily-blanks')}
					class="px-5 py-2.5 rounded-xl font-bold text-white bg-slate-900/60 hover:bg-slate-900/90 border border-sky-500/50 hover:border-sky-400 shadow-lg shadow-sky-500/10 transition-all duration-300 transform hover:-translate-y-0.5 text-xs sm:text-sm flex items-center gap-1.5 backdrop-blur-md"
				>
					<span>เล่นซ่อนอักษร ✏️</span>
				</a>
				<a
					href="#daily-spelling-quiz"
					on:click={(e) => scrollToElement(e, 'daily-spelling-quiz')}
					class="px-5 py-2.5 rounded-xl font-bold text-white bg-slate-900/60 hover:bg-slate-900/90 border border-teal-500/50 hover:border-teal-400 shadow-lg shadow-teal-500/10 transition-all duration-300 transform hover:-translate-y-0.5 text-xs sm:text-sm flex items-center gap-1.5 backdrop-blur-md"
				>
					<span>เล่นปริศนาสะกดศัพท์ 📝</span>
				</a>
			</div>
		</div>
	</section>

	<!-- Live Recent Weekly Solves Bar -->
	<section class="max-w-7xl mx-auto px-4">
		<div class="bg-slate-950/80 backdrop-blur-xl border border-slate-800/90 rounded-2xl p-4 shadow-xl">
			<div class="flex items-center justify-between mb-3 border-b border-slate-800/70 pb-2.5">
				<div class="flex items-center gap-2">
					<span class="relative flex h-2.5 w-2.5">
						<span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
						<span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
					</span>
					<h2 class="text-sm sm:text-base font-bold text-white tracking-wide">ผู้ไขปริศนารายสัปดาห์ล่าสุด</h2>
				</div>
				<a href="/puzzles/weekly" class="text-xs font-semibold text-emerald-400 hover:text-emerald-300 hover:underline transition-colors">
					ดูปริศนารายสัปดาห์ →
				</a>
			</div>

			<!-- Compact Badges List with Time Difference -->
			<div class="flex flex-wrap items-center gap-2 sm:gap-3">
				{#if isLoadingSolves}
					{#each Array(4) as _}
						<div class="animate-pulse bg-slate-900/60 rounded-full h-8 w-36 border border-slate-800"></div>
					{/each}
				{:else}
					{#each latestSolves as s}
						{@const displayName = s.name || s.username || 'ผู้เล่น'}
						<div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs text-slate-300 shadow-sm hover:border-emerald-500/40 transition-colors">
							<span class="font-bold text-white">{displayName}</span>
							<span class="text-slate-400 font-mono">• {s.puzzle_type || 'weekly'}{s.puzzle_id ? ` (${s.puzzle_id})` : ''}</span>
							<span class="font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md border border-emerald-500/30 text-[10px]">
								{timeAgoThai(s.created_at)}
							</span>
						</div>
					{/each}
				{/if}
			</div>
		</div>
	</section>

	<!-- Interactive Daily Mini Players Section with Anchor IDs -->
	<section class="max-w-7xl mx-auto px-4 space-y-8">
		<div id="daily-spelling-bee" class="scroll-mt-24">
			<SpellingBeeMiniPlayer />
		</div>
		<div id="daily-blanks" class="scroll-mt-24">
			<BlanksMiniPlayer />
		</div>
		<div id="daily-spelling-quiz" class="scroll-mt-24">
			<SpellingQuizMiniPlayer />
		</div>
	</section>

	<!-- Weekly Puzzles Section -->
	<section class="max-w-7xl mx-auto px-4">
		<div class="bg-slate-900/40 backdrop-blur-xl border border-slate-800/80 rounded-3xl p-4 sm:p-8 shadow-2xl">
			<div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-3 border-b border-slate-800/60 pb-4">
				<div>
					<div class="flex items-center gap-2 mb-1">
						<span class="h-2 w-2 rounded-full bg-emerald-400"></span>
						<span class="text-xs uppercase tracking-widest text-emerald-400 font-bold">Weekly Puzzles</span>
					</div>
					<h2 class="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">Weekly Puzzles</h2>
				</div>
				<a
					href="/puzzles/weekly"
					class="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition-colors group"
				>
					ดูทั้งหมด 
					<span class="transform group-hover:translate-x-1 transition-transform">→</span>
				</a>
			</div>

			<div class="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
				{#if isLoadingWeekly}
					{#each Array(4) as _}
						<div class="animate-pulse bg-slate-800/50 rounded-2xl h-56 border border-slate-800"></div>
					{/each}
				{:else}
					{#each recentWeeklyPuzzles as p}
						{@const cardId = `${p.year}-${p.week}`}
						{@const imgUrl = getWeeklyPuzzleImage(p.year, p.week)}
						<a
							href="/puzzles/weekly/{p.year}/{p.week}"
							class="card bg-slate-900/60 text-slate-100 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden border border-slate-800 group flex flex-col justify-between rounded-2xl"
						>
							<div class="relative w-full h-36 sm:h-48 bg-slate-950 flex items-center justify-center overflow-hidden">
								{#if !imageErrors[cardId] && imgUrl}
									<img
										src={imgUrl}
										alt="Week {p.week} Puzzle"
										class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
										on:error={() => handleImageError(cardId)}
									/>
								{:else}
									<div class="flex flex-col items-center justify-center text-center p-4 text-slate-500">
										<ImageIcon size="32" />
										<span class="text-xs mt-1">ไม่มีรูปภาพ</span>
									</div>
								{/if}
								<div class="absolute top-2 right-2 px-2 py-0.5 rounded-lg bg-slate-950/80 backdrop-blur-md text-[10px] sm:text-xs font-extrabold text-emerald-600 border border-emerald-600/40">
									สัปดาห์ที่ {p.week}
								</div>
							</div>
							<div class="card-body p-3 sm:p-5 flex flex-col justify-between gap-2 flex-1">
								<div>
									<h3 class="card-title text-sm sm:text-lg font-bold text-white group-hover:text-emerald-400 transition-colors line-clamp-1">
										{p.title || `ปริศนาสัปดาห์ที่ ${p.week}`}
									</h3>
									<div class="flex items-center gap-1.5 text-xs text-slate-400 mt-1">
										<CalendarIcon size="14" />
										<span>{getWeeklyUploadedDate(p.year, p.week)}</span>
									</div>
								</div>
								<div class="flex items-center justify-between border-t border-slate-800/80 pt-2.5 mt-auto text-xs">
									<div class="flex items-center gap-1.5 font-bold text-emerald-400">
										<CheckCircleIcon size="15" />
										<span>ตอบถูก {p.solves || 0} คน</span>
									</div>
								</div>
							</div>
						</a>
					{/each}
				{/if}
			</div>
		</div>
	</section>

	<!-- Game Categories Section -->
	<section class="max-w-7xl mx-auto px-4">
		<div class="bg-slate-900/40 backdrop-blur-xl border border-slate-800/80 rounded-3xl p-4 sm:p-8 shadow-2xl">
			<div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-3 border-b border-slate-800/60 pb-4">
				<div>
					<div class="flex items-center gap-2 mb-1">
						<span class="h-2 w-2 rounded-full bg-cyan-400"></span>
						<span class="text-xs uppercase tracking-widest text-cyan-400 font-bold">Explore Modes</span>
					</div>
					<h2 class="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">โหมดเกมแนะนำ</h2>
				</div>
				<a
					href="/puzzles"
					class="inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors group"
				>
					ดูทั้งหมด 
					<span class="transform group-hover:translate-x-1 transition-transform">→</span>
				</a>
			</div>

			<div class="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
				{#each randomPuzzleTypes as p}
					<a
						href="/puzzles/{p.type}"
						class="group flex flex-col items-center text-center bg-slate-950/60 border border-slate-800/80 hover:border-cyan-500/50 rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 transform hover:-translate-y-1"
					>
						<div class="relative w-16 h-16 sm:w-20 sm:h-20 mb-3 rounded-2xl bg-slate-900/80 border border-slate-800 p-2.5 flex items-center justify-center group-hover:border-cyan-500/40 transition-colors shadow-inner">
							{@html getPuzzleIconSvg(p.type)}
						</div>
						<h3 class="text-base sm:text-xl font-bold text-white capitalize group-hover:text-cyan-400 transition-colors mb-1">
							{p.type}
						</h3>
						<p class="text-xs sm:text-sm text-slate-400 font-light line-clamp-2">
							{p.description}
						</p>
					</a>
				{/each}
			</div>
		</div>
	</section>

	<!-- Shop Section -->
	<section class="max-w-7xl mx-auto px-4">
		<div class="bg-slate-900/40 backdrop-blur-xl border border-slate-800/80 rounded-3xl p-4 sm:p-8 shadow-2xl">
			<div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-3 border-b border-slate-800/60 pb-4">
				<div>
					<div class="flex items-center gap-2 mb-1">
						<span class="h-2 w-2 rounded-full bg-teal-400"></span>
						<span class="text-xs uppercase tracking-widest text-teal-400 font-bold">Official Store</span>
					</div>
					<h2 class="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">ร้านค้าหนังสือ & การ์ดเกม</h2>
				</div>
				<a
					href="/shop"
					class="inline-flex items-center gap-1.5 text-sm font-semibold text-teal-400 hover:text-teal-300 transition-colors group"
				>
					ดูสินค้าทั้งหมด 
					<span class="transform group-hover:translate-x-1 transition-transform">→</span>
				</a>
			</div>

			<div class="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
				{#each shopProductDescriptions as p}
					<ShopCard
						url={p.url}
						title={p.title}
						description={p.description}
						imgUrl={p.imgUrl}
						imgUrlPrefix={shopImgUrlPrefix}
					/>
				{/each}
			</div>
		</div>
	</section>
</div>

<Footer />
