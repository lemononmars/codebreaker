import fs from 'fs';
import path from 'path';

const sourceFile = 'c:/coding projects/codebreaker-video/example_puzzles.json';
const targetWorkspace = 'c:/coding projects/codebreaker';
const targetDir = path.join(targetWorkspace, 'puzzles');

const raw = JSON.parse(fs.readFileSync(sourceFile, 'utf-8'));
const puzzles = raw.puzzles || [];

const genreFolderMap = {
  1: '1_blanks',
  2: '2_crossroad',
  3: '3_connection',
  4: '4_spelling_bee',
  5: '5_quiz',
  6: '6_rebus',
  7: '7_special',
};

// Also mirror to codebreaker's example_puzzles.json
fs.writeFileSync(path.join(targetWorkspace, 'example_puzzles.json'), JSON.stringify(raw, null, 2), 'utf-8');

const manifest = [];

for (const p of puzzles) {
  const pid = p.id; // e.g. 1_01_blanks
  const dayCode = pid.split('_')[0];
  const folderName = genreFolderMap[dayCode] || `genre_${dayCode}`;
  const genrePath = path.join(targetDir, folderName);

  if (!fs.existsSync(genrePath)) {
    fs.mkdirSync(genrePath, { recursive: true });
  }

  const puzzleFilePath = path.join(genrePath, `${pid}.json`);
  fs.writeFileSync(puzzleFilePath, JSON.stringify(p, null, 2), 'utf-8');
  console.log(`[✓] Created: puzzles/${folderName}/${pid}.json`);

  manifest.push({
    id: pid,
    type: p.type,
    category: p.category,
    title: p.title,
    difficulty: p.difficulty,
    file: `puzzles/${folderName}/${pid}.json`,
  });
}

fs.writeFileSync(path.join(targetDir, 'manifest.json'), JSON.stringify(manifest, null, 2), 'utf-8');
console.log(`\n🎉 Successfully split ${puzzles.length} puzzles into 'c:/coding projects/codebreaker/puzzles/'!`);
