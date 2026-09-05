<script lang="ts">
	import ShopCard from '$lib/components/ShopCard.svelte';
	import { shopImgUrlPrefix } from '$lib/data/metadata';
	import { ChevronLeftIcon } from 'svelte-feather-icons';

	const decks = [
		{
			url: 'carddeck/vol1',
			title: 'Puzzle Card Deck Vol.1',
			description: 'ปริศนาการ์ด 18 ใบ พร้อม 1 Meta Puzzle พิเศษ ไขปริศนาสุดคลาสสิก',
			imgUrl: 'puzzle_card_deck_vol1.jpg',
			price: 150,
			shipping: 30,
			badge: 'การ์ดเกมขายดี',
			category: 'Card Game',
			isComingSoon: false
		},
		{
			url: '',
			title: 'Puzzle Card Deck Vol.2',
			description: 'ภาคต่อชุดการ์ดปริศนา มาพร้อมธีมและลูกเล่นใหม่สุดท้าทาย',
			imgUrl: '',
			price: null,
			shipping: null,
			badge: 'Coming Soon',
			category: 'Card Game',
			isComingSoon: true
		},
		{
			url: '',
			title: 'Puzzle Card Deck Vol.3',
			description: 'ชุดการ์ดปริศนาระดับความยากเข้มข้น ออกแบบมาสำหรับแฟนพันธุ์แท้',
			imgUrl: '',
			price: null,
			shipping: null,
			badge: 'Coming Soon',
			category: 'Card Game',
			isComingSoon: true
		}
	];
</script>

<svelte:head>
	<title>Code Breaker | Puzzle Card Deck Series</title>
</svelte:head>

<div class="container mx-auto px-4 pt-4 sm:pt-8 pb-24 max-w-5xl">
	<!-- Breadcrumbs -->
	<nav class="flex items-center gap-2 text-xs sm:text-sm text-slate-400 mb-6">
		<a href="/shop" class="flex items-center gap-1 hover:text-teal-400 transition-colors">
			<ChevronLeftIcon size="14" />
			<span>กลับไปหน้าร้านค้า (Shop)</span>
		</a>
		<span>/</span>
		<span class="text-slate-200 font-medium">Puzzle Card Deck Series</span>
	</nav>

	<div class="text-center mb-8 sm:mb-12">
		<h1 class="text-3xl lg:text-4xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-emerald-400">
			Puzzle Card Deck Series
		</h1>
		<p class="text-slate-400 text-sm sm:text-base mt-2 max-w-lg mx-auto">
			การ์ดเกมไขปริศนาสำหรับพกพา ท้าทายความคิด สนุกได้ทุกที่ทุกเวลา
		</p>
	</div>

	<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6">
		{#each decks as deck}
			<ShopCard
				url={deck.url}
				title={deck.title}
				description={deck.description}
				imgUrl={deck.imgUrl}
				imgUrlPrefix={shopImgUrlPrefix}
				price={deck.price}
				shipping={deck.shipping}
				badge={deck.badge}
				category={deck.category}
				isComingSoon={deck.isComingSoon}
			/>
		{/each}
	</div>
</div>

