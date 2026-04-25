<script>
	import { solvePentomino, countSolutions } from '$lib/pentomino_engine.js';
	import { fade, fly } from 'svelte/transition';

	let grid = Array.from({ length: 8 }, () => Array(8).fill(null));
	let blockedCells = [];
	let forcedCells = [];
	let hasSolutionShown = false;
	let solving = false;
	let counting = false;
	let message = 'Select 4 cells to remove from the 8x8 grid.';
	let error = '';
	let solutionCount = null;

	const PIECE_COLORS = {
		F: '#ff5f5f',
		I: '#5fff5f',
		L: '#5f5fff',
		P: '#ffff5f',
		N: '#ff5fff',
		T: '#5fffff',
		U: '#ffaf5f',
		V: '#af5fff',
		W: '#5faf5f',
		X: '#afafaf',
		Y: '#ff5faf',
		Z: '#5fafff',
		X_BLOCK: '#333333'
	};

	function clearSolution() {
		const newGrid = Array.from({ length: 8 }, () => Array(8).fill(null));
		for (const [r, c] of blockedCells) newGrid[r][c] = 'X_BLOCK';
		for (const { r, c, id } of forcedCells) newGrid[r][c] = id;
		grid = newGrid;
	}

	function toggleCell(r, c) {
		if (solving || counting) return;
		if (hasSolutionShown) {
			clearSolution();
			hasSolutionShown = false;
		}

		// Remove forced cell if present
		const forcedIndex = forcedCells.findIndex((cell) => cell.r === r && cell.c === c);
		if (forcedIndex !== -1) {
			forcedCells.splice(forcedIndex, 1);
			forcedCells = [...forcedCells];
			grid[r][c] = null;
			return;
		}

		const index = blockedCells.findIndex(([br, bc]) => br === r && bc === c);
		if (index !== -1) {
			blockedCells.splice(index, 1);
			blockedCells = [...blockedCells];
			grid[r][c] = null;
		} else if (blockedCells.length < 4) {
			blockedCells = [...blockedCells, [r, c]];
			grid[r][c] = 'X_BLOCK';
		}

		error = '';
		solutionCount = null;
		message =
			blockedCells.length < 4 ? `Selected ${blockedCells.length}/4 cells.` : 'Ready to solve!';
	}

	function handleKeydown(e, r, c) {
		if (solving || counting) return;

		const key = e.key.toUpperCase();
		if (PIECE_COLORS[key] && key !== 'X_BLOCK') {
			if (hasSolutionShown) {
				clearSolution();
				hasSolutionShown = false;
			}

			// Remove from blockedCells if present
			const blockedIndex = blockedCells.findIndex(([br, bc]) => br === r && bc === c);
			if (blockedIndex !== -1) {
				blockedCells.splice(blockedIndex, 1);
				blockedCells = [...blockedCells];
			}

			// Remove any existing forced cell at this position
			forcedCells = forcedCells.filter((cell) => cell.r !== r || cell.c !== c);

			// Add new forced cell
			forcedCells = [...forcedCells, { r, c, id: key }];
			grid[r][c] = key;

			error = '';
			solutionCount = null;
			message =
				blockedCells.length < 4 ? `Selected ${blockedCells.length}/4 cells.` : 'Ready to solve!';
		} else if (e.key === 'Backspace' || e.key === 'Delete' || e.key === ' ') {
			if (hasSolutionShown) {
				clearSolution();
				hasSolutionShown = false;
			}

			const forcedIndex = forcedCells.findIndex((cell) => cell.r === r && cell.c === c);
			if (forcedIndex !== -1) {
				forcedCells.splice(forcedIndex, 1);
				forcedCells = [...forcedCells];
				grid[r][c] = null;
			}

			const blockedIndex = blockedCells.findIndex(([br, bc]) => br === r && bc === c);
			if (blockedIndex !== -1) {
				blockedCells.splice(blockedIndex, 1);
				blockedCells = [...blockedCells];
				grid[r][c] = null;
			}

			error = '';
			solutionCount = null;
			message =
				blockedCells.length < 4 ? `Selected ${blockedCells.length}/4 cells.` : 'Ready to solve!';
		}
	}

	async function handleSolve() {
		if (blockedCells.length !== 4) {
			error = 'Please select exactly 4 cells.';
			return;
		}

		solving = true;
		message = 'Solving...';
		error = '';
		solutionCount = null;

		// Use a timeout to allow the UI to update to "Solving..." state
		setTimeout(() => {
			const result = solvePentomino(blockedCells, forcedCells);
			if (result) {
				grid = result;
				hasSolutionShown = true;
				message = 'Solution found!';
			} else {
				message = 'No solution found.';
				error = 'This specific layout is impossible to solve.';
			}
			solving = false;
		}, 100);
	}

	async function handleCount() {
		if (blockedCells.length !== 4) {
			error = 'Please select exactly 4 cells.';
			return;
		}

		counting = true;
		message = 'Counting all solutions... (this may take a minute)';
		error = '';
		solutionCount = null;

		setTimeout(() => {
			const count = countSolutions(blockedCells, forcedCells);
			solutionCount = count;
			message = `Found ${count} total solution(s)!`;
			counting = false;
		}, 100);
	}

	function reset() {
		if (hasSolutionShown) {
			clearSolution();
			hasSolutionShown = false;
			solutionCount = null;
			message = 'Solution cleared. You can modify clues or solve again.';
			error = '';
		} else {
			grid = Array.from({ length: 8 }, () => Array(8).fill(null));
			blockedCells = [];
			forcedCells = [];
			hasSolutionShown = false;
			solving = false;
			counting = false;
			solutionCount = null;
			message = 'Select 4 cells to remove from the 8x8 grid.';
			error = '';
		}
	}
</script>

<div class="pt-20 pb-20 min-h-screen text-white flex flex-col items-center font-sans">
	<header class="text-center mb-8" in:fly={{ y: -20, duration: 800 }}>
		<h1 class="text-5xl font-black bg-primary bg-clip-text text-transparent mb-2">
			8x8 Pentomino Solver
		</h1>
	</header>

	<main class="flex flex-col md:flex-row gap-12 items-start justify-center max-w-6xl w-full px-4">
		<!-- Controls -->
		<div class="w-full md:w-80 flex flex-col gap-6" in:fade={{ delay: 200 }}>
			<div
				class="bg-slate-800/50 border border-slate-700 p-6 rounded-2xl backdrop-blur-sm shadow-xl"
			>
				<h2 class="text-xl font-bold mb-4 flex items-center gap-2">
					<span class="w-2 h-6 bg-blue-500 rounded-full" />
					Instructions
				</h2>
				<p class="text-slate-300 leading-relaxed mb-6 text-sm">
					Click on the grid to mark exactly <strong>4 cells</strong> as obstacles. You can also
					<strong>hover over a cell and type a letter (F, I, L, P, N, T, U, V, W, X, Y, Z)</strong>
					to force a specific piece to cover that position. The solver will then attempt to fit all pieces
					appropriately.
				</p>

				<div class="space-y-4">
					<button
						on:click={handleSolve}
						disabled={blockedCells.length !== 4 || solving || counting}
						class="w-full py-4 rounded-xl font-bold text-lg transition-all
                               {blockedCells.length === 4 && !solving && !counting
							? 'bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-900/40 translate-y-0 active:translate-y-1'
							: 'bg-slate-700 text-slate-500 cursor-not-allowed'}"
					>
						{solving ? 'Calculating...' : 'Find Solution'}
					</button>

					<button
						on:click={handleCount}
						disabled={blockedCells.length !== 4 || solving || counting}
						class="w-full py-3 rounded-xl font-bold border border-purple-500 text-purple-400 hover:bg-purple-900/20 transition-all
                               {blockedCells.length === 4 && !solving && !counting
							? 'opacity-100 cursor-pointer'
							: 'opacity-50 cursor-not-allowed'}"
					>
						{counting ? 'Counting...' : 'Count All Solutions'}
					</button>

					<button
						on:click={reset}
						class="w-full py-3 rounded-xl border border-slate-600 font-semibold hover:bg-slate-700 transition-colors
                               {hasSolutionShown
							? 'text-amber-400 border-amber-500/50 hover:bg-amber-900/20'
							: ''}"
					>
						{hasSolutionShown ? 'Clear Solution' : 'Reset Grid'}
					</button>
				</div>
			</div>

			{#if message || error}
				<div
					class="p-4 rounded-xl text-center border transition-all text-sm
                            {error
						? 'bg-red-900/20 border-red-500/50 text-red-200'
						: 'bg-blue-900/20 border-blue-500/50 text-blue-200'}"
				>
					{error || message}
				</div>
			{/if}

			<div class="grid grid-cols-4 gap-2 text-[10px] uppercase tracking-wider text-slate-500">
				{#each Object.entries(PIECE_COLORS) as [id, color]}
					{#if id !== 'X_BLOCK'}
						<div class="flex flex-col items-center gap-1">
							<div class="w-4 h-4 rounded-sm" style="background-color: {color}" />
							<span>{id}</span>
						</div>
					{/if}
				{/each}
			</div>
		</div>

		<!-- Grid -->
		<div class="relative group" in:fade={{ delay: 400 }}>
			<div
				class="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"
			/>
			<div class="relative bg-slate-900 p-4 rounded-2xl border border-slate-800 shadow-2xl">
				<div class="grid grid-cols-8 gap-1.5 sm:gap-2">
					{#each grid as row, r}
						{#each row as cell, c}
							<button
								on:click={() => toggleCell(r, c)}
								on:keydown={(e) => handleKeydown(e, r, c)}
								on:mouseenter={(e) => e.target.focus()}
								tabindex="0"
								class="w-8 h-8 sm:w-12 sm:h-12 rounded-md transition-all duration-300 relative overflow-hidden group/cell
                                       {cell === null
									? 'bg-slate-800 hover:bg-slate-700 focus:bg-slate-600'
									: ''} focus:ring-2 focus:ring-blue-400 focus:outline-none"
								style="background-color: {cell ? PIECE_COLORS[cell] : ''}"
								disabled={solving}
							>
								{#if cell === 'X_BLOCK'}
									<div class="absolute inset-0 flex items-center justify-center opacity-50">
										<svg viewBox="0 0 24 24" class="w-6 h-6 fill-white">
											<path
												d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
											/>
										</svg>
									</div>
								{:else if cell === null}
									<div
										class="absolute inset-0 border-2 border-transparent group-hover/cell:border-white/10 rounded-md"
									/>
								{/if}

								{#if cell && cell !== 'X_BLOCK'}
									<span class="text-black/50 font-black text-sm pointer-events-none">{cell}</span>
									{#if forcedCells.some((fc) => fc.r === r && fc.c === c)}
										<div
											class="absolute inset-0 border-[3px] border-white/60 rounded-md pointer-events-none shadow-inner"
										/>
									{/if}
								{/if}
							</button>
						{/each}
					{/each}
				</div>
			</div>
		</div>
	</main>

	<footer class="mt-auto py-8 text-slate-500 text-sm">
		Built with SvelteKit (Classic Routing)
	</footer>
</div>
