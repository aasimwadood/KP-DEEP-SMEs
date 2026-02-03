import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  root: '.',
  publicDir: 'public',
  build: {
    outDir: 'dist/demo',
    rollupOptions: {
      input: {
        demo: path.resolve(__dirname, 'demo.html'),
      },
    },
  },
  server: {
    port: 3002,
  },
});