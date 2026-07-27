<script context="module" lang="ts">
	import { puzzleHunts as defaultPuzzleHunts } from '$lib/data/puzzles/puzzlehunt';
	import type { Load } from '@sveltejs/kit';

	export const load: Load = async ({ params, fetch }) => {
		const id = Number(params.id);
		try {
			const res = await fetch(`/puzzles/puzzlehunt/${id}.json`);
			if (res.ok) {
				const data = await res.json();
				if (data && data.content) {
					return {
						props: {
							content: data.content
						}
					};
				}
			}
		} catch (e) {
			// Fallback
		}

		const content = defaultPuzzleHunts.find((n) => n.id === id) || defaultPuzzleHunts[0];
		return {
			props: {
				content
			}
		};
	};
</script>

<script lang="ts">
	import type { IPuzzleHunt } from '$lib/interfaces';
	export let content: IPuzzleHunt;

	$: title = content?.title || '';
	$: puzzles = content?.puzzles || [];
	$: id = content?.id || 1;

	let currentTab: number = 0;
	$: numPuzzles = puzzles.length;
	$: solved = Array(numPuzzles).fill(false);
	$: currentPuzzle = puzzles[currentTab] || { index: 1, title: '', hints: [], file: '' };

	let answer: string = '';
	interface submissionResponse {
		answer?: string;
		result?: 'correct' | 'incorrect';
		hint?: string;
	}
	let submissionResponse: submissionResponse | null;

	async function checkAnswer() {
		if (!answer || !puzzles[currentTab]) return;

		let isCorrect: boolean = false;
		let hint: string = '';
		const sol = puzzles[currentTab].solution;
		if (sol && answer.toUpperCase() == sol) {
			isCorrect = true;
		} else if (!sol) {
			const res = await fetch(`/api/puzzle/puzzlehunt/${puzzles[currentTab].index}`, {
				method: 'POST',
				cache: 'default',
				credentials: 'same-origin',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					index: currentTab,
					answer
				})
			});
			const response = await res.json();

			if (response.result === 'correct') isCorrect = true;
			else hint = response.hint;
		}

		if (isCorrect) {
			submissionResponse = { answer, result: 'correct' };
			solved[currentTab] = true;
		} else submissionResponse = { answer, result: 'incorrect', hint };

		answer = '';
	}

	function changeTab(n: number) {
		currentTab = n;
		answer = '';
		submissionResponse = null;
	}

	function handleKeyPress(event: KeyboardEvent) {
		if (event.code != 'Enter') return;
		checkAnswer();
	}
</script>

<svelte:body on:keypress={handleKeyPress} />

<div class="flex flex-col gap-2 justify-content">
	<h1>{title}</h1>
	<div class="divider" />
	<div class="tabs w-full justify-around">
		{#each puzzles as p, idx}
			<!-- svelte-ignore a11y-missing-attribute -->
			<a class="tab tab-bordered" class:tab-active={currentTab == idx} on:click={() => changeTab(idx)}>
				ข้อที่ {p.index}
				{solved[idx] ? '✔️' : ''}
			</a>
		{/each}
	</div>
	{#if currentPuzzle}
		<div class="flex flex-col gap-2 justify-content">
			<h2>ข้อที่ {currentPuzzle.index} - {currentPuzzle.title}</h2>
			<div class="mx-auto">
				{#if !solved[currentTab]}
					<div class="input-group">
						<input type="text" class="input input-bordered" bind:value={answer} />
						<div class="btn btn-primary" on:click={checkAnswer}>ตรวจคำตอบ</div>
					</div>
					{#if submissionResponse}
						<p>
							{submissionResponse.answer?.toUpperCase()} is {submissionResponse.result}
							{submissionResponse.hint || ''}
						</p>
					{/if}
				{:else}
					<p>The answer is {currentPuzzle.solution?.toUpperCase()}</p>
				{/if}
			</div>
			<iframe
				src="{currentPuzzle.file}/preview"
				width="600"
				height="800"
				title="file"
				class="mx-auto max-h-screen"
			/>
			<div class="divider" />
			<h3>คำใบ้</h3>
			{#each currentPuzzle.hints || [] as h, idx}
				<div tabindex="0" class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
					<div class="collapse-title text-xl text-info">
						คำใบ้ที่ {idx + 1}
					</div>
					<div class="collapse-content">
						<p>{h}</p>
					</div>
				</div>
			{:else}
				<h3>ไม่มีคำใบ้</h3>
			{/each}
		</div>
	{/if}
</div>