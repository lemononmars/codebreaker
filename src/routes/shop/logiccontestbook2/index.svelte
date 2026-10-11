<script lang="ts">
	import Head from '$lib/components/Head.svelte';
	import BookPreviewGallery from '$lib/components/BookPreviewGallery.svelte';
	import {
		MessageSquareIcon,
		MailIcon,
		ExternalLinkIcon,
		ChevronLeftIcon,
		PackageIcon,
		BookOpenIcon,
		AlertCircleIcon
	} from 'svelte-feather-icons';

	type Language = 'th' | 'en';
	let currentLang: Language = 'en';

	const product = {
		title: 'Logic Puzzle Contest 2 Book',
		price: 150,
		shipping: 30,
		shippingExtra: 10,
		refParam: 'order_logiccontestbook2',
		imgUrl: '/images/product/logic_puzzle_contest_book2_cover.jpg'
	};

	const t = {
		th: {
			backToShop: 'กลับไปหน้าร้านค้า (Shop)',
			inStock: 'สินค้าพร้อมส่ง',
			englishBadgeShort: 'คำอธิบายภาษาอังกฤษ',
			englishBadgeFull: 'คำอธิบายภาษาอังกฤษ • มีปริศนาคำภาษาไทย',
			englishNotice: 'กติกาและคำอธิบายเป็นภาษาอังกฤษ โดยรอบ Warped Words ใช้คำภาษาไทย',
			subtitlePrefix: 'รวบรวมโจทย์จากการแข่งขัน',
			priceLabel: 'ราคาสินค้า',
			shippingLabel: 'ค่าจัดส่ง',
			shippingExtraLabel: '(+฿10/เล่มถัดไป)',
			totalLabel: 'ยอดรวมเริ่มต้น (1 เล่มพร้อมส่ง)',
			orderBtn: 'สั่งซื้อผ่าน Facebook Inbox',
			errataQuestion: 'มีข้อสงสัยหรือต้องการตรวจคำตอบ?',
			errataSubtitle: 'ตรวจสอบจุดแก้ไขและข้อผิดพลาดล่าสุดได้ตลอด 24 ชม.',
			errataBtn: 'Book Errata',
			orderStepsTitle: 'ขั้นตอนการสั่งซื้อ',
			step1: 'ทัก Facebook Inbox หรืออีเมล พร้อมส่งข้อความสั่งซื้อ',
			step2: 'แอดมินแจ้งสรุปยอดรวมและบัญชีโอนเงิน โอนแล้วส่งสลิป',
			step3: 'แจ้งชื่อที่อยู่จัดส่ง รอรับหมายเลขพัสดุ (Tracking No.)',
			contentTitle: 'เนื้อหาภายในเล่ม (137 ปริศนา)',
			contentSubtitle:
				'รวม 137 ปริศนาใน 48 ประเภท: โจทย์จาก Logic Puzzle Contest II จำนวน 46 ข้อ, Choco Banana Bus 27 ข้อ และ Logic Showcase 64 ข้อ พร้อมเฉลย',
			logicSectionTitle: 'ประเภทปริศนา (48 ประเภท)',
			varietySectionTitle: 'เนื้อหา 6 ส่วน',
			noteTitle: 'หมายเหตุเรื่องภาษาในเล่ม:',
			noteBody:
				'หนังสือขนาด A4 พร้อมกติกาและคำอธิบายภาษาอังกฤษ รอบ Warped Words ประกอบด้วย Word Search, Fill-in, Scrabble และ Cryptic Crossword ที่ใช้คำภาษาไทย'
		},
		en: {
			backToShop: 'Back to Shop',
			inStock: 'In Stock',
			englishBadgeShort: 'English Instructions',
			englishBadgeFull: 'English instructions • Thai word puzzles included',
			englishNotice:
				'Instructions and explanations are in English. The Warped Words round uses Thai words.',
			subtitlePrefix: 'Official puzzle compilation from',
			priceLabel: 'Price',
			shippingLabel: 'Domestic Shipping',
			shippingExtraLabel: '(+฿10/additional copy)',
			totalLabel: 'Total starting from (1 copy incl. shipping)',
			orderBtn: 'Order via Facebook Inbox',
			errataQuestion: 'Questions or errata inquiries?',
			errataSubtitle: 'Check the official book errata and recent updates 24/7.',
			errataBtn: 'Book Errata',
			orderStepsTitle: 'How to Order',
			step1: 'Contact us via Facebook Inbox or email with your order details.',
			step2: 'Admin confirms total amount and payment details. Transfer and share slip.',
			step3: 'Provide your shipping address and receive your package tracking number.',
			contentTitle: 'Book Contents (137 Puzzles)',
			contentSubtitle:
				'137 puzzles across 48 genre families: 46 puzzles from Logic Puzzle Contest II, 27 new Choco Banana Bus puzzles, and 64 Logic Showcase puzzles, with solutions.',
			logicSectionTitle: 'Puzzle Genres (48 families)',
			varietySectionTitle: 'Six Sections to Explore',
			noteTitle: 'Language Note:',
			noteBody:
				'An A4 book with English instructions and explanations. Warped Words includes Thai Word Search, Fill-in, Scrabble, and Cryptic Crossword puzzles.'
		}
	};

	const logicTypes = [
		'Yajilin',
		'Heyawake',
		'LITS',
		'Masyu',
		'Akari',
		'Shakashaka',
		'Nonogram',
		'Snake',
		'Nurikabe',
		'Choco Banana',
		'Aqre',
		'Slitherlink',
		'Pipelink',
		'Cave',
		'Tapa',
		'Fillomino',
		'Spiral Galaxies',
		'Pentominous',
		'Word Search',
		'Fill-in',
		'Scrabble',
		'Cryptic Crossword',
		'Canal View',
		'Kurodoko',
		'Voxas',
		'Mid-L',
		'Skyscrapers',
		'Foreshadow Crossing',
		'Guide Exit',
		'Ice Walk',
		'Kurotto',
		'Tapa-like Loop',
		'Disorderly Loop',
		'Ripple Effect',
		'Statue Park',
		'Territory',
		'Balance Loop',
		'Contact',
		'Rampage',
		'Turnaround',
		'Kissing Polyomino',
		'Mirror Loop',
		'Evolmino',
		'Hasu no Mura',
		'Pattern Square',
		'Ring-Ring',
		'Alphabet Asp',
		'Pencils'
	];

	$: varietyTypes =
		currentLang === 'en'
			? [
					{
						name: 'Popular Picks',
						desc: 'Yajilin, Heyawake, LITS, Masyu, Akari, and Shakashaka.',
						count: 'Round 1'
					},
					{
						name: 'Shading Showcase',
						desc: 'Shade cells in Nonogram, Snake, Nurikabe, Choco Banana, and Aqre.',
						count: 'Round 2'
					},
					{
						name: 'Penta Party',
						desc: 'Interconnected logic puzzles with pentominoes and a metapuzzle.',
						count: 'Round 3'
					},
					{
						name: 'Warped Words',
						desc: 'Thai Word Search, Fill-in, Scrabble, and Cryptic Crossword with a twist.',
						count: 'Round 4'
					},
					{
						name: 'Choco Banana Bus',
						desc: 'A fresh collection of standard Choco Banana puzzles.',
						count: '27 puzzles'
					},
					{
						name: 'Logic Showcase',
						desc: 'Creative variants and new genres from 27 Puzzlers Club showcases.',
						count: '64 puzzles'
					}
			  ]
			: [
					{
						name: 'Popular Picks',
						desc: 'Yajilin, Heyawake, LITS, Masyu, Akari และ Shakashaka',
						count: 'รอบ 1'
					},
					{
						name: 'Shading Showcase',
						desc: 'ระบายช่องใน Nonogram, Snake, Nurikabe, Choco Banana และ Aqre',
						count: 'รอบ 2'
					},
					{
						name: 'Penta Party',
						desc: 'ปริศนาตรรกะเชื่อมต่อกันด้วยเพนโตมิโน พร้อมเมตาปริศนา',
						count: 'รอบ 3'
					},
					{
						name: 'Warped Words',
						desc: 'Word Search, Fill-in, Scrabble และ Cryptic Crossword คำภาษาไทยในรูปแบบใหม่',
						count: 'รอบ 4'
					},
					{
						name: 'Choco Banana Bus',
						desc: 'ชุดปริศนา Choco Banana มาตรฐานชุดใหม่',
						count: '27 ข้อ'
					},
					{
						name: 'Logic Showcase',
						desc: 'ปริศนารูปแบบใหม่และกติกาประยุกต์จาก 27 Showcase ใน Puzzlers Club',
						count: '64 ข้อ'
					}
			  ];
</script>

<svelte:head>
	<title>Code Breaker | Logic Puzzle Contest 2 Book</title>
</svelte:head>

<Head
	title="Logic Puzzle Contest 2 Book"
	description="137 puzzles across 48 genres from Logic Puzzle Contest II, Choco Banana Bus, and Logic Showcase. English instructions; Thai word puzzles included."
	url="codebreakerth.vercel.app/shop/logiccontestbook2"
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
			<span class="text-slate-200 font-medium">Logic Puzzle Contest 2 Book</span>
		</nav>

		<!-- Language Switcher -->
		<div
			class="inline-flex items-center rounded-lg bg-slate-900 border border-slate-800 p-1 text-xs"
		>
			<button
				type="button"
				class="px-2.5 py-1 rounded font-bold transition-colors {currentLang === 'th'
					? 'bg-teal-500 text-slate-950 shadow'
					: 'text-slate-400 hover:text-white'}"
				on:click={() => (currentLang = 'th')}
			>
				🇹🇭 ภาษาไทย
			</button>
			<button
				type="button"
				class="px-2.5 py-1 rounded font-bold transition-colors {currentLang === 'en'
					? 'bg-teal-500 text-slate-950 shadow'
					: 'text-slate-400 hover:text-white'}"
				on:click={() => (currentLang = 'en')}
			>
				🇬🇧 English
			</button>
		</div>
	</div>

	<!-- Main Product Card -->
	<div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8">
		<!-- Left: Image & Quick Details (7 cols) -->
		<div class="lg:col-span-7 min-w-0 space-y-6">
			<div
				class="relative overflow-hidden rounded-2xl bg-slate-900/90 border border-slate-800 shadow-2xl p-2 sm:p-4"
			>
				<BookPreviewGallery
					bookTitle={product.title}
					language={currentLang}
					pages={[
						{ src: product.imgUrl, cover: true },
						{ src: '/images/product/logic_contest_book2_page-22.jpg', page: 22 },
						{ src: '/images/product/logic_contest_book2_page-28.jpg', page: 28 },
						{ src: '/images/product/logic_contest_book2_page-37.jpg', page: 37 },
						{ src: '/images/product/logic_contest_book2_back-cover.jpg', backCover: true }
					]}
				/>
				<div class="flex flex-wrap gap-2 mt-3">
					<span class="badge badge-accent text-accent-content font-bold text-xs py-1">
						137 {currentLang === 'en' ? 'Puzzles' : 'ปริศนา'}
					</span>
					<span
						class="badge badge-info text-info-content font-bold text-xs px-3 py-1.5 h-auto max-w-full whitespace-normal leading-snug text-left shadow-sm"
					>
						📖 {t[currentLang].englishBadgeShort}
					</span>
					<span class="badge badge-outline bg-slate-900/80 text-slate-300 text-xs py-1">
						{currentLang === 'en' ? 'A4 Book' : 'หนังสือขนาด A4'}
					</span>
				</div>
			</div>

			<!-- Errata Notice Banner -->
			<div
				class="p-4 rounded-xl bg-slate-900/80 border border-teal-500/30 flex items-center justify-between gap-4 text-left"
			>
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
					href="/shop/logiccontestbook2/errata"
					class="btn btn-xs btn-outline btn-accent text-accent-content shrink-0"
				>
					<span>{t[currentLang].errataBtn}</span>
					<ExternalLinkIcon size="12" class="ml-1" />
				</a>
			</div>
		</div>

		<!-- Right: Pricing, CTA & Order Guide (5 cols) -->
		<div class="lg:col-span-5 space-y-6">
			<div
				class="p-6 sm:p-7 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-2xl text-left space-y-5"
			>
				<div>
					<div class="flex flex-wrap items-center gap-2 mb-2">
						<span class="badge badge-accent text-accent-content font-bold text-xs">
							{t[currentLang].inStock}
						</span>
						<span
							class="badge badge-info text-info-content font-bold text-xs px-3 py-1.5 h-auto max-w-full whitespace-normal leading-snug text-left shadow-sm"
						>
							📖 {t[currentLang].englishBadgeFull}
						</span>
					</div>
					<h1 class="text-2xl sm:text-3xl font-extrabold text-white">
						{product.title}
					</h1>
					<p class="text-xs sm:text-sm text-slate-400 mt-1">
						{t[currentLang].subtitlePrefix}
						<a href="/events/logiccontest2" target="_blank" class="text-teal-400 hover:underline"
							>Code Breaker Logic Puzzle Contest II</a
						>
					</p>
				</div>

				<!-- English Notice Highlight Callout -->
				<div
					class="p-3 rounded-xl bg-sky-950/40 border border-sky-800/50 flex items-start gap-2.5 text-xs text-sky-200"
				>
					<span class="font-bold text-sky-400 shrink-0">ℹ️ Notice:</span>
					<span>{t[currentLang].englishNotice}</span>
				</div>

				<!-- Price Box -->
				<div class="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2">
					<div class="flex items-baseline justify-between">
						<span class="text-sm text-slate-400">{t[currentLang].priceLabel}</span>
						<span class="text-2xl font-extrabold text-teal-400">฿{product.price}</span>
					</div>
					<div
						class="flex items-center justify-between text-xs text-slate-400 pt-1 border-t border-slate-800/80"
					>
						<span>{t[currentLang].shippingLabel}</span>
						<span class="text-slate-300"
							>฿{product.shipping}
							<span class="text-[11px] text-slate-500">{t[currentLang].shippingExtraLabel}</span
							></span
						>
					</div>
					<div
						class="flex items-center justify-between text-xs font-semibold text-emerald-400 pt-1"
					>
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
					<a
						href={`mailto:sakulbuth@gmail.com?subject=${encodeURIComponent(
							product.title + ' - Order'
						)}`}
						class="btn btn-outline btn-block gap-2 text-sm"
					>
						<MailIcon size="17" />
						{currentLang === 'en' ? 'Contact by Email' : 'ติดต่อทางอีเมล'}
					</a>
				</div>

				<!-- 3-Step Buying Guide -->
				<div class="pt-4 border-t border-slate-800/80 space-y-3">
					<h3
						class="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5"
					>
						<PackageIcon size="14" class="text-teal-400" />
						<span>{t[currentLang].orderStepsTitle}</span>
					</h3>
					<div class="space-y-2 text-xs text-slate-300">
						<div class="flex items-start gap-2.5">
							<span
								class="w-5 h-5 rounded-full bg-teal-500/20 text-teal-400 flex items-center justify-center font-bold text-[11px] shrink-0 mt-0.5"
								>1</span
							>
							<span>{t[currentLang].step1}</span>
						</div>
						<div class="flex items-start gap-2.5">
							<span
								class="w-5 h-5 rounded-full bg-teal-500/20 text-teal-400 flex items-center justify-center font-bold text-[11px] shrink-0 mt-0.5"
								>2</span
							>
							<span>{t[currentLang].step2}</span>
						</div>
						<div class="flex items-start gap-2.5">
							<span
								class="w-5 h-5 rounded-full bg-teal-500/20 text-teal-400 flex items-center justify-center font-bold text-[11px] shrink-0 mt-0.5"
								>3</span
							>
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
				<span class="w-2 h-2 rounded-full bg-teal-400" />
				<span>{t[currentLang].logicSectionTitle}</span>
			</h3>
			<div class="flex flex-wrap gap-2">
				{#each logicTypes as type}
					<span
						class="badge badge-outline bg-slate-950/60 text-slate-300 border-slate-800 text-xs py-2 px-2.5"
					>
						{type}
					</span>
				{/each}
			</div>
		</div>

		<!-- Category 2: Variety Puzzles -->
		<div class="space-y-3 pt-2">
			<h3 class="text-sm font-bold text-emerald-300 flex items-center gap-2">
				<span class="w-2 h-2 rounded-full bg-emerald-400" />
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
