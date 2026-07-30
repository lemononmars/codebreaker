<script lang="ts">
	import { ArrowLeftIcon, CheckCircleIcon, RepeatIcon, CopyIcon, CheckIcon, GlobeIcon } from 'svelte-feather-icons';

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
	const reverseMorseEng: Record<string, string> = {};
	Object.entries(englishMorse).forEach(([k, v]) => (reverseMorseEng[v] = k));
	Object.entries(numberMorse).forEach(([k, v]) => (reverseMorseEng[v] = k));

	const reverseMorseThai: Record<string, string> = {};
	Object.entries(thaiMorse).forEach(([k, v]) => (reverseMorseThai[v] = k));
	Object.entries(numberMorse).forEach(([k, v]) => (reverseMorseThai[v] = k));

	let inputText = 'SOS CODEBREAKER';
	let langMode: 'EN' | 'TH' = 'EN';
	let isSwapped = false; // false = Encode (Text -> Morse), true = Decode (Morse -> Text)
	let isCopied = false;

	$: processedResult = (() => {
		if (!inputText) return '';
		if (!isSwapped) {
			// Encode text -> Morse
			const map = langMode === 'EN' ? englishMorse : thaiMorse;
			return inputText
				.toUpperCase()
				.split('')
				.map((ch) => {
					if (ch === ' ') return '/';
					return map[ch] || numberMorse[ch] || ch;
				})
				.join(' ');
		} else {
			// Decode Morse -> Text
			const reverseMap = langMode === 'EN' ? reverseMorseEng : reverseMorseThai;
			return inputText
				.trim()
				.split(/\s+/)
				.map((code) => {
					if (code === '/') return ' ';
					return reverseMap[code] || code;
				})
				.join('');
		}
	})();

	function copyOutput() {
		navigator.clipboard.writeText(processedResult);
		isCopied = true;
		setTimeout(() => (isCopied = false), 2000);
	}

	// Practice Exercises
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
		<a href="/resources/ciphers" class="btn btn-ghost btn-xs gap-1.5 font-bold text-slate-400 hover:text-white">
			<ArrowLeftIcon size="14" />
			<span>กลับไปคลังรหัสลับ</span>
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

	<!-- Converter Tool -->
	<section class="bg-slate-900 p-6 rounded-3xl border border-slate-800 shadow-xl space-y-4">
		<div class="flex items-center justify-between flex-wrap gap-2 border-b border-slate-800 pb-3">
			<!-- Language Switcher -->
			<div class="flex items-center gap-2">
				<span class="text-xs font-bold text-slate-400 flex items-center gap-1">
					<GlobeIcon size="14" class="text-amber-400" />
					<span>ภาษา (Language):</span>
				</span>
				<div class="join border border-slate-800 bg-slate-950 rounded-xl p-0.5">
					<button
						on:click={() => {
							langMode = 'EN';
							if (inputText === 'สวัสดี') inputText = 'SOS CODEBREAKER';
						}}
						class="join-item btn btn-xs font-extrabold rounded-lg {langMode === 'EN'
							? 'btn-primary text-white'
							: 'btn-ghost text-slate-400'}"
					>
						English (EN)
					</button>
					<button
						on:click={() => {
							langMode = 'TH';
							if (inputText === 'SOS CODEBREAKER') inputText = 'สวัสดี';
						}}
						class="join-item btn btn-xs font-extrabold rounded-lg {langMode === 'TH'
							? 'btn-primary text-white'
							: 'btn-ghost text-slate-400'}"
					>
						ไทย (TH)
					</button>
				</div>
			</div>

			<button
				on:click={() => {
					isSwapped = !isSwapped;
					inputText = isSwapped ? '... --- ...' : (langMode === 'EN' ? 'SOS CODEBREAKER' : 'สวัสดี');
				}}
				class="btn btn-outline btn-xs gap-1.5 font-bold border-slate-700 text-slate-300 hover:bg-slate-800"
			>
				<RepeatIcon size="14" />
				<span>{isSwapped ? 'สลับทิศทาง (ถอดรหัส Morse ➔ ข้อความ)' : 'สลับทิศทาง (ข้อความ ➔ เข้ารหัส Morse)'}</span>
			</button>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">
			<!-- Input Column -->
			<div class="bg-slate-950 p-5 rounded-2xl border border-slate-800 flex flex-col justify-between space-y-3 {isSwapped ? 'order-2' : 'order-1'}">
				<div>
					<label class="block text-xs font-semibold text-slate-400 mb-2">
						{isSwapped ? 'Morse Code (Input):' : `ข้อความ ${langMode === 'EN' ? 'ภาษาอังกฤษ' : 'ภาษาไทย'} (Input):`}
					</label>
					<textarea
						bind:value={inputText}
						rows="4"
						placeholder={isSwapped ? 'วางรหัสมอร์ส เช่น ... --- ...' : 'พิมพ์ข้อความ...'}
						class="textarea textarea-bordered w-full bg-slate-900 border-slate-800 text-white font-mono text-sm uppercase focus:border-amber-500"
					></textarea>
				</div>
				<span class="text-[11px] text-slate-500">
					{isSwapped ? 'โหมดถอดรหัส: วางจุด (.) และขีด (-) เพื่อแปลงกลับเป็นข้อความ' : 'โหมดเข้ารหัส: แปลงข้อความและตัวเลขเป็น Morse Code'}
				</span>
			</div>

			<!-- Output Column -->
			<div class="bg-slate-950 p-5 rounded-2xl border border-slate-800 flex flex-col justify-between space-y-3 {isSwapped ? 'order-1' : 'order-2'}">
				<div>
					<div class="flex items-center justify-between mb-2">
						<label class="block text-xs font-semibold text-slate-400">
							{isSwapped ? 'ผลลัพธ์ข้อความ (Output):' : 'ผลลัพธ์ Morse Code (Output):'}
						</label>
						<button on:click={copyOutput} class="btn btn-ghost btn-xs gap-1 text-slate-400 hover:text-white">
							{#if isCopied}
								<CheckIcon size="14" class="text-emerald-400" />
								<span class="text-emerald-400 font-bold">คัดลอกแล้ว</span>
							{:else}
								<CopyIcon size="14" />
								<span>คัดลอกข้อความ</span>
							{/if}
						</button>
					</div>

					<div class="bg-slate-900 p-4 rounded-xl border border-slate-800 min-h-[110px] font-mono text-lg text-amber-400 tracking-widest break-words flex items-center">
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
	<section class="bg-slate-900 p-6 rounded-3xl border border-slate-800 shadow-xl space-y-5">
		<h2 class="text-xl font-extrabold text-amber-400 flex items-center gap-2 border-b border-slate-800 pb-3">
			<span>✏️</span> แบบฝึกหัดทดลองถอดรหัส (Practice Exercises)
		</h2>

		<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
			{#each exercises as ex, idx}
				<div class="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-4 flex flex-col justify-between">
					<div class="space-y-3">
						<span class="font-bold text-xs text-slate-400">ข้อที่ {ex.id}</span>

						<div class="bg-slate-900 p-3 rounded-xl border border-slate-800 font-mono text-lg text-amber-400 tracking-widest text-center min-h-[60px] flex items-center justify-center">
							{ex.cipherText}
						</div>
					</div>

					<div class="space-y-2 pt-2">
						<div class="join w-full">
							<input
								type="text"
								bind:value={answers[idx]}
								placeholder="พิมพ์คำตอบ..."
								class="input input-sm join-item bg-slate-900 border-slate-800 text-white font-mono uppercase w-32 focus:border-amber-500"
							/>
							<button on:click={() => checkAnswer(idx)} class="btn btn-primary btn-sm join-item font-bold rounded-r-xl">
								ตรวจ
							</button>
						</div>

						{#if feedback[idx] === 'correct'}
							<div class="flex items-center gap-1 text-xs font-bold text-emerald-400">
								<CheckCircleIcon size="14" />
								<span>ถูกต้อง!</span>
							</div>
						{:else if feedback[idx] === 'incorrect'}
							<div class="text-xs font-bold text-rose-400">
								✕ ยังไม่ถูกต้อง ลองใหม่อีกครั้ง
							</div>
						{/if}
					</div>
				</div>
			{/each}
		</div>
	</section>
</div>
