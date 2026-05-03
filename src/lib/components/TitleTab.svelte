<script lang=ts>
   import type {IContent} from '$lib/interfaces'
   import {ChevronLeftIcon, ChevronRightIcon} from 'svelte-feather-icons'
   import {dateToThaiString} from '$lib/utils/date'

   export let content: IContent
</script>
<div class="relative flex items-center justify-center w-full min-h-[40px]">
   <div class="absolute left-0">
      <a href="/puzzles/{content.type}" class="btn btn-ghost btn-sm gap-2 opacity-60 hover:opacity-100 transition-opacity">
         <ChevronLeftIcon size="18"/>
         <span class="hidden sm:inline">รายการปริศนา</span>
      </a>
   </div>
   <h1 class="text-2xl font-black tracking-tight text-center px-12">{content.title}</h1>
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