<script lang="ts">
	import { wordSearchSvg, wordSearchExcel } from '$lib/wordsearchExport';
	import { onMount } from 'svelte';
	import { fade, scale } from 'svelte/transition';
	import TitleTab from '$lib/components/TitleTab.svelte';
	import { RepeatIcon } from 'svelte-feather-icons';

	export let content: any;

	// Timer
	let seconds = 0;
	let timerInterval: NodeJS.Timeout;
	let solved = false;
	let showModal = false;
	let isPaused = false;
	// Layout Flip State (Desktop Grid left / Wordlist right)
	let isFlipped = false;
	let downloadMenu: HTMLDetailsElement;
	let audioContext: AudioContext | null = null;

	async function playSound(kind: 'click' | 'select' | 'found') {
		try {
			const Context = window.AudioContext || (window as any).webkitAudioContext;
			if (!Context) return;
			if (!audioContext) audioContext = new Context();
			const context = audioContext!;
			if (context.state === 'suspended') await context.resume();
			if (context.state === 'closed') return;
			const notes = kind === 'found' ? [523.25, 659.25, 783.99] : [kind === 'click' ? 440 : 660];
			const duration = kind === 'found' ? 0.16 : 0.05;
			const now = context.currentTime;
			notes.forEach((frequency, index) => {
				const oscillator = context.createOscillator();
				const gain = context.createGain();
				const start = now + index * 0.09;
				oscillator.type = 'sine';
				oscillator.frequency.setValueAtTime(frequency, start);
				gain.gain.setValueAtTime(0, start);
				gain.gain.linearRampToValueAtTime(0.06, start + 0.005);
				gain.gain.exponentialRampToValueAtTime(0.001, start + duration);
				oscillator.connect(gain);
				gain.connect(context.destination);
				oscillator.onended = () => {
					oscillator.disconnect();
					gain.disconnect();
				};
				oscillator.start(start);
				oscillator.stop(start + duration);
			});
		} catch {
			// Audio may be unavailable; puzzle interactions still work.
		}
	}

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

	$: grid = (content?.clues?.grid || []) as string[][];
	$: wordsData = (content?.clues?.wordsData || []) as {
		word: string;
		chars: string[];
		found: boolean;
	}[];
	$: gridSize = grid.length || 10;
	$: gridColumns = grid[0]?.length || 10;

	type FoundWordLine = { startR: number; startC: number; endR: number; endC: number };
	let foundWordsLines: FoundWordLine[] = [];

	let isDragging = false;
	let dragStart: [number, number] | null = null;
	let dragCurrent: [number, number] | null = null;
	let currentSelection: [number, number][] = [];

	let scaleFactor = 1;
	$: cellSize = 36 * scaleFactor;

	function downloadExport(format: 'svg' | 'excel') {
		downloadMenu.open = false;
		if (!grid.length) return;
		const words = wordsData.map((w) => w.word);
		const contents =
			format === 'svg'
				? wordSearchSvg(grid, words, content?.title || '', content?.author || '', cellSize)
				: wordSearchExcel(grid, words, content?.title || '', content?.author || '');
		const url = URL.createObjectURL(
			new Blob([contents], {
				type: format === 'svg' ? 'image/svg+xml;charset=utf-8' : 'application/xml;charset=utf-8'
			})
		);
		const link = document.createElement('a');
		link.href = url;
		link.download = `${(content?.title || 'wordsearch').replace(/[<>:"/\\|?*]/g, '_')}.${
			format === 'svg' ? 'svg' : 'xml'
		}`;
		link.click();
		setTimeout(() => URL.revokeObjectURL(url), 1000);
	}

	function exportImage() {
		downloadMenu.open = false;
		const canvas = document.createElement('canvas');
		const padding = 40;
		const boardWidth = gridColumns * 36;
		const boardHeight = gridSize * 36;
		const wordsPanelWidth = 300;
		const height = Math.max(boardHeight, wordsData.length * 30 + 50) + padding * 2 + 50;
		const width = boardWidth + wordsPanelWidth + padding * 3;

		canvas.width = width;
		canvas.height = height;
		const ctx = canvas.getContext('2d');
		if (!ctx) return;

		ctx.fillStyle = '#ffffff';
		ctx.fillRect(0, 0, width, height);

		ctx.fillStyle = '#000000';
		ctx.font = 'bold 32px sans-serif';
		ctx.textAlign = 'left';
		ctx.fillText(content?.title || 'Word Search', padding, padding);

		ctx.font = 'bold 20px sans-serif';
		ctx.textAlign = 'center';
		ctx.textBaseline = 'middle';

		const gridX = padding;
		const gridY = padding + 40;

		for (let r = 0; r < gridSize; r++) {
			for (let c = 0; c < gridColumns; c++) {
				const x = gridX + c * 36 + 18;
				const y = gridY + r * 36 + 18;
				ctx.fillStyle = '#000000';
				ctx.fillText(grid[r][c], x, y);
			}
		}

		ctx.textAlign = 'left';
		ctx.font = 'bold 24px sans-serif';
		const listX = gridX + boardWidth + padding;
		ctx.fillStyle = '#000000';
		ctx.fillText('คำศัพท์ที่ต้องหา', listX, gridY + 20);

		ctx.font = '20px sans-serif';
		let currY = gridY + 60;
		wordsData.forEach((w) => {
			ctx.fillStyle = '#000000';
			ctx.fillText(w.word, listX, currY);
			currY += 30;
		});

		const link = document.createElement('a');
		link.download = `${content?.title || 'wordsearch'}.png`;
		link.href = canvas.toDataURL('image/png');
		link.click();
	}

	onMount(() => {
		startTimer();
		const handleMouseUp = () => endDrag();
		window.addEventListener('mouseup', handleMouseUp);
		window.addEventListener('touchend', handleMouseUp);
		return () => {
			if (timerInterval) clearInterval(timerInterval);
			if (audioContext) void audioContext.close().catch(() => {});
			window.removeEventListener('mouseup', handleMouseUp);
			window.removeEventListener('touchend', handleMouseUp);
		};
	});

	function getLine(r1: number, c1: number, r2: number, c2: number) {
		const dr = r2 - r1;
		const dc = c2 - c1;
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
		if (solved || isPaused) return;
		void playSound('click');
		isDragging = true;
		dragStart = [r, c];
		dragCurrent = [r, c];
		currentSelection = [[r, c]];
	}

	function onDragOver(r: number, c: number) {
		if (!isDragging || !dragStart || isPaused) return;
		if (dragCurrent?.[0] === r && dragCurrent?.[1] === c) return;
		dragCurrent = [r, c];
		currentSelection = getLine(dragStart[0], dragStart[1], dragCurrent[0], dragCurrent[1]);
		if (currentSelection.length) void playSound('select');
	}

	async function endDrag() {
		if (!isDragging) return;
		isDragging = false;

		let foundOne = false;
		if (currentSelection.length > 0) {
			try {
				const res = await fetch('/api/wordsearch/verify', {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify({ grid, words: wordsData, selectionCoords: currentSelection })
				});
				const data = await res.json();
				if (
					data.matched &&
					typeof data.index === 'number' &&
					wordsData[data.index] &&
					!wordsData[data.index].found
				) {
					wordsData[data.index].found = true;
					foundOne = true;
					foundWordsLines = [...foundWordsLines, data.line];
				}
			} catch {
				const selectedText = currentSelection.map(([r, c]) => grid[r][c]).join('');
				const reversedText = selectedText.split('').reverse().join('');
				const cleanSel = selectedText.normalize('NFC').trim();
				const cleanRev = reversedText.normalize('NFC').trim();

				for (let w of wordsData) {
					const cleanW = (w.word || '').normalize('NFC').trim();
					const charsStr = Array.isArray(w.chars) ? w.chars.join('').normalize('NFC').trim() : '';

					const matches =
						w.word === selectedText ||
						w.word === reversedText ||
						cleanW === cleanSel ||
						cleanW === cleanRev ||
						(charsStr && (charsStr === cleanSel || charsStr === cleanRev));

					if (!w.found && matches) {
						w.found = true;
						foundOne = true;
						foundWordsLines = [
							...foundWordsLines,
							{
								startR: currentSelection[0][0],
								startC: currentSelection[0][1],
								endR: currentSelection[currentSelection.length - 1][0],
								endC: currentSelection[currentSelection.length - 1][1]
							}
						];
					}
				}
			}
		}

		if (foundOne) {
			void playSound('found');
			wordsData = [...wordsData];
			checkWin();
		}
	}

	function checkWin() {
		if (wordsData.every((w) => w.found)) {
			solved = true;
			showModal = true;
			if (timerInterval) clearInterval(timerInterval);
		}
	}

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

<div
	class="w-full max-w-none mx-auto px-2 sm:px-4 py-4 flex flex-col lg:flex-row items-center lg:items-start justify-center gap-6 select-none overflow-x-hidden {isFlipped
		? 'lg:flex-row-reverse'
		: ''}"
>
	<!-- MAIN COLUMN: GRID BOARD -->
	<div class="flex-1 min-w-0 w-full overflow-x-auto">
		<div
			class="bg-base-200 p-2 sm:p-4 rounded-3xl shadow-xl w-max mx-auto select-none touch-none border border-base-300 relative"
			on:touchmove={handleTouchMove}
		>
			{#if isPaused}
				<div
					class="absolute inset-0 bg-base-100/80 backdrop-blur-sm z-30 flex items-center justify-center rounded-3xl"
				>
					<span class="text-2xl font-black text-base-content/60">หยุดพัก</span>
				</div>
			{/if}
			<div
				class="relative mx-auto"
				style="width: {gridColumns * cellSize}px; height: {gridSize * cellSize}px;"
			>
				<svg class="absolute inset-0 pointer-events-none z-10" width="100%" height="100%">
					{#each foundWordsLines as fw}
						<line
							x1={fw.startC * cellSize + cellSize / 2}
							y1={fw.startR * cellSize + cellSize / 2}
							x2={fw.endC * cellSize + cellSize / 2}
							y2={fw.endR * cellSize + cellSize / 2}
							stroke="currentColor"
							class="text-success opacity-50"
							stroke-width={cellSize * 0.65}
							stroke-linecap="round"
						/>
					{/each}

					{#if isDragging && currentSelection.length > 0}
						<line
							x1={currentSelection[0][1] * cellSize + cellSize / 2}
							y1={currentSelection[0][0] * cellSize + cellSize / 2}
							x2={currentSelection[currentSelection.length - 1][1] * cellSize + cellSize / 2}
							y2={currentSelection[currentSelection.length - 1][0] * cellSize + cellSize / 2}
							stroke="currentColor"
							class="text-primary opacity-50 drop-shadow-md"
							stroke-width={cellSize * 0.65}
							stroke-linecap="round"
						/>
					{/if}
				</svg>

				<div
					class="absolute inset-0 grid"
					style="grid-template-columns: repeat({gridColumns}, {cellSize}px); grid-template-rows: repeat({gridSize}, {cellSize}px);"
				>
					{#each grid as row, r}
						{#each row as cell, c}
							<div
								data-r={r}
								data-c={c}
								class="flex items-center justify-center font-bold text-base-content hover:bg-base-content/10 transition-colors cursor-pointer rounded-full leading-none min-w-0 min-h-0 z-20"
								style="font-size: {cellSize * 0.035}rem;"
								on:mousedown={() => {
									if (!isPaused) startDrag(r, c);
								}}
								on:mouseenter={() => {
									if (!isPaused) onDragOver(r, c);
								}}
								on:touchstart|preventDefault={() => {
									if (!isPaused) startDrag(r, c);
								}}
							>
								{cell}
							</div>
						{/each}
					{/each}
				</div>
			</div>
		</div>
	</div>

	<!-- SIDE PANEL (DESKTOP) / BOTTOM PANEL (MOBILE): WORD LIST & CONTROLS -->
	<div class="w-full max-w-xl lg:max-w-xs shrink-0 flex flex-col gap-4">
		<!-- Header, Title, Timer & Controls -->
		<div
			class="w-full bg-slate-900/60 border border-slate-800 rounded-2xl p-4 shadow-lg flex flex-col gap-3 text-center sm:text-left"
		>
			<div
				class="flex flex-col sm:flex-row lg:flex-col justify-between items-center lg:items-start gap-3"
			>
				<div>
					<TitleTab {content} />
					{#if content.author}
						<p class="text-xs text-slate-400 mt-0.5">
							โดย <span class="font-bold">{content.author}</span>
						</p>
					{/if}
				</div>

				<div class="flex items-center gap-2">
					<div
						class="text-xl font-mono font-black text-emerald-400 bg-emerald-500/10 px-4 py-1 rounded-full border border-emerald-500/30"
					>
						{formatTime(seconds)}
					</div>
					<button
						class="btn btn-circle btn-ghost btn-xs"
						on:click={togglePause}
						title={isPaused ? 'เล่นต่อ' : 'หยุดเวลา'}
					>
						{#if isPaused}
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-5 w-5 text-amber-400"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								><path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
								/><path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
								/></svg
							>
						{:else}
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-5 w-5 text-slate-300"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								><path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"
								/></svg
							>
						{/if}
					</button>
					<button
						class="btn btn-circle btn-ghost btn-xs text-slate-300"
						on:click={resetTimer}
						title="เริ่มเวลาใหม่"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							><path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
							/></svg
						>
					</button>
					<details class="dropdown dropdown-end" bind:this={downloadMenu}>
						<summary
							class="btn btn-ghost btn-xs text-slate-300 gap-1"
							title="Download"
							aria-label="Download puzzle"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								aria-hidden="true"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
								/>
							</svg>
							<svg class="h-3 w-3" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
								<path
									fill-rule="evenodd"
									d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
									clip-rule="evenodd"
								/>
							</svg>
						</summary>
						<ul
							class="dropdown-content menu menu-compact text-xs text-left p-2 shadow-xl bg-base-100 text-base-content rounded-box w-48 z-50"
						>
							<li>
								<button class="text-xs text-left justify-start" on:click={exportImage}
									>PNG image (.png)</button
								>
							</li>
							<li>
								<button
									class="text-xs text-left justify-start"
									on:click={() => downloadExport('excel')}>Excel (.xml)</button
								>
							</li>
							<li>
								<button
									class="text-xs text-left justify-start"
									on:click={() => downloadExport('svg')}>SVG image (.svg)</button
								>
							</li>
						</ul>
					</details>
					<!-- FLIP LEFT-RIGHT LAYOUT TOGGLE BUTTON (DESKTOP) -->
					<button
						class="btn btn-circle btn-ghost btn-xs text-slate-300 hidden lg:inline-flex"
						on:click={() => (isFlipped = !isFlipped)}
						title="สลับตำแหน่ง ซ้าย-ขวา"
					>
						<RepeatIcon size="18" />
					</button>
				</div>
			</div>

			<div
				class="flex items-center justify-between gap-2 text-xs text-slate-400 pt-1 border-t border-slate-800/80"
			>
				<span>ปรับขนาด:</span>
				<input
					aria-label="Grid scale"
					type="range"
					min="0.5"
					max="2"
					step="0.05"
					bind:value={scaleFactor}
					class="range range-primary range-xs w-28"
				/>
				<span class="text-sm">{Math.round(scaleFactor * 100)}%</span>
				<button class="btn btn-ghost btn-xs" on:click={() => (scaleFactor = 1)}>Reset</button>
			</div>
		</div>

		<!-- Word List Box -->
		<div
			class="w-full bg-base-200/90 border border-base-300 rounded-2xl p-3 sm:p-4 shadow-md flex flex-col gap-2"
		>
			<div class="text-xs font-bold text-base-content/70 flex justify-between items-center">
				<span>คำที่ต้องหา:</span>
				<span class="text-[10px] opacity-70"
					>สำเร็จ {wordsData.filter((w) => w.found).length}/{wordsData.length}</span
				>
			</div>
			<div class="grid grid-cols-2 lg:grid-cols-2 gap-1.5 max-h-64 lg:max-h-96 overflow-y-auto p-1">
				{#each wordsData as w}
					<div
						class="px-2 py-1.5 rounded-xl text-center font-bold transition-colors border min-w-0 break-words
						{w.found
							? 'bg-success/20 text-success border-success/40 line-through'
							: 'bg-base-100 text-base-content border-base-300'}"
						style="font-size: {cellSize * 0.035}rem; line-height: 1.5;"
						title={w.word}
					>
						{w.word}
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>

{#if showModal}
	<div class="modal modal-open bg-black/60 backdrop-blur-md z-50" transition:fade>
		<div
			class="modal-box bg-slate-900 border border-slate-700 text-white text-center p-8 rounded-3xl"
			transition:scale
		>
			<div class="text-6xl mb-4 animate-bounce">🏆</div>
			<h3 class="text-3xl font-black mb-2 text-emerald-400">เก่งมาก!</h3>
			<p class="text-lg text-slate-300 mb-6 font-medium">
				คุณหาคำศัพท์ครบทุกคำแล้ว<br />ใช้เวลาไป
				<span class="font-bold text-amber-400">{formatTime(seconds)}</span>
			</p>
			<div class="flex gap-4 justify-center">
				<button
					class="btn btn-primary font-bold px-6 rounded-xl"
					on:click={() => {
						showModal = false;
						seconds = 0;
						startTimer();
						solved = false;
						foundWordsLines = [];
						wordsData.forEach((w) => (w.found = false));
						wordsData = wordsData;
					}}
				>
					เล่นอีกครั้ง
				</button>
				<button
					class="btn btn-ghost font-bold px-6 rounded-xl text-slate-300"
					on:click={() => (showModal = false)}
				>
					ปิดหน้าต่าง
				</button>
			</div>
		</div>
	</div>
{/if}
