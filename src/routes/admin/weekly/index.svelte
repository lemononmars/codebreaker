<script lang="ts">
	import { onMount } from 'svelte';
	import { from, getPuzzleImageURL, storage } from '$lib/supabase';
	import {
		LockIcon,
		PlusIcon,
		Edit3Icon,
		CheckCircleIcon,
		AlertCircleIcon,
		LogOutIcon
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
		const { data, error } = await from('weekly_solution')
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
		imagePreviewUrl = getPuzzleImageURL('weekly', `${formYear}${weekStr}.jpg`);
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
		<div class="max-w-md mx-auto card bg-neutral text-neutral-content shadow-2xl border border-base-300/30 p-6 my-12">
			<div class="flex flex-col items-center gap-3 text-center">
				<div class="w-16 h-16 rounded-full bg-primary/20 text-primary flex items-center justify-center">
					<LockIcon size="32" />
				</div>
				<h1 class="text-2xl font-bold text-primary">Weekly Puzzle Admin</h1>
				<p class="text-xs opacity-75">กรอกรหัสผ่านเพื่อเข้าสู่ระบบจัดการปริศนาประจำสัปดาห์</p>
			</div>

			<form on:submit|preventDefault={handleLogin} class="flex flex-col gap-4 mt-6">
				<div class="form-control w-full">
					<label class="label"><span class="label-text">รหัสผ่าน (Password)</span></label>
					<input
						type="password"
						bind:value={passwordInput}
						placeholder="กรอกรหัสผ่าน..."
						class="input input-bordered w-full"
						required
					/>
				</div>

				{#if authError}
					<div class="alert alert-error text-xs p-3">
						<AlertCircleIcon size="16" />
						<span>{authError}</span>
					</div>
				{/if}

				<button type="submit" class="btn btn-primary w-full gap-2 mt-2">
					<LockIcon size="18" />
					เข้าสู่ระบบ
				</button>
			</form>
		</div>
	{:else}
		<!-- Admin Dashboard -->
		<div class="flex flex-col gap-6">
			<!-- Header Bar -->
			<div class="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-base-300/30 pb-4">
				<div>
					<h1 class="text-3xl font-bold text-primary flex items-center gap-3">
						<span>ระบบจัดการปริศนาประจำสัปดาห์</span>
						<span class="badge badge-primary badge-outline text-xs">Admin</span>
					</h1>
					<p class="text-sm opacity-70 mt-1">เพิ่ม แก้ไข และอัปโหลดรูปภาพปริศนาประจำสัปดาห์</p>
				</div>

				<div class="flex items-center gap-3">
					<button class="btn btn-primary gap-2" on:click={openAddModal}>
						<PlusIcon size="18" />
						เพิ่มปริศนาใหม่
					</button>
					<button class="btn btn-outline btn-error btn-sm md:btn-md gap-2" on:click={handleLogout}>
						<LogOutIcon size="18" />
						ออกจากระบบ
					</button>
				</div>
			</div>

			<!-- Filter and Search Controls -->
			<div class="flex flex-col md:flex-row gap-4 justify-between items-center bg-base-200/80 border border-base-300/50 p-4 rounded-2xl shadow-inner">
				<!-- Year Filter -->
				<div class="flex items-center gap-2 w-full md:w-auto">
					<span class="text-xs font-bold uppercase tracking-wider opacity-70 whitespace-nowrap">ปี:</span>
					<div class="join border border-base-300/80 bg-base-100 shadow-sm rounded-xl p-1 flex-wrap">
						<button
							class="btn btn-xs sm:btn-sm join-item border-none {selectedYear === 'all' ? 'btn-primary font-bold shadow-md' : 'btn-ghost opacity-60 hover:opacity-100'}"
							on:click={() => (selectedYear = 'all')}
						>
							ทั้งหมด
						</button>
						{#each availableYears as y}
							<button
								class="btn btn-xs sm:btn-sm join-item border-none {selectedYear === y ? 'btn-primary font-bold shadow-md' : 'btn-ghost opacity-60 hover:opacity-100'}"
								on:click={() => (selectedYear = y)}
							>
								{y}
							</button>
						{/each}
					</div>
				</div>

				<!-- Status Filter (Answer missing/present) -->
				<div class="flex items-center gap-2 w-full md:w-auto">
					<span class="text-xs font-bold uppercase tracking-wider opacity-70 whitespace-nowrap">เฉลย:</span>
					<div class="join border border-base-300/80 bg-base-100 shadow-sm rounded-xl p-1 flex-wrap">
						<button
							class="btn btn-xs sm:btn-sm join-item border-none {statusFilter === 'all' ? 'btn-neutral font-bold shadow-md' : 'btn-ghost opacity-60 hover:opacity-100'}"
							on:click={() => (statusFilter = 'all')}
						>
							ทั้งหมด
						</button>
						<button
							class="btn btn-xs sm:btn-sm join-item border-none {statusFilter === 'missing' ? 'btn-warning font-bold shadow-md' : 'btn-ghost opacity-60 hover:opacity-100'}"
							on:click={() => (statusFilter = 'missing')}
						>
							ยังไม่ออกเฉลย
						</button>
						<button
							class="btn btn-xs sm:btn-sm join-item border-none {statusFilter === 'has_answer' ? 'btn-success font-bold shadow-md' : 'btn-ghost opacity-60 hover:opacity-100'}"
							on:click={() => (statusFilter = 'has_answer')}
						>
							ออกเฉลยแล้ว
						</button>
					</div>
				</div>
			</div>

			<!-- Puzzles Table -->
			{#if loading}
				<div class="flex justify-center py-12">
					<span class="loading loading-spinner loading-lg text-primary" />
				</div>
			{:else if filteredPuzzles.length > 0}
				<div class="overflow-x-auto bg-base-100 rounded-2xl shadow-xl border border-base-300/30">
					<table class="table w-full table-fixed">
						<thead>
							<tr class="bg-base-200/50">
								<th class="w-14">รูป</th>
								<th class="w-28 text-center">ปี / สัปดาห์</th>
								<th>ชื่อปริศนา</th>
								<th class="w-44">คำตอบ</th>
								<th class="w-16 text-center">แก้ไข</th>
							</tr>
						</thead>
						<tbody>
							{#each filteredPuzzles as p (p.id || `${p.year}-${p.week}`)}
								{@const weekStr = ('0' + p.week).slice(-2)}
								{@const imgUrl = getPuzzleImageURL('weekly', `${p.year}${weekStr}.jpg`)}
								<tr class="hover">
									<td class="w-14">
										<div class="avatar">
											<div class="w-10 h-10 rounded-lg bg-base-300 flex items-center justify-center overflow-hidden">
												<img src={imgUrl} alt="p-{p.week}" on:error={(e) => (e.currentTarget.style.display = 'none')} />
											</div>
										</div>
									</td>
									<td class="w-28 text-center font-mono text-xs font-semibold whitespace-nowrap">
										<span>{p.year} / {p.week}</span>
									</td>
									<td class="max-w-xs break-words whitespace-normal overflow-hidden">
										<a
											href="/puzzles/weekly/{p.year}/{p.week}"
											target="_blank"
											class="font-medium text-primary hover:underline block break-words"
											title="เปิดดูหน้าปริศนา"
										>
											{p.title || '<ยังไม่มีชื่อ>'}
										</a>
									</td>
									<td class="w-44 break-all overflow-hidden">
										{#if p.answer}
											<code class="bg-base-300 px-2 py-1 rounded text-xs font-mono text-secondary break-all block truncate">{p.answer}</code>
										{:else}
											<span class="badge badge-warning badge-outline text-xs whitespace-nowrap">ยังไม่ออกเฉลย</span>
										{/if}
									</td>
									<td class="w-16 text-center">
										<button
											class="btn btn-xs sm:btn-sm btn-outline btn-info btn-square"
											title="แก้ไข"
											on:click={() => openEditModal(p)}
										>
											<Edit3Icon size="15" />
										</button>
									</td>
								</tr>
							{/each}
						</tbody>
					</table>
				</div>
			{:else}
				<div class="text-center py-12 opacity-60">
					<p>ไม่พบข้อมูลปริศนา</p>
				</div>
			{/if}
		</div>
	{/if}
</div>

<!-- Modal for Add / Edit Puzzle -->
<input type="checkbox" class="modal-toggle" checked={showModal} />
{#if showModal}
	<div class="modal modal-open">
		<div class="modal-box max-w-lg relative bg-neutral text-neutral-content border border-base-300/40">
			<button class="btn btn-sm btn-circle absolute right-2 top-2" on:click={() => (showModal = false)}>✕</button>

			<h3 class="font-bold text-xl text-primary border-b border-base-300/30 pb-2 mb-4">
				{isEditMode ? 'แก้ไขปริศนาประจำสัปดาห์' : 'เพิ่มปริศนาใหม่'}
			</h3>

			<form on:submit|preventDefault={handleSave} class="flex flex-col gap-4">
				<div class="grid grid-cols-2 gap-4">
					<div class="form-control w-full">
						<label class="label"><span class="label-text">ปี (Year)</span></label>
						<input
							type="number"
							bind:value={formYear}
							class="input input-bordered w-full"
							required
							min="2020"
							max="2099"
						/>
					</div>

					<div class="form-control w-full">
						<label class="label"><span class="label-text">สัปดาห์ที่ (Week 1-52)</span></label>
						<input
							type="number"
							bind:value={formWeek}
							class="input input-bordered w-full"
							required
							min="1"
							max="53"
						/>
					</div>
				</div>

				<div class="form-control w-full">
					<label class="label"><span class="label-text">ชื่อปริศนา (Title)</span></label>
					<input
						type="text"
						bind:value={formTitle}
						placeholder="เช่น ศิลปะ, ดิจิตัล, นับพร้อมกัน..."
						class="input input-bordered w-full"
					/>
				</div>

				<div class="form-control w-full">
					<label class="label"><span class="label-text">คำตอบ (Answer) — เว้นว่างได้</span></label>
					<input
						type="text"
						bind:value={formAnswer}
						placeholder="กรอกคำตอบ (ถ้ายังไม่ออกเฉลยให้เว้นว่างไว้)..."
						class="input input-bordered w-full font-mono text-secondary"
					/>
				</div>

				<div class="form-control w-full">
					<label class="label"><span class="label-text">คำใบ้รูปแบบคำตอบ (Answer Guide) — เว้นว่างได้</span></label>
					<input
						type="text"
						bind:value={formAnswerGuide}
						placeholder="เช่น ภาษาอังกฤษ 5 ตัวอักษร, คำขึ้นต้นด้วย ก..."
						class="input input-bordered w-full text-sm"
					/>
				</div>

				<!-- Image File Upload -->
				<div class="form-control w-full">
					<label class="label">
						<span class="label-text">รูปภาพปริศนา (.jpg / .png)</span>
						<span class="label-text-alt opacity-70">
							ตั้งชื่ออัตโนมัติ: <code class="text-primary">{formYear}{('0' + formWeek).slice(-2)}.jpg</code>
						</span>
					</label>
					<input
						type="file"
						accept="image/*"
						on:change={handleFileChange}
						class="file-input file-input-bordered w-full"
					/>
				</div>

				{#if imagePreviewUrl}
					<div class="flex flex-col items-center gap-2 p-3 bg-base-300/30 rounded-xl border border-base-300/50">
						<span class="text-xs opacity-70">ตัวอย่างรูปภาพ:</span>
						<img src={imagePreviewUrl} alt="preview" class="max-h-40 object-contain rounded-lg shadow" />
					</div>
				{/if}

				{#if saveMessage}
					<div class="alert alert-success text-xs p-3 flex flex-col items-start gap-1">
						<div class="flex items-center gap-1.5 font-semibold">
							<CheckCircleIcon size="16" />
							<span>{saveMessage}</span>
						</div>
						{#if newlyCreatedUrl}
							<a
								href={newlyCreatedUrl}
								target="_blank"
								class="btn btn-xs btn-primary gap-1 mt-1 text-[11px]"
							>
								🔗 เปิดดูหน้าปริศนา ({formYear} สัปดาห์ที่ {formWeek}) ↗
							</a>
						{/if}
					</div>
				{/if}

				{#if saveError}
					<div class="alert alert-error text-xs p-3">
						<AlertCircleIcon size="16" />
						<span>{saveError}</span>
					</div>
				{/if}

				<div class="flex justify-end gap-3 mt-4">
					<button type="button" class="btn btn-ghost" on:click={() => (showModal = false)}>ยกเลิก</button>
					<button type="submit" class="btn btn-primary gap-2" disabled={isSaving}>
						{#if isSaving}
							<span class="loading loading-spinner loading-xs" />
							กำลังบันทึก...
						{:else}
							<CheckCircleIcon size="18" />
							บันทึก
						{/if}
					</button>
				</div>
			</form>
		</div>
	</div>
{/if}
