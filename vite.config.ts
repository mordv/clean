import { defineConfig } from 'vite';
import { default as viteReact } from '@vitejs/plugin-react';
import path, { resolve } from 'path';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [viteReact(), svgr()],
  server: {
    strictPort: true,
  },
  build: {
    outDir: `build`,
  },
  resolve: {
    alias: {
      $fonts: resolve('./public/fonts'),
      '@': path.resolve(__dirname, './src'),
    },
  },
});
