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


</script>

<!-- Mobile Navigation Bar -->
<div class="flex lg:hidden w-full bg-base-100/90 backdrop-blur border-t border-base-300 justify-around items-center py-2 px-1 overflow-x-auto no-scrollbar z-50">
	{#each menus as menu, i}
		{@const Icon = icons[i]}
		<a
			href="/{links[i]}"
			class="flex flex-row items-center gap-1 px-1.5 py-1 rounded-lg text-xs whitespace-nowrap transition duration-150 {isActive(links[i])
				? 'bg-primary/20 text-primary font-bold'
				: 'text-slate-400 hover:text-white'}"
		>
			<Icon size="15" />
			<span class="text-[11px]">{menu}</span>
		</a>
	{/each}
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
