const { spawn } = require('child_process');
const fs = require('fs');

const child = spawn('npx.cmd', ['svelte-check', '--tsconfig', './tsconfig.json'], {
  cwd: 'c:/coding projects/codebreaker',
  shell: true
});

let output = '';

child.stdout.on('data', (d) => { output += d.toString('utf8'); });
child.stderr.on('data', (d) => { output += d.toString('utf8'); });

child.on('close', (code) => {
  fs.writeFileSync('scratch/check_utf8.txt', output, 'utf8');

  const lines = output.split(/\r?\n/);
  const errors = [];
  const warnings = [];

  let currentBlock = [];
  let currentType = null;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.match(/^[a-zA-Z]:\\/)) {
      if (currentType === 'Error') errors.push(currentBlock.join('\n'));
      if (currentType === 'Warn') warnings.push(currentBlock.join('\n'));
      currentBlock = [line];
      currentType = null;
    } else {
      currentBlock.push(line);
      if (line.startsWith('Error:')) currentType = 'Error';
      if (line.startsWith('Warn:')) currentType = 'Warn';
    }
  }

  if (currentType === 'Error') errors.push(currentBlock.join('\n'));
  if (currentType === 'Warn') warnings.push(currentBlock.join('\n'));

  let out = `TOTAL ERRORS: ${errors.length}\nTOTAL WARNINGS: ${warnings.length}\n\n`;
  out += '=== ERRORS ===\n' + errors.join('\n\n') + '\n\n';
  out += '=== WARNINGS ===\n' + warnings.join('\n\n');

  fs.writeFileSync('scratch/errors_warnings.txt', out, 'utf8');
  console.log(`Finished: code ${code}. Saved ${errors.length} errors and ${warnings.length} warnings.`);
});
