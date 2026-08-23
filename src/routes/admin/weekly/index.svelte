<script lang="ts">
	import { onMount } from 'svelte';
	import { from, getPuzzleImageURL, storage } from '$lib/supabase';
	import {
		LockIcon,
		PlusIcon,
		Edit3Icon,
		CheckCircleIcon,
		AlertCircleIcon,
		LogOutIcon,
		UploadIcon,
		ImageIcon
	} from 'svelte-feather-icons';

	const DEFAULT_PASSWORD = 'nazo';
	let passwordInput = '';
	let isAuthenticated = false;
	let authError = '';

	let puzzles: any[] = [];
	let loading = false;
	let selectedYear: number | 'all' = 'all';
	let statusFilter: 'all' | 'missing' | 'has_answer' = 'all';

	// Form / Modal State
	let showModal = false;
	let isEditMode = false;
	let isSaving = false;
	let saveMessage = '';
	let saveError = '';

	let currentId: number | null = null;
	let formYear: number = new Date().getFullYear();
	let formWeek: number = 1;
	let formTitle: string = '';
	let formAnswer: string = '';
	let formAnswerGuide: string = '';
	let selectedFile: File | null = null;
	let imagePreviewUrl: string | null = null;
	let newlyCreatedUrl: string | null = null;

	onMount(() => {
		const savedAuth = sessionStorage.getItem('weekly_admin_auth');
		if (savedAuth === 'true') {
			isAuthenticated = true;
			loadPuzzles();
		}
	});

	function handleLogin() {
		if (passwordInput === DEFAULT_PASSWORD) {
			isAuthenticated = true;
			authError = '';
			sessionStorage.setItem('weekly_admin_auth', 'true');
			loadPuzzles();
		} else {
			authError = 'รหัสผ่านไม่ถูกต้อง';
		}
	}

	function handleLogout() {
		isAuthenticated = false;
		sessionStorage.removeItem('weekly_admin_auth');
	}

	async function loadPuzzles() {
		loading = true;
		const { data } = await from('weekly_solution')
			.select('*')
			.order('year', { ascending: false })
			.order('week', { ascending: false });

		if (data) {
			puzzles = data;
		}
		loading = false;
	}

	$: availableYears = Array.from(new Set(puzzles.map((p) => Number(p.year)))).sort((a, b) => b - a);

	$: filteredPuzzles = puzzles.filter((p) => {
		const matchYear = selectedYear === 'all' || Number(p.year) === selectedYear;
		const hasAnswer = !!(p.answer && p.answer.trim().length > 0);
		const matchStatus =
			statusFilter === 'all' ||
			(statusFilter === 'missing' && !hasAnswer) ||
			(statusFilter === 'has_answer' && hasAnswer);
		return matchYear && matchStatus;
	});

	function openAddModal() {
		isEditMode = false;
		currentId = null;
		formYear = availableYears.length > 0 ? availableYears[0] : new Date().getFullYear();
		const maxWeek = puzzles
			.filter((p) => Number(p.year) === formYear)
			.reduce((max, p) => Math.max(max, Number(p.week) || 0), 0);
		formWeek = maxWeek > 0 ? maxWeek + 1 : 1;
		formTitle = '';
		formAnswer = '';
		formAnswerGuide = '';
		selectedFile = null;
		imagePreviewUrl = null;
		newlyCreatedUrl = null;
		saveMessage = '';
		saveError = '';
		showModal = true;
	}

	function openEditModal(puzzle: any) {
		isEditMode = true;
		currentId = puzzle.id;
		formYear = Number(puzzle.year);
		formWeek = Number(puzzle.week);
		formTitle = puzzle.title || '';
		formAnswer = puzzle.answer || '';
		formAnswerGuide = puzzle.answer_guide || '';
		selectedFile = null;
		const weekStr = ('0' + formWeek).slice(-2);
		imagePreviewUrl = getPuzzleImageURL('weekly', `${formYear}${weekStr}.jpg`) || null;
		newlyCreatedUrl = null;
		saveMessage = '';
		saveError = '';
		showModal = true;
	}

	function handleFileChange(event: Event) {
		const target = event.target as HTMLInputElement;
		if (target.files && target.files[0]) {
			selectedFile = target.files[0];
			imagePreviewUrl = URL.createObjectURL(selectedFile);
		}
	}

	async function handleSave() {
		saveMessage = '';
		saveError = '';
		newlyCreatedUrl = null;
		isSaving = true;

		try {
			const weekStr = ('0' + formWeek).slice(-2);
			const imageFilename = `${formYear}${weekStr}.jpg`;

			// 1. Upload image if selected
			if (selectedFile) {
				const { error: uploadErr } = await storage
					.from('puzzles')
					.upload(`weekly/${imageFilename}`, selectedFile, {
						upsert: true,
						contentType: selectedFile.type || 'image/jpeg'
					});

				if (uploadErr) {
					throw new Error(`อัปโหลดรูปภาพล้มเหลว: ${uploadErr.message}`);
				}
			}

			// 2. Save database record
			const payload = {
				year: formYear,
				week: formWeek,
				title: formTitle,
				answer: formAnswer,
				answer_guide: formAnswerGuide
			};

			if (isEditMode && currentId) {
				const { error: updateErr } = await from('weekly_solution')
					.update(payload)
					.eq('id', currentId);

				if (updateErr) throw updateErr;
			} else {
				const { data: existing } = await from('weekly_solution')
					.select('id')
					.eq('year', formYear)
					.eq('week', formWeek);

				if (existing && existing.length > 0) {
					const { error: updateErr } = await from('weekly_solution')
						.update(payload)
						.eq('id', existing[0].id);
					if (updateErr) throw updateErr;
				} else {
					const { error: insertErr } = await from('weekly_solution').insert([payload]);
					if (insertErr) throw insertErr;
				}
			}

			newlyCreatedUrl = `/puzzles/weekly/${formYear}/${formWeek}`;
			saveMessage = isEditMode ? 'บันทึกข้อมูลเรียบร้อยแล้ว' : 'เพิ่มปริศนาใหม่เรียบร้อยแล้ว';
			await loadPuzzles();
			if (isEditMode) {
				setTimeout(() => {
					showModal = false;
				}, 800);
			}
		} catch (err: any) {
			saveError = err.message || 'เกิดข้อผิดพลาดในการบันทึกข้อมูล';
		} finally {
			isSaving = false;
		}
	}
</script>

<svelte:head>
	<title>Code Breaker | Weekly Puzzle Admin</title>
</svelte:head>

<div class="container mx-auto px-4 py-8">
	{#if !isAuthenticated}
		<!-- Password Form -->
		<div class="max-w-md mx-auto card bg-slate-900 border border-slate-800 text-slate-100 shadow-2xl p-6 my-12">
			<div class="flex flex-col items-center gap-3 text-center">
				<div class="w-16 h-16 rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/40 flex items-center justify-center">
					<LockIcon size="32" />
				</div>
				<h1 class="text-2xl font-black text-white">Weekly Puzzle Admin</h1>
				<p class="text-xs text-slate-400">กรอกรหัสผ่านเพื่อเข้าสู่ระบบจัดการปริศนาประจำสัปดาห์</p>
			</div>

			<form on:submit|preventDefault={handleLogin} class="flex flex-col gap-4 mt-6">
				<div class="flex flex-col gap-1.5">
					<label for="admin-password-input" class="text-xs font-bold text-slate-400">รหัสผ่าน (Password)</label>
					<input
						id="admin-password-input"
						type="password"
						bind:value={passwordInput}
						placeholder="กรอกรหัสผ่าน..."
						class="w-full px-4 py-3 rounded-2xl bg-black border border-slate-800 text-white font-bold focus:outline-none focus:border-blue-400 text-sm"
						required
					/>
				</div>

				{#if authError}
					<div class="p-3 rounded-2xl bg-rose-500/20 border border-rose-500/40 text-rose-300 text-xs flex items-center gap-2">
						<AlertCircleIcon size="16" />
						<span>{authError}</span>
					</div>
				{/if}

				<button type="submit" class="w-full py-3.5 rounded-2xl font-black bg-blue-500 hover:bg-blue-400 text-white shadow-lg shadow-blue-500/30 transition-all text-sm flex items-center justify-center gap-2 mt-2">
					<LockIcon size="18" />
					เข้าสู่ระบบ
				</button>
			</form>
		</div>
	{:else}
		<!-- Admin Dashboard -->
		<div class="flex flex-col gap-6">
			<!-- Header Bar -->
			<div class="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-4">
				<div class="space-y-2">
					<div class="flex items-center gap-2 bg-slate-950 p-1 rounded-2xl border border-slate-800 w-fit">
						<a href="/admin/weekly" class="px-4 py-2 rounded-xl text-xs font-bold bg-blue-500 text-white hover:text-white shadow-md">
							Weekly
						</a>
						<a href="/admin/logic" class="px-4 py-2 rounded-xl text-xs font-bold text-slate-400 hover:text-white transition-colors">
							Logic
						</a>
					</div>

					<h1 class="text-3xl font-black text-white flex items-center gap-3">
						<span>ระบบจัดการปริศนาประจำสัปดาห์</span>
						<span class="px-3 py-1 rounded-xl bg-blue-500/20 border border-blue-500/40 text-blue-300 font-mono text-xs">Admin</span>
					</h1>
					<p class="text-sm text-slate-400">เพิ่ม แก้ไข และอัปโหลดรูปภาพปริศนาประจำสัปดาห์</p>
				</div>

				<div class="flex items-center gap-3">
					<button class="px-6 py-3 rounded-2xl font-black bg-blue-500 hover:bg-blue-400 text-white shadow-lg shadow-blue-500/30 transition-all text-sm flex items-center gap-2" on:click={openAddModal}>
						<PlusIcon size="18" />
						เพิ่มปริศนาใหม่
					</button>
					<button class="px-5 py-3 rounded-2xl font-bold bg-slate-950 border border-slate-800 text-slate-400 hover:text-rose-400 hover:border-rose-500/40 transition-colors text-sm flex items-center gap-2" on:click={handleLogout}>
						<LogOutIcon size="18" />
						ออกจากระบบ
					</button>
				</div>
			</div>

			<!-- Filter and Search Controls -->
			<div class="flex flex-col md:flex-row gap-4 justify-between items-center bg-slate-900/60 border border-slate-800 p-4 rounded-2xl shadow-inner">
				<!-- Year Filter -->
				<div class="flex items-center gap-2 w-full md:w-auto">
					<span class="text-xs font-bold uppercase tracking-wider text-slate-400 whitespace-nowrap">ปี:</span>
					<div class="flex rounded-xl bg-slate-950 border border-slate-800 p-1 flex-wrap gap-1">
						<button
							class="px-3 py-1.5 rounded-lg text-xs font-black transition-all {selectedYear === 'all' ? 'bg-blue-500 text-white shadow-md' : 'text-slate-400 hover:text-white'}"
							on:click={() => (selectedYear = 'all')}
						>
							ทั้งหมด
						</button>
						{#each availableYears as y}
							<button
								class="px-3 py-1.5 rounded-lg text-xs font-black transition-all {selectedYear === y ? 'bg-blue-500 text-white shadow-md' : 'text-slate-400 hover:text-white'}"
								on:click={() => (selectedYear = y)}
							>
								{y}
							</button>
						{/each}
					</div>
				</div>

				<!-- Status Filter (Answer missing/present) -->
				<div class="flex items-center gap-2 w-full md:w-auto">
					<span class="text-xs font-bold uppercase tracking-wider text-slate-400 whitespace-nowrap">เฉลย:</span>
					<div class="flex rounded-xl bg-slate-950 border border-slate-800 p-1 flex-wrap gap-1">
						<button
							class="px-3 py-1.5 rounded-lg text-xs font-black transition-all {statusFilter === 'all' ? 'bg-blue-500 text-white shadow-md' : 'text-slate-400 hover:text-white'}"
							on:click={() => (statusFilter = 'all')}
						>
							ทั้งหมด ({puzzles.length})
						</button>
						<button
							class="px-3 py-1.5 rounded-lg text-xs font-black transition-all {statusFilter === 'missing' ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40' : 'text-slate-400 hover:text-white'}"
							on:click={() => (statusFilter = 'missing')}
						>
							⚠️ ไม่มี ({puzzles.filter((p) => !p.answer || p.answer.trim().length === 0).length})
						</button>
						<button
							class="px-3 py-1.5 rounded-lg text-xs font-black transition-all {statusFilter === 'has_answer' ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40' : 'text-slate-400 hover:text-white'}"
							on:click={() => (statusFilter = 'has_answer')}
						>
							✔️ มี ({puzzles.filter((p) => p.answer && p.answer.trim().length > 0).length})
						</button>
					</div>
				</div>
			</div>

			<!-- Puzzles Table -->
			{#if loading}
				<div class="flex items-center justify-center py-12 text-slate-500 gap-3 font-bold">
					<span class="loading loading-spinner loading-md" />
					<span>กำลังโหลดข้อมูล...</span>
				</div>
			{:else if filteredPuzzles.length > 0}
				<div class="w-full overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/60 shadow-xl">
					<table class="w-full text-left text-sm text-slate-200">
						<thead class="bg-slate-950 text-slate-400 text-xs font-bold uppercase border-b border-slate-800">
							<tr>
								<th class="px-3 py-3 w-16 text-center">รูปภาพ</th>
								<th class="px-4 py-3">ปี / สัปดาห์</th>
								<th class="px-4 py-3">ชื่อปริศนา</th>
								<th class="px-4 py-3">เฉลย</th>
								<th class="px-4 py-3 text-center">แก้ไข</th>
							</tr>
						</thead>
						<tbody class="divide-y divide-slate-800">
							{#each filteredPuzzles as p}
								{@const weekStr = ('0' + p.week).slice(-2)}
								{@const imgUrl = getPuzzleImageURL('weekly', `${p.year}${weekStr}.jpg`)}
								<tr class="hover:bg-slate-800/40 transition-colors">
									<!-- Image Preview Thumbnail on the left -->
									<td class="px-3 py-2 text-center w-16">
										<div class="w-12 h-12 rounded-xl bg-slate-950 border border-slate-800 overflow-hidden flex items-center justify-center mx-auto shadow-inner relative group">
											<img
												src={imgUrl}
												alt="thumb"
												class="w-full h-full object-cover"
												on:error={(e) => { e.currentTarget.style.display = 'none'; }}
											/>
											<ImageIcon size="18" class="text-slate-600 absolute pointer-events-none" />
										</div>
									</td>
									<td class="px-4 py-3.5 font-bold font-mono text-sky-400 whitespace-nowrap">
										<span>{p.year} / {p.week}</span>
									</td>
									<td class="px-4 py-3.5 max-w-xs break-words">
										<a
											href="/puzzles/weekly/{p.year}/{p.week}"
											target="_blank"
											class="font-bold text-white hover:text-cyan-400 transition-colors block"
											title="เปิดดูหน้าปริศนา"
										>
											{p.title || '<ยังไม่มีชื่อ>'}
										</a>
									</td>
									<!-- Answer displayed in Uppercase Capital Letters -->
									<td class="px-4 py-3.5 w-44">
										{#if p.answer}
											<code class="bg-black border border-slate-800 px-2.5 py-1 rounded-xl text-xs font-mono text-emerald-400 block truncate uppercase">{p.answer.toUpperCase()}</code>
										{:else}
											<span class="px-2.5 py-1 rounded-xl bg-amber-500/20 text-amber-300 border border-amber-500/40 text-xs font-bold whitespace-nowrap">ไม่มี</span>
										{/if}
									</td>
									<!-- Edit button displaying ONLY pencil icon -->
									<td class="px-4 py-3.5 text-center">
										<button
											class="p-2.5 rounded-xl font-bold bg-blue-500/20 hover:bg-blue-500/30 text-blue-300 border border-blue-500/40 text-xs transition-all flex items-center justify-center mx-auto hover:scale-110"
											title="แก้ไขข้อมูลปริศนา"
											on:click={() => openEditModal(p)}
										>
											<Edit3Icon size="16" />
										</button>
									</td>
								</tr>
							{/each}
						</tbody>
					</table>
				</div>
			{:else}
				<div class="text-center py-12 text-slate-500 font-bold">
					<p>ไม่พบข้อมูลปริศนา</p>
				</div>
			{/if}
		</div>
	{/if}
</div>

<!-- Modal for Add / Edit Puzzle (Large Image Left Column + Themed File Upload) -->
<input type="checkbox" class="modal-toggle" checked={showModal} />
{#if showModal}
	<div class="fixed inset-0 bg-slate-950/80 backdrop-blur-md z-[10000] flex items-center justify-center p-4 overflow-y-auto">
		<div class="bg-slate-900 border border-slate-800 text-slate-100 rounded-3xl p-6 sm:p-8 max-w-4xl w-full shadow-2xl relative my-8">
			<button class="btn btn-sm btn-circle btn-ghost text-slate-400 hover:text-white absolute right-4 top-4" on:click={() => (showModal = false)}>✕</button>

			<h3 class="font-black text-2xl text-white border-b border-slate-800 pb-3 mb-6 flex items-center gap-2">
				<Edit3Icon class="text-blue-400" />
				<span>{isEditMode ? 'แก้ไขปริศนาประจำสัปดาห์' : 'เพิ่มปริศนาใหม่'}</span>
			</h3>

			<form on:submit|preventDefault={handleSave} class="grid grid-cols-1 md:grid-cols-2 gap-8">
				<!-- LEFT COLUMN: LARGE IMAGE PREVIEW & THEMED FILE UPLOAD -->
				<div class="flex flex-col gap-4">
					<div class="text-sm font-bold text-slate-300 flex items-center justify-between">
						<span>รูปภาพปริศนา</span>
						<span class="text-xs font-mono text-slate-500">
							ไฟล์: <code class="text-sky-400">{formYear}{('0' + formWeek).slice(-2)}.jpg</code>
						</span>
					</div>

					<!-- Large Image Preview Box -->
					<div class="w-full h-72 sm:h-80 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-center overflow-hidden relative shadow-inner group">
						{#if imagePreviewUrl}
							<img src={imagePreviewUrl} alt="preview" class="w-full h-full object-contain p-2" />
						{:else}
							<div class="flex flex-col items-center justify-center text-slate-500 gap-2 p-4 text-center">
								<ImageIcon size="48" class="text-slate-600" />
								<span class="text-xs font-semibold">ยังไม่มีรูปภาพปริศนาสำหรับสัปดาห์นี้</span>
							</div>
						{/if}
					</div>

					<!-- Custom Themed File Upload Button / Input -->
					<div class="flex flex-col gap-1.5">
						<input
							type="file"
							id="admin-puzzle-file-input"
							accept="image/*"
							on:change={handleFileChange}
							class="hidden"
						/>
						<label
							for="admin-puzzle-file-input"
							class="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl bg-blue-600/20 hover:bg-blue-600/30 border border-blue-500/40 text-blue-300 font-black text-sm cursor-pointer transition-all shadow-md hover:scale-[1.01]"
						>
							<UploadIcon size="18" />
							<span class="truncate">{selectedFile ? selectedFile.name : 'เลือกไฟล์รูปภาพอัปโหลด (.jpg/.png)'}</span>
						</label>
					</div>
				</div>

				<!-- RIGHT COLUMN: FORM INPUTS & SAVE BUTTON -->
				<div class="flex flex-col justify-between gap-4">
					<div class="flex flex-col gap-4">
						<div class="grid grid-cols-2 gap-4">
							<div class="flex flex-col gap-1.5">
								<label for="admin-year-input" class="text-xs font-bold text-slate-400">ปี (Year)</label>
								<input
									id="admin-year-input"
									type="number"
									bind:value={formYear}
									class="w-full px-4 py-3 rounded-2xl bg-black border border-slate-800 text-white font-bold focus:outline-none focus:border-blue-400 text-sm"
									required
									min="2000"
									max="2099"
								/>
							</div>

							<div class="flex flex-col gap-1.5">
								<label for="admin-week-input" class="text-xs font-bold text-slate-400">สัปดาห์ที่ (Week 1-53)</label>
								<input
									id="admin-week-input"
									type="number"
									bind:value={formWeek}
									class="w-full px-4 py-3 rounded-2xl bg-black border border-slate-800 text-white font-bold focus:outline-none focus:border-blue-400 text-sm"
									required
									min="1"
									max="53"
								/>
							</div>
						</div>

						<div class="flex flex-col gap-1.5">
							<label for="admin-title-input" class="text-xs font-bold text-slate-400">ชื่อปริศนา (Title)</label>
							<input
								id="admin-title-input"
								type="text"
								bind:value={formTitle}
								placeholder="เช่น ศิลปะ, ดิจิตัล, นับพร้อมกัน..."
								class="w-full px-4 py-3 rounded-2xl bg-black border border-slate-800 text-white font-bold focus:outline-none focus:border-blue-400 text-sm"
							/>
						</div>

						<div class="flex flex-col gap-1.5">
							<label for="admin-answer-input" class="text-xs font-bold text-slate-400">คำตอบ (Answer) — เว้นว่างได้</label>
							<input
								id="admin-answer-input"
								type="text"
								bind:value={formAnswer}
								placeholder="กรอกคำตอบ (ถ้ายังไม่ออกเฉลยให้เว้นว่างไว้)..."
								class="w-full px-4 py-3 rounded-2xl bg-black border border-slate-800 text-sky-300 font-mono font-bold focus:outline-none focus:border-blue-400 text-sm"
							/>
						</div>

						<div class="flex flex-col gap-1.5">
							<label for="admin-guide-input" class="text-xs font-bold text-slate-400">คำใบ้รูปแบบคำตอบ (Answer Guide)</label>
							<input
								id="admin-guide-input"
								type="text"
								bind:value={formAnswerGuide}
								placeholder="เช่น ภาษาอังกฤษ 5 ตัวอักษร, คำขึ้นต้นด้วย ก..."
								class="w-full px-4 py-3 rounded-2xl bg-black border border-slate-800 text-white font-bold focus:outline-none focus:border-blue-400 text-sm"
							/>
						</div>
					</div>

					<!-- Feedback Messages & Submit Buttons -->
					<div class="flex flex-col gap-3 pt-2 border-t border-slate-800">
						{#if saveMessage}
							<div class="p-3 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs flex flex-col items-start gap-1.5">
								<div class="flex items-center gap-1.5 font-bold">
									<CheckCircleIcon size="16" />
									<span>{saveMessage}</span>
								</div>
								{#if newlyCreatedUrl}
									<a
										href={newlyCreatedUrl}
										target="_blank"
										class="px-3 py-1.5 rounded-xl bg-emerald-500 text-slate-950 font-black text-xs hover:bg-emerald-400 transition-colors"
										style="color: #0f172a;"
									>
										🔗 เปิดดูหน้าปริศนา ({formYear} สัปดาห์ที่ {formWeek}) ↗
									</a>
								{/if}
							</div>
						{/if}

						{#if saveError}
							<div class="p-3 rounded-2xl bg-rose-500/20 border border-rose-500/40 text-rose-300 text-xs flex items-center gap-1.5 font-bold">
								<AlertCircleIcon size="16" />
								<span>{saveError}</span>
							</div>
						{/if}

						<div class="flex justify-end gap-3 pt-2">
							<button type="button" class="px-5 py-3 rounded-2xl font-bold bg-slate-950 border border-slate-800 text-slate-400 hover:text-white text-sm" on:click={() => (showModal = false)}>ยกเลิก</button>
							<button type="submit" class="px-6 py-3 rounded-2xl font-black bg-blue-500 hover:bg-blue-400 text-white shadow-lg shadow-blue-500/30 text-sm flex items-center gap-2" disabled={isSaving}>
								{#if isSaving}
									<span class="loading loading-spinner loading-xs" />
									กำลังบันทึก...
								{:else}
									<CheckCircleIcon size="18" />
									บันทึก
								{/if}
							</button>
						</div>
					</div>
				</div>
			</form>
		</div>
	</div>
{/if}
