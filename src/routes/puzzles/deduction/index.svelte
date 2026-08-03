<script lang="ts">
	import { ArrowLeftIcon, ZapIcon, AwardIcon } from 'svelte-feather-icons';
</script>

<svelte:head>
	<title>Code Breaker | Deduction Games 🧩</title>
	<meta
		name="description"
		content="เกมนิรนัยทายกฎลับ"
	/>
</svelte:head>

<div class="flex flex-col gap-10 w-full max-w-4xl mx-auto px-4 py-8 select-none">
	<!-- Navigation -->
	<div class="flex items-center justify-between">
		<a href="/puzzles" class="btn btn-ghost btn-xs gap-1.5 font-bold text-slate-400 hover:text-white">
			<ArrowLeftIcon size="14" />
			<span>กลับไปหน้า Puzzles</span>
		</a>
	</div>

	<!-- Header -->
	<header class="text-center max-w-2xl mx-auto space-y-3">
		<div class="w-14 h-14 rounded-2xl bg-purple-500/10 text-purple-400 flex items-center justify-center border border-purple-500/20 mx-auto shadow-lg shadow-purple-500/5">
			<ZapIcon size="32" />
		</div>
		<h1 class="text-3xl lg:text-5xl font-black tracking-tight bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
			Deduction Games
		</h1>
		<p class="text-slate-400 text-sm lg:text-base leading-relaxed">
			สังเกตรูปแบบเพื่อสืบหากฎลับ
		</p>
	</header>

	<!-- Game Selection Cards -->
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
		<!-- Petals Around the Rose -->
		<a
			href="/puzzles/deduction/petalsaroundtherose"
			class="bg-slate-900 border border-slate-800 hover:border-rose-500/50 rounded-3xl p-6 shadow-xl flex flex-col justify-between space-y-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl group"
		>
			<div class="space-y-4">
				<div class="w-12 h-12 rounded-2xl bg-rose-500/10 text-rose-400 flex items-center justify-center border border-rose-500/20 shadow-md">
					<AwardIcon size="24" />
				</div>
				<div class="space-y-1">
					<span class="badge bg-rose-500/20 text-rose-300 border border-rose-500/40 text-xs px-2.5 py-0.5 font-bold rounded-lg">
						GAME 1
					</span>
					<h2 class="text-xl font-black text-white group-hover:text-rose-300 transition-colors">
						กลีบรอบกุหลาบ
					</h2>
					<p class="text-xs text-slate-400 font-light leading-relaxed">
						ทายตัวเลขจากหน้าลูกเต๋า
					</p>
				</div>
			</div>
			<div class="btn btn-rose btn-sm bg-rose-500 hover:bg-rose-400 text-white font-bold rounded-xl border-none w-full shadow-lg">
				เล่นเลย →
			</div>
		</a>

		<!-- หมู ไก่ ปลา กุ้ง -->
		<a
			href="/puzzles/deduction/moogaiplakung"
			class="bg-slate-900 border border-slate-800 hover:border-indigo-500/50 rounded-3xl p-6 shadow-xl flex flex-col justify-between space-y-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl group"
		>
			<div class="space-y-4">
				<div class="w-12 h-12 rounded-2xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center border border-indigo-500/20 shadow-md">
					<ZapIcon size="24" />
				</div>
				<div class="space-y-1">
					<span class="badge bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 text-xs px-2.5 py-0.5 font-bold rounded-lg">
						GAME 2
					</span>
					<h2 class="text-xl font-black text-white group-hover:text-indigo-300 transition-colors">
						หมู ไก่ ปลา กุ้ง
					</h2>
					<p class="text-xs text-slate-400 font-light leading-relaxed">
						ทายราคาสินค้า
					</p>
				</div>
			</div>
			<div class="btn btn-indigo btn-sm bg-indigo-500 hover:bg-indigo-400 text-white font-bold rounded-xl border-none w-full shadow-lg">
				เล่นเลย →
			</div>
		</a>

		<!-- Around the World -->
		<a
			href="/puzzles/deduction/aroundtheworld"
			class="bg-slate-900 border border-slate-800 hover:border-cyan-500/50 rounded-3xl p-6 shadow-xl flex flex-col justify-between space-y-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl group"
		>
			<div class="space-y-4">
				<div class="w-12 h-12 rounded-2xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center border border-cyan-500/20 shadow-md">
					<ZapIcon size="24" />
				</div>
				<div class="space-y-1">
					<span class="badge bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 text-xs px-2.5 py-0.5 font-bold rounded-lg">
						GAME 3
					</span>
					<h2 class="text-xl font-black text-white group-hover:text-cyan-300 transition-colors">
						Around the World
					</h2>
					<p class="text-xs text-slate-400 font-light leading-relaxed">
						เดินทางรอบโลก
					</p>
				</div>
			</div>
			<div class="btn btn-cyan btn-sm bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-xl border-none w-full shadow-lg">
				เล่นเลย →
			</div>
		</a>

		<!-- Back to the Future -->
		<a
			href="/puzzles/deduction/backtothefuture"
			class="bg-slate-900 border border-slate-800 hover:border-amber-500/50 rounded-3xl p-6 shadow-xl flex flex-col justify-between space-y-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl group"
		>
			<div class="space-y-4">
				<div class="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-400 flex items-center justify-center border border-amber-500/20 shadow-md">
					<ZapIcon size="24" />
				</div>
				<div class="space-y-1">
					<span class="badge bg-amber-500/20 text-amber-300 border border-amber-500/40 text-xs px-2.5 py-0.5 font-bold rounded-lg">
						GAME 4
					</span>
					<h2 class="text-xl font-black text-white group-hover:text-amber-300 transition-colors">
						Back to the Future
					</h2>
					<p class="text-xs text-slate-400 font-light leading-relaxed">
						นิ้วนี้เลขอะไร
					</p>
				</div>
			</div>
			<div class="btn btn-amber btn-sm bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl border-none w-full shadow-lg">
				เล่นเลย →
			</div>
		</a>
	</div>
</div>
