import fs from 'fs';
import path from 'path';

const oldPath = path.resolve('src/lib/utils/dict_pythainlp.ts');
const newPath = path.resolve('src/lib/utils/dict_freq.ts');

if (fs.existsSync(oldPath)) {
  fs.copyFileSync(oldPath, newPath);
  fs.unlinkSync(oldPath);
  console.log(`Renamed ${oldPath} -> ${newPath}`);
} else {
  console.log(`File ${oldPath} does not exist.`);
}
