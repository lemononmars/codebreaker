<script lang=ts>
   const imgUrlPrefix: string = 'https://raw.githubusercontent.com/lemononmars/codebreaker/main/src/lib/images/product/'

   const productDescriptions = [
      {
         url: 'carddeck/vol1',
         title: "Puzzle Card Deck Vol.1",
         description: "ปริศนาการ์ด 18 ใบ",
         imgUrl: 'puzzle_card_deck_vol1.jpg',
      },
      {
         url: 'logiccontestbook',
         title: "Code Breaker Logic Puzzle Contest Book",
         description: "ปริศนาจากงาน Logic Puzzle Contest",
         imgUrl: 'logic_puzzle_contest_book_cover.jpg'
      },
   ]
</script>

<svelte:head>
   <title>Code Breaker | Shop</title>
</svelte:head>

<h1>Shop</h1>

<div class="grid lg:grid-cols-1 px-2 gap-2">
   {#each productDescriptions as p}
      <a href="/shop/{p.url}">
         <div class="flex flex-row gap-2 border-2 shadow-lg shadow-white hover:scale-105 transition ease-in-out hover:bg-info-content m-4">
            <div>
               <img src="{imgUrlPrefix + p.imgUrl}" class="h-32 aspect-square object-cover" alt="img">
            </div>
            <div class="text-center grid content-between">
               <h1 class="capitalize">{p.title}</h1>
               <div class="mb-2">
                  <p class="text-md text-left">{p.description}</p>
               </div>
            </div>
         </div>
      </a>
   {/each}
</div>