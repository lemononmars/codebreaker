<script lang="ts">
	import Head from '$lib/components/Head.svelte';
	import {
		MessageSquareIcon,
		ExternalLinkIcon,
		CopyIcon,
		CheckCircleIcon,
		ChevronLeftIcon,
		PackageIcon,
		BookOpenIcon,
		AlertCircleIcon
	} from 'svelte-feather-icons';

	type Language = 'th' | 'en';
	let currentLang: Language = 'th';

	const product = {
		title: 'Code Breaker Logic Puzzle Contest Book',
		price: 150,
		shipping: 30,
		shippingExtra: 10,
		refParam: 'order_logiccontestbook',
		imgUrl: 'https://raw.githubusercontent.com/lemononmars/codebreaker/main/src/lib/images/product/logic_puzzle_contest_book_cover.jpg'
	};

	const t = {
		th: {
			backToShop: 'กลับไปหน้าร้านค้า (Shop)',
			inStock: 'สินค้าพร้อมส่ง',
			englishBadgeShort: 'ภาษาอังกฤษล้วน',
			englishBadgeFull: 'เนื้อหาภาษาอังกฤษล้วน (All in English)',
			englishNotice: 'โจทย์และคำอธิบายภายในเล่มทั้งหมดเป็นภาษาอังกฤษ (All English Content) ตามมาตรฐานการแข่งขันสากล',
			subtitlePrefix: 'รวบรวมโจทย์จากการแข่งขัน',
			priceLabel: 'ราคาสินค้า',
			shippingLabel: 'ค่าจัดส่ง',
			shippingExtraLabel: '(+฿10/เล่มถัดไป)',
			totalLabel: 'ยอดรวมเริ่มต้น (1 เล่มพร้อมส่ง)',
			orderBtn: 'สั่งซื้อผ่าน Facebook Inbox',
			copyLabel: 'ข้อความสั่งซื้อด่วน (กดคัดลอกได้ทันที):',
			orderMessage: 'สวัสดีครับ สนใจสั่งซื้อ Code Breaker Logic Puzzle Contest Book จำนวน 1 เล่มครับ',
			copied: 'คัดลอกแล้ว!',
			copyAction: 'คัดลอก',
			errataQuestion: 'มีข้อสงสัยหรือต้องการตรวจคำตอบ?',
			errataSubtitle: 'ตรวจสอบจุดแก้ไขและข้อผิดพลาดล่าสุดได้ตลอด 24 ชม.',
			errataBtn: 'Book Errata',
			orderStepsTitle: 'ขั้นตอนการสั่งซื้อ',
			step1: 'กดปุ่มทัก Inbox ด้านบน พร้อมส่งข้อความสั่งซื้อ',
			step2: 'แอดมินแจ้งสรุปยอดรวมและบัญชีโอนเงิน โอนแล้วส่งสลิป',
			step3: 'แจ้งชื่อที่อยู่จัดส่ง รอรับหมายเลขพัสดุ (Tracking No.)',
			contentTitle: 'เนื้อหาภายในเล่ม (85 ปริศนา)',
			contentSubtitle: 'รวบรวมโจทย์การแข่งขันทั้งหมดจากงาน Code Breaker Logic Puzzle Contest พร้อมโจทย์พิเศษเพิ่มเติมอีกกว่า 40 ข้อ เหมาะสำหรับผู้ที่ชื่นชอบ Logic Puzzle ระดับมาตรฐานสากล',
			logicSectionTitle: '1. Logic Puzzles (รวม 68 ข้อ)',
			varietySectionTitle: '2. Variety Puzzles (รวม 17 ข้อ)',
			noteTitle: 'หมายเหตุเรื่องภาษาในเล่ม:',
			noteBody: 'หนังสือเล่มนี้พิมพ์และนำเสนอเนื้อหา, กติกา, โจทย์ และเฉลยเป็นภาษาอังกฤษล้วน (Entirely in English) ตามแบบฉบับโจทย์แข่งระดับสากล ไม่จำเป็นต้องมีความรู้ภาษาอังกฤษระดับสูงก็เข้าใจและสนุกกับการแก้ปริศนาได้อย่างเต็มที่'
		},
		en: {
			backToShop: 'Back to Shop',
			inStock: 'In Stock',
			englishBadgeShort: 'All English Content',
			englishBadgeFull: 'Content is entirely in English',
			englishNotice: 'All puzzles, instructions, and solutions in this book are written entirely in English.',
			subtitlePrefix: 'Official puzzle compilation from',
			priceLabel: 'Price',
			shippingLabel: 'Domestic Shipping',
			shippingExtraLabel: '(+฿10/additional copy)',
			totalLabel: 'Total starting from (1 copy incl. shipping)',
			orderBtn: 'Order via Facebook Inbox',
			copyLabel: 'Quick order message (Click to copy):',
			orderMessage: 'Hello! I would like to order 1 copy of Code Breaker Logic Puzzle Contest Book.',
			copied: 'Copied!',
			copyAction: 'Copy',
			errataQuestion: 'Questions or errata inquiries?',
			errataSubtitle: 'Check the official book errata and recent updates 24/7.',
			errataBtn: 'Book Errata',
			orderStepsTitle: 'How to Order',
			step1: 'Click the Facebook Inbox button above and send your order message.',
			step2: 'Admin confirms total amount and payment details. Transfer and share slip.',
			step3: 'Provide your shipping address and receive your package tracking number.',
			contentTitle: 'Book Contents (85 Puzzles)',
			contentSubtitle: 'A complete collection of puzzles from the official Code Breaker Logic Puzzle Contest plus 40 bonus puzzles, totaling 85 international-standard logic puzzles.',
			logicSectionTitle: '1. Logic Puzzles (68 puzzles total)',
			varietySectionTitle: '2. Variety Puzzles (17 puzzles total)',
			noteTitle: 'Language Note:',
			noteBody: 'This book is printed entirely in English. Puzzle rules and diagrams follow international competition standards, making them accessible to puzzle enthusiasts around the world.'
		}
	};

	let copied = false;
	function copyOrderText() {
		const msg = t[currentLang].orderMessage;
		if (typeof navigator !== 'undefined' && navigator.clipboard) {
			navigator.clipboard.writeText(msg);
			copied = true;
			setTimeout(() => {
				copied = false;
			}, 2500);
		}
	}

	const logicTypes = [
		'Choco Banana (27)', 'Midloop (6)', 'Territory (5)', 'Ice Walk (4)',
		'Cave (3)', 'Double Choco (3)', 'Fillomino (3)', 'Masyu (3)',
		'Ripple Effect (3)', 'Star Battle (3)', 'Statue Park (3)',
		'Akari (2)', 'Battleship (2)', 'Kakuro (2)', 'Nurikabe (2)',
		'Pentominous (3)', 'Shikaku (2)', 'Slitherlink (2)', 'Sudoku (2)',
		'Sudoku Interconnected (1)', 'Yajilin (2)'
	];

	$: varietyTypes = currentLang === 'en' ? [
		{ name: 'Sequence', desc: 'Find the next character or number in the sequence', count: '5 puzzles' },
		{ name: 'Matchsticks', desc: 'Move matchsticks to create valid equations', count: '5 puzzles' },
		{ name: 'Blanks', desc: 'Fill in missing letters and symbols', count: '5 puzzles' },
		{ name: 'Instructionless', desc: 'Discover the hidden rules and solve the puzzle', count: '5 puzzles' },
		{ name: 'Meta Puzzle', desc: 'Combine answers from previous rounds to solve the finale', count: '1 puzzle' }
	] : [
		{ name: 'Sequence', desc: 'หาอักษรตัวถัดไปในลำดับ', count: '5 ข้อ' },
		{ name: 'Matchsticks', desc: 'ขยับไม้ขีดไฟสร้างสมการ', count: '5 ข้อ' },
		{ name: 'Blanks', desc: 'เติมตัวอักษรในช่องว่าง', count: '5 ข้อ' },
		{ name: 'Instructionless', desc: 'หาวิธีกฎกติกาและแก้ปริศนาด้วยตัวเอง', count: '5 ข้อ' },
		{ name: 'Meta Puzzle', desc: 'ใช้คำตอบจากข้ออื่นมารวมไขปริศนาสุดท้าย', count: '1 ข้อ' }
	];
</script>

<svelte:head>
	<title>Code Breaker | Logic Puzzle Contest Book</title>
</svelte:head>

<Head
	title="Code Breaker Logic Puzzle Book"
	description="หนังสือรวบรวมโจทย์ Logic Puzzle กว่า 85 ข้อจากงานแข่ง Code Breaker Logic Puzzle Contest (English Content)"
	url="codebreakerth.vercel.app/shop/logiccontestbook"
	imageUrl={product.imgUrl}
/>

<div class="container mx-auto px-4 pt-4 sm:pt-8 pb-24 max-w-5xl">
	<!-- Top Navigation & Language Switcher Bar -->
	<div class="flex items-center justify-between flex-wrap gap-4 mb-6">
		<!-- Breadcrumbs -->
		<nav class="flex items-center gap-2 text-xs sm:text-sm text-slate-400">
			<a href="/shop" class="flex items-center gap-1 hover:text-teal-400 transition-colors">
				<ChevronLeftIcon size="14" />
				<span>{t[currentLang].backToShop}</span>
			</a>
			<span>/</span>
			<span class="text-slate-200 font-medium">Logic Contest Book</span>
		</nav>

		<!-- Language Switcher -->
		<div class="inline-flex items-center rounded-lg bg-slate-900 border border-slate-800 p-1 text-xs">
			<button
				type="button"
				class="px-2.5 py-1 rounded font-bold transition-colors {currentLang === 'th' ? 'bg-teal-500 text-slate-950 shadow' : 'text-slate-400 hover:text-white'}"
				on:click={() => (currentLang = 'th')}
			>
				🇹🇭 ภาษาไทย
			</button>
			<button
				type="button"
				class="px-2.5 py-1 rounded font-bold transition-colors {currentLang === 'en' ? 'bg-teal-500 text-slate-950 shadow' : 'text-slate-400 hover:text-white'}"
				on:click={() => (currentLang = 'en')}
			>
				🇬🇧 English
			</button>
		</div>
	</div>

	<!-- Main Product Card -->
	<div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8">
		<!-- Left: Image & Quick Details (7 cols) -->
		<div class="lg:col-span-7 space-y-6">
			<div class="relative overflow-hidden rounded-2xl bg-slate-900/90 border border-slate-800 shadow-2xl p-2 sm:p-4">
				<img
					src={product.imgUrl}
					alt={product.title}
					class="w-full h-auto object-contain rounded-xl max-h-[480px] mx-auto"
					on:error={(e) => {
						e.currentTarget.style.display = 'none';
					}}
				/>
				<div class="absolute top-5 left-5 flex flex-wrap gap-2 z-10">
					<span class="badge badge-accent text-accent-content font-bold text-xs py-1">
						85+ {currentLang === 'en' ? 'Puzzles' : 'ปริศนา'}
					</span>
					<span class="badge badge-info text-info-content font-bold text-xs py-1 flex items-center gap-1 shadow-sm">
						📖 {t[currentLang].englishBadgeShort}
					</span>
					<span class="badge badge-outline bg-slate-900/80 text-slate-300 text-xs py-1">
						{currentLang === 'en' ? 'A5 Book' : 'หนังสือขนาด A5'}
					</span>
				</div>
			</div>

			<!-- Errata Notice Banner -->
			<div class="p-4 rounded-xl bg-slate-900/80 border border-teal-500/30 flex items-center justify-between gap-4 text-left">
				<div class="flex items-center gap-3">
					<div class="p-2 rounded-lg bg-teal-500/10 text-teal-400 shrink-0">
						<AlertCircleIcon size="20" />
					</div>
					<div>
						<div class="text-xs font-bold text-white">{t[currentLang].errataQuestion}</div>
						<div class="text-[11px] text-slate-400">{t[currentLang].errataSubtitle}</div>
					</div>
				</div>
				<a
					href="/shop/logiccontestbook/errata"
					class="btn btn-xs btn-outline btn-accent text-accent-content shrink-0"
				>
					<span>{t[currentLang].errataBtn}</span>
					<ExternalLinkIcon size="12" class="ml-1" />
				</a>
			</div>
		</div>

		<!-- Right: Pricing, CTA & Order Guide (5 cols) -->
		<div class="lg:col-span-5 space-y-6">
			<div class="p-6 sm:p-7 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-2xl text-left space-y-5">
				<div>
					<div class="flex flex-wrap items-center gap-2 mb-2">
						<span class="badge badge-accent text-accent-content font-bold text-xs">
							{t[currentLang].inStock}
						</span>
						<span class="badge badge-info text-info-content font-bold text-xs py-1 flex items-center gap-1 shadow-sm">
							📖 {t[currentLang].englishBadgeFull}
						</span>
					</div>
					<h1 class="text-2xl sm:text-3xl font-extrabold text-white">
						{product.title}
					</h1>
					<p class="text-xs sm:text-sm text-slate-400 mt-1">
						{t[currentLang].subtitlePrefix} <a href="/events/logiccontest" target="_blank" class="text-teal-400 hover:underline">Code Breaker Logic Puzzle Contest</a>
					</p>
				</div>

				<!-- English Notice Highlight Callout -->
				<div class="p-3 rounded-xl bg-sky-950/40 border border-sky-800/50 flex items-start gap-2.5 text-xs text-sky-200">
					<span class="font-bold text-sky-400 shrink-0">ℹ️ Notice:</span>
					<span>{t[currentLang].englishNotice}</span>
				</div>

				<!-- Price Box -->
				<div class="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2">
					<div class="flex items-baseline justify-between">
						<span class="text-sm text-slate-400">{t[currentLang].priceLabel}</span>
						<span class="text-2xl font-extrabold text-teal-400">฿{product.price}</span>
					</div>
					<div class="flex items-center justify-between text-xs text-slate-400 pt-1 border-t border-slate-800/80">
						<span>{t[currentLang].shippingLabel}</span>
						<span class="text-slate-300">฿{product.shipping} <span class="text-[11px] text-slate-500">{t[currentLang].shippingExtraLabel}</span></span>
					</div>
					<div class="flex items-center justify-between text-xs font-semibold text-emerald-400 pt-1">
						<span>{t[currentLang].totalLabel}</span>
						<span class="text-sm">฿{product.price + product.shipping}</span>
					</div>
				</div>

				<!-- Primary Messenger CTA Button (Reduced Font Size) -->
				<div class="space-y-3">
					<a
						href="https://m.me/codebreakerTH?ref={product.refParam}"
						target="_blank"
						rel="noreferrer"
						class="btn btn-primary text-primary-content btn-block gap-2 font-semibold text-sm shadow-xl shadow-teal-500/20 hover:scale-[1.01] transition-transform"
					>
						<MessageSquareIcon size="17" />
						<span>{t[currentLang].orderBtn}</span>
						<ExternalLinkIcon size="14" />
					</a>

					<!-- Fast-Track Message Copier -->
					<div class="p-3 rounded-xl bg-slate-950/60 border border-slate-800 space-y-2">
						<div class="flex items-center justify-between text-xs">
							<span class="text-slate-400 font-medium">{t[currentLang].copyLabel}</span>
							{#if copied}
								<span class="text-teal-400 font-bold flex items-center gap-1 text-[11px]">
									<CheckCircleIcon size="13" />
									<span>{t[currentLang].copied}</span>
								</span>
							{/if}
						</div>
						<div class="flex items-center gap-2">
							<input
								type="text"
								readonly
								value={t[currentLang].orderMessage}
								class="input input-sm input-bordered bg-slate-900 border-slate-700 text-slate-200 text-xs w-full focus:outline-none"
							/>
							<button
								type="button"
								on:click={copyOrderText}
								class="btn btn-sm btn-outline btn-accent text-accent-content shrink-0 gap-1 text-xs"
								title="Click to copy text"
							>
								<CopyIcon size="13" />
								<span>{t[currentLang].copyAction}</span>
							</button>
						</div>
					</div>
				</div>

				<!-- 3-Step Buying Guide -->
				<div class="pt-4 border-t border-slate-800/80 space-y-3">
					<h3 class="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
						<PackageIcon size="14" class="text-teal-400" />
						<span>{t[currentLang].orderStepsTitle}</span>
					</h3>
					<div class="space-y-2 text-xs text-slate-300">
						<div class="flex items-start gap-2.5">
							<span class="w-5 h-5 rounded-full bg-teal-500/20 text-teal-400 flex items-center justify-center font-bold text-[11px] shrink-0 mt-0.5">1</span>
							<span>{t[currentLang].step1}</span>
						</div>
						<div class="flex items-start gap-2.5">
							<span class="w-5 h-5 rounded-full bg-teal-500/20 text-teal-400 flex items-center justify-center font-bold text-[11px] shrink-0 mt-0.5">2</span>
							<span>{t[currentLang].step2}</span>
						</div>
						<div class="flex items-start gap-2.5">
							<span class="w-5 h-5 rounded-full bg-teal-500/20 text-teal-400 flex items-center justify-center font-bold text-[11px] shrink-0 mt-0.5">3</span>
							<span>{t[currentLang].step3}</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Content Details: Puzzle Genres & Variety Breakdown -->
	<div class="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800 text-left space-y-6">
		<div>
			<h2 class="text-lg sm:text-xl font-bold text-white flex items-center gap-2 mb-2">
				<BookOpenIcon size="20" class="text-teal-400" />
				<span>{t[currentLang].contentTitle}</span>
			</h2>
			<p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
				{t[currentLang].contentSubtitle}
			</p>
		</div>

		<!-- Category 1: Logic Puzzles -->
		<div class="space-y-3">
			<h3 class="text-sm font-bold text-teal-300 flex items-center gap-2">
				<span class="w-2 h-2 rounded-full bg-teal-400"></span>
				<span>{t[currentLang].logicSectionTitle}</span>
			</h3>
			<div class="flex flex-wrap gap-2">
				{#each logicTypes as type}
					<span class="badge badge-outline bg-slate-950/60 text-slate-300 border-slate-800 text-xs py-2 px-2.5">
						{type}
					</span>
				{/each}
			</div>
		</div>

		<!-- Category 2: Variety Puzzles -->
		<div class="space-y-3 pt-2">
			<h3 class="text-sm font-bold text-emerald-300 flex items-center gap-2">
				<span class="w-2 h-2 rounded-full bg-emerald-400"></span>
				<span>{t[currentLang].varietySectionTitle}</span>
			</h3>
			<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
				{#each varietyTypes as v}
					<div class="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80">
						<div class="flex items-center justify-between mb-1">
							<span class="font-bold text-xs text-white">{v.name}</span>
							<span class="badge badge-sm badge-ghost text-[10px]">{v.count}</span>
						</div>
						<p class="text-[11px] text-slate-400">{v.desc}</p>
					</div>
				{/each}
			</div>
		</div>

		<!-- Language Notice Box -->
		<div class="pt-4 border-t border-slate-800/80 text-xs text-slate-400 space-y-1">
			<p class="font-semibold text-slate-300">{t[currentLang].noteTitle}</p>
			<p class="leading-relaxed">
				{t[currentLang].noteBody}
			</p>
		</div>
	</div>
</div>

