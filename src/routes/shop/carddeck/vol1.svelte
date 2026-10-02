<script lang="ts">
	import Head from '$lib/components/Head.svelte';
	import {
		MessageSquareIcon,
		ExternalLinkIcon,
		CopyIcon,
		CheckCircleIcon,
		ChevronLeftIcon,
		PackageIcon,
		LayersIcon
	} from 'svelte-feather-icons';

	const product = {
		title: 'Puzzle Card Deck Vol.1',
		price: 150,
		shipping: 30,
		shippingExtra: 10,
		refParam: 'order_deck_vol1',
		imgUrl: 'https://raw.githubusercontent.com/lemononmars/codebreaker/main/src/lib/images/product/puzzle_card_deck_vol1_promote.jpg',
		orderMessage: 'สวัสดีครับ สนใจสั่งซื้อ Puzzle Card Deck Vol.1 จำนวน 1 ชุดครับ'
	};

	let copied = false;
	function copyOrderText() {
		if (typeof navigator !== 'undefined' && navigator.clipboard) {
			navigator.clipboard.writeText(product.orderMessage);
			copied = true;
			setTimeout(() => {
				copied = false;
			}, 2500);
		}
	}
</script>

<svelte:head>
	<title>Code Breaker | Puzzle Card Deck Vol. 1</title>
</svelte:head>

<Head
	title="Puzzle Card Deck Vol.1"
	description="การ์ดเกมปริศนา 18 ใบ จากเพจ Code Breaker Thailand"
	url="codebreakerth.vercel.app/shop/carddeck/vol1"
	imageUrl={product.imgUrl}
/>

<div class="container mx-auto px-4 pt-4 sm:pt-8 pb-24 max-w-5xl">
	<!-- Breadcrumbs -->
	<nav class="flex items-center gap-2 text-xs sm:text-sm text-slate-400 mb-6">
		<a href="/shop" class="flex items-center gap-1 hover:text-teal-400 transition-colors">
			<ChevronLeftIcon size="14" />
			<span>กลับไปหน้าร้านค้า (Shop)</span>
		</a>
		<span>/</span>
		<a href="/shop/carddeck" class="hover:text-teal-400 transition-colors">Puzzle Card Deck</a>
		<span>/</span>
		<span class="text-slate-200 font-medium">Vol.1</span>
	</nav>

	<!-- Main Product Card -->
	<div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
		<!-- Left: Image Gallery & Highlights (7 cols) -->
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
				<div class="absolute top-5 left-5 flex gap-2">
					<span class="badge badge-accent text-accent-content font-bold text-xs py-1">
						การ์ดเกมขายดี
					</span>
					<span class="badge badge-outline bg-slate-900/80 text-slate-300 text-xs py-1">
						18 ใบพร้อมกล่อง
					</span>
				</div>
			</div>

			<!-- Product Details & Description -->
			<div class="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 text-left space-y-4">
				<h2 class="text-lg font-bold text-white flex items-center gap-2">
					<LayersIcon size="18" class="text-teal-400" />
					<span>รายละเอียดสินค้า</span>
				</h2>
				<p class="text-sm text-slate-300 leading-relaxed">
					การ์ดเกมไขปริศนาจากเพจ <strong>Code Breaker Thailand</strong> ขนปริศนาสุดท้าทายมาให้คุณได้ประลองปัญญาถึง <strong>17 ปริศนาคลาสสิก</strong> บนเพจ และสุดพิเศษกับ <strong>1 Meta Puzzle ใหม่</strong> ในชุดนี้โดยเฉพาะที่ต้องใช้คำตอบจากข้ออื่นมารวมกันเพื่อปลดล็อกปริศนาสุดท้าย!
				</p>

				<!-- Specifications Grid -->
				<div class="grid grid-cols-2 gap-3 pt-2 text-xs">
					<div class="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80">
						<span class="text-slate-400 block mb-1">จำนวนปริศนา</span>
						<span class="text-white font-semibold">18 ปริศนา (17 ข้อ + 1 Meta)</span>
					</div>
					<div class="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80">
						<span class="text-slate-400 block mb-1">รูปแบบ</span>
						<span class="text-white font-semibold">การ์ดเกม 18 ใบ พร้อมกล่อง</span>
					</div>
					<div class="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80">
						<span class="text-slate-400 block mb-1">ระดับความยาก</span>
						<span class="text-white font-semibold">⭐⭐⭐☆☆ (ปานกลาง)</span>
					</div>
					<div class="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80">
						<span class="text-slate-400 block mb-1">คำใบ้ & เฉลย</span>
						<span class="text-white font-semibold">มีระบบตรวจคำตอบในตัว</span>
					</div>
				</div>
			</div>
		</div>

		<!-- Right: Pricing, CTA & Order Guide (5 cols) -->
		<div class="lg:col-span-5 space-y-6">
			<!-- Purchase Panel Card -->
			<div class="p-6 sm:p-7 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-2xl text-left space-y-5">
				<div>
					<div class="flex items-center gap-2 mb-2">
						<span class="badge badge-accent text-accent-content font-bold text-xs">In Stock</span>
						<span class="text-xs text-slate-400">สินค้าพร้อมส่ง</span>
					</div>
					<h1 class="text-2xl sm:text-3xl font-extrabold text-white">
						{product.title}
					</h1>
					<p class="text-xs sm:text-sm text-slate-400 mt-1">
						การ์ดเกมไขปริศนาสำหรับคนรัก Puzzle
					</p>
				</div>

				<!-- Price Box -->
				<div class="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2">
					<div class="flex items-baseline justify-between">
						<span class="text-sm text-slate-400">ราคาสินค้า</span>
						<span class="text-2xl font-extrabold text-teal-400">฿{product.price}</span>
					</div>
					<div class="flex items-center justify-between text-xs text-slate-400 pt-1 border-t border-slate-800/80">
						<span>ค่าจัดส่ง</span>
						<span class="text-slate-300">฿{product.shipping} <span class="text-[11px] text-slate-500">(+฿{product.shippingExtra}/ชุดถัดไป)</span></span>
					</div>
					<div class="flex items-center justify-between text-xs font-semibold text-emerald-400 pt-1">
						<span>ยอดรวมเริ่มต้น (1 ชุดพร้อมส่ง)</span>
						<span class="text-sm">฿{product.price + product.shipping}</span>
					</div>
				</div>

				<!-- Primary Messenger CTA Button -->
				<div class="space-y-3">
					<a
						href="https://m.me/codebreakerTH?ref={product.refParam}"
						target="_blank"
						rel="noreferrer"
						class="btn btn-primary text-primary-content btn-block gap-2 font-semibold text-sm shadow-xl shadow-teal-500/20 hover:scale-[1.01] transition-transform"
					>
						<MessageSquareIcon size="17" />
						<span>สั่งซื้อผ่าน Facebook Inbox</span>
						<ExternalLinkIcon size="14" />
					</a>

					<!-- Fast-Track Message Copier -->
					<div class="p-3 rounded-xl bg-slate-950/60 border border-slate-800 space-y-2">
						<div class="flex items-center justify-between text-xs">
							<span class="text-slate-400 font-medium">ข้อความสั่งซื้อด่วน (กดคัดลอกได้ทันที):</span>
							{#if copied}
								<span class="text-teal-400 font-bold flex items-center gap-1 text-[11px]">
									<CheckCircleIcon size="13" />
									<span>คัดลอกแล้ว!</span>
								</span>
							{/if}
						</div>
						<div class="flex items-center gap-2">
							<input
								type="text"
								readonly
								value={product.orderMessage}
								class="input input-sm input-bordered bg-slate-900 border-slate-700 text-slate-200 text-xs w-full focus:outline-none"
							/>
							<button
								type="button"
								on:click={copyOrderText}
								class="btn btn-sm btn-outline btn-accent text-accent-content shrink-0 gap-1 text-xs"
								title="กดเพื่อคัดลอกข้อความ"
							>
								<CopyIcon size="13" />
								<span>คัดลอก</span>
							</button>
						</div>
					</div>
				</div>

				<!-- 3-Step Buying Guide -->
				<div class="pt-4 border-t border-slate-800/80 space-y-3">
					<h3 class="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
						<PackageIcon size="14" class="text-teal-400" />
						<span>ขั้นตอนการสั่งซื้อ</span>
					</h3>
					<div class="space-y-2 text-xs text-slate-300">
						<div class="flex items-start gap-2.5">
							<span class="w-5 h-5 rounded-full bg-teal-500/20 text-teal-400 flex items-center justify-center font-bold text-[11px] shrink-0 mt-0.5">1</span>
							<span>กดปุ่มทัก Inbox ด้านบน พร้อมส่งข้อความสั่งซื้อ</span>
						</div>
						<div class="flex items-start gap-2.5">
							<span class="w-5 h-5 rounded-full bg-teal-500/20 text-teal-400 flex items-center justify-center font-bold text-[11px] shrink-0 mt-0.5">2</span>
							<span>แอดมินแจ้งสรุปยอดรวมและบัญชีโอนเงิน โอนแล้วส่งสลิป</span>
						</div>
						<div class="flex items-start gap-2.5">
							<span class="w-5 h-5 rounded-full bg-teal-500/20 text-teal-400 flex items-center justify-center font-bold text-[11px] shrink-0 mt-0.5">3</span>
							<span>แจ้งชื่อที่อยู่จัดส่ง รอรับหมายเลขพัสดุ (Tracking No.)</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

