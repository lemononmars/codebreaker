<script lang="ts">
	import { ArrowLeftIcon, CheckCircleIcon, RepeatIcon, CopyIcon, CheckIcon } from 'svelte-feather-icons';

	let inputText = 'THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG';
	let shift = 3;
	let isSwapped = false; // false = Encode (Plain -> Shift), true = Decode (Shift -> Plain)
	let isCopied = false;

	const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

	$: shiftedAlphabet = alphabet.map((ch, idx) => {
		return String.fromCharCode(((idx + shift) % 26) + 65);
	});

	function caesarCipher(str: string, shiftAmount: number): string {
		const s = ((shiftAmount % 26) + 26) % 26;
		return str
			.toUpperCase()
			.split('')
			.map((ch) => {
				const code = ch.charCodeAt(0);
				if (code >= 65 && code <= 90) {
					return String.fromCharCode(((code - 65 + s) % 26) + 65);
				}
				return ch;
			})
			.join('');
	}

	$: processedResult = (() => {
		if (!isSwapped) {
			return caesarCipher(inputText, shift);
		} else {
			// Reverse decode: subtract shift
			return caesarCipher(inputText, 26 - (shift % 26));
		}
	})();

	function copyOutput() {
		navigator.clipboard.writeText(processedResult);
		isCopied = true;
		setTimeout(() => (isCopied = false), 2000);
	}

	// Practice Exercises (no hints)
	let answers = ['', '', ''];
	let feedback = ['', '', ''];

	const exercises = [
		{ id: 1, cipherText: 'KHOOR (Shift +3)', correctAnswer: 'HELLO' },
		{ id: 2, cipherText: 'EXSHS (Shift +1)', correctAnswer: 'DWRGR' },
		{ id: 3, cipherText: 'PBQR (Shift +13 / ROT13)', correctAnswer: 'CODE' }
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
	<title>Code Breaker | Caesar Cipher (รหัสซีซาร์) 🔐</title>
	<meta name="description" content="คู่มือ Caesar Cipher & ROT13 พร้อมแอนิเมชันตาราง Shift และแบบฝึกหัด" />
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
			<span class="text-xs text-slate-400 font-mono uppercase tracking-wider">Shift Substitution</span>
		</div>
		<h1 class="text-3xl lg:text-4xl font-black text-white">Caesar Cipher (รหัสซีซาร์)</h1>
		<p class="text-slate-300 text-sm lg:text-base leading-relaxed">
			รหัสซีซาร์ใช้เทคนิคขยับตำแหน่งตัวอักษรไปข้างหน้าหรือถอยหลังตามจำนวนช่องที่กำหนด (เช่น Shift +3 หรือ ROT13)
		</p>
	</header>

	<!-- Animated Caesar Shift Pairing Table (Similar to Atbash) -->
	<section class="bg-base-200 p-6 rounded-3xl border border-base-300 shadow-xl space-y-4">
		<div class="flex items-center justify-between flex-wrap gap-2">
			<h2 class="text-xl font-extrabold text-primary flex items-center gap-2">
				<span>🔄</span> ตารางการจับคู่ตัวอักษร Caesar Shift
			</h2>
			<span class="badge badge-primary font-mono text-xs font-bold px-3 py-2">Shift +{shift}</span>
		</div>

		<div class="overflow-x-auto pb-2">
			<div class="grid grid-rows-2 gap-1 font-mono text-center text-xs min-w-[650px]">
				<!-- Plaintext Alphabet -->
				<div class="flex gap-1">
					{#each alphabet as char}
						<div class="flex-1 bg-slate-900 p-2 rounded-t font-bold text-amber-400 border border-slate-800">
							{char}
						</div>
					{/each}
				</div>
				<!-- Animated Shifted Ciphertext Alphabet -->
				<div class="flex gap-1">
					{#each shiftedAlphabet as char}
						<div
							class="flex-1 bg-slate-950 p-2 rounded-b font-bold text-cyan-400 border border-slate-800 transition-all duration-300 transform scale-105"
						>
							{char}
						</div>
					{/each}
				</div>
			</div>
		</div>
	</section>

	<!-- Converter Tool -->
	<section class="bg-base-200 p-6 rounded-3xl border border-base-300 shadow-xl space-y-4">
		<div class="flex items-center justify-between flex-wrap gap-2">
			<h2 class="text-xl font-extrabold text-accent flex items-center gap-2">
				<span>⚡</span> เครื่องมือแปลงรหัส (Converter)
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
					<label class="block text-xs font-semibold text-slate-400">
						{isSwapped ? 'ข้อความ Ciphertext (Input):' : 'ข้อความ Plaintext (Input):'}
					</label>
					<textarea
						bind:value={inputText}
						rows="3"
						placeholder="พิมพ์ข้อความภาษาอังกฤษ..."
						class="textarea textarea-bordered w-full bg-slate-950 font-mono text-sm uppercase focus:textarea-primary"
					></textarea>

					<div class="space-y-1.5">
						<div class="flex items-center justify-between text-xs">
							<span class="font-bold text-amber-400">จำนวน Shift:</span>
							<span class="badge badge-primary font-mono text-xs font-bold">Shift +{shift}</span>
						</div>
						<input
							type="range"
							min="0"
							max="25"
							bind:value={shift}
							class="range range-primary range-xs"
						/>
					</div>
				</div>
				<span class="text-[11px] text-slate-500">
					{isSwapped ? 'โหมดถอดรหัส: ถอยหลังตัวอักษรตามค่า Shift' : 'โหมดเข้ารหัส: ขยับตัวอักษรไปข้างหน้าตามค่า Shift'}
				</span>
			</div>

			<!-- Output Column -->
			<div class="bg-slate-900/80 p-5 rounded-2xl border border-slate-800 flex flex-col justify-between space-y-3 {isSwapped ? 'order-1' : 'order-2'}">
				<div>
					<div class="flex items-center justify-between mb-2">
						<label class="block text-xs font-semibold text-slate-400">
							{isSwapped ? 'ผลลัพธ์ Plaintext (Output):' : 'ผลลัพธ์ Ciphertext (Output):'}
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
						{processedResult || 'พิมพ์ข้อความเพื่อดูผลลัพธ์...'}
					</div>
				</div>

				<span class="text-[11px] text-slate-500">ผลลัพธ์ประมวลผลด้วยค่า Shift +{shift}</span>
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
