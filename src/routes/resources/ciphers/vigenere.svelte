<script lang="ts">
	import { ArrowLeftIcon, CheckCircleIcon, RepeatIcon, CopyIcon, CheckIcon } from 'svelte-feather-icons';

	let inputText = 'ATTACKATDAWN';
	let key = 'LEMON';
	let isEncodeMode = true;
	let isSwapped = false;
	let isCopied = false;

	function vigenereCipher(text: string, keyword: string, encode: boolean): string {
		if (!keyword) return text;
		const cleanText = text.toUpperCase().replace(/[^A-Z]/g, '');
		const cleanKey = keyword.toUpperCase().replace(/[^A-Z]/g, '');
		if (!cleanKey) return cleanText;

		let keyIdx = 0;
		return cleanText
			.split('')
			.map((ch) => {
				const textCode = ch.charCodeAt(0) - 65;
				const keyShift = cleanKey[keyIdx % cleanKey.length].charCodeAt(0) - 65;
				keyIdx++;

				const resultShift = encode
					? (textCode + keyShift) % 26
					: (textCode - keyShift + 26) % 26;

				return String.fromCharCode(resultShift + 65);
			})
			.join('');
	}

	$: effectiveEncode = isSwapped ? !isEncodeMode : isEncodeMode;
	$: resultText = vigenereCipher(inputText, key, effectiveEncode);

	function copyOutput() {
		navigator.clipboard.writeText(resultText);
		isCopied = true;
		setTimeout(() => (isCopied = false), 2000);
	}

	// Practice Exercises (no hints)
	let answers = ['', '', ''];
	let feedback = ['', '', ''];

	const exercises = [
		{ id: 1, cipherText: 'LXFOPVE (KEY: LEMON)', correctAnswer: 'ATTACKA' },
		{ id: 2, cipherText: 'EGFH (KEY: CODE)', correctAnswer: 'CODE' },
		{ id: 3, cipherText: 'RIZR (KEY: KEY)', correctAnswer: 'HOST' }
	];

	function checkAnswer(idx: number) {
		const user = answers[idx].trim().toUpperCase();
		if (user === exercises[idx].correctAnswer) {
			feedback[idx] = 'correct';
		} else {
			feedback[idx] = 'incorrect';
		}
	}
</script>

<svelte:head>
	<title>Code Breaker | Vigenère Cipher (รหัสวีเชอแนร์) 🔐</title>
	<meta name="description" content="คู่มือ Vigenère Cipher รหัสลับใช้ Keyword พร้อมเครื่องมือแปลงสดและแบบฝึกหัด" />
</svelte:head>

<div class="flex flex-col gap-8 w-full max-w-5xl mx-auto px-4 py-8 select-none">
	<div class="flex items-center justify-between">
		<a href="/resources/ciphers" class="btn btn-ghost btn-xs gap-1.5 font-bold">
			← กลับไปคลังรหัสลับ
		</a>
	</div>

	<header class="space-y-2 text-center md:text-left">
		<div class="flex items-center gap-2 justify-center md:justify-start">
			<span class="badge badge-warning font-bold text-xs py-2 px-3">MEDIUM - ADVANCED</span>
			<span class="text-xs text-slate-400 font-mono uppercase tracking-wider">Polyalphabetic Key</span>
		</div>
		<h1 class="text-3xl lg:text-4xl font-black text-white">Vigenère Cipher (รหัสวีเชอแนร์)</h1>
		<p class="text-slate-300 text-sm lg:text-base leading-relaxed">
			รหัสวีเชอแนร์เป็นรหัสแบบหลากตัวอักษรที่ใช้คำสำคัญ (Keyword) กำหนดค่า Shift แตกต่างกันในแต่ละตำแหน่งอักษร
		</p>
	</header>

	<!-- Converter Tool -->
	<section class="bg-base-200 p-6 rounded-3xl border border-base-300 shadow-xl space-y-4">
		<div class="flex items-center justify-between flex-wrap gap-2">
			<h2 class="text-xl font-extrabold text-accent flex items-center gap-2">
				<span>🔑</span> เครื่องมือแปลงรหัส (Converter)
			</h2>
			<button
				on:click={() => (isSwapped = !isSwapped)}
				class="btn btn-outline btn-xs gap-1.5 font-bold"
			>
				<RepeatIcon size="14" />
				<span>{isSwapped ? 'สลับทิศทาง (ถอดรหัส ➔ เข้ารหัส)' : 'สลับทิศทาง (เข้ารหัส ➔ ถอดรหัส)'}</span>
			</button>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">
			<!-- Input Column -->
			<div class="bg-slate-900/80 p-5 rounded-2xl border border-slate-800 flex flex-col justify-between space-y-4 {isSwapped ? 'order-2' : 'order-1'}">
				<div class="space-y-3">
					<div class="flex items-center gap-2">
						<button
							on:click={() => (isEncodeMode = true)}
							class="btn btn-xs flex-1 {isEncodeMode ? 'btn-primary font-bold' : 'btn-outline'}"
						>
							เข้ารหัส
						</button>
						<button
							on:click={() => (isEncodeMode = false)}
							class="btn btn-xs flex-1 {!isEncodeMode ? 'btn-primary font-bold' : 'btn-outline'}"
						>
							ถอดรหัส
						</button>
					</div>

					<div>
						<label class="block text-xs font-semibold text-slate-400 mb-1">ข้อความ (Input):</label>
						<input
							type="text"
							bind:value={inputText}
							placeholder="พิมพ์ข้อความ..."
							class="input input-bordered w-full bg-slate-950 font-mono text-sm uppercase focus:input-primary"
						/>
					</div>

					<div>
						<label class="block text-xs font-semibold text-slate-400 mb-1">คำสำคัญ (Keyword):</label>
						<input
							type="text"
							bind:value={key}
							placeholder="พิมพ์ Keyword..."
							class="input input-bordered w-full bg-slate-950 font-mono text-sm uppercase focus:input-primary"
						/>
					</div>
				</div>
				<span class="text-[11px] text-slate-500">เลือกโหมดและใส่ Keyword ในการประมวลผล</span>
			</div>

			<!-- Output Column -->
			<div class="bg-slate-900/80 p-5 rounded-2xl border border-slate-800 flex flex-col justify-between space-y-3 {isSwapped ? 'order-1' : 'order-2'}">
				<div>
					<div class="flex items-center justify-between mb-2">
						<label class="block text-xs font-semibold text-slate-400">
							ผลลัพธ์ ({effectiveEncode ? 'Ciphertext' : 'Plaintext'}):
						</label>
						<button on:click={copyOutput} class="btn btn-ghost btn-xs gap-1 text-slate-400 hover:text-white">
							{#if isCopied}
								<CheckIcon size="14" class="text-success" />
								<span class="text-success">คัดลอกแล้ว</span>
							{:else}
								<CopyIcon size="14" />
								<span>คัดลอกข้อความ</span>
							{/if}
						</button>
					</div>

					<div class="bg-slate-950 p-4 rounded-xl border border-slate-800 min-h-[110px] font-mono text-lg text-primary tracking-widest break-words flex items-center">
						{resultText || 'พิมพ์ข้อความและ Keyword เพื่อดูผลลัพธ์...'}
					</div>
				</div>

				<span class="text-[11px] text-slate-500">ประมวลผลด้วย Vigenère Polyalphabetic Shift</span>
			</div>
		</div>
	</section>

	<!-- Practice Exercises -->
	<section class="bg-base-200 p-6 rounded-3xl border border-base-300 shadow-xl space-y-6">
		<h2 class="text-xl font-extrabold text-warning flex items-center gap-2">
			<span>✏️</span> แบบฝึกหัดทดลองถอดรหัส (Practice Exercises)
		</h2>

		<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
			{#each exercises as ex, idx}
				<div class="bg-slate-900/80 p-5 rounded-2xl border border-slate-800 space-y-3 flex flex-col justify-between">
					<div class="space-y-3">
						<span class="font-bold text-xs text-slate-300">ข้อที่ {ex.id}</span>

						<div class="bg-slate-950 p-3 rounded-xl border border-slate-800 font-mono text-lg text-primary tracking-widest text-center min-h-[60px] flex items-center justify-center">
							{ex.cipherText}
						</div>
					</div>

					<div class="space-y-2 pt-2">
						<div class="flex items-center gap-2">
							<input
								type="text"
								bind:value={answers[idx]}
								placeholder="คำตอบ..."
								class="input input-bordered input-sm flex-1 bg-slate-950 font-mono text-sm uppercase"
							/>
							<button on:click={() => checkAnswer(idx)} class="btn btn-primary btn-sm font-bold">
								ตรวจ
							</button>
						</div>

						{#if feedback[idx] === 'correct'}
							<div class="flex items-center gap-1 text-xs font-bold text-success">
								<CheckCircleIcon size="14" />
								<span>ถูกต้อง!</span>
							</div>
						{:else if feedback[idx] === 'incorrect'}
							<div class="text-xs font-bold text-error">
								✕ ยังไม่ถูกต้อง
							</div>
						{/if}
					</div>
				</div>
			{/each}
		</div>
	</section>
</div>
