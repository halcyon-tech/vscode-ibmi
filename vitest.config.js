// vitest.config.js
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    setupFiles: [`./src/tests/setupTests.ts`],
  },
});