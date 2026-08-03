<script lang="ts">
	import MathstickBoard from '$lib/mathsticks/MathstickBoard.svelte';
	import puzzlesData from '$lib/mathsticks/puzzles.json';
	import { evaluateExpr } from '$lib/mathsticks/solver';
	import { fade } from 'svelte/transition';

	const CATEGORIES = [
		{ id: '1_stick_0_19', name: 'ง่าย', moves: 1 },
		{ id: '1_stick_2_digits', name: 'กลาง', moves: 1 },
		{ id: '2_sticks_0_19', name: 'ยาก', moves: 2 },
		{ id: '2_sticks_2_digits', name: 'ยากสัส', moves: 2 }
	];

	const ALL_LEGEND_SYMBOLS = [
		{ label: '0', tokens: ['0'] },
		{ label: '1', tokens: ['1'] },
		{ label: '2', tokens: ['2'] },
		{ label: '3', tokens: ['3'] },
		{ label: '4', tokens: ['4'] },
		{ label: '5', tokens: ['5'] },
		{ label: '6', tokens: ['6'] },
		{ label: '7', tokens: ['7'] },
		{ label: '8', tokens: ['8'] },
		{ label: '9', tokens: ['9'] },
		{ label: '-', tokens: ['-'] },
		{ label: '+', tokens: ['+'] },
		{ label: '=', tokens: ['='] }
	];

	let activeCategoryIdx = 0;
	let currentPuzzleIndex = 0;
	let currentPuzzle = puzzlesData['1_stick_0_19'][0];

	let activeTokens: string[] = ['6', '+', '4', '=', '4'];
	let initialTokens: string[] = ['6', '+', '4', '=', '4'];
	let movesCount = 0;
	let solved = false;
	let revealed = false;
	let showInfoModal = false;

	$: activeCategory = CATEGORIES[activeCategoryIdx];
	$: categoryFilteredSolutions = currentPuzzle?.solutions || [];

	function selectCategory(idx: number) {
		activeCategoryIdx = idx;
		nextPuzzle();
	}

	function nextPuzzle() {
		const list = puzzlesData[CATEGORIES[activeCategoryIdx].id as keyof typeof puzzlesData] || [];
		if (list.length === 0) return;

		let randIdx = Math.floor(Math.random() * list.length);
		if (list.length > 1 && randIdx === currentPuzzleIndex) {
			randIdx = (randIdx + 1) % list.length;
		}

		currentPuzzleIndex = randIdx;
		currentPuzzle = list[randIdx];

		activeTokens = currentPuzzle.equation.split('');
		initialTokens = [...activeTokens];
		movesCount = 0;
		solved = false;
		revealed = false;
	}

	function resetPuzzle() {
		activeTokens = [...initialTokens];
		movesCount = 0;
		solved = false;
	}

	function checkStatus() {
		const currentStr = activeTokens.join('');
		const parts = currentStr.split('=');
		if (parts.length === 2) {
			const lhs = evaluateExpr(parts[0]);
			const rhs = evaluateExpr(parts[1]);
			if (lhs !== null && rhs !== null && lhs === rhs) {
				solved = true;
			} else {
				solved = false;
			}
		} else {
			solved = false;
		}
	}

	// Initialize on load
	selectCategory(0);
</script>

<svelte:head>
	<title>Mathsticks | Code Breaker</title>
	<meta name="description" content="ปริศนาย้ายไม้ขีดไฟเพื่อแก้สมการคณิตศาสตร์ (Mathsticks)" />
</svelte:head>

<div class="container mx-auto px-4 py-8 max-w-4xl flex flex-col items-center gap-8 min-h-[85vh]">
	<!-- Header & Info Button -->
	<div class="text-center flex flex-col items-center gap-2 relative w-full">
		<button
			on:click={() => (showInfoModal = true)}
			class="absolute top-0 right-2 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl border border-slate-700 text-xs font-bold transition-colors flex items-center gap-1 shadow"
			title="ดูสัญลักษณ์กติกา"
		>
			ℹ️ กติกา
		</button>

		<h1 class="text-4xl sm:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500">
			Mathsticks 🔥
		</h1>
		<p class="text-slate-400 text-sm font-medium">ย้ายไม้ขีดไฟเพื่อให้ได้สมการคณิตศาสตร์ที่ถูกต้อง</p>
	</div>

	<!-- Category Selection (ง่าย, กลาง, ยาก, ยากสัส) -->
	<div class="flex flex-wrap justify-center gap-2">
		{#each CATEGORIES as cat, idx}
			<button
				on:click={() => selectCategory(idx)}
				class={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold border transition-all duration-200 ${
					activeCategoryIdx === idx
						? 'bg-amber-500 border-amber-400 text-slate-950 shadow-lg shadow-amber-500/20'
						: 'bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700'
				}`}
			>
				{cat.name}
			</button>
		{/each}
	</div>

	<!-- Constraint Banner & Move Counter -->
	<div class="flex items-center gap-4 bg-slate-900 border border-slate-800 px-6 py-2.5 rounded-2xl shadow">
		<div class="text-sm font-bold text-amber-400 flex items-center gap-1.5">
			<span>🎯 เงื่อนไข:</span>
			<span class="text-slate-100 font-extrabold">ย้าย {activeCategory.moves} ก้าน</span>
		</div>
		<div class="h-4 w-px bg-slate-800" />
		<div class="text-sm font-bold text-slate-300 flex items-center gap-1.5">
			<span>ย้ายแล้ว:</span>
			<span class={`font-extrabold font-mono ${movesCount > activeCategory.moves ? 'text-red-400' : 'text-emerald-400'}`}>
				{movesCount} / {activeCategory.moves}
			</span>
			<span>ก้าน</span>
		</div>
	</div>

	<!-- Interactive Matchstick Board -->
	<div class="w-full flex flex-col items-center gap-6">
		<MathstickBoard
			bind:equationTokens={activeTokens}
			{initialTokens}
			bind:movesCount
			onMove={checkStatus}
			isSolved={solved}
		/>

		<!-- Controls -->
		<div class="flex items-center gap-4">
			{#if solved}
				<!-- Player solved by themselves -->
				<span class="text-emerald-400 font-extrabold text-xl sm:text-2xl flex items-center gap-1.5 animate-bounce">
					✅ ถูกต้อง
				</span>

				<button
					on:click={nextPuzzle}
					class="px-6 py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold rounded-2xl transition-all shadow-xl shadow-amber-500/25 text-base"
				>
					🎲 ข้อใหม่
				</button>
			{:else if revealed}
				<!-- Player clicked "เปิดเฉลย" -->
				<button
					on:click={nextPuzzle}
					class="px-6 py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold rounded-2xl transition-all shadow-xl shadow-amber-500/25 text-base"
				>
					🎲 ข้อใหม่
				</button>
			{:else}
				<!-- Normal game state -->
				<button
					on:click={resetPuzzle}
					class="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold rounded-xl border border-slate-700 transition-colors text-sm"
				>
					🔄 รีเซ็ต
				</button>

				<button
					on:click={nextPuzzle}
					class="px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl transition-all shadow-lg shadow-amber-500/20 text-sm"
				>
					🎲 ข้อใหม่
				</button>

				<button
					on:click={() => (revealed = true)}
					class="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-purple-300 font-bold rounded-xl border border-slate-700 transition-colors text-sm"
				>
					💡 เปิดเฉลย
				</button>
			{/if}
		</div>
	</div>

	<!-- Solutions Panel when "เปิดเฉลย" is active (Read directly from pre-built static JSON) -->
	{#if revealed}
		<div in:fade class="w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-3xl p-6 flex flex-col gap-4 shadow-2xl">
			<div class="flex justify-between items-center border-b border-slate-800 pb-3">
				<h3 class="text-lg font-bold text-purple-400">💡 เฉลยคำตอบ (ย้าย {activeCategory.moves} ก้าน)</h3>
				<span class="text-xs text-slate-400 font-mono">{categoryFilteredSolutions.length} วิธี</span>
			</div>

			<div class="flex flex-col gap-4">
				{#each categoryFilteredSolutions as solEq, idx}
					<div class="bg-slate-950 p-4 rounded-2xl border border-slate-800 flex flex-col gap-2">
						<span class="text-xs text-slate-400 font-medium">คำตอบที่ {idx + 1}:</span>
						<MathstickBoard
							equationTokens={solEq.split('')}
							initialTokens={initialTokens}
							isSolved={true}
							showHelperText={false}
						/>
					</div>
				{/each}
			</div>

			<button
				on:click={nextPuzzle}
				class="w-full py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold rounded-2xl text-base transition-all shadow-lg shadow-amber-500/20 mt-2"
			>
				🎲 สุ่มข้อใหม่ (Next Puzzle)
			</button>
		</div>
	{/if}
</div>

<!-- Rules & Symbol Legend Modal -->
{#if showInfoModal}
	<div
		class="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
		on:click={() => (showInfoModal = false)}
	>
		<div
			class="bg-slate-900 border border-slate-800 rounded-2xl p-6 max-w-xl w-full text-slate-200 flex flex-col gap-5 shadow-2xl my-8"
			on:click|stopPropagation
		>
			<div class="flex justify-between items-center border-b border-slate-800 pb-3">
				<h2 class="text-2xl font-bold text-amber-400">ℹ️ กติกาและรูปแบบไม้ขีดไฟ</h2>
				<button
					on:click={() => (showInfoModal = false)}
					class="text-slate-400 hover:text-slate-100 text-xl font-bold px-2"
				>
					✕
				</button>
			</div>

			<ul class="list-disc list-inside flex flex-col gap-1.5 text-xs sm:text-sm text-slate-300">
				<li>ย้ายไม้ขีดไฟตามจำนวนก้านที่กำหนดเพื่อทำให้สมการเป็นจริง</li>
				<li><span class="text-amber-400 font-bold">ก้านสีส้ม</span> = ไม้ขีดตำแหน่งเดิม</li>
				<li><span class="text-purple-400 font-bold">ก้านสีม่วง</span> = ไม้ขีดที่เพิ่มเข้ามาใหม่ (Moved to)</li>
				<li><span class="text-rose-400 font-bold">เส้นประสีแดง</span> = ตำแหน่งที่ดึงไม้ขีดออกไป (Moved from)</li>
			</ul>

			<h3 class="text-sm font-bold text-slate-100 border-b border-slate-800 pb-1 mt-2">
				รูปแบบตัวเลข 0-9 และเครื่องหมาย (+, -, =):
			</h3>

			<div class="grid grid-cols-4 sm:grid-cols-7 gap-2">
				{#each ALL_LEGEND_SYMBOLS as item}
					<div class="flex flex-col items-center p-1">
						<MathstickBoard
							equationTokens={item.tokens}
							initialTokens={item.tokens}
							showHelperText={false}
							showParsedLabels={true}
						/>
					</div>
				{/each}
			</div>

			<button
				on:click={() => (showInfoModal = false)}
				class="w-full py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl text-sm transition-colors mt-2"
			>
				เข้าใจแล้ว
			</button>
		</div>
	</div>
{/if}
