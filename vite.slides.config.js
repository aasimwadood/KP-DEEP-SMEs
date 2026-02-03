import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  root: '.',
  publicDir: 'public',
  build: {
    outDir: 'dist/slides',
    rollupOptions: {
      input: {
        slides: path.resolve(__dirname, 'slides.html'),
      },
    },
  },
  server: {
    port: 3001,
  },
});