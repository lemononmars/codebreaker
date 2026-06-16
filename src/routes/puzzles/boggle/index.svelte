<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import dict from '$lib/utils/dict';
	import { search as originalSearch, isUpper, isLower } from '$lib/utils/thaiwords';
	import {
		CompassIcon,
		AwardIcon,
		RotateCcwIcon,
		CheckCircleIcon,
		XCircleIcon,
		PlayCircleIcon,
		InfoIcon,
		XIcon,
		ChevronLeftIcon
	} from 'svelte-feather-icons';
	import { fly } from 'svelte/transition';

	// Board configurations
	const rows = 4;
	const cols = 4;

	// Game state
	let grid: string[][] = [
		['', '', '', ''],
		['', '', '', ''],
		['', '', '', ''],
		['', '', '', '']
	];
	let isPlaying = false;
	let gameEnded = false;
	let timeLeft = 120;
	let timerInterval: any = null;
	let score = 0;

	// Draggable / selectable state
	let selectedPath: Array<{ r: number; c: number }> = [];
	let isDragging = false;
	let foundWords: Set<string> = new Set();
	let allPossibleWords: string[] = [];
	let showRulesModal = false;
	let showPossibleCount = true;

	// Initialize dictionary at module scope (fixes word count issues and avoids race conditions)
	const sortedDict = [...dict].sort();
	const dictSet = new Set(sortedDict);

	function search(word: string): boolean {
		return dictSet.has(word);
	}

	$: possibleCountsByLength = allPossibleWords.reduce(
		(acc, word) => {
			const len = word.length;
			const key = len >= 6 ? '6+' : len.toString();
			acc[key] = (acc[key] || 0) + 1;
			return acc;
		},
		{ '3': 0, '4': 0, '5': 0, '6+': 0 } as Record<string, number>
	);

	$: missedWords = allPossibleWords.filter((w) => !foundWords.has(w));

	// Sound/Visual Feedback messages
	let feedbackMessage = '';
	let feedbackType: 'success' | 'error' | 'info' | '' = '';
	let feedbackTimeout: any = null;

	// Web Audio API Synthesized SFX
	function playSFX(type: 'select' | 'correct' | 'incorrect') {
		if (typeof window === 'undefined') return;
		try {
			const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
			if (!AudioContextClass) return;
			const ctx = new AudioContextClass();

			if (type === 'select') {
				const osc = ctx.createOscillator();
				const gain = ctx.createGain();
				osc.type = 'sine';
				osc.frequency.setValueAtTime(600, ctx.currentTime);
				osc.frequency.exponentialRampToValueAtTime(1200, ctx.currentTime + 0.05);
				gain.gain.setValueAtTime(0.04, ctx.currentTime);
				gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05);
				osc.connect(gain);
				gain.connect(ctx.destination);
				osc.start();
				osc.stop(ctx.currentTime + 0.05);
			} else if (type === 'correct') {
				const osc1 = ctx.createOscillator();
				const osc2 = ctx.createOscillator();
				const gain = ctx.createGain();
				
				osc1.type = 'sine';
				osc1.frequency.setValueAtTime(523.25, ctx.currentTime); // C5
				osc1.frequency.exponentialRampToValueAtTime(1046.50, ctx.currentTime + 0.15); // C6

				osc2.type = 'sine';
				osc2.frequency.setValueAtTime(659.25, ctx.currentTime); // E5
				osc2.frequency.exponentialRampToValueAtTime(1318.51, ctx.currentTime + 0.15); // E6

				gain.gain.setValueAtTime(0.08, ctx.currentTime);
				gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.3);

				osc1.connect(gain);
				osc2.connect(gain);
				gain.connect(ctx.destination);

				osc1.start();
				osc2.start();
				osc1.stop(ctx.currentTime + 0.3);
				osc2.stop(ctx.currentTime + 0.3);
			} else if (type === 'incorrect') {
				const osc = ctx.createOscillator();
				const gain = ctx.createGain();
				osc.type = 'triangle';
				osc.frequency.setValueAtTime(220, ctx.currentTime);
				osc.frequency.linearRampToValueAtTime(110, ctx.currentTime + 0.2);
				gain.gain.setValueAtTime(0.1, ctx.currentTime);
				gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.2);
				osc.connect(gain);
				gain.connect(ctx.destination);
				osc.start();
				osc.stop(ctx.currentTime + 0.2);
			}
		} catch (e) {
			console.warn('AudioContext error:', e);
		}
	}

	// Letters distributions & weights
	const boggleDiceWeights: Record<string, number> = {
		ร: 624,
		ก: 536,
		น: 514,
		อ: 398,
		ม: 371,
		ง: 371,
		ว: 308,
		ย: 308,
		ล: 270,
		ส: 238,
		ต: 231,
		ด: 231,
		ห: 205,
		ค: 205,
		บ: 187,
		ท: 167,
		ป: 162,
		พ: 150,
		จ: 126,
		ช: 108,
		ข: 106,
		ศ: 54,
		ผ: 48,
		ถ: 43,
		ณ: 42,
		ธ: 40,
		ภ: 39,
		ญ: 38,
		ษ: 37,
		ซ: 34,
		ฟ: 23,
		ฉ: 20,
		ฝ: 13,
		ฐ: 12,
		ฮ: 11,
		า: 778,
		เ: 373,
		แ: 115,
		โ: 88,
		ใ: 40,
		ไ: 69,
		ะ: 228,
		ำ: 80,
		'็': 46,
		'ั': 328,
		'ุ/ู': 240,
		'ิ/ี': 463,
		'ึ/ื': 124,
		'่/้/๊/๋': 612
	};

	function getRandomWeightedChar(): string {
		const entries = Object.entries(boggleDiceWeights);
		const totalWeight = entries.reduce((sum, [, w]) => sum + w, 0);
		let r = Math.random() * totalWeight;
		for (const [char, w] of entries) {
			r -= w;
			if (r <= 0) return char;
		}
		return entries[0][0];
	}

	function normalizeToCombinedChar(char: string): string {
		if (char === 'ุ' || char === 'ู') return 'ุ/ู';
		if (char === 'ิ' || char === 'ี') return 'ิ/ี';
		if (char === 'ึ' || char === 'ื') return 'ึ/ื';
		if (char === '่' || char === '้' || char === '๊' || char === '๋') return '่/้/๊/๋';
		return char;
	}

	function generateBoard() {
		// To ensure the board is actually fun and solvable, we pick at least one 6+ letter word (length 6-8)
		// and place it sequentially in the grid, verifying it produces a 6+ letter word in solver.
		const freshGrid = Array(rows)
			.fill(null)
			.map(() => Array(cols).fill(''));

		const playableLongWords = dict.filter(
			(w) =>
				w.length >= 6 && w.length <= 8 && !w.includes('-') && !w.includes(' ') && !w.includes('์')
		);

		let placed = false;
		let attempts = 0;
		while (!placed && attempts < 200) {
			attempts++;
			const mainWord =
				playableLongWords[Math.floor(Math.random() * playableLongWords.length)] || 'กระต่าย';
			const tempGrid = Array(rows)
				.fill(null)
				.map(() => Array(cols).fill(''));
			const chars = mainWord.split('').map(normalizeToCombinedChar);
			let r = Math.floor(Math.random() * rows);
			let c = Math.floor(Math.random() * cols);
			tempGrid[r][c] = chars[0];
			let success = true;
			const visited = new Set<string>([`${r},${c}`]);

			for (let i = 1; i < chars.length; i++) {
				const dirs = [
					[-1, -1],
					[-1, 0],
					[-1, 1],
					[0, -1],
					[0, 1],
					[1, -1],
					[1, 0],
					[1, 1]
				].sort(() => Math.random() - 0.5);

				let stepPlaced = false;
				for (const [dr, dc] of dirs) {
					const nr = r + dr;
					const nc = c + dc;
					if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && !visited.has(`${nr},${nc}`)) {
						tempGrid[nr][nc] = chars[i];
						visited.add(`${nr},${nc}`);
						r = nr;
						c = nc;
						stepPlaced = true;
						break;
					}
				}
				if (!stepPlaced) {
					success = false;
					break;
				}
			}

			if (success) {
				// Fill the rest with weighted letter distributions
				for (let r = 0; r < rows; r++) {
					for (let c = 0; c < cols; c++) {
						if (tempGrid[r][c] === '') {
							tempGrid[r][c] = getRandomWeightedChar();
						}
					}
				}
				const solved = solveBoard(tempGrid);
				if (solved.some((w) => w.length >= 6)) {
					placed = true;
					for (let tr = 0; tr < rows; tr++) {
						for (let tc = 0; tc < cols; tc++) {
							freshGrid[tr][tc] = tempGrid[tr][tc];
						}
					}
				}
			}
		}

		// Fallback in case of extreme bad luck
		if (!placed) {
			const fallbackWord = 'กระต่าย';
			const chars = fallbackWord.split('').map(normalizeToCombinedChar);
			for (let i = 0; i < chars.length && i < 16; i++) {
				freshGrid[Math.floor(i / 4)][i % 4] = chars[i];
			}
			for (let r = 0; r < rows; r++) {
				for (let c = 0; c < cols; c++) {
					if (freshGrid[r][c] === '') {
						freshGrid[r][c] = getRandomWeightedChar();
					}
				}
			}
		}

		grid = freshGrid;

		// Run DFS solver in background to find all possible valid words
		allPossibleWords = solveBoard(grid).sort((a, b) => b.length - a.length || a.localeCompare(b));
	}

	// DFS Solver with Prefix Pruning (supporting combined cells)
	function solveBoard(board: string[][]): string[] {
		const found = new Set<string>();

		function dfs(r: number, c: number, wordOptions: string[], visited: boolean[][]) {
			for (const w of wordOptions) {
				if (w.length >= 3) {
					if (search(w)) {
						found.add(w);
					}
				}
			}

			// We only stop if none of the word options have a prefix in the dictionary
			const anyHasPrefix = wordOptions.some((w) => w.length < 9 && hasPrefix(w));
			if (!anyHasPrefix) return;

			for (let dr = -1; dr <= 1; dr++) {
				for (let dc = -1; dc <= 1; dc++) {
					if (dr === 0 && dc === 0) continue;
					const nr = r + dr;
					const nc = c + dc;
					if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && !visited[nr][nc]) {
						const nextCellVal = board[nr][nc];
						const nextOptions = nextCellVal.split('/');
						const nextWordOptions: string[] = [];
						for (const opt of nextOptions) {
							for (const w of wordOptions) {
								nextWordOptions.push(w + opt);
							}
						}

						visited[nr][nc] = true;
						dfs(nr, nc, nextWordOptions, visited);
						visited[nr][nc] = false;
					}
				}
			}
		}

		const visited = Array(rows)
			.fill(null)
			.map(() => Array(cols).fill(false));
		for (let r = 0; r < rows; r++) {
			for (let c = 0; c < cols; c++) {
				const cellVal = board[r][c];
				const initialOptions = cellVal.split('/');
				visited[r][c] = true;
				dfs(r, c, initialOptions, visited);
				visited[r][c] = false;
			}
		}
		return Array.from(found);
	}

	// Prefix check using binary search over sortedDict array
	function hasPrefix(prefix: string): boolean {
		let low = 0;
		let high = sortedDict.length - 1;
		while (low <= high) {
			const mid = Math.floor((low + high) / 2);
			const val = sortedDict[mid];
			if (val.startsWith(prefix)) {
				return true;
			}
			if (val < prefix) {
				low = mid + 1;
			} else {
				high = mid - 1;
			}
		}
		return false;
	}

	function startNewGame() {
		clearInterval(timerInterval);
		timeLeft = 120;
		score = 0;
		foundWords = new Set();
		foundWords = foundWords; // trigger reactivity
		selectedPath = [];
		gameEnded = false;
		isPlaying = true;

		generateBoard();

		timerInterval = setInterval(() => {
			if (timeLeft > 0) {
				timeLeft--;
			} else {
				endGame();
			}
		}, 1000);
	}

	function endGame() {
		clearInterval(timerInterval);
		isPlaying = false;
		gameEnded = true;
		selectedPath = [];
	}

	// Scoring table helper
	function getWordScore(word: string): number {
		const len = word.length;
		if (len < 3) return 0;
		if (len === 3) return 1;
		if (len === 4) return 2;
		if (len === 5) return 4;
		if (len === 6) return 6;
		return 9;
	}
	// Dragging handlers
	function handleCellStart(r: number, c: number) {
		if (!isPlaying || gameEnded) return;
		feedbackMessage = '';
		isDragging = true;
		selectedPath = [{ r, c }];
		playSFX('select');
	}

	function handleCellEnter(r: number, c: number) {
		if (!isDragging || !isPlaying) return;

		// Check if it's already in the path
		const pathIndex = selectedPath.findIndex((p) => p.r === r && p.c === c);
		if (pathIndex !== -1) {
			// If moving back to a previous element, crop the path up to it
			if (selectedPath.length !== pathIndex + 1) {
				selectedPath = selectedPath.slice(0, pathIndex + 1);
				playSFX('select');
			}
			return;
		}

		// Ensure the cell is adjacent to the last selected cell
		const lastCell = selectedPath[selectedPath.length - 1];
		const isAdjacent = Math.abs(lastCell.r - r) <= 1 && Math.abs(lastCell.c - c) <= 1;
		if (isAdjacent) {
			selectedPath = [...selectedPath, { r, c }];
			playSFX('select');
		}
	}

	let gridContainer: HTMLDivElement;

	function handlePointerMove(e: PointerEvent) {
		if (!isDragging || !isPlaying) return;
		if (!gridContainer) return;
		const rect = gridContainer.getBoundingClientRect();
		
		const pad = 12; // padding offset
		const gridWidth = rect.width - pad * 2;
		const gridHeight = rect.height - pad * 2;
		
		const x = e.clientX - rect.left - pad;
		const y = e.clientY - rect.top - pad;

		const cellWidth = gridWidth / cols;
		const cellHeight = gridHeight / rows;

		const c = Math.floor(x / cellWidth);
		const r = Math.floor(y / cellHeight);

		if (r >= 0 && r < rows && c >= 0 && c < cols) {
			const cellCenterX = (c + 0.5) * cellWidth;
			const cellCenterY = (r + 0.5) * cellHeight;
			const dist = Math.hypot(x - cellCenterX, y - cellCenterY);
			const activeRadius = Math.min(cellWidth, cellHeight) * 0.45;
			if (dist < activeRadius) {
				handleCellEnter(r, c);
			}
		}
	}

	function handleCellEnd() {
		if (!isDragging) return;
		isDragging = false;
		submitWord();
	}

	// Global pointer-up safety
	function handleGlobalMouseUp() {
		if (isDragging) {
			isDragging = false;
			submitWord();
		}
	}

	function getPossibleStrings(path: Array<{ r: number; c: number }>): string[] {
		let results = [''];
		for (const p of path) {
			const cellVal = grid[p.r][p.c];
			const options = cellVal.split('/');
			const nextResults: string[] = [];
			for (const opt of options) {
				for (const res of results) {
					nextResults.push(res + opt);
				}
			}
			results = nextResults;
		}
		return results;
	}

	$: currentWordOptions = getPossibleStrings(selectedPath);
	$: currentWord = selectedPath.map((p) => grid[p.r][p.c]).join('');
	$: currentWordDisplay = selectedPath.map((p) => grid[p.r][p.c]).join(' ');
	$: currentWordValid = selectedPath.length >= 3 && currentWordOptions.some((w) => search(w));

	function showFeedback(msg: string, type: 'success' | 'error' | 'info') {
		feedbackMessage = msg;
		feedbackType = type;
		clearTimeout(feedbackTimeout);
		feedbackTimeout = setTimeout(() => {
			feedbackMessage = '';
			feedbackType = '';
		}, 2000);
	}

	function submitWord() {
		const path = selectedPath;
		selectedPath = [];

		if (path.length === 0) return;

		const options = getPossibleStrings(path);
		const validWords = options.filter(search);

		if (path.length < 3) {
			showFeedback('คำต้องมีความยาวอย่างน้อย 3 ตัวอักษรขึ้นไป', 'info');
			playSFX('incorrect');
			return;
		}

		if (validWords.length > 0) {
			let addedAny = false;
			for (const word of validWords) {
				if (!foundWords.has(word)) {
					foundWords.add(word);
					score += getWordScore(word);
					addedAny = true;
				}
			}
			if (addedAny) {
				foundWords = foundWords; // trigger reactivity
				showFeedback(`ยอดเยี่ยม! พบคำว่า "${validWords.join(', ')}"`, 'success');
				playSFX('correct');
			} else {
				showFeedback(`คำนี้ถูกหาเจอไปแล้ว`, 'info');
				playSFX('incorrect');
			}
		} else {
			const rawWord = options[0] || '';
			showFeedback(`"${rawWord}" ไม่อยู่ในพจนานุกรม`, 'error');
			playSFX('incorrect');
		}
	}

	// Convert cell coordinate to SVG relative line percentage (0 - 100 viewBox coordinate)
	function getCellSVGCoord(val: number): number {
		return (val + 0.5) * 25;
	}

	$: pathSVGData =
		selectedPath.length > 0
			? `M ${getCellSVGCoord(selectedPath[0].c)} ${getCellSVGCoord(selectedPath[0].r)} ` +
			  selectedPath
					.slice(1)
					.map((p) => `L ${getCellSVGCoord(p.c)} ${getCellSVGCoord(p.r)}`)
					.join(' ')
			: '';

	onMount(() => {
		generateBoard();
	});

	onDestroy(() => {
		clearInterval(timerInterval);
	});
</script>

<svelte:head>
	<title>Code Breaker | Boggle</title>
</svelte:head>

<!-- Global pointer release tracking -->
<svelte:window on:pointerup={handleGlobalMouseUp} />

<div class="min-h-screen bg-[#0b0f19] text-white p-2 md:p-8 flex flex-col items-center">
	<!-- Title -->
	<div class="text-center mb-3 md:mb-8 flex flex-col items-center gap-2 relative">
		<h1
			class="text-3xl md:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent flex items-center justify-center gap-2.5"
		>
			ปริศนาเส้นทางศัพท์
			<button
				on:click={() => (showRulesModal = true)}
				class="p-1.5 bg-slate-800 hover:bg-slate-700 rounded-lg text-slate-400 hover:text-white transition-colors"
				title="วิธีเล่น"
			>
				<InfoIcon size="16" />
			</button>
		</h1>
		<p class="hidden md:block text-xs md:text-sm text-slate-400 font-medium">
			ลากเส้นเชื่อมตัวอักษรที่อยู่ติดกันต่อเนื่อง เพื่อผสมคำภาษาไทยในพจนานุกรม
		</p>
	</div>

	<!-- Main Layout -->
	<div class="w-full max-w-5xl grid lg:grid-cols-12 gap-3 md:gap-8 items-start">
		<!-- Left Column: The Interactive Board -->
		<div class="lg:col-span-7 flex flex-col gap-3 md:gap-6 items-center w-full">
			<!-- Current Word Drag preview bar -->
			<div
				class="w-full h-14 bg-slate-900/90 border border-slate-800 rounded-2xl flex items-center justify-between px-6 shadow-xl relative overflow-hidden"
			>
				{#if feedbackMessage}
					<div
						class="absolute inset-0 flex items-center justify-end gap-3 px-6 transition-all duration-300 z-30
						{feedbackType === 'success' ? 'bg-emerald-950/90 text-emerald-300' : ''}
						{feedbackType === 'error' ? 'bg-red-950/90 text-red-300' : ''}
						{feedbackType === 'info' ? 'bg-slate-855 text-slate-300' : ''}"
						in:fly={{ y: 5, duration: 150 }}
					>
						<span class="text-sm font-black flex items-center gap-1.5">
							{#if feedbackType === 'success'}
								<CheckCircleIcon size="16" class="text-emerald-400" />
							{:else if feedbackType === 'error'}
								<XCircleIcon size="16" class="text-rose-400" />
							{:else}
								<InfoIcon size="16" class="text-sky-400" />
							{/if}
							{feedbackMessage}
						</span>
						<button
							on:click={() => (feedbackMessage = '')}
							class="text-slate-400 hover:text-white p-1"
						>
							<XIcon size="14" />
						</button>
					</div>
				{/if}

				<div class="flex items-center gap-2">
					<span class="text-xs font-bold text-slate-400 uppercase tracking-wider">กำลังสร้าง:</span>
					<span class="text-2xl font-black text-white tracking-wide">
						{currentWordDisplay || '...'}
					</span>
				</div>
				{#if selectedPath.length >= 2}
					<div class="flex items-center gap-1">
						{#if selectedPath.length < 3}
							<span
								class="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/20 text-amber-400 border border-amber-500/30"
							>
								สั้นเกินไป
							</span>
						{:else}
							<span
								class="px-2.5 py-0.5 rounded-full text-[10px] font-bold {currentWordValid
									? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
									: 'bg-slate-800 text-slate-400'}"
							>
								{currentWordValid ? 'เป็นคำศัพท์' : 'รอสร้างต่อ'}
							</span>
						{/if}
					</div>
				{/if}
			</div>

			<!-- Boggle Grid wrapper -->
			<div
				bind:this={gridContainer}
				on:pointermove={handlePointerMove}
				style="touch-action: none;"
				class="relative w-full max-w-[400px] aspect-square bg-slate-900/60 border border-slate-800/80 rounded-3xl p-3 shadow-2xl overflow-hidden select-none"
			>
				<!-- SVG Connection line overlay -->
				<svg
					class="absolute inset-0 w-full h-full pointer-events-none z-10 p-3"
					viewBox="0 0 100 100"
				>
					{#if pathSVGData}
						<path
							d={pathSVGData}
							stroke="rgba(45, 212, 191, 0.45)"
							stroke-width="5"
							stroke-linecap="round"
							stroke-linejoin="round"
							fill="none"
							class="drop-shadow-[0_0_8px_rgba(45,212,191,0.4)]"
						/>
					{/if}
				</svg>

				<!-- 4x4 Grid Cells -->
				<div
					class="grid grid-cols-4 grid-rows-4 gap-2.5 h-full w-full transition-all duration-300 {gameEnded
						? 'opacity-40 grayscale pointer-events-none'
						: ''}"
				>
					{#each grid as row, r}
						{#each row as char, c}
							{@const isSelected = selectedPath.some((p) => p.r === r && p.c === c)}
							{@const isLastSelected =
								selectedPath.length > 0 &&
								selectedPath[selectedPath.length - 1].r === r &&
								selectedPath[selectedPath.length - 1].c === c}
							<!-- svelte-ignore a11y-no-static-element-interactions -->
							<div
								on:pointerdown={() => handleCellStart(r, c)}
								on:pointerup={handleCellEnd}
								data-row={r}
								data-col={c}
								class="relative flex items-center justify-center rounded-2xl cursor-pointer transition-all duration-150 border active:scale-95 shadow-inner
									{isSelected
									? isLastSelected
										? 'bg-teal-500 border-teal-400 text-slate-950 scale-105 shadow-[0_0_15px_rgba(45,212,191,0.5)] z-20'
										: 'bg-slate-800/90 border-teal-500/50 text-teal-300 z-15'
									: 'bg-slate-950/80 border-slate-800/80 text-white hover:bg-slate-850 hover:border-slate-700'}"
							>
								<!-- Letter text layout optimized for Thai accents and combined characters -->
								{#if char.includes('/')}
									{@const symbols = char.split('/')}
									<div
										class="grid h-full w-full select-none pointer-events-none text-center rounded-2xl overflow-hidden
										{symbols.length === 2 ? 'grid-cols-2 divide-x' : 'grid-cols-2 grid-rows-2 divide-x divide-y'}
										{isSelected ? 'divide-teal-500/35' : 'divide-slate-800/60'}"
									>
										{#each symbols as symbol}
											<div class="flex items-center justify-center h-full w-full">
												<span
													class="font-black select-none pointer-events-none tracking-tighter"
													class:text-3xl={symbols.length === 2}
													class:text-xl={symbols.length > 2}
													class:md:text-4xl={symbols.length === 2}
													class:md:text-2xl={symbols.length > 2}
												>
													{symbol}
												</span>
											</div>
										{/each}
									</div>
								{:else}
									<span
										class="font-black select-none pointer-events-none tracking-tighter text-4xl md:text-5xl"
										class:text-5xl={isUpper(char) || isLower(char)}
										class:md:text-6xl={isUpper(char) || isLower(char)}
										class:translate-x-2={isUpper(char) || isLower(char)}
										class:translate-y-1.5={!isLower(char)}
									>
										{char}
									</span>
								{/if}
							</div>
						{/each}
					{/each}
				</div>

				<!-- Game Starting Mask -->
				{#if !isPlaying && !gameEnded}
					<div
						class="absolute inset-0 bg-slate-950/85 backdrop-blur-[3px] z-30 flex flex-col items-center justify-center p-6 text-center"
					>
						<div class="flex flex-col items-center gap-4 max-w-[280px]">
							<div
								class="w-14 h-14 bg-teal-500/10 border border-teal-500/30 rounded-2xl flex items-center justify-center text-teal-400 shadow-inner"
							>
								<CompassIcon size="28" />
							</div>
							<div class="flex flex-col gap-1.5">
								<h3 class="text-lg font-bold text-white">พร้อมเล่นไหม? ⏱️</h3>
								<p class="text-xs text-slate-400 leading-relaxed font-medium">
									เวลาจำกัด 2 นาที คุณจะหาคำภาษาไทยในตาราง 4x4 ได้ทั้งหมดกี่คำ?
								</p>
							</div>
							<button
								on:click={startNewGame}
								class="flex items-center justify-center gap-2 py-3 bg-teal-500 hover:bg-teal-600 text-slate-950 font-bold rounded-xl shadow-lg hover:shadow-teal-500/20 active:scale-[0.98] transition-all w-full text-sm"
							>
								<PlayCircleIcon size="16" />
								เริ่มเล่นเกม
							</button>
						</div>
					</div>
				{/if}
			</div>
		</div>

		<!-- Right Column: Stats, Timers, List of Found Words -->
		<div class="lg:col-span-5 flex flex-col gap-3 md:gap-6">
			<!-- Score & Timer Card -->
			<div
				class="w-full h-14 bg-slate-900/90 border border-slate-800 rounded-2xl flex items-center justify-between px-6 shadow-xl relative overflow-hidden"
			>
				<div class="flex items-center gap-3">
					<AwardIcon size="18" class="text-amber-400" />
					<div class="flex items-center gap-1.5">
						<span class="text-xs font-bold text-slate-400 uppercase tracking-wider">คะแนน:</span>
						<span class="text-xl font-black text-white font-mono">{score}</span>
					</div>
				</div>

				<div class="divider divider-horizontal my-2.5 opacity-20" />

				<div class="flex items-center gap-3">
					<div
						class="w-8 h-8 rounded-lg flex items-center justify-center
						{timeLeft > 20
							? 'bg-teal-500/10 border border-teal-500/30 text-teal-400'
							: 'bg-red-500/10 border border-red-500/30 text-red-400 animate-pulse'}"
					>
						<span class="font-bold text-sm font-mono">{timeLeft}</span>
					</div>
					<div class="flex flex-col">
						<span class="text-xs font-semibold text-slate-200">
							{Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
						</span>
					</div>
				</div>

				<!-- Timer Bar absolute at bottom -->
				<div class="absolute bottom-0 left-0 w-full bg-slate-950 h-1 overflow-hidden">
					<div
						class="h-full bg-gradient-to-r from-teal-400 to-emerald-500 transition-all duration-1000 ease-linear shadow-[0_0_8px_rgba(45,212,191,0.4)]"
						style="width: {(timeLeft / 120) * 100}%"
					/>
				</div>
			</div>

			<!-- Found Words Board -->
			<div
				class="bg-slate-900/90 border border-slate-800 p-4 md:p-5 rounded-2xl shadow-xl flex-1 flex flex-col min-h-[180px] md:min-h-[300px] max-h-[280px] md:max-h-[480px]"
			>
				{#if gameEnded}
					{@const pct =
						allPossibleWords.length > 0
							? Math.round((foundWords.size / allPossibleWords.length) * 100)
							: 0}
					<!-- Game ended results view -->
					<h3
						class="text-sm font-bold text-white uppercase tracking-widest flex items-center gap-1.5 border-b border-slate-800 pb-3 mb-3"
					>
						<AwardIcon size="16" class="text-amber-400 animate-bounce" />
						สรุปผลการเล่น
					</h3>

					<div
						class="grid grid-cols-2 gap-2 bg-slate-950 p-2.5 rounded-xl border border-slate-800/80 shadow-inner text-center mb-3"
					>
						<div class="flex flex-col">
							<span class="text-[9px] text-slate-400 font-bold uppercase tracking-wider"
								>คะแนนที่ทำได้</span
							>
							<span class="text-lg font-black text-teal-400 font-mono">{score} คะแนน</span>
						</div>
						<div class="flex flex-col">
							<span class="text-[9px] text-slate-400 font-bold uppercase tracking-wider"
								>คำที่พบ</span
							>
							<span class="text-lg font-black text-white font-mono">{pct}%</span>
						</div>
					</div>

					<div class="flex-1 overflow-y-auto flex flex-col gap-3 pr-1">
						<!-- List of words player found -->
						<div class="flex flex-col gap-1">
							<span class="text-xs font-bold text-emerald-400 flex items-center gap-1">
								<CheckCircleIcon size="11" />
								คำที่คุณพบ ({foundWords.size})
							</span>
							{#if foundWords.size === 0}
								<p class="text-[10px] text-slate-500 italic pl-1">ยังไม่มีคำศัพท์ที่พบ</p>
							{:else}
								<div class="flex flex-wrap gap-1">
									{#each Array.from(foundWords) as word}
										<span
											class="px-2 py-0.5 text-xs font-semibold bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 rounded-md"
										>
											{word}
										</span>
									{/each}
								</div>
							{/if}
						</div>

						<div class="divider my-0 opacity-10" />

						<!-- All missed words list -->
						<div class="flex flex-col gap-1">
							<span class="text-xs font-bold text-rose-400 flex items-center gap-1">
								<XCircleIcon size="11" />
								คำศัพท์ที่คุณพลาดไป ({missedWords.length})
							</span>
							{#if missedWords.length === 0}
								<p class="text-[10px] text-slate-500 italic pl-1">ยอดเยี่ยม! ไม่พลาดเลย</p>
							{:else}
								<div class="flex flex-wrap gap-1">
									{#each missedWords as word}
										<span
											class="px-2 py-0.5 text-xs font-semibold rounded-md border bg-slate-950/60 border-slate-800 text-slate-400"
										>
											{word}
										</span>
									{/each}
								</div>
							{/if}
						</div>
					</div>

					<button
						on:click={startNewGame}
						class="py-2.5 bg-teal-500 hover:bg-teal-600 text-slate-950 font-bold rounded-xl shadow-lg hover:shadow-teal-500/20 active:scale-[0.98] transition-all text-center w-full mt-3 text-xs"
					>
						เริ่มเล่นรอบใหม่
					</button>
				{:else}
					<!-- Normal playing view -->
					<h3
						class="text-sm font-bold text-slate-300 uppercase tracking-widest flex items-center justify-between border-b border-slate-800 pb-3 mb-3"
					>
						<span class="flex items-center gap-1.5">
							<CheckCircleIcon size="15" class="text-teal-400" />
							คำศัพท์ที่พบ ({foundWords.size} คำ)
						</span>
						<button
							on:click={() => (showPossibleCount = !showPossibleCount)}
							class="px-2.5 py-1 bg-slate-800 hover:bg-slate-700 active:scale-95 transition-all rounded-lg text-[9px] font-bold text-slate-400 hover:text-white shadow-sm"
						>
							{showPossibleCount ? 'ซ่อน' : 'แสดง'}จำนวนที่เป็นไปได้
						</button>
					</h3>

					{#if showPossibleCount}
						<div
							class="mb-3 text-[10px] text-slate-400 flex flex-wrap gap-x-2 gap-y-1 font-semibold items-center bg-slate-950/50 px-2.5 py-1.5 rounded-xl border border-slate-800/50 justify-between"
						>
							<div>
								3 ตัว: <span class="text-teal-400 font-mono font-bold"
									>{possibleCountsByLength['3'] || 0}</span
								>
							</div>
							<div class="w-1 h-1 rounded-full bg-slate-800" />
							<div>
								4 ตัว: <span class="text-teal-400 font-mono font-bold"
									>{possibleCountsByLength['4'] || 0}</span
								>
							</div>
							<div class="w-1 h-1 rounded-full bg-slate-800" />
							<div>
								5 ตัว: <span class="text-teal-400 font-mono font-bold"
									>{possibleCountsByLength['5'] || 0}</span
								>
							</div>
							<div class="w-1 h-1 rounded-full bg-slate-800" />
							<div>
								6+ ตัว: <span class="text-teal-400 font-mono font-bold"
									>{possibleCountsByLength['6+'] || 0}</span
								>
							</div>
							<div class="w-1 h-1 rounded-full bg-slate-800" />
							<div class="text-slate-300">
								รวม: <span class="text-teal-400 font-mono font-black"
									>{allPossibleWords.length}</span
								> คำ
							</div>
						</div>
					{/if}

					<div class="flex-1 overflow-y-auto flex flex-wrap gap-2.5 align-content-start pr-1">
						{#if foundWords.size === 0}
							<div
								class="w-full flex flex-col items-center justify-center gap-2 py-8 text-center text-slate-500 opacity-60"
							>
								<span class="text-3xl">🔍</span>
								<p class="text-xs font-medium">ยังไม่พบคำศัพท์ ลากเส้นบนตารางเพื่อหาคำศัพท์เลย!</p>
							</div>
						{:else}
							{#each Array.from(foundWords) as word}
								<span
									class="px-3 py-1.5 text-sm md:text-base font-bold bg-teal-500/10 text-teal-300 border border-teal-500/20 rounded-xl flex items-center gap-1 shadow-sm transition-all hover:scale-105"
								>
									{word}
									<span class="text-[10px] text-teal-450 font-mono font-black"
										>({getWordScore(word)})</span
									>
								</span>
							{/each}
						{/if}
					</div>

					<!-- End game actions -->
					{#if isPlaying}
						<button
							on:click={endGame}
							class="btn btn-outline border-slate-800 hover:bg-slate-850 w-full mt-4 gap-1.5 rounded-xl text-xs text-red-400 font-bold"
						>
							<XCircleIcon size="14" />
							เปิดเฉลย
						</button>
					{/if}
				{/if}
			</div>
		</div>
	</div>

	<!-- How to play Modal -->
	{#if showRulesModal}
		<div
			class="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/85 backdrop-blur-md p-4 transition-all duration-300"
		>
			<div
				class="bg-slate-900 border border-slate-800 rounded-3xl p-6 max-w-md w-full shadow-2xl flex flex-col gap-6 relative animate-in fade-in zoom-in-95 duration-200"
			>
				<button
					on:click={() => (showRulesModal = false)}
					class="absolute top-4 right-4 p-1.5 rounded-xl hover:bg-slate-800 text-slate-400 hover:text-white transition-all"
				>
					<XIcon size="18" />
				</button>

				<div class="flex items-center gap-3">
					<CompassIcon class="text-teal-400" size="24" />
					<h3 class="text-xl font-bold text-white">วิธีการเล่นเกมเส้นทางศัพท์</h3>
				</div>

				<div class="flex flex-col gap-4 text-xs md:text-sm text-slate-300 leading-relaxed">
					<div class="bg-slate-950 p-4 rounded-xl border border-slate-800/80 flex flex-col gap-2.5">
						<span class="text-teal-400 font-bold text-xs uppercase tracking-wider">กติกา</span>
						<ul class="list-disc text-left pl-5 flex flex-col gap-1.5 opacity-90">
							<li>คลิกเพื่อเชื่อมตัวอักษรที่ติดกันในแนวตั้ง แนวนอน หรือแนวทแยง</li>
							<li>ใช้ 3 ช่องหรือมากกว่า</li>
							<li>ห้ามใช้ช่องเดิมซ้ำ</li>
						</ul>
					</div>

					<div class="bg-slate-950 p-4 rounded-xl border border-slate-800/80 flex flex-col gap-2.5">
						<span class="text-amber-400 font-bold text-xs uppercase tracking-wider"
							>การนับคะแนน</span
						>
						<ul class="list-disc text-left pl-5 flex flex-col gap-1.5 opacity-90">
							<li>3 ตัวอักษร = 1 คะแนน</li>
							<li>4 ตัวอักษร = 2 คะแนน</li>
							<li>5 ตัวอักษร = 4 คะแนน</li>
							<li>6 ตัวอักษร = 6 คะแนน</li>
							<li>7 ตัวอักษรขึ้นไป = 9 คะแนน</li>
						</ul>
					</div>
				</div>

				<button
					on:click={() => (showRulesModal = false)}
					class="w-full py-3 bg-teal-500 hover:bg-teal-600 text-slate-950 font-bold rounded-xl shadow-lg transition-all text-center"
				>
					ปิด
				</button>
			</div>
		</div>
	{/if}
</div>

<style>
	:global(body) {
		background-color: #0b0f19;
	}
</style>
