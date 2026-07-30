<script lang="ts">
	import { ArrowLeftIcon, CheckCircleIcon, RepeatIcon, CopyIcon, CheckIcon } from 'svelte-feather-icons';

	let inputText = 'CODE';
	let isSwapped = false;
	let isCopied = false;

	const baconMap: Record<string, string> = {
		'A': 'AAAAA', 'B': 'AAAAB', 'C': 'AAABA', 'D': 'AAABB', 'E': 'AABAA',
		'F': 'AABAB', 'G': 'AABBA', 'H': 'AABBB', 'I': 'ABAAA', 'J': 'ABAAB',
		'K': 'ABABA', 'L': 'ABABB', 'M': 'ABBAA', 'N': 'ABBAB', 'O': 'ABBBA',
		'P': 'ABBBB', 'Q': 'BAAAA', 'R': 'BAAAB', 'S': 'BAABA', 'T': 'BAABB',
		'U': 'BABAA', 'V': 'BABAB', 'W': 'BABBA', 'X': 'BABBB', 'Y': 'BBAAA', 'Z': 'BBAAB'
	};

	const reverseBacon: Record<string, string> = {};
	Object.entries(baconMap).forEach(([k, v]) => (reverseBacon[v] = k));

	$: processedResult = (() => {
		if (!isSwapped) {
			return inputText
				.toUpperCase()
				.split('')
				.map((ch) => baconMap[ch] || ch)
				.join(' ');
		} else {
			return inputText
				.trim()
				.toUpperCase()
				.split(/\s+/)
				.map((code) => reverseBacon[code] || code)
				.join('');
		}
	})();

	function copyOutput() {
		navigator.clipboard.writeText(processedResult);
		isCopied = true;
		setTimeout(() => (isCopied = false), 2000);
	}

	let answers = ['', '', ''];
	let feedback = ['', '', ''];

	const exercises = [
		{ id: 1, cipherText: 'AAABA ABBBA AAABB AABAA', correctAnswer: 'CODE' },
		{ id: 2, cipherText: 'BAABA ABBBA BAABA', correctAnswer: 'SOS' },
		{ id: 3, cipherText: 'AABBB AABAA ABABB ABABB ABBBA', correctAnswer: 'HELLO' }
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
	<title>Code Breaker | Baconian Cipher 🔐</title>
	<meta name="description" content="คู่มือและแบบฝึกหัด Baconian Cipher รหัสเบคอน AAAAA BBBBB" />
</svelte:head>

<div class="flex flex-col gap-8 w-full max-w-5xl mx-auto px-4 py-8 select-none">
	<div class="flex items-center justify-between">
		<a href="/resources/ciphers" class="btn btn-ghost btn-xs gap-1.5 font-bold">
			← กลับไปคลังรหัสลับ
		</a>
	</div>

	<header class="space-y-2 text-center md:text-left">
		<div class="flex items-center gap-2 justify-center md:justify-start">
			<span class="badge badge-info font-bold text-xs py-2 px-3">EASY - MEDIUM</span>
			<span class="text-xs text-slate-400 font-mono uppercase tracking-wider">Steganographic Cipher</span>
		</div>
		<h1 class="text-3xl lg:text-4xl font-black text-white">Baconian Cipher (รหัสเบคอน)</h1>
		<p class="text-slate-300 text-sm lg:text-base leading-relaxed">
			ประดิษฐ์โดย Francis Bacon ในปี 1605 โดยแทนตัวอักษรด้วยชุดอักษร A และ B ความยาว 5 ตัวอักษร
		</p>
	</header>

	<!-- Converter Tool -->
	<section class="bg-base-200 p-6 rounded-3xl border border-base-300 shadow-xl space-y-4">
		<div class="flex items-center justify-between flex-wrap gap-2">
			<h2 class="text-xl font-extrabold text-accent flex items-center gap-2">
				<span>⚡</span> เครื่องมือแปลงรหัส (Converter)
			</h2>
			<button
				on:click={() => {
					isSwapped = !isSwapped;
					inputText = isSwapped ? 'AAABA ABBBA AAABB AABAA' : 'CODE';
				}}
				class="btn btn-outline btn-xs gap-1.5 font-bold"
			>
				<RepeatIcon size="14" />
				<span>{isSwapped ? 'สลับทิศทาง (ถอดรหัส ➔ ข้อความ)' : 'สลับทิศทาง (ข้อความ ➔ Baconian)'}</span>
			</button>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">
			<div class="bg-slate-900/80 p-5 rounded-2xl border border-slate-800 flex flex-col justify-between space-y-3 {isSwapped ? 'order-2' : 'order-1'}">
				<div>
					<label class="block text-xs font-semibold text-slate-400 mb-2">
						{isSwapped ? 'Baconian Ciphertext (Input):' : 'ข้อความ Plaintext (Input):'}
					</label>
					<textarea
						bind:value={inputText}
						rows="4"
						placeholder={isSwapped ? 'วางรหัสเบคอน เช่น AAABA ABBBA...' : 'พิมพ์ข้อความ...'}
						class="textarea textarea-bordered w-full bg-slate-950 font-mono text-sm uppercase focus:textarea-primary"
					></textarea>
				</div>
				<span class="text-[11px] text-slate-500">แปลงข้อความเปรียบเทียบรหัส 5 บิต A/B</span>
			</div>

			<div class="bg-slate-900/80 p-5 rounded-2xl border border-slate-800 flex flex-col justify-between space-y-3 {isSwapped ? 'order-1' : 'order-2'}">
				<div>
					<div class="flex items-center justify-between mb-2">
						<label class="block text-xs font-semibold text-slate-400">ผลลัพธ์ (Output):</label>
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

					<div class="bg-slate-950 p-4 rounded-xl border border-slate-800 min-h-[110px] font-mono text-base text-primary tracking-wider break-words flex items-center">
						{processedResult || 'พิมพ์หรือวางเพื่อดูผลลัพธ์...'}
					</div>
				</div>

				<span class="text-[11px] text-slate-500">ผลลัพธ์การแปลงรหัส Baconian</span>
			</div>
		</div>
	</section>

	<!-- Exercises (Fixed non-overflowing flex layout) -->
	<section class="bg-base-200 p-6 rounded-3xl border border-base-300 shadow-xl space-y-6">
		<h2 class="text-xl font-extrabold text-warning flex items-center gap-2">
			<span>✏️</span> แบบฝึกหัด (Exercises)
		</h2>

		<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
			{#each exercises as ex, idx}
				<div class="bg-slate-900/80 p-5 rounded-2xl border border-slate-800 space-y-3 flex flex-col justify-between">
					<div class="space-y-3">
						<span class="font-bold text-xs text-slate-300">ข้อที่ {ex.id}</span>

						<div class="bg-slate-950 p-3 rounded-xl border border-slate-800 font-mono text-xs text-primary tracking-wide text-center min-h-[60px] flex items-center justify-center break-all">
							{ex.cipherText}
						</div>
					</div>

					<div class="space-y-2 pt-2">
						<div class="flex flex-col sm:flex-row gap-2 w-full">
							<input
								type="text"
								bind:value={answers[idx]}
								placeholder="คำตอบ..."
								class="input input-bordered input-sm flex-1 bg-slate-950 font-mono text-sm uppercase min-w-0"
							/>
							<button on:click={() => checkAnswer(idx)} class="btn btn-primary btn-sm font-bold shrink-0">
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
