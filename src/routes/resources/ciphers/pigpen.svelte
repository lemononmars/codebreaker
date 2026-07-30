<script lang="ts">
	import { ArrowLeftIcon, CheckCircleIcon, RepeatIcon, CopyIcon, CheckIcon } from 'svelte-feather-icons';
	import PigpenSVG from '$lib/components/PigpenSVG.svelte';
	import PigpenGridHelper from '$lib/components/PigpenGridHelper.svelte';

	let inputText = 'CODEBREAKER';
	let isSwapped = false; // false = Plaintext -> Pigpen | true = Pigpen -> Plaintext
	let isCopied = false;

	const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

	// Reverse map for decoding
	const pigpenReverseMap: Record<string, string> = {
		'┘': 'A', '└': 'B', '┴': 'C', '┐': 'D', '┌': 'E', '┬': 'F', '┤': 'G', '├': 'H', '┼': 'I',
		'┘•': 'J', '└•': 'K', '┴•': 'L', '┐•': 'M', '┌•': 'N', '┬•': 'O', '┤•': 'P', '├•': 'Q', '┼•': 'R',
		'V': 'S', '>': 'T', '<': 'U', '^': 'V', 'V•': 'W', '>•': 'X', '<•': 'Y', '^•': 'Z'
	};

	$: charArray = inputText.toUpperCase().split('');

	$: decodedResult = (() => {
		if (!isSwapped) return inputText;
		// Decode mode: user inputs ciphertext or letters
		return inputText.toUpperCase().split('').map(ch => pigpenReverseMap[ch] || ch).join('');
	})();

	function copyOutput() {
		navigator.clipboard.writeText(inputText);
		isCopied = true;
		setTimeout(() => (isCopied = false), 2000);
	}

	// Practice Exercises (without hints)
	let answers = ['', '', ''];
	let feedback = ['', '', ''];

	const exercises = [
		{ id: 1, word: 'JONO' },
		{ id: 2, word: 'CODE' },
		{ id: 3, word: 'STUV' }
	];

	function checkAnswer(idx: number) {
		const user = answers[idx].trim().toUpperCase();
		if (user === exercises[idx].word) {
			feedback[idx] = 'correct';
		} else {
			feedback[idx] = 'incorrect';
		}
	}
</script>

<svelte:head>
	<title>Code Breaker | Pigpen Cipher (รหัสคอกหมู) 🔐</title>
	<meta name="description" content="คู่มือและแบบฝึกหัดถอดรหัสลับ Pigpen Cipher พร้อมเครื่องมือแปลงรหัสเวกเตอร์ SVG" />
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
			<span class="text-xs text-slate-400 font-mono uppercase tracking-wider">Geometric Substitution</span>
		</div>
		<h1 class="text-3xl lg:text-4xl font-black text-white">Pigpen Cipher (รหัสคอกหมู)</h1>
		<p class="text-slate-300 text-sm lg:text-base leading-relaxed">
			Pigpen Cipher (หรือ Masonic Cipher) เป็นรหัสลับสัญลักษณ์ทดตัวอักษรด้วยเส้นตารางและจุด ใช้อย่างแพร่หลายในองค์กรฟรีเมสันและเกม Escape Room
		</p>
	</header>

	<!-- Visual Sharp / X Grid Helper Diagrams -->
	<section class="bg-base-200 p-6 rounded-3xl border border-base-300 shadow-xl space-y-4">
		<h2 class="text-xl font-extrabold text-primary flex items-center gap-2">
			<span>📐</span> ผังโครงสร้าง Pigpen Grids (Sharp # & X Shapes)
		</h2>
		<PigpenGridHelper />
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
			<div class="bg-slate-900/80 p-5 rounded-2xl border border-slate-800 flex flex-col justify-between space-y-3 {isSwapped ? 'order-2' : 'order-1'}">
				<div>
					<label class="block text-xs font-semibold text-slate-400 mb-2">
						{isSwapped ? 'ข้อความ Pigpen (Ciphertext Input):' : 'ข้อความภาษาอังกฤษ (Plaintext Input):'}
					</label>
					<textarea
						bind:value={inputText}
						rows="4"
						placeholder={isSwapped ? 'พิมพ์หรือวางสัญลักษณ์/ตัวอักษร Pigpen...' : 'พิมพ์ข้อความภาษาอังกฤษ...'}
						class="textarea textarea-bordered w-full bg-slate-950 font-mono text-sm uppercase focus:textarea-primary"
					></textarea>
				</div>
				<span class="text-[11px] text-slate-500">
					{isSwapped ? 'โหมดถอดรหัส: แปลง Pigpen กลับเป็นตัวอักษรภาษาอังกฤษ' : 'โหมดเข้ารหัส: แปลงตัวอักษร A-Z เป็นสัญลักษณ์ Pigpen SVG'}
				</span>
			</div>

			<!-- Output Column -->
			<div class="bg-slate-900/80 p-5 rounded-2xl border border-slate-800 flex flex-col justify-between space-y-3 {isSwapped ? 'order-1' : 'order-2'}">
				<div>
					<div class="flex items-center justify-between mb-2">
						<label class="block text-xs font-semibold text-slate-400">
							{isSwapped ? 'ผลลัพธ์ข้อความภาษาอังกฤษ (Output):' : 'ผลลัพธ์สัญลักษณ์ Pigpen (Output):'}
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

					<div class="bg-slate-950 p-4 rounded-xl border border-slate-800 min-h-[110px] flex flex-wrap items-center gap-2 font-mono text-lg text-primary tracking-widest">
						{#if !isSwapped}
							{#if charArray.length > 0}
								{#each charArray as ch}
									{#if /[A-Z]/.test(ch)}
										<div class="p-2 bg-slate-900 rounded-lg border border-slate-800 text-primary flex items-center justify-center" title={ch}>
											<PigpenSVG char={ch} size={28} />
										</div>
									{:else if ch === ' '}
										<div class="w-6"></div>
									{:else}
										<span class="font-mono text-slate-400">{ch}</span>
									{/if}
								{/each}
							{:else}
								<span class="text-xs text-slate-500 font-mono">พิมพ์ข้อความเพื่อดูผลลัพธ์...</span>
							{/if}
						{:else}
							<span>{decodedResult || 'พิมพ์หรือวางรหัสเพื่อถอดข้อความ...'}</span>
						{/if}
					</div>
				</div>

				<span class="text-[11px] text-slate-500">ผลลัพธ์เวกเตอร์ SVG ความคมชัดสูง</span>
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

						<div class="bg-slate-950 p-3 rounded-xl border border-slate-800 flex flex-wrap items-center justify-center gap-2 min-h-[60px]">
							{#each ex.word.split('') as c}
								<div class="p-1.5 bg-slate-900 rounded border border-slate-800 text-primary">
									<PigpenSVG char={c} size={24} />
								</div>
							{/each}
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
