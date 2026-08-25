<script lang="ts">
	import { onMount } from 'svelte';

	interface Particle {
		id: number;
		left: number;
		size: number;
		duration: number;
		delay: number;
		color: string;
		shape: 'rect' | 'circle' | 'ribbon' | 'star';
		rotation: number;
	}

	const colors = [
		'#fbbf24', '#f59e0b', '#ec4899', '#f43f5e',
		'#8b5cf6', '#6366f1', '#06b6d4', '#10b981'
	];

	let particles: Particle[] = [];

	onMount(() => {
		const list: Particle[] = [];
		const shapes: Particle['shape'][] = ['rect', 'circle', 'ribbon', 'star'];
		for (let i = 0; i < 40; i++) {
			list.push({
				id: i,
				left: Math.random() * 100,
				size: Math.random() * 10 + 6,
				duration: Math.random() * 3.5 + 3.5,
				delay: Math.random() * 5,
				color: colors[i % colors.length],
				shape: shapes[i % shapes.length],
				rotation: Math.random() * 360
			});
		}
		particles = list;
	});
</script>

<div class="fixed inset-0 pointer-events-none z-50 overflow-hidden" aria-hidden="true">
	{#each particles as p (p.id)}
		<div
			class="confetti-particle absolute top-[-20px]"
			style="
				left: {p.left}%;
				animation-duration: {p.duration}s;
				animation-delay: -{p.delay}s;
			"
		>
			{#if p.shape === 'circle'}
				<div
					class="rounded-full shadow-sm"
					style="
						width: {p.size}px;
						height: {p.size}px;
						background-color: {p.color};
						opacity: 0.85;
					"
				></div>
			{:else if p.shape === 'ribbon'}
				<div
					class="rounded-sm shadow-sm"
					style="
						width: {p.size * 0.4}px;
						height: {p.size * 1.6}px;
						background-color: {p.color};
						transform: rotate({p.rotation}deg);
						opacity: 0.85;
					"
				></div>
			{:else if p.shape === 'star'}
				<svg
					viewBox="0 0 24 24"
					style="
						width: {p.size * 1.3}px;
						height: {p.size * 1.3}px;
						fill: {p.color};
						opacity: 0.9;
						transform: rotate({p.rotation}deg);
					"
				>
					<polygon points="12,2 15,9 22,9 17,14 19,21 12,17 5,21 7,14 2,9 9,9" />
				</svg>
			{:else}
				<div
					class="rounded-[2px] shadow-sm"
					style="
						width: {p.size}px;
						height: {p.size * 0.7}px;
						background-color: {p.color};
						transform: rotate({p.rotation}deg);
						opacity: 0.85;
					"
				></div>
			{/if}
		</div>
	{/each}
</div>

<style>
	@keyframes fall {
		0% {
			transform: translateY(-20px) translateX(0) rotate(0deg);
			opacity: 1;
		}
		50% {
			transform: translateY(50vh) translateX(25px) rotate(180deg);
			opacity: 0.9;
		}
		100% {
			transform: translateY(105vh) translateX(-20px) rotate(360deg);
			opacity: 0;
		}
	}

	.confetti-particle {
		animation-name: fall;
		animation-timing-function: linear;
		animation-iteration-count: infinite;
		will-change: transform;
	}
</style>
