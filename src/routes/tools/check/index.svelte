<script lang="ts">
	import { encode } from './helper';
	import { LinkIcon, CheckCircleIcon } from 'svelte-feather-icons';

	let title: string = '';
	let answer: string = '';
	let prefix: string = 'https://codebreakerth.vercel.app/check/v1';
	let link: string = '';
	let submitted: boolean = false;

	const create = () => {
		if (!title || !answer) return;
		submitted = true;
		link = `${prefix}/${encode(title.toUpperCase())}/${encode(answer)}`;
	};

	let copied = false;
	function copyLink() {
		navigator.clipboard.writeText(link);
		copied = true;
		setTimeout(() => (copied = false), 2000);
	}
</script>

<svelte:head>
	<title>Answer Checker | Code Breaker</title>
	<meta name="description" content="สร้างหน้าเว็บสำหรับให้ผู้เล่นมาตรวจคำตอบของโจทย์คุณ" />
	<meta property="og:title" content="สร้างลิงก์ตรวจคำตอบ" />
	<meta property="og:description" content="สร้างหน้าเว็บสำหรับให้ผู้เล่นมาตรวจคำตอบของโจทย์คุณ" />
	<meta property="og:type" content="website" />
	<meta name="twitter:card" content="summary" />
</svelte:head>

<div class="container mx-auto px-4 py-12 max-w-2xl min-h-screen">
	<div class="text-center mb-10">
		<h1 class="text-3xl lg:text-4xl font-extrabold mb-2">Answer Checker</h1>
		<p class="text-base-content/60">สร้างหน้าเว็บสำหรับให้ผู้เล่นมาตรวจคำตอบของโจทย์คุณ</p>
	</div>

	<div class="card bg-base-100 shadow-xl border border-base-200">
		<div class="card-body gap-6">
			<div class="form-control">
				<label class="label">
					<span class="label-text font-bold">ชื่อโจทย์</span>
				</label>
				<input
					class="input input-bordered input-lg focus:input-primary"
					type="text"
					placeholder="เช่น ปริศนาเขาวงกต"
					bind:value={title}
				/>
			</div>

			<div class="form-control">
				<label class="label">
					<span class="label-text font-bold">คำตอบที่ถูกต้อง</span>
				</label>
				<input
					class="input input-bordered input-lg focus:input-primary"
					type="text"
					placeholder="พิมพ์คำตอบที่นี่..."
					bind:value={answer}
				/>
			</div>

			<button class="btn btn-primary btn-lg mt-4 gap-2" on:click={create}>
				<CheckCircleIcon size="20" />
				สร้างลิงก์
			</button>

			{#if submitted}
				<div class="mt-6 p-6 bg-base-200 rounded-2xl border border-base-300">
					<div class="flex items-center justify-between mb-4">
						<span class="text-sm font-bold uppercase tracking-widest opacity-50"
							>ลิงก์ของคุณสำเร็จแล้ว:</span
						>
						<button class="btn btn-ghost btn-xs text-primary" on:click={copyLink}>
							{copied ? 'คัดลอกแล้ว!' : 'คัดลอกลิงก์'}
						</button>
					</div>
					<div
						class="flex items-center gap-3 bg-base-100 p-4 rounded-xl border border-base-300 break-all overflow-hidden"
					>
						<LinkIcon size="18" class="text-primary flex-shrink-0" />
						<a
							href={link}
							target="_blank"
							class="link link-primary font-medium text-sm lg:text-base">{link}</a
						>
					</div>
				</div>
			{/if}
		</div>
	</div>
</div>
