import fs from 'fs';
import path from 'path';
import type { RequestHandler } from '@sveltejs/kit';

export const get: RequestHandler = async () => {
  const srcDir = 'C:\\Users\\sakul_bp6myy0\\.gemini\\antigravity-ide\\brain\\ce61ab4e-5fcb-4afa-934a-5931031369f2';
  const destDir = 'C:\\coding projects\\codebreaker\\static\\podcast';

  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }

  const mapping: Record<string, string> = {
    'media__1785342285712.png': 'ep1.png',
    'media__1785343256317.png': 'ep2.png',
    'media__1785343256246.png': 'ep3.png',
    'media__1785343256354.png': 'ep4.png',
    'media__1785343256451.png': 'ep5.png',
    'media__1785343256401.png': 'ep6.png',
    'media__1785343717994.png': 'ep7.png',
    'media__1785343718029.png': 'ep8.png',
    'media__1785343718111.png': 'ep9.png',
    'media__1785343718153.png': 'ep10.png',
    'media__1785343718184.png': 'ep11.png'
  };

  const copied: string[] = [];
  for (const [srcFile, destFile] of Object.entries(mapping)) {
    const srcPath = path.join(srcDir, srcFile);
    const destPath = path.join(destDir, destFile);
    if (fs.existsSync(srcPath)) {
      fs.copyFileSync(srcPath, destPath);
      copied.push(destFile);
    }
  }

  return {
    body: { status: 'success', copied }
  };
};
