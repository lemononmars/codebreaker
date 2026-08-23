const { execSync } = require('child_process');

try {
  const stdout = execSync('npm run check', { encoding: 'utf8', stdio: ['pipe', 'pipe', 'pipe'] });
  console.log(stdout);
} catch (err) {
  const output = (err.stdout || '') + (err.stderr || '');
  const lines = output.split('\n');
  
  let currentFile = '';
  let inErrorOrWarn = false;
  let block = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.startsWith('c:\\') || line.startsWith('C:\\')) {
      currentFile = line;
      block = [line];
    } else if (line.startsWith('Error:') || line.startsWith('Warn:')) {
      console.log('\n----------------------------------------');
      console.log(currentFile);
      console.log(line);
      // print next 4 lines
      for (let j = 1; j <= 5 && i + j < lines.length; j++) {
        if (lines[i + j].startsWith('c:\\') || lines[i + j].startsWith('C:\\')) break;
        console.log(lines[i + j]);
      }
    }
  }
}
