<script lang="ts">
	import { VideoIcon, GridIcon, ArrowLeftIcon } from 'svelte-feather-icons';

	const subpages = [
		{
			name: 'Tutorials (คู่มือ & คลิปสอนวิธีเล่น)',
			path: '/resources/logicpuzzle/tutorials',
			description: 'วิดีโอและบทเรียนสอนการเล่น Logic Puzzles (Nikoli, Nonogram, Slitherlink ฯลฯ)',
			icon: VideoIcon,
			color: 'text-amber-400'
		},
		{
			name: 'Puzzles (คลังโจทย์และแบบฝึกหัด)',
			path: '/resources/logicpuzzle/puzzles',
			description: 'รวบรวมโจทย์พัซเซิลตรรกะและแบบฝึกหัดท้าทายสมอง',
			icon: GridIcon,
			color: 'text-purple-400'
		}
	];
</script>

<svelte:head>
	<title>Code Breaker | Logic Puzzles (ลอจิกพัซเซิล) 🧩</title>
	<meta name="description" content="ศูนย์รวมความรู้ Logic Puzzles คอร์ดสอนวิธีเล่น Nonogram, Sudoku, Slitherlink และคลังโจทย์" />
</svelte:head>

<div class="flex flex-col gap-8 w-full max-w-5xl mx-auto px-4 py-8 select-none">
	<!-- Navigation -->
	<div class="flex items-center justify-between">
		<a href="/resources" class="btn btn-ghost btn-xs gap-1.5 font-bold">
			← กลับไปหน้าแหล่งทรัพยากร
		</a>
	</div>

	<!-- Header -->
	<header class="text-center max-w-2xl mx-auto space-y-2">
		<h1 class="text-3xl lg:text-4xl font-extrabold tracking-tight">Logic Puzzles (ลอจิกพัซเซิล) 🧩</h1>
		<p class="text-slate-400 text-sm lg:text-base">
			เรียนรู้วิธีการแก้ปริศนาตรรกะ ลอจิกพัซเซิลสไตล์ญี่ปุ่น (Nikoli) และฝึกสมองกับโจทย์หลากหลายรูปแบบ
		</p>
	</header>

	<!-- Subpages Grid -->
	<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
		{#each subpages as item}
			<a
				href={item.path}
				class="card bg-slate-900/80 hover:bg-slate-900 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group border border-slate-800 shadow-md block h-full rounded-3xl overflow-hidden p-6"
			>
				<div class="flex flex-col space-y-4">
					<div
						class="w-14 h-14 rounded-2xl bg-slate-800/80 shadow-inner flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-slate-700/60"
					>
						<svelte:component this={item.icon} size="28" class={item.color} />
					</div>
					<div class="space-y-1">
						<h2 class="text-xl font-bold text-white group-hover:text-primary transition-colors">
							{item.name}
						</h2>
						<p class="text-xs sm:text-sm text-slate-400 font-light leading-relaxed">{item.description}</p>
					</div>
					<div class="pt-2 text-xs font-bold text-primary flex items-center gap-1 group-hover:translate-x-1 transition-transform">
						<span>เข้าสู่หน้า {item.name.split(' ')[0]}</span>
						<span>→</span>
					</div>
				</div>
			</a>
		{/each}
	</div>
</div>
