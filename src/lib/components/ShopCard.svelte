<script lang="ts">
	export let url: string;
	export let title: string;
	export let description: string;
	export let imgUrl: string;
	export let imgUrlPrefix: string = 'https://raw.githubusercontent.com/lemononmars/codebreaker/main/src/lib/images/product/';
</script>

<a
	href="/shop/{url}"
	class="group flex flex-col bg-slate-900/60 hover:bg-slate-900/90 border border-slate-800 hover:border-teal-500/50 rounded-2xl overflow-hidden shadow-lg transition-all duration-300 transform hover:-translate-y-1 h-full"
>
	<div class="relative w-full h-48 sm:h-56 shrink-0 overflow-hidden bg-slate-950 border-b border-slate-800">
		<img
			src={imgUrl.startsWith('http') ? imgUrl : imgUrlPrefix + imgUrl}
			alt={title}
			class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
		/>
	</div>
	<div class="flex flex-col justify-between flex-1 p-4 sm:p-5 gap-3">
		<div>
			<h3 class="text-base sm:text-lg font-bold text-white group-hover:text-teal-400 transition-colors line-clamp-1 mb-1">
				{title}
			</h3>
			<p class="text-xs sm:text-sm text-slate-400 font-light line-clamp-2">
				{description}
			</p>
		</div>
		<div class="mt-auto pt-2 flex items-center justify-end text-xs font-semibold text-teal-400 group-hover:text-teal-300">
			<span>ดูรายละเอียด</span>
			<span class="ml-1 transform group-hover:translate-x-1 transition-transform">→</span>
		</div>
	</div>
</a>
