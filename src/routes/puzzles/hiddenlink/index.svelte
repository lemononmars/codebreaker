<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';
	import { staticHiddenLinkPuzzles } from '$lib/data/puzzles/hiddenlink';

	export const load: Load = async () => {
		return {
			props: {
				puzzles: staticHiddenLinkPuzzles
			}
		};
	};
</script>

<script lang="ts">
	import { dateToThaiString } from '$lib/utils/date';
	import type { IHiddenLink } from '$lib/data/puzzles/hiddenlink';
	export let puzzles: IHiddenLink[] = [];
</script>

<svelte:head>
	<title>Code Breaker | Hidden Link</title>
</svelte:head>

<div class="container mx-auto px-4 py-6 flex flex-col gap-6 max-w-5xl">
	<div class="text-center mb-2">
		<h1 class="text-3xl lg:text-4xl font-extrabold tracking-tight text-white">Hidden Link</h1>
		<p class="text-xs sm:text-sm text-slate-400 mt-1">ถอดรหัสจุดร่วมและคำเชื่อมโยงจาก 4 คำที่กำหนด</p>
	</div>

	<div class="bg-slate-900/60 backdrop-blur-xl border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
		<div class="overflow-x-auto">
			<table class="table w-full text-slate-200">
				<thead class="bg-slate-950/80 text-slate-400 border-b border-slate-800 text-xs font-bold uppercase">
					<tr>
						<th class="py-3.5 px-4 text-left">ชื่อ</th>
						<th class="py-3.5 px-4 text-left">วันที่</th>
						<th class="py-3.5 px-4 text-left">ผู้แต่ง</th>
					</tr>
				</thead>
				<tbody class="divide-y divide-slate-800/60 text-sm">
					{#each puzzles as p}
						<tr class="hover:bg-slate-800/40 transition-colors">
							<td class="py-3.5 px-4 font-bold text-emerald-400 hover:text-emerald-300">
								<a href="/puzzles/hiddenlink/{p.id}">
									{p.title}
								</a>
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
