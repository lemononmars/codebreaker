<script lang="ts">
	import Logo3D from '$lib/components/Logo3D.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import SpellingBeeMiniPlayer from '$lib/components/SpellingBeeMiniPlayer.svelte';
	import {
		puzzleDescriptions,
		shopProductDescriptions,
		shopImgUrlPrefix
	} from '$lib/data/metadata';
	import { onMount } from 'svelte';
	import { getPuzzleImageURL, DEFAULT_WEEKLY_IMAGE_URL } from '$lib/supabase';

	// get 4 random puzzle types
	const randomPuzzleTypes = puzzleDescriptions.sort(() => 0.5 - Math.random()).slice(0, 4);

	let recentWeeklyPuzzles: any[] = [];
	let isLoadingWeekly = true;

	interface SolveRecord {
		name: string;
		puzzle_type: string;
		puzzle_id?: string;
		score?: number;
		created_at?: string;
	}

	let latestSolves: SolveRecord[] = [];
	let isLoadingSolves = true;

	// Mock fallback solves if DB is empty
	const defaultSolves: SolveRecord[] = [
		{ name: 'CipherMaster', puzzle_type: 'weekly', puzzle_id: 'W-28', score: 10 },
		{ name: 'EnigmaHunter', puzzle_type: 'rebus', score: 5 },
		{ name: 'PuzzlePro', puzzle_type: 'spellingbee', score: 8 },
		{ name: 'LogicFan', puzzle_type: 'cryptogram', score: 10 }
	];

	onMount(async () => {
		// Fetch Weekly Puzzles
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

		// Fetch Recent Solves
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
	<!-- Hero Section with Side-by-Side 3D Showcase -->
	<section class="relative pt-4 pb-8 px-4">
		<div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
			
			<!-- Left: Hero Intro & Content -->
			<div class="lg:col-span-7 text-left space-y-6">
				<div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
					<span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
					Interactive Cipher & Logic Platform
				</div>

				<h1 class="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
					Welcome to <br class="hidden sm:inline" />
					<span class="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">Code Breaker</span>
				</h1>

				<p class="text-slate-300 text-base md:text-lg max-w-xl font-light leading-relaxed">
					Solve high-quality puzzles, crack intricate ciphers, compete in logic contests, and generate custom crosswords.
				</p>

				<!-- Hero CTA Buttons -->
				<div class="flex flex-wrap gap-4 pt-2">
					<a
						href="/puzzles"
						class="px-6 py-3 rounded-xl font-bold text-slate-900 bg-emerald-400 hover:bg-emerald-300 shadow-lg shadow-emerald-500/20 transition-all duration-300 transform hover:-translate-y-0.5"
					>
						เริ่มเล่นเลย
					</a>
					<a
						href="/puzzles/weekly"
						class="px-6 py-3 rounded-xl font-semibold text-slate-200 bg-slate-900/80 border border-slate-700/80 hover:bg-slate-800 hover:border-emerald-500/50 backdrop-blur-md transition-all duration-300 transform hover:-translate-y-0.5"
					>
						ปริศนารายสัปดาห์
					</a>
				</div>
			</div>

			<!-- Right: Revamped Metallic 3D Emblem Showcase Card -->
			<div class="lg:col-span-5 relative">
				<div class="relative mx-auto w-full max-w-md h-80 sm:h-96 rounded-3xl bg-slate-950/70 border border-slate-800/90 shadow-2xl overflow-hidden backdrop-blur-xl group hover:border-emerald-500/40 transition-all duration-500">
					<!-- Ambient Gradient Glow -->
					<div class="absolute -top-24 -right-24 w-60 h-60 bg-emerald-500/20 rounded-full blur-3xl group-hover:bg-emerald-500/30 transition-all duration-500"></div>
					<div class="absolute -bottom-24 -left-24 w-60 h-60 bg-cyan-500/20 rounded-full blur-3xl group-hover:bg-cyan-500/30 transition-all duration-500"></div>

					<!-- Header Badge -->
					<div class="absolute top-4 left-4 z-10 flex items-center gap-2 px-3 py-1 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300 text-xs font-mono">
						<span class="w-2 h-2 rounded-full bg-emerald-400"></span>
						CYBER EMBLEM • DRAG TO VIEW
					</div>

					<!-- 3D Canvas Container -->
					<div class="w-full h-full flex items-center justify-center p-2">
						<Logo3D />
					</div>
				</div>
			</div>

		</div>
	</section>

	<!-- Live Recent Solves Bar / Feed -->
	<section class="max-w-7xl mx-auto px-4">
		<div class="bg-slate-950/80 backdrop-blur-xl border border-slate-800/90 rounded-2xl p-4 md:p-6 shadow-xl">
			<div class="flex items-center justify-between mb-4 border-b border-slate-800/70 pb-3">
				<div class="flex items-center gap-2">
					<span class="relative flex h-3 w-3">
						<span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
						<span class="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
					</span>
					<h2 class="text-lg font-bold text-white tracking-wide">ผู้ไขรหัสล่าสุด (Latest Solves)</h2>
				</div>
				<span class="text-xs text-slate-400 font-mono">LIVE ACTIVITY</span>
			</div>

			<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
				{#if isLoadingSolves}
					{#each Array(4) as _}
						<div class="animate-pulse bg-slate-900/60 rounded-xl h-16 border border-slate-800"></div>
					{/each}
				{:else}
					{#each latestSolves as s}
						<div class="flex items-center justify-between p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-emerald-500/30 transition-colors">
							<div class="flex items-center gap-3 overflow-hidden">
								<div class="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold text-sm shrink-0">
									{s.name.charAt(0).toUpperCase()}
								</div>
								<div class="truncate">
									<p class="text-sm font-semibold text-white truncate">{s.name}</p>
									<p class="text-xs text-slate-400 capitalize">{s.puzzle_type} {s.puzzle_id ? `(${s.puzzle_id})` : ''}</p>
								</div>
							</div>
							{#if s.score !== undefined}
								<span class="px-2.5 py-1 text-xs font-mono font-bold rounded-md bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 shrink-0">
									+{s.score} pts
								</span>
							{/if}
						</div>
					{/each}
				{/if}
			</div>
		</div>
	</section>

	<!-- Spelling Bee Daily Player (Placed directly under Latest Solves) -->
	<section class="max-w-7xl mx-auto px-4">
		<SpellingBeeMiniPlayer />
	</section>

	<!-- Weekly Puzzles Section -->
	<section class="max-w-7xl mx-auto px-4">
		<div class="bg-slate-900/40 backdrop-blur-xl border border-slate-800/80 rounded-3xl p-6 md:p-8 shadow-2xl">
			<div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4 border-b border-slate-800/60 pb-4">
				<div>
					<div class="flex items-center gap-2 mb-1">
						<span class="h-2 w-2 rounded-full bg-emerald-400"></span>
						<span class="text-xs uppercase tracking-widest text-emerald-400 font-bold">Featured Challenges</span>
					</div>
					<h2 class="text-3xl font-extrabold text-white tracking-tight">ปริศนารายสัปดาห์</h2>
				</div>
				<a
					href="/puzzles/weekly"
					class="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition-colors group"
				>
					ดูทั้งหมด 
					<span class="transform group-hover:translate-x-1 transition-transform">→</span>
				</a>
			</div>

			<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
				{#if isLoadingWeekly}
					{#each Array(4) as _}
						<div class="animate-pulse bg-slate-800/50 rounded-2xl h-72 border border-slate-800"></div>
					{/each}
				{:else}
					{#each recentWeeklyPuzzles as p}
						<a
							href="/puzzles/weekly/{p.year}/{p.week}"
							class="group relative flex flex-col bg-slate-950/60 border border-slate-800/80 hover:border-emerald-500/50 rounded-2xl overflow-hidden shadow-lg hover:shadow-emerald-500/10 transition-all duration-300 transform hover:-translate-y-1.5"
						>
							<div class="relative w-full h-48 overflow-hidden bg-slate-900">
								<img
									src={getWeeklyPuzzleImage(p.year, p.week)}
									alt="Week {p.week} Puzzle"
									class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
									on:error={(e) => { (e.currentTarget).src = DEFAULT_WEEKLY_IMAGE_URL; }}
								/>
								<div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80"></div>
								<div class="absolute top-3 left-3">
									<span class="px-2.5 py-1 text-xs font-semibold rounded-lg bg-emerald-500/20 backdrop-blur-md text-emerald-300 border border-emerald-500/30">
										Week {p.week} • {p.year}
									</span>
								</div>
							</div>
							<div class="p-5 flex-1 flex flex-col justify-between">
								<h3 class="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors line-clamp-2">
									{p.title || `ปริศนาสัปดาห์ที่ ${p.week}`}
								</h3>
								<div class="mt-4 flex items-center text-xs font-medium text-slate-400 group-hover:text-slate-200">
									<span>เล่นเลย</span>
									<span class="ml-1 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
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
		<div class="bg-slate-900/40 backdrop-blur-xl border border-slate-800/80 rounded-3xl p-6 md:p-8 shadow-2xl">
			<div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4 border-b border-slate-800/60 pb-4">
				<div>
					<div class="flex items-center gap-2 mb-1">
						<span class="h-2 w-2 rounded-full bg-cyan-400"></span>
						<span class="text-xs uppercase tracking-widest text-cyan-400 font-bold">Explore Modes</span>
					</div>
					<h2 class="text-3xl font-extrabold text-white tracking-tight">โหมดเกมแนะนำ</h2>
				</div>
				<a
					href="/puzzles"
					class="inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors group"
				>
					ดูทั้งหมด 
					<span class="transform group-hover:translate-x-1 transition-transform">→</span>
				</a>
			</div>

			<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
				{#each randomPuzzleTypes as p}
					<a
						href="/puzzles/{p.type}"
						class="group flex flex-col items-center text-center bg-slate-950/60 border border-slate-800/80 hover:border-cyan-500/50 rounded-2xl p-6 shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 transform hover:-translate-y-1.5"
					>
						<div class="relative w-28 h-28 mb-4 rounded-2xl bg-slate-900/80 border border-slate-800 p-3 flex items-center justify-center group-hover:border-cyan-500/40 transition-colors">
							<img src={p.icon} alt={p.type} class="w-full h-full object-contain filter drop-shadow-md group-hover:scale-110 transition-transform duration-300" />
						</div>
						<h3 class="text-xl font-bold text-white capitalize group-hover:text-cyan-400 transition-colors mb-2">
							{p.type}
						</h3>
						<p class="text-sm text-slate-400 font-light line-clamp-2">
							{p.description}
						</p>
					</a>
				{/each}
			</div>
		</div>
	</section>

	<!-- Shop Section -->
	<section class="max-w-7xl mx-auto px-4">
		<div class="bg-slate-900/40 backdrop-blur-xl border border-slate-800/80 rounded-3xl p-6 md:p-8 shadow-2xl">
			<div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4 border-b border-slate-800/60 pb-4">
				<div>
					<div class="flex items-center gap-2 mb-1">
						<span class="h-2 w-2 rounded-full bg-teal-400"></span>
						<span class="text-xs uppercase tracking-widest text-teal-400 font-bold">Official Store</span>
					</div>
					<h2 class="text-3xl font-extrabold text-white tracking-tight">ร้านค้าหนังสือ & การ์ดเกม</h2>
				</div>
				<a
					href="/shop"
					class="inline-flex items-center gap-1.5 text-sm font-semibold text-teal-400 hover:text-teal-300 transition-colors group"
				>
					ดูสินค้าทั้งหมด 
					<span class="transform group-hover:translate-x-1 transition-transform">→</span>
				</a>
			</div>

			<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
				{#each shopProductDescriptions as p}
					<a
						href="/shop/{p.url}"
						class="group flex flex-col bg-slate-950/60 border border-slate-800/80 hover:border-teal-500/50 rounded-2xl overflow-hidden shadow-lg hover:shadow-teal-500/10 transition-all duration-300 transform hover:-translate-y-1.5"
					>
						<div class="relative w-full h-52 overflow-hidden bg-slate-900">
							<img
								src={shopImgUrlPrefix + p.imgUrl}
								alt={p.title}
								class="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
							/>
							<div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60"></div>
						</div>
						<div class="p-5 flex-1 flex flex-col justify-between">
							<div>
								<h3 class="text-lg font-bold text-white group-hover:text-teal-400 transition-colors mb-2">
									{p.title}
								</h3>
								<p class="text-sm text-slate-400 font-light line-clamp-2">
									{p.description}
								</p>
							</div>
							<div class="mt-6 flex justify-end">
								<span class="px-4 py-2 text-xs font-bold rounded-lg bg-teal-500/20 text-teal-300 group-hover:bg-teal-400 group-hover:text-slate-950 transition-colors">
									ดูรายละเอียด
								</span>
							</div>
						</div>
					</a>
				{/each}
			</div>
		</div>
	</section>
</div>

<Footer />
