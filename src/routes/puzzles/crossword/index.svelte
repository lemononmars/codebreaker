<script lang=ts>
   import {dateToThaiString} from '$lib/utils/date'
   import type { IPuzzleCrossword } from '$lib/interfaces';
   export let crosswords: IPuzzleCrossword[]
</script>

<svelte:head>
   <title>Code Breaker | Crossword Puzzles</title>
</svelte:head>

<h1>อักษรไขว้</h1>

<div class="divider"></div>

<div class="flex flex-col justify-center">
   <table class="table table-zebra table-compact w-full mx-auto">
      <thead>
         <th>ชื่อ</th>
         <th>ขนาด</th>
         <th>วันที่</th>
         <th>ผู้แต่ง</th>
         <th>แท็ก</th>
      </thead>
      <tbody>
         {#each crosswords as p}
            <tr>
               <td>
                  <a href="/puzzles/crossword/{p.id}">
                     <p class="text-primary">{p.title}</p>
                  </a>
               </td>
               <td> {p.size[0]} x {p.size[1]} </td>
               <td>{dateToThaiString(p.date)}</td>
               <td>{p.author || 'ไม่มี'}</td>
               <td>
                  {#each p.tags || [] as t}
                     <div class="badge badge-outline">{t}</div>
                  {/each}
               </td>
            </tr>
         {/each}
      </tbody>
   </table>
</div>
