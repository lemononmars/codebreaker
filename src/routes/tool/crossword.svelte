<script lang="ts">
	import { search, splitWord } from '$lib/thwordsearch';
	import { onMount } from 'svelte';
	import {
		PlusSquareIcon,
		ZoomInIcon,
		ZoomOutIcon,
		CheckSquareIcon,
		RotateCcwIcon,
		DownloadIcon,
		CornerUpLeftIcon
	} from 'svelte-feather-icons';

	let cellSize = 44; // px
	let numZoom = 1.0;
	const CELL_MIN = 24;
	const CELL_MAX = 80;
	function zoomIn() {
		cellSize = Math.min(CELL_MAX, cellSize + 8);
	}
	function zoomOut() {
		cellSize = Math.max(CELL_MIN, cellSize - 8);
	}
	function numZoomIn() {
		numZoom = Math.min(2.5, numZoom + 0.25);
	}
	function numZoomOut() {
		numZoom = Math.max(0.5, numZoom - 0.25);
	}

	type Cell = { letter: string; black: boolean };

	let rows = 5;
	let cols = 5;
	let grid: Cell[][] = [];

	// Modal
	let showModal = false;
	let modalRows = 5;
	let modalCols = 5;

	// Selection
	let selectedRow = -1;
	let selectedCol = -1;

	// Suggestions
	let acrossPattern = '';
	let downPattern = '';
	let acrossResults: string[] = [];
	let downResults: string[] = [];
	let loadingSuggestions = false;
	let strict = true;
	let suggestionAbort: AbortController | null = null;

	function initGrid(r: number, c: number) {
		grid = Array.from({ length: r }, () =>
			Array.from({ length: c }, () => ({ letter: '', black: false }))
		);
		rows = r;
		cols = c;
		selectedRow = -1;
		selectedCol = -1;
		acrossResults = [];
		downResults = [];

		// Auto-scale cell size
		if (typeof window !== 'undefined') {
			const availW = window.innerWidth * 0.8;
			const availH = window.innerHeight * 0.6;
			const fitW = Math.floor(availW / c);
			const fitH = Math.floor(availH / r);
			cellSize = Math.min(CELL_MAX, Math.max(CELL_MIN, Math.min(fitW, fitH)));
		}
	}

	function openModal() {
		modalRows = rows;
		modalCols = cols;
		showModal = true;
	}

	function confirmModal() {
		initGrid(modalRows, modalCols);
		showModal = false;
	}

	function getCellNumbers(): Map<string, number> {
		const numbers = new Map<string, number>();
		let n = 1;
		for (let r = 0; r < rows; r++) {
			for (let c = 0; c < cols; c++) {
				if (grid[r][c].black) continue;
				const startsAcross =
					(c === 0 || grid[r][c - 1].black) && c < cols - 1 && !grid[r][c + 1].black;
				const startsDown =
					(r === 0 || grid[r - 1][c].black) && r < rows - 1 && !grid[r + 1][c].black;
				if (startsAcross || startsDown) {
					numbers.set(`${r},${c}`, n++);
				}
			}
		}
		return numbers;
	}

	function getSlot(r: number, c: number, dir: 'across' | 'down'): Cell[] {
		if (dir === 'across') {
			let start = c;
			while (start > 0 && !grid[r][start - 1].black) start--;
			let end = c;
			while (end < cols - 1 && !grid[r][end + 1].black) end++;
			return grid[r].slice(start, end + 1);
		} else {
			let start = r;
			while (start > 0 && !grid[start - 1][c].black) start--;
			let end = r;
			while (end < rows - 1 && !grid[end + 1][c].black) end++;
			return grid.slice(start, end + 1).map((row) => row[c]);
		}
	}

	function buildPattern(cells: Cell[]) {
		return cells.map((cell) => cell.letter || '.').join('');
	}

	async function updateSuggestions() {
		if (selectedRow < 0 || selectedCol < 0) return;
		if (suggestionAbort) suggestionAbort.abort();
		suggestionAbort = new AbortController();
		loadingSuggestions = true;
		acrossResults = [];
		downResults = [];

		const aSlot = getSlot(selectedRow, selectedCol, 'across');
		const dSlot = getSlot(selectedRow, selectedCol, 'down');
		acrossPattern = buildPattern(aSlot);
		downPattern = buildPattern(dSlot);

		try {
			const [aRes, dRes] = await Promise.all([
				aSlot.length > 1
					? search(acrossPattern, false, suggestionAbort.signal, undefined, strict)
					: Promise.resolve({ results: [], valid: false, count: 0 }),
				dSlot.length > 1
					? search(downPattern, false, suggestionAbort.signal, undefined, strict)
					: Promise.resolve({ results: [], valid: false, count: 0 })
			]);
			acrossResults = aRes?.results ?? [];
			downResults = dRes?.results ?? [];
		} catch (e) {
			// aborted
		} finally {
			loadingSuggestions = false;
		}
	}

	function fillSlot(r: number, c: number, dir: 'across' | 'down', word: string) {
		saveHistory();
		const chars = splitWord(word);
		// Figure out slot start
		if (dir === 'across') {
			let start = c;
			while (start > 0 && !grid[r][start - 1].black) start--;
			for (let i = 0; i < chars.length && start + i < cols; i++) {
				if (!grid[r][start + i].black) grid[r][start + i].letter = chars[i];
			}
		} else {
			let start = r;
			while (start > 0 && !grid[start - 1][c].black) start--;
			for (let i = 0; i < chars.length && start + i < rows; i++) {
				if (!grid[start + i][c].black) grid[start + i][c].letter = chars[i];
			}
		}
		grid = grid;
		updateSuggestions();
		syncHiddenInput();
	}

	function toggleBlack(r: number, c: number) {
		saveHistory();
		grid[r][c].black = !grid[r][c].black;
		grid[r][c].letter = '';
		if (selectedRow === r && selectedCol === c) {
			selectedRow = -1;
			selectedCol = -1;
		}
		grid = grid;
	}

	let hiddenInput: HTMLInputElement;

	function splitThaiCells(text: string): string[] {
		const out: string[] = [];
		const alphas = [...text];
		const startRegex = /[A-Zก-ฮใเแโไาำะๆฯฤา]/;

		alphas.forEach((a) => {
			if (startRegex.test(a)) {
				out.push(a);
			} else if (out.length > 0) {
				out[out.length - 1] += a;
			} else {
				out.push(a);
			}
		});
		return out;
	}

	function syncHiddenInput() {
		if (!hiddenInput || selectedRow < 0 || selectedCol < 0) return;
		hiddenInput.value = grid[selectedRow][selectedCol].letter;
		// Defer focus so click event doesn't steal it back
		setTimeout(() => {
			hiddenInput?.focus();
			const len = hiddenInput?.value.length ?? 0;
			hiddenInput?.setSelectionRange(len, len);
		}, 0);
	}

	function handleCellInput() {
		if (selectedRow < 0 || selectedCol < 0) return;
		saveHistory();
		const newValue = hiddenInput.value;
		const parts = splitThaiCells(newValue);
		if (parts.length === 0) {
			grid[selectedRow][selectedCol].letter = '';
		} else if (parts.length === 1) {
			grid[selectedRow][selectedCol].letter = parts[0];
		} else {
			grid[selectedRow][selectedCol].letter = parts[0];
			for (let i = 1; i < parts.length; i++) {
				if (moveCursorNoUpdate(0, 1)) {
					grid[selectedRow][selectedCol].letter = parts[i];
				}
			}
			hiddenInput.value = grid[selectedRow][selectedCol].letter;
			hiddenInput.setSelectionRange(hiddenInput.value.length, hiddenInput.value.length);
		}
		grid = grid;
		updateSuggestions();
	}

	function selectCell(r: number, c: number) {
		if (grid[r][c].black) return;
		selectedRow = r;
		selectedCol = c;
		updateSuggestions();
		syncHiddenInput();
	}

	// CONSONANT only needed for cursor logic in keydown
	const CONSONANT = /[ก-ฮ]/;

	function handleKeydown(e: KeyboardEvent) {
		if (selectedRow < 0 || selectedCol < 0) return;
		if (showModal) return;

		switch (e.key) {
			case 'Escape':
				selectedRow = -1;
				selectedCol = -1;
				return;
			case 'ArrowRight':
				e.preventDefault();
				moveCursor(0, 1);
				return;
			case 'ArrowLeft':
				e.preventDefault();
				moveCursor(0, -1);
				return;
			case 'ArrowDown':
				e.preventDefault();
				moveCursor(1, 0);
				return;
			case 'ArrowUp':
				e.preventDefault();
				moveCursor(-1, 0);
				return;
			case 'Delete':
				e.preventDefault();
				saveHistory();
				grid[selectedRow][selectedCol].letter = '';
				grid = grid;
				syncHiddenInput();
				updateSuggestions();
				return;
		}
	}

	function moveCursorNoUpdate(dr: number, dc: number): boolean {
		let r = selectedRow + dr;
		let c = selectedCol + dc;
		while (r >= 0 && r < rows && c >= 0 && c < cols) {
			if (!grid[r][c].black) {
				selectedRow = r;
				selectedCol = c;
				return true;
			}
			r += dr;
			c += dc;
		}
		return false;
	}

	function moveCursor(dr: number, dc: number): boolean {
		const moved = moveCursorNoUpdate(dr, dc);
		if (moved) {
			syncHiddenInput();
			updateSuggestions();
		}
		return moved;
	}

	$: cellNumbers = grid.length > 0 ? getCellNumbers() : new Map<string, number>();

	// ─── Solver ───────────────────────────────────────────
	let savedGrid: Cell[][] | null = null;
	let isSolving = false;
	let solveAbort: AbortController | null = null;
	let solveMsg = '';

	function getSlots() {
		const slots: { cells: { r: number; c: number }[]; dir: 'across' | 'down' }[] = [];
		for (let r = 0; r < rows; r++) {
			let c = 0;
			while (c < cols) {
				if (!grid[r][c].black) {
					const s = c;
					while (c < cols && !grid[r][c].black) c++;
					if (c - s > 1)
						slots.push({
							cells: Array.from({ length: c - s }, (_, i) => ({ r, c: s + i })),
							dir: 'across'
						});
				} else c++;
			}
		}
		for (let c = 0; c < cols; c++) {
			let r = 0;
			while (r < rows) {
				if (!grid[r][c].black) {
					const s = r;
					while (r < rows && !grid[r][c].black) r++;
					if (r - s > 1)
						slots.push({
							cells: Array.from({ length: r - s }, (_, i) => ({ r: s + i, c })),
							dir: 'down'
						});
				} else r++;
			}
		}
		return slots.filter((slot) => slot.cells.some(({ r, c }) => !grid[r][c].letter));
	}

	function slotPattern(slot: { cells: { r: number; c: number }[] }, g: Cell[][]) {
		return slot.cells.map(({ r, c }) => g[r][c].letter || '.').join('');
	}

	async function finishGrid() {
		saveHistory();
		savedGrid = grid.map((row) => row.map((c) => ({ ...c })));
		isSolving = true;
		solveMsg = 'กำลังโหลดคำ...';
		if (solveAbort) solveAbort.abort();
		solveAbort = new AbortController();
		const sig = solveAbort.signal;
		const slots = getSlots();
		const tempGrid = grid.map((row) => row.map((c) => ({ ...c })));
		const wordLists: string[][] = [];
		for (const slot of slots) {
			if (sig.aborted) {
				isSolving = false;
				solveMsg = '';
				return;
			}
			const res = await search(slotPattern(slot, tempGrid), false, sig, undefined, strict);
			wordLists.push(res?.results ?? []);
		}
		if (sig.aborted) {
			isSolving = false;
			solveMsg = '';
			return;
		}
		solveMsg = 'กำลังแก้...';
		const ok = await solveBacktrack(tempGrid, slots, wordLists, 0, sig);
		if (!sig.aborted) {
			if (ok) {
				grid = tempGrid;
				grid = grid;
				solveMsg = 'เสร็จ!';
				setTimeout(() => {
					if (solveMsg === 'เสร็จ!') solveMsg = '';
				}, 3000);
			} else {
				solveMsg = 'ไม่พบคำตอบ';
			}
		}
		isSolving = false;
	}

	async function solveBacktrack(
		g: Cell[][],
		slots: { cells: { r: number; c: number }[] }[],
		wl: string[][],
		idx: number,
		sig: AbortSignal
	): Promise<boolean> {
		if (sig.aborted || idx === slots.length) return !sig.aborted;
		if (idx % 3 === 0) await new Promise((r) => setTimeout(r, 0));
		const slot = slots[idx];
		const candidates = wl[idx].filter((word) => {
			const parts = splitWord(word);
			if (parts.length !== slot.cells.length) return false;
			return parts.every((p, i) => {
				const existing = g[slot.cells[i].r][slot.cells[i].c].letter;
				return !existing || existing === p;
			});
		});
		for (const word of candidates) {
			if (sig.aborted) return false;
			const backup = slot.cells.map(({ r, c }) => g[r][c].letter);
			const parts = splitWord(word);
			slot.cells.forEach(({ r, c }, i) => {
				g[r][c].letter = parts[i] ?? '';
			});
			if (await solveBacktrack(g, slots, wl, idx + 1, sig)) return true;
			slot.cells.forEach(({ r, c }, i) => {
				g[r][c].letter = backup[i];
			});
		}
		return false;
	}

	function revertGrid() {
		if (savedGrid) {
			grid = savedGrid.map((r) => r.map((c) => ({ ...c })));
			savedGrid = null;
			solveMsg = '';
		}
	}

	// ─── Undo/History ───────────────────────────────────
	let history: string[] = [];
	const MAX_HISTORY = 50;

	function saveHistory() {
		const state = JSON.stringify(grid);
		if (history.length > 0 && history[history.length - 1] === state) return;
		history.push(state);
		if (history.length > MAX_HISTORY) history.shift();
		history = history;
	}

	function undo() {
		if (history.length === 0) return;
		const prevState = history.pop();
		if (!prevState) return;
		grid = JSON.parse(prevState);
		grid = grid;
		history = history;
		updateSuggestions();
		syncHiddenInput();
	}

	// ─── Export ──────────────────────────────────────────
	function exportCSV() {
		let csv = '\uFEFF'; // UTF-8 BOM for Excel/Thai support
		for (let r = 0; r < rows; r++) {
			const rowChars = grid[r].map((c) => (c.black ? '#' : c.letter || ' '));
			csv += rowChars.join(',') + '\n';
		}
		const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
		const url = URL.createObjectURL(blob);
		const link = document.createElement('a');
		link.setAttribute('href', url);
		link.setAttribute('download', `crossword_${rows}x${cols}.csv`);
		link.style.visibility = 'hidden';
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	}

	function abortSolve() {
		if (solveAbort) solveAbort.abort();
		isSolving = false;
		solveMsg = '';
	}

	onMount(() => {
		initGrid(rows, cols);
	});
</script>

<svelte:window on:keydown={handleKeydown} />

<!-- Hidden input for reliable Thai IME input -->
<input
	bind:this={hiddenInput}
	type="text"
	on:input={handleCellInput}
	class="fixed top-0 left-0 opacity-0 w-px h-px pointer-events-none"
	autocomplete="off"
	spellcheck="false"
	tabindex="-1"
	aria-hidden="true"
/>

<div class="flex flex-col items-center gap-6 p-4 min-h-screen">
	<div class="text-center">
		<h1 class="text-3xl lg:text-5xl font-extrabold tracking-tight">Crossword Maker</h1>
		<p class="text-base-content/50 mt-1">ออกแบบและแก้ปริศนาอักษรไขว้ภาษาไทย</p>
	</div>

	<!-- Toolbar -->
	<div
		class="bg-base-200 p-2 rounded-2xl flex items-center gap-2 flex-wrap justify-center shadow-inner border border-base-300"
	>
		<div class="tooltip tooltip-bottom" data-tip="สร้างตารางใหม่">
			<button on:click={openModal} class="btn btn-ghost btn-sm text-primary">
				<PlusSquareIcon size="20" />
			</button>
		</div>

		<div class="divider divider-horizontal mx-0" />

		<div class="flex items-center gap-1">
			<div class="tooltip tooltip-bottom" data-tip="เลิกทำ (Undo)">
				<button on:click={undo} disabled={history.length === 0} class="btn btn-ghost btn-sm">
					<CornerUpLeftIcon size="20" />
				</button>
			</div>
			<div class="tooltip tooltip-bottom" data-tip="ส่งออกเป็น CSV">
				<button on:click={exportCSV} class="btn btn-ghost btn-sm">
					<DownloadIcon size="20" />
				</button>
			</div>
			<div class="divider divider-horizontal mx-0" />
			<div class="tooltip tooltip-bottom" data-tip="โหมดตรงตัว (Exact marks)">
				<label class="cursor-pointer flex items-center gap-1 px-2">
					<input
						type="checkbox"
						class="checkbox checkbox-xs checkbox-primary"
						bind:checked={strict}
					/>
					<span class="text-[10px] font-bold {strict ? 'text-primary' : 'opacity-40'}">STRICT</span>
				</label>
			</div>
		</div>

		<div class="divider divider-horizontal mx-0" />

		<div class="flex items-center gap-1">
			<span class="text-[10px] uppercase font-bold text-base-content/40 ml-1">Grid</span>
			<button on:click={zoomOut} class="btn btn-ghost btn-xs">
				<ZoomOutIcon size="16" />
			</button>
			<span class="text-xs font-mono w-6 text-center">{cellSize}</span>
			<button on:click={zoomIn} class="btn btn-ghost btn-xs">
				<ZoomInIcon size="16" />
			</button>
		</div>

		<div class="flex items-center gap-1">
			<span class="text-[10px] uppercase font-bold text-base-content/40 ml-1">Num</span>
			<button on:click={numZoomOut} class="btn btn-ghost btn-xs">
				<ZoomOutIcon size="16" />
			</button>
			<span class="text-xs font-mono w-10 text-center">{numZoom.toFixed(2)}x</span>
			<button on:click={numZoomIn} class="btn btn-ghost btn-xs">
				<ZoomInIcon size="16" />
			</button>
		</div>

		<div class="divider divider-horizontal mx-0" />

		<div class="flex items-center gap-2">
			{#if !isSolving}
				<div class="flex items-center gap-2">
					{#if solveMsg}
						<span
							class="text-xs font-medium {solveMsg.includes('เสร็จ')
								? 'text-success'
								: 'text-error'} animate-fade-in"
						>
							{solveMsg}
						</span>
					{/if}
					<button on:click={finishGrid} class="btn btn-success btn-sm gap-2">
						<CheckSquareIcon size="18" />
						<span>เติมคำ</span>
					</button>
				</div>
			{:else}
				<div class="flex items-center gap-2 px-2">
					<span class="loading loading-spinner loading-xs text-primary" />
					<span class="text-xs font-medium animate-pulse">{solveMsg}</span>
					<button on:click={abortSolve} class="btn btn-error btn-xs btn-outline">ยกเลิก</button>
				</div>
			{/if}

			{#if savedGrid}
				<button on:click={revertGrid} class="btn btn-warning btn-sm gap-2">
					<RotateCcwIcon size="18" />
					<span>ย้อนกลับ</span>
				</button>
			{/if}
		</div>
	</div>

	<div class="flex flex-col lg:flex-row gap-6 w-full max-w-6xl justify-center">
		<!-- Grid -->
		<div class="flex flex-col items-center gap-2">
			{#if grid.length > 0}
				<div
					class="grid bg-base-300 border-4 border-base-300 rounded-xl shadow-2xl p-1"
					style="grid-template-columns: repeat({cols}, {cellSize}px); gap: 1px;"
				>
					{#each grid as row, r}
						{#each row as cell, c}
							<!-- svelte-ignore a11y-click-events-have-key-events -->
							<div
								class="relative flex items-center justify-center select-none cursor-pointer transition-all duration-150
									{cell.black
									? 'bg-base-content'
									: selectedRow === r && selectedCol === c
									? 'bg-primary/20 ring-2 ring-primary ring-inset'
									: 'bg-base-300 hover:bg-base-200'}"
								style="width:{cellSize}px; height:{cellSize}px;"
								on:click={() => selectCell(r, c)}
								on:dblclick={() => toggleBlack(r, c)}
								role="gridcell"
								tabindex="-1"
							>
								{#if !cell.black}
									{#if cellNumbers.has(`${r},${c}`)}
										<span
											class="absolute top-0.5 left-1 font-bold text-base-content/40 leading-none pointer-events-none"
											style="font-size:{Math.max(8, cellSize * 0.22 * numZoom)}px"
										>
											{cellNumbers.get(`${r},${c}`)}
										</span>
									{/if}
									<span
										class="font-bold text-base-content leading-none pointer-events-none"
										style="font-size:{Math.max(10, cellSize * 0.45)}px">{cell.letter}</span
									>
								{/if}
							</div>
						{/each}
					{/each}
				</div>
				<p class="text-xs text-base-content/40 text-center">
					ดับเบิลคลิก = สลับดำ/ขาว, คลิก = เลือก, ลูกศร = เลื่อน
				</p>
			{/if}
		</div>

		<!-- Suggestions panel -->
		<div class="lg:w-72 flex flex-col gap-4">
			{#if selectedRow < 0}
				<div
					class="flex items-center justify-center h-32 text-base-content/30 text-sm border border-dashed border-base-300 rounded-xl"
				>
					คลิกที่ช่องว่างเพื่อดูคำที่เป็นไปได้
				</div>
			{:else if loadingSuggestions}
				<div class="flex items-center gap-2 text-base-content/60 py-4">
					<span class="loading loading-spinner loading-sm" />
					<span>กำลังค้นหา...</span>
				</div>
			{:else}
				<!-- Across suggestions -->
				<div class="border border-base-300 rounded-xl p-3 bg-base-100 shadow-sm">
					<div class="font-bold text-sm mb-2 flex items-center gap-2">
						<span class="text-primary">→</span>
						<span>แนวนอน</span>
						<code
							class="bg-base-200 px-1.5 py-0.5 rounded text-xs font-mono text-base-content/60 ml-auto"
							>{acrossPattern}</code
						>
					</div>
					{#if acrossResults.length === 0}
						<p class="text-xs text-base-content/40 italic">ไม่พบคำที่ตรงกัน</p>
					{:else}
						<div class="flex flex-wrap gap-1 max-h-36 overflow-y-auto">
							{#each acrossResults.slice(0, 60) as word}
								<button
									class="badge badge-outline hover:badge-primary text-xs cursor-pointer transition-colors"
									on:click={() => fillSlot(selectedRow, selectedCol, 'across', word)}
								>
									{word}
								</button>
							{/each}
							{#if acrossResults.length > 60}
								<span class="text-xs text-base-content/40 self-center"
									>+{acrossResults.length - 60} อีก</span
								>
							{/if}
						</div>
					{/if}
				</div>

				<!-- Down suggestions -->
				<div class="border border-base-300 rounded-xl p-3 bg-base-100 shadow-sm">
					<div class="font-bold text-sm mb-2 flex items-center gap-2">
						<span class="text-secondary">↓</span>
						<span>แนวตั้ง</span>
						<code
							class="bg-base-200 px-1.5 py-0.5 rounded text-xs font-mono text-base-content/60 ml-auto"
							>{downPattern}</code
						>
					</div>
					{#if downResults.length === 0}
						<p class="text-xs text-base-content/40 italic">ไม่พบคำที่ตรงกัน</p>
					{:else}
						<div class="flex flex-wrap gap-1 max-h-36 overflow-y-auto">
							{#each downResults.slice(0, 60) as word}
								<button
									class="badge badge-outline hover:badge-secondary text-xs cursor-pointer transition-colors"
									on:click={() => fillSlot(selectedRow, selectedCol, 'down', word)}
								>
									{word}
								</button>
							{/each}
							{#if downResults.length > 60}
								<span class="text-xs text-base-content/40 self-center"
									>+{downResults.length - 60} อีก</span
								>
							{/if}
						</div>
					{/if}
				</div>
			{/if}
		</div>
	</div>
</div>

<!-- New Grid Modal -->
{#if showModal}
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div class="modal modal-open">
		<div class="modal-box">
			<h3 class="font-bold text-lg">สร้างตาราง Crossword ใหม่</h3>
			<p class="text-sm text-base-content/60 mt-1">ตารางเดิมจะถูกล้างทั้งหมด</p>
			<div class="form-control mt-4">
				<label class="label"><span class="label-text">จำนวนแถว (Rows)</span></label>
				<input type="number" min="3" max="25" bind:value={modalRows} class="input input-bordered" />
			</div>
			<div class="form-control mt-2">
				<label class="label"><span class="label-text">จำนวนคอลัมน์ (Columns)</span></label>
				<input type="number" min="3" max="25" bind:value={modalCols} class="input input-bordered" />
			</div>
			<div class="modal-action">
				<button class="btn" on:click={() => (showModal = false)}>ยกเลิก</button>
				<button class="btn btn-primary" on:click={confirmModal}>สร้าง</button>
			</div>
		</div>
		<div class="modal-backdrop" on:click={() => (showModal = false)} />
	</div>
{/if}

<style>
	@keyframes fadeIn {
		from {
			opacity: 0;
			transform: translateX(10px);
		}
		to {
			opacity: 1;
			transform: translateX(0);
		}
	}
	.animate-fade-in {
		animation: fadeIn 0.3s ease-out forwards;
	}
</style>
