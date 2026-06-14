import { defineConfig } from 'vitest/config';
import path from 'path';

export default defineConfig({
  test: {
    include: ['src/**/*.{test,spec}.{js,ts}'],
    alias: {
      $lib: path.resolve('./src/lib'),
    },
  },
});
