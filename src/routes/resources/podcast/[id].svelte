<script lang="ts">
  import type { PodcastEpisodeData } from '$lib/types/podcast';

  export let episode: PodcastEpisodeData;
  let showTimestamps = false;
</script>

<svelte:head>
  <title>{episode.title} | Codebreaker Podcast</title>
  <meta name="description" content={episode.summaryText} />
  <style>
    html {
      scroll-behavior: smooth;
    }
  </style>
</svelte:head>

<div class="px-2 sm:px-4 py-8 max-w-4xl mx-auto">

  <header class="mb-6 text-center">
    <h1 class="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-primary my-2">
      {episode.title}
    </h1>
    <div class="flex flex-wrap items-center justify-center gap-3 text-xs md:text-sm font-semibold my-4">
      <span class="badge badge-primary">EPISODE {episode.epNumber}</span>
      <span class="text-slate-400">•</span>
      <span class="text-amber-400">ความยาว {episode.duration} นาที</span>
      <span class="text-slate-400">•</span>
      <span class="text-slate-300">🎙️ ผู้ดำเนินรายการ: {episode.hosts}</span>
    </div>
  </header>

  <!-- Floating Side Navigation (Visible on lg screens, hidden on phones) -->
  <aside class="fixed hidden lg:block left-4 xl:left-8 top-28 z-30 bg-base-200/95 backdrop-blur-md border border-base-300/90 rounded-2xl p-4 shadow-2xl w-48 xl:w-56 text-left">
    <h3 class="text-xs font-bold uppercase tracking-wider text-primary mb-3 flex items-center gap-2">
      <span>📌</span> สารบัญเนื้อหา
    </h3>
    <nav class="flex flex-col gap-2 text-xs xl:text-sm font-medium">
      <a href="#video-clip" class="hover:text-primary transition-colors flex items-center gap-2 py-1 text-slate-300 hover:no-underline">
        <span>🎥</span> คลิปวิดีโอ
      </a>
      <a href="#summary" class="hover:text-primary transition-colors flex items-center gap-2 py-1 text-slate-300 hover:no-underline">
        <span>💡</span> สรุปภาพรวม
      </a>
      <a href="#transcript" class="hover:text-primary transition-colors flex items-center gap-2 py-1 text-slate-300 hover:no-underline">
        <span>📝</span> บทถอดข้อความ
      </a>
      {#if episode.summaryTable && episode.summaryTable.length > 0}
        <a href="#summary-table" class="hover:text-primary transition-colors flex items-center gap-2 py-1 text-slate-300 hover:no-underline">
          <span>📊</span> ตารางสรุปประเภทเกม
        </a>
      {/if}
      {#if episode.references && episode.references.length > 0}
        <a href="#references" class="hover:text-primary transition-colors flex items-center gap-2 py-1 text-slate-300 hover:no-underline">
          <span>🔗</span> แหล่งอ้างอิงภายนอก
        </a>
      {/if}
    </nav>
  </aside>

  <!-- Main Article Content Mobile-Friendly Layout -->
  <div class="space-y-8 text-left my-6">

    <!-- Full Size Clip Embed -->
    <section id="video-clip" class="scroll-mt-24">
      <div class="w-full aspect-video rounded-2xl overflow-hidden shadow-2xl bg-base-300 border border-base-content/10">
        <iframe 
          class="w-full h-full"
          src="https://www.youtube.com/embed/{episode.youtubeId}" 
          title={episode.title}
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen>
        </iframe>
      </div>
    </section>

    <hr class="border-base-300" />

    <!-- Episode Summary -->
    <section id="summary" class="scroll-mt-24">
      <h2 class="text-xl md:text-2xl font-bold text-secondary mb-4 flex items-center gap-2">
        <span>💡</span> สรุปภาพรวมประจำตอน
      </h2>
      <p class="text-slate-300 leading-relaxed text-base md:text-lg mb-4">
        {episode.summaryText}
      </p>
      {#if episode.summaryItems && episode.summaryItems.length > 0}
        <ul class="list-disc list-inside space-y-2 text-slate-300 text-base md:text-lg leading-relaxed">
          {#each episode.summaryItems as item}
            <li>
              <strong class="text-white">{item.name}</strong>: {item.description}
              {#if item.link}
                <a href={item.link} target="_blank" rel="noopener" class="text-primary hover:underline ml-1">อ่านเพิ่มเติม</a>
              {/if}
            </li>
          {/each}
        </ul>
      {/if}
    </section>

    <hr class="border-base-300" />

    <!-- Full Transcript -->
    <section id="transcript" class="scroll-mt-24">
      <div class="flex items-center justify-between my-2 border-b border-base-300 pb-2">
        <h2 class="text-xl md:text-2xl font-bold text-secondary flex items-center gap-2">
          <span>📝</span> บทถอดข้อความ
        </h2>
        <label class="label cursor-pointer gap-2 bg-base-200 px-3 py-1.5 rounded-lg border border-base-300">
          <span class="label-text text-sm font-semibold text-slate-200">แสดงเวลา</span>
          <input type="checkbox" bind:checked={showTimestamps} class="toggle toggle-primary toggle-sm" />
        </label>
      </div>

      <div class="space-y-4 text-base md:text-lg leading-relaxed my-6">
        {#each episode.transcript as line}
          <p>
            {#if showTimestamps && line.time}
              <span class="{line.speaker === 'Zoom' ? 'text-cyan-400' : line.speaker === 'First' ? 'text-amber-400' : 'text-primary'} font-bold font-mono text-sm mr-1">
                [{line.time}]
              </span>
            {/if}
            <span class="{line.speaker === 'Zoom' ? 'text-cyan-400' : line.speaker === 'First' ? 'text-amber-400' : 'text-accent'} font-bold">
              {line.speaker}:
            </span> 
            <span class="{line.speaker === 'First' ? 'text-amber-100' : 'text-slate-100'}">
              {line.text}
            </span>
          </p>
        {/each}
      </div>
    </section>

    <!-- Summary Table -->
    {#if episode.summaryTable && episode.summaryTable.length > 0}
      <hr class="border-base-300" />
      <section id="summary-table" class="scroll-mt-24">
        <h2 class="text-xl md:text-2xl font-bold text-secondary mb-4 flex items-center gap-2">
          <span>📊</span> ตารางสรุปประเภทและคำศัพท์เกมปริศนา
        </h2>
        <div class="rounded-2xl border border-base-300 bg-base-200 p-3 sm:p-5 shadow-lg my-4">
          <table class="w-full text-left border-collapse text-xs sm:text-sm md:text-base whitespace-normal break-words">
            <thead>
              <tr class="text-primary border-b border-base-300">
                <th class="py-3 px-2 w-1/4 align-top font-bold">ประเภท / คำศัพท์</th>
                <th class="py-3 px-2 w-2/5 align-top font-bold">คำอธิบายและลักษณะเฉพาะ</th>
                <th class="py-3 px-2 w-7/20 align-top font-bold">ตัวอย่างเกม / ภาพยนตร์ / สถานที่</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-base-300 text-slate-300">
              {#each episode.summaryTable as row}
                <tr>
                  <td class="py-3 px-2 align-top font-bold text-white break-words">{row.category}</td>
                  <td class="py-3 px-2 align-top leading-relaxed break-words">{row.description}</td>
                  <td class="py-3 px-2 align-top leading-relaxed break-words">
                    {#each row.examples as ex, idx}
                      {#if typeof ex === 'string'}
                        {ex}{#if idx < row.examples.length - 1}, {/if}
                      {:else}
                        <a href={ex.link} target="_blank" rel="noopener" class="text-primary hover:underline">{ex.name}</a>{#if idx < row.examples.length - 1}, {/if}
                      {/if}
                    {/each}
                  </td>
                </tr>
              {/each}
            </tbody>
          </table>
        </div>
      </section>
    {/if}

    <!-- External References -->
    {#if episode.references && episode.references.length > 0}
      <hr class="border-base-300" />
      <section id="references" class="scroll-mt-24">
        <h2 class="text-xl md:text-2xl font-bold text-secondary mb-4 flex items-center gap-2">
          <span>🔗</span> แหล่งอ้างอิงภายนอก
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm md:text-base text-slate-300">
          {#each episode.references as cat}
            <div class="bg-base-200 p-4 rounded-xl border border-base-300">
              <h3 class="font-bold text-primary mb-2">{cat.category}</h3>
              <ul class="space-y-1.5 list-disc list-inside">
                {#each cat.links as link}
                  <li>
                    <a href={link.url} target="_blank" rel="noopener" class="hover:underline text-slate-200">
                      {link.title}
                    </a>
                  </li>
                {/each}
              </ul>
            </div>
          {/each}
        </div>
      </section>
    {/if}

  </div>
</div>
