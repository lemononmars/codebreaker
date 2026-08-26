<script lang="ts">
	import { onMount } from 'svelte';
	import { username } from '$lib/store';
	import type { Leaderboard } from '$lib/interfaces';
	import {
		AwardIcon,
		CheckCircleIcon,
		KeyIcon,
		XCircleIcon,
		StarIcon,
		ClockIcon,
		UserIcon,
		RefreshCwIcon
	} from 'svelte-feather-icons';

	let answer = '';
	let isSubmitting = false;
	let isWiggle = false;
	let openModal = false;
	let isSolved = false;
	let alreadySubmitted = false;
	let submissionSuccess = false;
	let errorMessage = '';
	let logs: string[] = [];

	let leaderboardData: Leaderboard[] = [];
	let isLoadingLeaderboard = false;

	const TARGET_ANSWER = 'เก่งมาก';

	$: sortedData = [...(leaderboardData || [])].sort((a, b) =>
		(a.created_at || '').localeCompare(b.created_at || '')
	);

	onMount(() => {
		if (typeof window !== 'undefined') {
			const saved = localStorage.getItem('codebreaker_seventh_solved');
			if (saved === 'true') {
				isSolved = true;
				fetchLeaderboard();
			}
		}
	});

	async function fetchLeaderboard() {
		isLoadingLeaderboard = true;
		try {
			const res = await fetch('/api/leaderboard/seventh');
			if (res.ok) {
				const data = await res.json();
				leaderboardData = Array.isArray(data) ? data : [];
			}
		} catch (e) {
			console.error(e);
		} finally {
			isLoadingLeaderboard = false;
		}
	}

	function normalize(str: string): string {
		return str.trim().replace(/\s+/g, '');
	}

	function triggleWiggle() {
		isWiggle = true;
		setTimeout(() => {
			isWiggle = false;
		}, 500);
	}

	function checkAnswer() {
		if (!answer.trim()) return;

		const userAns = normalize(answer);
		const targetAns = normalize(TARGET_ANSWER);

		if (userAns === targetAns) {
			isSolved = true;
			if (typeof window !== 'undefined') {
				localStorage.setItem('codebreaker_seventh_solved', 'true');
			}
			fetchLeaderboard();
			openModal = true;
			errorMessage = '';
		} else {
			triggleWiggle();
			logs = [answer, ...logs];
			answer = '';
		}
	}

	async function addToLeaderboard() {
		const nameToSubmit = ($username || '').trim();
		if (!nameToSubmit) {
			errorMessage = 'กรุณากรอกชื่อก่อนบันทึกคะแนน';
			return;
		}

		isSubmitting = true;
		errorMessage = '';

		try {
			const res = await fetch('/api/post/leaderboard', {
				method: 'POST',
				cache: 'default',
				credentials: 'same-origin',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					puzzle_type: 'seventh',
					puzzle_id: 7,
					name: nameToSubmit,
					score: 100
				})
			});

			if (res.ok) {
				submissionSuccess = true;
				alreadySubmitted = true;
				fetchLeaderboard();
				setTimeout(() => {
					openModal = false;
				}, 1200);
			} else {
				const data = await res.json();
				if (res.status === 400 && data?.error?.includes('already')) {
					errorMessage = 'คุณเคยส่งคะแนนด้วยชื่อนี้ไปแล้ว!';
					alreadySubmitted = true;
				} else {
					errorMessage = data?.error || 'เกิดข้อผิดพลาดในการบันทึกคะแนน';
				}
			}
		} catch (err) {
			errorMessage = 'ไม่สามารถเชื่อมต่อเซิร์ฟเวอร์ได้';
		} finally {
			isSubmitting = false;
		}
	}

	function handleKeyPress(e: KeyboardEvent) {
		if (e.key === 'Enter' && !openModal) {
			checkAnswer();
		}
	}

	function getRankEmoji(rank: number): string {
		if (rank === 1) return '🥇';
		if (rank === 2) return '🥈';
		if (rank === 3) return '🥉';
		return `#${rank}`;
	}

	function formatDateTime(iso: string): string {
		if (!iso) return '-';
		try {
			const d = new Date(iso);
			return d.toLocaleString('th-TH', {
				year: 'numeric',
				month: 'short',
				day: 'numeric',
				hour: '2-digit',
				minute: '2-digit'
			});
		} catch {
			return iso;
		}
	}
</script>

<svelte:window on:keydown={handleKeyPress} />

<svelte:head>
	<title>Code Breaker | ปริศนาครบรอบ 7 ปี</title>
	<meta name="description" content="ร่วมสนุกกับปริศนาพิเศษฉลองครบรอบ 7 ปี Code Breaker" />
</svelte:head>

<div class="container mx-auto px-4 py-8 sm:py-12 flex flex-col items-center gap-8 max-w-3xl">
	<!-- Hero Header -->
	<div class="text-center space-y-3">
		<div
			class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-500/20 via-rose-500/20 to-cyan-500/20 border border-amber-400/50 shadow-lg shadow-amber-500/10 backdrop-blur-md text-amber-300 font-extrabold text-xs sm:text-sm tracking-wider uppercase"
		>
			<span>🎉</span>
			<span>7th Anniversary Special</span>
			<span>✨</span>
		</div>

		<h1 class="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
			ปริศนาครบรอบ 7 ปี
		</h1>
	</div>

	<!-- Main Puzzle Card Container -->
	<div
		class="w-full bg-slate-900/90 backdrop-blur-xl border border-slate-800 rounded-3xl p-4 sm:p-8 shadow-2xl space-y-6"
	>
		<!-- Puzzle Diagram Hint -->
		<div class="flex justify-center w-full py-2">
			<svg
				viewBox="0 0 270 150"
				class="w-full max-w-xs sm:max-w-sm h-auto overflow-visible select-none drop-shadow-lg"
				aria-label="Puzzle Hint"
			>
				{#each [{ n: 1, x: 45, y: 75 }, { n: 2, x: 81, y: 111 }, { n: 3, x: 81, y: 39 }, { n: 4, x: 117, y: 75 }, { n: 5, x: 153, y: 111 }, { n: 6, x: 189, y: 75 }, { n: 7, x: 225, y: 111 }] as { n, x, y }}
					<g transform="translate({x}, {y})">
						<rect
							x="-25.45"
							y="-25.45"
							width="50.91"
							height="50.91"
							transform="rotate(45)"
							class="fill-gray-600"
						/>
						<text
							text-anchor="middle"
							dominant-baseline="central"
							class="fill-emerald-400 font-black text-base select-none font-mono"
						>
							{n}
						</text>
					</g>
				{/each}
			</svg>
		</div>

		<!-- Solved Banner / Answer Box Section -->
		{#if isSolved}
			<div class="flex flex-col items-center text-center space-y-4 py-4 animate-fade-in">
				<div
					class="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-400 shadow-lg shadow-emerald-500/20"
				>
					<CheckCircleIcon size="36" />
				</div>
				<div class="space-y-1">
					<h2 class="text-2xl font-black text-white">เก่งจริง! 🎉</h2>
				</div>

				<div class="flex flex-wrap items-center justify-center gap-3 pt-2 w-full max-w-md">
					{#if !alreadySubmitted}
						<button
							on:click={() => (openModal = true)}
							class="btn btn-outline border-emerald-500/50 text-emerald-300 hover:bg-emerald-500/20 gap-2 font-bold"
						>
							<StarIcon size="18" />
							บันทึกชื่อลงตารางอันดับ
						</button>
					{/if}
				</div>
			</div>
		{:else}
			<!-- Single Answer Submission Box -->
			<div class="space-y-4">
				<div class="flex justify-center w-full">
					<form
						on:submit|preventDefault={checkAnswer}
						class="input-group w-full max-w-md"
						class:wiggle={isWiggle}
					>
						<span
							class="bg-slate-950 border border-slate-800 text-amber-400 px-2.5 sm:px-4 shrink-0"
						>
							<KeyIcon size="18" />
						</span>
						<input
							id="seventh-answer"
							type="text"
							bind:value={answer}
							placeholder="พิมพ์คำตอบ..."
							class="input input-bordered min-w-0 flex-1 bg-slate-950 border-slate-800 text-white font-bold placeholder-slate-500 focus:border-amber-400 text-xs sm:text-base px-2.5 sm:px-4"
						/>
						{#if answer}
							<button
								type="button"
								class="-translate-x-8 w-0 my-auto z-10 text-slate-400 hover:text-white flex items-center justify-center cursor-pointer border-none bg-transparent p-0 shrink-0"
								on:click={() => (answer = '')}
								aria-label="ล้างคำตอบ"
							>
								<XCircleIcon size="18" />
							</button>
						{/if}
						<button
							type="submit"
							class="btn btn-warning font-bold text-slate-950 shadow-md shrink-0 px-3 sm:px-6 text-xs sm:text-sm"
							class:loading={isSubmitting}
						>
							ส่งคำตอบ
						</button>
					</form>
				</div>
			</div>
		{/if}

		<!-- Previous Answer Attempts Logs -->
		{#if logs.length > 0 && !isSolved}
			<div class="border-t border-slate-800/80 pt-4 space-y-2">
				<h3 class="text-xs font-bold text-slate-400 uppercase tracking-wider">คำตอบที่ตอบไปแล้ว</h3>
				<div class="flex flex-wrap gap-2">
					{#each logs as log}
						<span
							class="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs font-medium line-through"
						>
							{log}
						</span>
					{/each}
				</div>
			</div>
		{/if}
	</div>

	<!-- Leaderboard Section (Revealed once solved) -->
	{#if isSolved}
		<div class="w-full space-y-4 animate-fade-in">
			<div class="flex items-center justify-between border-b border-slate-800 pb-3">
				<div class="flex items-center gap-2.5">
					<div
						class="w-8 h-8 rounded-xl bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-400 shadow-md"
					>
						<AwardIcon size="18" />
					</div>
					<div>
						<h2 class="text-lg sm:text-xl font-black text-white">ตารางอันดับ</h2>
					</div>
				</div>

				<button
					on:click={fetchLeaderboard}
					class="btn btn-ghost btn-sm gap-1.5 text-slate-400 hover:text-white"
					class:loading={isLoadingLeaderboard}
					title="รีเฟรชข้อมูล"
				>
					<RefreshCwIcon size="13" />
					<span class="text-xs">รีเฟรช</span>
				</button>
			</div>

			<div
				class="bg-slate-900/90 backdrop-blur-xl border border-slate-800 rounded-3xl shadow-2xl overflow-hidden"
			>
				{#if isLoadingLeaderboard && sortedData.length === 0}
					<div class="flex items-center justify-center py-12 opacity-50">
						<span class="loading loading-dots loading-lg text-amber-400" />
					</div>
				{:else if sortedData.length === 0}
					<div
						class="flex flex-col items-center justify-center py-12 px-4 text-center space-y-2 opacity-60"
					>
						<span class="text-4xl">🏆</span>
						<p class="text-sm font-bold text-white">ยังไม่มีผู้บันทึกคะแนน</p>
						<p class="text-xs text-slate-400">
							กดปุ่ม "บันทึกชื่อลงตารางอันดับ" ด้านบนเพื่อเป็นคนแรก!
						</p>
					</div>
				{:else}
					<div class="overflow-x-auto">
						<table class="table w-full">
							<thead>
								<tr
									class="border-b border-slate-800 bg-slate-950/60 text-xs font-bold text-slate-400 uppercase tracking-wider"
								>
									<th class="py-3 px-4 sm:px-6 text-center w-16">อันดับ</th>
									<th class="py-3 px-4 text-left">ชื่อผู้เล่น</th>
									<th class="py-3 px-4 sm:px-6 text-right">เวลาที่พิชิต</th>
								</tr>
							</thead>
							<tbody class="divide-y divide-slate-800/60">
								{#each sortedData as entry, idx}
									<tr
										class="hover:bg-slate-800/40 transition-colors {idx < 3
											? 'bg-amber-500/5'
											: ''}"
									>
										<td class="py-3.5 px-4 sm:px-6 text-center font-black text-base">
											{getRankEmoji(idx + 1)}
										</td>
										<td class="py-3.5 px-4">
											<div class="flex items-center gap-2.5">
												<div
													class="w-7 h-7 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300"
												>
													<UserIcon size="12" />
												</div>
												<span class="font-bold text-sm text-white">
													{entry.name}
												</span>
											</div>
										</td>
										<td class="py-3.5 px-4 sm:px-6 text-right">
											<div
												class="inline-flex items-center gap-1.5 text-xs text-slate-400 font-mono"
											>
												<ClockIcon size="11" />
												<span>{formatDateTime(entry.created_at)}</span>
											</div>
										</td>
									</tr>
								{/each}
							</tbody>
						</table>
					</div>
				{/if}
			</div>
		</div>
	{/if}
</div>

<!-- Submit to Leaderboard Modal -->
<input type="checkbox" id="seventh-modal" class="modal-toggle" checked={openModal} />
<div class="modal modal-bottom sm:modal-middle" class:modal-open={openModal}>
	<div
		class="modal-box bg-slate-900 border border-slate-800 shadow-2xl rounded-3xl p-6 relative text-slate-100"
	>
		<button
			class="btn btn-sm btn-circle btn-ghost absolute right-4 top-4 text-slate-400 hover:text-white"
			on:click={() => (openModal = false)}
		>
			✕
		</button>

		<div class="flex items-center gap-3 mb-3">
			<div
				class="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 text-xl"
			>
				🎉
			</div>
			<div>
				<h3 class="text-lg sm:text-xl font-black text-white">ถูกต้องนะครับ!</h3>
				<p class="text-xs text-slate-400">บันทึกชื่อลงตารางเกียรติยศครบรอบ 7 ปี</p>
			</div>
		</div>

		<div class="divider my-2 border-slate-800" />

		{#if submissionSuccess}
			<div
				class="flex flex-col items-center justify-center py-6 space-y-2 text-emerald-400 animate-fade-in"
			>
				<CheckCircleIcon size="40" />
				<p class="font-bold text-sm">บันทึกชื่อสำเร็จแล้ว!</p>
			</div>
		{:else}
			<div class="space-y-4 my-4">
				<div class="space-y-1.5">
					<label for="player-name" class="text-xs font-bold text-slate-300"> ชื่อ </label>
					<input
						id="player-name"
						type="text"
						bind:value={$username}
						placeholder="พิมพ์ชื่อเพื่อแสดงบนตารางอันดับ..."
						class="input input-bordered w-full bg-slate-950 border-slate-700 text-white font-bold focus:border-amber-400"
					/>
				</div>

				{#if errorMessage}
					<div
						class="p-2.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs font-bold"
					>
						⚠️ {errorMessage}
					</div>
				{/if}
			</div>

			<div class="flex items-center justify-end gap-3 pt-2">
				<button
					type="button"
					class="btn btn-ghost text-slate-400 hover:text-white"
					on:click={() => (openModal = false)}
				>
					ปิด
				</button>
				<button
					type="button"
					on:click={addToLeaderboard}
					class="btn btn-success font-bold text-slate-950 px-6"
					class:loading={isSubmitting}
				>
					บันทึก
				</button>
			</div>
		{/if}
	</div>
</div>

<style>
	@keyframes pos-x-wiggle {
		0% {
			transform: translateX(0px);
		}
		20% {
			transform: translateX(8px);
		}
		40% {
			transform: translateX(-8px);
		}
		60% {
			transform: translateX(6px);
		}
		80% {
			transform: translateX(-6px);
		}
		100% {
			transform: translateX(0px);
		}
	}

	.wiggle {
		animation: pos-x-wiggle 0.4s ease-in-out;
	}
</style>
