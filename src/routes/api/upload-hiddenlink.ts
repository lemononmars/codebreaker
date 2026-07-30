import type { RequestHandler } from '@sveltejs/kit';
import fs from 'fs';
import path from 'path';

export const get: RequestHandler = async () => {
	try {
		const brainDir = 'C:\\Users\\sakul_bp6myy0\\.gemini\\antigravity-ide\\brain\\c91f4a0a-76e8-4604-9160-0d01cb4d2017';
		const staticDir = path.join(process.cwd(), 'static', 'puzzles', 'hiddenlink');
		if (!fs.existsSync(staticDir)) {
			fs.mkdirSync(staticDir, { recursive: true });
		}

		const knownMapping: Record<string, string> = {
			'media__1785441324034.jpg': 'link01.jpg',
			'media__1785441324007.jpg': 'link02.jpg',
			'media__1785441323868.jpg': 'link03.jpg',
			'media__1785441323965.jpg': 'link04.jpg',
			'media__1785441323833.jpg': 'link05.jpg',
			'media__1785442235507.jpg': 'link06.jpg',
			'media__1785442235566.jpg': 'link07.jpg',
			'media__1785442235602.jpg': 'link08.jpg',
			'media__1785442235657.jpg': 'link09.jpg',
			'media__1785442235636.jpg': 'link10.jpg',
			// Unscrambled mapping for 11, 12, 13
			'media__1785442569477.jpg': 'link11.jpg',
			'media__1785442569406.jpg': 'link12.jpg',
			'media__1785442569435.jpg': 'link13.jpg',
			'media__1785442569532.jpg': 'link14.jpg',
			'media__1785442569547.jpg': 'link15.jpg'
		};

		const results: string[] = [];

		// Copy known mappings
		for (const [srcName, destName] of Object.entries(knownMapping)) {
			const srcPath = path.join(brainDir, srcName);
			const destPath = path.join(staticDir, destName);
			if (fs.existsSync(srcPath)) {
				fs.copyFileSync(srcPath, destPath);
				results.push(`${destName}: copied from ${srcName}`);
			}
		}

		// Copy remaining unmapped (link16)
		if (fs.existsSync(brainDir)) {
			const allJpgs = fs
				.readdirSync(brainDir)
				.filter((f) => f.endsWith('.jpg') && !knownMapping[f])
				.map((f) => ({
					name: f,
					time: fs.statSync(path.join(brainDir, f)).mtimeMs
				}))
				.sort((a, b) => a.time - b.time);

			if (allJpgs.length > 0) {
				const latestJpg = allJpgs[allJpgs.length - 1].name;
				const destPath = path.join(staticDir, 'link16.jpg');
				fs.copyFileSync(path.join(brainDir, latestJpg), destPath);
				results.push(`link16.jpg: copied from ${latestJpg}`);
			}
		}

		return {
			status: 200,
			body: { success: true, results }
		};
	} catch (err: any) {
		return {
			status: 500,
			body: { success: false, error: err.message }
		};
	}
};
