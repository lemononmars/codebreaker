<script lang="ts">
	import { getImageURL } from '$lib/supabase';
	import { dateToThaiString } from '$lib/utils/date';
	import type { IEvent } from '$lib/interfaces';

	export let events: IEvent[];
</script>

<svelte:head>
	<title>Code Breaker | Events</title>
</svelte:head>

<div class="container mx-auto px-4 pt-8">
	<h1 class="text-4xl font-bold text-center mb-8 tracking-tight">Events</h1>
</div>

<div class="container mx-auto px-4 pb-12">
	<div class="grid md:grid-cols-2 gap-6">
		{#each events as e}
			<a
				href="/events/{e.redirect || e.id}"
				class="card bg-neutral text-neutral-content shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 block h-full"
			>
				<div class="card-body flex flex-row items-center gap-6 p-6">
					<div class="avatar placeholder">
						<div class="w-24 h-24 rounded-xl bg-base-100 p-2 mask mask-squircle shadow-inner">
							<img
								src={getImageURL('events', e.image)}
								class="object-contain w-full h-full"
								alt={e.title}
							/>
						</div>
					</div>
					<div class="flex flex-col gap-1 w-full">
						<div class="flex justify-between items-baseline">
							<h2 class="card-title text-2xl font-bold capitalize tracking-wide text-primary">
								{e.title}
							</h2>
						</div>
						<p class="text-xs font-semibold opacity-60 uppercase tracking-wider">
							{dateToThaiString(e.date)}
						</p>
						<p class="text-base font-medium opacity-80 leading-relaxed line-clamp-2">{e.content}</p>
					</div>
				</div>
			</a>
		{/each}
	</div>
</div>
