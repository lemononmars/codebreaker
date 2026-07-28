<script lang="ts">
	import ToolCard from '$lib/components/ToolCard.svelte';
	import {
		CheckCircleIcon,
		GridIcon,
		SearchIcon,
		ColumnsIcon,
		ImageIcon,
		Edit3Icon,
		BookOpenIcon,
		TypeIcon,
		ClockIcon,
		RadioIcon
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
		},
		{
			name: 'Missing Vowels Builder',
			path: '/tools/missingvowels',
			description: 'สร้างปริศนาพยัญชนะไม่มีสระ',
			icon: TypeIcon,
			color: 'text-primary'
		},
		{
			name: 'Alphabet Builder',
			path: '/tools/alphabet',
			description: 'สร้างปริศนาหาคำตามคำใบ้ภาษาไทย',
			icon: BookOpenIcon,
			color: 'text-warning'
		}
	];

	const utilities = [
		{
			name: 'Countdown',
			path: '/tools/countdown',
			description: 'สร้างคำที่ใช้ตัวอักษรมากที่สุด',
			icon: ClockIcon,
			color: 'text-amber-400'
		},
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
		},
		{
			name: 'Quiz Button',
			path: '/tools/button',
			description: 'ระบบปุ่มกดแย่งกันตอบสำหรับแข่งตอบคำถาม',
			icon: RadioIcon,
			color: 'text-error'
		},
		{
			name: 'Spelling Dictionary',
			path: '/tools/spellingdictionary',
			description: 'พจนานุกรมคำศัพท์ที่มักสะกดผิด',
			icon: BookOpenIcon,
			color: 'text-warning'
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

<div class="container mx-auto px-4 pt-6 sm:pt-12 pb-24">
	<div class="max-w-3xl mx-auto text-center mb-10 sm:mb-16">
		<h1
			class="text-3xl lg:text-5xl font-extrabold tracking-tight mb-3 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
		>
			Tools & Utilities
		</h1>
		<p class="text-base sm:text-lg text-base-content/70">เครื่องมือช่วยสร้างและแก้ปริศนาของคุณ</p>
	</div>

	<!-- Section 1: Puzzle Builders -->
	<div class="max-w-4xl mx-auto mb-10 sm:mb-16">
		<h2 class="text-xl sm:text-2xl font-bold mb-4 flex items-center gap-2 sm:gap-3">
			<div class="w-2 h-6 sm:h-8 bg-primary rounded-full"></div>
			Puzzle Builders
		</h2>
		<div class="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6">
			{#each puzzleBuilders as tool}
				<ToolCard
					name={tool.name}
					path={tool.path}
					description={tool.description}
					icon={tool.icon}
					color={tool.color}
				/>
			{/each}
		</div>
	</div>

	<!-- Section 2: Utilities -->
	<div class="max-w-4xl mx-auto mb-10 sm:mb-16">
		<h2 class="text-xl sm:text-2xl font-bold mb-4 flex items-center gap-2 sm:gap-3">
			<div class="w-2 h-6 sm:h-8 bg-secondary rounded-full"></div>
			Utilities
		</h2>
		<div class="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6">
			{#each utilities as tool}
				<ToolCard
					name={tool.name}
					path={tool.path}
					description={tool.description}
					icon={tool.icon}
					color={tool.color}
				/>
			{/each}
		</div>
	</div>
</div>
