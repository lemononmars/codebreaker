<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { adventureCode, adventureLevel, adventureCodes } from '$lib/store';
	import { browser } from '$app/env';
	import { onDestroy } from 'svelte';
	import DOMPurify from 'isomorphic-dompurify';

	// Reactive level from URL
	$: level = parseInt($page.params.id);

	// Access code from store map
	let codes: Record<number, string> = { 1: 'start' };
	adventureCodes.subscribe((v) => {
		try {
			codes = JSON.parse(v);
		} catch (e) {
			codes = { 1: 'start' };
		}
	});

	$: code = codes[level] || '';

	// Local state
	let content: any = null;
	let answer = '';
	let status = '';
	let loading = true;
	let isLocked = false;
	let showModal = false;

	// Level-specific setup and cleanup mappings
	function executeSetup(lvl: number) {
		if (!browser) return;
		switch (lvl) {
			case 4:
				console.log("Password: debug");
				break;
			case 6: {
				const meta = document.createElement("meta");
				meta.name = "password";
				meta.content = "meta";
				document.head.appendChild(meta);
				break;
			}
			case 7:
				document.cookie = "password=biscuit; path=/";
				break;
			case 8:
				document.title = "Password: title";
				break;
		}
	}

	function executeCleanup(lvl: number) {
		if (!browser) return;
		switch (lvl) {
			case 6: {
				const meta = document.querySelector("meta[name=\"password\"]");
				if (meta) meta.remove();
				break;
			}
			case 7:
				document.cookie = "password=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
				break;
			case 8:
				document.title = "Code Breaker | Adventure";
				break;
		}
	}

	// Cleanup on destroy
	onDestroy(() => {
		if (browser && level) {
			executeCleanup(level);
		}
	});

	let activeLevelForCleanup: number | null = null;

	// Load level data
	$: if (browser && level && code) {
		loadLevelData(level, code);
	} else if (browser && level && !code) {
		// If no code found for this level (and we are in browser), it's locked.
		loading = false;
		isLocked = true;
		// Unless it is level 1, which should always have 'start' if store failed?
		// but we initialize codes with {1: 'start'}.
	}

	async function loadLevelData(lvl: number, c: string) {
		if (!browser) return;

		if (activeLevelForCleanup && activeLevelForCleanup !== lvl) {
			executeCleanup(activeLevelForCleanup);
		}

		loading = true;
		content = null;
		isLocked = false;

		const res = await fetch(`/api/puzzle/adventure/${lvl}/get/${c}`);
		const data = await res.json();

		loading = false;
		content = data;

		if (data.result !== 'correct') {
			isLocked = true;
		} else {
			executeSetup(lvl);
			activeLevelForCleanup = lvl;
		}
	}

	async function checkAnswer() {
		const res = await fetch(`/api/puzzle/adventure/${level}/check/${answer}`);
		const data = await res.json();

		if (data) {
			if (data.result === 'correct') {
				status = 'correct! ' + data.code;

				// Save new code to store
				const nextLevel = level + 1;
				codes[nextLevel] = data.code;
				$adventureCodes = JSON.stringify(codes);

				// Update max level if we progressed
				if (nextLevel > parseInt($adventureLevel)) {
					$adventureLevel = String(nextLevel);
				}

				// Update current code store (legacy support)
				$adventureCode = data.code;

				// Show Modal
				showModal = true;

				// Wait 2 seconds then navigate
				setTimeout(() => {
					showModal = false;
					answer = ''; // clear input
					goto(`/puzzles/adventure/${nextLevel}`);
				}, 2000);
			} else {
				status = 'incorrect: ' + data.hint;
			}
		} else status = 'server error';
	}

	function handleKeyPress(event: KeyboardEvent) {
		if (event.code != 'Enter') return;
		checkAnswer();
	}

	function goToMaxLevel() {
		goto(`/puzzles/adventure/${$adventureLevel}`);
	}
</script>

{#key level}
	<div class="min-h-screen flex flex-col items-center">
		{#if loading}
			<button class="btn loading">Loading ...</button>
		{:else if isLocked}
			<div class="hero min-h-[50vh] bg-base-200 rounded-xl">
				<div class="hero-content text-center">
					<div class="max-w-md">
						<h1 class="text-5xl font-bold text-error">Access Denied</h1>
						<p class="py-6">You haven't unlocked Level {level} yet.</p>
						<button class="btn btn-primary" on:click={goToMaxLevel}
							>Go to Level {$adventureLevel}</button
						>
					</div>
				</div>
			</div>
		{:else if content && content.result === 'correct'}
			<div
				class="w-full max-w-3xl p-8 my-10 bg-base-200 rounded-xl shadow-lg transition-all duration-500"
			>
				{@html DOMPurify.sanitize(content.question)}
			</div>

			{#if content.result === 'correct' && !content.question.includes('Congratulations')}
				<div class="form-control w-full max-w-xs">
					<div class="input-group">
						<input
							type="text"
							placeholder="Type your answer here..."
							class="input input-bordered w-full"
							bind:value={answer}
							on:keydown={handleKeyPress}
						/>
						<button class="btn btn-primary" on:click={checkAnswer}>Submit</button>
					</div>
				</div>
			{/if}

			<div class="mt-4 min-h-[1.5rem] text-error font-bold">
				{#if status.startsWith('incorrect')}
					{status}
				{/if}
			</div>
		{:else}
			<div class="alert alert-error">Something went wrong loading the level.</div>
		{/if}
	</div>

	<!-- Success Modal -->
	<input type="checkbox" id="success-modal" class="modal-toggle" bind:checked={showModal} />
	<label for="success-modal" class="modal cursor-pointer">
		<label class="modal-box relative bg-success text-success-content text-center animate-bounce">
			<h3 class="text-lg font-bold">Correct!</h3>
			<p class="py-4">Level {level} completed. Teleporting in 2 seconds...</p>
		</label>
	</label>
{/key}
