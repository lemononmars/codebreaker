<script lang=ts>

   import {CreditCardIcon, UsersIcon, ClockIcon, ShoppingCartIcon, HomeIcon, GitBranchIcon, PlayCircleIcon, ShuffleIcon, ChevronDownIcon, ChevronUpIcon} from 'svelte-feather-icons'
   import TrainTrial from '$lib/images/traintrial.png'
   import {onMount} from 'svelte'
   import {fly} from 'svelte/transition'

   import {MRTLogo, BTSLogo, CBLogo, GameLabLogo} from '$lib/images/index'

   let element: any
   let intersecting: boolean = false

   let answer: string = ''
   let response: string = ''
   let solved: boolean = false
   let solution = 'หอม'
   let openModal = false

   function checkAnswer() {
      if(solved) return

      if(answer.toUpperCase() === solution){
         solved = true
         openModal = true
         response = answer + ' เป็นคำตอบที่ถูกต้อง! 🎉'
      }
      else
         response = answer + ' ยังไม่ถูก'
      answer = ''
   }

   function handleKeyPress(event: KeyboardEvent) {
		if (event.code != "Enter") return;
		checkAnswer()
	}

   function scrollTop() {
		window.scroll({ top: 0, behavior: 'smooth' });
	}

   onMount(() => {
      if (!element) return

      const observer = new IntersectionObserver((entries) => {
         intersecting = entries.some((entry) => entry.isIntersecting)

         if (intersecting) observer.disconnect()
      })

      observer.observe(element)

      return () => observer.disconnect()
   })

   const sections = [
      {id: 'introduction', title: 'แนะนำ'},
      {id: 'info', title: 'ข้อมูล'},
      {id: 'purchase', title: 'วิธีซื้อ'},
      {id: 'howtoplay', title: 'วิธีเล่น'},
      {id: 'test', title: 'ทดลอง'},
      {id: 'faq', title: 'คำถามที่พบบ่อย'},
      {id: 'partners', title: 'สนับสนุนโดย'},
   ]
</script>

<h1>Bangkok Train Puzzle Adventure</h1>

<div class="flex justify-center">
   <iframe width="560" height="315" src="https://www.youtube.com/embed/AGT3JNh4F0w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

{intersecting}

<div class="bg-success-content py-4 my-4" id="introduction">
   <h2>แนะนำ</h2>
</div>

<p class="whitespace-pre-wrap">
Thank you for always riding with us, the Tokyo Metro.
This year too, we have set puzzles around Tokyo for you.

The puzzles will pull you out into the streets.
The destinations are places you’ve never been, food you’ve never tried…
You will encounter lots of “first times”.

Sometimes, you will have to solve puzzles
without knowing where you’re headed.
Will you embark on an adventure of unknown excitement and discovery?

Now then, let's see you solve the puzzles we have set out for you.
The best way to get around is, of course, with Tokyo Metro.
</p>

<div class="bg-success-content py-4 my-4" id="info" bind:this={element}>
   <h2>ข้อมูล</h2>
</div>

{#if intersecting}
   <div class="flex flex-row justify-around" transition:fly={{y:100, delay: 1000, duration: 500}}>
      <div class="flex flex-col border-2 rounded-xl justify-center w-32 h-32 gap-2">
         <h3>ราคา</h3>
         <CreditCardIcon size=2x class="mx-auto"/>
         <p>1000 บาท</p>
      </div>
      <div class="flex flex-col border-2 rounded-xl justify-center w-32 h-32 gap-2">
         <h3>จำนวนคนเล่น</h3>
         <UsersIcon size=2x class="mx-auto"/>
         <p>1 คนขึ้นไป</p>
      </div>
      <div class="flex flex-col border-2 rounded-xl justify-center w-32 h-32 gap-2">
         <h3>เวลา</h3>
         <ClockIcon size=2x class="mx-auto"/>
         <p>ไม่จำกัด</p>
      </div>
   </div>
{/if}

<div class="text-center mt-12">
   <h3>ระยะเวลาจัดกิจกรรม</h3>
   <p>1 มกราคม 2566 - 28 กุมภาพันธ์ 2566</p>
</div>

<div class="bg-success-content py-4 my-4" id="purchase">
   <h2>วิธีซื้อ</h2>
</div>
<div class="flex flex-row justify-around">
   <div class="flex flex-col border-2 rounded-xl justify-center w-72 h-32 gap-2">
      <h3>1. ออนไลน์</h3>
      <ShoppingCartIcon size=2x class="mx-auto"/>
      <p>ที่นี่</p>
   </div>
   <div class="flex flex-col border-2 rounded-xl justify-center w-72 h-32 gap-2">
      <h3>2. Board Game Station at BTS Ari </h3>
      <HomeIcon size=2x class="mx-auto"/>
      <a href="//https://www.facebook.com/BoardGameStationAri" target="_blank">ซื้อได้ที่สถานีเลย</a>
   </div>
</div>

<div class="flex justify-center my-8">
<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15499.97127004578!2d100.5444229!3d13.7793064!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x58a5e5d8c311a552!2sBoard%20Game%20Station%20at%20BTS%20Ari!5e0!3m2!1sen!2sth!4v1658925631059!5m2!1sen!2sth" width="600" height="250" style="border:0;" allowfullscreen={true} loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="shop map"></iframe>
</div>

<div class="bg-success-content py-4 my-4" id="howtoplay">
   <h2>วิธีเล่น</h2>
</div>

<div class="grid grid-cols-2 place-items-center">
   <div class="flex flex-col justify-center w-72 h-72 gap-2">
      <h3>1. ซื้อชุดปริศนา</h3>
      <ShoppingCartIcon size=5x class="mx-auto"/>
      <p><a href="./train#purchase">ที่นี่</a></p>
   </div>
   <div class="flex flex-col justify-center w-72 h-72 gap-2">
      <h3>2. แก้ปริศนา</h3>
      <GitBranchIcon size=5x class="mx-auto"/>
      <p>แก้โจทย์ให้สำเร็จ จะได้คำตอบเป็นสถานีรถไฟที่ต้องเดินทางไป</p>
   </div>
   <div class="flex flex-col justify-center w-72 h-72 gap-2">
      <h3>3. ขึ้นรถไฟรอบกรุงเทพ</h3>
      <ShuffleIcon size=5x class="mx-auto"/>
      <p>ไปสถานีใหม่ เพื่อแก้ปริศนาและไปยังสถานีต่อไปเรื่อย ๆ</p>
   </div>
   <div class="flex flex-col justify-center w-72 h-72 gap-2">
      <h3>4. ส่งคำตอบสุดท้าย</h3>
      <PlayCircleIcon size=5x class="mx-auto"/>
      <p>แก้ปริศนาสุดท้ายและส่งคำตอบในหน้านี้</p>
   </div>
</div>

<div class="bg-success-content py-4 my-4" id="test">
   <h2>ทดลองปริศนา</h2>
</div>

<img src={TrainTrial} alt="trial puzzle" class="p-4 w-full lg:w-2/3 aspect-auto mx-auto"/>

<p>คำตอบเป็นภาษาไทย มี 3 ตัวอักษร</p>

<div class="input-group w-72 mx-auto">
   <input class="input input-bordered" type="text" bind:value={answer} on:keydown={handleKeyPress}>
   <div class="btn btn-primary " on:click={checkAnswer}>ตรวจคำตอบ</div>
</div>
{#if solved}
   <p class="text-success">{response}</p>
{:else}
   <p class="text-error">{response}</p>
{/if}

<div class="bg-success-content py-4 my-4 px-4" id="faq">
   <h2>คำถามที่พบบ่อย</h2>
</div>

   <div tabindex="0" class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
      <div class="collapse-title text-xl font-medium bg-info-content">
        เล่นข้ามวันได้หรือเปล่า?
      </div>
      <div class="collapse-content"> 
        <p class="my-4">ได้! แต่เพื่อประสบการณ์ท่องเที่ยวที่ต่อเนื่องและราบรื่น เราแนะนำให้เล่นจบภายในวันเดียวกัน</p>
      </div>
   </div>

   <div tabindex="0" class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
      <div class="collapse-title text-xl font-medium bg-info-content">
        หาคำใบ้ได้ที่ไหน?
      </div>
      <div class="collapse-content"> 
        <p>ที่แห่งนี้นั้นมีความรักอยู่</p>
      </div>
   </div>

   <div tabindex="0" class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
      <div class="collapse-title text-xl font-medium bg-info-content">
        เล่นซ้ำได้หรือเปล่า
      </div>
      <div class="collapse-content"> 
        <p class="my-4">ได้ แต่เพื่อ?</p>
      </div>
   </div>

   <div tabindex="0" class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
      <div class="collapse-title text-xl font-medium bg-info-content">
        เหมือนจะได้ของไม่ครบ ทำอย่างไรดี
      </div>
      <div class="collapse-content"> 
        <p class="my-4">ติดต่อที่ร้าน</p>
      </div>
   </div>


<div class="bg-success-content py-4 my-4" id="partners">
   <h2>ผู้สนับสนุน</h2>
</div>
<div class="flex flex-row justify-around">
   <img src={CBLogo} alt="cb logo" class="w-20 aspect-square"/>
   <a href="//https://metro.bemplc.co.th/MRT-System-Map" target="_blank"><img src={MRTLogo} alt="mrt logo" class="w-20 aspect-square"/></a>
   <a href="//https://www.bts.co.th/" target="_blank"><img src={BTSLogo} alt="bts logo" class="w-20 aspect-square"/></a>
   <a href="//https://http://www.gamelabthailand.com/" target="_blank"><img src={GameLabLogo} alt="bts logo" class="w-20 aspect-square"/></a>
</div>

<div class="fixed bottom-0 right-0 m-4 hover:-translate-y-2 transition-transform">
   <div class="btn btn-circle bg-primary" on:click={scrollTop}>
      <ChevronUpIcon size=3x/>
   </div>
</div>

<div class="hidden lg:block fixed left-0 top-1/2 -translate-y-1/2 m-4">
   <div class="bg-base-100 border-2 border-base-content flex flex-col p-2 text-left"> 
      {#each sections as s}
         <a href="./train#{s.id}">{s.title}</a>
      {/each}
   </div>
</div>

<!-- just a footer-->
<div class="h-20"></div>

<input type="checkbox" id="submit-modal" class="modal-toggle"/>
<!-- svelte-ignore a11y-label-has-associated-control -->
<label class="modal cursor-pointer w-screen" class:modal-open={openModal} on:click={()=>openModal = false}>
   <label class="modal-box relative" for="">
      <h3 class="text-xl font-bold m-2">"{solution}" เป็นคำตอบที่ถูกต้อง! 🎉</h3>
      <div class="btn btn-block btn-outline" on:click={()=>openModal = false}>เย่!</div>
   </label>
</label>

<style>
   h2 {
      margin: top 2rem
   }

   html {
      scroll-behavior: smooth;
   }
</style>
