const fs = require('fs');

let raw = fs.readFileSync('scratch/check_utf8.txt', 'utf8');

// Strip ANSI codes
raw = raw.replace(/\u001b\[[0-9;]*m/g, '');

const lines = raw.split(/\r?\n/);
const errors = [];
const warnings = [];

let currentBlock = [];
let currentFile = '';

for (let i = 0; i < lines.length; i++) {
  const line = lines[i].trimEnd();
  if (line.match(/^[a-zA-Z]:\\/)) {
    if (currentBlock.length > 0) {
      const blockStr = currentBlock.join('\n');
      if (blockStr.includes('Error:')) errors.push(blockStr);
      if (blockStr.includes('Warn:')) warnings.push(blockStr);
    }
    currentBlock = [line];
    currentFile = line;
  } else if (currentBlock.length > 0) {
    currentBlock.push(line);
  }
}

if (currentBlock.length > 0) {
  const blockStr = currentBlock.join('\n');
  if (blockStr.includes('Error:')) errors.push(blockStr);
  if (blockStr.includes('Warn:')) warnings.push(blockStr);
}

let out = `TOTAL ERRORS: ${errors.length}\nTOTAL WARNINGS: ${warnings.length}\n\n`;
out += '=== ERRORS ===\n\n' + errors.join('\n\n------------------------------------\n\n') + '\n\n';
out += '=== WARNINGS ===\n\n' + warnings.join('\n\n------------------------------------\n\n');

fs.writeFileSync('scratch/errors_warnings.txt', out, 'utf8');
console.log(`Successfully parsed: ${errors.length} errors and ${warnings.length} warnings.`);
