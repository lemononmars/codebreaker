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
		UserIcon
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
</script>

<!-- Desktop Navbar -->
<nav
	class="sticky top-0 w-full hidden lg:flex items-center justify-between px-8 py-3 bg-base-100/80 backdrop-blur-md border-b border-base-300 z-[9999] shadow-sm"
>
	<div class="flex items-center gap-8">
		<a href="/" class="flex items-center gap-2 hover:scale-105 transition-transform">
			<img class="h-10 w-10 object-contain" src={logo} alt="logo" />
			<span class="text-xl font-black tracking-tighter text-primary">CODEBREAKER</span>
		</a>

		<div class="flex items-center gap-1">
			{#each menus as menu, idx}
				<a
					href="/{links[idx]}"
					class="px-4 py-2 rounded-xl text-sm font-bold transition-all
               {isActive(links[idx]) ? 'bg-primary text-primary-content shadow-md' : 'hover:bg-base-200 text-base-content/60 hover:text-base-content'}"
				>
					{menu}
				</a>
			{/each}
		</div>
	</div>

	<div class="flex items-center gap-4">
		{#if $username && $username !== 'code breaker'}
			<a
				href="/profile"
				class="flex items-center gap-2 px-4 py-2 rounded-xl bg-base-200 hover:bg-base-300 transition-colors border border-base-300"
			>
				<UserIcon size="16" class="text-primary" />
				<span class="text-sm font-bold">{$username}</span>
			</a>
		{:else}
			<a href="/login" class="btn btn-ghost btn-sm rounded-xl">Log In</a>
			<a href="/register" class="btn btn-primary btn-sm rounded-xl shadow-lg shadow-primary/20"
				>Sign Up</a
			>
		{/if}

		<button
			class="btn btn-circle btn-ghost btn-sm hover:rotate-90 transition-transform"
			on:click={() => (openModal = true)}
		>
			<SettingsIcon size="20" />
		</button>
	</div>
</nav>

<!-- Mobile Bottom Nav -->
<nav
	class="fixed bottom-0 left-0 right-0 lg:hidden bg-base-100/90 backdrop-blur-lg border-t border-base-300 px-2 py-3 z-[9999] shadow-[0_-4px_20px_rgba(0,0,0,0.05)] transition-transform duration-300"
	class:translate-y-full={hideBar}
>
	<div class="flex items-center justify-around max-w-md mx-auto">
		{#each menus as menu, idx}
			<a
				href="/{links[idx]}"
				class="flex flex-col items-center gap-1 min-w-[60px] transition-all
            {isActive(links[idx]) ? 'text-primary scale-110' : 'text-base-content/40 hover:text-base-content'}"
			>
				<div class="relative">
					<svelte:component this={icons[idx]} size="22" />
					{#if isActive(links[idx])}
						<div class="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full" />
					{/if}
				</div>
				<span class="text-[10px] font-black uppercase tracking-tight">{menu}</span>
			</a>
		{/each}
	</div>

	<!-- Toggle Tab -->
	<button
		class="absolute top-0 right-4 -translate-y-full bg-base-100 border-t border-x border-base-300 px-3 py-1 rounded-t-xl text-primary shadow-sm"
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
	<div class="modal modal-open bg-black/60 backdrop-blur-sm z-[10000]">
		<div class="modal-box bg-base-100 rounded-[2rem] border border-white/10 shadow-2xl p-8">
			<h2 class="text-2xl font-black mb-6">ตั้งค่าโปรไฟล์</h2>
			<div class="flex flex-col gap-4">
				<div class="form-control">
					<label class="label pt-0"
						><span class="label-text font-bold opacity-50">ชื่อที่ใช้แสดง</span></label
					>
					<input
						class="input input-bordered rounded-2xl focus:input-primary"
						type="text"
						bind:value={$username}
						placeholder="ชื่อของคุณ"
					/>
				</div>
				<button
					class="btn btn-primary btn-block rounded-2xl mt-4 shadow-xl shadow-primary/20"
					on:click={() => (openModal = false)}>บันทึก</button
				>
			</div>
		</div>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div class="modal-backdrop" on:click={() => (openModal = false)} />
	</div>
{/if}

<style>
	:global(body) {
		padding-bottom: 5rem;
	}
	@media (min-width: 1024px) {
		:global(body) {
			padding-bottom: 0;
		}
	}
</style>
