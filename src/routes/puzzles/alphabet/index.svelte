<script lang="ts">
	import { dateToThaiString } from '$lib/utils/date';
	import type { IAlphabet } from '$lib/interfaces';
	export let puzzles: IAlphabet[] = [];
</script>

<svelte:head>
	<title>Code Breaker | Alphabet</title>
</svelte:head>

<div class="container mx-auto px-4 py-6 flex flex-col gap-6 max-w-5xl">
	<div class="flex flex-col sm:flex-row justify-between items-center gap-4 border-b border-slate-800 pb-4">
		<div>
			<h1 class="text-3xl lg:text-4xl font-extrabold tracking-tight text-white">Alphabet</h1>
			<p class="text-xs sm:text-sm text-slate-400 mt-1">ทายคำจากคำใบ้ โดยเปิดตัวอักษรให้น้อยที่สุด</p>
		</div>
		<a href="/tools/alphabet" class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs shadow-md transition-all">
			<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
			</svg>
			สร้างปริศนาใหม่
		</a>
	</div>

	<div class="bg-slate-900/60 backdrop-blur-xl border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
		<div class="overflow-x-auto">
			<table class="table w-full text-slate-200">
				<thead class="bg-slate-950/80 text-slate-400 border-b border-slate-800 text-xs font-bold uppercase">
					<tr>
						<th class="py-3.5 px-4 text-left">ชื่อ</th>
						<th class="py-3.5 px-4 text-left">วันที่</th>
						<th class="py-3.5 px-4 text-left">ผู้แต่ง</th>
						<th class="py-3.5 px-4 text-left">แท็ก</th>
					</tr>
				</thead>
				<tbody class="divide-y divide-slate-800/60 text-sm">
					{#each puzzles as p}
						<tr class="hover:bg-slate-800/40 transition-colors">
							<td class="py-3.5 px-4 font-bold text-emerald-400 hover:text-emerald-300">
								<a href="/puzzles/alphabet/{p.id}">
									{p.title}
								</a>
							</td>
							<td class="py-3.5 px-4 text-slate-400 font-mono text-xs">{dateToThaiString(p.date)}</td>
							<td class="py-3.5 px-4 text-slate-300">{p.author || 'ไม่มี'}</td>
							<td class="py-3.5 px-4">
								<div class="flex flex-wrap gap-1">
									{#each p.tags || [] as t}
										<span class="px-2 py-0.5 text-[10px] rounded-md bg-slate-950 text-slate-300 border border-slate-800 font-mono">
											{t}
										</span>
									{/each}
								</div>
							</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	</div>
</div>
