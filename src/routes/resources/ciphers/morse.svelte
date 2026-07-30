<script lang="ts">
	import { ArrowLeftIcon, CheckCircleIcon, RepeatIcon, CopyIcon, CheckIcon } from 'svelte-feather-icons';

	const englishMorse: Record<string, string> = {
		'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.',
		'G': '--.', 'H': '....', 'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..',
		'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.',
		'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-',
		'Y': '-.--', 'Z': '--..'
	};

	const numberMorse: Record<string, string> = {
		'1': '.----', '2': '..---', '3': '...--', '4': '....-', '5': '.....',
		'6': '-....', '7': '--...', '8': '---..', '9': '----.', '0': '-----'
	};

	const thaiMorse: Record<string, string> = {
		'ก': '.-.', 'ข': '-.-.', 'ค': '-.-', 'ง': '--.', 'จ': '-..-.', 'ฉ': '---.',
		'ช': '-..-', 'ซ': '--..', 'ด': '-..', 'ต': '-', 'ถ': '-.-', 'ท': '-..-',
		'น': '-.', 'บ': '-...', 'ป': '.--.', 'ผ': '--..', 'พ': '.--', 'ฟ': '..-.',
		'ม': '--', 'ย': '-.--', 'ร': '.-.', 'ล': '.-..', 'ว': '.--', 'ส': '...',
		'ห': '....', 'อ': '---', 'ะ': '.-', 'า': '.-', 'ิ': '..', 'ี': '..',
		'ึ': '...', 'ื': '...', 'ุ': '..-', 'ู': '..-', 'เ': '.', 'แ': '..',
		'โ': '---', 'ใ': '.-.-', 'ไ': '.-.-'
	};

	// Reverse mapping for decoding Morse -> Text
	const reverseMorse: Record<string, string> = {};
	Object.entries(englishMorse).forEach(([k, v]) => (reverseMorse[v] = k));
	Object.entries(numberMorse).forEach(([k, v]) => (reverseMorse[v] = k));
	Object.entries(thaiMorse).forEach(([k, v]) => { if (!reverseMorse[v]) reverseMorse[v] = k; });

	let inputText = 'SOS CODEBREAKER';
	let isSwapped = false; // false = Encode (Text -> Morse), true = Decode (Morse -> Text)
	let isCopied = false;

	$: processedResult = (() => {
		if (!isSwapped) {
			// Encode text -> Morse
			return inputText
				.toUpperCase()
				.split('')
				.map((ch) => {
					if (ch === ' ') return '/';
					return englishMorse[ch] || numberMorse[ch] || thaiMorse[ch] || ch;
				})
				.join(' ');
		} else {
			// Decode Morse -> Text
			return inputText
				.trim()
				.split(/\s+/)
				.map((code) => {
					if (code === '/') return ' ';
					return reverseMorse[code] || code;
				})
				.join('');
		}
	})();

	function copyOutput() {
		navigator.clipboard.writeText(processedResult);
		isCopied = true;
		setTimeout(() => (isCopied = false), 2000);
	}

	// Exercises without hints
	let answers = ['', '', ''];
	let feedback = ['', '', ''];

	const exercises = [
		{ id: 1, cipherText: '... --- ...', correctAnswer: 'SOS' },
		{ id: 2, cipherText: '-.-. --- -.. .', correctAnswer: 'CODE' },
		{ id: 3, cipherText: '..-. .. .-. ... -', correctAnswer: 'FIRST' }
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
	<title>Code Breaker | Morse Code (รหัสมอร์ส) 🔐</title>
	<meta name="description" content="คู่มือรหัสมอร์สภาษาอังกฤษ ภาษาไทย และตัวเลข พร้อมเครื่องมือแปลงสดและแบบฝึกหัด" />
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
			<span class="text-xs text-slate-400 font-mono uppercase tracking-wider">Signal & Rhythm</span>
		</div>
		<h1 class="text-3xl lg:text-4xl font-black text-white">Morse Code (รหัสมอร์ส)</h1>
		<p class="text-slate-300 text-sm lg:text-base leading-relaxed">
			รหัสมอร์สใช้จุด (.) สำหรับสัญญาณสั้น และขีด (-) สำหรับสัญญาณยาว ครอบคลุมทั้งภาษาอังกฤษ ตัวเลข และภาษาไทย
		</p>
	</header>

	<!-- Morse Lookup Tables -->
	<section class="bg-base-200 p-6 rounded-3xl border border-base-300 shadow-xl space-y-6">
		<h2 class="text-xl font-extrabold text-primary flex items-center gap-2">
			<span>📻</span> ตารางเปรียบเทียบ Morse Code (A-Z, 0-9 & ภาษาไทย)
		</h2>

		<!-- Section 1: A-Z -->
		<div class="space-y-2">
			<h3 class="text-sm font-bold text-amber-400">1. ตัวอักษรภาษาอังกฤษ (English A - Z)</h3>
			<div class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-2 font-mono text-xs">
				{#each Object.entries(englishMorse) as [letter, code]}
					<div class="bg-slate-900/80 p-2.5 rounded-xl border border-slate-800 flex items-center justify-between px-3">
						<span class="font-bold text-amber-400 text-sm">{letter}</span>
						<span class="text-white tracking-widest font-extrabold">{code}</span>
					</div>
				{/each}
			</div>
		</div>

		<!-- Section 2: Numbers -->
		<div class="space-y-2">
			<h3 class="text-sm font-bold text-cyan-400">2. ตัวเลข (Numbers 0 - 9)</h3>
			<div class="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-10 gap-2 font-mono text-xs">
				{#each Object.entries(numberMorse) as [num, code]}
					<div class="bg-slate-900/80 p-2.5 rounded-xl border border-slate-800 flex items-center justify-between px-3">
						<span class="font-bold text-cyan-400 text-sm">{num}</span>
						<span class="text-white tracking-widest font-extrabold text-[11px]">{code}</span>
					</div>
				{/each}
			</div>
		</div>

		<!-- Section 3: Thai Morse -->
		<div class="space-y-2">
			<h3 class="text-sm font-bold text-emerald-400">3. ภาษาไทย (Thai Morse Code)</h3>
			<div class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-2 font-mono text-xs">
				{#each Object.entries(thaiMorse) as [char, code]}
					<div class="bg-slate-900/80 p-2.5 rounded-xl border border-slate-800 flex items-center justify-between px-3">
						<span class="font-bold text-emerald-400 text-sm">{char}</span>
						<span class="text-white tracking-widest font-extrabold text-[11px]">{code}</span>
					</div>
				{/each}
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
				on:click={() => {
					isSwapped = !isSwapped;
					inputText = isSwapped ? '... --- ...' : 'SOS CODEBREAKER';
				}}
				class="btn btn-outline btn-xs gap-1.5 font-bold"
			>
				<RepeatIcon size="14" />
				<span>{isSwapped ? 'สลับทิศทาง (ถอดรหัส Morse ➔ ข้อความ)' : 'สลับทิศทาง (ข้อความ ➔ เข้ารหัส Morse)'}</span>
			</button>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">
			<!-- Input Column -->
			<div class="bg-slate-900/80 p-5 rounded-2xl border border-slate-800 flex flex-col justify-between space-y-3 {isSwapped ? 'order-2' : 'order-1'}">
				<div>
					<label class="block text-xs font-semibold text-slate-400 mb-2">
						{isSwapped ? 'Morse Code (Input):' : 'ข้อความ (Input):'}
					</label>
					<textarea
						bind:value={inputText}
						rows="4"
						placeholder={isSwapped ? 'วางรหัสมอร์ส เช่น ... --- ...' : 'พิมพ์ข้อความ...'}
						class="textarea textarea-bordered w-full bg-slate-950 font-mono text-sm uppercase focus:textarea-primary"
					></textarea>
				</div>
				<span class="text-[11px] text-slate-500">
					{isSwapped ? 'โหมดถอดรหัส: วางจุด (.) และขีด (-) เพื่อแปลงกลับเป็นข้อความ' : 'โหมดเข้ารหัส: แปลงภาษาอังกฤษ ตัวเลข และภาษาไทยเป็น Morse Code'}
				</span>
			</div>

			<!-- Output Column -->
			<div class="bg-slate-900/80 p-5 rounded-2xl border border-slate-800 flex flex-col justify-between space-y-3 {isSwapped ? 'order-1' : 'order-2'}">
				<div>
					<div class="flex items-center justify-between mb-2">
						<label class="block text-xs font-semibold text-slate-400">
							{isSwapped ? 'ผลลัพธ์ข้อความ (Output):' : 'ผลลัพธ์ Morse Code (Output):'}
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

				<span class="text-[11px] text-slate-500">
					{isSwapped ? 'ผลลัพธ์การถอดรหัสข้อความ' : 'แสดงจุด (.) ขีด (-) และสแลช (/) สำหรับเว้นวรรค'}
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
