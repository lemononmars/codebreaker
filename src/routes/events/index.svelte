<script lang="ts">
	import EventCard from '$lib/components/EventCard.svelte';
	import type { IEvent } from '$lib/interfaces';

	export let events: IEvent[] = [];
</script>

<svelte:head>
	<title>Code Breaker | Events</title>
</svelte:head>

<div class="container mx-auto px-4 pt-6 sm:pt-12 pb-24 max-w-5xl">
	<div class="text-center mb-8">
		<h1 class="text-3xl lg:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-400">
			Events & Contests
		</h1>
		<p class="text-slate-400 text-sm sm:text-base mt-2">กิจกรรมและการแข่งขันถอดรหัสปริศนาทั้งหมด</p>
	</div>

	<div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
		{#each events as e}
			<EventCard
				id={e.id}
				title={e.title}
				date={e.date}
				image={e.image}
				redirect={e.redirect}
			/>
		{/each}
	</div>
</div>
