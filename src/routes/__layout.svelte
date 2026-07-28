<script lang="ts">
	import "../app.css";
	import Navbar from "$lib/components/Navbar.svelte";
	import { navigating, page } from '$app/stores';
	import PageNavIndicator from '$lib/components/PageNavIndicator.svelte';
	import Background3D from '$lib/components/Background3D.svelte';

	$: currentPath = $page?.url?.pathname || '/';

	$: showBackground = (() => {
		if (!currentPath) return true;
		if (currentPath.startsWith('/admin')) return false;

		const cleanPath = currentPath.endsWith('/') && currentPath.length > 1 ? currentPath.slice(0, -1) : currentPath;

		const listPages = [
			'/',
			'/puzzles',
			'/puzzles/weekly',
			'/tools',
			'/events',
			'/shop',
			'/about',
			'/login',
			'/register'
		];

		if (listPages.includes(cleanPath)) return true;

		// Match year list view e.g. /puzzles/weekly/2026
		if (/^\/puzzles\/weekly\/\d{4}$/.test(cleanPath)) return true;

		return false;
	})();
</script>

{#if showBackground}
	<Background3D />
{/if}

<header class="w-screen fixed overflow-x-clip bottom-0 lg:top-0 h-fit z-20">
	{#if $navigating}
		<PageNavIndicator />
	{/if}
	<Navbar/>
</header>

<main class="relative z-10 overflow-x-clip" id="main">
	<div>
		<slot />
	</div>
</main>