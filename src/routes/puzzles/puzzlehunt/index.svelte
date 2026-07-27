<script context="module" lang="ts">
	import { puzzleHunts as defaultPuzzleHunts } from '$lib/data/puzzles/puzzlehunt';
	import type { Load } from '@sveltejs/kit';

	export const load: Load = async ({ fetch }) => {
		try {
			const res = await fetch('/puzzles/puzzlehunt.json');
			if (res.ok) {
				const data = await res.json();
				if (data && data.puzzleHunts) {
					return {
						props: {
							puzzleHunts: data.puzzleHunts
						}
					};
				}
			}
		} catch (e) {
			// Fallback
		}

		return {
			props: {
				puzzleHunts: defaultPuzzleHunts
			}
		};
	};
</script>

<script lang="ts">
	import { dateToThaiString } from '$lib/utils/date';
	import type { IPuzzleHunt } from '$lib/interfaces';
	import { CalendarIcon, LayersIcon } from 'svelte-feather-icons';

	export let puzzleHunts: IPuzzleHunt[] = defaultPuzzleHunts;

	function getHuntIcon(title: string) {
		const t = (title || '').toLowerCase();
		if (t.includes('night')) {
			return `<svg class="w-10 h-10 text-primary group-hover:text-secondary transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
				<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
				<path d="M15 5l.5 1 1 .5-1 .5-.5 1-.5-1-1-.5 1-.5z"></path>
			</svg>`;
		}
		if (t.includes('gadget')) {
			return `<svg class="w-10 h-10 text-primary group-hover:text-secondary transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
				<rect x="4" y="4" width="16" height="16" rx="2"></rect>
				<rect x="9" y="9" width="6" height="6"></rect>
				<line x1="9" y1="1" x2="9" y2="4"></line>
				<line x1="15" y1="1" x2="15" y2="4"></line>
				<line x1="9" y1="20" x2="9" y2="23"></line>
				<line x1="15" y1="20" x2="15" y2="23"></line>
				<line x1="20" y1="9" x2="23" y2="9"></line>
				<line x1="20" y1="15" x2="23" y2="15"></line>
				<line x1="1" y1="9" x2="4" y2="9"></line>
				<line x1="1" y1="15" x2="4" y2="15"></line>
			</svg>`;
		}
		if (t.includes('secret') || t.includes('agent')) {
			return `<svg class="w-10 h-10 text-primary group-hover:text-secondary transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
				<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
				<circle cx="12" cy="11" r="3"></circle>
			</svg>`;
		}
		if (t.includes('halloween') || t.includes('04')) {
			return `<svg class="w-10 h-10 text-primary group-hover:text-secondary transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
				<path d="M12 2v3"></path>
				<path d="M12 5c-4.5 0-8 3-8 7.5S7.5 20 12 20s8-3 8-7.5S16.5 5 12 5z"></path>
				<path d="M12 5c-2 0-3.5 3-3.5 7.5s1.5 7.5 3.5 7.5 3.5-3 3.5-7.5S14 5 12 5z"></path>
				<polygon points="8.5,10.5 10,12 8.5,12" fill="currentColor"></polygon>
				<polygon points="15.5,10.5 14,12 15.5,12" fill="currentColor"></polygon>
				<path d="M8.5 16l1.5-1.5 1 1 1-1 1.5 1.5"></path>
			</svg>`;
		}
		if (t.includes('time') || t.includes('travel')) {
			return `<svg class="w-10 h-10 text-primary group-hover:text-secondary transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
				<circle cx="12" cy="12" r="10"></circle>
				<polyline points="12 6 12 12 16 14"></polyline>
				<path d="M12 2v2M12 20v2M2 12h2M20 12h2"></path>
			</svg>`;
		}
		return `<svg class="w-10 h-10 text-primary group-hover:text-secondary transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
			<circle cx="12" cy="12" r="10"></circle>
			<polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
		</svg>`;
	}
</script>

<svelte:head>
	<title>Code Breaker | Puzzle Hunts</title>
</svelte:head>

<div class="container mx-auto px-4 py-6 flex flex-col gap-8">
	<!-- Page Header -->
	<div class="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-base-300/30 pb-4">
		<div>
			<h1 class="text-3xl md:text-4xl font-bold tracking-tight text-primary">
				Puzzle Hunts
			</h1>
			<p class="text-sm opacity-70 mt-1">ชุดปริศนาต่อเนื่องที่รวมมิติมินิเกมและปริศนาหลายด่าน</p>
		</div>
	</div>

	<!-- 2-Column Grid -->
	<div class="grid md:grid-cols-2 gap-6">
		{#each puzzleHunts || [] as ph (ph.id)}
			<a
				href="/puzzles/puzzlehunt/{ph.id}"
				class="card bg-neutral text-neutral-content shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 block h-full group"
			>
				<div class="card-body flex flex-col items-center text-center gap-4 p-6">
					<div class="w-20 h-20 rounded-2xl bg-base-300/40 text-primary flex items-center justify-center p-3 shadow-inner border border-base-300/60 group-hover:bg-primary/10 group-hover:text-secondary group-hover:border-secondary/30 transition-all duration-300">
						{@html getHuntIcon(ph.title)}
					</div>

					<div class="flex flex-col gap-2 flex-1 items-center">
						<h2 class="card-title text-2xl font-bold tracking-wide text-primary justify-center text-center group-hover:text-secondary transition-colors duration-200">
							{ph.title}
						</h2>

						<div class="flex flex-wrap items-center justify-center gap-4 text-sm opacity-80 mt-1">
							{#if ph.date}
								<div class="flex items-center gap-1.5">
									<CalendarIcon size="16" />
									<span>{dateToThaiString(ph.date)}</span>
								</div>
							{/if}

							{#if ph.puzzles}
								<div class="flex items-center gap-1.5 text-secondary font-medium">
									<LayersIcon size="16" />
									<span>{ph.puzzles.length} ปริศนา</span>
								</div>
							{/if}
						</div>

						{#if ph.tags && ph.tags.length > 0}
							<div class="flex flex-wrap gap-1.5 justify-center mt-2">
								{#each ph.tags as t}
									<span class="badge badge-outline text-xs opacity-75">{t}</span>
								{/each}
							</div>
						{/if}
					</div>
				</div>
			</a>
		{/each}
	</div>
</div>
