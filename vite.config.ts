import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import svgr from 'vite-plugin-svgr';
// import eslintPlugin from 'vite-plugin-eslint'; fuck eslint until they fix they're false-positive errors

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh(), svgr()],
  server: {
    strictPort: true,
  },
  build: {
    outDir: `build`,
  },
});
