<script lang="ts">
	import {
		KeyIcon,
		RadioIcon,
		GridIcon,
		SlidersIcon,
		RefreshCwIcon,
		HashIcon,
		CpuIcon,
		LayersIcon,
		ColumnsIcon,
		CodeIcon
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
		},
		{
			id: 'bacon',
			name: 'Baconian Cipher',
			path: '/resources/ciphers/bacon',
			difficulty: 'Easy - Medium',
			badgeColor: 'text-cyan-400',
			icon: CodeIcon
		}
	];
</script>

<svelte:head>
	<title>Code Breaker | คลังรหัสลับ (Cipher Library) 🔐</title>
	<meta name="description" content="รวมคู่มือรหัสลับพื้นฐาน Pigpen, Morse, Caesar, Atbash, Vigenere, A1Z26, Polybius, Rail Fence, Binary, Baconian" />
</svelte:head>

<div class="flex flex-col gap-8 w-full max-w-5xl mx-auto px-4 py-8 select-none">
	<!-- Navigation -->
	<div class="flex items-center justify-between">
		<a href="/resources" class="btn btn-ghost btn-xs gap-1.5 font-bold">
			← กลับไปหน้าแหล่งทรัพยากร
		</a>
	</div>

	<!-- Header -->
	<div class="text-center max-w-2xl mx-auto space-y-2">
		<h1 class="text-3xl lg:text-4xl font-extrabold tracking-tight">คลังรหัสลับ (Cipher Library)</h1>
		<p class="text-slate-400 text-sm lg:text-base">
			รวมคู่มือการถอดรหัสลับพื้นฐาน เครื่องมือแปลงรหัส และแบบฝึกหัดทบทวน
		</p>
	</div>

	<!-- Cipher Cards Grid -->
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
		{#each ciphersList as item}
			<a
				href={item.path}
				class="card bg-slate-900/60 hover:bg-slate-900/90 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group border border-slate-800 shadow-md block h-full rounded-2xl overflow-hidden"
			>
				<div class="card-body flex flex-row items-center text-left p-4 sm:p-5 gap-4">
					<div
						class="w-12 h-12 sm:w-14 sm:h-14 shrink-0 rounded-2xl bg-slate-800/80 shadow-inner flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-slate-700/60"
					>
						<svelte:component this={item.icon} size="24" class={item.badgeColor} />
					</div>
					<div class="flex flex-col gap-0.5 flex-1 min-w-0">
						<h3 class="card-title text-base sm:text-lg font-bold text-white group-hover:text-primary transition-colors line-clamp-1">
							{item.name}
						</h3>
						<p class="text-xs text-slate-400 font-medium">{item.difficulty}</p>
					</div>
				</div>
			</a>
		{/each}
	</div>
</div>
