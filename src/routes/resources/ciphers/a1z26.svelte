<script lang="ts">
	import { ArrowLeftIcon, CheckCircleIcon, RepeatIcon, CopyIcon, CheckIcon } from 'svelte-feather-icons';

	let inputText = 'CODEBREAKER';
	let isSwapped = false; // false = Encode (Text -> Numbers), true = Decode (Numbers -> Text)
	let isCopied = false;

	function textToA1Z26(text: string): string {
		return text
			.toUpperCase()
			.split('')
			.map((ch) => {
				const code = ch.charCodeAt(0);
				if (code >= 65 && code <= 90) {
					return (code - 64).toString();
				}
				return ch;
			})
			.filter(Boolean)
			.join('-');
	}

	function a1z26ToText(numStr: string): string {
		return numStr
			.trim()
			.split(/[-,\s]+/)
			.map((n) => {
				const val = parseInt(n, 10);
				if (!isNaN(val) && val >= 1 && val <= 26) {
					return String.fromCharCode(val + 64);
				}
				return n;
			})
			.join('');
	}

	$: processedResult = isSwapped ? a1z26ToText(inputText) : textToA1Z26(inputText);

	function copyOutput() {
		navigator.clipboard.writeText(processedResult);
		isCopied = true;
		setTimeout(() => (isCopied = false), 2000);
	}

	// Practice Exercises (no hints)
	let answers = ['', '', ''];
	let feedback = ['', '', ''];

	const exercises = [
		{ id: 1, cipherText: '3-15-4-5', correctAnswer: 'CODE' },
		{ id: 2, cipherText: '16-21-26-26-12-5', correctAnswer: 'PUZZLE' },
		{ id: 3, cipherText: '3-15-4-5-2-18-5-1-11-5-18', correctAnswer: 'CODEBREAKER' }
	];

	function checkAnswer(idx: number) {
		const user = answers[idx].trim().toUpperCase();
		if (user === exercises[idx].correctAnswer) {
			feedback[idx] = 'correct';
		} else {
			feedback[idx] = 'incorrect';
		}
	}

	const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
</script>

<svelte:head>
	<title>Code Breaker | A1Z26 Cipher (รหัสตัวเลขแทนอักษร) 🔐</title>
	<meta name="description" content="คู่มือ A1Z26 Cipher รหัสตัวเลขแทนตัวอักษร A=1 Z=26 พร้อมเครื่องมือแปลงสดและแบบฝึกหัด" />
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
			<span class="text-xs text-slate-400 font-mono uppercase tracking-wider">Numeric Index</span>
		</div>
		<h1 class="text-3xl lg:text-4xl font-black text-white">A1Z26 Cipher (รหัสตัวเลขแทนอักษร)</h1>
		<p class="text-slate-300 text-sm lg:text-base leading-relaxed">
			A1Z26 เป็นรหัสลับทดตัวอักษรตรงตามลำดับดรรชนีของตัวอักษรในภาษาอังกฤษ โดยกำหนดให้ A=1, B=2, C=3 ไปจนถึง Z=26
		</p>
	</header>

	<!-- Chart -->
	<section class="bg-base-200 p-6 rounded-3xl border border-base-300 shadow-xl space-y-4">
		<h2 class="text-xl font-extrabold text-primary flex items-center gap-2">
			<span>🔢</span> ตารางเทียบดรรชนีตัวเลข A1Z26
		</h2>

		<div class="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-9 lg:grid-cols-13 gap-2 font-mono text-center text-xs">
			{#each alphabet as letter, i}
				<div class="bg-slate-900/80 p-2.5 rounded-xl border border-slate-800">
					<div class="font-bold text-amber-400 text-sm">{letter}</div>
					<div class="text-slate-300 text-xs font-mono">{i + 1}</div>
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
					inputText = isSwapped ? '3-15-4-5' : 'CODEBREAKER';
				}}
				class="btn btn-outline btn-xs gap-1.5 font-bold"
			>
				<RepeatIcon size="14" />
				<span>{isSwapped ? 'สลับทิศทาง (ถอดรหัสตัวเลข ➔ ข้อความ)' : 'สลับทิศทาง (ข้อความ ➔ ตัวเลข)'}</span>
			</button>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">
			<!-- Input Column -->
			<div class="bg-slate-900/80 p-5 rounded-2xl border border-slate-800 flex flex-col justify-between space-y-3 {isSwapped ? 'order-2' : 'order-1'}">
				<div>
					<label class="block text-xs font-semibold text-slate-400 mb-2">
						{isSwapped ? 'ตัวเลข A1Z26 (Input):' : 'ข้อความภาษาอังกฤษ (Input):'}
					</label>
					<textarea
						bind:value={inputText}
						rows="4"
						placeholder={isSwapped ? 'วางตัวเลข เช่น 3-15-4-5...' : 'พิมพ์ข้อความ...'}
						class="textarea textarea-bordered w-full bg-slate-950 font-mono text-sm uppercase focus:textarea-primary"
					></textarea>
				</div>
				<span class="text-[11px] text-slate-500">
					{isSwapped ? 'โหมดถอดรหัส: แปลงตัวเลขดรรชนี (คั่นด้วย - หรือ เว้นวรรค) กลับเป็นตัวอักษร' : 'โหมดเข้ารหัส: แปลงตัวอักษร A-Z เป็นลำดับตัวเลข 1-26'}
				</span>
			</div>

			<!-- Output Column -->
			<div class="bg-slate-900/80 p-5 rounded-2xl border border-slate-800 flex flex-col justify-between space-y-3 {isSwapped ? 'order-1' : 'order-2'}">
				<div>
					<div class="flex items-center justify-between mb-2">
						<label class="block text-xs font-semibold text-slate-400">
							{isSwapped ? 'ผลลัพธ์ข้อความ (Output):' : 'ผลลัพธ์ตัวเลข (Output):'}
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
						{processedResult || 'พิมพ์หรือวางเพื่อดูผลลัพธ์...'}
					</div>
				</div>

				<span class="text-[11px] text-slate-500">
					{isSwapped ? 'ผลลัพธ์การแปลงตัวเลขกลับเป็นข้อความ' : 'คั่นแต่ละตัวเลขด้วยเครื่องหมายยัติภังค์ (-)'}
				</span>
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
