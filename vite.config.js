import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Base path for GitHub Pages (uncomment and set your repository name)
  // base: '/your-repo-name/',
  // For root domain deployment, leave base as '/' or comment it out
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          motion: ['framer-motion'],
        },
      },
    },
  },
  publicDir: 'public',
  server: {
    port: 3000,
    open: true,
    strictPort: true,
    host: true,         // <-- ADD THIS: Tells Vite to listen to the network
    allowedHosts: true, // <-- Keep this: Tells Vite to trust the Cloudflare link
  },
})