<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';
	export const load: Load = async ({ fetch }) => {
		const res = await fetch(`/api/puzzle/weekly/`);
		const content = await res.json();

		return {
			props: {
				content: content.content || []
			}
		};
	};
</script>

<script lang="ts">
	import { getPuzzleImageURL } from '$lib/supabase';
	import { getNthFridayOfYear } from '$lib/weeklyGuard';
	import { AwardIcon, CheckCircleIcon, CalendarIcon, ImageIcon, ArrowUpIcon, ArrowDownIcon } from 'svelte-feather-icons';

	export let content: any[] = [];

	let years: number[] = [];
	$: {
		const yearSet = new Set<number>();
		content.forEach((c: any) => {
			if (c.year) yearSet.add(Number(c.year));
		});
		years = Array.from(yearSet).sort((a, b) => b - a);
	}

	let selectedYear: number;
	$: if (years.length > 0 && !selectedYear) {
		selectedYear = years[0];
	}

	let sortDirection: 'desc' | 'asc' = 'desc';

	$: filteredPuzzles = content
		.filter((c: any) => Number(c.year) === selectedYear)
		.sort((a: any, b: any) => {
			const diff = Number(b.week) - Number(a.week);
			return sortDirection === 'desc' ? diff : -diff;
		});

	function weekStr(n: number) {
		return ('0' + n).slice(-2);
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

	let imageErrors: Record<string, boolean> = {};
	function handleImageError(id: string) {
		imageErrors = { ...imageErrors, [id]: true };
	}
</script>

<svelte:head>
	<title>Code Breaker | Weekly Puzzles</title>
</svelte:head>

<div class="container mx-auto px-4 py-6 flex flex-col gap-8 max-w-7xl">
	<!-- Header & Year Selector -->
	<div class="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-4">
		<div>
			<h1 class="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
				ปริศนาประจำสัปดาห์ (Weekly Puzzles)
			</h1>
			<p class="text-sm text-slate-400 mt-1">รวบรวมปริศนาประจำสัปดาห์ทั้งหมด เลือกปีเพื่อดูรายการปริศนา</p>
		</div>

		{#if selectedYear}
			<a
				href="/puzzles/weekly/{selectedYear}/leaderboard"
				class="btn btn-outline btn-emerald btn-sm md:btn-md gap-2 self-start md:self-auto text-emerald-400 border-emerald-500/40 hover:bg-emerald-500/20"
			>
				<AwardIcon size="18" />
				ตารางอันดับปี {selectedYear}
			</a>
		{/if}
	</div>

	{#if years.length > 0}
		<!-- Controls Bar: Year Selection & Sort -->
		<div class="flex flex-wrap items-center justify-between gap-4 bg-slate-900/60 p-4 rounded-2xl border border-slate-800">
			<!-- Year Tabs -->
			<div class="flex flex-wrap items-center gap-2">
				<span class="text-xs font-bold text-slate-400 uppercase tracking-wider mr-2">ปี:</span>
				{#each years as yr}
					<button
						on:click={() => (selectedYear = yr)}
						class="btn btn-sm rounded-xl font-bold transition-all {selectedYear === yr
							? 'btn-emerald bg-emerald-500 text-slate-950 border-none shadow-md shadow-emerald-500/20'
							: 'btn-ghost text-slate-400 hover:text-white hover:bg-slate-800'}"
					>
						ปี {yr}
					</button>
				{/each}
			</div>

			<!-- Sort Toggle -->
			<button
				on:click={() => (sortDirection = sortDirection === 'desc' ? 'asc' : 'desc')}
				class="btn btn-ghost btn-xs gap-1.5 font-bold text-slate-400 hover:text-white"
			>
				<span>เรียงตามสัปดาห์ ({sortDirection === 'desc' ? 'ล่าสุดก่อน' : 'เก่าสุดก่อน'})</span>
				{#if sortDirection === 'desc'}
					<ArrowDownIcon size="14" />
				{:else}
					<ArrowUpIcon size="14" />
				{/if}
			</button>
		</div>

		<!-- Puzzle Grid -->
		{#if filteredPuzzles.length > 0}
			<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
				{#each filteredPuzzles as puzzle}
					{@const imgUrl = getPuzzleImageURL('weekly', `${puzzle.year}${weekStr(puzzle.week)}.jpg`)}
					{@const pid = `${puzzle.year}-${puzzle.week}`}

					<a
						href="/puzzles/weekly/{puzzle.year}/{puzzle.week}"
						class="group bg-slate-900 border border-slate-800 hover:border-emerald-500/50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col hover:-translate-y-1.5"
					>
						<!-- Image Preview Header -->
						<div class="relative w-full aspect-square bg-slate-950 overflow-hidden flex items-center justify-center border-b border-slate-800">
							{#if imgUrl && !imageErrors[pid]}
								<img
									src={imgUrl}
									alt="Weekly {puzzle.year} Week {puzzle.week}"
									class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
									on:error={() => handleImageError(pid)}
								/>
							{:else}
								<div class="flex flex-col items-center gap-2 text-slate-600">
									<ImageIcon size="32" />
									<span class="text-xs font-mono">Week {weekStr(puzzle.week)}</span>
								</div>
							{/if}

							<!-- Week Badge Overlay -->
							<div class="absolute top-2 left-2 badge bg-slate-950/80 backdrop-blur-md border-slate-700 text-emerald-400 font-mono text-xs font-bold px-2.5 py-1">
								Week {weekStr(puzzle.week)}
							</div>

							<!-- Solved Indicator -->
							{#if puzzle.hasAnswer}
								<div class="absolute top-2 right-2 badge bg-emerald-500/20 backdrop-blur-md border-emerald-500/40 text-emerald-300 font-bold text-xs px-2 py-0.5 gap-1">
									<CheckCircleIcon size="12" />
									<span>มีเฉลย</span>
								</div>
							{/if}
						</div>

						<!-- Card Details -->
						<div class="p-4 flex-1 flex flex-col justify-between space-y-3">
							<div class="space-y-1">
								<h2 class="text-base font-extrabold text-white group-hover:text-emerald-400 transition-colors line-clamp-2">
									{puzzle.title || `สัปดาห์ที่ ${puzzle.week}`}
								</h2>
								<div class="flex items-center gap-1.5 text-xs text-slate-400">
									<CalendarIcon size="12" />
									<span>{getWeeklyUploadedDate(puzzle.year, puzzle.week)}</span>
								</div>
							</div>

							<div class="flex items-center justify-between text-xs pt-2 border-t border-slate-800/80">
								<span class="text-slate-400 font-medium">ผู้ตอบถูก:</span>
								<span class="font-mono font-bold text-emerald-400">{puzzle.solves || 0} คน</span>
							</div>
						</div>
					</a>
				{/each}
			</div>
		{:else}
			<div class="text-center py-16 bg-slate-900/40 border border-slate-800 rounded-2xl text-slate-400 space-y-2">
				<p class="text-lg font-bold">ไม่พบรายการปริศนาในปี {selectedYear}</p>
			</div>
		{/if}
	{:else}
		<div class="text-center py-16 bg-slate-900/40 border border-slate-800 rounded-2xl text-slate-400 space-y-2">
			<p class="text-lg font-bold">กำลังโหลดรายการปริศนา...</p>
		</div>
	{/if}
</div>