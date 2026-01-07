<script lang="ts">
	import { getImageURL } from '$lib/supabase';

	const puzzleDescriptions = [
		{
			type: 'rebus',
			description: 'ทายคำจากภาพ',
			icon: getImageURL('assets', 'rebus.png')
		},
		{
			type: 'crossword',
			description: 'ปริศนาอักษรไขว้',
			icon: getImageURL('assets', 'crossword.png')
		},
		{
			type: 'alphabet',
			description: 'ทายคำจากคำใบ้ โดยเปิดตัวอักษรให้น้อยที่สุด',
			icon: getImageURL('assets', 'alphabet.png')
		},
		{
			type: 'spellingbee',
			description: 'หาคำ 7 ตัวอักษร',
			icon: getImageURL('assets', 'spellingbee.png')
		},
		{
			type: 'puzzlehunt',
			description: 'แก้ชุดปริศนา',
			icon: getImageURL('assets', 'puzzlehunt.png')
		},
		{
			type: 'weekly',
			description: 'ปริศนาประจำสัปดาห์บนเพจ fb',
			icon: getImageURL('assets', 'adventure.png')
		},
		{
			type: 'missingvowels',
			description: 'ทายคำโดยใช้แค่พยัญชนะ',
			icon: getImageURL('assets', 'missing.png')
		},
		{
			type: 'cryptogram',
			description: 'ทายคำจากรหัสอักษร',
			icon: getImageURL('assets', 'cryptogram.png')
		},
		{
			type: 'crossroad',
			description: 'เติมคำเพื่อสร้างคำทั้งสี่ทิศทาง',
			icon: getImageURL('assets', 'crossroad.png')
		},
		{
			type: 'adventure',
			description: 'ตะลุยด่านไขรหัส',
			icon: getImageURL('assets', 'adventure.png')
		}
	];
</script>

<svelte:head>
	<title>Code Breaker | Puzzles</title>
</svelte:head>

<div class="container mx-auto px-4 pt-8">
	<h1 class="text-4xl font-bold text-center mb-8 tracking-tight">Puzzles</h1>
</div>

<div class="container mx-auto px-4 pb-12">
	<div class="grid md:grid-cols-2 gap-6">
		{#each puzzleDescriptions as p}
			<a
				href="/puzzles/{p.type}"
				class="card bg-neutral text-neutral-content shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 block h-full"
			>
				<div class="card-body flex flex-row items-center gap-6 p-6">
					<div class="avatar placeholder">
						<div class="w-24 h-24 rounded-xl bg-base-100 p-2 mask mask-squircle shadow-inner">
							<img src={p.icon} class="object-contain w-full h-full" alt="{p.type} icon" />
						</div>
					</div>
					<div class="flex flex-col gap-1">
						<h2 class="card-title text-2xl font-bold capitalize tracking-wide text-primary">
							{p.type}
						</h2>
						<p class="text-base font-medium opacity-80 leading-relaxed">{p.description}</p>
					</div>
				</div>
			</a>
		{/each}
	</div>
</div>
