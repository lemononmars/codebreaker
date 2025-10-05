<script lang=ts>
   import type {IEvent} from '$lib/interfaces'
   import {getImageURL} from '$lib/supabase'
   import {getMD} from '$lib/data/events/md'
   import { onMount } from 'svelte';
   import {events} from '$lib/data/events'
	import Head from '$lib/components/Head.svelte';

   const content: IEvent = events.filter(n => n.id == 8)[0]
   let md: any

   onMount(async() =>{
      md = await getMD('08')
   })
   
</script>

<Head title="Code Breaker Logic Puzzle Contest" description="A logic puzzle contest held in Bangkok on Jan 25, 2025" url="codebreakerth.vercel.app/events/logiccontest"></Head>

<div class="flex flex-col gap-2">
   <div>
      <img src="{getImageURL('events', content.image)}" class="w-full h-32 lg:h-60 object-cover" alt="img">
   </div>
   <h1>{content.title}</h1>

   <div class="flex flex-row gap-2 mx-auto items-center">
      <p>{content.date}</p>
      {#if content.tags}
         {#each content.tags as t}
            <div class="badge badge-outline">{t}</div>
         {/each}
      {/if}
   </div>
   <div class="divider"></div>

   <h1 class="bg-blue-100"><a href="/shop/logiccontestbook/errata">Book Errata</a></h1>
   <div class="divider"></div>
</div>

{#if md}
<div class="text-left px-4">
   <svelte:component this={md}/>
</div>
{/if}