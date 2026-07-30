<script lang="ts">
	import { RadioIcon, KeyIcon, BookOpenIcon, GridIcon } from 'svelte-feather-icons';

	const podcastResources = [
		{
			name: 'Codebreaker Podcast',
			path: '/resources/podcast',
			description: 'พอดแคสต์เกมไขปริศนา Escape Room และเรื่องราวน่าสนใจ',
			icon: RadioIcon,
			color: 'text-amber-400'
		}
	];

	const logicAndCipherResources = [
		{
			name: 'Cipher Library',
			path: '/resources/ciphers',
			description: 'คลังรหัสลับพื้นฐาน (Pigpen, Morse, Caesar, Atbash, Vigenère, A1Z26, Polybius, Rail Fence, Binary ฯลฯ)',
			icon: KeyIcon,
			color: 'text-cyan-400'
		},
		{
			name: 'Logic Puzzles (ลอจิกพัซเซิล)',
			path: '/resources/logicpuzzle',
			description: 'รวมคลิปสอนวิธีเล่น และคลังโจทย์พัซเซิลใช้ตรรกะ (Nonogram, Sudoku, Slitherlink ฯลฯ)',
			icon: GridIcon,
			color: 'text-purple-400'
		}
	];

	const referenceResources = [
		{
			name: 'Spelling Dictionary',
			path: '/resources/spellingdictionary',
			description: 'พจนานุกรมคำศัพท์ภาษาไทยที่มักสะกดผิดบ่อย',
			icon: BookOpenIcon,
			color: 'text-emerald-400'
		}
	];
</script>

<svelte:head>
	<title>Code Breaker | แหล่งความรู้ & ทรัพยากร 📚</title>
	<meta name="description" content="ศูนย์รวมความรู้สำหรับนักไขปริศนา พอดแคสต์ คลังรหัสลับ ลอจิกพัซเซิล และพจนานุกรมคำสะกดภาษาไทย" />
</svelte:head>

<div class="flex flex-col gap-8 w-full max-w-5xl mx-auto px-4 py-8 select-none">
	<div class="text-center max-w-2xl mx-auto space-y-2">
		<h1 class="text-3xl lg:text-4xl font-extrabold tracking-tight">แหล่งความรู้ & ทรัพยากร</h1>
		<p class="text-slate-400 text-sm lg:text-base">
			ศูนย์รวมความรู้ พอดแคสต์ คลังรหัสลับ ลอจิกพัซเซิล และบทความสำหรับนักไขปริศนา
		</p>
	</div>

	<!-- Section 1: Podcasts -->
	<section class="space-y-4">
		<div class="flex items-center gap-2 border-b border-base-300 pb-2">
			<h2 class="text-xl font-extrabold text-amber-400">สื่อและพอดแคสต์ (Podcasts & Media)</h2>
		</div>
		<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
			{#each podcastResources as tool}
				<a
					href={tool.path}
					class="card bg-slate-900/60 hover:bg-slate-900/90 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group border border-slate-800 shadow-md block h-full rounded-2xl overflow-hidden"
				>
					<div class="card-body flex flex-row items-center text-left p-4 sm:p-5 gap-4">
						<div
							class="w-12 h-12 sm:w-14 sm:h-14 shrink-0 rounded-2xl bg-slate-800/80 shadow-inner flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-slate-700/60"
						>
							<svelte:component this={tool.icon} size="24" class={tool.color} />
						</div>
						<div class="flex flex-col gap-0.5 flex-1 min-w-0">
							<h3 class="card-title text-base sm:text-lg font-bold text-white group-hover:text-amber-400 transition-colors line-clamp-1">
								{tool.name}
							</h3>
							<p class="text-xs sm:text-sm text-slate-400 font-light line-clamp-2">{tool.description}</p>
						</div>
					</div>
				</a>
			{/each}
		</div>
	</section>

	<!-- Section 2: Ciphers & Logic Puzzles -->
	<section class="space-y-4">
		<div class="flex items-center gap-2 border-b border-base-300 pb-2">
			<h2 class="text-xl font-extrabold text-cyan-400">คลังรหัสลับ & ลอจิกพัซเซิล (Ciphers & Logic Puzzles)</h2>
		</div>
		<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
			{#each logicAndCipherResources as tool}
				<a
					href={tool.path}
					class="card bg-slate-900/60 hover:bg-slate-900/90 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group border border-slate-800 shadow-md block h-full rounded-2xl overflow-hidden"
				>
					<div class="card-body flex flex-row items-center text-left p-4 sm:p-5 gap-4">
						<div
							class="w-12 h-12 sm:w-14 sm:h-14 shrink-0 rounded-2xl bg-slate-800/80 shadow-inner flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-slate-700/60"
						>
							<svelte:component this={tool.icon} size="24" class={tool.color} />
						</div>
						<div class="flex flex-col gap-0.5 flex-1 min-w-0">
							<h3 class="card-title text-base sm:text-lg font-bold text-white group-hover:text-cyan-400 transition-colors line-clamp-1">
								{tool.name}
							</h3>
							<p class="text-xs sm:text-sm text-slate-400 font-light line-clamp-2">{tool.description}</p>
						</div>
					</div>
				</a>
			{/each}
		</div>
	</section>

	<!-- Section 3: Dictionaries -->
	<section class="space-y-4">
		<div class="flex items-center gap-2 border-b border-base-300 pb-2">
			<h2 class="text-xl font-extrabold text-emerald-400">พจนานุกรม & อ้างอิง (Dictionaries & Reference)</h2>
		</div>
		<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
			{#each referenceResources as tool}
				<a
					href={tool.path}
					class="card bg-slate-900/60 hover:bg-slate-900/90 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group border border-slate-800 shadow-md block h-full rounded-2xl overflow-hidden"
				>
					<div class="card-body flex flex-row items-center text-left p-4 sm:p-5 gap-4">
						<div
							class="w-12 h-12 sm:w-14 sm:h-14 shrink-0 rounded-2xl bg-slate-800/80 shadow-inner flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-slate-700/60"
						>
							<svelte:component this={tool.icon} size="24" class={tool.color} />
						</div>
						<div class="flex flex-col gap-0.5 flex-1 min-w-0">
							<h3 class="card-title text-base sm:text-lg font-bold text-white group-hover:text-emerald-400 transition-colors line-clamp-1">
								{tool.name}
							</h3>
							<p class="text-xs sm:text-sm text-slate-400 font-light line-clamp-2">{tool.description}</p>
						</div>
					</div>
				</a>
			{/each}
		</div>
	</section>
</div>
