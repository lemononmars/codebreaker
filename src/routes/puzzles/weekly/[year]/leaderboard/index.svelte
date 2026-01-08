<script lang="ts">
	import type { Leaderboard } from '$lib/interfaces';

	export let leaderboardData: Leaderboard[] = [];
	export let year: number;

	$: min =
		leaderboardData.length > 0 ? Math.min(...leaderboardData.map((d) => d.puzzle_id % 100)) : 0;
	$: max =
		leaderboardData.length > 0 ? Math.max(...leaderboardData.map((d) => d.puzzle_id % 100)) : 0;

	$: minseason = Math.floor(min / 13) + 1;
	$: maxseason = Math.ceil(max / 13);
	$: seasons = Array.from(
		{ length: Math.max(0, maxseason - minseason + 1) },
		(_, i) => i + minseason
	);

	let curseason: number = 0; // 0 = all, 1,2,3,4 for weeks 1-13, 14-27, 28-38 and 39-52

	$: minweek = getMinWeek(curseason, min);
	$: maxweek = getMaxWeek(curseason, max);
	$: weekArray = Array.from({ length: Math.max(0, maxweek - minweek + 1) }, (_, i) => i + minweek);

	const getMinWeek = function (s: number, absoluteMin: number) {
		const absmin = s === 0 ? 0 : (s - 1) * 13 + 1;
		return Math.max(absmin, absoluteMin);
	};
	const getMaxWeek = function (s: number, absoluteMax: number) {
		const absmax = s === 0 ? 52 : s * 13;
		return Math.min(absmax, absoluteMax);
	};

	$: names = Array.from(new Set(leaderboardData.map((d) => d.name)));

	$: sortedNames = names
		.filter((n) => getTotal(n, minweek, maxweek) > 0)
		.sort((a, b) => getTotal(b, minweek, maxweek) - getTotal(a, minweek, maxweek));

	function getTotal(n: string, a: number, b: number) {
		let sum = 0;
		leaderboardData.forEach((d) => {
			if (d.name === n && d.puzzle_id % 100 >= a && d.puzzle_id % 100 <= b) sum += d.score;
		});
		return sum;
	}

	function findScore(n: string, w: number) {
		const found = leaderboardData.find((d) => d.name === n && d.puzzle_id % 100 === w);
		return found ? found.score : 0;
	}
</script>

<h1><a href="/puzzles/weekly">ตารางอันดับ ปริศนาประจำปี {year}</a></h1>

<ul class="menu menu-vertical lg:menu-horizontal bg-base-200 rounded-box">
	<li>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<a
			on:click={() => {
				curseason = 0;
			}}
			class={curseason === 0 ? 'active' : ''}>รวม</a
		>
	</li>
	{#each seasons as ss}
		<li>
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<a
				on:click={() => {
					curseason = ss;
				}}
				class={curseason === ss ? 'active' : ''}>ฤดูกาลที่ {ss}</a
			>
		</li>
	{/each}
</ul>

<div class="overflow-x-auto overflow-y-auto h-screen">
	<table class="table table-compact mx-auto">
		<thead class="sticky top-0 border-2">
			<tr class="text-center">
				<th>ชื่อ</th>
				<th class="text-accent">อันดับ</th>
				<th class="text-secondary">คะแนนรวม</th>
				{#each weekArray as week}
					<th> #{week}</th>
				{/each}
			</tr>
		</thead>
		<tbody>
			{#each sortedNames as n, idx}
				<tr class="text-center">
					<td class="text-left sticky left-0">
						{#if n.length > 15}
							<a href="/user/{n}" class="link link-hover"
								><div class="tooltip" data-tip={n}>{n.slice(0, 15) + '...'}</div></a
							>
						{:else}
							<a href="/user/{n}" class="link link-hover">{n}</a>
						{/if}
					</td>
					<td class="text-accent text-center">{idx + 1}</td>
					<td class="text-secondary text-center">{getTotal(n, minweek, maxweek)}</td>
					{#each weekArray as week}
						<td>{findScore(n, week)}</td>
					{/each}
				</tr>
			{/each}
		</tbody>
	</table>
</div>
