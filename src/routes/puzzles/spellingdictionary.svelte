<script lang="ts">
	import { wordDatabase } from '$lib/data/puzzles/spelling/words';
	import { 
		ArrowLeftIcon, 
		SearchIcon, 
		BookOpenIcon, 
		CheckCircleIcon, 
		XCircleIcon,
		ChevronLeftIcon,
		ChevronRightIcon
	} from 'svelte-feather-icons';
	
	let searchQuery = '';
	let wordTypeFilter: 'all' | 'native' | 'loan' = 'all';
	let showExplanations = false;
	
	// Pagination state
	let currentPage = 1;
	const itemsPerPage = 12;
	
	$: filteredWords = wordDatabase.filter(word => {
		const matchesSearch = word.correct.includes(searchQuery) || 
			word.incorrect.some(w => w.includes(searchQuery))
		
		const matchesType = wordTypeFilter === 'all' || 
			(wordTypeFilter === 'loan' && word.isLoanWord) || 
			(wordTypeFilter === 'native' && !word.isLoanWord);
			
		return matchesSearch && matchesType;
	});

	// Reset page on search or filter change
	$: if (searchQuery || wordTypeFilter) {
		currentPage = 1;
	}

	$: totalPages = Math.ceil(filteredWords.length / itemsPerPage);
	$: paginatedWords = filteredWords.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
</script>

<svelte:head>
	<title>Code Breaker | รายชื่อคำศัพท์ที่มักสะกดผิด 📚</title>
	<meta name="description" content="รวมคำที่มักสะกดผิดบ่อยในภาษาไทย" />
</svelte:head>

<div class="flex flex-col gap-6 w-full max-w-4xl mx-auto px-4 select-none pb-12 text-center">
	<!-- Main navigation header -->
	<header class="w-full flex items-center justify-between border-b border-base-300 pb-4 mb-2">
		<a href="/puzzles/spellingquiz" class="btn btn-outline btn-sm gap-2">
			<ArrowLeftIcon size="14" />
			กลับไปหน้าเกม
		</a>
		
		<div class="badge badge-accent badge-outline font-bold tracking-wider py-3">
			Word list
		</div>
	</header>

	<div class="flex flex-col gap-8 py-4">
		
		<div class="flex flex-col items-center text-center gap-4">
			<div class="avatar placeholder">
				<div class="w-16 h-16 rounded-2xl bg-neutral text-primary flex items-center justify-center shadow-xl">
					<BookOpenIcon size="28" />
				</div>
			</div>
			<h1 class="text-3xl md:text-4xl font-extrabold tracking-tight">
				รายชื่อคำศัพท์ที่มักสะกดผิด
			</h1>
			<p class="text-sm opacity-80 max-w-2xl leading-relaxed mx-auto">
				รวบรวม {wordDatabase.length} คำในภาษาไทยที่มักสะกดผิด พร้อมระบบค้นหา
			</p>
		</div>

		<!-- Search Bar -->
		<div class="relative w-full max-w-2xl mx-auto">
			<div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
				<SearchIcon class="opacity-55" size="18" />
			</div>
			<input 
				type="text" 
				bind:value={searchQuery}
				placeholder="ค้นหาคำศัพท์... (พิมพ์คำที่ถูก หรือคำที่ผิด)"
				class="input input-bordered w-full pl-12 py-6 text-sm shadow-xl"
			/>
		</div>

		<!-- Filters and Options -->
		<div class="flex flex-col md:flex-row items-center justify-between gap-4 w-full bg-neutral text-neutral-content p-4 rounded-2xl shadow-lg">
			<!-- Word Type Filter -->
			<div class="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
				<span class="text-xs font-bold opacity-80 flex-shrink-0">คัดกรองคำศัพท์:</span>
				<div class="btn-group w-full sm:w-auto justify-center">
					<button 
						on:click={() => wordTypeFilter = 'all'} 
						class="btn btn-xs sm:btn-sm {wordTypeFilter === 'all' ? 'btn-active btn-primary' : 'btn-ghost'}"
					>
						ทั้งหมด ({wordDatabase.length})
					</button>
					<button 
						on:click={() => wordTypeFilter = 'native'} 
						class="btn btn-xs sm:btn-sm {wordTypeFilter === 'native' ? 'btn-active btn-primary' : 'btn-ghost'}"
					>
						คำบาลี-สันสกฤต ({wordDatabase.filter(w => !w.isLoanWord).length})
					</button>
					<button 
						on:click={() => wordTypeFilter = 'loan'} 
						class="btn btn-xs sm:btn-sm {wordTypeFilter === 'loan' ? 'btn-active btn-primary' : 'btn-ghost'}"
					>
						คำทับศัพท์ ({wordDatabase.filter(w => w.isLoanWord).length})
					</button>
				</div>
			</div>

			<!-- Show Explanations Toggle -->
			<div class="form-control">
				<label class="label cursor-pointer gap-3">
					<span class="label-text font-bold text-neutral-content opacity-85 text-xs">แสดงหมายเหตุ:</span> 
					<input type="checkbox" class="toggle toggle-primary" bind:checked={showExplanations} />
				</label>
			</div>
		</div>

		
		<!-- Pagination controls -->
		{#if totalPages > 1}
			<div class="flex items-center justify-center">
				<div class="btn-group">
					<button 
						on:click={() => currentPage = Math.max(1, currentPage - 1)}
						disabled={currentPage === 1}
						class="btn btn-sm btn-outline"
					>
						<ChevronLeftIcon size="16" />
					</button>
					
					{#each Array(totalPages) as _, i}
						{@const pageNum = i + 1}
						{#if pageNum === 1 || pageNum === totalPages || Math.abs(currentPage - pageNum) <= 1}
							<button 
								on:click={() => currentPage = pageNum}
								class="btn btn-sm {currentPage === pageNum ? 'btn-active btn-primary' : 'btn-outline'}"
							>
								{pageNum}
							</button>
						{:else if pageNum === 2 || pageNum === totalPages - 1}
							<button class="btn btn-sm btn-disabled opacity-60">...</button>
						{/if}
					{/each}

					<button 
						on:click={() => currentPage = Math.min(totalPages, currentPage + 1)}
						disabled={currentPage === totalPages}
						class="btn btn-sm btn-outline"
					>
						<ChevronRightIcon size="16" />
					</button>
				</div>
			</div>
		{/if}

		<!-- Dictionary List -->
		<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
			{#each paginatedWords as word}
				<div class="card bg-neutral text-neutral-content border border-base-300 hover:border-primary transition-all duration-300 hover:-translate-y-1 hover:shadow-xl p-5 flex flex-col gap-4 group">
					
					<div class="flex items-start justify-between text-left">
						<!-- Correct Spelling -->
						<div class="flex flex-col gap-1">
							<span class="text-sm opacity-60 font-bold uppercase tracking-widest flex items-center gap-1">
								<CheckCircleIcon size="20" class="text-success" />
							</span>
							<span class="text-2xl font-black text-primary group-hover:text-success transition-colors">
								{word.correct}
							</span>
						</div>
						
						<!-- Incorrect Spelling -->
						<div class="flex flex-col items-end gap-1">
							<span class="text-sm opacity-60 font-bold uppercase tracking-widest flex items-center gap-1">
								<XCircleIcon size="20" class="text-error" />
							</span>
							<span class="text-lg font-bold opacity-60 line-through decoration-error/50 group-hover:text-error transition-colors">
								{#each word.incorrect as incorrectVariant}
									{incorrectVariant.trim()} <br>
								{/each}
							</span>
						</div>
					</div>

					<div class="flex items-center justify-between border-t border-base-300/30 pt-3">
						<span class="badge badge-sm badge-outline {
							word.isLoanWord ? 'badge-warning' : 'badge-primary'
						}">
							{word.isLoanWord ? 'คำทับศัพท์' : 'คำบาลี-สันสกฤต'}
						</span>
					</div>

					{#if showExplanations && word.explanation}
						<div class="divider my-0"></div>

						<div class="text-xs leading-relaxed opacity-95 bg-base-100 p-2.5 rounded-xl border border-base-200 text-left">
							<b class="text-primary">หมายเหตุ:</b> {word.explanation}
						</div>
					{/if}
				</div>
			{/each}

			{#if filteredWords.length === 0}
				<div class="col-span-full py-12 flex flex-col items-center justify-center opacity-60">
					<SearchIcon size="32" class="mb-4" />
					<p class="text-sm font-bold">ไม่พบคำศัพท์ที่ตรงกับการค้นหา "{searchQuery}"</p>
					<button on:click={() => { searchQuery = ''; wordTypeFilter = 'all'; }} class="mt-4 text-xs link link-primary">ล้างการค้นหาและตัวกรอง</button>
				</div>
			{/if}
		</div>

		<!-- Pagination controls -->
		{#if totalPages > 1}
			<div class="flex items-center justify-center gap-2 mt-8">
				<div class="btn-group">
					<button 
						on:click={() => currentPage = Math.max(1, currentPage - 1)}
						disabled={currentPage === 1}
						class="btn btn-sm btn-outline"
					>
						<ChevronLeftIcon size="16" />
					</button>
					
					{#each Array(totalPages) as _, i}
						{@const pageNum = i + 1}
						{#if pageNum === 1 || pageNum === totalPages || Math.abs(currentPage - pageNum) <= 1}
							<button 
								on:click={() => currentPage = pageNum}
								class="btn btn-sm {currentPage === pageNum ? 'btn-active btn-primary' : 'btn-outline'}"
							>
								{pageNum}
							</button>
						{:else if pageNum === 2 || pageNum === totalPages - 1}
							<button class="btn btn-sm btn-disabled opacity-60">...</button>
						{/if}
					{/each}

					<button 
						on:click={() => currentPage = Math.min(totalPages, currentPage + 1)}
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
				<a href="https://dictionary.orst.go.th/" target="_blank" rel="noopener noreferrer" class="card bg-neutral text-neutral-content border border-base-300 hover:border-primary p-4 flex flex-col gap-1 transition-all">
					<span class="text-primary font-bold text-sm">พจนานุกรม ฉบับราชบัณฑิตยสถาน</span>
					<span class="text-[10px] opacity-60 break-all">dictionary.orst.go.th</span>
				</a>
				<a href="https://th.wiktionary.org/wiki/ภาคผนวก:คำที่มักเขียนผิด" target="_blank" rel="noopener noreferrer" class="card bg-neutral text-neutral-content border border-base-300 hover:border-primary p-4 flex flex-col gap-1 transition-all">
					<span class="text-primary font-bold text-sm">วิกิพจนานุกรม (คำที่มักเขียนผิด)</span>
					<span class="text-[10px] opacity-60 break-all">th.wiktionary.org</span>
				</a>
			</div>
		</div>

	</div>
</div>
