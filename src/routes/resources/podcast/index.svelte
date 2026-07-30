<script lang="ts">
  import { podcasts } from '$lib/data/podcasts';
</script>

<svelte:head>
  <title>Codebreaker Podcast | Codebreaker Thailand</title>
  <meta name="description" content="รายการพอดแคสต์เกี่ยวกับเกมไขปริศนา Escape Rooms บอร์ดเกม และการแก้รหัส โดย Codebreaker Thailand" />
</svelte:head>

<div class="px-4 py-8 max-w-4xl mx-auto">
  <header class="mb-8 text-center">
    <span class="badge badge-primary font-bold uppercase tracking-wider mb-2">
      Codebreaker Media
    </span>
    <h1 class="text-3xl lg:text-4xl font-extrabold text-primary my-2">Codebreaker Podcast</h1>
    <p class="text-slate-400 text-sm lg:text-base">พอดแคสต์รวมทุกเรื่องราวเกี่ยวกับเกมไขปริศนา บอร์ดเกม Escape Rooms และ Logic Challenges</p>
  </header>

  <div class="grid gap-6 text-left">
    {#each podcasts as item}
      <a 
        href="/resources/podcast/{item.id}"
        class="card bg-base-200 hover:bg-base-300 border border-base-300 hover:border-primary/50 transition duration-200 shadow-xl group overflow-hidden md:flex-row rounded-2xl"
      >
        <figure class="md:w-1/3 aspect-video md:aspect-auto shrink-0 bg-slate-950 overflow-hidden">
          <img 
            src={item.thumbnail || `https://img.youtube.com/vi/${item.youtubeId}/hqdefault.jpg`} 
            alt={item.title} 
            class="w-full h-full object-cover group-hover:scale-105 transition duration-300"
          />
        </figure>

        <div class="card-body p-6 md:w-2/3">
          <div class="flex items-center justify-between gap-4 mb-2">
            <span class="badge badge-accent font-semibold text-xs">
              EPISODE {item.epNumber}
            </span>
            <span class="text-xs text-slate-400 font-mono">{item.duration} นาที</span>
          </div>

          <h2 class="text-xl font-bold text-slate-100 group-hover:text-primary transition my-1">
            {item.title}
          </h2>

          <p class="text-sm text-slate-300 mb-4 line-clamp-2">
            {item.summaryText}
          </p>

          <div class="flex items-center justify-between text-xs text-slate-400 pt-3 border-t border-base-300">
            <span>🎙️ {item.hosts}</span>
          </div>
        </div>
      </a>
    {/each}
  </div>
</div>
