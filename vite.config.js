import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import svgrPlugin from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgrPlugin()],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, 'src'),
      },
      {
        find: '@components',
        replacement: path.resolve(__dirname, 'src/components'),
      },
    ],
  },
  build: {
    outDir: 'build',
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://stag.2023hiufestainfo.com',
        changeOrigin: true,
      },
    },
    port: 3000,
    open: true,
  },
});
