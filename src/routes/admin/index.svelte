<svelte:head><title>Admin | Code Breaker</title></svelte:head>
<main class="max-w-5xl mx-auto p-6">
	<h1 class="text-3xl font-bold mb-2">Code Breaker Admin</h1>
	<p class="mb-6">จัดการปริศนาประจำสัปดาห์ ปริศนาตรรกะ และคลังคำถาม Quiz</p>
	<div class="grid gap-4 sm:grid-cols-3">
		<a class="card bg-base-200 text-base-content shadow hover:bg-base-300" href="/admin/weekly">
			<div class="card-body">
				<h2 class="card-title">Weekly Puzzles</h2>
				<p>เพิ่มและแก้ไขปริศนา อัปโหลดรูป และเตรียมโพสต์ Facebook</p>
			</div>
		</a>
		<a class="card bg-base-200 text-base-content shadow hover:bg-base-300" href="/admin/logic">
			<div class="card-body">
				<h2 class="card-title">Logic Puzzles</h2>
				<p>เพิ่มและแก้ไขปริศนาตรรกะ พร้อมดูภาพตัวอย่าง</p>
			</div>
		</a>
		<a class="card bg-base-200 text-base-content shadow hover:bg-base-300" href="/admin/questions">
			<div class="card-body">
				<h2 class="card-title">Quiz</h2>
				<p>ตรวจสอบคลังคำถาม แหล่งอ้างอิง ระดับความยาก และสถานะอนุมัติ</p>
			</div>
		</a>
	</div>
</main>
