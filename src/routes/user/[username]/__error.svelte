<script context="module">
	export function load({ error, status }) {
		return {
			props: {
				error,
				status
			}
		};
	}
</script>

<script>
	import { UserXIcon, SearchIcon } from 'svelte-feather-icons';
	export let error, status;
</script>

<svelte:head>
	<title>User Not Found | Code Breaker</title>
</svelte:head>

<div class="min-h-[70vh] flex items-center justify-center px-4">
	<div
		class="max-w-md w-full text-center space-y-8 p-10 bg-neutral rounded-3xl shadow-2xl border border-white/5"
	>
		<div class="relative">
			<div class="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
			<div class="relative flex justify-center text-primary">
				<div class="relative">
					<UserXIcon size="80" strokeWidth={1.5} />
					<div class="absolute -bottom-2 -right-2 bg-neutral p-1 rounded-full">
						<SearchIcon size="24" class="text-error" />
					</div>
				</div>
			</div>
		</div>

		<div class="space-y-4 relative">
			<h1 class="text-4xl font-black text-white">User Not Found</h1>
			<p class="text-xl text-primary font-medium">ไม่พบผู้เล่นนี้ในระบบ</p>
			<p class="text-base-content/60 text-sm italic">
				"{error.message.replace('User not found: ', '')}" ยังไม่ได้สมัครสมาชิก
			</p>
		</div>

		<div class="pt-6 flex flex-col gap-4">
			<a
				href="/puzzles/weekly"
				class="btn btn-primary rounded-full shadow-lg shadow-primary/20 hover:scale-105 transition-transform"
			>
				ดูอันดับรวม
			</a>
			<a
				href="/"
				class="btn btn-outline rounded-full border-white/10 hover:bg-white/5 transition-all"
			>
				กลับหน้าหลัก
			</a>
		</div>
	</div>
</div>
