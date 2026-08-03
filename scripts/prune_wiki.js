import fs from 'fs';
import path from 'path';

const wikiPath = path.resolve('src/lib/wiki.json');
const dictPath = path.resolve('src/lib/dict.json');
const removedPath = path.resolve('src/lib/wiki_removed.json');

const wiki = JSON.parse(fs.readFileSync(wikiPath, 'utf-8'));
const dict = new Set(JSON.parse(fs.readFileSync(dictPath, 'utf-8')));

const pruned = [];
const removed = [];

wiki.forEach(w => {
  if (typeof w !== 'string' || /\d/.test(w) || /[a-zA-Z]/.test(w) || w.length < 2 || w.length > 30 || dict.has(w)) {
    removed.push(w);
  } else {
    pruned.push(w);
  }
});

fs.writeFileSync(wikiPath, JSON.stringify(pruned));
fs.writeFileSync(removedPath, JSON.stringify(removed));
console.log(`Pruned: ${wiki.length} -> ${pruned.length} kept, ${removed.length} removed`);
