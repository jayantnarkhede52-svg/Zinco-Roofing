import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import prerender from '@prerenderer/rollup-plugin'
import { join } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    prerender({
      routes: [
        '/',
        '/industrial-roofing-projects-navi-mumbai',
        '/industrial-roofing-services-navi-mumbai',
        '/premium-roofing-sheets-navi-mumbai',
        '/gallery',
        '/contact',
        '/privacy-policy',
        '/terms-of-service',
        '/areas'
      ],
      renderer: '@prerenderer/renderer-puppeteer',
      rendererOptions: {
        maxConcurrentRoutes: 1,
        renderAfterTime: 7000,
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
      }
    })
  ],
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
