<script lang="ts">
	import {
		LayersIcon,
		HelpCircleIcon,
		CheckCircleIcon,
		FileTextIcon,
		GridIcon,
		Maximize2Icon,
		CompassIcon,
		TagIcon,
		ArrowLeftIcon
	} from 'svelte-feather-icons';

	const mechanicsList = [
		{
			id: 'first-last',
			name: '1. อ่านตัวอักษรตัวแรก/ตัวสุดท้าย (First/Last Letter Extraction)',
			category: 'Text & Acrostic',
			description: 'กลไกพื้นฐานของการไขปริศนา โดยนำอักษรตัวแรก (Acrostic) หรือตัวสุดท้ายของแต่ละคำ/แต่ละบรรทัดมาต่อกันเป็นคำตอบใหม่',
			exampleText: 'P - Pixel / U - Umbrella / Z - Zebra / Z - Zero ➔ PUZZLE'
		},
		{
			id: 'blanks',
			name: '2. เติมคำในช่องว่าง (Fill in the Blanks / ◯◯)',
			category: 'Word Completion',
			description: 'การเติมคำที่หายไปในสัญลักษณ์ (◯◯) โดยใช้บริบทของกลุ่มคำหรือหมวดหมู่คำเดียวกันเพื่อดึงอักษรในตำแหน่งที่กำหนด',
			exampleText: 'SUN[D]AY, M[O]NDAY, TUES[D]AY ➔ D O D'
		},
		{
			id: 'hidden-word',
			name: '3. คำซ่อนในประโยค (Hidden Word In Sentences)',
			category: 'Word Search',
			description: 'คำตอบถูกซ่อนไว้ระหว่างรอยต่อของสองคำหรือในประโยคโดยไม่ต้องพึ่งรหัสลับ',
			exampleText: 'DIS[CO DE]SK ➔ CODE'
		},
		{
			id: 'transparency',
			name: '4. ซ้อนทับแผ่นใส (Transparency Stacking & Overlay)',
			category: 'Visual & Geometry',
			description: 'กลไกภาพยอดนิยมใน Escape Room โดยนำกระดาษหรือแผ่นใสที่มีรู/เส้น 2 แผ่นมาวางทับกันเพื่อเปิดเผยอักษรที่ซ่อนอยู่',
			exampleText: 'แผ่น A (ตารางอักษร) + แผ่น B (เจาะรูเฉพาะตำแหน่ง) ➔ อ่านคำตอบ'
		},
		{
			id: 'folding',
			name: '5. พับกระดาษประกบเบาะแส (Origami & Folding Mechanic)',
			category: 'Physical Puzzle',
			description: 'การพับกระดาษตามรอยทแยงหรือตามครึ่ง เพื่อนำครึ่งตัวอักษรหรือเส้นที่กระจัดกระจายมาบรรจบกันเป็นคำตอบ',
			exampleText: 'พับครึ่งกระดาษตามเส้นประ ➔ ข้อความกระจัดกระจายต่อกันเป็นรูปคำ'
		},
		{
			id: 'metapuzzle',
			name: '6. เมตาพัซเซิล (Metapuzzle Combination)',
			category: 'Puzzle Architecture',
			description: 'กลไกขั้นสูงของ Puzzle Hunt โดยนำคำตอบจากด่านย่อยทั้งหมด (Round Puzzles) มาใช้เป็นวัตถุดิบในการไขปริศนาสุดท้าย (Final Meta)',
			exampleText: 'คำตอบด่าน 1-4 ➔ นำมาใส่ในตาราง Meta ➔ คำตอบชนะเลิศ'
		},
		{
			id: 'color-index',
			name: '7. สลับลำดับด้วยสีและสัญลักษณ์ (Color & Symbol Indexing)',
			category: 'Ordering Mechanic',
			description: 'การเรียงลำดับตัวอักษรใหม่ตามสีของสเปกตรัม (แดง, ส้ม, เหลือง, เขียว, ฟ้า, ม่วง) หรือตามรูปร่างของสัญลักษณ์',
			exampleText: 'แดง=C, เหลือง=D, ส้ม=O, เขียว=E ➔ เรียงตามสีรุ้ง (แดง-ส้ม-เหลือง-เขียว) = CODE'
		},
		{
			id: 'direction-clock',
			name: '8. ทิศทางและเข็มนาฬิกา (Directional & Clockwise Tracing)',
			category: 'Spatial Tracing',
			description: 'การอ่านตัวอักษรตามทิศทางเข็มทิศ (N, E, S, W) หรือตามองศาเข็มนาฬิกาบนตารางเพื่อถอดคำตอบ',
			exampleText: 'เริ่มที่ศูนย์กลาง ➔ เดิน ขึ้น 1, ขวา 2, ลง 1 ➔ สะกดได้คำตอบ'
		}
	];
</script>

<svelte:head>
	<title>Code Breaker | สารานุกรมกลไกปริศนา (Puzzle Mechanics 謎図鑑) 🧩</title>
	<meta name="description" content="รวมกลไกและรูปแบบปริศนาพบบ่อยใน Puzzle Hunt และ Escape Room (謎図鑑)" />
</svelte:head>

<div class="flex flex-col gap-8 w-full max-w-5xl mx-auto px-4 py-8 select-none">
	<!-- Navigation -->
	<div class="flex items-center justify-between">
		<a href="/resources" class="btn btn-ghost btn-xs gap-1.5 font-bold">
			← กลับไปหน้าแหล่งทรัพยากร
		</a>
	</div>

	<!-- Header -->
	<header class="text-center max-w-3xl mx-auto space-y-3">
		<div class="w-16 h-16 rounded-2xl bg-neutral text-purple-400 flex items-center justify-center shadow-xl border border-base-300 mx-auto">
			<LayersIcon size="30" />
		</div>
		<h1 class="text-3xl lg:text-5xl font-black tracking-tight text-white">
			สารานุกรมกลไกปริศนา (Puzzle Mechanics / 謎図鑑)
		</h1>
		<p class="text-slate-300 text-sm lg:text-base leading-relaxed">
			รวบรวมรูปแบบและกลไกการคิดโจทย์ยอดนิยมใน Puzzle Hunt, Escape Room และบอร์ดเกมปริศนา (อ้างอิงมาตรฐาน 謎図鑑 ของญี่ปุ่น)
		</p>
	</header>

	<!-- Mechanics Grid -->
	<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
		{#each mechanicsList as item}
			<div class="bg-slate-900/80 border border-slate-800 p-6 rounded-3xl shadow-xl flex flex-col justify-between space-y-4">
				<div class="space-y-3">
					<div class="flex items-center justify-between">
						<span class="badge badge-secondary font-bold text-xs px-3 py-1">
							{item.category}
						</span>
					</div>

					<h2 class="text-xl font-bold text-white leading-snug">
						{item.name}
					</h2>

					<p class="text-xs text-slate-300 leading-relaxed">
						{item.description}
					</p>
				</div>

				<div class="bg-slate-950 p-3.5 rounded-2xl border border-slate-800 font-mono text-xs text-slate-200">
					<span class="text-slate-500 text-[10px] uppercase font-bold block mb-1">ตัวอย่างการทำงาน:</span>
					<span class="text-purple-300 font-bold">{item.exampleText}</span>
				</div>
			</div>
		{/each}
	</div>
</div>
