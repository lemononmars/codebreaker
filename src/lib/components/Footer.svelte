<script lang="ts">
	import logo from '$lib/images/logo.png';
	import { FacebookIcon, YoutubeIcon, InstagramIcon, MailIcon } from 'svelte-feather-icons';
</script>

<footer class="w-full block bg-slate-950 border-t border-slate-800/80 text-slate-300 py-12 pb-28 lg:pb-12 px-6 sm:px-12 mt-16 text-left">
	<div class="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 items-start text-left">
		<!-- Column 1: Brand & Social Connections -->
		<div class="flex flex-col gap-4 text-left">
			<div class="flex items-center gap-3">
				<img class="h-9 w-9 object-contain" src={logo} alt="logo" />
				<span class="text-2xl font-black tracking-tighter text-white">CODEBREAKER</span>
			</div>
			<p class="text-xs text-slate-400 leading-relaxed font-light text-left">
				ศูนย์รวมปริศนาถอดรหัส คำศัพท์ภาษาไทย และเครื่องมือสร้างเกมปริศนาทุกชนิด
			</p>
			
			<div class="flex flex-wrap items-center gap-2.5 pt-2">
				<a
					href="https://facebook.com/codebreakerTH"
					target="_blank"
					rel="noreferrer"
					class="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-blue-500/50 hover:bg-blue-500/10 transition-all"
					aria-label="Facebook"
				>
					<FacebookIcon size="18" />
				</a>
				<a
					href="https://www.instagram.com/codebreakerth/"
					target="_blank"
					rel="noreferrer"
					class="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-pink-500/50 hover:bg-pink-500/10 transition-all"
					aria-label="Instagram"
				>
					<InstagramIcon size="18" />
				</a>
				<a
					href="https://youtube.com/@codebreakerth"
					target="_blank"
					rel="noreferrer"
					class="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-rose-500/50 hover:bg-rose-500/10 transition-all"
					aria-label="YouTube"
				>
					<YoutubeIcon size="18" />
				</a>
				<a
					href="https://www.tiktok.com/@codebreakerthailand"
					target="_blank"
					rel="noreferrer"
					class="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all"
					aria-label="TikTok"
				>
					<svg
						role="img"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
						width="18"
						height="18"
						fill="currentColor"
					>
						<path
							d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"
						/>
					</svg>
				</a>
				<a
					href="mailto:codebreakerth@gmail.com"
					target="_blank"
					rel="noreferrer"
					class="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-emerald-500/50 hover:bg-emerald-500/10 transition-all"
					aria-label="Email"
				>
					<MailIcon size="18" />
				</a>
			</div>
		</div>

		<!-- Column 2: Word Puzzles -->
		<div class="text-left">
			<h4 class="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-slate-800/80 pb-2 text-left">
				ปริศนาคำศัพท์
			</h4>
			<ul class="flex flex-col gap-2 text-xs text-left">
				<li><a href="/puzzles/weekly" class="hover:text-emerald-400 transition-colors">Weekly Puzzle (รายสัปดาห์)</a></li>
				<li><a href="/puzzles/battle" class="hover:text-emerald-400 transition-colors">Puzzle Battle (ประลองสด)</a></li>
				<li><a href="/puzzles/spellingbee" class="hover:text-emerald-400 transition-colors">Spelling Bee (สะกดศัพท์)</a></li>
				<li><a href="/puzzles/blanks" class="hover:text-emerald-400 transition-colors">Blanks (ซ่อนอักษร)</a></li>
				<li><a href="/puzzles/spellingquiz" class="hover:text-emerald-400 transition-colors">Spelling Quiz (ปริศนาสะกดศัพท์)</a></li>
				<li><a href="/puzzles/crossroad" class="hover:text-emerald-400 transition-colors">Crossroad (ศัพท์สี่ทิศ)</a></li>
				<li><a href="/puzzles/boggle" class="hover:text-emerald-400 transition-colors">Boggle (เส้นทางศัพท์)</a></li>
				<li><a href="/puzzles/wordladder" class="hover:text-emerald-400 transition-colors">Word Ladder</a></li>
				<li><a href="/puzzles/rebus" class="hover:text-emerald-400 transition-colors">Rebus</a></li>
				<li><a href="/puzzles/hiddenlink" class="hover:text-emerald-400 transition-colors">Hidden Link</a></li>
				<li><a href="/puzzles/crossword" class="hover:text-emerald-400 transition-colors">Crossword</a></li>
				<li><a href="/puzzles/wordsearch" class="hover:text-emerald-400 transition-colors">Word Search</a></li>
				<li><a href="/puzzles/alphabet" class="hover:text-emerald-400 transition-colors">Alphabet</a></li>
				<li><a href="/puzzles/missingvowels" class="hover:text-emerald-400 transition-colors">Missing Vowels</a></li>
				<li><a href="/puzzles/cryptogram" class="hover:text-emerald-400 transition-colors">Cryptogram</a></li>
			</ul>
		</div>

		<!-- Column 3: Logic & Other Puzzles -->
		<div class="text-left">
			<h4 class="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-slate-800/80 pb-2 text-left">
				ปริศนาตรรกะ & อื่นๆ
			</h4>
			<ul class="flex flex-col gap-2 text-xs text-left">
				<li><a href="/puzzles/logicpuzzle" class="hover:text-emerald-400 transition-colors">Logic Puzzles (พัซเซิลตรรกะ)</a></li>
				<li><a href="/puzzles/thaimapquiz" class="hover:text-emerald-400 transition-colors">Thai Map Quiz</a></li>
				<li><a href="/puzzles/mathsticks" class="hover:text-emerald-400 transition-colors">Mathsticks (ย้ายไม้ขีด)</a></li>
				<li><a href="/puzzles/mathdle" class="hover:text-emerald-400 transition-colors">Mathdle</a></li>
				<li><a href="/puzzles/deduction" class="hover:text-emerald-400 transition-colors">Deduction Games</a></li>
				<li><a href="/puzzles/puzzlehunt" class="hover:text-emerald-400 transition-colors">Puzzle Hunt</a></li>
				<li><a href="/puzzles/tbs2021" class="hover:text-emerald-400 transition-colors">TBS 2021 Puzzles</a></li>
				<li><a href="/puzzles/calendar2026" class="hover:text-emerald-400 transition-colors">Calendar 2026</a></li>
				<li><a href="https://line.me/R/ti/p/@231qozuo" target="_blank" rel="noreferrer" class="hover:text-emerald-400 transition-colors">ปริศนาภาษาไทย (Line)</a></li>
			</ul>
		</div>

		<!-- Column 4: Tools & Resources Links -->
		<div class="text-left">
			<h4 class="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-slate-800/80 pb-2 text-left">
				เครื่องมือ & แหล่งข้อมูล
			</h4>
			<ul class="flex flex-col gap-2 text-xs text-left">
				<li><a href="/tools/countdown" class="hover:text-emerald-400 transition-colors">Countdown</a></li>
				<li><a href="/tools/wordsearch" class="hover:text-emerald-400 transition-colors">Thai Word Search Builder</a></li>
				<li><a href="/tools/crossword" class="hover:text-emerald-400 transition-colors">Crossword Builder</a></li>
				<li><a href="/tools/pentomino" class="hover:text-emerald-400 transition-colors">Pentomino Solver</a></li>
				<li><a href="/tools/jigsaw" class="hover:text-emerald-400 transition-colors">Jigsaw Quiz</a></li>
				<li><a href="/tools/spellingdictionary" class="hover:text-emerald-400 transition-colors">Spelling Dictionary</a></li>
				<li><a href="/resources/ciphers" class="hover:text-emerald-400 transition-colors">คลังรหัสลับ (Ciphers)</a></li>
				<li><a href="/resources/podcast" class="hover:text-emerald-400 transition-colors">พอดแคสต์ (Podcasts)</a></li>
				<li><a href="/shop" class="hover:text-emerald-400 transition-colors">ร้านค้า (Shop)</a></li>
			</ul>
		</div>
	</div>
</footer>

