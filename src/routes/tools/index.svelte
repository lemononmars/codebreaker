<script lang="ts">
	import {
		CheckCircleIcon,
		GridIcon,
		SearchIcon,
		ColumnsIcon,
		ImageIcon,
		Edit3Icon
	} from 'svelte-feather-icons';

	const puzzleBuilders = [
		{
			name: 'Crossword Builder',
			path: '/tools/crossword',
			description: 'สร้างตารางอักษรไขว้ภาษาไทย',
			icon: ColumnsIcon,
			color: 'text-accent'
		},
		{
			name: 'Word Search Builder',
			path: '/tools/wordsearch',
			description: 'สร้างตารางหาคำศัพท์ภาษาไทย',
			icon: Edit3Icon,
			color: 'text-secondary'
		}
	];

	const utilities = [
		{
			name: 'Answer Checker',
			path: '/tools/check',
			description: 'สร้างหน้าเว็บสำหรับตรวจคำตอบ',
			icon: CheckCircleIcon,
			color: 'text-success'
		},
		{
			name: 'Pentomino Solver',
			path: '/tools/pentomino',
			description: 'แก้ปริศนา pentomino ขนาด 8x8',
			icon: GridIcon,
			color: 'text-primary'
		},
		{
			name: 'Thai Word Search',
			path: '/tools/thwordsearch',
			description: 'ค้นหาคำในภาษาไทยที่ตรงกับรูปแบบ',
			icon: SearchIcon,
			color: 'text-secondary'
		},
		{
			name: 'Jigsaw Quiz',
			path: '/tools/jigsaw',
			description: 'ปริศนาเปิดแผ่นป้าย "แฟนพันธุ์แท้"',
			icon: ImageIcon,
			color: 'text-info'
		}
	];
</script>

<svelte:head>
	<title>Code Breaker | Tools & Utilities</title>
	<meta
		name="description"
		content="A collection of powerful tools for puzzle solvers: Thai Word Search, Crossword Builder, Pentomino Solver, and more."
	/>
	<meta property="og:title" content="Code Breaker Tools" />
	<meta
		property="og:description"
		content="A collection of powerful tools for puzzle solvers: Thai Word Search, Crossword Builder, Pentomino Solver, and more."
	/>
	<meta property="og:type" content="website" />
	<meta property="og:image" content="/og-main.png" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:image" content="/og-main.png" />
</svelte:head>

<div class="container mx-auto px-4 pt-12 pb-24">
	<div class="max-w-3xl mx-auto text-center mb-16">
		<h1
			class="text-3xl lg:text-5xl font-extrabold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
		>
			Tools & Utilities
		</h1>
		<p class="text-lg text-base-content/70">เครื่องมือช่วยสร้างและแก้ปริศนาของคุณ</p>
	</div>

	<div class="max-w-4xl mx-auto mb-16">
		<h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
			<div class="w-2 h-8 bg-primary rounded-full"></div>
			Puzzle Builders
		</h2>
		<div class="grid md:grid-cols-2 gap-8">
			{#each puzzleBuilders as tool}
				<a
					href={tool.path}
					class="card bg-base-100 hover:bg-base-200 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl group border border-base-200/50 shadow-lg"
				>
					<div class="card-body items-center text-center p-8">
						<div
							class="w-20 h-20 rounded-2xl bg-base-200/50 shadow-inner flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
						>
							<svelte:component this={tool.icon} size="40" class={tool.color} />
						</div>
						<h2 class="card-title text-3xl font-bold mb-3">{tool.name}</h2>
						<p class="text-base-content/70 font-medium">{tool.description}</p>
					</div>
				</a>
			{/each}
		</div>
	</div>

	<div class="max-w-4xl mx-auto mb-16">
		<h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
			<div class="w-2 h-8 bg-secondary rounded-full"></div>
			Utilities
		</h2>
		<div class="grid md:grid-cols-2 gap-8">
			{#each utilities as tool}
				<a
					href={tool.path}
					class="card bg-base-100 hover:bg-base-200 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl group border border-base-200/50 shadow-lg"
				>
					<div class="card-body items-center text-center p-8">
						<div
							class="w-20 h-20 rounded-2xl bg-base-200/50 shadow-inner flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
						>
							<svelte:component this={tool.icon} size="40" class={tool.color} />
						</div>
						<h2 class="card-title text-3xl font-bold mb-3">{tool.name}</h2>
						<p class="text-base-content/70 font-medium">{tool.description}</p>
					</div>
				</a>
			{/each}
		</div>
	</div>
</div>
