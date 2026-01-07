<script lang="ts">
	import Logo3D from '$lib/components/Logo3D.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import {
		puzzleDescriptions,
		shopProductDescriptions,
		shopImgUrlPrefix
	} from '$lib/data/metadata';

	// get 4 random puzzle types
	const randomPuzzleTypes = puzzleDescriptions.sort(() => 0.5 - Math.random()).slice(0, 4);
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
			<p class="py-6">
				Unleash your inner detective with our collection of mind-bending puzzles and games.
			</p>
		</div>
	</div>
</div>

<!-- Recent Puzzles Section -->
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
