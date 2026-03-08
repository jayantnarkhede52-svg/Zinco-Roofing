import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Target modern browsers for smaller output
    target: 'es2015',
    // Use built-in esbuild minifier (no extra deps needed)
    minify: 'esbuild',
    // Minify CSS with esbuild too
    cssMinify: 'esbuild',
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
    // Lower inline limit to prevent large Base64 strings in JS bundles
    assetsInlineLimit: 2048,
  },
})
