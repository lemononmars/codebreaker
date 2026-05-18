<script lang="ts">
	import { onMount } from 'svelte';
	import { fade, scale } from 'svelte/transition';
	import TitleTab from '$lib/components/TitleTab.svelte';

	export let content: any;

	// Timer
	let seconds = 0;
	let timerInterval: NodeJS.Timeout;
	let solved = false;
	let showModal = false;
	let isPaused = false;

	function startTimer() {
		if (timerInterval) clearInterval(timerInterval);
		timerInterval = setInterval(() => {
			if (!solved && !isPaused) seconds++;
		}, 1000);
	}

	function togglePause() {
		if (solved) return;
		isPaused = !isPaused;
	}

	function resetTimer() {
		seconds = 0;
	}

	function formatTime(s: number) {
		const m = Math.floor(s / 60);
		const sec = s % 60;
		return `${m}:${sec.toString().padStart(2, '0')}`;
	}

	// Data loaded from builder (saved in clues)
	let grid: string[][] = [];
	let wordsData: { word: string; chars: string[]; found: boolean }[] = [];
	let gridSize = 10;
	
	// Game state
	type FoundWordLine = { startR: number; startC: number; endR: number; endC: number };
	let foundWordsLines: FoundWordLine[] = [];
	
	// Interaction state
	let isDragging = false;
	let dragStart: [number, number] | null = null;
	let dragCurrent: [number, number] | null = null;
	let currentSelection: [number, number][] = [];

	// UI Settings
	let scaleFactor = 1.0;
	$: cellSize = 36 * scaleFactor;

	function exportImage() {
		const canvas = document.createElement('canvas');
		const padding = 40;
		const boardSize = gridSize * 36; // default size for export
		const wordsPanelWidth = 300;
		const height = Math.max(boardSize, wordsData.length * 30 + 50) + padding * 2 + 50;
		const width = boardSize + wordsPanelWidth + padding * 3;

		canvas.width = width;
		canvas.height = height;
		const ctx = canvas.getContext('2d');
		if (!ctx) return;

		// Draw background
		ctx.fillStyle = '#ffffff';
		ctx.fillRect(0, 0, width, height);

		// Draw Title
		ctx.fillStyle = '#000000';
		ctx.font = 'bold 32px sans-serif';
		ctx.textAlign = 'left';
		ctx.fillText(content?.title || 'Word Search', padding, padding);

		// Draw Grid
		ctx.font = 'bold 20px sans-serif';
		ctx.textAlign = 'center';
		ctx.textBaseline = 'middle';
		
		const gridX = padding;
		const gridY = padding + 40;

		for (let r = 0; r < gridSize; r++) {
			for (let c = 0; c < gridSize; c++) {
				const x = gridX + c * 36 + 18;
				const y = gridY + r * 36 + 18;
				ctx.fillStyle = '#000000';
				ctx.fillText(grid[r][c], x, y);
			}
		}

		// Draw SVG Lines (Found words) - REMOVED so the exported image is a clean unsolved puzzle.
		
		// Draw Word List
		ctx.textAlign = 'left';
		ctx.font = 'bold 24px sans-serif';
		const listX = gridX + boardSize + padding;
		ctx.fillStyle = '#000000';
		ctx.fillText('คำศัพท์ที่ต้องหา', listX, gridY + 20);
		
		ctx.font = '20px sans-serif';
		let currY = gridY + 60;
		wordsData.forEach(w => {
			ctx.fillStyle = '#000000';
			ctx.fillText(w.word, listX, currY);
			currY += 30;
		});

		// Download
		const link = document.createElement('a');
		link.download = `${content?.title || 'wordsearch'}.png`;
		link.href = canvas.toDataURL('image/png');
		link.click();
	}

	function initGame() {
		if (content.clues) {
			grid = content.clues.grid || [];
			wordsData = content.clues.wordsData || [];
			gridSize = grid.length || 10;
		}
	}

	$: if (content) {
		if (typeof window !== 'undefined') {
			initGame();
			startTimer();
		}
	}

	onMount(() => {
		const handleMouseUp = () => endDrag();
		window.addEventListener('mouseup', handleMouseUp);
		window.addEventListener('touchend', handleMouseUp);
		return () => {
			if (timerInterval) clearInterval(timerInterval);
			window.removeEventListener('mouseup', handleMouseUp);
			window.removeEventListener('touchend', handleMouseUp);
		};
	});

	function getLine(r1: number, c1: number, r2: number, c2: number) {
		const dr = r2 - r1;
		const dc = c2 - c1;
		// Must be straight line (horizontal, vertical, or perfectly diagonal)
		if (dr !== 0 && dc !== 0 && Math.abs(dr) !== Math.abs(dc)) return [];
		
		const steps = Math.max(Math.abs(dr), Math.abs(dc));
		const stepR = dr === 0 ? 0 : dr / steps;
		const stepC = dc === 0 ? 0 : dc / steps;
		
		const line: [number, number][] = [];
		for (let i = 0; i <= steps; i++) {
			line.push([r1 + i * stepR, c1 + i * stepC]);
		}
		return line;
	}

	function startDrag(r: number, c: number) {
		if (solved) return;
		isDragging = true;
		dragStart = [r, c];
		dragCurrent = [r, c];
		currentSelection = [[r, c]];
	}

	function onDragOver(r: number, c: number) {
		if (!isDragging || !dragStart) return;
		dragCurrent = [r, c];
		currentSelection = getLine(dragStart[0], dragStart[1], dragCurrent[0], dragCurrent[1]);
	}

	function endDrag() {
		if (!isDragging) return;
		isDragging = false;
		
		if (currentSelection.length > 1) {
			checkSelection();
		}
		
		currentSelection = [];
		dragStart = null;
		dragCurrent = null;
	}

	function checkSelection() {
		const selectedStr = currentSelection.map(([r, c]) => grid[r][c]).join('');
		const selectedStrRev = [...currentSelection].reverse().map(([r, c]) => grid[r][c]).join('');

		let foundOne = false;
		for (let w of wordsData) {
			if (!w.found) {
				const wordStr = w.chars.join('');
				if (wordStr === selectedStr || wordStr === selectedStrRev) {
					w.found = true;
					foundOne = true;
					// Record the line for SVG overlay
					foundWordsLines = [...foundWordsLines, {
						startR: currentSelection[0][0],
						startC: currentSelection[0][1],
						endR: currentSelection[currentSelection.length - 1][0],
						endC: currentSelection[currentSelection.length - 1][1]
					}];
				}
			}
		}

		if (foundOne) {
			wordsData = wordsData;
			checkWin();
		}
	}

	function checkWin() {
		if (wordsData.every(w => w.found)) {
			solved = true;
			showModal = true;
			if (timerInterval) clearInterval(timerInterval);
		}
	}

	// Touch handlers for mobile dragging
	function handleTouchMove(e: TouchEvent) {
		if (!isDragging) return;
		e.preventDefault();
		const touch = e.touches[0];
		const element = document.elementFromPoint(touch.clientX, touch.clientY);
		if (element && element.hasAttribute('data-r')) {
			const r = parseInt(element.getAttribute('data-r')!);
			const c = parseInt(element.getAttribute('data-c')!);
			onDragOver(r, c);
		}
	}
</script>

<div class="max-w-6xl mx-auto px-4 py-8">
	<div class="flex flex-col md:flex-row justify-between items-center gap-4 mb-4">
		<div class="flex-1">
			<TitleTab {content} />
			{#if content.author}
				<p class="text-sm text-base-content/60 mt-1">โดย <span class="font-bold">{content.author}</span></p>
			{/if}
		</div>
		<div class="flex items-center gap-2">
			<div class="text-3xl font-mono font-black {isPaused ? 'text-base-content/40' : 'text-primary'} bg-primary/10 px-6 py-2 rounded-full shadow-sm border border-primary/20 transition-colors">
				{formatTime(seconds)}
			</div>
			<button class="btn btn-circle btn-ghost" on:click={togglePause} title={isPaused ? 'เล่นต่อ' : 'หยุดเวลา'}>
				{#if isPaused}
					<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
				{:else}
					<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
				{/if}
			</button>
			<button class="btn btn-circle btn-ghost" on:click={resetTimer} title="เริ่มเวลาใหม่">
				<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
			</button>
			<button class="btn btn-circle btn-ghost" on:click={exportImage} title="บันทึกเป็นรูปภาพ">
				<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
			</button>
		</div>
	</div>

	<!-- Controls -->
	<div class="flex justify-end mb-4 items-center gap-3">
		<span class="text-sm font-bold text-base-content/60">ขนาดตัวอักษร:</span>
		<input type="range" min="0.6" max="1.5" step="0.1" bind:value={scaleFactor} class="range range-primary range-xs w-32" />
	</div>

	<div class="grid lg:grid-cols-3 gap-8">
		<!-- Left: The Grid (with SVG overlay) -->
		<div class="lg:col-span-2 flex justify-center items-start overflow-x-auto pb-4">
			<div 
				class="bg-base-200 p-4 rounded-3xl shadow-xl inline-block select-none touch-none border border-base-300 relative"
				on:touchmove={handleTouchMove}
			>
				{#if isPaused}
					<div class="absolute inset-0 bg-base-100/80 backdrop-blur-sm z-30 flex items-center justify-center rounded-3xl">
						<span class="text-3xl font-black text-base-content/60">หยุดพัก</span>
					</div>
				{/if}
				<div 
					class="relative" 
					style="width: {gridSize * cellSize}px; height: {gridSize * cellSize}px;"
				>
					<!-- SVG Overlays for selections -->
					<svg class="absolute inset-0 pointer-events-none z-10" width="100%" height="100%">
						<!-- Found words -->
						{#each foundWordsLines as fw}
							<line 
								x1={fw.startC * cellSize + cellSize/2} 
								y1={fw.startR * cellSize + cellSize/2}
								x2={fw.endC * cellSize + cellSize/2}
								y2={fw.endR * cellSize + cellSize/2}
								stroke="currentColor" 
								class="text-success opacity-50" 
								stroke-width={cellSize * 0.6} 
								stroke-linecap="round" 
							/>
						{/each}
						
						<!-- Current dragging selection -->
						{#if isDragging && currentSelection.length > 0}
							<line 
								x1={currentSelection[0][1] * cellSize + cellSize/2} 
								y1={currentSelection[0][0] * cellSize + cellSize/2}
								x2={currentSelection[currentSelection.length-1][1] * cellSize + cellSize/2}
								y2={currentSelection[currentSelection.length-1][0] * cellSize + cellSize/2}
								stroke="currentColor" 
								class="text-primary opacity-50 drop-shadow-md" 
								stroke-width={cellSize * 0.6} 
								stroke-linecap="round" 
							/>
						{/if}
					</svg>

					<!-- CSS Grid of cells without borders -->
					<div 
						class="absolute inset-0 grid" 
						style="grid-template-columns: repeat({gridSize}, 1fr); grid-template-rows: repeat({gridSize}, 1fr);"
					>
						{#each grid as row, r}
							{#each row as cell, c}
								<div
									data-r={r}
									data-c={c}
									class="flex items-center justify-center font-bold text-base-content hover:bg-base-content/10 transition-colors cursor-pointer rounded-full z-20"
									style="font-size: {1.1 * scaleFactor}rem;"
									on:mousedown={() => { if (!isPaused) startDrag(r, c); }}
									on:mouseenter={() => { if (!isPaused) onDragOver(r, c); }}
									on:touchstart|preventDefault={() => { if (!isPaused) startDrag(r, c); }}
								>
									{cell}
								</div>
							{/each}
						{/each}
					</div>
				</div>
			</div>
		</div>

		<!-- Right: The Word List -->
		<div class="bg-base-200 rounded-3xl p-6 border border-base-300 shadow-xl max-h-[80vh] flex flex-col">
			<div class="flex items-center gap-3 mb-6">
				<div class="w-2 h-8 bg-primary rounded-full"></div>
				<h2 class="text-2xl font-black">คำศัพท์ที่ต้องหา</h2>
			</div>
			
			<div class="flex-1 overflow-y-auto pr-2 space-y-2">
				{#each wordsData as w}
					<div 
						class="px-4 py-3 rounded-2xl flex items-center justify-between transition-all duration-300 border border-base-100"
						class:bg-success={w.found}
						class:text-success-content={w.found}
						class:bg-base-100={!w.found}
						class:shadow-sm={!w.found}
					>
						<span class="text-lg font-bold {w.found ? 'line-through opacity-80' : ''}">
							{w.word}
						</span>
						{#if w.found}
							<span class="text-success-content font-black scale-110 transition-transform">✓</span>
						{/if}
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>

{#if showModal}
	<div class="modal modal-open bg-black/60 backdrop-blur-md z-50" transition:fade>
		<div class="modal-box bg-base-100 border border-white/10 shadow-2xl text-center p-12 rounded-3xl" transition:scale>
			<div class="text-7xl mb-6 animate-bounce">🏆</div>
			<h3 class="text-4xl font-black mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">เก่งมาก!</h3>
			<p class="text-xl text-base-content/80 mb-8 font-medium">คุณหาคำศัพท์ครบทุกคำแล้ว<br/>ใช้เวลาไป <span class="font-bold text-primary">{formatTime(seconds)}</span> นาที</p>
			<div class="flex gap-4 justify-center">
				<button class="btn btn-primary btn-lg shadow-xl px-8 rounded-full" on:click={() => { showModal = false; seconds = 0; startTimer(); solved = false; foundWordsLines = []; wordsData.forEach(w => w.found = false); wordsData=wordsData; }}>
					เล่นอีกครั้ง
				</button>
				<button class="btn btn-ghost btn-lg px-8 rounded-full" on:click={() => showModal = false}>
					ปิดหน้าต่าง
				</button>
			</div>
		</div>
	</div>
{/if}
