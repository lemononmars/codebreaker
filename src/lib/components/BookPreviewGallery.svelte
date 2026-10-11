<script lang="ts">
	export let bookTitle: string;
	export let language: 'en' | 'th' = 'en';
	export let pages: Array<{ src: string; page?: number; backCover?: boolean; cover?: boolean }>;
	let viewport: HTMLDivElement;
	let selected = 0;
	let zoomDialog: HTMLDialogElement;
	let zoomedIndex: number | null = null;

	function showPage(index: number) {
		const wrappedIndex = (index + pages.length) % pages.length;
		viewport.scrollTo({ left: wrappedIndex * viewport.clientWidth, behavior: 'smooth' });
	}

	function updateSelected() {
		selected = Math.round(viewport.scrollLeft / viewport.clientWidth);
	}

	function openZoom(index: number) {
		zoomedIndex = index;
		zoomDialog.showModal();
	}
</script>

<section aria-label={language === 'en' ? 'Book image gallery' : 'ภาพตัวอย่างหนังสือ'}>
	<div class="relative">
		<div
			bind:this={viewport}
			on:scroll={updateSelected}
			class="flex overflow-x-auto snap-x snap-mandatory rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
			role="region"
			aria-label={language === 'en' ? 'Scroll through book images' : 'เลื่อนดูภาพหนังสือ'}
			tabindex="0"
		>
			{#each pages as preview, index}
				{@const label = preview.cover
					? language === 'en'
						? 'Cover'
						: 'ปกหน้า'
					: preview.backCover
					? language === 'en'
						? 'Back cover'
						: 'ปกหลัง'
					: language === 'en'
					? `Page ${preview.page}`
					: `หน้า ${preview.page}`}
				<figure class="w-full min-w-0 shrink-0 snap-center">
					<button
						type="button"
						on:click={() => openZoom(index)}
						class="block w-full rounded-xl cursor-zoom-in focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
						aria-label={`${bookTitle} — ${label} (${
							language === 'en' ? 'view full size' : 'ดูขนาดเต็ม'
						})`}
					>
						<img
							src={preview.src}
							alt={`${bookTitle} — ${label}`}
							class="w-full h-[480px] max-h-[70vh] object-contain"
							loading={preview.cover ? 'eager' : 'lazy'}
							decoding="async"
						/>
					</button>
					<figcaption class="mt-2 text-sm font-medium text-center">{label}</figcaption>
				</figure>
			{/each}
		</div>
		<button
			type="button"
			class="btn btn-circle btn-sm bg-base-200 text-base-content border-0 absolute left-2 top-[min(240px,35vh)] -translate-y-1/2 opacity-40 hover:opacity-90 focus-visible:opacity-100"
			aria-label={language === 'en' ? 'Previous image' : 'ภาพก่อนหน้า'}
			on:click={() => showPage(selected - 1)}>◀</button
		>
		<button
			type="button"
			class="btn btn-circle btn-sm bg-base-200 text-base-content border-0 absolute right-2 top-[min(240px,35vh)] -translate-y-1/2 opacity-40 hover:opacity-90 focus-visible:opacity-100"
			aria-label={language === 'en' ? 'Next image' : 'ภาพถัดไป'}
			on:click={() => showPage(selected + 1)}>▶</button
		>
	</div>
	<div class="flex flex-wrap justify-center gap-2 mt-3">
		{#each pages as _, index}
			<button
				type="button"
				class="btn btn-xs {selected === index ? 'btn-primary text-primary-content' : 'btn-ghost'}"
				aria-label={language === 'en' ? `Image ${index + 1}` : `ภาพที่ ${index + 1}`}
				aria-current={selected === index ? 'true' : undefined}
				on:click={() => showPage(index)}>{index + 1}</button
			>
		{/each}
	</div>
</section>

<dialog
	bind:this={zoomDialog}
	class="w-[min(96vw,1000px)] max-w-none max-h-[94vh] p-0 rounded-2xl bg-base-100 text-base-content overflow-auto shadow-2xl"
	aria-label={`${bookTitle} — ${language === 'en' ? 'zoomed image' : 'ภาพขยาย'}`}
	on:close={() => (zoomedIndex = null)}
	on:click={(event) => {
		if (event.target === zoomDialog) zoomDialog.close();
	}}
	on:keydown={(event) => {
		if (event.key === 'Escape') zoomDialog.close();
	}}
>
	<div
		class="sticky top-0 flex items-center justify-between gap-4 p-3 bg-base-100 text-base-content border-b border-base-content/20"
	>
		<p class="text-sm font-bold">{bookTitle}</p>
		<button
			type="button"
			class="btn btn-sm btn-circle btn-ghost shrink-0"
			aria-label={language === 'en' ? 'Close zoom' : 'ปิดภาพขยาย'}
			on:click={() => zoomDialog.close()}>×</button
		>
	</div>
	{#if zoomedIndex !== null}
		<img src={pages[zoomedIndex].src} alt={bookTitle} class="w-full h-auto" />
	{/if}
</dialog>

<style>
	[role='region'],
	dialog {
		scrollbar-width: none;
		-ms-overflow-style: none;
	}

	[role='region']::-webkit-scrollbar,
	dialog::-webkit-scrollbar {
		display: none;
	}

	dialog::backdrop {
		background: rgb(0 0 0 / 75%);
	}
</style>
