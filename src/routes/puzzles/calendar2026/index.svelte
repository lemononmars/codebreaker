<script lang="ts">
	import { fade } from 'svelte/transition';

	const questions = [
		{ label: 'Q1', hash: '7aee5b5dbb9e781589946f9087eb09e4a880d57e5d52441daaf7d49f9c2e629f' }, // october
		{ label: 'Q2', hash: 'fa75b5c25fc089798cf96479474da0ebe84c6cb743a1f1010bb05fd8756275b7' }, // march
		{ label: 'Q3', hash: 'c2afdd38565b01f278bc8a5513cd8354840fec53de25dd45af4d23d6939abe8a' }, // august
		{ label: 'Q4', hash: '53e2975b5e720223b6f4e8317049d74dcddef8669e42f9fd5b94cc86378350e7' }, // february
		{
			label: 'Meta (ตอบวันที่และชื่อเดือนภาษาอังกฤษติดกัน เช่น 18august, 01may)',
			hash: 'f92838b216390f6e7309d7d1b62218aef5aa3628acb20bbeea9adc8bb2427e59'
		} // 26august (no space)
	];

	let inputs = Array(5).fill('');
	let status = Array(5).fill('neutral'); // neutral, correct, incorrect
	let showModal = false;

	async function checkAnswer(index: number) {
		if (!inputs[index]) {
			status[index] = 'neutral';
			return;
		}

		// Strip all whitespace before validation
		const val = inputs[index].replace(/\s+/g, '').toLowerCase();
		const msgBuffer = new TextEncoder().encode(val);
		const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
		const hashArray = Array.from(new Uint8Array(hashBuffer));
		const hashHex = hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');

		if (hashHex === questions[index].hash) {
			status[index] = 'correct';

			// Show modal if Meta (last question) is solved
			if (index === 4) {
				showModal = true;
			}
		} else {
			status[index] = 'incorrect';
		}
	}
</script>

<svelte:head>
	<title>Calendar 2026 Postcard Puzzles</title>
</svelte:head>

<div class="container mx-auto px-4 py-12 flex flex-col items-center min-h-screen">
	<div class="text-center mb-12">
		<h1 class="text-4xl font-bold text-primary mb-4 tracking-wider">Calendar 2026</h1>
		<h2 class="text-2xl opacity-75">Postcard Puzzles</h2>
	</div>

	<div class="grid gap-6 w-full max-w-md">
		{#each questions as q, i}
			<div class="form-control w-full relative">
				<label class="label">
					<span class="label-text font-bold text-lg">{q.label}</span>
				</label>
				<div class="relative">
					<input
						type="text"
						placeholder="Answer..."
						class="input input-bordered w-full pr-10 transition-colors duration-300
              {status[i] === 'correct' ? 'input-success text-success' : ''}
              {status[i] === 'incorrect' ? 'input-error text-error' : ''}"
						bind:value={inputs[i]}
						on:input={() => (status[i] = 'neutral')}
						on:change={() => checkAnswer(i)}
						on:keydown={(e) => e.key === 'Enter' && checkAnswer(i)}
					/>

					{#if status[i] === 'correct'}
						<div class="absolute right-3 top-1/2 -translate-y-1/2 text-success" transition:fade>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								><path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M5 13l4 4L19 7"
								/></svg
							>
						</div>
					{:else if status[i] === 'incorrect'}
						<div class="absolute right-3 top-1/2 -translate-y-1/2 text-error" transition:fade>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								><path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M6 18L18 6M6 6l12 12"
								/></svg
							>
						</div>
					{/if}
				</div>
			</div>
		{/each}
	</div>
</div>

<!-- Congratulations Modal -->
<input type="checkbox" id="success-modal" class="modal-toggle" bind:checked={showModal} />
<!-- svelte-ignore a11y-label-has-associated-control -->
<label class="modal cursor-pointer" for="success-modal">
	<label class="modal-box relative" for="">
		<h3 class="text-3xl font-bold text-center mb-4">🎉 Congratulations! 🎉</h3>
		<p class="text-center text-lg mb-6">สวัสดีปีใหม่ 2026! ขอให้เป็นปีม้าที่ฮึกเหิมนะครับ</p>
		<div class="modal-action justify-center">
			<label for="success-modal" class="btn btn-primary">Close</label>
		</div>
	</label>
</label>
