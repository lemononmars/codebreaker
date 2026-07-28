import fs from 'fs';
import path from 'path';

export async function get() {
	try {
		const root = path.resolve('.');
		const foundDirs: string[] = [];
		const foundJpgs: string[] = [];

		function searchDir(dir: string, depth = 0) {
			if (depth > 5) return;
			try {
				const entries = fs.readdirSync(dir, { withFileTypes: true });
				for (const entry of entries) {
					const fullPath = path.join(dir, entry.name);
					if (entry.isDirectory()) {
						if (entry.name === 'node_modules' || entry.name === '.git' || entry.name === '.svelte-kit') continue;
						if (entry.name.includes('2022') || entry.name.includes('2023') || entry.name.includes('weekly')) {
							foundDirs.push(fullPath);
						}
						searchDir(fullPath, depth + 1);
					} else if (entry.isFile()) {
						if (entry.name.endsWith('.jpg') || entry.name.endsWith('.png')) {
							if (entry.name.startsWith('2022') || entry.name.startsWith('2023')) {
								foundJpgs.push(fullPath);
							}
						}
					}
				}
			} catch (e) {}
		}

		searchDir(root);

		// Also check parent directory c:\coding projects
		searchDir(path.resolve('..'), 1);

		return {
			status: 200,
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ foundDirs, foundJpgs, root })
		};
	} catch (e: any) {
		return {
			status: 500,
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ error: e.message || String(e) })
		};
	}
}
