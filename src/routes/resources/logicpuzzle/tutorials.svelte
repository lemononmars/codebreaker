<script lang="ts">
	import { ArrowLeftIcon, ExternalLinkIcon, PlayCircleIcon } from 'svelte-feather-icons';

	const playlistUrl = 'https://www.youtube.com/playlist?list=PLKQysr88T8R8VOsAHW9LRaFq1Gbrir1AK';

	const tutorialVideos = [
		{
			title: 'Logic Puzzle Tutorials Playlist (เพลย์ลิสต์รวมคลิปสอน)',
			url: playlistUrl,
			description: 'รวมคลิปวิดีโอสอนเทคนิคและวิธีแก้ Logic Puzzles โดย Codebreaker Thailand',
			tag: 'Full Playlist'
		},
		{
			title: 'สอนวิธีเล่น Nonogram / Picross (イラストロジック)',
			url: playlistUrl,
			description: 'เรียนรู้พื้นฐานการถอดรหัสตารางตัวเลขเพื่อระบายสีภาพซ่อน',
			tag: 'Tutorial Video'
		},
		{
			title: 'สอนวิธีเล่น Slitherlink (スリザーリンク / Loop)',
			url: playlistUrl,
			description: 'เทคนิคการลากเส้นวนรอบจุดตามตัวเลขในช่องตาราง',
			tag: 'Tutorial Video'
		},
		{
			title: 'สอนวิธีเล่น Nurikabe (ぬりかべ)',
			tag: 'Tutorial Video',
			url: playlistUrl,
			description: 'เทคนิคการแบ่งเกาะตัวเลขและระบายผืนทะเลในตาราง'
		},
		{
			title: 'สอนวิธีเล่น Sudoku & Kakuro (カックロ)',
			tag: 'Tutorial Video',
			url: playlistUrl,
			description: 'กลยุทธ์การเติมตัวเลขและการวิเคราะห์ผลรวมช่อง'
		},
		{
			title: 'สอนวิธีเล่น Akari / Light Up (美術館)',
			tag: 'Tutorial Video',
			url: playlistUrl,
			description: 'วิธีการวางหลอดไฟเพื่อส่องสว่างห้องพิพิธภัณฑ์'
		}
	];
</script>

<svelte:head>
	<title>Code Breaker | Logic Puzzle Tutorials 🎥</title>
	<meta name="description" content="คู่มือและคลิปสอนวิธีเล่น Logic Puzzles โดย Codebreaker Thailand" />
</svelte:head>

<div class="flex flex-col gap-8 w-full max-w-5xl mx-auto px-4 py-8 select-none">
	<!-- Navigation -->
	<div class="flex items-center justify-between">
		<a href="/resources/logicpuzzle" class="btn btn-ghost btn-xs gap-1.5 font-bold">
			← กลับไปหน้า Logic Puzzles
		</a>
	</div>

	<!-- Header -->
	<header class="text-center max-w-2xl mx-auto space-y-3">
		<div class="w-14 h-14 rounded-2xl bg-amber-500/10 text-amber-400 flex items-center justify-center border border-amber-500/20 mx-auto">
			<PlayCircleIcon size="32" />
		</div>
		<h1 class="text-3xl lg:text-4xl font-black tracking-tight text-white">
			Logic Puzzle Tutorials 🎥
		</h1>
		<p class="text-slate-400 text-sm lg:text-base leading-relaxed">
			คลิปวิดีโอสอนเทคนิคและวิธีแก้ลอจิกพัซเซิลสไตล์ญี่ปุ่น โดย Codebreaker Thailand
		</p>
	</header>

	<!-- Main Playlist Banner Card -->
	<div class="bg-gradient-to-r from-amber-950/40 via-slate-900 to-slate-900 border border-amber-500/30 p-6 rounded-3xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-4">
		<div class="space-y-2 text-center md:text-left">
			<span class="badge badge-warning font-bold text-xs">YouTube Playlist</span>
			<h2 class="text-xl font-bold text-white">Codebreaker Thailand - Logic Puzzle Tutorials</h2>
			<p class="text-xs text-slate-300">เข้าชมเพลย์ลิสต์ฉบับเต็มบน YouTube เพื่อรับชมวิดีโอสอนทั้งหมด</p>
		</div>
		<a
			href={playlistUrl}
			target="_blank"
			rel="noopener"
			class="btn btn-warning gap-2 shrink-0 font-bold shadow-lg hover:scale-105 transition-transform"
		>
			<ExternalLinkIcon size="18" />
			<span>เปิดดูบน YouTube</span>
		</a>
	</div>

	<!-- Tutorial Video Cards Grid -->
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
		{#each tutorialVideos as video}
			<a
				href={video.url}
				target="_blank"
				rel="noopener"
				class="card bg-slate-900/60 hover:bg-slate-900/90 border border-slate-800 hover:border-amber-400/50 transition-all duration-300 hover:-translate-y-1 shadow-md block h-full rounded-2xl overflow-hidden group p-5"
			>
				<div class="flex flex-col justify-between h-full space-y-4">
					<div class="space-y-2">
						<div class="flex items-center justify-between">
							<span class="badge badge-ghost text-xs text-amber-400 font-bold border-amber-400/30">
								{video.tag}
							</span>
							<ExternalLinkIcon size="16" class="text-slate-500 group-hover:text-amber-400 transition-colors" />
						</div>
						<h3 class="font-bold text-base text-white group-hover:text-amber-400 transition-colors leading-snug">
							{video.title}
						</h3>
						<p class="text-xs text-slate-400 font-light leading-relaxed">
							{video.description}
						</p>
					</div>

					<div class="pt-2 text-xs font-bold text-amber-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
						<span>รับชมคลิปวิดีโอ</span>
						<span>↗</span>
					</div>
				</div>
			</a>
		{/each}
	</div>
</div>
