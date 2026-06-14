import { defineConfig } from 'vitest/config';
import { fileURLToPath, URL } from 'node:url';

export default defineConfig({
  test: {
    include: ['src/**/*.{test,spec}.{js,ts}'],
    alias: {
      '$lib': fileURLToPath(new URL('./src/lib', import.meta.url))
    }
  }
});
