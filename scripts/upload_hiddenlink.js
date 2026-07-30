import fs from 'fs';
import path from 'path';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ojjggolcfmjnovmipaav.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9qamdnb2xjZm1qbm92bWlwYWF2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODg0OTk4MjYsImV4cCI6MjAwNDA3NTgyNn0.89u2S3G_G65u3Q6c9L1d5p0w3c675c276b5'; // anon key from project

const supabase = createClient(supabaseUrl, process.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9qamdnb2xjZm1qbm92bWlwYWF2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODg0OTk4MjYsImV4cCI6MjAwNDA3NTgyNn0.89u2S3G_G65u3Q6c9L1d5p0w3c675c276b5');

const brainDir = 'C:\\Users\\sakul_bp6myy0\\.gemini\\antigravity-ide\\brain\\c91f4a0a-76e8-4604-9160-0d01cb4d2017';
const files = fs.readdirSync(brainDir).filter(f => f.startsWith('media__') && f.endsWith('.jpg')).sort();

console.log('Found media files:', files);

// Copy to static directory
const staticDir = path.join(process.cwd(), 'static', 'puzzles', 'hiddenlink');
if (!fs.existsSync(staticDir)) {
    fs.mkdirSync(staticDir, { recursive: true });
}

// We map images by LINK number. Let's inspect size & order.
files.forEach((file, index) => {
    const src = path.join(brainDir, file);
    const destName = `link0${index + 1}.jpg`;
    const dest = path.join(staticDir, destName);
    fs.copyFileSync(src, dest);
    console.log(`Copied ${file} -> static/puzzles/hiddenlink/${destName}`);
});
