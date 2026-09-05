<script lang="ts">
	import ShopCard from '$lib/components/ShopCard.svelte';
	import {
		shopProductDescriptions,
		shopComingSoonProducts,
		shopBundleDeal,
		shopImgUrlPrefix
	} from '$lib/data/metadata';
	import {
		PackageIcon,
		HelpCircleIcon,
		AwardIcon,
		MessageSquareIcon,
		ExternalLinkIcon
	} from 'svelte-feather-icons';
</script>

<svelte:head>
	<title>Code Breaker | Shop</title>
</svelte:head>

<div class="container mx-auto px-4 pt-6 sm:pt-12 pb-24 max-w-6xl">
	<!-- Hero Title -->
	<div class="text-center mb-8 sm:mb-12">
		<h1 class="text-3xl lg:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-emerald-400 to-teal-300">
			Code Breaker Shop
		</h1>
		<p class="text-slate-400 text-sm sm:text-base mt-2 max-w-xl mx-auto">
			ร้านค้าหนังสือ & การ์ดเกมปริศนาอย่างเป็นทางการจากเพจ Code Breaker Thailand
		</p>

		<!-- Trust / Value Proposition Bar -->
		<div class="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-6 max-w-4xl mx-auto text-left">
			<div class="flex items-center gap-3 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 text-slate-300">
				<div class="p-2 rounded-lg bg-teal-500/10 text-teal-400 shrink-0">
					<PackageIcon size="18" />
				</div>
				<div>
					<div class="text-xs font-bold text-white">จัดส่งทั่วประเทศ</div>
					<div class="text-[11px] text-slate-400">ค่าส่งเริ่มต้น 20–30 บาท พร้อมแจ้ง Tracking</div>
				</div>
			</div>

			<div class="flex items-center gap-3 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 text-slate-300">
				<div class="p-2 rounded-lg bg-teal-500/10 text-teal-400 shrink-0">
					<HelpCircleIcon size="18" />
				</div>
				<div>
					<div class="text-xs font-bold text-white">มีคำใบ้ & เฉลยครบ</div>
					<div class="text-[11px] text-slate-400">เล่นได้เพลิดเพลิน ไม่ค้างคา มั่นใจทุกปริศนา</div>
				</div>
			</div>

			<div class="flex items-center gap-3 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 text-slate-300">
				<div class="p-2 rounded-lg bg-teal-500/10 text-teal-400 shrink-0">
					<AwardIcon size="18" />
				</div>
				<div>
					<div class="text-xs font-bold text-white">Exclusive Content</div>
					<div class="text-[11px] text-slate-400">ปริศนาและโจทย์พิเศษที่หาเล่นที่อื่นไม่ได้</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Bundle & Save Banner -->
	<div class="relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-950/70 via-slate-900/90 to-teal-950/70 border border-teal-500/40 p-5 sm:p-7 shadow-2xl mb-12">
		<div class="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 relative z-10">
			<div class="space-y-2 max-w-2xl">
				<div class="flex flex-wrap items-center gap-2">
					<span class="badge badge-accent text-accent-content font-bold text-xs uppercase tracking-wide">
						Super Bundle Deal
					</span>
					<span class="badge badge-outline text-teal-300 border-teal-500/50 text-xs">
						ประหยัดค่าส่ง ฿80 • ฟรีค่าจัดส่ง!
					</span>
				</div>
				<h2 class="text-xl sm:text-2xl font-bold text-white">
					{shopBundleDeal.title}
				</h2>
				<p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
					{shopBundleDeal.subtitle} สั่งซื้อครั้งเดียวพร้อมรับส่วนลดพิเศษและฟรีค่าจัดส่งทันที
				</p>
				<div class="flex items-baseline gap-3 pt-1">
					<span class="text-xs text-slate-400 line-through">฿{shopBundleDeal.originalPrice}</span>
					<span class="text-2xl sm:text-3xl font-extrabold text-teal-400">฿{shopBundleDeal.bundlePrice}</span>
					<span class="text-xs font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-2 py-0.5 rounded-md">
						{shopBundleDeal.shippingText}
					</span>
				</div>
			</div>

			<div class="flex flex-col sm:flex-row gap-3 w-full lg:w-auto shrink-0">
				<a
					href="https://m.me/codebreakerTH?ref={shopBundleDeal.refParam}"
					target="_blank"
					rel="noreferrer"
					class="btn btn-primary text-primary-content gap-2 font-semibold shadow-lg hover:shadow-teal-500/20 text-xs sm:text-sm px-5"
				>
					<MessageSquareIcon size="15" />
					<span>สั่งซื้อชุด Bundle ทาง Inbox</span>
					<ExternalLinkIcon size="13" />
				</a>
			</div>
		</div>
	</div>

	<!-- Products Catalog Grid -->
	<div class="mb-14">
		<div class="flex items-center justify-between mb-6">
			<div>
				<h2 class="text-xl sm:text-2xl font-bold text-white">สินค้าพร้อมจำหน่าย</h2>
				<p class="text-xs sm:text-sm text-slate-400">พร้อมจัดส่งทุกวัน จัดส่งผ่านขนส่งเอกชน</p>
			</div>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
			{#each shopProductDescriptions as p}
				<ShopCard
					url={p.url}
					title={p.title}
					description={p.description}
					imgUrl={p.imgUrl}
					imgUrlPrefix={shopImgUrlPrefix}
					price={p.price}
					shipping={p.shipping}
					badge={p.badge}
					category={p.category}
				/>
			{/each}
		</div>
	</div>

	<!-- Stage 4: Coming Soon Section -->
	<div class="pt-8 border-t border-slate-800/80">
		<div class="text-left mb-6">
			<div class="inline-flex items-center gap-2 mb-1">
				<span class="badge badge-warning text-warning-content font-bold text-xs">
					เร็ว ๆ นี้
				</span>
				<h2 class="text-xl sm:text-2xl font-bold text-white">Coming Soon</h2>
			</div>
			<p class="text-xs sm:text-sm text-slate-400">
				โปรเจกต์หนังสือและการ์ดเกมปริศนาชุดใหม่ที่กำลังจะมาถึง ติดตามการเปิดตัวได้ทางเพจ
			</p>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
			{#each shopComingSoonProducts as item}
				<ShopCard
					title={item.title}
					description={item.description}
					imgUrl={item.imgUrl}
					imgUrlPrefix={shopImgUrlPrefix}
					badge={item.badge}
					category={item.category}
					isComingSoon={true}
				/>
			{/each}
		</div>
	</div>
</div>

