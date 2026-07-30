<script lang="ts">
	import { ArrowLeftIcon, CheckCircleIcon, RepeatIcon, CopyIcon, CheckIcon } from 'svelte-feather-icons';

	let inputText = 'CODE';
	let isSwapped = false;
	let isCopied = false;

	const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
	const binaryTable: Record<string, string> = {};
	alphabet.forEach((ch) => {
		binaryTable[ch] = ch.charCodeAt(0).toString(2).padStart(8, '0');
	});

	function textToBinary(text: string): string {
		return text
			.split('')
			.map((ch) => ch.charCodeAt(0).toString(2).padStart(8, '0'))
			.join(' ');
	}

	function binaryToText(binStr: string): string {
		return binStr
			.trim()
			.split(/\s+/)
			.map((b) => {
				const num = parseInt(b, 2);
				if (!isNaN(num)) return String.fromCharCode(num);
				return b;
			})
			.join('');
	}

	$: processedResult = isSwapped ? binaryToText(inputText) : textToBinary(inputText);

	function copyOutput() {
		navigator.clipboard.writeText(processedResult);
		isCopied = true;
		setTimeout(() => (isCopied = false), 2000);
	}

	let answers = ['', '', ''];
	let feedback = ['', '', ''];

	const exercises = [
		{ id: 1, cipherText: '01000011 01001111 01000100 01000101', correctAnswer: 'CODE' },
		{ id: 2, cipherText: '01010011 01001111 01010011', correctAnswer: 'SOS' },
		{ id: 3, cipherText: '01001000 01000101 01001100 01001100 01001111', correctAnswer: 'HELLO' }
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
	<title>Code Breaker | Binary Code Cipher 🔐</title>
	<meta name="description" content="คู่มือและแบบฝึกหัด Binary Code รหัสเลขฐานสอง 0 และ 1" />
</svelte:head>

<div class="flex flex-col gap-8 w-full max-w-5xl mx-auto px-4 py-8 select-none">
	<div class="flex items-center justify-between">
		<a href="/resources/ciphers" class="btn btn-ghost btn-xs gap-1.5 font-bold">
			← กลับไปคลังรหัสลับ
		</a>
	</div>

	<header class="space-y-2 text-center md:text-left">
		<div class="flex items-center gap-2 justify-center md:justify-start">
			<span class="badge badge-success font-bold text-xs py-2 px-3">EASY</span>
			<span class="text-xs text-slate-400 font-mono uppercase tracking-wider">Binary System</span>
		</div>
		<h1 class="text-3xl lg:text-4xl font-black text-white">Binary Code (รหัสเลขฐานสอง 0101)</h1>
		<p class="text-slate-300 text-sm lg:text-base leading-relaxed">
			รหัสคอมพิวเตอร์พื้นฐาน โดยแทนแต่ละตัวอักษรด้วยรหัสตัวเลขฐานสองขนาด 8 บิต (Byte)
		</p>
	</header>

	<!-- Visual Reference Table (ASCII A-Z to Binary) -->
	<section class="bg-base-200 p-6 rounded-3xl border border-base-300 shadow-xl space-y-4">
		<h2 class="text-xl font-extrabold text-primary flex items-center gap-2">
			<span>💻</span> ตารางอ้างอิง ASCII Binary (A - Z)
		</h2>

		<div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 font-mono text-xs">
			{#each alphabet as letter}
				<div class="bg-slate-900/90 p-2.5 rounded-xl border border-slate-800 flex items-center justify-between px-3">
					<span class="font-bold text-amber-400 text-sm">{letter}</span>
					<span class="text-white font-mono text-[11px]">{binaryTable[letter]}</span>
				</div>
			{/each}
		</div>
	</section>

	<!-- Converter Tool -->
	<section class="bg-base-200 p-6 rounded-3xl border border-base-300 shadow-xl space-y-4">
		<div class="flex items-center justify-between flex-wrap gap-2">
			<h2 class="text-xl font-extrabold text-accent flex items-center gap-2">
				<span>⚡</span> เครื่องมือแปลงรหัส (Converter)
			</h2>
			<button
				on:click={() => {
					isSwapped = !isSwapped;
					inputText = isSwapped ? '01000011 01001111 01000100 01000101' : 'CODE';
				}}
				class="btn btn-outline btn-xs gap-1.5 font-bold"
			>
				<RepeatIcon size="14" />
				<span>{isSwapped ? 'สลับทิศทาง (ถอด Binary ➔ ข้อความ)' : 'สลับทิศทาง (ข้อความ ➔ Binary)'}</span>
			</button>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">
			<div class="bg-slate-900/80 p-5 rounded-2xl border border-slate-800 flex flex-col justify-between space-y-3 {isSwapped ? 'order-2' : 'order-1'}">
				<div>
					<label class="block text-xs font-semibold text-slate-400 mb-2">
						{isSwapped ? 'Binary Code (Input):' : 'ข้อความ (Input):'}
					</label>
					<textarea
						bind:value={inputText}
						rows="4"
						placeholder={isSwapped ? 'วางเลขฐานสอง เช่น 01000011...' : 'พิมพ์ข้อความ...'}
						class="textarea textarea-bordered w-full bg-slate-950 font-mono text-sm uppercase focus:textarea-primary"
					></textarea>
				</div>
				<span class="text-[11px] text-slate-500">แปลงข้อความและเลขฐานสอง (8-bit)</span>
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

				<span class="text-[11px] text-slate-500">ผลลัพธ์เลขฐานสองคั่นด้วยเว้นวรรค</span>
			</div>
		</div>
	</section>

	<!-- Exercises -->
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
						<div class="join w-full">
							<input
								type="text"
								bind:value={answers[idx]}
								placeholder="พิมพ์คำตอบ..."
								class="input input-sm join-item bg-slate-900 border-slate-800 text-white font-mono uppercase flex-1 rounded-l-xl focus:border-emerald-500"
							/>
							<button on:click={() => checkAnswer(idx)} class="btn btn-primary btn-sm join-item font-bold rounded-r-xl">
								ตรวจคำตอบ
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
