<script lang="ts">
	export let char: string = 'A';
	export let size: number = 28;
	export let color: string = 'currentColor';

	const upper = char.toUpperCase();

	// SVG path definitions for Pigpen
	const pigpenPaths: Record<string, { path: string; hasDot?: boolean }> = {
		'A': { path: 'M 22 2 L 22 22 L 2 22' },
		'B': { path: 'M 2 22 L 2 2 L 22 2 L 22 22' },
		'C': { path: 'M 2 2 L 2 22 L 22 22' },
		'D': { path: 'M 2 2 L 22 2 L 22 22 L 2 22' },
		'E': { path: 'M 2 2 L 22 2 L 22 22 L 2 22 Z' },
		'F': { path: 'M 22 2 L 2 2 L 2 22 L 22 22' },
		'G': { path: 'M 22 2 L 22 22 L 2 22' },
		'H': { path: 'M 2 2 L 22 2 L 22 22' },
		'I': { path: 'M 22 2 L 2 2 L 2 22' },

		'J': { path: 'M 22 2 L 22 22 L 2 22', hasDot: true },
		'K': { path: 'M 2 22 L 2 2 L 22 2 L 22 22', hasDot: true },
		'L': { path: 'M 2 2 L 2 22 L 22 22', hasDot: true },
		'M': { path: 'M 2 2 L 22 2 L 22 22 L 2 22', hasDot: true },
		'N': { path: 'M 2 2 L 22 2 L 22 22 L 2 22 Z', hasDot: true },
		'O': { path: 'M 22 2 L 2 2 L 2 22 L 22 22', hasDot: true },
		'P': { path: 'M 22 2 L 22 22 L 2 22', hasDot: true },
		'Q': { path: 'M 2 2 L 22 2 L 22 22', hasDot: true },
		'R': { path: 'M 22 2 L 2 2 L 2 22', hasDot: true },

		'S': { path: 'M 2 2 L 12 22 L 22 2' },
		'T': { path: 'M 2 2 L 22 12 L 2 22' },
		'U': { path: 'M 22 2 L 2 12 L 22 22' },
		'V': { path: 'M 2 22 L 12 2 L 22 22' },

		'W': { path: 'M 2 2 L 12 22 L 22 2', hasDot: true },
		'X': { path: 'M 2 2 L 22 12 L 2 22', hasDot: true },
		'Y': { path: 'M 22 2 L 2 12 L 22 22', hasDot: true },
		'Z': { path: 'M 2 22 L 12 2 L 22 22', hasDot: true }
	};

	$: def = pigpenPaths[upper];
</script>

{#if def}
	<svg
		width={size}
		height={size}
		viewBox="0 0 24 24"
		fill="none"
		stroke={color}
		stroke-width="2.5"
		stroke-linecap="round"
		stroke-linejoin="round"
		class="inline-block shrink-0 align-middle"
	>
		<path d={def.path} />
		{#if def.hasDot}
			<circle cx="12" cy="12" r="2.2" fill={color} stroke="none" />
		{/if}
	</svg>
{:else}
	<span class="inline-block px-1 font-mono">{char}</span>
{/if}
