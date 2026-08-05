<script lang="ts">
	import { onMount, afterUpdate } from 'svelte';
	import { fade, scale, fly } from 'svelte/transition';
	import { buildWordList, generatePuzzle, bfsPath, splitSlots, diffSlots } from '$lib/wordladder/wordladder';
	import dictJson from '$lib/dict.json';

	// ─── State ────────────────────────────────────────────────────────────────
	let slotSize: 3 | 4 | 5 | 6 = 3;
	let wordList: string[] = [];
	let wordSet: Set<string> = new Set();

	let start = '';
	let end = '';
	let minPath: string[] = [];

	let chain: string[] = [];
	let inputVal = '';
	let inputEl: HTMLInputElement;

	let loading = true;
	let solved = false;
	let showHint = false;       // next-word only hint
	let showSolution = false;   // full path reveal (เฉลย)
	let hintWord = '';          // single next word hint
	let hintPath: string[] | null = null;
	let errorMsg = '';
	let copied = false;
	let showRules = false;      // rules modal

	let scrollEl: HTMLDivElement;

	// Random puzzle (bypass daily seed)
	let randomSeed: number | undefined = undefined;

	// Daily seed based on date + slot size
	function getDailySeed(n: number) {
		const d = new Date();
		return (d.getFullYear() * 10000 + (d.getMonth() + 1) * 100 + d.getDate()) * 10 + n;
	}

	// ─── Init ─────────────────────────────────────────────────────────────────
	async function initPuzzle(n: typeof slotSize, seed?: number) {
		loading = true;
		solved = false;
		showHint = false;
		showSolution = false;
		hintWord = '';
		hintPath = null;
		errorMsg = '';
		chain = [];
		inputVal = '';

		await new Promise((r) => setTimeout(r, 10));

		wordList = buildWordList(dictJson as string[], n);
		wordSet = new Set(wordList);

		const useSeed = seed;
		const puzzle = generatePuzzle(wordList, 3, n === 3 ? 5 : n === 4 ? 6 : n === 5 ? 7 : 8, useSeed);

		if (!puzzle) {
			errorMsg = 'ไม่สามารถสร้างโจทย์ได้ กรุณาลองใหม่';
			loading = false;
			return;
		}

		start = puzzle.start;
		end = puzzle.end;
		minPath = puzzle.minPath;
		chain = [start];
		loading = false;

		await new Promise((r) => setTimeout(r, 50));
		inputEl?.focus();
	}

	function newRandom() {
		randomSeed = Math.floor(Math.random() * 2_000_000_000);
		initPuzzle(slotSize, randomSeed);
	}

	onMount(() => { initPuzzle(slotSize); });

	afterUpdate(() => {
		if (scrollEl) scrollEl.scrollTop = scrollEl.scrollHeight;
	});

	function changeSlotSize(n: typeof slotSize) {
		if (n === slotSize && !loading) return;
		slotSize = n;
		randomSeed = undefined;
		initPuzzle(n);
	}

	// ─── Input & submission ───────────────────────────────────────────────────
	function submitWord() {
		if (solved || loading) return;
		const word = inputVal.trim();
		if (!word) return;

		if (!wordSet.has(word)) { errorMsg = `"${word}" ไม่พบในพจนานุกรม`; return; }

		const last = chain[chain.length - 1];
		if (word === last) { errorMsg = 'คำซ้ำกับคำก่อนหน้า'; return; }
		if (chain.includes(word)) { errorMsg = `"${word}" ถูกใช้ไปแล้ว`; return; }

		const d = diffSlots(splitSlots(last), splitSlots(word));
		if (d !== 1) {
			errorMsg = `"${word}" ต่างจากคำก่อน ${d === Infinity ? '∞' : d} ช่อง (ต้องต่างแค่ 1 ช่อง)`;
			return;
		}

		chain = [...chain, word];
		inputVal = '';
		errorMsg = '';
		// Invalidate hint when user moves
		showHint = false;
		hintWord = '';
		hintPath = null;

		if (word === end) solved = true;
	}

	function undoLast() {
		if (chain.length <= 1) return;
		chain = chain.slice(0, -1);
		errorMsg = '';
		showHint = false;
		hintWord = '';
		hintPath = null;
		if (solved) solved = false;
	}

	function resetChain() {
		chain = [start];
		inputVal = '';
		errorMsg = '';
		solved = false;
		showHint = false;
		showSolution = false;
		hintWord = '';
		hintPath = null;
	}

	let revealingSolution = false;

	function requestHint() {
		if (solved || loading || revealingSolution) return;
		const currentWord = chain[chain.length - 1] || start;
		const path = bfsPath(currentWord, end, wordList);
		if (path && path.length > 1) {
			const nextWord = path[1];
			chain = [...chain, nextWord];
			errorMsg = '';
			if (nextWord === end) solved = true;
		}
	}

	async function revealSolution() {
		if (solved || loading || revealingSolution) return;
		revealingSolution = true;
		await new Promise((r) => setTimeout(r, 20));

		const currentWord = chain[chain.length - 1] || start;
		const path = bfsPath(currentWord, end, wordList);
		if (path && path.length > 1) {
			chain = [...chain, ...path.slice(1)];
		} else if (minPath && minPath.length > 0) {
			chain = [...minPath];
		}
		solved = true;
		errorMsg = '';
		revealingSolution = false;
	}

	function copyResult() {
		const steps = chain.length - 1;
		const minSteps = minPath.length - 1;
		const emoji = steps === minSteps ? '🏆' : '✅';
		const text = [
			`Thai Word Ladder – ${slotSize} ช่อง ${emoji}`,
			`${start} → ${end}`,
			`${steps} ก้าว (น้อยสุด ${minSteps} ก้าว)`,
			'',
			chain.join(' → ')
		].join('\n');
		navigator.clipboard.writeText(text);
		copied = true;
		setTimeout(() => (copied = false), 2000);
	}

	function onKeydown(e: KeyboardEvent) {
		if (e.key === 'Escape') { showRules = false; return; }
		if (e.target instanceof HTMLInputElement) {
			if (e.key === 'Enter') { e.preventDefault(); submitWord(); }
			return;
		}
	}

	function displaySlots(word: string) { return splitSlots(word); }

	// Live slots from what the user is currently typing
	$: typedSlots = splitSlots(inputVal);

	function getDiffIndices(a: string, b: string): Set<number> {
		const sa = splitSlots(a);
		const sb = splitSlots(b);
		const res = new Set<number>();
		for (let i = 0; i < Math.min(sa.length, sb.length); i++) {
			if (sa[i] !== sb[i]) res.add(i);
		}
		return res;
	}
</script>

<svelte:window on:keydown={onKeydown} />

<svelte:head>
	<title>Word Ladder | Code Breaker</title>
	<meta name="description" content="ปริศนาบันไดคำ (Word Ladder) เปลี่ยนคำภาษาไทยทีละหนึ่งช่องเพื่อไปให้ถึงคำปลายทาง" />
</svelte:head>

<!-- Full-viewport layout, no scroll -->
<div class="flex flex-col w-full max-w-lg mx-auto px-3 py-3 gap-2 select-none" style="height:calc(100svh - 4rem); max-height:calc(100svh - 4rem);">

	<!-- ── Header row ─────────────────────────────────────────────────── -->
	<div class="flex items-center justify-between shrink-0">
		<div>
			<h1 class="text-2xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400 leading-none">
				Word Ladder
			</h1>
			<p class="text-slate-500 text-xs mt-0.5">บันไดคำ · เปลี่ยนทีละหนึ่งช่อง</p>
		</div>
		<div class="flex gap-1.5 items-center">
			<a
				href="/puzzles/wordladder/graph"
				class="h-9 px-2.5 rounded-lg text-xs font-bold bg-slate-800 border border-slate-700 text-slate-300 hover:bg-slate-700 transition-colors flex items-center gap-1"
				title="ดู Connected Components"
			>
				📊 กราฟ
			</a>
			<button
				on:click={newRandom}
				class="h-9 px-3 rounded-lg text-xs font-bold bg-slate-800 border border-slate-700 text-slate-300 hover:bg-slate-700 transition-colors"
			>
				🎲 สุ่มข้อใหม่
			</button>
			<button
				on:click={() => (showRules = true)}
				class="w-9 h-9 rounded-lg font-bold text-sm bg-slate-800 border border-slate-700 text-slate-400 hover:bg-slate-700 transition-colors flex items-center justify-center"
			>
				?
			</button>
		</div>
	</div>

	<!-- ── Slot-size selector ─────────────────────────────────────────── -->
	<div class="flex gap-1.5 justify-center shrink-0">
		{#each [3, 4, 5, 6] as n}
			<button
				on:click={() => changeSlotSize(n)}
				class={`flex-1 h-9 rounded-lg font-bold text-sm transition-all duration-200 border-2 ${
					slotSize === n
						? 'bg-emerald-500 border-emerald-400 text-slate-950'
						: 'bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700'
				}`}
			>
				{n} ช่อง
			</button>
		{/each}
	</div>

	<!-- ── Main content ───────────────────────────────────────────────── -->
	{#if loading}
		<div class="flex-1 flex flex-col items-center justify-center gap-3">
			<div class="w-10 h-10 rounded-full border-4 border-emerald-500/30 border-t-emerald-400 animate-spin"></div>
			<p class="text-slate-400 text-sm">กำลังสร้างโจทย์...</p>
		</div>

	{:else if errorMsg && !start}
		<div class="flex-1 flex items-center justify-center text-red-400 text-sm">{errorMsg}</div>

	{:else}
		<!-- ── Chain (scrollable) ──────────────────────────────────── -->
		<div bind:this={scrollEl} class="flex-1 overflow-y-auto flex flex-col gap-1 py-1 min-h-0">
			{#each chain as word, i}
				{@const isStart = i === 0}
				{@const isLast = i === chain.length - 1}
				{@const isEndWord = word === end}
				{@const diffIndices = i > 0 ? getDiffIndices(chain[i - 1], word) : new Set()}
				<div in:scale={{ duration: 180, start: 0.93 }} class="flex justify-center gap-1.5">
					{#each displaySlots(word) as slot, si}
						<div
							class={`w-9 h-9 rounded-lg border-2 flex items-center justify-center font-bold text-base shadow transition-all ${
								isEndWord && isLast
									? 'bg-emerald-500 border-emerald-400 text-slate-950'
									: isStart
									? 'bg-slate-700/60 border-slate-600 text-slate-200'
									: diffIndices.has(si)
									? 'bg-amber-600/80 border-amber-400 text-white'
									: 'bg-slate-800/70 border-slate-700 text-slate-200'
							}`}
						>
							{slot}
						</div>
					{/each}
				</div>
				{#if isEndWord && isLast}
					<div class="text-center text-emerald-400 text-xs font-bold">🎉 ถึงแล้ว!</div>
				{:else}
					<div class="text-slate-700 text-center text-xs leading-none">↓</div>
				{/if}
			{/each}

			<!-- Interactive input row + ปลายทาง -->
			{#if !solved}
				<div class="flex justify-center gap-1.5">
					{#each Array(slotSize) as _, si}
						{@const slot = typedSlots[si] ?? ''}
						<div
							class={`w-9 h-9 rounded-lg border-2 flex items-center justify-center font-bold text-base transition-all ${
								slot
									? 'bg-slate-700 border-slate-500 text-slate-100'
									: 'border-dashed border-slate-600 bg-transparent text-transparent'
							}`}
						>
							{slot}
						</div>
					{/each}
				</div>
				<div class="text-slate-700 text-center text-xs leading-none">↓</div>
				<!-- ปลายทาง row — always last in chain view -->
				<div class="flex justify-center gap-1.5">
					{#each displaySlots(end) as slot}
						<div class="w-9 h-9 rounded-lg bg-cyan-900/40 border-2 border-cyan-500/50 flex items-center justify-center font-bold text-base text-cyan-300 shadow">
							{slot}
						</div>
					{/each}
				</div>
				<div class="text-xs text-slate-600 text-center">ปลายทาง · น้อยสุด <span class="text-slate-400 font-bold">{minPath.length - 1}</span> ก้าว</div>
			{/if}
		</div>



		<!-- ── Error message ────────────────────────────────────────── -->
		{#if errorMsg}
			<div in:fly={{ y: 4, duration: 150 }} out:fade={{ duration: 100 }}
				class="shrink-0 text-red-400 text-xs text-center bg-red-950/30 border border-red-800/40 rounded-lg px-3 py-1.5">
				{errorMsg}
			</div>
		{/if}

		<!-- ── Input + controls ─────────────────────────────────────── -->
		{#if !solved}
			<form on:submit|preventDefault={submitWord} class="shrink-0 flex gap-2">
				<input
					bind:this={inputEl}
					bind:value={inputVal}
					on:input={() => (errorMsg = '')}
					type="text"
					placeholder="พิมพ์คำถัดไป..."
					class="flex-1 rounded-xl border-2 border-slate-700 bg-slate-900 text-slate-100 px-3 py-2.5 font-bold focus:outline-none focus:border-emerald-500 transition-colors"
					style="background-color:#0f172a!important;color:#f8fafc!important;font-size:16px;"
					autocomplete="off"
					spellcheck="false"
				/>
				<button
					type="submit"
					class="min-w-[56px] px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 active:bg-emerald-600 text-slate-950 font-bold text-sm transition-all"
				>
					ส่ง
				</button>
			</form>

			<div class="shrink-0 flex gap-1.5 justify-center">
				<button
					on:click={undoLast}
					disabled={chain.length <= 1}
					class="flex-1 h-11 rounded-lg text-xs font-bold bg-slate-800 border border-slate-700 text-slate-300 hover:bg-slate-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
				>
					↩ ย้อน
				</button>
				<button
					on:click={newRandom}
					class="flex-1 h-11 rounded-lg text-xs font-bold bg-slate-800 border border-slate-700 text-slate-300 hover:bg-slate-700 transition-colors"
				>
					🎲 ข้อใหม่
				</button>
				<button
					on:click={requestHint}
					class="flex-1 h-11 rounded-lg text-xs font-bold bg-slate-800 border border-slate-700 text-slate-300 hover:bg-slate-700 transition-colors"
				>
					💡 ใบ้
				</button>
				<button
					on:click={revealSolution}
					disabled={revealingSolution}
					class="flex-1 h-11 rounded-lg text-xs font-bold bg-slate-800 border border-slate-700 text-slate-300 hover:bg-slate-700 disabled:opacity-50 transition-colors flex items-center justify-center gap-1.5"
				>
					{#if revealingSolution}
						<div class="w-4 h-4 rounded-full border-2 border-emerald-400 border-t-transparent animate-spin"></div>
					{:else}
						📖 เฉลย
					{/if}
				</button>
			</div>


		{:else}
			<!-- ── Solved panel ───────────────────────────────────────── -->
			<div in:scale={{ duration: 250 }} class="shrink-0 flex flex-col items-center gap-2">
				<p class="text-lg font-extrabold text-emerald-400">
					{chain.length - 1 === minPath.length - 1 ? '🏆 ยอดเยี่ยม! เส้นทางสั้นที่สุด!' : '🎉 แก้ปริศนาสำเร็จ!'}
				</p>
				<p class="text-slate-400 text-xs">
					คุณใช้ <span class="text-white font-bold">{chain.length - 1}</span> ก้าว
					(น้อยสุด <span class="text-emerald-400 font-bold">{minPath.length - 1}</span> ก้าว)
				</p>
				{#if chain.length - 1 > minPath.length - 1}
					<div class="text-xs text-slate-500 flex flex-wrap gap-1 items-center justify-center">
						<span>เส้นทางน้อยสุด:</span>
						{#each minPath as w, i}
							<span class={i === 0 ? 'text-emerald-300' : i === minPath.length - 1 ? 'text-cyan-300' : 'text-slate-400'} class:font-bold={true}>{w}</span>
							{#if i < minPath.length - 1}<span class="text-slate-700">→</span>{/if}
						{/each}
					</div>
				{/if}
				<div class="flex gap-2 flex-wrap justify-center mt-1">
					<button
						on:click={copyResult}
						class="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm transition-all"
					>
						{copied ? '✓ คัดลอกแล้ว!' : '📋 แชร์'}
					</button>
					<button
						on:click={newRandom}
						class="px-4 py-2 rounded-xl bg-slate-700 hover:bg-slate-600 text-slate-200 font-bold text-sm transition-colors border border-slate-600"
					>
						🎲 สุ่มข้อใหม่
					</button>
				</div>
			</div>
		{/if}
	{/if}
</div>

<!-- ── Rules Modal ─────────────────────────────────────────────────────────── -->
{#if showRules}
	<div
		class="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4"
		on:click={() => (showRules = false)}
	>
		<div
			class="bg-slate-900 border border-slate-800 rounded-xl p-6 max-w-sm w-full text-slate-200 flex flex-col gap-4 shadow-2xl"
			on:click|stopPropagation
		>
			<h2 class="text-xl font-bold text-emerald-400 border-b border-slate-800 pb-2">กติกา Word Ladder</h2>
			<ul class="list-disc list-inside flex flex-col gap-2 text-sm text-slate-300">
				<li>โจทย์จะให้คำ <strong class="text-white">เริ่มต้น</strong> และ <strong class="text-white">ปลายทาง</strong></li>
				<li>เปลี่ยน <strong class="text-white">หนึ่งช่อง</strong> ต่อก้าว</li>
				<li>หนึ่งช่อง = พยัญชนะ + สระ + วรรณยุกต์ รวมกัน</li>
				<li>ตัวอย่าง: <span class="text-emerald-300 font-bold">เก่ง → เจ๊ง → เจ้ง</span></li>
				<li>คำทุกคำต้องอยู่ในพจนานุกรม</li>
				<li>พยายามถึงปลายทางด้วยก้าวน้อยที่สุด!</li>
			</ul>
			<div class="flex flex-col gap-1.5 text-xs">
				<div class="flex items-center gap-2">
					<span class="w-6 h-6 rounded bg-slate-700 border-2 border-slate-600 flex items-center justify-center font-bold text-slate-200">ก</span>
					<span>ช่องปกติ (ยังไม่เปลี่ยน)</span>
				</div>
				<div class="flex items-center gap-2">
					<span class="w-6 h-6 rounded bg-amber-600/80 border-2 border-amber-400 flex items-center justify-center font-bold text-white">ข</span>
					<span>ช่องที่เปลี่ยนจากขั้นก่อน</span>
				</div>
				<div class="flex items-center gap-2">
					<span class="w-6 h-6 rounded bg-emerald-500 border-2 border-emerald-400 flex items-center justify-center font-bold text-slate-950">ค</span>
					<span>ถึงปลายทางแล้ว!</span>
				</div>
			</div>
			<button
				on:click={() => (showRules = false)}
				class="mt-1 w-full py-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-lg transition-colors"
			>
				เข้าใจแล้ว
			</button>
		</div>
	</div>
{/if}
