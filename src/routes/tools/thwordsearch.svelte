<script lang="ts">
	import { search, getFirstLetter } from '$lib/thwordsearch';
	import { slide } from 'svelte/transition';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import {
		SearchIcon,
		AlertOctagonIcon,
		AlertTriangleIcon,
		Share2Icon,
		BookIcon,
		ClockIcon,
		Maximize2Icon
	} from 'svelte-feather-icons';

	let input: string = $page.url.searchParams.get('q') || '';
	let query: string = input;
	let start: number = 0;
	//const atHomePage: boolean = (!query)? true: false
	let includeWiki: boolean = false;
	let queryResults: any = { valid: false, count: 0, results: [] };
	let loading: boolean = !!input;
	let revealHistory: boolean = false;
	let strict: boolean = true;
	let history: string[] = [];

	let activeWord = '';
	let toastTimeout: NodeJS.Timeout;

	function copyWord(word: string) {
		navigator.clipboard.writeText(word);
		activeWord = word;
		if (toastTimeout) clearTimeout(toastTimeout);
		toastTimeout = setTimeout(() => {
			activeWord = '';
		}, 3000);
	}

	let shareCopied = false;
	let shareTimeout: NodeJS.Timeout;

	function shareUrl() {
		const shareUrl = new URL(window.location.href);
		if (query) {
			shareUrl.searchParams.set('q', query);
		}
		navigator.clipboard.writeText(shareUrl.toString());

		shareCopied = true;
		if (shareTimeout) clearTimeout(shareTimeout);
		shareTimeout = setTimeout(() => {
			shareCopied = false;
		}, 3000);
	}

	let letter: string = '';
	let allFirstLetters: string[] = [];
	$: filteredResults =
		letter === ''
			? queryResults.results
			: queryResults.results.filter((r) => getFirstLetter(r) == letter);
	$: currentQueryResults = filteredResults.slice(
		start,
		start + Math.min(100, queryResults.count - start)
	);

	const url = 'https://codebreakerth.vercel.app/tool/thwordsearch';
	const title = 'Thai Word Search';
	const description = 'Pattern-matching in Thai language';
	const imageUrl = '';
	const gtagId = 'G-YTV7TZ3EMC';

	const examples = [
		['มีตัวอักษรในตำแหน่งที่กำหนด', 'ส..น', 'สงวน, สถาน, สุทัศน์, ...'],
		['ตัวอักษรบางตำแหน่งเป็นไปได้หลายแบบ', '[ใไโ]ก.', 'โกก, ไกร, ใกล้, ...'],
		['มีแต่ตัวอักษรที่กำหนด', '{บนมา}', 'มัน, นมนาน, บนบาน, ...'],
		['มีตัวอักษรที่กำหนด และตัวอักษรอื่นได้อีก 1 ตัว', '{บนมา}+1', 'รามา, สนามบิน, ขนานนาม, ...'],
		['ขึ้นต้นด้วย สับ', 'สับ*', 'สับไก, สับราง, สับปะรด,...'],
		['มีตัวอักษรเรียงกันตามลำดับ', '*ธ*ท*', 'กรีธาทัพ, ธรณีวิทยา, อิทธิบาท, ...'],
		['anagram ตัวอักษรทั้งหมด', '/กลม', 'กมล, มกุล, มีลูก, ...'],
		['anagram ตัวอักษรทั้งหมด และเพิ่มอีกกี่ตัวก็ได้', '/กะลา*', 'การละคร, เจาะลึก, เพาะปลูก, ...'],
		['มี 3-8 ตัวอักษร และมี ก ข ค', '3-8:/กขค*', 'ขนมครก, คณะลูกขุน, คุกเข่า, ...'],
		['มีอย่างน้อย 12 ตัวอักษร และมี ปลา', '12-:*ปลา*', 'กระต่ายแก่แม่ปลาช่อน, ...'],
		[
			'มี 7 ตัวอักษร มี ม อยู่ตำแหน่งที่ 3 และมี ส ะ',
			'7:..ม* & /สะ*',
			'สามัตถิยะ, เหมาะสม, อัสมิมานะ'
		],
		['มี 11 ตัวอักษร และไม่มีสระในบรรทัด', '11:/* & ^ใเแโไาำะฤา', 'กล้องจุลทรรศน์, ...'],
		['มี ฮ แต่ไม่ได้ขึ้นต้นด้วย ฮ', '/*ฮ & !ฮ*', 'เก๊กฮวย, นกฮูก, เฮ, ...'],
		['ขึ้นต้นด้วยไม้ม้วนหรือไม้มลาย', 'ใ* | ไ*', 'ไก, ใกล้, ไข, ใข, ...'],
		['ใช้ตัวแปร (A-Z) อ้างอิงข้อความเดียวกัน', 'AA', 'นานา, กก, ...'],
		['หาชุดคำที่สอดคล้องกันด้วยสมการ (;)', 'AB; BA', 'กมลา; มลาก, กู้เงิน; เงินกู้, ...'],
		['ใช้ตัวแปรสองตัวขึ้นไป', 'AาB; AะB', 'เอาใจ; เอะใจ, ...'],
		['หาพาลินโดรมความยาวเป็นเลขคู่', 'A~A', 'การราก, ...'],
		['หาพาลินโดรมความยาวเป็นเลขคี่', 'A.~A', 'กนก, ยาย, ทายาท, การกราก, ...']
	];

	function onKeypress(e: KeyboardEvent) {
		if (e.key === 'Enter') {
			e.preventDefault();
			submit();
		}
	}

	let timerInterval: NodeJS.Timeout;
	let searchTime = 0;
	let searchProgress = { count: 0 };
	let abortController: AbortController;

	function loadExample(ip: string) {
		input = ip;
		window.scrollTo({ top: 0, behavior: 'smooth' });
		submit();
	}

	async function submit() {
		if (!input) alert('ใส่คำก่อนสิเอ้อ!');
		else {
			query = input;
			start = 0;
			letter = '';
			loading = true;
			searchTime = 0;
			searchProgress.count = 0;
			if (!history.includes(query)) history = [...history, query];

			// Update the URL without reloading the page
			const url = new URL(window.location.href);
			url.searchParams.set('q', query);
			window.history.replaceState({}, '', url);

			if (abortController) abortController.abort();
			abortController = new AbortController();

			if (timerInterval) clearInterval(timerInterval);
			timerInterval = setInterval(() => {
				searchTime += 0.1;
				searchProgress = searchProgress;
			}, 100);

			try {
				queryResults = await search(
					query,
					includeWiki,
					abortController.signal,
					searchProgress,
					strict
				);

				allFirstLetters = [];
				if (queryResults.results.length > 0) {
					let latest = getFirstLetter(queryResults.results[0]);
					allFirstLetters.push(latest);

					for (var w of queryResults.results) {
						if (getFirstLetter(w) != latest) {
							latest = getFirstLetter(w);
							allFirstLetters.push(latest);
						}
					}
				}
			} catch (e: any) {
				console.error(e);
			} finally {
				clearInterval(timerInterval);
				loading = false;
			}
		}
	}

	onMount(() => {
		if (input) {
			submit();
		}
	});
</script>

<svelte:head>
	<title>{title} | Code Breaker</title>
	<meta name="description" content={description} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={url} />
	<meta property="og:type" content="website" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="flex flex-col justify-items-center text-center gap-2">
	<h1 class="text-2xl lg:text-3xl font-extrabold mb-2">Thai Word Search</h1>
	<div class="flex flex-col lg:flex-row m-auto">
		<div class="flex flex-row justify-center items-center gap-4">
			<input
				type="text"
				class="input input-bordered input-sm lg:input-md lg:text-xl"
				on:keypress={onKeypress}
				bind:value={input}
				placeholder="พิมพ์รูปแบบที่นี่"
			/>
			<div class="tooltip tooltip-bottom" data-tip="ค้นหา">
				<span
					on:click={submit}
					class="cursor-pointer text-primary hover:bg-primary/15 p-2 rounded-lg transition-all"
					role="button"
					tabindex="0"
				>
					<SearchIcon size="30" />
				</span>
			</div>

			<div class="tooltip tooltip-bottom" data-tip="วิธีใช้">
				<span
					on:click={() => {
						query = '';
						input = '';
					}}
					class="cursor-pointer text-info hover:bg-info/15 p-2 rounded-lg transition-all"
					role="button"
					tabindex="0"
				>
					<AlertOctagonIcon size="30" />
				</span>
			</div>

			<div class="relative inline-block">
				<div class="tooltip tooltip-bottom" data-tip="แชร์คำค้นหา">
					<span
						on:click={shareUrl}
						class="cursor-pointer text-accent hover:bg-accent/15 p-2 rounded-lg transition-all"
						role="button"
						tabindex="0"
					>
						<Share2Icon size="30" />
					</span>
				</div>
				{#if shareCopied}
					<div
						class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-success text-success-content rounded shadow-xl z-50 whitespace-nowrap text-sm font-bold"
						in:slide={{ duration: 200 }}
					>
						Copied!
						<div
							class="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-success rotate-45"
						/>
					</div>
				{/if}
			</div>
		</div>
		<div class="divider divider-horizontal mx-2" />
		<div class="flex flex-row justify-center mt-2 lg:mt-0 gap-4 items-center">
			<div class="tooltip tooltip-bottom" data-tip="นับอักษรบนล่าง">
				<label class="cursor-pointer flex items-center gap-1">
					<input
						type="checkbox"
						class="checkbox checkbox-sm checkbox-primary"
						bind:checked={strict}
					/>
					<span
						class="{strict ? 'text-primary' : 'opacity-50'} transition-colors font-bold text-lg"
					>
						<Maximize2Icon size="24" />
					</span>
				</label>
			</div>
			<div class="tooltip tooltip-bottom" data-tip="รวมหัวข้อใน Wikipedia">
				<label class="cursor-pointer flex items-center gap-1">
					<input type="checkbox" class="checkbox checkbox-sm" bind:checked={includeWiki} />
					<span class="{includeWiki ? 'text-primary' : 'opacity-50'} transition-colors">
						<BookIcon size="24" />
					</span>
				</label>
			</div>
			<div class="tooltip tooltip-bottom" data-tip="แสดงประวัติการค้นหา">
				<label class="cursor-pointer flex items-center gap-1">
					<input type="checkbox" class="checkbox checkbox-sm" bind:checked={revealHistory} />
					<span class="{revealHistory ? 'text-primary' : 'opacity-50'} transition-colors">
						<ClockIcon size="24" />
					</span>
				</label>
			</div>
		</div>
	</div>
	{#if revealHistory}
		<div
			class="flex flex-row-reverse flex-wrap-reverse border border-base-300 bg-base-100 rounded-box my-2 p-4 gap-2 justify-center w-full"
			in:slide={{ duration: 300 }}
			out:slide={{ duration: 300 }}
		>
			{#key history}
				{#if history.length > 0}
					<div>
						<button
							class="btn btn-sm btn-primary text-sm flex-auto"
							on:click={() => {
								history = [];
							}}>reset</button
						>
					</div>
					{#each history as h}
						<div>
							<button
								class="btn btn-secondary btn-outline text-xl flex-auto"
								on:click={() => {
									input = h;
									submit();
								}}>{h}</button
							>
						</div>
					{/each}
				{:else}
					<span class="text-sm">ยังไม่มีประวัติการค้นหา</span>
				{/if}
			{/key}
		</div>
	{/if}

	<div class="overflow-x-auto mx-auto mt-4">
		{#if loading}
			<div class="flex justify-center items-center py-16 flex-col gap-6">
				<svg
					class="animate-spin h-12 w-12 text-primary"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
				>
					<circle
						class="opacity-25"
						cx="12"
						cy="12"
						r="10"
						stroke="currentColor"
						stroke-width="4"
					/>
					<path
						class="opacity-75"
						fill="currentColor"
						d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
					/>
				</svg>
				<div class="flex flex-col items-center gap-2">
					<span class="text-2xl animate-pulse font-bold text-base-content/80"
						>กำลังค้นหา "{query}"...</span
					>
					<span class="font-mono text-lg text-base-content/60"
						>เวลา: {searchTime.toFixed(1)}s | พบแล้ว: {searchProgress.count} คำ</span
					>
				</div>
				<button class="btn btn-error btn-outline mt-2" on:click={() => abortController.abort()}>
					ยกเลิก
				</button>
			</div>
		{:else if query}
			{#if queryResults.aborted}
				<div class="alert alert-warning shadow-sm my-4 flex gap-4 max-w-2xl mx-auto">
					<AlertTriangleIcon size="24" />
					<span> หยุดการค้นหา! แสดงผลลัพธ์ที่ค้นพบแล้วบางส่วน...</span>
				</div>
			{/if}
			{#if filteredResults.length > 0}
				<div class="btn-group justify-center my-4">
					{#each Array(Math.floor(filteredResults.length / 100)) as _, idx}
						<button
							class="btn btn-sm {idx == start / 100 ? 'btn-accent' : ''}"
							name="pageButtons"
							on:click={() => {
								start = idx * 100;
								window.scrollTo(0, 0);
							}}
						>
							{idx + 1}
						</button>
					{/each}
				</div>
				<div class="btn-group justify-center my-4">
					{#each allFirstLetters as a}
						<button
							class="btn btn-sm {a == letter ? 'btn-accent' : ''} text-lg font-thin"
							name="pageButtons"
							on:click={() => {
								letter = letter == a ? '' : a;
								start = 0;
								window.scrollTo(0, 0);
							}}
						>
							{a}
						</button>
					{/each}
				</div>
				<span
					>แสดงผลลัพธ์หน้าที่ {start / 100 + 1} ({start + 1} ถึง {Math.min(
						start + 100,
						queryResults.count
					)}) จาก {queryResults.count} คำ</span
				><br />
				{#each currentQueryResults as qr}
					<div class="relative inline-block m-0.5">
						<button
							class="btn btn-outline btn-sm lg:btn-md lg:text-xl font-thin w-full"
							on:click={() => copyWord(qr)}>{qr}</button
						>
						{#if activeWord === qr}
							<div
								class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 p-2 bg-neutral text-neutral-content rounded-lg shadow-xl flex items-center gap-3 z-50 whitespace-nowrap"
								in:slide={{ duration: 200 }}
							>
								<span class="font-bold text-sm">Copied!</span>
								<a
									href="https://www.google.com/search?q={encodeURIComponent(qr)}"
									target="_blank"
									rel="noopener noreferrer"
									class="btn btn-xs btn-primary"
								>
									Google It
								</a>
								<div
									class="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-neutral rotate-45"
								/>
							</div>
						{/if}
					</div>
				{/each}
				<div class="btn-group justify-center my-4">
					{#each Array(Math.floor(filteredResults.length / 100) + 1) as _, idx}
						<button
							class="btn btn-sm {idx == start / 100 ? 'btn-accent' : ''}"
							name="pageButtons"
							on:click={() => {
								start = idx * 100;
								window.scrollTo(0, 0);
							}}
						>
							{idx + 1}
						</button>
					{/each}
				</div>
			{:else}
				<span>ไม่เจอรูปแบบ </span> <span class="text-red-400"> {query} </span>
				<span>ลองใหม่นะ</span>
			{/if}
		{:else}
			<div class="border border-base-300 rounded-xl overflow-hidden hidden lg:block shadow-sm">
				<table
					class="table table-compact table-zebra w-full lg:table-normal [&_th]:border [&_td]:border [&_th]:border-base-300 [&_td]:border-base-300"
				>
					<thead>
						<tr>
							<th>ถ้าอยากหาคำที่...</th>
							<th>...ให้ใส่...</th>
							<th>...จะได้</th>
						</tr>
					</thead>
					<tbody>
						{#each examples as [desc, ip, result]}
							<tr>
								<td>{desc}</td>
								<td>
									<div data-tip="ลองเลย" class="tooltip">
										<button
											class="btn btn-info btn-block font-thin text-xl"
											on:click={() => loadExample(ip)}>{ip}</button
										>
									</div>
								</td>
								<td>{result}</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
			<div
				class="border border-base-300 rounded-xl overflow-hidden lg:hidden shadow-sm mx-auto w-full max-w-sm"
			>
				<table
					class="table table-compact table-zebra w-full [&_th]:border [&_td]:border [&_th]:border-base-300 [&_td]:border-base-300"
				>
					<thead>
						<tr>
							<th>ถ้าอยากหาคำที่...ให้ใส่...</th>
						</tr>
					</thead>
					<tbody>
						{#each examples as [desc, ip, result]}
							<tr>
								<td>
									<p>{desc}</p>
									<div data-tip="ลองเลย" class="tooltip mt-2">
										<button class="btn btn-info btn-xs text-sm" on:click={() => loadExample(ip)}
											>{ip}</button
										>
									</div>
									<br />
								</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		{/if}
	</div>
</div>
