<script context="module" lang="ts">
	/** @type {import('@sveltejs/kit').Load} */
	export async function load({ fetch }) {
		const res = await fetch('/api/puzzle/wordsearch');
		const data = await res.json();

		const wordsearches = data
			.filter((d) => d.is_public !== false)
			.map((d) => ({
				...d,
				type: 'wordsearch',
				date: d.created_at,
				difficulty: d.clues?.difficulty || 1
			}));

		return {
			props: { wordsearches }
		};
	}
</script>

<script lang="ts">
	import { dateToThaiString } from '$lib/utils/date';
	export let wordsearches: any[];
</script>

<svelte:head>
	<title>Code Breaker | Word Search Puzzles</title>
</svelte:head>

<div class="max-w-4xl mx-auto py-8 px-4">
	<h1 class="text-4xl font-black mb-4">ปริศนาหาคำศัพท์ (Word Search)</h1>

	<div class="divider" />

	<div class="flex flex-col justify-center">
		<div class="overflow-x-auto">
			<table class="table table-zebra table-compact w-full mx-auto">
				<thead>
					<tr>
						<th>ชื่อ</th>
						<th>ระดับความยาก</th>
						<th>วันที่</th>
						<th>ผู้แต่ง</th>
					</tr>
				</thead>
				<tbody>
					{#each wordsearches as p}
						<tr>
							<td>
								<a href="/puzzles/wordsearch/{p.uid}">
									<p class="text-primary font-bold hover:underline">{p.title}</p>
								</a>
							</td>
							<td>
								{#if p.difficulty === 1}
									<span class="badge badge-success">ง่าย</span>
								{:else if p.difficulty === 2}
									<span class="badge badge-warning">ปานกลาง</span>
								{:else}
									<span class="badge badge-error">ยาก</span>
								{/if}
							</td>
							<td>{dateToThaiString(p.date)}</td>
							<td>{p.author || 'ไม่มี'}</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	</div>
</div>
