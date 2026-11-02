<script lang="ts">
	import { wordSearchSvg, wordSearchExcel } from '$lib/wordsearchExport';
	import { generateWordSearch } from '$lib/wordsearchGenerator';
	import { SaveIcon, LinkIcon, EyeIcon } from 'svelte-feather-icons';

	let title = '';
	let author = '';
	let wordsInput = '';
	let difficulty = 1; // 1: Easy, 2: Medium, 3: Hard
	let gridSize: number | 'custom' = 12;
	let customRows = 12;
	let customColumns = 12;

	let isSaving = false;
	let saveStatus = '';
	let savedLink = '';

	let grid: string[][] | null = null;
	let wordsData: { word: string; chars: string[]; found: boolean }[] = [];
	let isGenerated = false;
	let generationError = '';

	// UI Settings
	let scaleFactor = 1.0;
	$: cellSize = 44 * scaleFactor;

	function downloadExport(format: 'svg' | 'excel') {
		if (!grid) return;
		const contents =
			format === 'svg'
				? wordSearchSvg(
						grid,
						wordsData.map((w) => w.word),
						title,
						author,
						cellSize
				  )
				: wordSearchExcel(
						grid,
						wordsData.map((w) => w.word),
						title,
						author
				  );
		const blob = new Blob([contents], {
			type: format === 'svg' ? 'image/svg+xml;charset=utf-8' : 'application/xml;charset=utf-8'
		});
		const url = URL.createObjectURL(blob);
		const link = document.createElement('a');
		link.href = url;
		link.download = `${(title.trim() || 'wordsearch').replace(/[<>:"/\\|?*]/g, '_')}.${
			format === 'svg' ? 'svg' : 'xml'
		}`;
		link.click();
		setTimeout(() => URL.revokeObjectURL(url), 1000);
	}

	function generateGrid() {
		generationError = '';
		try {
			const result = generateWordSearch(
				wordsInput,
				gridSize === 'custom' ? customRows : gridSize,
				gridSize === 'custom' ? customColumns : gridSize,
				difficulty
			);
			grid = result.grid;
			wordsData = result.wordsData;
			isGenerated = true;
		} catch (error) {
			isGenerated = false;
			generationError = error instanceof Error ? error.message : 'Could not generate puzzle.';
		}
	}

	async function saveToDatabase(isPublic: boolean) {
		if (!isGenerated || !grid) {
			saveStatus = 'สร้างและดูตัวอย่างก่อนบันทึก';
			return;
		}
		if (!title.trim()) {
			saveStatus = 'กรุณาใส่ชื่อปริศนา';
			return;
		}

		isSaving = true;
		saveStatus = 'กำลังบันทึก...';
		savedLink = '';

		const uid = Math.random().toString(36).substring(2, 12);

		try {
			const payload = {
				type: 'wordsearch',
				data: {
					uid,
					title,
					author,
					clues: { grid, wordsData, difficulty },
					is_public: isPublic,
					created_at: new Date().toISOString()
				}
			};

			const res = await fetch('/api/puzzle/add', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(payload)
			});

			if (!res.ok) throw new Error('Failed to save');

			saveStatus = 'บันทึกสำเร็จ!';
			savedLink = `${window.location.origin}/puzzles/wordsearch/${uid}`;
		} catch (error: any) {
			console.error(error);
			saveStatus = 'เกิดข้อผิดพลาด: ' + error.message;
		} finally {
			isSaving = false;
		}
	}

	function copyLink() {
		if (savedLink) {
			navigator.clipboard.writeText(savedLink);
			alert('คัดลอกลิงก์แล้ว!');
		}
	}
</script>

<svelte:head>
	<title>Code Breaker | Word Search Builder</title>
	<meta
		name="description"
		content="Create and play custom Word Search puzzles with support for Thai letters. Features difficulty levels and automatic grid generation."
	/>
	<meta property="og:title" content="Word Search Builder" />
	<meta
		property="og:description"
		content="Create and play custom Word Search puzzles with support for Thai letters. Features difficulty levels and automatic grid generation."
	/>
	<meta property="og:type" content="website" />
	<meta property="og:image" content="/og-wordsearch-builder.png" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:image" content="/og-wordsearch-builder.png" />
</svelte:head>

<div class="max-w-4xl mx-auto px-4 py-8">
	<div class="bg-base-200 rounded-3xl p-8 shadow-xl border border-base-300">
		<h1 class="text-4xl font-black mb-6 text-center text-primary">Word Search Builder</h1>

		<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
			<div class="space-y-4">
				<div class="form-control">
					<label for="ws-title" class="label"
						><span class="label-text font-bold">ชื่อปริศนา</span></label
					>
					<input
						id="ws-title"
						type="text"
						bind:value={title}
						class="input input-bordered w-full"
						placeholder="ex. ผลไม้ไทย"
					/>
				</div>

				<div class="form-control">
					<label for="ws-author" class="label"
						><span class="label-text font-bold">ชื่อผู้สร้าง (ไม่บังคับ)</span></label
					>
					<input
						id="ws-author"
						type="text"
						bind:value={author}
						class="input input-bordered w-full"
						placeholder="ex. นามปากกา"
					/>
				</div>

				<div class="form-control">
					<div class="label">
						<span class="label-text font-bold">ขนาดตาราง</span>
					</div>
					<div class="flex flex-col gap-2">
						<label class="cursor-pointer flex items-center gap-2">
							<input
								type="radio"
								name="size"
								value={10}
								bind:group={gridSize}
								class="radio radio-primary"
							/>
							<span>10x10 (เล็ก)</span>
						</label>
						<label class="cursor-pointer flex items-center gap-2">
							<input
								type="radio"
								name="size"
								value={12}
								bind:group={gridSize}
								class="radio radio-primary"
							/>
							<span>12x12 (กลาง)</span>
						</label>
						<label class="cursor-pointer flex items-center gap-2">
							<input
								type="radio"
								name="size"
								value={15}
								bind:group={gridSize}
								class="radio radio-primary"
							/>
							<span>15x15 (ใหญ่)</span>
						</label>
						<label class="cursor-pointer flex items-center gap-2">
							<input
								type="radio"
								name="size"
								value="custom"
								bind:group={gridSize}
								class="radio radio-primary"
							/>
							<span>กำหนดเอง (Custom)</span>
						</label>
						{#if gridSize === 'custom'}
							<label class="flex items-center gap-2"
								>แถว (Rows)
								<input
									aria-label="Rows"
									type="number"
									min="2"
									max="50"
									step="1"
									bind:value={customRows}
									class="input input-bordered w-24"
								/>
							</label>
							<label class="flex items-center gap-2"
								>คอลัมน์ (Columns)
								<input
									aria-label="Columns"
									type="number"
									min="2"
									max="50"
									step="1"
									bind:value={customColumns}
									class="input input-bordered w-24"
								/>
							</label>
							<p class="text-sm">2–50 แถว / คอลัมน์</p>
						{/if}
					</div>
				</div>

				<div class="form-control mt-2">
					<div class="label">
						<span class="label-text font-bold">ระดับความยาก (ตัวหลอก)</span>
					</div>
					<div class="flex flex-col gap-2">
						<label class="cursor-pointer flex items-center gap-2">
							<input
								type="radio"
								name="diff"
								value={1}
								bind:group={difficulty}
								class="radio radio-primary"
							/>
							<span>ง่าย (สุ่มตัวอักษรมั่ว)</span>
						</label>
						<label class="cursor-pointer flex items-center gap-2">
							<input
								type="radio"
								name="diff"
								value={2}
								bind:group={difficulty}
								class="radio radio-primary"
							/>
							<span>ปานกลาง (ดึงตัวอักษรจากคำศัพท์มาหลอก)</span>
						</label>
						<label class="cursor-pointer flex items-center gap-2">
							<input
								type="radio"
								name="diff"
								value={3}
								bind:group={difficulty}
								class="radio radio-primary"
							/>
							<span>ยาก (สร้างคำที่เกือบถูก Near Misses ซ่อนไว้)</span>
						</label>
					</div>
				</div>
			</div>

			<div class="space-y-4">
				<div class="form-control h-full">
					<label for="wordsearch-textarea" class="label">
						<span class="label-text font-bold">รายการคำศัพท์ (ไทยหรืออังกฤษ, 1 คำต่อบรรทัด)</span>
					</label>
					<textarea
						id="wordsearch-textarea"
						bind:value={wordsInput}
						class="textarea textarea-bordered h-48 text-lg font-medium resize-none"
						placeholder="ส้ม&#10;มะละกอ&#10;กล้วย&#10;สับปะรด"
						on:input={() => {
							isGenerated = false;
							generationError = '';
						}}
					/>
				</div>
			</div>
		</div>

		<div class="mt-8 border-t border-base-300 pt-8">
			<div class="flex flex-col items-center gap-4">
				<button class="btn btn-secondary btn-lg shadow-lg" on:click={generateGrid}>
					<EyeIcon class="mr-2" />
					{isGenerated ? 'สุ่มตารางใหม่ (Regenerate)' : 'สร้างตัวอย่างตาราง'}
				</button>
			</div>

			{#if generationError}
				<p role="alert" class="mt-4 text-error font-bold">{generationError}</p>
			{/if}

			{#if isGenerated && grid}
				<div class="flex justify-end mb-4 items-center gap-3">
					<label for="ws-scale" class="text-sm font-bold text-base-content/60"
						>ขนาดตาราง: {Math.round(scaleFactor * 100)}%</label
					>
					<input
						id="ws-scale"
						type="range"
						min="0.5"
						max="2"
						step="0.05"
						bind:value={scaleFactor}
						class="range range-primary range-xs w-32"
					/>
					<button class="btn btn-ghost btn-sm" on:click={() => (scaleFactor = 1)}>Reset 100%</button
					>
				</div>

				<div
					class="mt-4 bg-base-300 p-4 rounded-3xl shadow-inner overflow-x-auto border border-base-100/50 flex text-base-content"
				>
					<div
						class="grid shrink-0 mx-auto"
						style="width: {grid[0].length * cellSize}px; height: {grid.length *
							cellSize}px; grid-template-columns: repeat({grid[0]
							.length}, {cellSize}px); grid-template-rows: repeat({grid.length}, {cellSize}px);"
					>
						{#each grid as row}
							{#each row as cell}
								<div
									class="flex items-center justify-center font-bold text-base-content hover:bg-base-content/10 transition-colors cursor-pointer rounded-full"
									style="font-size: {1.2 * scaleFactor}rem;"
								>
									{cell}
								</div>
							{/each}
						{/each}
					</div>
				</div>

				<div class="mt-4 flex flex-wrap justify-center gap-3">
					<button class="btn btn-outline" on:click={() => downloadExport('excel')}
						>Export Excel (.xml)</button
					>
					<button class="btn btn-outline" on:click={() => downloadExport('svg')}>Export SVG</button>
				</div>

				<div class="mt-10 flex flex-col items-center">
					<div class="flex flex-wrap justify-center gap-4">
						<button
							class="btn btn-primary btn-lg shadow-xl"
							on:click={() => saveToDatabase(true)}
							disabled={isSaving}
						>
							<SaveIcon class="mr-2" />
							{isSaving ? 'กำลังบันทึก...' : 'บันทึกสู่สาธารณะ'}
						</button>
						<button
							class="btn btn-outline btn-lg shadow-xl"
							on:click={() => saveToDatabase(false)}
							disabled={isSaving}
						>
							<SaveIcon class="mr-2" />
							{isSaving ? 'กำลังบันทึก...' : 'บันทึกส่วนตัว (มีแค่ลิงก์)'}
						</button>
					</div>

					{#if saveStatus}
						<div
							class="mt-4 font-bold text-center {saveStatus.includes('สำเร็จ')
								? 'text-success'
								: 'text-error'}"
						>
							{saveStatus}
						</div>
					{/if}

					{#if savedLink}
						<div
							class="mt-6 bg-base-100 p-4 rounded-xl border border-success/30 flex items-center gap-4 w-full max-w-2xl"
						>
							<div class="flex-1 font-mono text-sm overflow-hidden text-ellipsis whitespace-nowrap">
								{savedLink}
							</div>
							<a href={savedLink} target="_blank" class="btn btn-success btn-sm">เปิดเล่น</a>
							<button class="btn btn-outline btn-sm" on:click={copyLink}>
								<LinkIcon size="16" class="mr-1" /> คัดลอกลิงก์
							</button>
						</div>
					{/if}
				</div>
			{/if}
		</div>
	</div>
</div>
