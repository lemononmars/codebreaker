<script lang="ts">
	import { onMount } from 'svelte';
	import { ArrowLeftIcon, AwardIcon } from 'svelte-feather-icons';

	interface ScoreEntry {
		mode: string;
		modeLabel: string;
		difficulty: string;
		diffLabel: string;
		score: number;
		key: string;
	}

	let scores: ScoreEntry[] = [];
	let loaded = false;

	const modeConfigs = [
		{ key: 'normal', label: 'Normal', icon: '❤️', color: 'text-error', bg: 'bg-error/10', border: 'border-error/30' },
		{ key: 'timeattack', label: 'Time Attack', icon: '⚡', color: 'text-warning', bg: 'bg-warning/10', border: 'border-warning/30' },
		{ key: 'endless', label: 'Endless', icon: '♾️', color: 'text-success', bg: 'bg-success/10', border: 'border-success/30' }
	];

	const difficultyConfigs = [
		{ key: 'normal', label: 'ทั่วไป (1 ตัวอักษร)', emoji: '🔵' },
		{ key: 'difficult', label: 'ท้าทาย (2 ตัวอักษร)', emoji: '🟠' }
	];

	onMount(() => {
		if (typeof window === 'undefined') return;
		const saved = localStorage.getItem('codebreaker_blanks_highscores');
		const parsed = saved ? JSON.parse(saved) : {};

		const rows: ScoreEntry[] = [];
		for (const m of modeConfigs) {
			for (const d of difficultyConfigs) {
				const key = `${m.key}_${d.key}`;
				rows.push({
					mode: m.key,
					modeLabel: `${m.icon} ${m.label}`,
					difficulty: d.key,
					diffLabel: d.label,
					score: parsed[key] || 0,
					key
				});
			}
		}
		scores = rows;
		loaded = true;
	});

	$: grouped = difficultyConfigs.map(d => ({
		...d,
		rows: scores.filter(s => s.difficulty === d.key)
	}));

	function getBestScore(difficulty: string) {
		return Math.max(...scores.filter(s => s.difficulty === difficulty).map(s => s.score), 0);
	}

	function getRank(score: number, allScores: number[]): string {
		if (score === 0) return '—';
		const sorted = [...new Set(allScores)].sort((a, b) => b - a);
		const rank = sorted.indexOf(score) + 1;
		if (rank === 1) return '🥇';
		if (rank === 2) return '🥈';
		if (rank === 3) return '🥉';
		return `#${rank}`;
	}
</script>

<svelte:head>
	<title>Code Breaker | ตารางคะแนน — ซ่อนอักษร</title>
	<meta name="description" content="ตารางคะแนนสูงสุดส่วนตัว เกมซ่อนอักษร แยกตามโหมดและระดับความยาก" />
</svelte:head>

<div class="flex flex-col gap-8 w-full max-w-3xl mx-auto px-4 pb-16 pt-4">
	<!-- Header -->
	<div class="flex flex-col gap-3">
		<a
			href="/puzzles/blanks"
			class="inline-flex items-center gap-2 text-sm font-bold opacity-60 hover:opacity-100 transition-opacity w-fit"
		>
			<ArrowLeftIcon size="16" />
			กลับไปเล่น
		</a>

		<div class="flex flex-col gap-1">
			<div class="flex items-center gap-3">
				<div class="w-12 h-12 rounded-2xl bg-warning/15 border border-warning/30 flex items-center justify-center text-warning shadow-inner">
					<AwardIcon size="24" />
				</div>
				<div>
					<h1 class="text-2xl sm:text-3xl font-black tracking-tight text-white">ตารางคะแนน</h1>
					<p class="text-xs sm:text-sm opacity-60 font-semibold">เกมซ่อนอักษร — คะแนนสูงสุดส่วนตัว</p>
				</div>
			</div>
			<div class="mt-2 text-xs opacity-50 bg-base-300/20 border border-base-300/30 rounded-xl px-3 py-2 leading-relaxed">
				💡 คะแนนเหล่านี้บันทึกอยู่บนอุปกรณ์ของคุณเท่านั้น (localStorage)
			</div>
		</div>
	</div>

	{#if !loaded}
		<div class="flex items-center justify-center py-20 opacity-50">
			<span class="loading loading-dots loading-lg" />
		</div>
	{:else}
		{#each grouped as group}
			<section class="flex flex-col gap-4">
				<!-- Difficulty Header -->
				<div class="flex items-center justify-between">
					<h2 class="text-lg sm:text-xl font-black text-white flex items-center gap-2">
						<span class="text-2xl">{group.emoji}</span>
						{group.label}
					</h2>
					{#if getBestScore(group.key) > 0}
						<div class="flex items-center gap-1.5 badge badge-warning badge-lg font-black">
							🏆 {getBestScore(group.key).toLocaleString()}
						</div>
					{/if}
				</div>

				<!-- Scores Table -->
				<div class="card bg-neutral shadow-xl border border-base-300 overflow-hidden">
					<table class="table w-full">
						<thead>
							<tr class="border-b border-base-300/60 bg-base-100/30 text-xs font-extrabold uppercase tracking-wider opacity-60">
								<th class="py-3 px-4 text-left">โหมด</th>
								<th class="py-3 px-4 text-right">คะแนนสูงสุด</th>
								<th class="py-3 px-4 text-center w-20">อันดับ</th>
							</tr>
						</thead>
						<tbody>
							{#each group.rows as row}
							{@const allScores = group.rows.map(r => r.score)}
								{@const modeConf = modeConfigs.find(m => m.key === row.mode)}
								<tr class="border-b border-base-300/30 last:border-0 transition-colors hover:bg-white/5 {row.score === 0 ? 'opacity-50' : ''}">
									<td class="py-4 px-4">
										<div class="flex items-center gap-2">
											<span class="w-7 h-7 rounded-lg {modeConf?.bg} {modeConf?.border} border flex items-center justify-center text-sm">
												{modeConf?.icon}
											</span>
											<span class="font-extrabold {modeConf?.color} text-sm sm:text-base">
												{modeConf?.label}
											</span>
										</div>
									</td>
									<td class="py-4 px-4 text-right">
										{#if row.score > 0}
											<span class="font-black font-mono text-lg sm:text-2xl text-primary">
												{row.score.toLocaleString()}
											</span>
											<span class="text-xs opacity-50 ml-1 font-bold">คะแนน</span>
										{:else}
											<span class="text-sm opacity-40 font-bold">ยังไม่เคยเล่น</span>
										{/if}
									</td>
									<td class="py-4 px-4 text-center text-xl font-black">
										{getRank(row.score, allScores)}
									</td>
								</tr>
							{/each}
						</tbody>
					</table>
				</div>
			</section>
		{/each}

		<!-- Overall Summary -->
		{#if scores.some(s => s.score > 0)}
			<section class="flex flex-col gap-3">
				<h2 class="text-sm font-black text-white opacity-60 uppercase tracking-wider">สรุปภาพรวม</h2>
				<div class="grid grid-cols-2 sm:grid-cols-3 gap-3">
					<div class="card bg-neutral border border-base-300 shadow-lg">
						<div class="card-body p-4 text-center">
							<p class="text-xs opacity-50 font-bold uppercase tracking-wider mb-1">คะแนนสูงสุดตลอด</p>
							<p class="text-2xl font-black font-mono text-primary">
								{Math.max(...scores.map(s => s.score)).toLocaleString()}
							</p>
						</div>
					</div>
					<div class="card bg-neutral border border-base-300 shadow-lg">
						<div class="card-body p-4 text-center">
							<p class="text-xs opacity-50 font-bold uppercase tracking-wider mb-1">โหมดที่เล่น</p>
							<p class="text-2xl font-black text-secondary">{scores.filter(s => s.score > 0).length} / {scores.length}</p>
						</div>
					</div>
					<div class="card bg-neutral border border-base-300 shadow-lg col-span-2 sm:col-span-1">
						<div class="card-body p-4 text-center">
							<p class="text-xs opacity-50 font-bold uppercase tracking-wider mb-1">คะแนนรวมทั้งหมด</p>
							<p class="text-2xl font-black font-mono text-accent">
								{scores.reduce((a, s) => a + s.score, 0).toLocaleString()}
							</p>
						</div>
					</div>
				</div>
			</section>
		{:else}
			<div class="flex flex-col items-center gap-4 py-12 opacity-50">
				<span class="text-5xl">🎮</span>
				<p class="font-bold text-center">ยังไม่มีคะแนน<br/>เริ่มเล่นเกมก่อนนะ!</p>
				<a href="/puzzles/blanks" class="btn btn-primary btn-sm">เล่นเลย</a>
			</div>
		{/if}

		<!-- Play Again CTA -->
		<a
			href="/puzzles/blanks"
			class="btn btn-primary w-full gap-2 font-black text-lg py-4 h-auto rounded-2xl shadow-xl hover:shadow-primary/30 hover:scale-[1.01] transition-all"
		>
			🚀 เริ่มเกมใหม่
		</a>
	{/if}
</div>
