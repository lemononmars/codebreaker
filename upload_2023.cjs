const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');

const supabaseUrl = 'https://ojjggolcfmjnovmipaav.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9qamdnb2xjZm1qbm92bWlwYWF2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTY4MzY0MDEsImV4cCI6MTk3MjQxMjQwMX0.NrbQqxSepVUVjAO4_diFukIZZbgXRXjkPzgG2ZSA12o';

const supabase = createClient(supabaseUrl, supabaseKey);

async function main() {
	console.log('Checking existing images in storage bucket "puzzles/weekly"...');
	const { data: existingFiles, error: listError } = await supabase.storage
		.from('puzzles')
		.list('weekly', { limit: 500 });

	if (listError) {
		console.error('List error:', listError);
		return;
	}

	const existingNames = new Set((existingFiles || []).map(f => f.name));
	console.log(`Found ${existingNames.size} existing files in weekly/`);

	const dirPath = path.join(__dirname, '2023');
	const localFiles = fs.readdirSync(dirPath).filter(f => f.endsWith('.jpg'));

	console.log(`Found ${localFiles.length} local files in 2023/`);

	let uploadedCount = 0;
	let skippedCount = 0;
	let errorCount = 0;

	for (const file of localFiles) {
		const destinationPath = `weekly/${file}`;
		if (existingNames.has(file)) {
			skippedCount++;
			continue;
		}

		const filePath = path.join(dirPath, file);
		const fileBuffer = fs.readFileSync(filePath);

		const { error: uploadError } = await supabase.storage
			.from('puzzles')
			.upload(destinationPath, fileBuffer, {
				contentType: 'image/jpeg',
				upsert: true
			});

		if (uploadError) {
			console.error(`Failed uploading ${file}:`, uploadError.message || uploadError);
			errorCount++;
		} else {
			uploadedCount++;
			console.log(`Uploaded: ${destinationPath}`);
		}
	}

	console.log(`Summary: Uploaded=${uploadedCount}, Skipped=${skippedCount}, Errors=${errorCount}`);
}

main();
