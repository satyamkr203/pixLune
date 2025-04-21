import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // <-- This makes @ point to /src
    },
  },
  server: {
    host: '0.0.0.0', // <== important to listen on all interfaces
    port: 5173,
  }
});