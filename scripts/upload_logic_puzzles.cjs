const fs = require('fs');
const https = require('https');
const path = require('path');

// Read .env.local
const envContent = fs.readFileSync(path.join(__dirname, '../.env.local'), 'utf8');
const envVars = {};
envContent.split('\n').forEach(line => {
	const parts = line.split('=');
	if (parts.length >= 2) {
		envVars[parts[0].trim()] = parts.slice(1).join('=').trim();
	}
});

const SUPABASE_URL = envVars.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = envVars.VITE_SUPABASE_ANON_KEY;

const puzzles = [
	// Contest II Puzzles
	{
		title: 'Yajilin 6x6 (Contest II 1.1)',
		genre: 'yajilin',
		genre_title: 'Yajilin',
		url: 'https://pzprxs.vercel.app/p?yajilin/b/6/6/4222d21v11d1130',
		width: 6,
		height: 6,
		difficulty: 'Easy',
		author: 'Code Breaker',
		description: 'Code Breaker Logic Puzzle Contest II - Round 1.1'
	},
	{
		title: 'Yajilin 7x7 (Contest II 1.2)',
		genre: 'yajilin',
		genre_title: 'Yajilin',
		url: 'https://pzprxs.vercel.app/p?yajilin/b/7/7/i11i41d30d21i11i',
		width: 7,
		height: 7,
		difficulty: 'Easy',
		author: 'Code Breaker',
		description: 'Code Breaker Logic Puzzle Contest II - Round 1.2'
	},
	{
		title: 'Yajilin 10x10 (Contest II 1.3)',
		genre: 'yajilin',
		genre_title: 'Yajilin',
		url: 'https://pzprxs.vercel.app/p?yajilin/b/10/10/f2323w1111m32i32o30i40q',
		width: 10,
		height: 10,
		difficulty: 'Hard',
		author: 'Code Breaker',
		description: 'Code Breaker Logic Puzzle Contest II - Round 1.3'
	},
	{
		title: 'Heyawake 6x6 (Contest II 1.4)',
		genre: 'heyawake',
		genre_title: 'Heyawake',
		url: 'https://pzprxs.vercel.app/p?heyawake/6/6/aaaaaa0fo3u02011g1012',
		width: 6,
		height: 6,
		difficulty: 'Easy',
		author: 'Code Breaker',
		description: 'Code Breaker Logic Puzzle Contest II - Round 1.4'
	},
	{
		title: 'Heyawake 7x7 (Contest II 1.5)',
		genre: 'heyawake',
		genre_title: 'Heyawake',
		url: 'https://pzprxs.vercel.app/p?heyawake/7/7/mrdmrdmr8vo1vvs0vo11g1j111q1h',
		width: 7,
		height: 7,
		difficulty: 'Medium',
		author: 'Code Breaker',
		description: 'Code Breaker Logic Puzzle Contest II - Round 1.5'
	},
	{
		title: 'Heyawake 9x9 (Contest II 1.6)',
		genre: 'heyawake',
		genre_title: 'Heyawake',
		url: 'https://pzprxs.vercel.app/p?heyawake/9/9/50k2h9d5kka1850001vvo000vvs000413h052h122',
		width: 9,
		height: 9,
		difficulty: 'Hard',
		author: 'Code Breaker',
		description: 'Code Breaker Logic Puzzle Contest II - Round 1.6'
	},
	{
		title: 'LITS 7x7 (Contest II 1.7)',
		genre: 'lits',
		genre_title: 'LITS',
		url: 'https://pzprxs.vercel.app/p?lits/7/7/1aqf6jpi0clog82sbg',
		width: 7,
		height: 7,
		difficulty: 'Medium',
		author: 'Code Breaker',
		description: 'Code Breaker Logic Puzzle Contest II - Round 1.7'
	},
	{
		title: 'LITS 8x8 (Contest II 1.8)',
		genre: 'lits',
		genre_title: 'LITS',
		url: 'https://pzprxs.vercel.app/p?lits/8/8/qejch486uk4g00g61vv2k510',
		width: 8,
		height: 8,
		difficulty: 'Hard',
		author: 'Code Breaker',
		description: 'Code Breaker Logic Puzzle Contest II - Round 1.8'
	},
	{
		title: 'LITS 9x9 (Contest II 1.9)',
		genre: 'lits',
		genre_title: 'LITS',
		url: 'https://pzprxs.vercel.app/p?lits/9/9/khdaaml5baik4g0analalalalan8v0',
		width: 9,
		height: 9,
		difficulty: 'Medium',
		author: 'Code Breaker',
		description: 'Code Breaker Logic Puzzle Contest II - Round 1.9'
	},
	{
		title: 'Masyu 6x6 (Contest II 1.10)',
		genre: 'masyu',
		genre_title: 'Masyu',
		url: 'https://pzprxs.vercel.app/p?mashu/6/6/10600630030i',
		width: 6,
		height: 6,
		difficulty: 'Easy',
		author: 'Code Breaker',
		description: 'Code Breaker Logic Puzzle Contest II - Round 1.10'
	},
	{
		title: 'Masyu 7x7 (Contest II 1.11)',
		genre: 'masyu',
		genre_title: 'Masyu',
		url: 'https://pzprxs.vercel.app/p?mashu/7/7/13001320061300260',
		width: 7,
		height: 7,
		difficulty: 'Easy',
		author: 'Code Breaker',
		description: 'Code Breaker Logic Puzzle Contest II - Round 1.11'
	},
	{
		title: 'Masyu 10x10 (Contest II 1.12)',
		genre: 'masyu',
		genre_title: 'Masyu',
		url: 'https://pzprxs.vercel.app/p?mashu/10/10/0000k0i10000210i00367300a193990000',
		width: 10,
		height: 10,
		difficulty: 'Medium',
		author: 'Code Breaker',
		description: 'Code Breaker Logic Puzzle Contest II - Round 1.12'
	},
	{
		title: 'Akari 7x7 (Contest II 1.14)',
		genre: 'akari',
		genre_title: 'Akari',
		url: 'https://pzprxs.vercel.app/p?akari/7/7/l67cj.j.....j.l66cj',
		width: 7,
		height: 7,
		difficulty: 'Easy',
		author: 'Code Breaker',
		description: 'Code Breaker Logic Puzzle Contest II - Round 1.14'
	},
	{
		title: 'Akari 7x7 (Contest II 1.15)',
		genre: 'akari',
		genre_title: 'Akari',
		url: 'https://pzprxs.vercel.app/p?akari/7/7/hclcgahcg.ibhagblb',
		width: 7,
		height: 7,
		difficulty: 'Hard',
		author: 'Code Breaker',
		description: 'Code Breaker Logic Puzzle Contest II - Round 1.15'
	},
	{
		title: 'Akari 9x9 (Contest II 1.16)',
		genre: 'akari',
		genre_title: 'Akari',
		url: 'https://pzprxs.vercel.app/p?akari/9/9/q6.gdgaib.gag.kbi.i7.hcicg8.gbo',
		width: 9,
		height: 9,
		difficulty: 'Medium',
		author: 'Code Breaker',
		description: 'Code Breaker Logic Puzzle Contest II - Round 1.16'
	},
	{
		title: 'Shakashaka 7x7 (Contest II 1.18)',
		genre: 'shakashaka',
		genre_title: 'Shakashaka',
		url: 'https://pzprxs.vercel.app/p?shakashaka/7/7/bgboehbicheocgc',
		width: 7,
		height: 7,
		difficulty: 'Hard',
		author: 'Code Breaker',
		description: 'Code Breaker Logic Puzzle Contest II - Round 1.18'
	},
	{
		title: 'Shakashaka 7x7 (Contest II 1.19)',
		genre: 'shakashaka',
		genre_title: 'Shakashaka',
		url: 'https://pzprxs.vercel.app/p?shakashaka/7/7/.hajcn1cg3bndjc./',
		width: 7,
		height: 7,
		difficulty: 'Hard',
		author: 'Code Breaker',
		description: 'Code Breaker Logic Puzzle Contest II - Round 1.19'
	},
	{
		title: 'Shakashaka 9x9 (Contest II 1.20)',
		genre: 'shakashaka',
		genre_title: 'Shakashaka',
		url: 'https://pzprxs.vercel.app/p?shakashaka/9/9/i11bl.i1dh.o2.o.cm.j3ag.n01cg',
		width: 9,
		height: 9,
		difficulty: 'Hard',
		author: 'Code Breaker',
		description: 'Code Breaker Logic Puzzle Contest II - Round 1.20'
	},
	// Contest I Puzzles (Round 1: Nostalgia)
	{
		title: 'Sudoku 6x6 (Contest I 1.1)',
		genre: 'sudoku',
		genre_title: 'Sudoku',
		url: 'https://pzprxs.vercel.app/p?sudoku/6/6/.5...6..1...2.4..3.5...6..2...1.',
		width: 6,
		height: 6,
		difficulty: 'Easy',
		author: 'Code Breaker',
		description: 'Code Breaker Logic Puzzle Contest I - Round 1.1 (Nostalgia)'
	},
	{
		title: 'Sudoku 9x9 (Contest I 1.2)',
		genre: 'sudoku',
		genre_title: 'Sudoku',
		url: 'https://pzprxs.vercel.app/p?sudoku/9/9/.12......8..3..2..7..4.1.6..65...7......7.....9..23..2.7.9..4..4..8..5......76..',
		width: 9,
		height: 9,
		difficulty: 'Hard',
		author: 'Code Breaker',
		description: 'Code Breaker Logic Puzzle Contest I - Round 1.2 (Nostalgia)'
	},
	{
		title: 'Slitherlink 6x6 (Contest I 1.3)',
		genre: 'slither',
		genre_title: 'Slitherlink',
		url: 'https://pzprxs.vercel.app/p?slither/6/6/.022...2.220022.2..2..022222..2...222',
		width: 6,
		height: 6,
		difficulty: 'Easy',
		author: 'Code Breaker',
		description: 'Code Breaker Logic Puzzle Contest I - Round 1.3 (Nostalgia)'
	},
	{
		title: 'Nurikabe 7x7 (Contest I 1.9)',
		genre: 'nurikabe',
		genre_title: 'Nurikabe',
		url: 'https://pzprxs.vercel.app/p?nurikabe/7/7/g2g6h5g8g',
		width: 7,
		height: 7,
		difficulty: 'Easy',
		author: 'Code Breaker',
		description: 'Code Breaker Logic Puzzle Contest I - Round 1.9 (Nostalgia)'
	},
	{
		title: 'Nurikabe 10x10 (Contest I 1.10)',
		genre: 'nurikabe',
		genre_title: 'Nurikabe',
		url: 'https://pzprxs.vercel.app/p?nurikabe/10/10/h5k5g5i5k5g5k5g5k',
		width: 10,
		height: 10,
		difficulty: 'Hard',
		author: 'Code Breaker',
		description: 'Code Breaker Logic Puzzle Contest I - Round 1.10 (Nostalgia)'
	},
	{
		title: 'Shikaku 7x7 (Contest I 1.11)',
		genre: 'shikaku',
		genre_title: 'Shikaku',
		url: 'https://pzprxs.vercel.app/p?shikaku/7/7/c6c3b6b6a6a2a3a2b3b4a2a6a4a2b3b6',
		width: 7,
		height: 7,
		difficulty: 'Easy',
		author: 'Code Breaker',
		description: 'Code Breaker Logic Puzzle Contest I - Round 1.11 (Nostalgia)'
	},
	{
		title: 'Shikaku 10x10 (Contest I 1.12)',
		genre: 'shikaku',
		genre_title: 'Shikaku',
		url: 'https://pzprxs.vercel.app/p?shikaku/10/10/a16h6i8h20d25f12i8h5',
		width: 10,
		height: 10,
		difficulty: 'Medium',
		author: 'Code Breaker',
		description: 'Code Breaker Logic Puzzle Contest I - Round 1.12 (Nostalgia)'
	},
	{
		title: 'Yajilin 6x6 (Contest I 1.13)',
		genre: 'yajilin',
		genre_title: 'Yajilin',
		url: 'https://pzprxs.vercel.app/p?yajilin/b/6/6/1220i230h210g240j210g1220i',
		width: 6,
		height: 6,
		difficulty: 'Easy',
		author: 'Code Breaker',
		description: 'Code Breaker Logic Puzzle Contest I - Round 1.13 (Nostalgia)'
	},
	{
		title: 'Yajilin 10x10 (Contest I 1.14)',
		genre: 'yajilin',
		genre_title: 'Yajilin',
		url: 'https://pzprxs.vercel.app/p?yajilin/b/10/10/m140j340g230d220i120g220k320h140',
		width: 10,
		height: 10,
		difficulty: 'Hard',
		author: 'Code Breaker',
		description: 'Code Breaker Logic Puzzle Contest I - Round 1.14 (Nostalgia)'
	},
	{
		title: 'Akari 7x7 (Contest I 1.15)',
		genre: 'akari',
		genre_title: 'Akari',
		url: 'https://pzprxs.vercel.app/p?akari/7/7/b.0.c2.c1.d2.c2.c2.c1.d.b.',
		width: 7,
		height: 7,
		difficulty: 'Medium',
		author: 'Code Breaker',
		description: 'Code Breaker Logic Puzzle Contest I - Round 1.15 (Nostalgia)'
	},
	{
		title: 'Akari 10x10 (Contest I 1.16)',
		genre: 'akari',
		genre_title: 'Akari',
		url: 'https://pzprxs.vercel.app/p?akari/10/10/d1.g2.c1.d1.e11.e11.e1.d1.c3.g0.d',
		width: 10,
		height: 10,
		difficulty: 'Medium',
		author: 'Code Breaker',
		description: 'Code Breaker Logic Puzzle Contest I - Round 1.16 (Nostalgia)'
	}
];

async function upload() {
	console.log('Uploading', puzzles.length, 'puzzles to Supabase...');
	const postData = JSON.stringify(puzzles);
	const parsedUrl = new URL(`${SUPABASE_URL}/rest/v1/logic_puzzles`);

	const options = {
		hostname: parsedUrl.hostname,
		port: 443,
		path: parsedUrl.pathname,
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'apikey': SUPABASE_ANON_KEY,
			'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
			'Prefer': 'return=representation',
			'Content-Length': Buffer.byteLength(postData)
		}
	};

	const req = https.request(options, (res) => {
		let data = '';
		res.on('data', (chunk) => { data += chunk; });
		res.on('end', () => {
			console.log('Status Code:', res.statusCode);
			console.log('Uploaded successfully!');
		});
	});

	req.on('error', (e) => {
		console.error('Request error:', e);
	});

	req.write(postData);
	req.end();
}

upload();
