<script lang="ts">
	import "../app.css";
	import Navbar from "$lib/components/Navbar.svelte";
	import { navigating } from '$app/stores';
	import PageNavIndicator from '$lib/components/PageNavIndicator.svelte';
	import Background3D from '$lib/components/Background3D.svelte';
</script>

<Background3D />

<header class="w-screen fixed overflow-x-clip bottom-0 lg:top-0 h-fit z-20">
	{#if $navigating}
		<PageNavIndicator />
	{/if}
	<Navbar/>
</header>

<main class="relative z-10 overflow-x-clip w-screen" id="main">
	<div>
		<slot />
	</div>
</main>