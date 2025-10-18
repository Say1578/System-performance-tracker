import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  base: './',
  server: {
    port: 5173,  
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@main': path.resolve(__dirname, 'src/main'),
      '@renderer': path.resolve(__dirname, 'src/renderer'),
      '@components': path.resolve(__dirname, 'src/renderer/components'),
      '@ui': path.resolve(__dirname, 'src/renderer/components/ui'),
      '@hooks': path.resolve(__dirname, 'src/renderer/hooks'),
      '@pages': path.resolve(__dirname, 'src/renderer/pages'),
      '@styles': path.resolve(__dirname, 'src/renderer/styles'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@prisma': path.resolve(__dirname, 'prisma'),
    },
  },
});
