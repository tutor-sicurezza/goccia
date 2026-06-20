import { defineConfig } from 'vitest/config';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  test: {
    include: ['packages/**/*.test.ts', 'src/**/*.test.ts'],
    environment: 'node',
  },
  resolve: {
    alias: {
      '@aquascore': path.resolve(root, 'packages/aquascore'),
      '@': path.resolve(root, 'src'),
    },
  },
});
