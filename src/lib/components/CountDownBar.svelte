<script lang="ts">
	export let answerTime: number;
	export let maxAnswerTime: number;
	const maxAnswerTimeSecond: number = maxAnswerTime / 1000;
	const numBar = maxAnswerTimeSecond * 2 - 1;
	const barArray = new Array(numBar).fill(0).map((_, i) => Math.abs(i + 1 - maxAnswerTimeSecond));
</script>

{#if answerTime > 0}
	<div class="w-full flex flex-row gap-1 my-2">
		{#each barArray as t}
			<div
				class="w-full bg-base-300 rounded h-6 overflow-hidden transition-colors"
				class:bg-error={answerTime > t * 1000}
			></div>
		{/each}
	</div>
{/if}
