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

	// Returns the nth Friday of the year at 4:30pm UTC+7 (= 11:30 UTC)
	function getNthFridayOfYear(year: number, week: number): Date {
		const y = Number(year) || 2026;
		const w = Number(week) || 1;
		// Find Jan 1 in UTC
		const jan1Utc = Date.UTC(y, 0, 1);
		const dayOfWeek = new Date(jan1Utc).getUTCDay();
		const daysUntilFirstFriday = (5 - dayOfWeek + 7) % 7;
		// 4:30pm UTC+7 = 11:30 UTC
		const firstFridayUtc = jan1Utc + daysUntilFirstFriday * 86400000 + 11.5 * 3600000;
		return new Date(firstFridayUtc + (w - 1) * 7 * 86400000);
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

	<!-- Year & Sort Filter Bar -->
	<div class="flex flex-wrap items-center justify-between gap-4 bg-slate-900/60 p-4 rounded-2xl border border-slate-800">
		{#if years.length > 0}
			<div class="flex flex-wrap gap-2 items-center">
				<span class="text-sm font-semibold text-slate-300 mr-2">เลือกปี:</span>
				{#each years as y}
					<button
						class="btn btn-sm transition-all duration-200 {selectedYear === y ? 'bg-emerald-500 text-slate-950 font-bold shadow-lg scale-105' : 'bg-slate-950 text-slate-300 border-slate-800 hover:border-emerald-500/40'}"
						style={selectedYear === y ? 'color: #0f172a;' : ''}
						on:click={() => (selectedYear = y)}
					>
						ปี {y}
					</button>
				{/each}
			</div>
		{/if}

		<!-- Sort direction filter button -->
		<button
			on:click={() => (sortDirection = sortDirection === 'desc' ? 'asc' : 'desc')}
			class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs font-bold text-slate-300 hover:border-emerald-500/40 transition-all"
		>
			<span>เรียงตามวันที่: {sortDirection === 'desc' ? 'ล่าสุดก่อน (Desc)' : 'เก่าสุดก่อน (Asc)'}</span>
			{#if sortDirection === 'desc'}
				<ArrowDownIcon size="16" class="text-emerald-400" />
			{:else}
				<ArrowUpIcon size="16" class="text-emerald-400" />
			{/if}
		</button>
	</div>

	<!-- Puzzles Grid Cards -->
	{#if filteredPuzzles.length > 0}
		<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
			{#each filteredPuzzles as p (p.year + '-' + p.week)}
				{@const cardId = `${p.year}-${p.week}`}
				{@const imgFilename = `${p.year}${weekStr(p.week)}.jpg`}
				{@const imgUrl = getPuzzleImageURL('weekly', imgFilename)}
				
				<a
					href="/puzzles/weekly/{p.year}/{p.week}"
					class="card bg-slate-900/60 text-slate-100 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden border border-slate-800 group flex flex-col justify-between rounded-2xl"
				>
					<!-- Thumbnail Container -->
					<div class="relative w-full h-36 sm:h-48 bg-slate-950 flex items-center justify-center overflow-hidden">
						{#if !imageErrors[cardId] && imgUrl}
							<img
								src={imgUrl}
								alt="สัปดาห์ที่ {p.week}"
								class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
								on:error={() => handleImageError(cardId)}
							/>
						{:else}
							<div class="flex flex-col items-center justify-center text-center p-4 text-slate-500">
								<ImageIcon size="32" />
								<span class="text-xs mt-1">ไม่มีรูปภาพ</span>
							</div>
						{/if}

						<div class="absolute top-2 right-2 px-2.5 py-1 rounded-lg bg-slate-950/80 backdrop-blur-md text-[10px] sm:text-xs font-extrabold text-emerald-600 border border-emerald-600/40">
							สัปดาห์ที่ {p.week}
						</div>
					</div>

					<!-- Card Body -->
					<div class="card-body p-3 sm:p-5 flex flex-col justify-between gap-2.5 flex-1">
						<div>
							<h2 class="card-title text-sm sm:text-lg font-bold text-white group-hover:text-emerald-400 transition-colors line-clamp-1">
								{p.title ? p.title : `ปริศนาสัปดาห์ที่ ${p.week}`}
							</h2>
							
							<div class="flex items-center gap-1.5 text-xs text-slate-400 mt-1">
								<CalendarIcon size="14" />
								<span>{getWeeklyUploadedDate(p.year, p.week)}</span>
							</div>
						</div>

						<!-- Card Footer / Stats -->
						<div class="flex items-center justify-between border-t border-slate-800/80 pt-2.5 mt-auto text-xs">
							<a
								href="/puzzles/weekly/{p.year}/{p.week}/leaderboard"
								on:click|stopPropagation
								class="flex items-center gap-1.5 font-bold text-emerald-400 hover:text-emerald-300 hover:underline transition-colors z-10"
								title="ดูตารางอันดับข้อนี้"
							>
								<CheckCircleIcon size="15" />
								<span>ตอบถูก {p.solves || 0} คน</span>
							</a>

							{#if !p.hasAnswer}
								<span class="px-2 py-0.5 rounded-md bg-amber-500/20 text-amber-300 border border-amber-500/30 text-[10px] font-semibold">
									ยังไม่ออกเฉลย
								</span>
							{/if}
						</div>
					</div>
				</a>
			{/each}
		</div>
	{:else}
		<div class="text-center py-12 text-slate-400">
			<p>ไม่พบข้อมูลปริศนาสำหรับปีนี้</p>
		</div>
	{/if}
</div>