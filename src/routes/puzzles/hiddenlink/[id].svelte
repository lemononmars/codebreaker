<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';
	import { staticHiddenLinkPuzzles } from '$lib/data/puzzles/hiddenlink';

	export const load: Load = async ({ params }) => {
		const id = Number(params.id);
		const content = staticHiddenLinkPuzzles.find((p) => p.id === id) || null;

		return {
			props: {
				content,
				id
			}
		};
	};
</script>

<script lang="ts">
	import type { IHiddenLink } from '$lib/data/puzzles/hiddenlink';
	import { ChevronLeftIcon, ChevronRightIcon } from 'svelte-feather-icons';
	import { dateToThaiString } from '$lib/utils/date';

	export let content: IHiddenLink | null, id: number;

	if (content) {
		content.type = 'hiddenlink';
	}

	let showAnswer: boolean = false;
	let numHints: number = 0;

	const totalPuzzles = staticHiddenLinkPuzzles.length;

	function revealHint() {
		if (content?.hints && numHints < content.hints.length) {
			numHints++;
		}
		scrollBottom();
	}

	function scrollBottom() {
		window.scroll({ top: window.innerHeight + 200, behavior: 'smooth' });
	}

	function resetState() {
		numHints = 0;
		showAnswer = false;
	}

	$: if (content) {
		resetState();
	}
</script>

<svelte:head>
	<title>Code Breaker | {content ? content.title : 'Hidden Link'}</title>
</svelte:head>

<div class="flex flex-col gap-4 pb-10 max-w-4xl mx-auto px-4 select-none">
	{#if content}
		<!-- Header with Left / Right Navigation Buttons -->
		<div class="w-full flex items-center justify-between gap-3 py-2 bg-slate-900/80 border border-slate-800 rounded-2xl px-4 shadow-lg">
			<a
				href="/puzzles/hiddenlink"
				class="p-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-300 hover:text-white hover:border-emerald-500/40 transition-all shrink-0 flex items-center justify-center"
				title="กลับไปหน้ารายการ Hidden Link"
			>
				<ChevronLeftIcon size="20" />
			</a>

			<div class="flex items-center gap-3">
				{#if id > 1}
					<a
						href="/puzzles/hiddenlink/{id - 1}"
						class="p-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-300 hover:text-white hover:border-emerald-500/40 transition-all shrink-0 flex items-center justify-center"
						title="ข้อก่อนหน้า"
					>
						<ChevronLeftIcon size="18" />
					</a>
				{:else}
					<button class="p-2 rounded-xl bg-slate-950/40 border border-slate-800/40 text-slate-600 cursor-not-allowed" disabled>
						<ChevronLeftIcon size="18" />
					</button>
				{/if}

				<h1 class="text-xl sm:text-2xl font-black tracking-tight text-white text-center flex-1 px-2">
					{content.title}
				</h1>

				{#if id < totalPuzzles}
					<a
						href="/puzzles/hiddenlink/{id + 1}"
						class="p-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-300 hover:text-white hover:border-emerald-500/40 transition-all shrink-0 flex items-center justify-center"
						title="ข้อถัดไป"
					>
						<ChevronRightIcon size="18" />
					</a>
				{:else}
					<button class="p-2 rounded-xl bg-slate-950/40 border border-slate-800/40 text-slate-600 cursor-not-allowed" disabled>
						<ChevronRightIcon size="18" />
					</button>
				{/if}
			</div>

			<div class="text-xs font-mono font-bold text-slate-400">
				{id} / {totalPuzzles}
			</div>
		</div>

		{#if content.date}
			<div class="flex items-center justify-center text-xs text-slate-400">
				<span>วันที่ {dateToThaiString(content.date)}</span>
			</div>
		{/if}

		<!-- Image View -->
		<div class="mx-auto w-full lg:w-1/2 pt-2">
			{#key id}
				<img
					src={content.image}
					on:error={(e) => {
						e.currentTarget.style.display = 'none';
					}}
					class="aspect-auto object-contain mx-auto rounded-2xl shadow-xl border border-slate-800"
					alt="img"
				/>
			{/key}
		</div>

		<div class="divider"></div>

		<!-- Hints & Answer Section -->
		{#if content.hints}
			<div class="w-full lg:w-1/2 mx-auto space-y-3">
				<h1 class="font-bold text-lg text-white">คำใบ้ & เฉลย</h1>
				{#each content.hints?.slice(0, numHints) as h, idx}
					<div class="btn btn-outline btn-info btn-sm">คำใบ้ที่ {idx + 1}</div>
					<p class="text-slate-300 text-sm leading-relaxed">{h}</p>
					<br />
				{/each}
				{#if numHints < content.hints.length}
					<div class="btn btn-outline btn-sm" on:click={revealHint}>เปิดคำใบ้ที่ {numHints + 1}</div>
				{:else}
					<div
						class="btn btn-warning btn-sm"
						on:click={() => {
							showAnswer = !showAnswer;
							scrollBottom();
						}}
					>
						{showAnswer ? 'ซ่อนเฉลย' : 'เฉลย'}
					</div>
					{#if showAnswer}
						<div class="bg-amber-500/10 border border-amber-500/30 p-4 rounded-2xl text-sm text-amber-300 font-bold mt-3 leading-relaxed">
							เฉลย: {content.answer}
						</div>
					{/if}
				{/if}
			</div>
		{/if}
	{:else}
		<div class="text-center py-12 text-slate-400 space-y-3">
			<h2 class="text-xl font-bold">ไม่พบปริศนา Hidden Link หมายเลข {id}</h2>
			<a href="/puzzles/hiddenlink" class="btn btn-primary btn-sm">กลับไปหน้ารวม Hidden Link</a>
		</div>
	{/if}
</div>
