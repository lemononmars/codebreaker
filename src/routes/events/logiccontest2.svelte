<script lang=ts>
   import type {IEvent} from '$lib/interfaces'
   import {getImageURL} from '$lib/supabase'
   import {getMD} from '$lib/data/events/md'
   import { onMount } from 'svelte';
   import {events} from '$lib/data/events'
   import Head from '$lib/components/Head.svelte';

   const content: IEvent = events.filter(n => n.id == 9)[0]
   let md: any

   onMount(async() =>{
      md = await getMD('09')
   })
   
</script>

<Head title="2nd Code Breaker Logic Puzzle Contest" description="A logic puzzle contest held in Bangkok on Jan 24, 2026" url="codebreakerth.vercel.app/events/logiccontest2"></Head>

<div class="flex flex-col gap-2">
   <div>
      <img src="{content.image.startsWith('http') ? content.image : getImageURL('events', content.image)}" class="w-full h-32 lg:h-60 object-cover" alt="img">
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
</div>

{#if md}
<div class="text-left px-4">
   <svelte:component this={md}/>
</div>
{/if}
