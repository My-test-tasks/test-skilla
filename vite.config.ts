import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svgr(), react()],
  resolve: {
    alias: [
      { find: '@components', replacement: path.resolve(__dirname, './src/components') },
      { find: '@assets', replacement: path.resolve(__dirname, './src/assets') },
      { find: '@styles', replacement: path.resolve(__dirname, './src/styles') },
      { find: '@pages', replacement: path.resolve(__dirname, './src/pages') },
      { find: '@utils', replacement: path.resolve(__dirname, './src/utils') },
    ],
  },
});
