<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';
	export const load: Load = async ({ fetch }) => {
		const res = await fetch('/api/puzzle/rebus');
		const puzzles = await res.json();
		return {
			props: {
				puzzles: Array.isArray(puzzles) ? puzzles : []
			}
		};
	};
</script>

<script lang="ts">
	import { getPuzzleImageURL } from '$lib/supabase';
	import type { IRebus } from '$lib/interfaces';
	export let puzzles: IRebus[] = [];
</script>

<svelte:head>
	<title>Code Breaker | Rebus</title>
	<meta name="description" content="ทายคำจากภาพแทนคำ (Rebus Puzzles) โดย Codebreaker Thailand" />
</svelte:head>

<div class="container mx-auto px-4 py-6 flex flex-col gap-6 max-w-6xl select-none">
	<div class="text-center mb-2">
		<h1 class="text-3xl lg:text-4xl font-extrabold tracking-tight text-white">Rebus</h1>
		<p class="text-xs sm:text-sm text-slate-400 mt-1">ทายคำจากภาพแทนคำ ฝึกไหวพริบและความคิดสร้างสรรค์</p>
	</div>

	<!-- Rebus Cards Grid with Image Thumbnails -->
	<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
		{#each puzzles as p}
			{@const imgFilename = 'rebus' + ('0' + p.id).slice(-2) + '.png'}
			<a
				href="/puzzles/rebus/{p.id}"
				class="bg-slate-900 border border-slate-800 hover:border-emerald-500/50 rounded-3xl overflow-hidden shadow-xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl group"
			>
				<!-- Card Top: Rebus Image Thumbnail Preview -->
				<div class="relative w-full h-44 bg-slate-950 flex items-center justify-center p-3 overflow-hidden border-b border-slate-800/80">
					<img
						src={getPuzzleImageURL('rebus', imgFilename)}
						alt={p.title}
						on:error={(e) => {
							e.currentTarget.style.display = 'none';
						}}
						class="w-full h-full object-contain mx-auto group-hover:scale-105 transition-transform duration-300"
					/>
				</div>

				<!-- Card Content -->
				<div class="p-4 flex-1 flex flex-col justify-between">
					<div class="space-y-1">
						<h3 class="text-base font-bold text-white group-hover:text-emerald-400 transition-colors">
							{p.title}
						</h3>
						{#if p.author}
							<p class="text-xs text-slate-400">ผู้แต่ง: {p.author}</p>
						{/if}
					</div>
				</div>
			</a>
		{/each}
	</div>
</div>
