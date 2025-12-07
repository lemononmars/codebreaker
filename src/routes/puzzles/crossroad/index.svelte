<script lang=ts>
   import crossroad from '$lib/utils/crossroad_word.json'
   import {wordLength} from '$lib/utils/thaiwords'
   import {PlayCircleIcon, ArrowDownIcon, ArrowRightIcon, RefreshCcwIcon, HelpCircleIcon, CheckSquareIcon, PlusCircleIcon, SkipForwardIcon} from 'svelte-feather-icons'
   import {onMount} from 'svelte'

   import {fly, fade} from 'svelte/transition'

   let answer: string = ''
   let score: number = 0
   
   let isCoolingDown: boolean = false
   const wordListLength: number = Object.keys(crossroad).length

   let currentAnswer: string = ''
   let currentAnswerIndex: number = 0
   let currentPre: string[] = []
   let currentPost: string[] = []
   let currentPreClues: string[] = ['', '']
   let currentPostClues: string[] = ['', '']
   let answerHistory: string[][] = []
   let correctHistory: boolean[] = []

   let numCorrect: number = 0
   let numSkip: number = 0
   let numHint: number = 0

   onMount(async()=>{

   })

   function getNewAnswer() {
      // search until we get a word with the desired length
      do {
         currentAnswerIndex = Math.floor(Math.random()*wordListLength)
         currentAnswer = Object.keys(crossroad)[currentAnswerIndex]
      } while(answerLength > 0 && wordLength(currentAnswer) != answerLength)

      const {pre, post} = Object.values(crossroad)[currentAnswerIndex]
      currentPre = pre
      currentPost = post
      getNewClues()
      answer = ''
      answerHistory.push(
        [...currentPostClues, currentAnswer, ...currentPreClues]
      )
   }

   function getHints () {
      score --
      numHint ++
      getNewClues()
   }

   function getNewClues () {
      currentPreClues = getRandomClues(currentPre)
      currentPostClues = getRandomClues(currentPost)
   }

   function getRandomClues(list: string[]) {
      const l = list.length
      const clue1 = Math.floor(Math.random()*l)
      const clue2 = Math.floor(Math.random()*(l-1))
      return [
         list[clue1],
         list[(clue1 + clue2 + 1) % l]
      ]
   }

   function handleKeyPress(event: KeyboardEvent) {
      if(isPlaying) return

      if(event.code == "Enter")
         if(isFinished) 
            isFinished = false
         else if(!openModal)
            play()
      if(event.code == "Space")
         openModal = !openModal
      else
         return
	}

   function handleAnswer (event: KeyboardEvent) {
      if(isCoolingDown) return

      if(answer === currentAnswer) {
         isWiggle = true
         isCoolingDown = true
         correctHistory.push(true)
         numCorrect++
         score += 10
         time += 1000 // compensation for animation
         setTimeout(()=>{
            isWiggle = false
            isCoolingDown = false
            getNewAnswer()
         }, 1000)
         return
      }

      switch(event.code) {
         case "ArrowUp":
         case "ArrowDown":
            getHints()
            break
         case "ArrowRight":
            giveUp()
            break
      }
   }

   function giveUp() {
      if(isCoolingDown) return

      isCoolingDown = true
      correctHistory.push(false)
      answer = currentAnswer
      numSkip ++
      setTimeout(()=>{
         isCoolingDown = false
         getNewAnswer()
      }, 1000)
   }

   // game settings
   let isTimed: boolean = true
   let answerLength: number = 0 // 0 for any, 2,3,4
   
   let time: number = 0
   let maxTime: number = 60000 // 1 minute 
   
   $: timeString = (Math.floor(time/1000)) + ' วินาที'
   let timer: string|number|NodeJS.Timeout|undefined
   let isWiggle: boolean = false
   let isPlaying: boolean = false
   let isFinished: boolean = false
   let openModal: boolean = false

   function play() {
      isPlaying = true
      clearInterval(timer)
      score = 0
      numCorrect = 0
      numSkip = 0
      numHint = 0
      answerHistory = []
      correctHistory = []
      getNewAnswer()
      if(isTimed) {
         time = maxTime
         timer = setInterval(()=>{
            time -= 100
            if(time <= 0) {
               isPlaying = false
               isFinished = true
               clearInterval(timer)
               time = 0
            }
         }, 100)
      }
      else {
         time = 0
         timer = setInterval(()=>time += 100, 100)
      }
   }

   function focusOnMount(node: any) {
		node.focus();
	}
</script>

<svelte:body on:keypress={handleKeyPress}/>

<div class="flex flex-col gap-2 h-full lg:h-auto relative overflow-y-clip lg:overflow-y-none">
   <h1>Crossroad</h1>
   <div class="sticky top-0 lg:top-20 flex flex-col z-20 bg-info-content lg:h-auto py-20">
      {#if isPlaying}
         {#key currentAnswer}
            <div class="relative w-96 h-96 mx-auto">
               <!-- top left -->
               {#if isTimed}
                  <div class="radial-progress absolute top-0 left-0 w-20 m-4 text-sm"
                     style="--value:{100*time/maxTime};"
                  >{timeString}</div>
               {:else}
                  <div class="btn btn-outline flex flex-col absolute top-0 left-0 w-20 h-20 m-4 text-sm gap-2" 
                     on:click={()=>{isFinished = true, isPlaying = false}} 
                     on:keypress={()=>{}}
                  >
                     <div>{timeString}</div>
                     <div>หยุด</div>
                  </div>
               {/if}
               <!-- top middle -->
               <div class="btn btn-xl absolute top-0 inset-x-0 m-auto w-24 h-24 text-3xl text-info" 
                  in:fly={{y:10, delay:100}}
               >{currentPostClues[0]}</div>
               <!-- top right -->
               <div class="btn btn-xl btn-outline absolute top-0 right-0 m-4 w-20 h-20 text-3xl"
               >{score}</div>
               <!-- center left -->
               <div class="btn btn-xl absolute left-0 inset-y-0 m-auto w-24 h-24 text-3xl text-info" 
                  in:fly={{x:10, delay:200}}
               >{currentPostClues[1]}</div>
               <!-- center middle -->
               <input 
                  class="input absolute input-bordered text-center text-3xl h-32 w-32 transition-colors inset-x-0 inset-y-0 m-auto" 
                  class:input-success={answer === currentAnswer}
                  class:text-success={answer === currentAnswer}
                  class:wiggle={isWiggle}
                  type="text"
                  use:focusOnMount
                  bind:value={answer}
                  on:keyup={handleAnswer}>
               <!-- center right -->
               <div class="btn btn-xl absolute text-3xl right-0 inset-y-0 m-auto w-24 h-24 text-accent"
                  in:fly={{x:-10, delay:300}}>{currentPreClues[0]}</div>
               <!-- bottom left -->
               <div class="btn btn-success absolute bottom-0 right-0 w-20 h-20 m-4" on:click={getHints} on:keypress={()=>{}}><kbd class="kbd kbd-sm bg-base-content">▲</kbd><kbd class="kbd kbd-sm bg-base-content">▼</kbd> เปลี่ยนคำใบ้</div>
               <!-- bottom middle -->
               <div class="btn btn-xl absolute text-3xl bottom-0 inset-x-0 m-auto w-24 h-24 text-accent"
                  in:fly={{y:-10, delay:400}}>{currentPreClues[1]}</div>
               <!-- bottom right -->
               <div class="btn btn-warning absolute bottom-0 left-0 w-20 h-20 m-4" on:click={giveUp} on:keypress={()=>{}}> <kbd class="kbd bg-base-content">▶︎</kbd> ข้าม </div>
               
               <ArrowDownIcon class="absolute top-1/4 m-auto inset-x-0 translate-y-1" size=20/>
               <ArrowDownIcon class="absolute bottom-1/4 m-auto inset-x-0 -translate-y-1" size=20/>
               <ArrowRightIcon class="absolute m-auto inset-y-0 left-1/4 translate-x-1" size=20/>
               <ArrowRightIcon class="absolute m-auto inset-y-0 right-1/4 -translate-x-1" size=20/>
            </div>
         {/key}
      {:else if isFinished}
         <div class="stats stats-vertical lg:stats-horizontal shadow p-2 overflow-clip">
            <div class="stat" in:fly={{y:10, delay:1000}}>
               <div class="stat-figure text-info">
                  <PlusCircleIcon size=20/>
               </div>
               <div class="stat-title">คะแนนรวม</div>
               <div class="stat-value text-info">{score}</div>
            </div>
            <div class="stat" in:fly={{y:10, delay:2000}}>
               <div class="stat-figure text-primary">
                  <CheckSquareIcon size=20/>
               </div>
               <div class="stat-title">ตอบถูก</div>
               <div class="stat-value text-primary">{numCorrect} ข้อ</div>
            </div>
            <div class="stat" in:fly={{y:10, delay:3000}}>
               <div class="stat-figure text-error">
                  <SkipForwardIcon size=20/>
               </div>
               <div class="stat-title">ข้าม</div>
               <div class="stat-value text-error">{numSkip} ข้อ</div>
            </div>
            <div class="stat" in:fly={{y:10, delay:4000}}>
               <div class="stat-figure text-warning">
                  <HelpCircleIcon size=20/>
               </div>
               <div class="stat-title">จำนวนคำใบ้</div>
               <div class="stat-value text-warning">{numHint}</div>
            </div>
         </div>
         
         <h2 class="mx-auto my-4" in:fly={{y:10, delay:5000}}>
            {#if score < 20}
               เกรด F: 😢 ลองใหม่นะ 
            {:else if score < 40}
               เกรด D: 😤 เริ่มจับทางได้แล้ว
            {:else if score < 60}
               เกรด C: 🧐 เครื่องกำลังมาแล้ว
            {:else if score < 80}
               เกรด B: 🤩 ร.ร.ร.เร็ว!
            {:else if score < 100}
               เกรด A: 🤯 สุดยอดไปเลย!
            {:else if score < 120}
               เกรด S: 😱 รับข้าน้อยเป็นศิษย์ด้วย!
            {:else}
               เกรด SS+: 🤖 คุณไม่ใช่คนแล้ว!!!
            {/if}
         </h2>
         <div class="btn btn-primary btn-xl btn-wide h-20 mx-auto m-4 gap-4"
            on:click={()=>{isFinished = false}} 
            on:keypress={()=>{isFinished = false}}
            in:fade={{delay:6000, duration:1000}}
         >
            <kbd class="kbd kbd-sm bg-base-content">Enter</kbd> เล่นอีกครั้ง <RefreshCcwIcon size=40/>
         </div>

         <div class="grid grid-cols-6 w-full lg:w-1/2 h-32 mx-auto overflow-y-auto justify-center"
         in:fade={{delay:7000, duration:1000}}>
            {#each answerHistory as h, index}
               <div>{correctHistory[index]? '✅':'❌'}</div>
               <div class="text-sm">
                  {h[0]},{h[1]}
               </div>
               <div>></div>
               <div class="text-sm font-bold">{h[2]}</div>
               <div>></div>
               <div class="text-sm">
                  {h[3]},{h[4]}
               </div>
            {/each}
         </div>
      {:else}
         <div class="btn btn-primary btn-xl btn-wide h-20 mx-auto m-4 text-3xl gap-4" 
            on:click={play} on:keypress={play}>
            <kbd class="kbd kbd-sm bg-base-content">Enter</kbd> เริ่ม <PlayCircleIcon size=40/>
         </div>
         <div class="mx-auto flex flex-row justify-center items-center gap-8 m-4">
            <div>ตั้งค่า</div>
            <div class="flex flex-col justify-center">
               <h3 class="text-warning">ความยาวคำตอบ</h3>
               <div class="flex flex-row">
               {#each [0,2,3,4] as len}
                  <div class="form-control">
                     <label class="label cursor-pointer flex flex-col gap-1">
                        <input type="radio" name="answerLength" class="radio checked:bg-warning" value={len} bind:group={answerLength} class:checked={len==0}/>
                        <span class="label-text">{len == 0 ? 'รวม':len}</span> 
                     </label>
                  </div>
                  {/each}
               </div>
            </div>
            <div class="flex flex-col justify-center">
               <h3 class="text-info">เวลาจำกัด</h3>
               <div class="flex flex-row">
                  {#each [true, false] as time}
                     <div class="form-control">
                        <label class="label cursor-pointer flex flex-col gap-1">
                           <input type="radio" name="timed" class="radio checked:bg-info" value={time} bind:group={isTimed} class:checked={time}/>
                           <span class="label-text">{time? '1 นาที':'ไม่จำกัด'}</span> 
                        </label>
                     </div>
                  {/each}
               </div>
            </div>
         </div>

         <div class="btn btn-info mx-auto w-48 gap-2" 
            on:click={()=>openModal = true} on:keypress={()=>{}}>
            <kbd class="kbd kbd-sm bg-base-content">Space</kbd> <span>วิธีเล่น</span>
            <HelpCircleIcon size=20/>
         </div>
      {/if}
   </div>
</div>

<!-- Put this part before </body> tag -->
<input type="checkbox" id="submit-modal" class="modal-toggle"/>
<!-- svelte-ignore a11y-label-has-associated-control -->
<label class="modal cursor-pointer w-screen" class:modal-open={openModal} on:click={()=>openModal = false} on:keypress={()=>{}}>
   <label class="modal-box relative bg-base" for="">
      <div class="text text-base-content m-4">
         <h1>วิธีเล่น</h1>
         พิมพ์คำลงในช่องตรงกลาง เพื่อให้ช่องที่ติดกันอ่านตามลูกศรได้คำ 4 คำ เช่น

         <div class="relative w-48 h-32 mx-auto border p-4 m-4">
            <div class="absolute top-0 inset-x-0 m-auto">กึ่ง</div>
            <div class="absolute top-1/2 left-0 -translate-y-1/2 px-2">คน</div>
            <div class="absolute top-1/2 right-0 -translate-y-1/2 px-2">คน</div>
            <div class="absolute bottom-0 inset-x-0 m-auto">วัน</div>
            <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"><span class="border w-4 h-4">????</span></div>
            <ArrowDownIcon class="absolute top-1/4 m-auto inset-x-0 -translate-y-2" size=20/>
            <ArrowDownIcon class="absolute bottom-1/4 m-auto inset-x-0 translate-y-2" size=20/>
            <ArrowRightIcon class="absolute m-auto inset-y-0 left-1/4 translate-x-0" size=20/>
            <ArrowRightIcon class="absolute m-auto inset-y-0 right-1/4 -translate-x-0" size=20/>
         </div>

         ถ้าใส่คำว่า<span class="underline">กลาง</span>ลงไปในช่อง จะเกิดเป็นคำว่า
         
         <br>
         - กึ่งกลาง คนกลาง กลางคน และกลางวัน -
         <br>
         
         ฉะนั้นคำตอบคือ <span class="underline">กลาง</span>

         <br><br>
         คำตอบมี 2-4 ช่องอักษร และเป็นคำในพจนานุกรม

         <div class="btn btn-info mx-auto w-48 gap-2 m-4" 
            on:click={()=>openModal = false} on:keypress={()=>{}}>
            <kbd class="kbd kbd-sm bg-base-content">Space</kbd> <span>เข้าใจแล้ว!</span>
            <CheckSquareIcon size=20/>
         </div>
      </div>
   </label>
</label>

<style>
	@keyframes pos-x-wiggle {
		0% {
			transform: rotate(0);
		}
		25% {
			transform: rotate(10deg);
		}
		50% {
			transform: rotate(0);
		}
		75% {
			transform: rotate(-10deg);
		}
		100% {
			transform: rotate(0);
		}
	}
	.wiggle {
		animation-duration: 0.5s;
		animation-fill-mode: both;
		animation-name: pos-x-wiggle;
		animation-play-state: running;
	}
</style>