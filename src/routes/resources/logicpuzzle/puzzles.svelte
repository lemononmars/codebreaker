<script lang="ts">
	import { ArrowLeftIcon, GridIcon, CheckCircleIcon, RefreshCwIcon } from 'svelte-feather-icons';

	// Simple 5x5 Nonogram puzzle state
	let nonogramGrid = Array(5).fill(0).map(() => Array(5).fill(false));
	let isNonogramSolved = false;

	const targetNonogram = [
		[false, true, true, true, false],
		[true, false, false, false, true],
		[true, true, true, true, true],
		[true, false, false, false, true],
		[true, false, false, false, true]
	]; // Heart / Letter A

	function toggleCell(r: number, c: number) {
		nonogramGrid[r][c] = !nonogramGrid[r][c];
		checkNonogram();
	}

	function checkNonogram() {
		isNonogramSolved = nonogramGrid.every((row, r) =>
			row.every((val, c) => val === targetNonogram[r][c])
		);
	}

	function resetNonogram() {
		nonogramGrid = Array(5).fill(0).map(() => Array(5).fill(false));
		isNonogramSolved = false;
	}
</script>

<svelte:head>
	<title>Code Breaker | Logic Puzzles Collection 🧩</title>
	<meta name="description" content="คลังโจทย์และปริศนาลอจิกพัซเซิลฝึกสมอง Nonogram, Sudoku, Slitherlink" />
</svelte:head>

<div class="flex flex-col gap-8 w-full max-w-5xl mx-auto px-4 py-8 select-none">
	<!-- Navigation -->
	<div class="flex items-center justify-between">
		<a href="/resources/logicpuzzle" class="btn btn-ghost btn-xs gap-1.5 font-bold">
			← กลับไปหน้า Logic Puzzles
		</a>
	</div>

	<!-- Header -->
	<header class="text-center max-w-2xl mx-auto space-y-3">
		<div class="w-14 h-14 rounded-2xl bg-purple-500/10 text-purple-400 flex items-center justify-center border border-purple-500/20 mx-auto">
			<GridIcon size="32" />
		</div>
		<h1 class="text-3xl lg:text-4xl font-black tracking-tight text-white">
			Logic Puzzles (คลังโจทย์พัซเซิล) 🧩
		</h1>
		<p class="text-slate-400 text-sm lg:text-base leading-relaxed">
			ทดลองแก้โจทย์ปริศนาตรรกะแบบโต้ตอบ (Interactive Pencil Puzzles)
		</p>
	</header>

	<!-- Sample Interactive Nonogram 5x5 -->
	<section class="bg-base-200 p-6 rounded-3xl border border-base-300 shadow-xl space-y-6">
		<div class="flex items-center justify-between flex-wrap gap-2">
			<h2 class="text-xl font-extrabold text-purple-400 flex items-center gap-2">
				<span>🎨</span> มินิพัซเซิล: Nonogram 5x5 (イラストロジック)
			</h2>
			<button on:click={resetNonogram} class="btn btn-ghost btn-xs gap-1 text-slate-400">
				<RefreshCwIcon size="14" />
				<span>เริ่มใหม่</span>
			</button>
		</div>

		<div class="flex flex-col items-center space-y-4">
			<!-- Nonogram Grid -->
			<div class="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-1">
				{#each nonogramGrid as row, r}
					<div class="flex gap-1">
						{#each row as cell, c}
							<button
								on:click={() => toggleCell(r, c)}
								class="w-10 h-10 rounded-lg border border-slate-700/80 transition-all font-bold text-xs flex items-center justify-center {cell ? 'bg-purple-500 border-purple-400 shadow-lg scale-95' : 'bg-slate-900 hover:bg-slate-800 text-slate-600'}"
							>
								{cell ? '█' : ''}
							</button>
						{/each}
					</div>
				{/each}
			</div>

			{#if isNonogramSolved}
				<div class="flex items-center gap-2 text-sm font-bold text-success bg-success/10 px-4 py-2 rounded-xl border border-success/20 animate-bounce">
					<CheckCircleIcon size="18" />
					<span>ยินดีด้วย! คุณไขปริศนาภาพอักษร A สำเร็จ! 🎉</span>
				</div>
			{:else}
				<span class="text-xs text-slate-400">คลิกที่ช่องเพื่อระบายสีตามจินตนาการ</span>
			{/if}
		</div>
	</section>
</div>
