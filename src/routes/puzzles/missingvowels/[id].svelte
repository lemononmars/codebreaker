<script lang="ts">
   import type { IMissingVowels } from '$lib/interfaces';
   import { PlayCircleIcon } from 'svelte-feather-icons';
   import TitleTab from '$lib/components/TitleTab.svelte';
   import { fly } from 'svelte/transition';

   export let content: IMissingVowels;

   let solved: boolean = false;
   let submitted: boolean = false;
   let duplicate: boolean = false;
   let answer: string = '';
   let pastAnswers: string[] = [];

   const numRounds = content.answers.length;
   let currentRound = 0;
   $: roundAnswer = content.answers[currentRound];

   let time: number = 0;
   $: minutes = String(Math.floor(time / 60000)).padStart(2, '0');
   $: seconds = String(Math.floor((time % 60000) / 1000)).padStart(2, '0');
   $: timeString = `${minutes}:${seconds}`;

   let timer: string | number | NodeJS.Timeout | undefined;
   let isPlaying: boolean = false;
   let isFinished: boolean = false;

   // Sort rounds so active/new unanswered questions are at the top, answered ones pushed down
   $: sortedRounds = content.answers
      .map((a, originalIdx) => ({ a, originalIdx }))
      .filter(({ originalIdx }) => isPlaying && originalIdx <= currentRound)
      .sort((x, y) => {
         const xDone = x.originalIdx < currentRound || isFinished;
         const yDone = y.originalIdx < currentRound || isFinished;
         if (xDone === yDone) return x.originalIdx - y.originalIdx;
         return xDone ? 1 : -1;
      });

   function play() {
      isPlaying = true;
      timer = setInterval(() => (time += 100), 100);
   }

   let openModal: boolean = false;

   function stripVowels(w: string) {
      let naked = w.replace(/[^\u0E00-\u0E2E]/g, '');
      let shuffle = naked.split('').reduce((acc, c) => acc + c + (Math.random() < 0.6 ? '' : ' '), '');
      return shuffle;
   }

   function checkAnswer() {
      if (solved) return;
      submitted = true;
      duplicate = false;
      if (pastAnswers.includes(answer)) {
         duplicate = true;
         return;
      }
      pastAnswers = [...pastAnswers, answer];
      if (answer === roundAnswer) {
         solved = true;
         nextRound();
      }
      answer = '';
   }

   function nextRound() {
      if (currentRound == numRounds - 1) {
         openModal = true;
         if (timer) clearInterval(timer);
         isFinished = true;
      } else {
         currentRound++;
         submitted = false;
         solved = false;
      }
   }

   function handleKeyPress(event: KeyboardEvent) {
      if (event.code != 'Enter') return;
      checkAnswer();
   }

   function focusOnMount(node: HTMLElement) {
      node.focus();
   }
</script>

<TitleTab {content} />

<div class="max-w-3xl mx-auto px-4 flex flex-col gap-4 pb-12">
   {#if isPlaying}
      <div class="flex items-center justify-between bg-slate-900 border border-slate-800 rounded-2xl px-5 py-3 text-amber-400 font-mono font-bold shadow-md">
         <span>เวลา: {timeString}</span>
         <span class="text-xs text-slate-400 font-sans">ข้อที่ {currentRound + 1} / {numRounds}</span>
      </div>

      <div class="flex flex-col gap-4">
         {#each sortedRounds as { a, originalIdx } (originalIdx)}
            {@const isCurrent = currentRound === originalIdx && !isFinished}
            <div transition:fly={{ y: 20, duration: 300 }} class="flex flex-col gap-2 p-4 rounded-2xl border transition-all {isCurrent ? 'bg-slate-900 border-amber-500/50 shadow-xl' : 'bg-slate-950/60 border-slate-800 opacity-80'}">
               <div class="flex justify-between items-center text-xs font-bold text-slate-400">
                  <span>ข้อที่ {originalIdx + 1}</span>
                  {#if !isCurrent}
                     <span class="text-emerald-400 font-semibold">ตอบแล้ว ✓</span>
                  {/if}
               </div>

               <div class="text-2xl sm:text-3xl font-black tracking-widest p-4 rounded-xl text-center font-mono {isCurrent ? 'bg-amber-500/10 text-amber-300 border border-amber-500/30' : 'bg-slate-900 text-slate-300'}">
                  {stripVowels(a)}
               </div>

               {#if !isCurrent || isFinished}
                  <div class="text-xl font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-3 text-center">
                     เฉลย: {a}
                  </div>
               {:else}
                  <div class="flex flex-col sm:flex-row gap-2 mt-2">
                     <button class="btn btn-error btn-sm font-bold" on:click={nextRound}>ข้าม / เฉลย</button>
                     <input
                        class="input input-bordered flex-1 bg-slate-950 border-slate-700 text-white font-bold text-lg focus:border-amber-400 focus:bg-slate-900"
                        type="text"
                        bind:value={answer}
                        on:keydown={handleKeyPress}
                        use:focusOnMount
                        placeholder="พิมพ์คำตอบ..."
                     />
                     <button class="btn btn-primary font-bold px-6" on:click={checkAnswer}>ตอบ</button>
                  </div>
               {/if}
            </div>
         {/each}
      </div>
   {:else}
      <button class="btn btn-primary btn-xl btn-wide h-20 mx-auto my-8 text-2xl gap-4 font-black shadow-2xl rounded-3xl" on:click={play}>
         เริ่มเล่น <PlayCircleIcon size="32" />
      </button>
   {/if}
</div>

<!-- Modal -->
<input type="checkbox" id="submit-modal" class="modal-toggle" />
<div class="modal cursor-pointer w-screen" class:modal-open={openModal} on:click={() => (openModal = false)}>
   <div class="modal-box relative bg-slate-900 border border-slate-800 text-white rounded-3xl">
      <h3 class="text-2xl font-black mb-2">แก้ปริศนาครบทั้ง {numRounds} ข้อแล้ว 🎉</h3>
      <p class="text-slate-300">ใช้เวลาทั้งหมด <span class="font-bold text-amber-400">{timeString}</span></p>
      <div class="btn btn-block btn-primary mt-6 font-bold" on:click={() => (openModal = false)}>เย่!</div>
   </div>
</div>