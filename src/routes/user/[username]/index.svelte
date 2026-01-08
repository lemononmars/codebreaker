<script lang="ts" context="module">
	export async function load({ params, fetch }) {
		const username = params.username;

		try {
			// Fetch user profile
			const profileRes = await fetch(`/api/user/${username}`);
			if (!profileRes.ok) throw new Error('User not found');
			const profileData = await profileRes.json();

			// Fetch weekly puzzles
			const puzzlesRes = await fetch('/api/puzzle/weekly/');
			const puzzlesData = await puzzlesRes.json();

			return {
				props: {
					userProfile: profileData,
					allWeeklyPuzzles: puzzlesData.content || []
				}
			};
		} catch (error) {
			return {
				status: 404,
				error: new Error(`User not found: ${username}`)
			};
		}
	}
</script>

<script lang="ts">
	export let userProfile: any;
	export let allWeeklyPuzzles: any[];

	let puzzlesByYear: Record<number, any[]> = {};
	let years: number[] = [];
	let solvedIds: Set<string> = new Set();

	// Process puzzle data
	$: if (userProfile && allWeeklyPuzzles) {
		// Get solved puzzle IDs
		solvedIds = new Set(
			userProfile.solved_puzzles
				?.filter((s: any) => s.puzzle_type === 'weekly')
				.map((s: any) => String(s.puzzle_id)) || []
		);

		// Group by year
		puzzlesByYear = {};
		allWeeklyPuzzles.forEach((p) => {
			if (!puzzlesByYear[p.year]) puzzlesByYear[p.year] = [];
			puzzlesByYear[p.year].push(p);
		});

		// Sort weeks within years
		for (const y in puzzlesByYear) {
			puzzlesByYear[y].sort((a, b) => a.week - b.week);
		}
		years = Object.keys(puzzlesByYear)
			.map(Number)
			.sort((a, b) => b - a);
	}

	$: profilePicture =
		userProfile?.profile_picture_url || userProfile?.avatar_url || '/default-avatar.png';
</script>

<svelte:head>
	<title>{userProfile?.username || 'User'} | Code Breaker</title>
</svelte:head>

<div class="container mx-auto px-4 pt-8 pb-12">
	{#if userProfile}
		<div class="card bg-neutral text-neutral-content shadow-xl p-8 mb-8">
			<div class="flex flex-col md:flex-row items-center gap-6">
				<div class="avatar">
					<div class="w-24 h-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
						<img src={profilePicture} alt={userProfile.username} />
					</div>
				</div>
				<div class="flex-1 text-center md:text-left">
					<h1 class="text-3xl font-bold text-primary">{userProfile.username}</h1>
					<p class="text-sm opacity-50 mt-1">
						Joined {new Date(userProfile.created_at).toLocaleDateString()}
					</p>
				</div>
			</div>
		</div>

		<div class="flex flex-col gap-8">
			<h2 class="text-3xl font-bold text-center mb-4">Weekly Puzzles Progress</h2>
			{#if years.length > 0}
				{#each years as year}
					<div class="card bg-base-100 shadow-xl border border-base-300">
						<div class="card-body">
							<h3 class="card-title text-2xl mb-4">{year}</h3>
							<div
								class="grid grid-cols-5 md:grid-cols-10 lg:grid-cols-[repeat(13,minmax(0,1fr))] gap-2"
							>
								{#each puzzlesByYear[year] as p}
									{@const pid = p.year + ('0' + p.week).slice(-2)}
									{@const isSolved = solvedIds.has(pid)}
									<a
										href="/puzzles/weekly/{p.year}/{p.week}"
										class="tooltip"
										data-tip="Week {p.week}: {p.title || 'Puzzle'} {isSolved ? '(Solved)' : ''}"
									>
										<div
											class="aspect-square rounded-md flex items-center justify-center text-xs font-bold transition-all hover:scale-110 cursor-pointer
											{isSolved
												? 'bg-success text-success-content shadow-lg shadow-success/50'
												: 'bg-base-300 text-base-content opacity-50 hover:opacity-100'}"
										>
											{p.week}
										</div>
									</a>
								{/each}
							</div>
						</div>
					</div>
				{/each}
			{:else}
				<div class="text-center opacity-50">No puzzles found.</div>
			{/if}
		</div>
	{:else}
		<div class="text-center py-12">
			<h1 class="text-3xl font-bold mb-4">User Not Found</h1>
			<p class="opacity-75">The user you're looking for doesn't exist.</p>
			<a href="/" class="btn btn-primary mt-6">Go Home</a>
		</div>
	{/if}
</div>
