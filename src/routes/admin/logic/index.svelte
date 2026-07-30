<script lang="ts">
	import { onMount } from 'svelte';
	import { ArrowLeftIcon, PlusIcon, ExternalLinkIcon, CheckCircleIcon, GridIcon, EyeIcon } from 'svelte-feather-icons';
	import type { ILogicPuzzle } from '$lib/interfaces';

	let puzzles: ILogicPuzzle[] = [];
	let loading = false;
	let isSubmitting = false;
	let successMsg = '';
	let errorMsg = '';

	// Form fields
	let url = '';
	let genre = 'slither';
	let genreTitle = 'Slitherlink';
	let width = 5;
	let height = 5;
	let difficulty = 'Easy';
	let author = 'Codebreaker';
	let title = '';
	let isUserEditedTitle = false;

	const genreOptions = [
		{ value: 'slither', label: 'Slitherlink' },
		{ value: 'masyu', label: 'Masyu' },
		{ value: 'akari', label: 'Akari' },
		{ value: 'sudoku', label: 'Sudoku' },
		{ value: 'kakuro', label: 'Kakuro' },
		{ value: 'slalom', label: 'Slalom' },
		{ value: 'tapa', label: 'Tapa' },
		{ value: 'nurikabe', label: 'Nurikabe' },
		{ value: 'yajilin', label: 'Yajilin' }
	];

	function getPreviewUrl(urlStr: string): string {
		if (!urlStr) return '';
		if (urlStr.includes('/p?')) {
			return urlStr.replace('/p?', '/pv?');
		}
		return urlStr;
	}

	function autoGenerateTitle() {
		if (isUserEditedTitle) return;
		const count = puzzles.filter((p) => (p.genre_title || p.genre || '').toLowerCase() === (genreTitle || genre).toLowerCase()).length;
		title = `${genreTitle} ${width}x${height} #${count + 1}`;
	}

	function handleUrlInput() {
		if (!url.trim()) return;
		try {
			// Match pzpr URL pattern: /p?<genre>/<width>/<height>/...
			const match = url.match(/\/p\?([a-z0-9_-]+)\/(\d+)\/(\d+)/i);
			if (match) {
				const g = match[1].toLowerCase();
				const w = parseInt(match[2], 10);
				const h = parseInt(match[3], 10);

				if (!isNaN(w) && w > 0) width = w;
				if (!isNaN(h) && h > 0) height = h;

				const known = genreOptions.find((o) => o.value === g || o.label.toLowerCase() === g);
				if (known) {
					genre = known.value;
					genreTitle = known.label;
				} else {
					genre = g;
					genreTitle = g.charAt(0).toUpperCase() + g.slice(1);
				}
				autoGenerateTitle();
			}
		} catch (e) {
			console.warn('URL parsing error:', e);
		}
	}

	function handleGenreTitleInput() {
		const match = genreOptions.find((g) => g.label.toLowerCase() === genreTitle.trim().toLowerCase());
		if (match) {
			genre = match.value;
		} else {
			genre = genreTitle.trim().toLowerCase().replace(/\s+/g, '');
		}
		autoGenerateTitle();
	}

	function handleDimensionInput() {
		autoGenerateTitle();
	}

	async function fetchPuzzles() {
		try {
			loading = true;
			const res = await fetch('/api/puzzle/logicpuzzle');
			if (res.ok) {
				const data = await res.json();
				if (Array.isArray(data)) {
					puzzles = data;
				}
			}
		} catch (err) {
			console.error('Error fetching logic puzzles:', err);
		} finally {
			loading = false;
			autoGenerateTitle();
		}
	}

	async function handleSubmit() {
		if (!title.trim() || !url.trim()) {
			errorMsg = 'กรุณากรอก URL และชื่อปริศนาให้ครบถ้วน';
			return;
		}

		try {
			isSubmitting = true;
			errorMsg = '';
			successMsg = '';

			const body = {
				title: title.trim(),
				genre,
				genre_title: genreTitle.trim(),
				url: url.trim(),
				width: Number(width),
				height: Number(height),
				difficulty,
				author: author.trim() || 'Codebreaker'
			};

			const res = await fetch('/api/puzzle/logicpuzzle', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(body)
			});

			if (res.ok) {
				successMsg = `เพิ่ม ${title.trim()} เรียบร้อยแล้ว!`;
				url = '';
				title = '';
				isUserEditedTitle = false;
				await fetchPuzzles();
			} else {
				errorMsg = 'เกิดข้อผิดพลาดในการบันทึกข้อมูล';
			}
		} catch (err: any) {
			errorMsg = err.message || 'เกิดข้อผิดพลาดในการเชื่อมต่อเซิร์ฟเวอร์';
		} finally {
			isSubmitting = false;
		}
	}

	onMount(fetchPuzzles);
</script>

<svelte:head>
	<title>Admin - Logic Puzzles Management</title>
</svelte:head>

<div class="flex flex-col gap-8 w-full max-w-6xl mx-auto px-4 py-8 select-none">
	<!-- Header Bar -->
	<header class="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-4">
		<div class="space-y-2">
			<div class="flex items-center gap-2 bg-slate-950 p-1 rounded-2xl border border-slate-800 w-fit">
				<a href="/admin/weekly" class="px-4 py-2 rounded-xl text-xs font-bold text-slate-400 hover:text-white transition-colors">
					Weekly
				</a>
				<a href="/admin/logic" class="px-4 py-2 rounded-xl text-xs font-bold bg-emerald-500 text-white hover:text-white shadow-md">
					Logic
				</a>
			</div>

			<h1 class="text-3xl font-black text-white flex items-center gap-3">
				<span>ระบบจัดการ Logic Puzzles</span>
				<span class="px-3 py-1 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 font-mono text-xs">Admin</span>
			</h1>
			<p class="text-sm text-slate-400">เพิ่มและจัดการปริศนาตรรกศาสตร์ (Slitherlink, Sudoku, Masyu ฯลฯ)</p>
		</div>
	</header>

	<!-- Add New Puzzle Form -->
	<section class="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl space-y-5">
		<h2 class="text-xl font-bold text-emerald-400 flex items-center gap-2 border-b border-slate-800 pb-3">
			<PlusIcon size="20" />
			<span>เพิ่ม Logic Puzzle ใหม่</span>
		</h2>

		{#if successMsg}
			<div class="alert alert-success text-sm font-bold rounded-2xl">
				<CheckCircleIcon size="18" />
				<span>{successMsg}</span>
			</div>
		{/if}

		{#if errorMsg}
			<div class="alert alert-error text-sm font-bold rounded-2xl">
				<span>✕ {errorMsg}</span>
			</div>
		{/if}

		<form on:submit|preventDefault={handleSubmit} class="space-y-5">
			<!-- 1. URL Input (Infers Genre, Width, Height automatically) -->
			<div class="space-y-2">
				<label class="text-xs font-bold text-slate-300 flex items-center justify-between" for="puzzle-url">
					<span>1. วาง URL ปริศนา (pzpr / pzprxs / puzz.link URL) *</span>
					<span class="text-emerald-400 font-normal">ระบบจะดึงประเภท ขนาด และตัวอย่างอัตโนมัติ</span>
				</label>
				<input
					id="puzzle-url"
					type="url"
					bind:value={url}
					on:input={handleUrlInput}
					on:change={handleUrlInput}
					placeholder="https://pzprxs.vercel.app/p?slither/5/5/..."
					class="input input-bordered w-full bg-slate-950 text-sm font-mono focus:border-emerald-500"
					required
				/>
			</div>

			<!-- Live Preview Iframe (Shown once URL is entered) -->
			{#if url.trim()}
				<div class="space-y-2 bg-slate-950 p-4 rounded-2xl border border-slate-800">
					<div class="flex items-center gap-2 text-xs font-bold text-slate-300">
						<EyeIcon size="16" class="text-emerald-400" />
						<span>ตัวอย่างปริศนา (Live Preview)</span>
					</div>
					<div class="w-full h-64 bg-white rounded-xl overflow-hidden border border-slate-700 shadow-inner">
						<iframe
							src={getPreviewUrl(url)}
							title="Logic Puzzle Live Preview"
							class="w-full h-full border-0 pointer-events-none"
						></iframe>
					</div>
				</div>
			{/if}

			<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
				<!-- 2. Searchable Genre Input with Datalist (allows custom new genre) -->
				<div class="space-y-1">
					<label class="text-xs font-bold text-slate-400" for="puzzle-genre">2. ประเภทปริศนา (Genre)</label>
					<input
						id="puzzle-genre"
						type="text"
						list="genre-datalist"
						bind:value={genreTitle}
						on:input={handleGenreTitleInput}
						placeholder="ค้นหา หรือ พิมพ์ชื่อประเภทใหม่..."
						class="input input-bordered w-full bg-slate-950 text-sm font-bold focus:border-emerald-500"
					/>
					<datalist id="genre-datalist">
						{#each genreOptions as opt}
							<option value={opt.label}></option>
						{/each}
					</datalist>
				</div>

				<!-- 3. Width & Height -->
				<div class="grid grid-cols-2 gap-2">
					<div class="space-y-1">
						<label class="text-xs font-bold text-slate-400" for="puzzle-width">กว้าง (Width)</label>
						<input
							id="puzzle-width"
							type="number"
							bind:value={width}
							on:input={handleDimensionInput}
							min="3"
							max="30"
							class="input input-bordered w-full bg-slate-950 text-sm font-mono"
						/>
					</div>
					<div class="space-y-1">
						<label class="text-xs font-bold text-slate-400" for="puzzle-height">สูง (Height)</label>
						<input
							id="puzzle-height"
							type="number"
							bind:value={height}
							on:input={handleDimensionInput}
							min="3"
							max="30"
							class="input input-bordered w-full bg-slate-950 text-sm font-mono"
						/>
					</div>
				</div>

				<!-- 4. Difficulty & Author -->
				<div class="space-y-1">
					<label class="text-xs font-bold text-slate-400" for="puzzle-difficulty">ระดับความยาก (Difficulty)</label>
					<select id="puzzle-difficulty" bind:value={difficulty} class="select select-bordered w-full bg-slate-950 text-sm font-bold">
						<option value="Easy">Easy</option>
						<option value="Medium">Medium</option>
						<option value="Hard">Hard</option>
					</select>
				</div>

				<div class="space-y-1">
					<label class="text-xs font-bold text-slate-400" for="puzzle-author">ผู้แต่ง (Author)</label>
					<input
						id="puzzle-author"
						type="text"
						bind:value={author}
						placeholder="Codebreaker"
						class="input input-bordered w-full bg-slate-950 text-sm font-bold"
					/>
				</div>
			</div>

			<!-- 5. Title Input (LAST input, auto-generated while allowing editing) -->
			<div class="space-y-1 pt-2 border-t border-slate-800">
				<label class="text-xs font-bold text-slate-300 flex items-center justify-between" for="puzzle-title">
					<span>3. ชื่อปริศนา (Puzzle Title) *</span>
					<span class="text-xs text-slate-500 font-normal">สร้างให้อัตโนมัติ ปรับแต่งชื่อได้ตามต้องการ</span>
				</label>
				<input
					id="puzzle-title"
					type="text"
					bind:value={title}
					on:input={() => (isUserEditedTitle = true)}
					placeholder="เช่น Slitherlink 5x5 #1"
					class="input input-bordered w-full bg-slate-950 text-sm font-extrabold text-emerald-400 focus:border-emerald-500"
					required
				/>
			</div>

			<button type="submit" class="btn btn-primary font-bold px-8 rounded-xl w-full sm:w-auto" disabled={isSubmitting}>
				{isSubmitting ? 'กำลังบันทึก...' : 'บันทึก Logic Puzzle'}
			</button>
		</form>
	</section>

	<!-- Existing Puzzles Table -->
	<section class="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl space-y-4">
		<h2 class="text-xl font-bold text-white border-b border-slate-800 pb-3">
			รายการ Logic Puzzles ในระบบ ({puzzles.length})
		</h2>

		{#if loading}
			<div class="text-center py-8 text-slate-500 font-bold">กำลังโหลดรายการ...</div>
		{:else if puzzles.length === 0}
			<div class="text-center py-8 text-slate-500 font-bold">ยังไม่มีข้อมูล Logic Puzzle ในระบบ</div>
		{:else}
			<div class="overflow-x-auto">
				<table class="table w-full text-sm">
					<thead>
						<tr class="bg-slate-950 text-slate-400 text-xs font-bold uppercase">
							<th>ID</th>
							<th>ชื่อ</th>
							<th>ประเภท</th>
							<th>ขนาด</th>
							<th>ความยาก</th>
							<th>ผู้แต่ง</th>
							<th>ลิงก์</th>
						</tr>
					</thead>
					<tbody class="divide-y divide-slate-800">
						{#each puzzles as p}
							<tr class="hover:bg-slate-800/40">
								<td class="font-mono text-xs text-slate-500">{p.id}</td>
								<td class="font-bold text-emerald-400">{p.title}</td>
								<td class="font-mono text-xs text-slate-300">{p.genre_title || p.genre}</td>
								<td class="font-mono text-xs text-slate-400">{p.width} x {p.height}</td>
								<td>
									<span class="badge badge-sm badge-outline text-xs font-bold">{p.difficulty || 'Easy'}</span>
								</td>
								<td class="text-slate-300 text-xs">{p.author || 'Codebreaker'}</td>
								<td>
									<a href={p.url} target="_blank" class="btn btn-ghost btn-xs text-cyan-400 gap-1 font-bold">
										<span>เปิด</span>
										<ExternalLinkIcon size="12" />
									</a>
								</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		{/if}
	</section>
</div>
