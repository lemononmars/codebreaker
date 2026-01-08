<script lang="ts">
	import Logo3D from '$lib/components/Logo3D.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import {
		puzzleDescriptions,
		shopProductDescriptions,
		shopImgUrlPrefix
	} from '$lib/data/metadata';
	import { onMount } from 'svelte';
	import { getPuzzleImageURL, DEFAULT_WEEKLY_IMAGE_URL } from '$lib/supabase';

	// get 4 random puzzle types
	const randomPuzzleTypes = puzzleDescriptions.sort(() => 0.5 - Math.random()).slice(0, 4);

	let recentWeeklyPuzzles: any[] = [];

	onMount(async () => {
		try {
			const res = await fetch('/api/puzzle/weekly/');
			const data = await res.json();
			if (data.content) {
				// Sort by year and week descending, take 4 most recent
				recentWeeklyPuzzles = data.content
					.sort((a: any, b: any) => {
						if (a.year !== b.year) return b.year - a.year;
						return b.week - a.week;
					})
					.slice(0, 4);
			}
		} catch (error) {
			console.error('Failed to load weekly puzzles:', error);
		}
	});

	function getWeeklyPuzzleImage(year: number, week: number) {
		const weekStr = String(week).padStart(2, '0');
		return getPuzzleImageURL('weekly', `${year}${weekStr}.jpg`);
	}
</script>

<svelte:head>
	<title>Code Breaker</title>
</svelte:head>

<!-- Hero Section -->
<div class="hero min-h-[50vh] bg-transparent">
	<div class="hero-content text-center">
		<div class="max-w-md">
			<div class="mb-4 flex justify-center">
				<div class="w-64 h-64">
					<Logo3D />
				</div>
			</div>
			<h1 class="text-5xl font-bold">Welcome to Code Breaker</h1>
			<p class="py-6">Solve the puzzles. Break the codes.</p>
		</div>
	</div>
</div>

<!-- Weekly Puzzles Section -->
<section class="max-w-7xl mx-auto px-4 py-8">
	<div class="flex justify-between items-center mb-6">
		<h2 class="text-3xl font-bold">ปริศนารายสัปดาห์</h2>
		<a href="/puzzles/weekly" class="btn btn-primary btn-sm">ดูทั้งหมด</a>
	</div>

	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
		{#each recentWeeklyPuzzles as p}
			<a
				href="/puzzles/weekly/{p.year}/{p.week}"
				class="card bg-base-100 shadow-xl hover:scale-105 transition-transform duration-200 border border-base-300"
			>
				<figure class="px-4 pt-4">
					<img
						src={getWeeklyPuzzleImage(p.year, p.week)}
						alt="Week {p.week} Puzzle"
						class="rounded-xl w-full h-48 object-cover"
						onerror="this.src='{DEFAULT_WEEKLY_IMAGE_URL}'"
					/>
				</figure>
				<div class="card-body items-center text-center">
					<div class="text-xs badge badge-primary mb-2">Week {p.week} Year {p.year}</div>
					<h2 class="card-title text-lg">{p.title || `ปริศนาสัปดาห์ที่ ${p.week}`}</h2>
				</div>
			</a>
		{/each}
	</div>
</section>

<!-- Random Puzzles Section -->
<section class="max-w-7xl mx-auto px-4 py-8">
	<div class="flex justify-between items-center mb-6">
		<h2 class="text-3xl font-bold">เล่นเลย</h2>
		<a href="/puzzles" class="btn btn-primary btn-sm">ดูทั้งหมด</a>
	</div>

	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
		{#each randomPuzzleTypes as p}
			<a
				href="/puzzles/{p.type}"
				class="card bg-base-100 shadow-xl hover:scale-105 transition-transform duration-200"
			>
				<figure class="px-4 pt-4">
					<img src={p.icon} alt={p.type} class="rounded-xl w-32 h-32 object-cover mx-auto" />
				</figure>
				<div class="card-body items-center text-center">
					<h2 class="card-title capitalize">{p.type}</h2>
					<p class="text-sm">{p.description}</p>
				</div>
			</a>
		{/each}
	</div>
</section>

<!-- Shop Section -->
<section class="max-w-7xl mx-auto px-4 py-8 bg-base-200 rounded-xl my-8">
	<div class="flex justify-between items-center mb-6">
		<h2 class="text-3xl font-bold">ร้านค้า</h2>
		<a href="/shop" class="btn btn-secondary btn-sm">ดูสินค้าทั้งหมด</a>
	</div>

	<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
		{#each shopProductDescriptions as p}
			<a
				href="/shop/{p.url}"
				class="card bg-base-100 shadow-xl hover:scale-105 transition-transform duration-200"
			>
				<figure class="px-4 pt-4">
					<img
						src={shopImgUrlPrefix + p.imgUrl}
						alt={p.title}
						class="rounded-xl w-full h-48 object-cover object-top"
					/>
				</figure>
				<div class="card-body">
					<h2 class="card-title text-lg">{p.title}</h2>
					<p class="text-sm">{p.description}</p>
					<div class="card-actions justify-end mt-4">
						<button class="btn btn-primary btn-sm">เปิด</button>
					</div>
				</div>
			</a>
		{/each}
	</div>
</section>

<Footer />
