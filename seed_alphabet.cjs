const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');

let supabaseUrl = 'https://ojjggolcfmjnovmipaav.supabase.co';
let supabaseKey = '';

try {
	const env = fs.readFileSync('.env.local', 'utf-8');
	const envVars = {};
	env.split(/\r?\n/).forEach(line => {
		const parts = line.split('=');
		if (parts.length >= 2) {
			envVars[parts[0].trim()] = parts.slice(1).join('=').trim();
		}
	});
	supabaseUrl = envVars.VITE_SUPABASE_URL || supabaseUrl;
	supabaseKey = envVars.VITE_SUPABASE_ANON_KEY;
} catch (e) {
	console.error('Error reading .env.local:', e);
}

if (!supabaseKey) {
	console.error('Missing Supabase Anon Key in .env.local');
	process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

const puzzles = [
	{
		uid: "1",
		title: "อาหาร",
		author: "ระบบ",
		hints: ["ทั่วไป", "ขนม", "ร้อน", "ชื่อแปลก"],
		answers: ["ผัดกะเพราหมูกรอบ", "กระยาสาทร", "โอโคโนมิยากิ", "พระกระโดดกำแพง"],
		tags: ["alphabet", "word puzzle"],
		is_public: true,
		created_at: "2024-07-07T00:00:00.000Z"
	},
	{
		uid: "2",
		title: "ฤดูฝน",
		author: "ระบบ",
		hints: ["วลี", "ลม", "ฝน", "เนื้อเพลง"],
		answers: ["ฝนตกไม่ทั่วฟ้า", "มรสุมตะวันตกเฉียงใต้", "กระดาษคำตอบ", "วันนี้ฝนตกไหลลงที่หน้าต่าง"],
		tags: ["alphabet", "word puzzle"],
		is_public: true,
		created_at: "2024-07-07T00:00:00.000Z"
	},
	{
		uid: "3",
		title: "สุภาษิตไทย",
		author: "ระบบ",
		hints: ["สัตว์", "คนดี", "เจ็บ", "สม"],
		answers: ["ไก่เห็นตีนงูงูเห็นนมไก่", "เข้าตามตรอกออกตามประตู", "หนามยอกเอาหนามบ่ง", "ปลาหมอตายเพราะปาก"],
		tags: ["alphabet", "word puzzle"],
		is_public: true,
		created_at: "2024-07-07T00:00:00.000Z"
	}
];

async function seed() {
	console.log('Seeding alphabet puzzles...');
	for (const p of puzzles) {
		const { data, error } = await supabase
			.from('alphabet')
			.upsert([p], { onConflict: 'uid' });

		if (error) {
			console.error(`Error inserting puzzle ${p.uid}:`, error.message || JSON.stringify(error) || error);
		} else {
			console.log(`Successfully seeded puzzle ${p.uid}: ${p.title}`);
		}
	}
}

seed();
