<script lang="ts">
   import { goto } from '$app/navigation';
   import type { ISpellingBee } from '$lib/interfaces';
   import { numPuzzles } from '$lib/data/puzzles/spellingbee';
   import { search, isUpper, isLower, getSubWords } from '$lib/utils/thaiwords';
   import { XCircleIcon, RefreshCwIcon, CheckCircleIcon } from 'svelte-feather-icons';
   import { flip } from 'svelte/animate';

   export let content: ISpellingBee;

   let answer: string = '';
   let pastAnswers: string[] = [];
   interface SubmissionLog {
      answer: string;
      response: string;
   }
   let logs: SubmissionLog[] = [];

   $: currentWord = content?.word || 'กงเกวียน';
   $: solutions = getSubWords(currentWord, false).filter((s) => s.length >= 3);
   $: letters = shuffle(currentWord.split(''));
   $: solved = new Array(solutions.length).fill(false);

   let openModal: boolean = false;

   function checkAnswer() {
      if (answer.length === 0) return;

      if (pastAnswers.includes(answer)) {
         logs = [{ answer, response: 'duplicate' }, ...logs];
         triggleWiggle();
         answer = '';
         return;
      }

      if (answer.length < 3) {
         logs = [{ answer, response: 'short' }, ...logs];
         triggleWiggle();
         answer = '';
         return;
      }

      if (answer.split('').some((l) => !letters.includes(l))) {
         logs = [{ answer, response: 'illegal' }, ...logs];
         triggleWiggle();
         answer = '';
         return;
      }

      if (!search(answer)) {
         logs = [{ answer, response: 'wordless' }, ...logs];
         triggleWiggle();
         answer = '';
         return;
      }

      pastAnswers = [...pastAnswers, answer];
      if (solutions.includes(answer)) {
         const idx = solutions.indexOf(answer);
         if (idx !== -1) solved[idx] = true;
         logs = [{ answer, response: 'correct' }, ...logs];
      } else {
         logs = [{ answer, response: 'wordless' }, ...logs];
      }

      if (answer === currentWord || solved.every(Boolean)) {
         openModal = true;
      }

      answer = '';
   }

   function handleKeyPress(event: KeyboardEvent) {
      if (event.code === 'Enter') {
         checkAnswer();
      }
   }

   function shuffle(arr: string[]) {
      const s = [...arr];
      const l = s.length;
      for (let i = 0; i < l; i++) {
         const newIndex = Math.floor(Math.random() * (l - i - 1));
         const temp = s[newIndex];
         s[newIndex] = s[i];
         s[i] = temp;
      }
      return s;
   }

   function handleShuffle() {
      letters = shuffle(letters);
   }

   function giveUp() {
      solved = new Array(solutions.length).fill(true);
      logs = [{ answer: currentWord, response: 'correct' }, ...logs];
   }

   function addLetter(l: string) {
      answer += l;
   }

   let isWiggle: boolean = false;
   function triggleWiggle() {
      isWiggle = true;
      setTimeout(() => (isWiggle = false), 600);
   }

   function newPuzzle() {
      const nextId = Math.floor(Math.random() * numPuzzles);
      goto(`/puzzles/spellingbee/${nextId}`);
   }
</script>

<svelte:body on:keydown={handleKeyPress} />

<div class="max-w-4xl mx-auto px-4 py-6 flex flex-col gap-6">
   <div class="bg-slate-900/60 backdrop-blur-xl border border-slate-800 rounded-3xl p-6 md:p-8 shadow-2xl flex flex-col gap-6 items-center relative overflow-hidden">
      <div class="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <!-- Header controls -->
      <div class="w-full flex justify-between items-center border-b border-slate-800 pb-4">
         <div>
            <div class="flex items-center gap-2 mb-1">
               <span class="h-2 w-2 rounded-full bg-amber-400"></span>
               <span class="text-xs uppercase tracking-widest text-amber-400 font-bold">Spelling Bee</span>
            </div>
            <h1 class="text-xl sm:text-3xl font-extrabold text-white">ปริศนาสะกดศัพท์ (#{content?.id ?? 'Random'})</h1>
         </div>

         <button
            on:click={newPuzzle}
            class="px-4 py-2 rounded-xl font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40 hover:bg-amber-500/30 text-xs sm:text-sm transition-all transform hover:-translate-y-0.5 shadow-md flex items-center gap-1.5"
         >
            <span>สุ่มข้อใหม่</span> 🎲
         </button>
      </div>

      <!-- Letter Tiles Grid keyed by letter (l) for Svelte FLIP motion animation -->
      <div class="flex flex-wrap justify-center gap-2.5 sm:gap-3.5 max-w-xl py-3">
         {#each letters as l (l)}
            <div animate:flip={{ duration: 300 }}>
               <button
                  on:click={() => addLetter(l)}
                  class="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl border-2 font-black text-2xl sm:text-3xl flex items-center justify-center transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg
                  {answer.includes(l)
                     ? 'bg-amber-400 text-slate-950 border-amber-300 shadow-amber-500/30'
                     : 'bg-black text-amber-400 border-slate-800 hover:border-amber-400 hover:text-amber-300'}"
                  style={answer.includes(l) ? 'color: #0f172a;' : ''}
               >
                  <span class={isUpper(l) || isLower(l) ? 'translate-x-0.5' : ''}>{l}</span>
               </button>
            </div>
         {/each}
      </div>

      <!-- Input controls with pure black textfield background -->
      <div class="w-full max-w-md flex flex-col sm:flex-row items-center gap-2.5">
         <button
            on:click={handleShuffle}
            class="p-3.5 rounded-2xl bg-black border border-slate-800 text-slate-300 hover:text-amber-400 hover:border-amber-500/40 transition-colors shadow-inner"
            title="สลับอักษร"
         >
            <RefreshCwIcon size="20" />
         </button>

         <div class="relative flex-1 w-full" class:wiggle={isWiggle}>
            <input
               type="text"
               bind:value={answer}
               placeholder=""
               class="w-full px-4 py-3 rounded-2xl bg-black border border-slate-800 text-white text-xl font-black focus:outline-none focus:border-amber-400 focus:bg-black active:bg-black transition-colors shadow-inner"
            />
            {#if answer}
               <button
                  on:click={() => (answer = '')}
                  class="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-200"
               >
                  <XCircleIcon size="18" />
               </button>
            {/if}
         </div>

         <button
            on:click={checkAnswer}
            class="w-full sm:w-auto px-7 py-3 rounded-2xl font-black bg-amber-400 hover:bg-amber-300 text-slate-950 transition-all duration-200 shadow-lg shadow-amber-500/20 text-base"
            style="color: #0f172a;"
         >
            ส่ง
         </button>
      </div>

      <div class="flex gap-3 pt-1">
         <button
            on:click={giveUp}
            class="px-4 py-2 rounded-xl text-xs font-bold bg-rose-500/20 text-rose-300 border border-rose-500/40 hover:bg-rose-500/30 transition-colors"
         >
            เฉลยทั้งหมด
         </button>
      </div>
   </div>

   <!-- Submissions & Answers grid -->
   <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div class="bg-slate-900/60 backdrop-blur-xl border border-slate-800 rounded-3xl p-5 h-64 flex flex-col shadow-xl">
         <h2 class="font-bold text-white mb-3 text-center border-b border-slate-800 pb-2 text-sm tracking-wide">คำตอบก่อนหน้านี้</h2>
         <div class="flex flex-col gap-2 overflow-y-auto pr-1 flex-1 text-sm">
            {#each logs as l}
               {#if l.response === 'correct'}
                  <p class="text-emerald-400 font-semibold">{l.answer} ✔️</p>
               {:else if l.response === 'duplicate'}
                  <p class="text-amber-400 font-semibold">{l.answer} เคยตอบไปแล้ว</p>
               {:else if l.response === 'illegal'}
                  <p class="text-rose-400 font-semibold">{l.answer} ❌ มีตัวอักษรที่ห้ามใช้</p>
               {:else if l.response === 'wordless'}
                  <p class="text-rose-400 font-semibold">{l.answer} ❌ ไม่อยู่ในพจนานุกรม</p>
               {:else if l.response === 'short'}
                  <p class="text-rose-400 font-semibold">{l.answer} ❌ สั้นกว่า 3 ตัวอักษร</p>
               {/if}
            {/each}
         </div>
      </div>

      <div class="bg-slate-900/60 backdrop-blur-xl border border-slate-800 rounded-3xl p-5 h-64 flex flex-col shadow-xl">
         <h3 class="font-bold text-white mb-3 text-center border-b border-slate-800 pb-2 text-sm tracking-wide">คำที่หาเจอแล้ว ({solved.filter(Boolean).length}/{solutions.length})</h3>
         <div class="grid grid-cols-3 sm:grid-cols-4 gap-2 p-1 overflow-y-auto flex-1">
            {#each solutions as s, idx}
               <div
                  class="rounded-xl border transition-all h-9 flex items-center justify-center cursor-pointer text-xs font-bold
                  {solved[idx] ? 'bg-emerald-500/20 border-emerald-500/40 text-emerald-300' : 'bg-black border-slate-800 text-slate-400 hover:border-slate-700'}"
                  on:click={() => (solved[idx] = true)}
               >
                  {#if solved[idx]}
                     <span>{s}</span>
                  {:else}
                     <span>{s.length} อักษร</span>
                  {/if}
               </div>
            {/each}
         </div>
      </div>
   </div>
</div>

<!-- Success Modal -->
<input type="checkbox" id="submit-modal" class="modal-toggle" />
<label class="modal cursor-pointer w-screen" class:modal-open={openModal} on:click={() => (openModal = false)}>
   <label class="modal-box relative bg-slate-900 border border-slate-800 text-white rounded-3xl p-6 shadow-2xl" for="">
      <h3 class="text-2xl font-black mb-2 text-emerald-400 flex items-center gap-2">
         <CheckCircleIcon size="24" /> หาคำศัพท์ครบแล้ว! 🎉
      </h3>
      <p class="text-slate-300 text-sm mb-6">คุณเฉลยคำศัพท์ครบทุกคำในปริศนานี้สำเร็จแล้ว</p>
      <div class="flex gap-3">
         <button class="flex-1 py-3 rounded-2xl font-black bg-amber-400 text-slate-950 hover:bg-amber-300 transition-colors" style="color: #0f172a;" on:click={newPuzzle}>
            เล่นข้อถัดไป 🎲
         </button>
         <button class="px-5 py-3 rounded-2xl font-bold bg-slate-800 text-slate-300 hover:bg-slate-700 transition-colors" on:click={() => (openModal = false)}>
            ปิด
         </button>
      </div>
   </label>
</label>

<style>
   @keyframes pos-x-wiggle {
      0%, 100% { transform: translateX(0); }
      25% { transform: translateX(-6px); }
      75% { transform: translateX(6px); }
   }
   .wiggle {
      animation: pos-x-wiggle 0.4s ease-in-out;
   }
</style>