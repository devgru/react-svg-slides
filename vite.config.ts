import { defineConfig } from 'vite';
import webfontDownload from 'vite-plugin-webfont-dl';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react(), webfontDownload()],
  build: {
    outDir: 'dist',
  },
  publicDir: 'public',
});
