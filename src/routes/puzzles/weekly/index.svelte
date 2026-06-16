<script context=module lang=ts>
   export async function load({fetch}) {
      const res = await fetch(`/api/puzzle/weekly/`)
      const content = await res.json()

      return {
         props: {
            content: content.content
         }
      }
   }
</script>

<script lang=ts>
   import { AwardIcon, BookOpenIcon, CalendarIcon, ChevronRightIcon } from 'svelte-feather-icons';

   export let content: Array<{ year: number; week: number; title?: string }>
   let years: number[] = []
   content.forEach(c => {
      if(!years.includes(c.year))
         years.push(c.year)
   });
   years.reverse()
</script>

<svelte:head>
	<title>Code Breaker | คลังปริศนาประจำสัปดาห์ 📅</title>
</svelte:head>

<div class="flex flex-col gap-8 w-full max-w-4xl mx-auto px-4 py-6 text-left">
   <!-- Header Section -->
   <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-base-300 pb-6">
      <div class="flex items-center gap-4">
         <div class="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shadow-inner">
            <CalendarIcon size="24" />
         </div>
         <div>
            <h1 class="text-3xl font-black text-white tracking-tight">ปริศนาประจำสัปดาห์</h1>
            <p class="text-sm opacity-70 mt-1">คลังโจทย์และปริศนาอัปเดตใหม่ในทุกสัปดาห์</p>
         </div>
      </div>
   </div>

   <!-- Content Grid -->
   <div class="flex flex-col gap-8">
      {#each years as y}
         <div class="card bg-neutral border border-base-300/80 shadow-xl overflow-hidden rounded-2xl">
            <!-- Year Header & Leaderboard Link -->
            <div class="card-body p-5 md:p-6 bg-base-300/30 border-b border-base-300 flex flex-row justify-between items-center gap-4">
               <div class="flex items-center gap-2.5">
                  <span class="text-2xl font-black text-white">ปี {y}</span>
                  <span class="badge badge-primary font-bold text-xs">
                     {content.filter(c => c.year == y).length} ปริศนา
                  </span>
               </div>
               
               <a 
                  href="/puzzles/weekly/{y}/leaderboard"
                  class="btn btn-sm btn-outline btn-accent gap-1.5 rounded-xl font-bold transition-all duration-350 hover:scale-[1.02]"
               >
                  <AwardIcon size="14" />
                  ตารางอันดับปี {y}
               </a>
            </div>

            <!-- Puzzle List -->
            <div class="p-3 sm:p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
               {#each content.filter(c => c.year == y).sort((a,b) => b.week - a.week) as c}
                  <a 
                     href="/puzzles/weekly/{c.year}/{c.week}"
                     class="group flex items-center justify-between p-3.5 bg-base-100 hover:bg-base-200/50 border border-base-300/60 rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
                  >
                     <div class="flex items-center gap-3">
                        <div class="w-8 h-8 rounded-lg bg-neutral/80 flex items-center justify-center text-secondary group-hover:text-primary transition-colors">
                           <BookOpenIcon size="16" />
                        </div>
                        <div class="flex flex-col">
                           <span class="text-xs opacity-65 font-bold">สัปดาห์ที่ {c.week}</span>
                           <span class="text-sm sm:text-base font-extrabold text-white group-hover:text-primary transition-colors">
                              {c.title ? c.title : `สัปดาห์ที่ ${c.week}`}
                           </span>
                        </div>
                     </div>

                     <div class="flex items-center text-neutral-content opacity-50 group-hover:opacity-100 group-hover:text-primary transition-all pr-1">
                        <ChevronRightIcon size="18" class="transform group-hover:translate-x-0.5 transition-transform" />
                     </div>
                  </a>
               {/each}
            </div>
         </div>
      {/each}
   </div>
</div>