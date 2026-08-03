<script lang="ts">
	import { DIGIT_MASKS, OPERATOR_MASKS } from './solver';

	export let equationTokens: string[] = ['6', '+', '4', '=', '4'];
	export let initialTokens: string[] = ['6', '+', '4', '=', '4'];
	export let movesCount = 0;
	export let onMove: () => void = () => {};
	export let isSolved = false;
	export let showHelperText = true;
	export let showParsedLabels = true;

	let selectedIndex: number | null = null;
	let selectedSegment: number | null = null;

	// Segment coordinates for 7-segment digit (60x100 box)
	const DIGIT_SEGMENTS = [
		{ id: 0, x1: 12, y1: 10, x2: 48, y2: 10 },  // a: top
		{ id: 1, x1: 50, y1: 12, x2: 50, y2: 48 },  // b: top-right
		{ id: 2, x1: 50, y1: 52, x2: 50, y2: 88 },  // c: bot-right
		{ id: 3, x1: 12, y1: 90, x2: 48, y2: 90 },  // d: bot
		{ id: 4, x1: 10, y1: 52, x2: 10, y2: 88 },  // e: bot-left
		{ id: 5, x1: 10, y1: 12, x2: 10, y2: 48 },  // f: top-left
		{ id: 6, x1: 12, y1: 50, x2: 48, y2: 50 }   // g: mid
	];

	// Segment coordinates for Operators (+, -, =) (60x100 box)
	const OPERATOR_SEGMENTS = [
		{ id: 0, x1: 12, y1: 50, x2: 48, y2: 50 },  // 0: mid horizontal (-)
		{ id: 1, x1: 30, y1: 32, x2: 30, y2: 68 },  // 1: mid vertical (+)
		{ id: 2, x1: 12, y1: 40, x2: 48, y2: 40 },  // 2: top eq horizontal (=)
		{ id: 3, x1: 12, y1: 60, x2: 48, y2: 60 }   // 3: bot eq horizontal (=)
	];

	let currentMasks: number[] = [];
	let initialMasks: number[] = [];

	$: {
		currentMasks = equationTokens.map((t) => getMask(t));
		initialMasks = initialTokens.map((t) => getMask(t));
	}

	function getMask(t: string): number {
		if (DIGIT_MASKS[t] !== undefined) return DIGIT_MASKS[t];
		if (OPERATOR_MASKS[t] !== undefined) return OPERATOR_MASKS[t];
		return 0;
	}

	function getDigitCharFromMask(mask: number): string {
		for (const [char, m] of Object.entries(DIGIT_MASKS)) {
			if (m === mask) return char;
		}
		return '?';
	}

	function getOperatorCharFromMask(mask: number): string {
		if (mask === OPERATOR_MASKS['+']) return '+';
		if (mask === OPERATOR_MASKS['=']) return '=';
		if (mask === OPERATOR_MASKS['-'] || mask === (1 << 2) || mask === (1 << 3)) return '-';
		return '?';
	}

	function handleSegmentClick(tokenIdx: number, segId: number) {
		const currentMask = currentMasks[tokenIdx];
		const isPresent = (currentMask & (1 << segId)) !== 0;

		if (selectedIndex === null) {
			if (isPresent) {
				selectedIndex = tokenIdx;
				selectedSegment = segId;
			}
		} else {
			if (selectedIndex === tokenIdx && selectedSegment === segId) {
				selectedIndex = null;
				selectedSegment = null;
				return;
			}

			if (!isPresent) {
				const sourceIsDigit = /[0-9]/.test(initialTokens[selectedIndex]);
				const targetIsDigit = /[0-9]/.test(initialTokens[tokenIdx]);

				currentMasks[selectedIndex] &= ~(1 << selectedSegment!);
				currentMasks[tokenIdx] |= (1 << segId);

				equationTokens[selectedIndex] = sourceIsDigit
					? getDigitCharFromMask(currentMasks[selectedIndex])
					: getOperatorCharFromMask(currentMasks[selectedIndex]);

				equationTokens[tokenIdx] = targetIsDigit
					? getDigitCharFromMask(currentMasks[tokenIdx])
					: getOperatorCharFromMask(currentMasks[tokenIdx]);

				movesCount += 1;
				selectedIndex = null;
				selectedSegment = null;
				onMove();
			} else {
				selectedIndex = tokenIdx;
				selectedSegment = segId;
			}
		}
	}
</script>

<!-- Board Container -->
<div
	class={`flex flex-wrap items-center justify-center gap-3 sm:gap-6 py-8 px-6 bg-slate-950 border rounded-3xl transition-all duration-500 ${
		isSolved
			? 'border-emerald-500 shadow-[0_0_35px_rgba(34,197,94,0.4)]'
			: 'border-slate-800 shadow-2xl'
	}`}
>
	{#each equationTokens as token, idx}
		{@const isDigit = /[0-9]/.test(initialTokens[idx]) || (currentMasks[idx] > 0 && currentMasks[idx] <= 127 && !['-', '+', '='].includes(initialTokens[idx]))}
		{@const isOperator = ['-', '+', '='].includes(initialTokens[idx]) || (currentMasks[idx] > 0 && currentMasks[idx] <= 15)}

		<div class="flex flex-col items-center gap-2">
			{#if isDigit}
				<!-- 7-Segment Digit Box -->
				<div class="relative w-14 h-24 sm:w-16 sm:h-28 flex items-center justify-center">
					<svg viewBox="0 0 60 100" class="w-full h-full">
						{#each DIGIT_SEGMENTS as seg}
							{@const isPresent = (currentMasks[idx] & (1 << seg.id)) !== 0}
							{@const isInitial = (initialMasks[idx] & (1 << seg.id)) !== 0}
							{@const isMoved = isPresent && !isInitial}
							{@const isRemoved = !isPresent && isInitial}
							{@const isSelected = selectedIndex === idx && selectedSegment === seg.id}

							<g class="cursor-pointer" on:click={() => handleSegmentClick(idx, seg.id)}>
								{#if isPresent}
									<!-- Matchstick Body -->
									<line
										x1={seg.x1}
										y1={seg.y1}
										x2={seg.x2}
										y2={seg.y2}
										stroke={isSelected ? '#38bdf8' : isMoved ? '#c084fc' : '#f59e0b'}
										stroke-width={isSelected || isMoved ? '6.5' : '5'}
										stroke-linecap="round"
										class={isSelected ? 'animate-pulse' : isMoved ? 'drop-shadow-[0_0_8px_rgba(192,132,252,0.8)]' : 'hover:stroke-amber-300'}
									/>
									<!-- Matchstick Red Tip Head -->
									<circle
										cx={seg.x1}
										cy={seg.y1}
										r={isSelected || isMoved ? '4' : '3.2'}
										fill={isSelected ? '#0284c7' : isMoved ? '#a855f7' : '#ef4444'}
									/>
								{:else if isRemoved}
									<!-- Highlighted Removed Stick (Ghost Red Outline) -->
									<line
										x1={seg.x1}
										y1={seg.y1}
										x2={seg.x2}
										y2={seg.y2}
										stroke="#f43f5e"
										stroke-width="4"
										stroke-linecap="round"
										stroke-dasharray="3 3"
										opacity="0.65"
										class="hover:opacity-100"
									/>
									<circle cx={seg.x1} cy={seg.y1} r="3" fill="#f43f5e" opacity="0.65" />
								{:else}
									<!-- Empty Slot Dotted Line -->
									<line
										x1={seg.x1}
										y1={seg.y1}
										x2={seg.x2}
										y2={seg.y2}
										stroke={selectedIndex !== null ? '#22c55e' : '#475569'}
										stroke-width="3.5"
										stroke-linecap="round"
										stroke-dasharray="2 3"
										opacity={selectedIndex !== null ? '0.85' : '0.2'}
										class="hover:opacity-100 hover:stroke-emerald-400"
									/>
								{/if}
							</g>
						{/each}
					</svg>
				</div>
			{:else if isOperator}
				<!-- Matchstick Operator Box (+, -, =) -->
				<div class="relative w-14 h-24 sm:w-16 sm:h-28 flex items-center justify-center">
					<svg viewBox="0 0 60 100" class="w-full h-full">
						{#each OPERATOR_SEGMENTS as seg}
							{@const isPresent = (currentMasks[idx] & (1 << seg.id)) !== 0}
							{@const isInitial = (initialMasks[idx] & (1 << seg.id)) !== 0}
							{@const isMoved = isPresent && !isInitial}
							{@const isRemoved = !isPresent && isInitial}
							{@const isSelected = selectedIndex === idx && selectedSegment === seg.id}

							<g class="cursor-pointer" on:click={() => handleSegmentClick(idx, seg.id)}>
								{#if isPresent}
									<!-- Matchstick Body -->
									<line
										x1={seg.x1}
										y1={seg.y1}
										x2={seg.x2}
										y2={seg.y2}
										stroke={isSelected ? '#38bdf8' : isMoved ? '#c084fc' : '#f59e0b'}
										stroke-width={isSelected || isMoved ? '6.5' : '5'}
										stroke-linecap="round"
										class={isSelected ? 'animate-pulse' : isMoved ? 'drop-shadow-[0_0_8px_rgba(192,132,252,0.8)]' : 'hover:stroke-amber-300'}
									/>
									<!-- Matchstick Red Tip Head -->
									<circle
										cx={seg.x1}
										cy={seg.y1}
										r={isSelected || isMoved ? '4' : '3.2'}
										fill={isSelected ? '#0284c7' : isMoved ? '#a855f7' : '#ef4444'}
									/>
								{:else if isRemoved}
									<!-- Highlighted Removed Stick (Ghost Red Outline) -->
									<line
										x1={seg.x1}
										y1={seg.y1}
										x2={seg.x2}
										y2={seg.y2}
										stroke="#f43f5e"
										stroke-width="4"
										stroke-linecap="round"
										stroke-dasharray="3 3"
										opacity="0.65"
										class="hover:opacity-100"
									/>
									<circle cx={seg.x1} cy={seg.y1} r="3" fill="#f43f5e" opacity="0.65" />
								{:else}
									<!-- Empty Slot Dotted Line -->
									<line
										x1={seg.x1}
										y1={seg.y1}
										x2={seg.x2}
										y2={seg.y2}
										stroke={selectedIndex !== null ? '#22c55e' : '#475569'}
										stroke-width="3.5"
										stroke-linecap="round"
										stroke-dasharray="2 3"
										opacity={selectedIndex !== null ? '0.85' : '0.2'}
										class="hover:opacity-100 hover:stroke-emerald-400"
									/>
								{/if}
							</g>
						{/each}
					</svg>
				</div>
			{:else}
				<!-- Fixed Symbol (*, /) -->
				<div class="text-3xl sm:text-4xl font-extrabold text-slate-400 px-2 h-24 sm:h-28 flex items-center">
					{token}
				</div>
			{/if}

			{#if showParsedLabels}
				<!-- Parsed Text Symbol Label under each matchstick group -->
				<span class={`text-sm sm:text-base font-extrabold font-mono px-2 py-0.5 rounded ${
					token === '?' ? 'text-slate-500 bg-slate-900 border border-slate-800' : 'text-amber-400 bg-slate-900/80 border border-slate-800'
				}`}>
					{token}
				</span>
			{/if}
		</div>
	{/each}
</div>

{#if showHelperText && !isSolved}
	<div class="text-center text-xs sm:text-sm font-bold animate-pulse mt-3 text-amber-400">
		{#if selectedIndex === null}
			🔥 คลิกเพื่อเลือกไม้ขีดที่จะย้าย
		{:else}
			✨ คลิกเพื่อเลือกตำแหน่งใหม่
		{/if}
	</div>
{/if}
