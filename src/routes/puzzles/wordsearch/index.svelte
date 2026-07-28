<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';

	export const load: Load = async ({ fetch }) => {
		try {
			const res = await fetch('/api/puzzle/wordsearch');
			const data = await res.json();

			const wordsearches = (Array.isArray(data) ? data : [])
				.filter((d) => d.is_public !== false)
				.map((d) => ({
					...d,
					type: 'wordsearch',
					date: d.created_at,
					difficulty: d.clues?.difficulty || 1
				}));

			return {
				props: { wordsearches }
			};
		} catch (e) {
			return { props: { wordsearches: [] } };
		}
	}
</script>

<script lang="ts">
	import { dateToThaiString } from '$lib/utils/date';
	export let wordsearches: any[] = [];
</script>

<svelte:head>
	<title>Code Breaker | Word Search Puzzles</title>
</svelte:head>

<div class="container mx-auto px-4 py-6 flex flex-col gap-6 max-w-5xl">
	<div class="text-center mb-2">
		<h1 class="text-3xl lg:text-4xl font-extrabold tracking-tight text-white">ปริศนาหาคำศัพท์ (Word Search)</h1>
		<p class="text-xs sm:text-sm text-slate-400 mt-1">รายการปริศนาหาคำศัพท์ทั้งหมด</p>
	</div>

	<div class="bg-slate-900/60 backdrop-blur-xl border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
		<div class="overflow-x-auto">
			<table class="table w-full text-slate-200">
				<thead class="bg-slate-950/80 text-slate-400 border-b border-slate-800 text-xs font-bold uppercase">
					<tr>
						<th class="py-3.5 px-4 text-left">ชื่อ</th>
						<th class="py-3.5 px-4 text-left">ระดับความยาก</th>
						<th class="py-3.5 px-4 text-left">วันที่</th>
						<th class="py-3.5 px-4 text-left">ผู้แต่ง</th>
					</tr>
				</thead>
				<tbody class="divide-y divide-slate-800/60 text-sm">
					{#each wordsearches as p}
						<tr class="hover:bg-slate-800/40 transition-colors">
							<td class="py-3.5 px-4 font-bold text-emerald-400 hover:text-emerald-300">
								<a href="/puzzles/wordsearch/{p.uid}">
									{p.title}
								</a>
							</td>
							<td class="py-3.5 px-4">
								{#if p.difficulty === 1}
									<span class="px-2 py-0.5 text-[10px] font-bold rounded-md bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">ง่าย</span>
								{:else if p.difficulty === 2}
									<span class="px-2 py-0.5 text-[10px] font-bold rounded-md bg-amber-500/20 text-amber-300 border border-amber-500/30">ปานกลาง</span>
								{:else}
									<span class="px-2 py-0.5 text-[10px] font-bold rounded-md bg-rose-500/20 text-rose-300 border border-rose-500/30">ยาก</span>
								{/if}
							</td>
							<td class="py-3.5 px-4 text-slate-400 font-mono text-xs">{dateToThaiString(p.date)}</td>
							<td class="py-3.5 px-4 text-slate-300">{p.author || 'ไม่มี'}</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	</div>
</div>
