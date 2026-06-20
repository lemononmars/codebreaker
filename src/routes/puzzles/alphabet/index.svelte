<script lang=ts>
   import {dateToThaiString} from '$lib/utils/date'
   import type { IAlphabet } from '$lib/interfaces';
   export let puzzles: IAlphabet[]
</script>

<svelte:head>
   <title>Code Breaker | Alphabet</title>
</svelte:head>

<div class="max-w-4xl mx-auto py-8 px-4">
   <div class="flex flex-row justify-between items-center mb-4">
      <h1 class="text-4xl font-black">Alphabet</h1>
      <a href="/tools/alphabet" class="btn btn-primary gap-2">
         <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
         </svg>
         สร้างปริศนาใหม่
      </a>
   </div>

   <div class="divider" />

   <div class="flex flex-col justify-center">
      <div class="overflow-x-auto">
         <table class="table table-zebra table-compact w-full mx-auto">
            <thead>
               <tr>
                  <th>ชื่อ</th>
                  <th>วันที่</th>
                  <th>ผู้แต่ง</th>
                  <th>แท็ก</th>
               </tr>
            </thead>
            <tbody>
               {#each puzzles as p}
                  <tr>
                     <td>
                        <a href="/puzzles/alphabet/{p.uid}">
                           <p class="text-primary font-bold hover:underline">{p.title}</p>
                        </a>
                     </td>
                     <td>{dateToThaiString(p.date)}</td>
                     <td>{p.author || 'ไม่มี'}</td>
                     <td>
                        {#each p.tags || [] as t}
                           <div class="badge badge-outline mr-1">{t}</div>
                        {/each}
                     </td>
                  </tr>
               {/each}
            </tbody>
         </table>
      </div>
   </div>
</div>
