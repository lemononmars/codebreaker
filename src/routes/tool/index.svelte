<script lang="ts">
	import { CheckCircleIcon, GridIcon, SearchIcon, ColumnsIcon } from 'svelte-feather-icons';

	const tools = [
		{
			name: 'Check',
			path: '/tool/check',
			description: 'Verify your answers and puzzle logic',
			icon: CheckCircleIcon,
			color: 'text-success'
		},
		{
			name: 'Pentomino',
			path: '/tool/pentomino',
			description: 'Pentomino puzzle solver and assistant',
			icon: GridIcon,
			color: 'text-primary'
		},
		{
			name: 'TH Word Search',
			path: '/tool/thwordsearch',
			description: 'Pattern-matching tool for Thai words',
			icon: SearchIcon,
			color: 'text-secondary'
		},
		{
			name: 'Crossword Maker',
			path: '/tool/crossword',
			description: 'Build Thai crossword grids with word suggestions',
			icon: ColumnsIcon,
			color: 'text-accent'
		}
	];
</script>

<svelte:head>
	<title>Code Breaker | Tools</title>
</svelte:head>

<div class="container mx-auto px-4 pt-12 pb-24">
	<div class="max-w-3xl mx-auto text-center mb-16">
		<h1 class="text-5xl font-extrabold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
			Tools & Utilities
		</h1>
		<p class="text-lg text-base-content/70">
			A collection of helpful tools for solving and analyzing puzzles.
		</p>
	</div>

	<div class="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
		{#each tools as tool}
			<a
				href={tool.path}
				class="card bg-base-100 hover:bg-base-200 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl group border border-base-200/50 shadow-lg"
			>
				<div class="card-body items-center text-center p-8">
					<div class="w-20 h-20 rounded-2xl bg-base-200/50 shadow-inner flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
						<svelte:component this={tool.icon} size="40" class={tool.color} />
					</div>
					<h2 class="card-title text-3xl font-bold mb-3">{tool.name}</h2>
					<p class="text-base-content/70 font-medium">{tool.description}</p>
				</div>
			</a>
		{/each}
	</div>
</div>
