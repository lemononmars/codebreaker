<script lang="ts">
	import { ArrowLeftIcon, ChevronDownIcon, ChevronUpIcon, GlobeIcon } from 'svelte-feather-icons';

	const targetSequence = ['A', 'R', 'O', 'U', 'N', 'D', 'T', 'H', 'E', 'W', 'O', 'R', 'L', 'D'];

	const samplePlacesMap: Record<string, string[]> = {
		A: ['Austria', 'Amsterdam', 'Athens', 'Argentina', 'Australia', 'Algeria', 'Atlanta', 'Anchorage'],
		R: ['Rome', 'Russia', 'Rio de Janeiro', 'Romania', 'Riyadh', 'Reykjavik', 'Rotterdam'],
		O: ['Oslo', 'Oman', 'Ottawa', 'Osaka', 'Orlando', 'Oxford'],
		U: ['Uganda', 'Uruguay', 'Uzbekistan', 'Utrecht', 'Ulaanbaatar'],
		N: ['Norway', 'New York', 'Nepal', 'Netherlands', 'Nairobi', 'Nice', 'Nagoya'],
		D: ['Denmark', 'Dublin', 'Dallas', 'Detroit', 'Doha', 'Dundee', 'Dresden'],
		T: ['Tokyo', 'Thailand', 'Toronto', 'Turkey', 'Tunisia', 'Taipei', 'Tashkent'],
		H: ['Helsinki', 'Hanoi', 'Hungary', 'Hamburg', 'Houston', 'Havana'],
		E: ['Egypt', 'Estonia', 'Ethiopia', 'Edinburgh', 'Eindhoven'],
		W: ['Warsaw', 'Washington', 'Wellington', 'Wuhan', 'Windhoek'],
		L: ['London', 'Lisbon', 'Laos', 'Lima', 'Luxembourg', 'Liverpool', 'Lyon']
	};

	let currentStep = 0;
	let lastCorrectPlace = '';
	let inputWord = '';
	let message = '';
	let status: 'neutral' | 'correct' | 'incorrect' = 'neutral';
	let isSolved = false;
	let showHistory = false;

	interface IWorldHistoryItem {
		word: string;
		sampleCorrection: string;
		isCorrect: boolean;
	}
	let history: IWorldHistoryItem[] = [];

	function handleSubmit() {
		if (isSolved) return;

		const trimmed = inputWord.trim();
		if (!trimmed) {
			message = 'กรุณากรอกชื่อสถานที่หรือคำศัพท์';
			return;
		}

		const firstLetter = trimmed.charAt(0).toUpperCase();
		const targetLetter = targetSequence[currentStep];
		const isCorrect = firstLetter === targetLetter;

		const samples = samplePlacesMap[targetLetter] || ['Austria', 'Amsterdam', 'Athens'];
		const randomSample = samples[Math.floor(Math.random() * samples.length)];

		history = [
			{
				word: trimmed,
				sampleCorrection: randomSample,
				isCorrect
			},
			...history
		];

		if (isCorrect) {
			lastCorrectPlace = trimmed;
			status = 'correct';
			message = `ไป ${trimmed} ได้!`;
		} else {
			lastCorrectPlace = randomSample;
			status = 'incorrect';
			message = `ไป ${trimmed} ไม่ได้ ต้องไป ${randomSample}`;
		}

		// Always advance to next in sequence
		currentStep += 1;
		inputWord = '';

		if (currentStep >= targetSequence.length) {
			isSolved = true;
		}
	}

	function resetGame() {
		currentStep = 0;
		lastCorrectPlace = '';
		inputWord = '';
		message = '';
		status = 'neutral';
		isSolved = false;
		history = [];
	}
</script>

<svelte:head>
	<title>Code Breaker | Around the World 🌍</title>
	<meta
		name="description"
		content="เกมสืบหาสัจจะการเดินทางรอบโลก A-R-O-U-N-D-T-H-E-W-O-R-L-D"
	/>
</svelte:head>

<div class="flex flex-col gap-8 w-full max-w-3xl mx-auto px-4 py-8 select-none">
	<!-- Navigation -->
	<div class="flex items-center justify-between">
		<a href="/puzzles/deduction" class="btn btn-ghost btn-xs gap-1.5 font-bold text-slate-400 hover:text-white">
			<ArrowLeftIcon size="14" />
			<span>กลับไปหน้า Deduction Games</span>
		</a>
	</div>

	<!-- Main Game Card -->
	<section class="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 relative overflow-hidden backdrop-blur-xl">
		<!-- Header Info -->
		<div class="space-y-3 text-center">
			<div class="w-12 h-12 rounded-2xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center border border-cyan-500/20 mx-auto shadow-md">
				<GlobeIcon size="28" />
			</div>
			<h1 class="text-2xl sm:text-4xl font-black text-white">Around the World</h1>

			<!-- Dynamic Question Prompt: "ไปไหนดี" or "ไป ... แล้วไปไหนต่อดี" -->
			<div class="bg-slate-950 px-6 py-4 rounded-2xl border border-slate-800/80 shadow-inner max-w-md mx-auto">
				<p class="text-lg sm:text-xl font-bold text-cyan-300">
					{#if !lastCorrectPlace}
						ไปไหนดี
					{:else}
						ไป {lastCorrectPlace} แล้วไปไหนต่อดี
					{/if}
				</p>
			</div>
		</div>

		<!-- Message Feedback -->
		{#if message}
			<div class="alert text-xs font-bold rounded-xl py-2 px-3
				{status === 'correct' ? 'alert-success' : ''}
				{status === 'incorrect' ? 'alert-error' : ''}">
				<span>{message}</span>
			</div>
		{/if}

		<!-- Congratulations Banner (When all 14 steps completed) -->
		{#if isSolved}
			<div class="bg-cyan-500/10 border border-cyan-500/30 rounded-2xl p-6 text-center space-y-3 animate-fade-in">
				<div class="text-4xl">✈️🌍🎉</div>
				<h3 class="text-xl sm:text-2xl font-black text-cyan-300">
					ยินดีด้วย! คุณเดินทางรอบโลกสำเร็จแล้ว!
				</h3>
				<p class="text-xs sm:text-sm text-slate-300 font-light">
					คุณเดินทางครบ 14 สถานที่ไปรอบโลกแล้ว!
				</p>
				<button on:click={resetGame} class="btn bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-xl px-6 border-none mt-2">
					ออกเดินทางอีกครั้ง
				</button>
			</div>
		{:else}
			<!-- Grouped Input & Submit Button -->
			<form on:submit|preventDefault={handleSubmit} class="flex items-center gap-2 max-w-md mx-auto">
				<input
					type="text"
					bind:value={inputWord}
					placeholder="พิมพ์ชื่อสถานที่ที่จะไป..."
					style="background-color: #020617 !important; color: #f8fafc !important;"
					class="input input-bordered border border-slate-700/60 focus:border-cyan-400 rounded-xl flex-1 text-sm font-bold py-3"
					required
				/>
				<button type="submit" class="btn bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-xl px-6 border-none shadow-lg shrink-0">
					เดินทาง
				</button>
			</form>
		{/if}

		<!-- Expandable History Badges -->
		{#if history.length > 0}
			<div class="border-t border-slate-800 pt-4 space-y-3">
				<button
					on:click={() => (showHistory = !showHistory)}
					class="btn btn-ghost btn-xs text-xs text-slate-400 hover:text-white flex items-center justify-between w-full font-bold"
				>
					<span>ประวัติการเดินทาง ({history.length} รายการ)</span>
					{#if showHistory}
						<ChevronUpIcon size="14" />
					{:else}
						<ChevronDownIcon size="14" />
					{/if}
				</button>

				{#if showHistory}
					<div class="flex flex-wrap gap-2 max-h-48 overflow-y-auto pr-1 pt-1">
						{#each history as item}
							<span class="badge badge-xl p-3 sm:p-4 gap-2 font-mono border text-sm shadow-sm
								{item.isCorrect
									? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
									: 'bg-rose-500/20 text-rose-300 border-rose-500/40'}">
								<span class="font-bold text-slate-200">{item.word}</span>
								<span class="text-xs opacity-80">{item.isCorrect ? '✓' : `(ต้องไป ${item.sampleCorrection})`}</span>
							</span>
						{/each}
					</div>
				{/if}
			</div>
		{/if}
	</section>
</div>
