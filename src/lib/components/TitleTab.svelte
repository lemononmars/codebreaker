<script lang=ts>
   import type {IContent} from '$lib/interfaces'
   import {ChevronLeftIcon, ChevronRightIcon} from 'svelte-feather-icons'
   import {dateToThaiString} from '$lib/utils/date'

   export let content: IContent
</script>
<div class="flex flex-row justify-between place-items-center">
   <div class="btn btn-outline btn-sm" on:click={()=>{}} on:keypress={()=>{}}>
      <a href="/puzzles/{content.type}/{content.id-1}">
            <ChevronLeftIcon size=20/>
      </a>
   </div>
   <h1><a href="/puzzles/{content.type}">{content.title}</a></h1>
   <div class="btn btn-outline btn-sm" on:click={()=>{}} on:keypress={()=>{}}>
      <a href="/puzzles/{content.type}/{content.id+1}">
            <ChevronRightIcon size=20/>
      </a>
   </div>
</div>
<div class="hidden lg:block">
   <div class="flex flex-row items-center gap-2 mx-auto justify-center">
      <p>วันที่ {dateToThaiString(content.date)}</p>
      <div class="flex flex-row gap-1">
         {#if content.tags}
            {#each content.tags as t}
               <a href="/puzzles/{content.type}?tag={t}"><div class="badge badge-outline">{t}</div></a>
            {/each}
         {/if}
      </div>
   </div>
</div>

<div class="divider"></div>