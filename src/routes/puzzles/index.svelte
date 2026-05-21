<script lang="ts">
	const weeklyPuzzle = {
		type: 'weekly',
		description: 'ปริศนาประจำสัปดาห์บนเพจ fb',
		icon: `<svg class="w-12 h-12 text-primary transition-all duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
			<rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
			<line x1="16" y1="2" x2="16" y2="6"/>
			<line x1="8" y1="2" x2="8" y2="6"/>
			<line x1="3" y1="10" x2="21" y2="10"/>
			<path d="M12 14l1 2.5 2.5.5-2 1.8.5 2.7-2-1.5-2 1.5.5-2.7-2-1.8 2.5-.5z"/>
		</svg>`
	};

	const wordPuzzles = [
		{
			type: 'rebus',
			description: 'ทายคำจากภาพ',
			icon: `<svg class="w-12 h-12 text-primary transition-all duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
				<rect x="3" y="3" width="18" height="18" rx="2" />
				<circle cx="8.5" cy="8.5" r="1.5" />
				<path d="M21 15l-5-5L5 21" />
				<path d="M16 13.5l2.5-2.5 2.5 2.5" />
				<circle cx="16" cy="7" r="2" />
			</svg>`
		},
		{
			type: 'wordsearch',
			description: 'ปริศนาหาคำศัพท์',
			icon: `<svg class="w-12 h-12 text-primary transition-all duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
				<circle cx="11" cy="11" r="8" />
				<line x1="21" y1="21" x2="16.65" y2="16.65" />
				<line x1="8" y1="8" x2="14" y2="14" />
				<line x1="14" y1="8" x2="8" y2="14" />
			</svg>`
		},
		{
			type: 'crossword',
			description: 'ปริศนาอักษรไขว้',
			icon: `<svg class="w-12 h-12 text-primary transition-all duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
				<rect x="3" y="3" width="18" height="18" rx="2" />
				<line x1="3" y1="9" x2="21" y2="9" />
				<line x1="3" y1="15" x2="21" y2="15" />
				<line x1="9" y1="3" x2="9" y2="21" />
				<line x1="15" y1="3" x2="15" y2="21" />
				<rect x="3" y="3" width="6" height="6" fill="currentColor" fill-opacity="0.15" />
				<rect x="15" y="9" width="6" height="6" fill="currentColor" fill-opacity="0.15" />
				<rect x="9" y="15" width="6" height="6" fill="currentColor" fill-opacity="0.15" />
			</svg>`
		},
		{
			type: 'alphabet',
			description: 'ทายคำจากคำใบ้ โดยเปิดตัวอักษรให้น้อยที่สุด',
			icon: `<svg class="w-12 h-12 text-primary transition-all duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
				<rect x="3" y="3" width="8" height="8" rx="1" />
				<rect x="13" y="13" width="8" height="8" rx="1" />
				<text x="7" y="9" font-size="6" font-family="sans-serif" font-weight="black" text-anchor="middle" fill="currentColor">A</text>
				<text x="17" y="19" font-size="6" font-family="sans-serif" font-weight="black" text-anchor="middle" fill="currentColor">Z</text>
				<path d="M7 11v4h6" />
			</svg>`
		},
		{
			type: 'spellingbee',
			description: 'หาคำ 7 ตัวอักษร',
			icon: `<svg class="w-12 h-12 text-primary transition-all duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
				<path d="M12 2l8.66 5v10L12 22l-8.66-5V7z" />
				<circle cx="12" cy="12" r="3" />
				<line x1="8" y1="12" x2="5" y2="12" />
				<line x1="16" y1="12" x2="19" y2="12" />
				<path d="M12 9c.5-1.5 2-2 2-2M12 15c-.5 1.5-2 2-2 2" />
			</svg>`
		},
		{
			type: 'missingvowels',
			description: 'ทายคำโดยใช้แค่พยัญชนะ',
			icon: `<svg class="w-12 h-12 text-primary transition-all duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
				<rect x="2" y="4" width="20" height="16" rx="2" />
				<text x="6" y="14" font-size="8" font-family="sans-serif" font-weight="black" text-anchor="middle" fill="currentColor">B</text>
				<line x1="10" y1="14" x2="14" y2="14" stroke-width="3" />
				<text x="18" y="14" font-size="8" font-family="sans-serif" font-weight="black" text-anchor="middle" fill="currentColor">K</text>
			</svg>`
		},
		{
			type: 'cryptogram',
			description: 'ทายคำจากรหัสอักษร',
			icon: `<svg class="w-12 h-12 text-primary transition-all duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
				<rect x="3" y="11" width="18" height="10" rx="2" />
				<path d="M7 11V7a5 5 0 0 1 10 0v4" />
				<circle cx="12" cy="16" r="1.5" />
				<path d="M12 17.5v2" />
			</svg>`
		},
		{
			type: 'crossroad',
			description: 'เติมคำเพื่อสร้างคำทั้งสี่ทิศทาง',
			icon: `<svg class="w-12 h-12 text-primary transition-all duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
				<line x1="12" y1="2" x2="12" y2="22" />
				<line x1="2" y1="12" x2="22" y2="12" />
				<polyline points="9 5 12 2 15 5" />
				<polyline points="9 19 12 22 15 19" />
				<polyline points="5 9 2 12 5 15" />
				<polyline points="19 9 22 12 19 15" />
			</svg>`
		},
		{
			type: 'spellingquiz',
			description: 'หาคำที่สะกดถูกต้อง',
			icon: `<svg class="w-12 h-12 text-primary transition-all duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
				<path d="M12 20h9" />
				<path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
				<path d="M15 5l3 3" />
			</svg>`
		}
	];

	const nonWordPuzzles = [
		{
			type: 'thaimapquiz',
			description: 'หาจังหวัดบนแผนที่ประเทศไทย',
			icon: `<svg class="w-12 h-12 text-primary transition-all duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
				<path d="M12 2c-3.8 0-7 3.2-7 7 0 5.2 7 13 7 13s7-7.8 7-7.8c0-3.8-3.2-7-7-7z" />
				<circle cx="12" cy="9" r="2.5" />
				<path d="M8 17h8" />
			</svg>`
		},
		{
			type: 'puzzlehunt',
			description: 'แก้ชุดปริศนา',
			icon: `<svg class="w-12 h-12 text-primary transition-all duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
				<circle cx="12" cy="12" r="10" />
				<polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
			</svg>`
		}
	];
</script>

<svelte:head>
	<title>Code Breaker | Puzzles</title>
	<meta
		name="description"
		content="Explore a variety of unique and challenging puzzles on Code Breaker: Rebus, Word Search, Crossword, Alphabet, Spelling Bee, Cryptograms, and more."
	/>
	<meta property="og:title" content="Code Breaker Puzzles" />
	<meta
		property="og:description"
		content="Explore a variety of unique and challenging puzzles on Code Breaker: Rebus, Word Search, Crossword, Alphabet, Spelling Bee, Cryptograms, and more."
	/>
	<meta property="og:type" content="website" />
	<meta property="og:image" content="/og-main.png" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:image" content="/og-main.png" />
</svelte:head>

<div class="container mx-auto px-4 pt-8">
	<h1 class="text-4xl font-bold text-center mb-8 tracking-tight">Puzzles</h1>
</div>

<div class="container mx-auto px-4 pb-12 flex flex-col gap-10">
	
	<!-- 1. Weekly Puzzle Featured Section -->
	<section class="flex flex-col gap-4">
		<h2 class="text-2xl font-bold tracking-tight text-primary border-b border-base-300/20 pb-2">
			🔥 ปริศนาประจำสัปดาห์ (Weekly Puzzle)
		</h2>
		<a
			href="/puzzles/{weeklyPuzzle.type}"
			class="card bg-neutral text-neutral-content shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 block w-full group"
		>
			<div class="card-body flex flex-col items-center text-center gap-4 p-6">
				<div class="w-20 h-20 rounded-2xl bg-base-300/40 text-primary flex items-center justify-center p-3 shadow-inner border border-base-300/60 group-hover:bg-primary/10 group-hover:text-secondary group-hover:border-secondary/30 transition-all duration-300">
					{@html weeklyPuzzle.icon}
				</div>
				<div class="flex flex-col gap-1 flex-1 items-center">
					<h2 class="card-title text-2xl font-bold capitalize tracking-wide text-primary justify-center text-center">
						{weeklyPuzzle.type}
					</h2>
					<p class="text-base font-medium opacity-80 leading-relaxed">{weeklyPuzzle.description}</p>
				</div>
			</div>
		</a>
	</section>

	<!-- 2. Word Puzzles Section -->
	<section class="flex flex-col gap-4">
		<h2 class="text-2xl font-bold tracking-tight text-primary border-b border-base-300/20 pb-2">
			🔠 ปริศนาภาษาและคำศัพท์ (Word Puzzles)
		</h2>
		<div class="grid md:grid-cols-2 gap-6">
			{#each wordPuzzles as p}
				<a
					href="/puzzles/{p.type}"
					class="card bg-neutral text-neutral-content shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 block h-full group"
				>
					<div class="card-body flex flex-col items-center text-center gap-4 p-6">
						<div class="w-20 h-20 rounded-2xl bg-base-300/40 text-primary flex items-center justify-center p-3 shadow-inner border border-base-300/60 group-hover:bg-primary/10 group-hover:text-secondary group-hover:border-secondary/30 transition-all duration-300">
							{@html p.icon}
						</div>
						<div class="flex flex-col gap-1 flex-1 items-center">
							<h2 class="card-title text-2xl font-bold capitalize tracking-wide text-primary justify-center text-center">
								{p.type === 'spellingquiz' ? 'Spelling Quiz' : p.type}
							</h2>
							<p class="text-base font-medium opacity-80 leading-relaxed">{p.description}</p>
						</div>
					</div>
				</a>
			{/each}
		</div>
	</section>

	<!-- 3. Non-Word Puzzles Section -->
	<section class="flex flex-col gap-4">
		<h2 class="text-2xl font-bold tracking-tight text-primary border-b border-base-300/20 pb-2">
			🧭 ปริศนาทั่วไปและตรรกศาสตร์ (Non-Word Puzzles)
		</h2>
		<div class="grid md:grid-cols-2 gap-6">
			{#each nonWordPuzzles as p}
				<a
					href="/puzzles/{p.type}"
					class="card bg-neutral text-neutral-content shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 block h-full group"
				>
					<div class="card-body flex flex-col items-center text-center gap-4 p-6">
						<div class="w-20 h-20 rounded-2xl bg-base-300/40 text-primary flex items-center justify-center p-3 shadow-inner border border-base-300/60 group-hover:bg-primary/10 group-hover:text-secondary group-hover:border-secondary/30 transition-all duration-300">
							{@html p.icon}
						</div>
						<div class="flex flex-col gap-1 flex-1 items-center">
							<h2 class="card-title text-2xl font-bold capitalize tracking-wide text-primary justify-center text-center">
								{p.type === 'thaimapquiz' ? 'Thai Map Quiz' : p.type}
							</h2>
							<p class="text-base font-medium opacity-80 leading-relaxed">{p.description}</p>
						</div>
					</div>
				</a>
			{/each}
		</div>
	</section>

</div>
