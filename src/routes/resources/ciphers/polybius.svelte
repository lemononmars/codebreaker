<script lang="ts">
	import { ArrowLeftIcon, CheckCircleIcon, RepeatIcon, CopyIcon, CheckIcon } from 'svelte-feather-icons';

	let inputText = 'CODEBREAKER';
	let isSwapped = false;
	let isCopied = false;

	const polybiusGrid = [
		['A', 'B', 'C', 'D', 'E'],
		['F', 'G', 'H', 'I/J', 'K'],
		['L', 'M', 'N', 'O', 'P'],
		['Q', 'R', 'S', 'T', 'U'],
		['V', 'W', 'X', 'Y', 'Z']
	];

	const polybiusMap: Record<string, string> = {
		'A': '11', 'B': '12', 'C': '13', 'D': '14', 'E': '15',
		'F': '21', 'G': '22', 'H': '23', 'I': '24', 'J': '24', 'K': '25',
		'L': '31', 'M': '32', 'N': '33', 'O': '34', 'P': '35',
		'Q': '41', 'R': '42', 'S': '43', 'T': '44', 'U': '45',
		'V': '51', 'W': '52', 'X': '53', 'Y': '54', 'Z': '55'
	};

	const reversePolybius: Record<string, string> = {
		'11': 'A', '12': 'B', '13': 'C', '14': 'D', '15': 'E',
		'21': 'F', '22': 'G', '23': 'H', '24': 'I', '25': 'K',
		'31': 'L', '32': 'M', '33': 'N', '34': 'O', '35': 'P',
		'41': 'Q', '42': 'R', '43': 'S', '44': 'T', '45': 'U',
		'51': 'V', '52': 'W', '53': 'X', '54': 'Y', '55': 'Z'
	};

	$: processedResult = (() => {
		if (!isSwapped) {
			return inputText
				.toUpperCase()
				.split('')
				.map((ch) => polybiusMap[ch] || ch)
				.join(' ');
		} else {
			return inputText
				.trim()
				.split(/\s+/)
				.map((num) => reversePolybius[num] || num)
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
		{ id: 1, cipherText: '13 34 14 15', correctAnswer: 'CODE' },
		{ id: 2, cipherText: '43 34 43', correctAnswer: 'SOS' },
		{ id: 3, cipherText: '23 15 31 31 34', correctAnswer: 'HELLO' }
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
	<title>Code Breaker | Polybius Square Cipher 🔐</title>
	<meta name="description" content="คู่มือและแบบฝึกหัด Polybius Square Cipher ตารางพิกัดตัวเลข 5x5" />
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
			<span class="text-xs text-slate-400 font-mono uppercase tracking-wider">Coordinates Substitution</span>
		</div>
		<h1 class="text-3xl lg:text-4xl font-black text-white">Polybius Square Cipher (ตารางโพลีบิอุส)</h1>
		<p class="text-slate-300 text-sm lg:text-base leading-relaxed">
			รหัสตารางพิกัดตัวเลข 5x5 ถูกคิดค้นโดยนักประวัติศาสตร์ชาวกรีก Polybius โดยแทนอักษรด้วยพิกัด [แถว, คอลัมน์]
		</p>
	</header>

	<!-- Grid Chart -->
	<section class="bg-base-200 p-6 rounded-3xl border border-base-300 shadow-xl space-y-4">
		<h2 class="text-xl font-extrabold text-primary flex items-center gap-2">
			<span>📊</span> ตารางพิกัด Polybius 5x5 Grid
		</h2>

		<div class="overflow-x-auto">
			<table class="table border border-slate-800 text-center font-mono mx-auto">
				<thead>
					<tr class="bg-slate-900 text-amber-400">
						<th class="border border-slate-800">#</th>
						<th class="border border-slate-800">1</th>
						<th class="border border-slate-800">2</th>
						<th class="border border-slate-800">3</th>
						<th class="border border-slate-800">4</th>
						<th class="border border-slate-800">5</th>
					</tr>
				</thead>
				<tbody>
					{#each polybiusGrid as row, rIdx}
						<tr>
							<th class="bg-slate-900 text-cyan-400 border border-slate-800">{rIdx + 1}</th>
							{#each row as cell}
								<td class="bg-slate-950 font-bold text-white border border-slate-800">{cell}</td>
							{/each}
						</tr>
					{/each}
				</tbody>
			</table>
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
					inputText = isSwapped ? '13 34 14 15' : 'CODEBREAKER';
				}}
				class="btn btn-outline btn-xs gap-1.5 font-bold"
			>
				<RepeatIcon size="14" />
				<span>{isSwapped ? 'สลับทิศทาง (ถอดรหัสตัวเลข ➔ ข้อความ)' : 'สลับทิศทาง (ข้อความ ➔ พิกัดตัวเลข)'}</span>
			</button>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">
			<div class="bg-slate-900/80 p-5 rounded-2xl border border-slate-800 flex flex-col justify-between space-y-3 {isSwapped ? 'order-2' : 'order-1'}">
				<div>
					<label class="block text-xs font-semibold text-slate-400 mb-2">
						{isSwapped ? 'ตัวเลขพิกัด (Input):' : 'ข้อความ (Input):'}
					</label>
					<textarea
						bind:value={inputText}
						rows="4"
						placeholder={isSwapped ? 'วางตัวเลขพิกัด เช่น 13 34 14 15...' : 'พิมพ์ข้อความ...'}
						class="textarea textarea-bordered w-full bg-slate-950 font-mono text-sm uppercase focus:textarea-primary"
					></textarea>
				</div>
				<span class="text-[11px] text-slate-500">แปลงข้อความเปรียบเทียบพิกัดแถว-คอลัมน์</span>
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

					<div class="bg-slate-950 p-4 rounded-xl border border-slate-800 min-h-[110px] font-mono text-lg text-primary tracking-widest break-words flex items-center">
						{processedResult || 'พิมพ์หรือวางเพื่อดูผลลัพธ์...'}
					</div>
				</div>

				<span class="text-[11px] text-slate-500">ผลลัพธ์การแปลงรหัส</span>
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

						<div class="bg-slate-950 p-3 rounded-xl border border-slate-800 font-mono text-lg text-primary tracking-widest text-center min-h-[60px] flex items-center justify-center">
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
