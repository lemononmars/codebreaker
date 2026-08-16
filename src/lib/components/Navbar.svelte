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
		ArrowLeftIcon,
		Edit3Icon,
		XIcon
	} from 'svelte-feather-icons';
	import { user, username } from '$lib/store';
	import { page } from '$app/stores';

	const icons = [HomeIcon, CalendarIcon, PlayCircleIcon, ToolIcon, BookOpenIcon, ShoppingCartIcon];
	const menus = ['หน้าแรก', 'กิจกรรม', 'ปริศนา', 'เครื่องมือ', 'ข้อมูล', 'ร้านค้า'];
	const links = ['', 'events', 'puzzles', 'tools', 'resources', 'shop'];

	let openNameModal = false;
	let tempName = '';

	$: currentPath = $page.url.pathname;
	$: isActive = (path: string) => {
		if (path === '' && currentPath === '/') return true;
		if (path !== '' && currentPath.startsWith('/' + path)) return true;
		return false;
	};

	function handleOpenModal() {
		tempName = $username || 'code breaker';
		openNameModal = true;
	}

	function handleSaveName() {
		const trimmed = tempName.trim();
		if (trimmed) {
			username.set(trimmed);
		}
		openNameModal = false;
	}
</script>

<!-- Mobile Navigation Bar -->
<div class="flex lg:hidden w-full bg-base-100/95 backdrop-blur-md border-t border-base-300 justify-between items-center py-1.5 px-0.5 z-50">
	{#each menus as menu, i}
		{@const Icon = icons[i]}
		<a
			href="/{links[i]}"
			class="flex-1 min-w-0 flex flex-col items-center justify-center gap-0.5 py-1 px-0.5 rounded-lg transition duration-150 {isActive(links[i])
				? 'bg-primary/20 text-primary font-bold'
				: 'text-slate-400 hover:text-white'}"
		>
			<Icon size="16" />
			<span class="text-[10px] leading-tight truncate max-w-full">{menu}</span>
		</a>
	{/each}

	{#if $user}
		<a
			href="/profile"
			class="flex-1 min-w-0 flex flex-col items-center justify-center gap-0.5 py-1 px-0.5 rounded-lg transition duration-150 {isActive('profile')
				? 'bg-primary/20 text-primary font-bold'
				: 'text-slate-400 hover:text-white'}"
		>
			<UserIcon size="16" />
			<span class="text-[10px] leading-tight truncate max-w-full">โปรไฟล์</span>
		</a>
	{:else}
		<button
			on:click={handleOpenModal}
			class="flex-1 min-w-0 flex flex-col items-center justify-center gap-0.5 py-1 px-0.5 rounded-lg transition duration-150 text-slate-400 hover:text-white"
			title="เปลี่ยนชื่อผู้ใช้"
		>
			<UserIcon size="16" />
			<span class="text-[10px] leading-tight truncate max-w-full">ชื่อผู้เล่น</span>
		</button>
	{/if}
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
		{#if $user}
			<a href="/profile" class="btn btn-ghost btn-md gap-2 rounded-xl border border-base-300">
				<UserIcon size="18" />
				<span class="font-bold">{$username}</span>
			</a>
		{:else}
			<button
				on:click={handleOpenModal}
				class="btn btn-primary text-primary-content btn-sm font-bold rounded-xl shadow-md shadow-primary/20 gap-2"
				title="เปลี่ยนชื่อผู้ใช้ในเครื่อง"
			>
				<UserIcon size="16" />
				<span class="font-bold truncate max-w-[140px]">{$username || 'code breaker'}</span>
			</button>
		{/if}
	</div>
</div>

<!-- Change Name Modal -->
{#if openNameModal}
	<div class="modal modal-open z-50">
		<div class="modal-box bg-neutral text-neutral-content border border-base-300 rounded-3xl p-6 relative max-w-md text-left">
			<button
				on:click={() => (openNameModal = false)}
				class="btn btn-sm btn-circle btn-ghost absolute right-4 top-4 text-base-content hover:bg-base-200"
			>
				<XIcon size="18" />
			</button>

			<div class="flex items-center gap-3 mb-4">
				<div class="w-10 h-10 rounded-2xl bg-primary/20 text-primary flex items-center justify-center shrink-0">
					<Edit3Icon size="20" />
				</div>
				<div>
					<h3 class="font-extrabold text-lg text-neutral-content">ตั้งชื่อผู้เล่น (Guest Name)</h3>
					<p class="text-xs text-neutral-content/70">ชื่อนี้จะบันทึกในเครื่อง (localStorage) สำหรับส่งคะแนน</p>
				</div>
			</div>

			<form on:submit|preventDefault={handleSaveName} class="flex flex-col gap-4 mt-2">
				<div class="form-control w-full">
					<label class="label text-xs font-bold text-base-content px-0">
						<span>ชื่อที่ต้องการแสดง:</span>
					</label>
					<input
						type="text"
						bind:value={tempName}
						placeholder="ใส่ชื่อผู้เล่น..."
						class="input input-bordered w-full bg-base-300 text-base-content border-base-300 font-bold focus:border-primary"
					/>
				</div>

				<div class="flex items-center justify-between gap-3 pt-2">
					<a
						href="/login"
						on:click={() => (openNameModal = false)}
						class="link link-primary font-bold text-xs sm:text-sm"
					>
						มีบัญชีผู้ใช้แล้ว? เข้าสู่ระบบที่นี่
					</a>

					<button type="submit" class="btn btn-primary text-primary-content font-bold btn-sm rounded-xl px-4">
						บันทึก
					</button>
				</div>
			</form>
		</div>
		<div class="modal-backdrop bg-black/60" on:click={() => (openNameModal = false)}></div>
	</div>
{/if}
