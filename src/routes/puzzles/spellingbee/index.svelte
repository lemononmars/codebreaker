<script lang=ts>
   import {username} from '$lib/store'

   import type {ISpellingBee} from '$lib/interfaces'
   import {numPuzzles} from '$lib/data/puzzles/spellingbee'
   import {search, isUpper, isLower} from '$lib/utils/thaiwords'
   import {todayDateThaiString} from '$lib/utils/date'
   import {XCircleIcon, PlayCircleIcon} from 'svelte-feather-icons'

   import {fly} from 'svelte/transition'
   import {flip} from 'svelte/animate'

   export let content: ISpellingBee

   let answer: string = ''
   interface SubmissionLog {
      answer: string
      response: string
   }
   let log: SubmissionLog = {answer: '', response: ''}
   let letters = content.word.split("")
   letters = shuffle(letters)

   let openModal: boolean = false

   function checkAnswer() {
      if(answer.length == 0)
         return

      if (!search(answer)) {
         log = {
            answer, response: 'wordless'
         }
         triggleWiggle()
         answer = ''
         return
      }

      if(answer.split("").some(l => !letters.includes(l))) {
         log = {
            answer, response: 'illegal'
         }
         triggleWiggle()
         answer = ''
         return
      }

      if(answer.length < 7) {
         log = {
            answer, response: 'short'
         }
         triggleWiggle()
         answer = ''
         return
      }

      if(answer == content.word) {
         log = {
            answer, response: 'correct'
         }
         clearInterval(timer)
         isFinished = true
         openModal = true
      }

      answer = ''
   }

   function handleKeyPress(event: KeyboardEvent) {
		if (event.code != "Enter") return;
      if(openModal) openModal = false
		checkAnswer()
	}

   function shuffle(s: string[]) {
      const l = s.length
      for(let i = 0; i < l; i ++) {
         const newIndex = Math.floor(Math.random()*(l-i-1))
         const temp = s[newIndex]
         s[newIndex] = s[i]
         s[i] = temp
      }

      return [...s]
   }

   function giveUp() {
      clearInterval(timer)
      isFinished = true
      log = {
         answer: content.word,
         response: 'correct'
      }
   }

   function addLetter(l: string) {
      if(!answer.includes(l))
         answer += l
      else if(answer[answer.length-1] === l)
         answer = answer.slice(0, answer.length - 1)
   }

   let isWiggle: boolean = false

   function triggleWiggle() {
      isWiggle = true
      setTimeout(()=>isWiggle=false, 1000)
   }

   let time: number = 0
   $: timeString = (time < 60000 ? '' : Math.floor(time/60000) + ' นาที ') + (Math.floor(time/1000) % 60) + ' วินาที'
   let timer: string|number|NodeJS.Timeout|undefined
   let isPlaying: boolean = false
   let isFinished: boolean = false

   function play() {
      isPlaying = true
      timer = setInterval(()=>time += 100, 100)
   }

   let isSubmitting: boolean = false
   async function addToLeaderboard() {
      isSubmitting = true
		const res = await fetch('/api/post/leaderboard', {
         method: 'POST',
         cache: 'default',
         credentials: 'same-origin',
         headers: {
            'Content-Type': 'application/json'
         },
         body: JSON.stringify({
				puzzle_type: 'spellingbee',
            puzzle_id: content.id,
            name: $username,
            score: time
			})
      })
      isSubmitting = false
      openModal = false
	}
</script>

<svelte:body on:keypress={handleKeyPress}/>

<div class="flex flex-col gap-2 h-full lg:h-auto relative overflow-y-clip lg:overflow-y-none">
   <h1>สะกดศัพท์ ประจำวันที่ {todayDateThaiString()}</h1>
   <div class="sticky top-0 lg:top-20 flex flex-col z-20 bg-info-content lg:h-auto py-20">
      {#if isPlaying}
         <div class="flex flex-row flex-wrap gap-2 align-center w-full justify-center p-4">
            {#each letters as l, idx (l)}
               <div 
                  class="border-2 w-20 h-20 btn btn-outline" 
                  class:btn-primary={answer.includes(l)}
                  on:click={()=>addLetter(l)} 
                  in:fly={{y:10, delay:idx*300}}
                  animate:flip={{duration:500}}
               >
                  <p class="text-6xl" class:translate-x-4={isUpper(l) || isLower(l)}
                     class:translate-y-3={!isLower(l)}
                  >{l}</p>
               </div>
            {/each}
         </div>
      {:else}
         <div class="btn btn-primary btn-xl btn-wide h-20 mx-auto m-4 text-3xl gap-4" on:click={play}>
            เริ่ม <PlayCircleIcon size=40/>
         </div>
      {/if}

      <div class="flex flex-row flex-wrap justify-center my-2 gap-4 w-full px-4">
         
         {#if isPlaying}
            <div class="input-group w-80" class:wiggle={isWiggle}>
               <div class="btn btn-warning" on:click={()=>letters = shuffle(letters)}>สลับ</div>
               <input class="input input-bordered text-3xl w-48 transition-colors" type="text" bind:value={answer}>
               <div class="-translate-x-8 w-0 my-auto" class:hidden={answer === ''} on:click={()=>answer = ''}>
                  <XCircleIcon size=20/>
               </div>
               <div class="btn btn-primary" on:click={checkAnswer}>ส่ง</div>
            </div>
            <div class="btn btn-error" on:click={giveUp}>เปิดเฉลย</div>
         {/if}
      </div>
      {#if isPlaying}
         <div>{timeString}</div>
      {/if}
      <div class="text-center">
         {#if log.response}
            {#if log.response === 'correct'}
               <p class="text-success">{log.answer} ✔️ เป็นคำตอบที่ถูกต้อง</p>
            {:else if log.response === 'illegal'}
               <p class="text-error">{log.answer} ❌ มีตัวอักษรที่ห้ามใช้</p>
            {:else if log.response === 'wordless'}
               <p class="text-error">{log.answer} ❌ ไม่อยู่ในพจนานุกรม</p>
            {:else if log.response === 'short'}
               <p class="text-error">{log.answer} ❌ ใช้ตัวอักษรไม่ครบ</p> 
            {/if}
         {/if}
   </div>
   </div>
   
   {#if isFinished}
      <div>
         <a href="/puzzles/spellingbee/{Math.floor(Math.random()*numPuzzles)}">
            <div class="btn btn-primary">สุ่มข้อใหม่</div>
         </a>
      </div>
   {/if}
</div>

<!-- Put this part before </body> tag -->
<input type="checkbox" id="submit-modal" class="modal-toggle"/>
<!-- svelte-ignore a11y-label-has-associated-control -->
<label class="modal cursor-pointer w-screen" class:modal-open={openModal}>
   <label class="modal-box relative" for="">
      <h3 class="text-xl font-bold p-2">เจอคำศัพท์ประจำวันแล้ว 🎉</h3>
      <p>ใช้เวลาทั้งหมด {timeString}</p>
      <div class="flex flex-row justify-center gap-4">
         <div class="btn btn-outline btn-error" on:click={()=>openModal = false} >ปิด</div>
      </div>
   </label>
</label>

<style>
	@keyframes pos-x-wiggle {
		0% {
			transform: translateX(0px);
		}
		20% {
			transform: translateX(10px);
		}
		40% {
			transform: translateX(-10px);
		}
		60% {
			transform: translateX(5px);
		}
		80% {
			transform: translateX(-5px);
		}
		100% {
			transform: translateX(0px);
		}
	}
	.wiggle {
		animation-duration: 0.5s;
		animation-fill-mode: both;
		animation-name: pos-x-wiggle;
		animation-play-state: running;
	}
</style>