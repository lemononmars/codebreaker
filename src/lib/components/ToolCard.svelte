<script lang="ts">
	export let name: string;
	export let path: string;
	export let description: string;
	export let icon: any;
	export let color: string = 'text-primary';
</script>

<a
	href={path}
	class="card bg-slate-900/60 hover:bg-slate-900/90 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group border border-slate-800 shadow-md block h-full rounded-2xl overflow-hidden"
>
	<!-- Horizontal layout on all screen sizes (icon left, text upper and lower right) -->
	<div class="card-body flex flex-row items-center text-left p-4 sm:p-5 gap-4">
		<div
			class="w-12 h-12 sm:w-14 sm:h-14 shrink-0 rounded-2xl bg-slate-800/80 shadow-inner flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-slate-700/60"
		>
			<svelte:component this={icon} size="24" class="{color}" />
		</div>
		<div class="flex flex-col gap-0.5 flex-1 min-w-0">
			<h3 class="card-title text-base sm:text-lg font-bold text-white group-hover:text-emerald-400 transition-colors line-clamp-1">
				{name}
			</h3>
			<p class="text-xs sm:text-sm text-slate-400 font-light line-clamp-2">{description}</p>
		</div>
	</div>
</a>
