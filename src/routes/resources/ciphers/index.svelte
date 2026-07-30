<script lang="ts">
	import {
		KeyIcon,
		RadioIcon,
		GridIcon,
		SlidersIcon,
		RefreshCwIcon,
		HashIcon,
		CpuIcon,
		ColumnsIcon,
		FlagIcon,
		EyeIcon,
		MicIcon
	} from 'svelte-feather-icons';

	const ciphersList = [
		{
			id: 'pigpen',
			name: 'Pigpen Cipher',
			path: '/resources/ciphers/pigpen',
			difficulty: 'Easy',
			badgeColor: 'text-emerald-400',
			icon: GridIcon
		},
		{
			id: 'morse',
			name: 'Morse Code',
			path: '/resources/ciphers/morse',
			difficulty: 'Easy',
			badgeColor: 'text-emerald-400',
			icon: RadioIcon
		},
		{
			id: 'caesar',
			name: 'Caesar Cipher',
			path: '/resources/ciphers/caesar',
			difficulty: 'Easy - Medium',
			badgeColor: 'text-cyan-400',
			icon: SlidersIcon
		},
		{
			id: 'atbash',
			name: 'Atbash Cipher',
			path: '/resources/ciphers/atbash',
			difficulty: 'Easy - Medium',
			badgeColor: 'text-cyan-400',
			icon: RefreshCwIcon
		},
		{
			id: 'vigenere',
			name: 'Vigenère Cipher',
			path: '/resources/ciphers/vigenere',
			difficulty: 'Medium - Advanced',
			badgeColor: 'text-amber-400',
			icon: KeyIcon
		},
		{
			id: 'semaphore',
			name: 'Flag Semaphore',
			path: '/resources/ciphers/semaphore',
			difficulty: 'Easy - Medium',
			badgeColor: 'text-cyan-400',
			icon: FlagIcon
		},
		{
			id: 'braille',
			name: 'Braille Code (Eng & Thai)',
			path: '/resources/ciphers/braille',
			difficulty: 'Easy - Medium',
			badgeColor: 'text-cyan-400',
			icon: EyeIcon
		},
		{
			id: 'nato',
			name: 'NATO Alphabet',
			path: '/resources/ciphers/nato',
			difficulty: 'Easy',
			badgeColor: 'text-emerald-400',
			icon: MicIcon
		},
		{
			id: 'a1z26',
			name: 'A1Z26 Cipher',
			path: '/resources/ciphers/a1z26',
			difficulty: 'Easy',
			badgeColor: 'text-emerald-400',
			icon: HashIcon
		},
		{
			id: 'polybius',
			name: 'Polybius Square',
			path: '/resources/ciphers/polybius',
			difficulty: 'Easy',
			badgeColor: 'text-emerald-400',
			icon: GridIcon
		},
		{
			id: 'railfence',
			name: 'Rail Fence Cipher',
			path: '/resources/ciphers/railfence',
			difficulty: 'Easy - Medium',
			badgeColor: 'text-cyan-400',
			icon: ColumnsIcon
		},
		{
			id: 'binary',
			name: 'Binary Code (0101)',
			path: '/resources/ciphers/binary',
			difficulty: 'Easy',
			badgeColor: 'text-emerald-400',
			icon: CpuIcon
		}
	];
</script>

<svelte:head>
	<title>Code Breaker | คลังรหัสลับ (Cipher Library) 🔐</title>
	<meta
		name="description"
		content="รวบรวมรหัสลับรูปแบบต่าง ๆ (Pigpen, Morse, Caesar, Atbash, Vigenère, Semaphore, Braille, NATO ฯลฯ)"
	/>
</svelte:head>

<div class="flex flex-col gap-8 w-full max-w-5xl mx-auto px-4 py-8 select-none">
	<!-- Navigation -->
	<div class="flex items-center justify-between">
		<a href="/resources" class="btn btn-ghost btn-xs gap-1.5 font-bold text-slate-400 hover:text-white">
			← กลับไปหน้าแหล่งทรัพยากร
		</a>
	</div>

	<!-- Header -->
	<header class="text-center max-w-2xl mx-auto space-y-2">
		<h1 class="text-3xl lg:text-4xl font-extrabold tracking-tight">คลังรหัสลับ (Cipher Library) 🔐</h1>
		<p class="text-slate-400 text-sm lg:text-base">
			ศึกษาหลักการเข้ารหัส/ถอดรหัส ตารางอ้างอิง และทดลองใช้เครื่องมือแปลงรหัสสดสำหรับรหัสลับยอดนิยม
		</p>
	</header>

	<!-- Ciphers Grid -->
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
		{#each ciphersList as item}
			<a
				href={item.path}
				class="card bg-slate-900/60 hover:bg-slate-900/90 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group border border-slate-800 shadow-md block rounded-2xl overflow-hidden p-5"
			>
				<div class="flex items-center justify-between mb-3">
					<div
						class="w-12 h-12 rounded-2xl bg-slate-800/80 shadow-inner flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-slate-700/60"
					>
						<svelte:component this={item.icon} size="24" class={item.badgeColor} />
					</div>
					<span class="badge badge-sm badge-outline border-slate-700 text-slate-400 font-bold">
						{item.difficulty}
					</span>
				</div>
				<h2 class="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">
					{item.name}
				</h2>
			</a>
		{/each}
	</div>
</div>
