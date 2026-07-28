<script lang="ts">
	import logo from '$lib/images/logo.png';
	import {
		HomeIcon,
		CalendarIcon,
		PlayCircleIcon,
		InfoIcon,
		ChevronDownIcon,
		ChevronUpIcon,
		SettingsIcon,
		ShoppingCartIcon,
		ToolIcon,
		UserIcon,
		ArrowLeftIcon
	} from 'svelte-feather-icons';
	import { username } from '$lib/store';
	import { page } from '$app/stores';

	const icons = [HomeIcon, CalendarIcon, PlayCircleIcon, ToolIcon, ShoppingCartIcon, InfoIcon];
	const menus = ['หน้าแรก', 'กิจกรรม', 'ปริศนา', 'เครื่องมือ', 'ร้านค้า', 'เกี่ยวกับ'];
	const links = ['', 'events', 'puzzles', 'tools', 'shop', 'about'];

	let hideBar = false;
	let openModal = false;

	$: currentPath = $page.url.pathname;
	$: isActive = (path: string) => {
		if (path === '' && currentPath === '/') return true;
		if (path !== '' && currentPath.startsWith('/' + path)) return true;
		return false;
	};

	$: pageTitle = (() => {
		const p = currentPath;
		if (p === '/') return 'หน้าแรก';
		if (p.startsWith('/puzzles/weekly')) return 'ปริศนารายสัปดาห์';
		if (p.startsWith('/puzzles/spellingbee')) return 'สะกดศัพท์';
		if (p.startsWith('/puzzles/blanks')) return 'ซ่อนอักษร';
		if (p.startsWith('/puzzles/spellingquiz')) return 'ปริศนาสะกดศัพท์';
		if (p.startsWith('/puzzles/missingvowels')) return 'Missing Vowels';
		if (p.startsWith('/puzzles/wordsearch')) return 'Word Search';
		if (p.startsWith('/puzzles/crossword')) return 'Crossword';
		if (p.startsWith('/puzzles/rebus')) return 'Rebus';
		if (p.startsWith('/puzzles/cryptogram')) return 'Cryptogram';
		if (p.startsWith('/puzzles/alphabet')) return 'Alphabet';
		if (p.startsWith('/puzzles/puzzlehunt')) return 'Puzzle Hunt';
		if (p.startsWith('/puzzles')) return 'ปริศนา';
		if (p.startsWith('/events')) return 'กิจกรรม';
		if (p.startsWith('/tools')) return 'เครื่องมือ';
		if (p.startsWith('/shop')) return 'ร้านค้า';
		if (p.startsWith('/about')) return 'เกี่ยวกับ';
		if (p.startsWith('/profile')) return 'โปรไฟล์';
		if (p.startsWith('/login')) return 'เข้าสู่ระบบ';
		if (p.startsWith('/register')) return 'สมัครสมาชิก';
		return 'Code Breaker';
	})();
</script>

<!-- Mobile Top Header Bar displaying current Page Title -->
<div class="fixed top-0 left-0 right-0 lg:hidden flex items-center justify-between px-4 py-2.5 bg-slate-950/95 backdrop-blur-xl border-b border-slate-800/80 z-[9999] shadow-md">
	<div class="flex items-center gap-2">
		{#if currentPath !== '/'}
			<a href="/" class="p-1.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 transition-colors">
				<ArrowLeftIcon size="18" />
			</a>
		{:else}
			<img class="h-7 w-7 object-contain" src={logo} alt="logo" />
		{/if}
		<span class="text-base font-extrabold tracking-tight text-white">{pageTitle}</span>
	</div>

	<button
		class="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 transition-colors"
		on:click={() => (openModal = true)}
		title="ตั้งค่าโปรไฟล์"
	>
		<SettingsIcon size="18" />
	</button>
</div>

<!-- Desktop Navbar -->
<nav
	class="sticky top-0 w-full hidden lg:flex items-center justify-between px-8 py-3 bg-slate-950/90 backdrop-blur-xl border-b border-slate-800/80 z-[9999] shadow-lg"
>
	<div class="flex items-center gap-8">
		<a href="/" class="flex items-center gap-2.5 hover:scale-105 transition-transform">
			<img class="h-9 w-9 object-contain" src={logo} alt="logo" />
			<span class="text-xl font-black tracking-tighter text-white">CODEBREAKER</span>
		</a>

		<div class="flex items-center gap-1.5">
			{#each menus as menu, idx}
				<a
					href="/{links[idx]}"
					class="px-4 py-2 rounded-xl text-sm font-bold transition-all
               {isActive(links[idx]) ? 'btn-active btn-success text-white shadow-md' : 'text-slate-300 hover:text-white hover:bg-slate-900/80'}"
				>
					{menu}
				</a>
			{/each}
		</div>
	</div>

	<div class="flex items-center gap-3">
		{#if $username && $username !== 'code breaker'}
			<a
				href="/profile"
				class="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white transition-colors border border-slate-800"
			>
				<UserIcon size="16" class="text-cyan-400" />
				<span class="text-sm font-bold">{$username}</span>
			</a>
		{:else}
			<a href="/login" class="px-4 py-2 rounded-xl text-sm font-bold text-slate-300 hover:text-white hover:bg-slate-900 transition-colors">เข้าสู่ระบบ</a>
			<a href="/register" class="px-4 py-2 rounded-xl text-sm font-black bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/30 transition-all"
				>สมัครสมาชิก</a
			>
		{/if}

		<button
			class="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-cyan-500/40 transition-all"
			on:click={() => (openModal = true)}
			title="ตั้งค่าโปรไฟล์"
		>
			<SettingsIcon size="18" />
		</button>
	</div>
</nav>

<!-- Mobile Bottom Nav -->
<nav
	class="fixed bottom-0 left-0 right-0 lg:hidden bg-slate-950/95 backdrop-blur-xl border-t border-slate-800/80 px-2 py-2.5 z-[9999] shadow-2xl transition-transform duration-300"
	class:translate-y-full={hideBar}
>
	<div class="flex items-center justify-around max-w-md mx-auto">
		{#each menus as menu, idx}
			<a
				href="/{links[idx]}"
				class="flex flex-col items-center gap-1 min-w-[60px] transition-all
            {isActive(links[idx]) ? 'text-cyan-400 scale-105 font-bold' : 'text-slate-400 hover:text-white'}"
			>
				<div class="relative">
					<svelte:component this={icons[idx]} size="20" />
					{#if isActive(links[idx])}
						<div class="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-cyan-400 rounded-full" />
					{/if}
				</div>
				<span class="text-[10px] font-bold tracking-tight">{menu}</span>
			</a>
		{/each}
	</div>

	<!-- Toggle Tab -->
	<button
		class="absolute top-0 right-4 -translate-y-full bg-slate-950 border-t border-x border-slate-800/80 px-3 py-1 rounded-t-xl text-cyan-400 shadow-md"
		on:click={() => (hideBar = !hideBar)}
	>
		{#if hideBar}
			<ChevronUpIcon size="16" />
		{:else}
			<ChevronDownIcon size="16" />
		{/if}
	</button>
</nav>

<!-- Settings Modal -->
{#if openModal}
	<div class="fixed inset-0 bg-slate-950/80 backdrop-blur-md z-[10000] flex items-center justify-center p-4">
		<div class="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl flex flex-col gap-5">
			<h2 class="text-2xl font-black text-white">ตั้งค่าโปรไฟล์</h2>
			<div class="flex flex-col gap-4">
				<div class="flex flex-col gap-1.5">
					<label class="text-xs font-bold text-slate-400">ชื่อที่ใช้แสดง</label>
					<input
						class="w-full px-4 py-3 rounded-2xl bg-black border border-slate-800 text-white font-bold focus:outline-none focus:border-cyan-400 text-sm"
						type="text"
						bind:value={$username}
						placeholder="ชื่อของคุณ"
					/>
				</div>
				<button
					class="w-full py-3.5 rounded-2xl font-black bg-blue-600 hover:bg-blue-500 text-white shadow-xl shadow-blue-600/30 transition-all text-base mt-2"
					on:click={() => (openModal = false)}>บันทึก</button
				>
			</div>
		</div>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div class="fixed inset-0 -z-10" on:click={() => (openModal = false)} />
	</div>
{/if}

<style>
	:global(body) {
		padding-bottom: 5rem;
		padding-top: 3.5rem;
	}
	@media (min-width: 1024px) {
		:global(body) {
			padding-bottom: 0;
			padding-top: 0;
		}
	}
</style>
