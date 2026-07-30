<script lang="ts">
	import { BookOpenIcon, ArrowLeftIcon } from 'svelte-feather-icons';

	const categories = [
		{
			title: '🗓️ วันในสัปดาห์ & ธาตุธรรมชาติ (Days of the Week & Elements)',
			badges: [
				'อาทิตย์ (Sunday) • Sun / สุริยะ',
				'จันทร์ (Monday) • Moon / จันทรา',
				'อังคาร (Tuesday) • Mars / Fire (ไฟ)',
				'พุธ (Wednesday) • Mercury / Water (น้ำ)',
				'พฤหัสบดี (Thursday) • Jupiter / Wood (ไม้)',
				'ศุกร์ (Friday) • Venus / Gold-Metal (ทอง/โลหะ)',
				'เสาร์ (Saturday) • Saturn / Earth (ดิน)'
			]
		},
		{
			title: '♈ 12 จักรราศี (12 Zodiac Signs & Symbols)',
			badges: [
				'1. เมษ (Aries) ♈',
				'2. พฤษภ (Taurus) ♉',
				'3. เมถุน (Gemini) ♊',
				'4. กรกฎ (Cancer) ♋',
				'5. สิงห์ (Leo) ♌',
				'6. กันย์ (Virgo) ♍',
				'7. ตุลย์ (Libra) ♎',
				'8. พิจิก (Scorpio) ♏',
				'9. ธนู (Sagittarius) ♐',
				'10. มังกร (Capricorn) ♑',
				'11. กุมภ์ (Aquarius) ♒',
				'12. มีน (Pisces) ♓'
			]
		},
		{
			title: '🪐 ระบบสุริยะ (Solar System Planets Order)',
			badges: [
				'1. พุธ (Mercury)',
				'2. ศุกร์ (Venus)',
				'3. โลก (Earth)',
				'4. อังคาร (Mars)',
				'5. พฤหัสบดี (Jupiter)',
				'6. เสาร์ (Saturn)',
				'7. ยูเรนัส (Uranus)',
				'8. เนปจูน (Neptune)'
			]
		},
		{
			title: '🧭 ทิศทั้ง 8 (8 Compass Directions)',
			badges: [
				'เหนือ (North - N)',
				'ตะวันออกเฉียงเหนือ (North-East - NE)',
				'ตะวันออก (East - E)',
				'ตะวันออกเฉียงใต้ (South-East - SE)',
				'ใต้ (South - S)',
				'ตะวันตกเฉียงใต้ (South-West - SW)',
				'ตะวันตก (West - W)',
				'ตะวันตกเฉียงเหนือ (North-West - NW)'
			]
		},
		{
			title: '🌈 ลำดับสีรุ้ง (7 Rainbow Colors - ROYGBIV)',
			badges: [
				'1. ม่วง (Violet)',
				'2. คราม (Indigo)',
				'3. น้ำเงิน (Blue)',
				'4. เขียว (Green)',
				'5. เหลือง (Yellow)',
				'6. แสด / ส้ม (Orange)',
				'7. แดง (Red)'
			]
		},
		{
			title: '🃏 สัญลักษณ์ไพ่ป๊อก (Playing Card Suits)',
			badges: [
				'♠ โพดำ (Spades - Black)',
				'♥ โพแดง (Hearts - Red)',
				'♦ ข้าวหลามตัด (Diamonds - Red)',
				'♣ ดอกจิก (Clubs - Black)'
			]
		},
		{
			title: '🎵 ตัวโน้ตดนตรี & Solfège (Musical Notes)',
			badges: [
				'C = โด (Do)',
				'D = เร (Re)',
				'E = มี (Mi)',
				'F = ฟา (Fa)',
				'G = ซอล (Sol)',
				'A = ลา (La)',
				'B / H = ที (Ti)'
			]
		},
		{
			title: '🐀 12 นักษัตร & สัตว์ประจำปี (12 Zodiac Animals)',
			badges: [
				'1. ชวด (Rat / หนู)',
				'2. ฉลู (Ox / วัว)',
				'3. ขาล (Tiger / เสือ)',
				'4. เถาะ (Rabbit / กระต่าย)',
				'5. มะโรง (Dragon / มังกร-งูใหญ่)',
				'6. มะเส็ง (Snake / งูเล็ก)',
				'7. มะเมีย (Horse / ม้า)',
				'8. มะแม (Goat / แพะ)',
				'9. วอก (Monkey / ลิง)',
				'10. ระกา (Rooster / ไก่)',
				'11. จอ (Dog / หมา-สุนัข)',
				'12. กุน (Pig / หมู)'
			]
		}
	];
</script>

<svelte:head>
	<title>Code Breaker | Puzzle Knowledge & Reference Data 📚</title>
	<meta
		name="description"
		content="คลังข้อมูลอ้างอิงและสัญลักษณ์พื้นฐานภาษาไทย-อังกฤษ สำหรับแก้พัซเซิลและรหัสลับ"
	/>
</svelte:head>

<div class="flex flex-col gap-8 w-full max-w-5xl mx-auto px-4 py-8 select-none">
	<!-- Navigation -->
	<div class="flex items-center justify-between">
		<a href="/resources" class="btn btn-ghost btn-xs gap-1.5 font-bold text-slate-400 hover:text-white">
			<ArrowLeftIcon size="14" />
			<span>กลับไปหน้าแหล่งทรัพยากร</span>
		</a>
	</div>

	<!-- Header -->
	<header class="text-center max-w-2xl mx-auto space-y-3">
		<div class="w-14 h-14 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center border border-emerald-500/20 mx-auto shadow-lg shadow-emerald-500/5">
			<BookOpenIcon size="32" />
		</div>
		<h1 class="text-3xl lg:text-4xl font-black tracking-tight text-white">
			Puzzle Knowledge & References 📚
		</h1>
		<p class="text-slate-400 text-sm lg:text-base leading-relaxed">
			คลังข้อมูลอ้างอิงและสัญลักษณ์พื้นฐานภาษาไทย-อังกฤษที่มักพบบ่อยในพัซเซิลและรหัสลับ
		</p>
	</header>

	<!-- Compact Badge Grid per Category -->
	<div class="space-y-6">
		{#each categories as cat}
			<section class="bg-slate-900 border border-slate-800 rounded-3xl p-5 shadow-xl space-y-3">
				<h2 class="text-base font-bold text-emerald-400 border-b border-slate-800/80 pb-2">
					{cat.title}
				</h2>
				<div class="flex flex-wrap gap-2 pt-1">
					{#each cat.badges as badge}
						<span class="inline-flex items-center px-3.5 py-1.5 rounded-xl bg-slate-950 border border-slate-800 text-sm font-normal text-slate-200 hover:border-emerald-500/50 hover:text-emerald-300 transition-all">
							{badge}
						</span>
					{/each}
				</div>
			</section>
		{/each}
	</div>
</div>
