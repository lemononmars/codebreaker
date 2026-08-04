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
		BookOpenIcon,
		UserIcon,
		ArrowLeftIcon
	} from 'svelte-feather-icons';
	import { username } from '$lib/store';
	import { page } from '$app/stores';

	const icons = [HomeIcon, CalendarIcon, PlayCircleIcon, ToolIcon, BookOpenIcon, ShoppingCartIcon];
	const menus = ['หน้าแรก', 'กิจกรรม', 'ปริศนา', 'เครื่องมือ', 'ข้อมูล', 'ร้านค้า'];
	const links = ['', 'events', 'puzzles', 'tools', 'resources', 'shop'];

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
		if (p.startsWith('/puzzles/hiddenlink')) return 'Hidden Link';
		if (p.startsWith('/puzzles/cryptogram')) return 'Cryptogram';
		if (p.startsWith('/puzzles/alphabet')) return 'Alphabet';
		if (p.startsWith('/puzzles/puzzlehunt')) return 'Puzzle Hunt';
		if (p.startsWith('/puzzles')) return 'ปริศนา';
		if (p.startsWith('/events')) return 'กิจกรรม';
		if (p.startsWith('/tools')) return 'เครื่องมือ';
		if (p.startsWith('/resources/ciphers')) return 'คลังรหัสลับ (Ciphers)';
		if (p.startsWith('/resources/spellingdictionary')) return 'พจนานุกรมคำสะกด';
		if (p.startsWith('/resources/podcast')) return 'Codebreaker Podcast';
		if (p.startsWith('/resources')) return 'ข้อมูล';
		if (p.startsWith('/shop')) return 'ร้านค้า';
		if (p.startsWith('/about')) return 'เกี่ยวกับ';
		if (p.startsWith('/profile')) return 'โปรไฟล์';
		if (p.startsWith('/login')) return 'เข้าสู่ระบบ';
		if (p.startsWith('/register')) return 'สมัครสมาชิก';
		return 'Code Breaker';
	})();
</script>

<!-- Mobile header title bar -->
<div class="navbar bg-base-100/90 backdrop-blur border-b border-base-300 lg:hidden flex justify-between px-4 py-2">
	<div class="flex items-center gap-2">
		<a href="/" class="btn btn-ghost btn-sm btn-square p-0">
			<img src={logo} alt="Code Breaker" class="w-8 h-8 rounded-lg" />
		</a>
		<span class="font-bold text-lg text-primary">{pageTitle}</span>
	</div>
	<div class="flex items-center gap-2">
		{#if $username}
			<a href="/profile" class="btn btn-ghost btn-sm btn-circle">
				<UserIcon size="18" />
			</a>
		{:else}
			<a href="/login" class="btn btn-primary btn-sm rounded-lg font-bold">เข้าสู่ระบบ</a>
		{/if}
	</div>
</div>

<!-- Desktop & Main Navbar -->
<div class="hidden lg:flex w-full bg-base-100/80 backdrop-blur border-b border-base-300 px-8 py-3 justify-between items-center max-w-7xl mx-auto rounded-b-2xl shadow-xl">
	<div class="flex items-center gap-8">
		<a href="/" class="flex items-center gap-3 group">
			<img src={logo} alt="Code Breaker" class="w-10 h-10 rounded-xl group-hover:scale-105 transition duration-200" />
			<span class="font-extrabold text-xl text-primary tracking-tight">Code Breaker</span>
		</a>

		<nav class="flex items-center gap-1">
			{#each menus as menu, i}
				{@const Icon = icons[i]}
				<a
					href="/{links[i]}"
					class="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition duration-150 {isActive(links[i])
						? 'bg-primary text-primary-content shadow-md shadow-primary/20'
						: 'hover:bg-base-200 text-slate-300 hover:text-white'}"
				>
					<Icon size="16" />
					<span>{menu}</span>
				</a>
			{/each}
		</nav>
	</div>

	<div class="flex items-center gap-3">
		{#if $username}
			<a href="/profile" class="btn btn-ghost btn-md gap-2 rounded-xl border border-base-300">
				<UserIcon size="18" />
				<span class="font-bold">{$username}</span>
			</a>
		{:else}
			<a href="/login" class="btn btn-ghost btn-sm font-bold">เข้าสู่ระบบ</a>
			<a href="/register" class="btn btn-primary btn-sm font-bold rounded-xl shadow-md shadow-primary/20">สมัครสมาชิก</a>
		{/if}
	</div>
</div>
