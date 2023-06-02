import { defineConfig } from 'vite';
import { default as viteReact } from '@vitejs/plugin-react';
import { resolve } from 'path';
import svgr from 'vite-plugin-svgr';
// import eslintPlugin from 'vite-plugin-eslint'; fuck eslint until they fix they're false-positive errors

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
    },
  },
});
