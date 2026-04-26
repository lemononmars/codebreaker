<script context="module" lang="ts">
	/** @type {import('@sveltejs/kit').Load} */
	export async function load({ fetch }) {
		console.log('start fetching');
		const res = await fetch('/api/puzzle/crossword');
		const data = await res.json();

		const crosswords = data
			.filter((d) => d.is_public !== false)
			.map((d) => ({
				...d,
				type: 'crossword',
				date: d.created_at
			}));

		return {
			props: { crosswords }
		};
	}
</script>

<script lang="ts">
	import { dateToThaiString } from '$lib/utils/date';
	import type { IPuzzleCrossword } from '$lib/interfaces';
	export let crosswords: IPuzzleCrossword[];
</script>

<svelte:head>
	<title>Code Breaker | Crossword Puzzles</title>
</svelte:head>

<h1>อักษรไขว้</h1>

<div class="divider" />

<div class="flex flex-col justify-center">
	<table class="table table-zebra table-compact w-full mx-auto">
		<thead>
			<th>ชื่อ</th>
			<th>ขนาด</th>
			<th>วันที่</th>
			<th>ผู้แต่ง</th>
		</thead>
		<tbody>
			{#each crosswords as p}
				<tr>
					<td>
						<a href="/puzzles/crossword/{p.uid}">
							<p class="text-primary">{p.title}</p>
						</a>
					</td>
					<td> {p.col} x {p.row} </td>
					<td>{dateToThaiString(p.date)}</td>
					<td>{p.author || 'ไม่มี'}</td>
					<td>
						{#each p.tags || [] as t}
							<div class="badge badge-outline">{t}</div>
						{/each}
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
