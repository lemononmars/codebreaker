<script lang="ts">
	import { user, username } from '$lib/store';
	import { from, auth, uploadProfilePicture } from '$lib/supabase';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import type { Leaderboard } from '$lib/interfaces';
	import { Edit2Icon, SaveIcon, XIcon, UploadIcon } from 'svelte-feather-icons';

	let profile: any = null;
	let solved: Leaderboard[] = [];
	let solvedIds: Set<string> = new Set();
	let allWeeklyPuzzles: any[] = [];
	let puzzlesByYear: Record<number, any[]> = {};
	let loading = true;
	let years: number[] = [];

	let isEditing = false;
	let newUsername = '';
	let isUpdating = false;
	let profilePictureUrl = '';
	let isUploadingPicture = false;
	let userProfileRecord: any = null;

	user.subscribe((value) => {
		profile = value;
	});

	onMount(async () => {
		if (!profile) {
			const { data: session } = await auth.getSession();
			if (session.session?.user) {
				user.set(session.session.user);
				profile = session.session.user;
				if ($username === 'code breaker' || $username === profile.email) {
					username.set(profile.user_metadata?.username || profile.email);
				}
			} else {
				goto('/login');
				return;
			}
		}

		await ensureUserProfile();
		await loadProfileData();
	});

	async function ensureUserProfile() {
		if (!profile) return;

		// Check if user_profiles record exists
		const { data: existingProfile } = await from('user_profiles')
			.select('*')
			.eq('id', profile.id)
			.single();

		if (existingProfile) {
			userProfileRecord = existingProfile;
			profilePictureUrl =
				existingProfile.profile_picture_url || profile.user_metadata?.avatar_url || '';
		} else {
			// Create user_profiles record
			const { data: newProfile, error } = await from('user_profiles')
				.insert({
					id: profile.id,
					username: $username,
					profile_picture_url: profile.user_metadata?.avatar_url || null
				})
				.select()
				.single();

			if (!error && newProfile) {
				userProfileRecord = newProfile;
				profilePictureUrl = newProfile.profile_picture_url || '';
			}
		}
	}

	async function loadProfileData() {
		loading = true;

		// Query by current username since addToLeaderboard uses $username
		let queryName = $username;

		const { data: solvedData, error } = await from('leaderboard').select('*').eq('name', queryName);

		if (solvedData) {
			solved = solvedData;
			solvedIds = new Set(
				solvedData.filter((s) => s.puzzle_type === 'weekly').map((s) => String(s.puzzle_id))
			);
		}

		try {
			const res = await fetch('/api/puzzle/weekly/');
			const content = await res.json();
			if (content.content) {
				allWeeklyPuzzles = content.content;

				// Group by Year
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
		} catch (e) {
			console.error('Failed to load weekly puzzles', e);
		}

		loading = false;
	}

	async function updateUsername() {
		if (!newUsername || newUsername === $username) {
			isEditing = false;
			return;
		}
		isUpdating = true;
		const { data, error } = await auth.updateUser({
			data: { username: newUsername }
		});

		if (data.user) {
			user.set(data.user);
			profile = data.user;
			username.set(newUsername);

			// Update user_profiles table
			await from('user_profiles')
				.update({ username: newUsername, updated_at: new Date().toISOString() })
				.eq('id', profile.id);

			await loadProfileData();
		}
		isUpdating = false;
		isEditing = false;
	}

	async function handlePictureUpload(event: Event) {
		const input = event.target as HTMLInputElement;
		if (!input.files || !input.files[0] || !profile) return;

		const file = input.files[0];
		if (file.size > 2 * 1024 * 1024) {
			alert('File size must be less than 2MB');
			return;
		}

		isUploadingPicture = true;
		const url = await uploadProfilePicture(profile.id, file);

		if (url) {
			// Update user_profiles table
			const { error } = await from('user_profiles')
				.update({ profile_picture_url: url, updated_at: new Date().toISOString() })
				.eq('id', profile.id);

			if (!error) {
				profilePictureUrl = url;
			}
		}

		isUploadingPicture = false;
	}

	function startEditing() {
		newUsername = $username;
		isEditing = true;
	}

	function handleLogout() {
		auth.signOut();
		user.set(null);
		username.set('code breaker');
		goto('/');
	}
</script>

<svelte:head>
	<title>Code Breaker | Profile</title>
</svelte:head>

<div class="container mx-auto px-4 pt-8 pb-12">
	{#if profile}
		<div class="card bg-neutral text-neutral-content shadow-xl p-8 mb-8">
			<div class="flex flex-col md:flex-row justify-between items-center gap-4">
				<div class="flex flex-col md:flex-row items-center gap-6 flex-1">
					<!-- Profile Picture -->
					<div class="relative">
						<div class="avatar">
							<div
								class="w-24 h-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2"
							>
								<img src={profilePictureUrl || '/default-avatar.png'} alt={$username} />
							</div>
						</div>
						<label
							class="absolute bottom-0 right-0 btn btn-circle btn-sm btn-primary {isUploadingPicture
								? 'loading'
								: ''}"
						>
							{#if !isUploadingPicture}
								<UploadIcon size="16" />
							{/if}
							<input type="file" accept="image/*" class="hidden" on:change={handlePictureUpload} />
						</label>
					</div>

					<div class="flex-1 text-center md:text-left">
						<h1 class="text-3xl font-bold text-primary">User Profile</h1>

						<div class="mt-2 flex items-center gap-4 justify-center md:justify-start">
							{#if isEditing}
								<input
									type="text"
									class="input input-sm text-base-content"
									bind:value={newUsername}
								/>
								<button
									class="btn btn-sm btn-success btn-circle"
									class:loading={isUpdating}
									on:click={updateUsername}
								>
									<SaveIcon size="16" />
								</button>
								<button
									class="btn btn-sm btn-ghost btn-circle"
									on:click={() => (isEditing = false)}
								>
									<XIcon size="16" />
								</button>
							{:else}
								<p class="text-xl opacity-80">
									{$username}
								</p>
								<button
									class="btn btn-sm btn-ghost btn-circle opacity-50 hover:opacity-100"
									on:click={startEditing}
									title="Edit Username"
								>
									<Edit2Icon size="16" />
								</button>
							{/if}
						</div>

						<p class="text-sm opacity-50 mt-1">{profile.email}</p>
						{#if userProfileRecord}
							<a href="/user/{$username}" class="text-sm link link-primary mt-2 inline-block"
								>View Public Profile</a
							>
						{/if}
					</div>
				</div>
				<button class="btn btn-outline btn-error" on:click={handleLogout}>Logout</button>
			</div>
		</div>

		<div class="flex flex-col gap-8">
			<h2 class="text-3xl font-bold text-center mb-4">Weekly Puzzles Progress</h2>
			{#if loading}
				<div class="animate-pulse h-96 bg-base-300 rounded w-full" />
			{:else if years.length > 0}
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
	{/if}
</div>
