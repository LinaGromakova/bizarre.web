import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [react(), tailwindcss(), svgr()],
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, './src'),
    },
  },
  server: {
    proxy: {
      '/shiki-api': {
        target: 'https://shikimori.io',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/shiki-api/, '/api'),
        headers: {
          'User-Agent': 'Bizarre.web/1.0',
        },
      },
    },
  },
});
