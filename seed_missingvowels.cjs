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
		answers: ["ผัดกะเพราหมูกรอบ", "กระยาสาทร", "โอโคโนมิยากิ", "พระกระโดดกำแพง"],
		tags: ["missingvowels", "word puzzle"],
		is_public: true,
		created_at: "2024-07-07T00:00:00.000Z"
	},
	{
		uid: "2",
		title: "จังหวัดกินได้",
		author: "ระบบ",
		answers: ["กุนเชียงใหม่", "อ่างทองหยอด", "นมโคราช", "เบียร์สิงห์บุรี", "สระแก้วมังกร"],
		tags: ["missingvowels", "word puzzle"],
		is_public: true,
		created_at: "2025-11-21T00:00:00.000Z"
	},
	{
		uid: "3",
		title: "เห็นแล้วหนาว",
		author: "ระบบ",
		answers: ["เทือกเขาหิมาลัย", "แม่คะนิ้งบนดอยอินทนนท์", "แอร์ที่อุณหภูมิสิบห้าองศาเซลเซียส", "บิงซูชาเขียวมัทฉะ", "บิลค่าไฟหน้าร้อน"],
		tags: ["missingvowels", "word puzzle"],
		is_public: true,
		created_at: "2025-11-21T00:00:00.000Z"
	}
];

async function seed() {
	console.log('Seeding missingvowels puzzles...');
	for (const p of puzzles) {
		const { data, error } = await supabase
			.from('missingvowels')
			.upsert([p], { onConflict: 'uid' });

		if (error) {
			console.error(`Error inserting puzzle ${p.uid}:`, error.message || JSON.stringify(error) || error);
		} else {
			console.log(`Successfully seeded puzzle ${p.uid}: ${p.title}`);
		}
	}
}

seed();
