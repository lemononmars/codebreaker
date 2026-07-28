<script lang="ts">
	import ShopCard from '$lib/components/ShopCard.svelte';
	import { shopProductDescriptions, shopImgUrlPrefix } from '$lib/data/metadata';

	const products = shopProductDescriptions.length > 0 ? shopProductDescriptions : [
		{
			url: 'carddeck/vol1',
			title: 'Puzzle Card Deck Vol.1',
			description: 'ปริศนาการ์ด 18 ใบ',
			imgUrl: 'puzzle_card_deck_vol1.jpg'
		},
		{
			url: 'logiccontestbook',
			title: 'Code Breaker Logic Puzzle Contest Book',
			description: 'ปริศนาจากงาน Logic Puzzle Contest',
			imgUrl: 'logic_puzzle_contest_book_cover.jpg'
		},
		{
			url: 'rebusbook',
			title: 'Rebus Puzzle Book',
			description: 'หนังสือปริศนาอักษรแทนคำ',
			imgUrl: 'rebus_book_cover.jpg'
		}
	];
</script>

<svelte:head>
	<title>Code Breaker | Shop</title>
</svelte:head>

<div class="container mx-auto px-4 pt-6 sm:pt-12 pb-24 max-w-5xl">
	<div class="text-center mb-8">
		<h1 class="text-3xl lg:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-emerald-400">
			Shop
		</h1>
		<p class="text-slate-400 text-sm sm:text-base mt-2">ร้านค้าหนังสือ & การ์ดเกมปริศนาอย่างเป็นทางการ</p>
	</div>

	<div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
		{#each products as p}
			<ShopCard
				url={p.url}
				title={p.title}
				description={p.description}
				imgUrl={p.imgUrl}
				imgUrlPrefix={shopImgUrlPrefix}
			/>
		{/each}
	</div>
</div>
