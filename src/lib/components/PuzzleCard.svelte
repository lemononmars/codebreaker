<script lang="ts">
	export let type: string;
	export let title: string = '';
	export let description: string = '';
	export let icon: string = '';
	export let href: string = '';
	export const colorClass: string = 'text-emerald-400';

	$: targetHref = href || `/puzzles/${type}`;
	$: displayTitle = title || (type === 'spellingquiz' ? 'Spelling Quiz' : type === 'thaimapquiz' ? 'Thai Map Quiz' : type === 'crossroad' ? 'Crossroad (ศัพท์สี่ทิศ)' : type);
</script>

<a
	href={targetHref}
	class="card bg-slate-900/60 hover:bg-slate-900/90 transition-all duration-300 hover:-translate-y-1 block h-full group border border-slate-800 shadow-md rounded-2xl overflow-hidden"
>
	<div class="card-body flex flex-row items-center text-left gap-4 p-4 sm:p-6">
		{#if icon}
			<div class="w-12 h-12 sm:w-16 sm:h-16 shrink-0 rounded-2xl bg-slate-800/80 flex items-center justify-center p-2 sm:p-3 shadow-inner border border-slate-700/60 group-hover:scale-110 transition-transform">
				{@html icon}
			</div>
		{/if}
		<div class="flex flex-col gap-1 flex-1 min-w-0">
			<h3 class="card-title text-base sm:text-xl font-bold capitalize text-white group-hover:text-emerald-400 transition-colors line-clamp-1">
				{displayTitle}
			</h3>
			{#if description}
				<p class="text-xs sm:text-sm text-slate-400 font-light line-clamp-2">{description}</p>
			{/if}
		</div>
	</div>
</a>
