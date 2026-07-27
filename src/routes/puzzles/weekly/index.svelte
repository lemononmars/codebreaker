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
	import { AwardIcon, CheckCircleIcon, CalendarIcon, ImageIcon } from 'svelte-feather-icons';

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

	$: filteredPuzzles = content
		.filter((c: any) => Number(c.year) === selectedYear)
		.sort((a: any, b: any) => Number(b.week) - Number(a.week));

	function weekStr(n: number) {
		return ('0' + n).slice(-2);
	}

	function formatDate(dateStr: string) {
		if (!dateStr) return '';
		try {
			const d = new Date(dateStr);
			return d.toLocaleDateString('th-TH', {
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
		imageErrors[id] = true;
		imageErrors = imageErrors;
	}
</script>

<svelte:head>
	<title>Code Breaker | Weekly Puzzles</title>
</svelte:head>

<div class="container mx-auto px-4 py-6 flex flex-col gap-8">
	<!-- Header & Year Selector -->
	<div class="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-base-300/30 pb-4">
		<div>
			<h1 class="text-3xl md:text-4xl font-bold tracking-tight text-primary">
				ปริศนาประจำสัปดาห์ (Weekly Puzzles)
			</h1>
			<p class="text-sm opacity-70 mt-1">รวบรวมปริศนาประจำสัปดาห์ทั้งหมด เลือกปีเพื่อดูรายการปริศนา</p>
		</div>

		{#if selectedYear}
			<a
				href="/puzzles/weekly/{selectedYear}/leaderboard"
				class="btn btn-outline btn-primary btn-sm md:btn-md gap-2 self-start md:self-auto"
			>
				<AwardIcon size="18" />
				ตารางอันดับปี {selectedYear}
			</a>
		{/if}
	</div>

	<!-- Year Filter Tabs -->
	{#if years.length > 0}
		<div class="flex flex-wrap gap-2 items-center">
			<span class="text-sm font-semibold opacity-70 mr-2">เลือกปี:</span>
			{#each years as y}
				<button
					class="btn btn-sm md:btn-md transition-all duration-200 {selectedYear === y ? 'btn-primary shadow-lg scale-105' : 'btn-ghost bg-base-200 hover:bg-base-300'}"
					on:click={() => (selectedYear = y)}
				>
					ปี {y}
				</button>
			{/each}
		</div>
	{/if}

	<!-- Puzzles Grid Cards -->
	{#if filteredPuzzles.length > 0}
		<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
			{#each filteredPuzzles as p (p.year + '-' + p.week)}
				{@const cardId = `${p.year}-${p.week}`}
				{@const imgFilename = `${p.year}${weekStr(p.week)}.jpg`}
				{@const imgUrl = getPuzzleImageURL('weekly', imgFilename)}
				
				<a
					href="/puzzles/weekly/{p.year}/{p.week}"
					class="card bg-neutral text-neutral-content shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden border border-base-300/20 group flex flex-col justify-between"
				>
					<!-- Thumbnail Container -->
					<div class="relative w-full h-48 bg-base-300/30 flex items-center justify-center overflow-hidden">
						{#if !imageErrors[cardId] && imgUrl}
							<img
								src={imgUrl}
								alt="สัปดาห์ที่ {p.week}"
								class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
								on:error={() => handleImageError(cardId)}
							/>
						{:else}
							<div class="flex flex-col items-center justify-center text-center p-4 opacity-40">
								<ImageIcon size="36" />
								<span class="text-xs mt-2">ไม่มีรูปภาพ</span>
							</div>
						{/if}

						<div class="absolute top-2 right-2 badge badge-neutral/80 backdrop-blur-md text-xs font-bold px-2.5 py-1">
							สัปดาห์ที่ {p.week}
						</div>
					</div>

					<!-- Card Body -->
					<div class="card-body p-4 flex flex-col justify-between gap-3 flex-1">
						<div>
							<h2 class="card-title text-lg font-bold text-primary line-clamp-1">
								{p.title ? p.title : `ปริศนาสัปดาห์ที่ ${p.week}`}
							</h2>
							
							{#if p.created_at}
								<div class="flex items-center gap-1.5 text-xs opacity-60 mt-1">
									<CalendarIcon size="14" />
									<span>{formatDate(p.created_at)}</span>
								</div>
							{/if}
						</div>

						<!-- Card Footer / Stats -->
						<div class="flex items-center justify-between border-t border-base-300/20 pt-3 mt-auto text-xs">
							<div class="flex items-center gap-1.5 font-medium text-secondary">
								<CheckCircleIcon size="15" />
								<span>{p.solves || 0} คนตอบได้</span>
							</div>

							{#if !p.hasAnswer}
								<span class="badge badge-warning badge-outline text-[10px]">ยังไม่ออกเฉลย</span>
							{/if}
						</div>
					</div>
				</a>
			{/each}
		</div>
	{:else}
		<div class="text-center py-12 opacity-60">
			<p>ไม่พบข้อมูลปริศนาสำหรับปีนี้</p>
		</div>
	{/if}
</div>