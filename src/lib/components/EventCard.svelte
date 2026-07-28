<script lang="ts">
	import { getImageURL } from '$lib/supabase';
	import { dateToThaiString } from '$lib/utils/date';
	import { CalendarIcon } from 'svelte-feather-icons';

	export let id: string | number;
	export let title: string;
	export let date: string;
	export let image: string;
	export let redirect: string = '';

	$: finalImgUrl = image.startsWith('http') ? image : getImageURL('events', image);
</script>

<a
	href="/events/{redirect || id}"
	class="group flex flex-row items-center bg-slate-900/60 hover:bg-slate-900/90 border border-slate-800 hover:border-emerald-500/50 rounded-2xl overflow-hidden p-3.5 sm:p-5 gap-3.5 sm:gap-5 shadow-lg transition-all duration-300 transform hover:-translate-y-1 block h-full"
>
	<div class="relative w-20 h-20 sm:w-28 sm:h-28 shrink-0 overflow-hidden bg-slate-950 rounded-xl border border-slate-800 p-2 flex items-center justify-center">
		<img
			src={finalImgUrl}
			alt={title}
			class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
		/>
	</div>
	<div class="flex flex-col justify-between flex-1 min-w-0">
		<div>
			<h3 class="text-sm sm:text-lg font-bold text-white group-hover:text-emerald-400 transition-colors line-clamp-1 mb-1.5">
				{title}
			</h3>
			{#if date}
				<div class="flex items-center gap-1.5 text-xs text-slate-400">
					<CalendarIcon size="14" class="text-emerald-400 shrink-0" />
					<span class="line-clamp-1">{dateToThaiString(date)}</span>
				</div>
			{/if}
		</div>
		<div class="mt-2.5 flex items-center justify-end text-xs font-semibold text-emerald-400 group-hover:text-emerald-300">
			<span class="transform group-hover:translate-x-1 transition-transform">→</span>
		</div>
	</div>
</a>
