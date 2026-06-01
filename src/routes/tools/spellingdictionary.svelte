<script lang="ts">
	import { wordDatabase } from '$lib/data/puzzles/spelling/words';
	import {
		SearchIcon,
		BookOpenIcon,
		CheckCircleIcon,
		XCircleIcon,
		ChevronLeftIcon,
		ChevronRightIcon,
		GridIcon,
		ListIcon
	} from 'svelte-feather-icons';

	let searchQuery = '';
	let wordTypeFilter: 'all' | 'native' | 'loan' = 'all';
	let showExplanations = false;
	let viewMode: 'card' | 'table' = 'card';
	let letterFilter = '';

	// Pagination state
	let currentPage = 1;
	const itemsPerPage = 24;

	// Extract the first consonant (ignore leading vowels เ แ โ ใ ไ)
	function getFirstConsonant(word: string) {
		const firstChar = word[0];
		if (['เ', 'แ', 'โ', 'ใ', 'ไ'].includes(firstChar) && word.length > 1) {
			return word[1];
		}
		return firstChar;
	}

	// Get unique starting letters from database, sorted by Unicode
	$: startingLetters = [...new Set(wordDatabase.map((w) => getFirstConsonant(w.correct)))].sort();

	$: filteredWords = wordDatabase.filter((word) => {
		const matchesSearch =
			searchQuery === '' ||
			word.correct.includes(searchQuery) ||
			word.incorrect.some((w) => w.includes(searchQuery));

		const matchesType =
			wordTypeFilter === 'all' ||
			(wordTypeFilter === 'loan' && word.isLoanWord) ||
			(wordTypeFilter === 'native' && !word.isLoanWord);

		const matchesLetter = letterFilter === '' || getFirstConsonant(word.correct) === letterFilter;

		return matchesSearch && matchesType && matchesLetter;
	});

	// Reset page on any filter change
	$: if (searchQuery || wordTypeFilter || letterFilter || viewMode) {
		currentPage = 1;
	}

	$: totalPages = Math.ceil(filteredWords.length / itemsPerPage);
	$: paginatedWords = filteredWords.slice(
		(currentPage - 1) * itemsPerPage,
		currentPage * itemsPerPage
	);

	function clearFilters() {
		searchQuery = '';
		wordTypeFilter = 'all';
		letterFilter = '';
	}
</script>

<svelte:head>
	<title>Code Breaker | พจนานุกรมคำสะกด 📚</title>
	<meta name="description" content="รวมคำที่มักสะกดผิดบ่อยในภาษาไทย พร้อมระบบค้นหาและตัวกรอง" />
</svelte:head>

<div class="flex flex-col gap-0 w-full max-w-4xl mx-auto px-4 pb-12 select-none">
	<!-- แหล่งความรู้ Navigation Bar -->
	<nav class="w-full border-b border-base-300 mb-6 pt-2">
		<div class="flex items-center gap-3 py-2 flex-wrap">
			<!-- Back button -->
			<a
				href="/puzzles/spellingquiz"
				class="btn btn-outline btn-xs gap-1.5 font-bold flex-shrink-0"
			>
				ทดสอบการสะกดคำ
			</a>
		</div>
	</nav>

	<!-- Page Header -->
	<div class="flex flex-col items-center text-center gap-3 mb-6">
		<div
			class="w-16 h-16 rounded-2xl bg-neutral text-primary flex items-center justify-center shadow-xl border border-base-300"
		>
			<BookOpenIcon size="28" />
		</div>
		<h1 class="text-3xl md:text-4xl font-extrabold tracking-tight">พจนานุกรมคำสะกด</h1>
		<p class="text-sm opacity-80 max-w-2xl leading-relaxed mx-auto">
			รวบรวม <span class="font-black text-primary">{wordDatabase.length}</span> คำในภาษาไทยที่มักสะกดผิด
			พร้อมระบบค้นหาและตัวกรอง
		</p>
	</div>

	<!-- Search Bar -->
	<div class="relative w-full max-w-2xl mx-auto mb-4">
		<div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
			<SearchIcon class="opacity-55" size="18" />
		</div>
		<input
			type="text"
			bind:value={searchQuery}
			placeholder="ค้นหาคำศัพท์... (พิมพ์คำที่ถูก หรือคำที่ผิด)"
			class="input input-bordered w-full pl-12 py-6 text-sm shadow-xl"
		/>
		{#if searchQuery}
			<button
				on:click={() => (searchQuery = '')}
				class="absolute inset-y-0 right-0 pr-4 flex items-center text-base-content/40 hover:text-base-content transition-colors text-lg"
			>
				✕
			</button>
		{/if}
	</div>

	<!-- Filter & View Controls -->
	<div class="flex flex-col gap-3 w-full mb-4">
		<!-- Top Row: word type + show explanations + view mode toggle -->
		<div
			class="flex flex-col md:flex-row items-center justify-between gap-3 w-full bg-neutral text-neutral-content p-4 rounded-2xl shadow-lg border border-base-300"
		>
			<!-- Word Type Filter -->
			<div class="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
				<span class="text-xs font-bold opacity-80 flex-shrink-0">ประเภท:</span>
				<div class="btn-group w-full sm:w-auto justify-center">
					<button
						on:click={() => (wordTypeFilter = 'all')}
						class="btn btn-xs sm:btn-sm {wordTypeFilter === 'all'
							? 'btn-active btn-primary'
							: 'btn-ghost'}"
					>
						ทั้งหมด ({wordDatabase.length})
					</button>
					<button
						on:click={() => (wordTypeFilter = 'native')}
						class="btn btn-xs sm:btn-sm {wordTypeFilter === 'native'
							? 'btn-active btn-primary'
							: 'btn-ghost'}"
					>
						บาลี-สันสกฤต ({wordDatabase.filter((w) => !w.isLoanWord).length})
					</button>
					<button
						on:click={() => (wordTypeFilter = 'loan')}
						class="btn btn-xs sm:btn-sm {wordTypeFilter === 'loan'
							? 'btn-active btn-primary'
							: 'btn-ghost'}"
					>
						ทับศัพท์ ({wordDatabase.filter((w) => w.isLoanWord).length})
					</button>
				</div>
			</div>

			<!-- Right side: show explanations + view mode -->
			<div class="flex items-center gap-4 flex-shrink-0">
				<div class="form-control">
					<label class="label cursor-pointer gap-2 p-0">
						<span class="label-text font-bold text-neutral-content opacity-85 text-xs"
							>หมายเหตุ:</span
						>
						<input
							type="checkbox"
							class="toggle toggle-primary toggle-sm"
							bind:checked={showExplanations}
						/>
					</label>
				</div>
				<!-- View Mode Toggle -->
				<div class="flex items-center gap-1 bg-base-100/10 rounded-lg p-1">
					<button
						on:click={() => (viewMode = 'card')}
						title="มุมมองการ์ด"
						class="p-1.5 rounded-md transition-all duration-200 {viewMode === 'card'
							? 'bg-primary text-primary-content shadow'
							: 'opacity-60 hover:opacity-100'}"
					>
						<GridIcon size="15" />
					</button>
					<button
						on:click={() => (viewMode = 'table')}
						title="มุมมองตาราง"
						class="p-1.5 rounded-md transition-all duration-200 {viewMode === 'table'
							? 'bg-primary text-primary-content shadow'
							: 'opacity-60 hover:opacity-100'}"
					>
						<ListIcon size="15" />
					</button>
				</div>
			</div>
		</div>

		<!-- Letter Filter Bar -->
		<div
			class="w-full bg-neutral text-neutral-content p-3 rounded-2xl shadow border border-base-300"
		>
			<div class="flex items-center gap-2 mb-2.5">
				<span class="text-xs font-bold opacity-80">กรองตามตัวอักษรแรก:</span>
				{#if letterFilter !== ''}
					<span class="badge badge-primary badge-sm font-bold">
						เริ่มต้นด้วย "{letterFilter}"
					</span>
				{/if}
			</div>
			<div class="flex flex-wrap gap-1.5">
				<button
					on:click={() => (letterFilter = '')}
					class="btn btn-xs {letterFilter === ''
						? 'btn-primary'
						: 'btn-ghost opacity-60 hover:opacity-100'} font-bold min-w-[3.5rem]"
				>
					ทั้งหมด
				</button>
				{#each startingLetters as letter}
					<button
						on:click={() => (letterFilter = letter === letterFilter ? '' : letter)}
						class="btn btn-xs min-w-[2.25rem] font-bold {letterFilter === letter
							? 'btn-primary'
							: 'btn-ghost opacity-60 hover:opacity-100'}"
					>
						{letter}
					</button>
				{/each}
			</div>
		</div>
	</div>

	<!-- Results Count + Clear -->
	<div class="flex items-center justify-between mb-4 px-1">
		<span class="text-xs opacity-70 font-bold">
			แสดง <span class="text-primary font-black">{filteredWords.length}</span> คำ
			{#if filteredWords.length !== wordDatabase.length}
				จาก {wordDatabase.length} คำ
			{/if}
		</span>
		{#if searchQuery || wordTypeFilter !== 'all' || letterFilter !== ''}
			<button on:click={clearFilters} class="text-xs link link-primary font-bold">
				ล้างตัวกรองทั้งหมด ✕
			</button>
		{/if}
	</div>

	<!-- Pagination (top) -->
	{#if totalPages > 1}
		<div class="flex items-center justify-center mb-4">
			<div class="btn-group">
				<button
					on:click={() => (currentPage = Math.max(1, currentPage - 1))}
					disabled={currentPage === 1}
					class="btn btn-sm btn-outline"
				>
					<ChevronLeftIcon size="16" />
				</button>
				{#each Array(totalPages) as _, i}
					{@const pageNum = i + 1}
					{#if pageNum === 1 || pageNum === totalPages || Math.abs(currentPage - pageNum) <= 1}
						<button
							on:click={() => (currentPage = pageNum)}
							class="btn btn-sm {currentPage === pageNum
								? 'btn-active btn-primary'
								: 'btn-outline'}"
						>
							{pageNum}
						</button>
					{:else if pageNum === 2 || pageNum === totalPages - 1}
						<button class="btn btn-sm btn-disabled opacity-60">...</button>
					{/if}
				{/each}
				<button
					on:click={() => (currentPage = Math.min(totalPages, currentPage + 1))}
					disabled={currentPage === totalPages}
					class="btn btn-sm btn-outline"
				>
					<ChevronRightIcon size="16" />
				</button>
			</div>
		</div>
	{/if}

	<!-- ─── CARD VIEW ────────────────────────────────────────────────── -->
	{#if viewMode === 'card'}
		<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
			{#each paginatedWords as word}
				<div
					class="card bg-neutral text-neutral-content border border-base-300 hover:border-primary transition-all duration-300 hover:-translate-y-1 hover:shadow-xl p-5 flex flex-col gap-4 group"
				>
					<div class="flex items-start justify-between text-left">
						<!-- Correct Spelling -->
						<div class="flex flex-col gap-1">
							<span
								class="text-[10px] opacity-60 font-bold uppercase tracking-widest flex items-center gap-1"
							>
								<CheckCircleIcon size="14" class="text-success" /> ถูก
							</span>
							<span
								class="text-2xl font-black text-primary group-hover:text-success transition-colors"
							>
								{word.correct}
							</span>
						</div>

						<!-- Incorrect Spelling(s) -->
						<div class="flex flex-col items-end gap-1">
							<span
								class="text-[10px] opacity-60 font-bold uppercase tracking-widest flex items-center gap-1"
							>
								ผิด <XCircleIcon size="14" class="text-error" />
							</span>
							<span
								class="text-base font-bold opacity-60 line-through decoration-error/50 group-hover:text-error group-hover:opacity-80 transition-colors text-right leading-snug"
							>
								{#each word.incorrect as incorrectVariant}
									{incorrectVariant.trim()}<br />
								{/each}
							</span>
						</div>
					</div>

					<div class="flex items-center justify-between border-t border-base-300/30 pt-3">
						<span
							class="badge badge-sm badge-outline {word.isLoanWord
								? 'badge-warning'
								: 'badge-primary'}"
						>
							{word.isLoanWord ? 'คำทับศัพท์' : 'คำบาลี-สันสกฤต'}
						</span>
					</div>

					{#if showExplanations && word.explanation}
						<div class="divider my-0" />
						<div
							class="text-xs leading-relaxed opacity-95 bg-base-100 p-2.5 rounded-xl border border-base-200 text-left whitespace-pre-line break-words"
						>
							<b class="text-primary">หมายเหตุ:</b>
							{word.explanation.replace(/- /g, '\n- ').trim()}
						</div>
					{/if}
				</div>
			{/each}

			{#if filteredWords.length === 0}
				<div class="col-span-full py-16 flex flex-col items-center justify-center opacity-60">
					<SearchIcon size="40" class="mb-4" />
					<p class="text-base font-bold">ไม่พบคำศัพท์ที่ตรงกับการค้นหา</p>
					{#if searchQuery}
						<p class="text-sm mt-1 opacity-70">"{searchQuery}"</p>
					{/if}
					<button on:click={clearFilters} class="mt-4 text-sm link link-primary font-bold">
						ล้างการค้นหาและตัวกรองทั้งหมด
					</button>
				</div>
			{/if}
		</div>

		<!-- ─── TABLE VIEW ───────────────────────────────────────────────── -->
	{:else}
		<div class="w-full rounded-2xl border border-base-300 shadow-lg overflow-hidden">
			<table class="table table-zebra table-fixed w-full break-words">
				<thead class="bg-neutral text-neutral-content">
					<tr>
						<th class="text-xs font-black uppercase tracking-wider opacity-50 w-12">#</th>
						<th class="text-xs font-black uppercase tracking-wider text-success w-1/4"
							>✅ คำที่ถูก</th
						>
						<th class="text-xs font-black uppercase tracking-wider text-error w-1/4">❌ คำที่ผิด</th
						>
						{#if showExplanations}
							<th class="text-xs font-black uppercase tracking-wider opacity-70">หมายเหตุ</th>
						{/if}
					</tr>
				</thead>
				<tbody>
					{#if filteredWords.length === 0}
						<tr>
							<td colspan="5" class="text-center py-12 opacity-60">
								<div class="flex flex-col items-center gap-3">
									<SearchIcon size="32" />
									<p class="font-bold">ไม่พบคำศัพท์ที่ตรงกับการค้นหา</p>
									<button on:click={clearFilters} class="text-sm link link-primary font-bold">
										ล้างตัวกรอง
									</button>
								</div>
							</td>
						</tr>
					{:else}
						{#each paginatedWords as word, i}
							<tr class="hover:bg-primary/5 transition-colors">
								<td class="text-xs opacity-40 font-mono text-center">
									{(currentPage - 1) * itemsPerPage + i + 1}
								</td>
								<td>
									<span class="text-lg font-black text-primary">{word.correct}</span>
								</td>
								<td>
									<div class="flex flex-col gap-0.5">
										{#each word.incorrect as incorrectVariant}
											<span class="text-sm font-bold text-error line-through opacity-70">
												{incorrectVariant}
											</span>
										{/each}
									</div>
								</td>
								<td class="text-xs max-w-xs opacity-80 leading-relaxed whitespace-pre-line break-words">
									{word.explanation ? word.explanation.replace(/- /g, '\n- ').trim() : ''}
								</td>
							</tr>
						{/each}
					{/if}
				</tbody>
			</table>
		</div>
	{/if}

	<!-- Pagination (bottom) -->
	{#if totalPages > 1}
		<div class="flex items-center justify-center gap-2 mt-8">
			<div class="btn-group">
				<button
					on:click={() => (currentPage = Math.max(1, currentPage - 1))}
					disabled={currentPage === 1}
					class="btn btn-sm btn-outline"
				>
					<ChevronLeftIcon size="16" />
				</button>
				{#each Array(totalPages) as _, i}
					{@const pageNum = i + 1}
					{#if pageNum === 1 || pageNum === totalPages || Math.abs(currentPage - pageNum) <= 1}
						<button
							on:click={() => (currentPage = pageNum)}
							class="btn btn-sm {currentPage === pageNum
								? 'btn-active btn-primary'
								: 'btn-outline'}"
						>
							{pageNum}
						</button>
					{:else if pageNum === 2 || pageNum === totalPages - 1}
						<button class="btn btn-sm btn-disabled opacity-60">...</button>
					{/if}
				{/each}
				<button
					on:click={() => (currentPage = Math.min(totalPages, currentPage + 1))}
					disabled={currentPage === totalPages}
					class="btn btn-sm btn-outline"
				>
					<ChevronRightIcon size="16" />
				</button>
			</div>
		</div>
	{/if}

	<!-- References Section -->
	<div class="mt-16 mb-8 w-full border-t border-base-300 pt-10">
		<h3 class="text-lg font-bold text-left mb-4 flex items-center gap-2 text-primary">
			🔗 แหล่งอ้างอิง
		</h3>
		<div class="grid sm:grid-cols-2 gap-4">
			<a
				href="https://dictionary.orst.go.th/"
				target="_blank"
				rel="noopener noreferrer"
				class="card bg-neutral text-neutral-content border border-base-300 hover:border-primary p-4 flex flex-col gap-1 transition-all"
			>
				<span class="text-primary font-bold text-sm">พจนานุกรม ฉบับราชบัณฑิตยสถาน</span>
				<span class="text-[10px] opacity-60 break-all">dictionary.orst.go.th</span>
			</a>
			<a
				href="https://th.wiktionary.org/wiki/ภาคผนวก:คำที่มักเขียนผิด"
				target="_blank"
				rel="noopener noreferrer"
				class="card bg-neutral text-neutral-content border border-base-300 hover:border-primary p-4 flex flex-col gap-1 transition-all"
			>
				<span class="text-primary font-bold text-sm">วิกิพจนานุกรม (คำที่มักเขียนผิด)</span>
				<span class="text-[10px] opacity-60 break-all">th.wiktionary.org</span>
			</a>
		</div>
	</div>
</div>
