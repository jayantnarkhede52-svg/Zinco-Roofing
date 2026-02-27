import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Use built-in esbuild minifier (no extra deps needed)
    minify: 'esbuild',
    // Chunk splitting for better caching
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          'vendor-motion': ['framer-motion'],
          'vendor-icons': ['react-icons'],
        },
      },
    },
    // Increase chunk size warning limit
    chunkSizeWarningLimit: 600,
    // Asset file name hashing for cache busting
    assetsInlineLimit: 4096,
  },
})
