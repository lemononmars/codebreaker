<script lang="ts">
	const imgUrlPrefix: string =
		'https://raw.githubusercontent.com/lemononmars/codebreaker/main/src/lib/images/product/';

	const productDescriptions = [
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

<div class="container mx-auto px-4 pt-8">
	<h1 class="text-4xl font-bold text-center mb-8 tracking-tight">Shop</h1>
</div>

<div class="container mx-auto px-4 pb-12">
	<div class="grid md:grid-cols-2 gap-6">
		{#each productDescriptions as p}
			<a
				href="/shop/{p.url}"
				class="card bg-neutral text-neutral-content shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 block h-full"
			>
				<div class="card-body flex flex-row items-center gap-6 p-6">
					<div class="avatar placeholder">
						<div class="w-24 h-24 rounded-xl bg-base-100 p-2 mask mask-squircle shadow-inner">
							<img src={imgUrlPrefix + p.imgUrl} class="object-cover w-full h-full" alt={p.title} />
						</div>
					</div>
					<div class="flex flex-col gap-1">
						<h2 class="card-title text-xl font-bold capitalize tracking-wide text-primary">
							{p.title}
						</h2>
						<p class="text-base font-medium opacity-80 leading-relaxed">{p.description}</p>
					</div>
				</div>
			</a>
		{/each}
	</div>
</div>
