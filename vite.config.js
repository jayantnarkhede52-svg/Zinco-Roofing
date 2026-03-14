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
        // Main pages
        '/',
        '/industrial-roofing-projects-navi-mumbai',
        '/industrial-roofing-services-navi-mumbai',
        '/premium-roofing-sheets-navi-mumbai',
        '/gallery',
        '/contact',
        '/privacy-policy',
        '/terms-of-service',
        '/areas',

        // Product pages
        '/products/roofing-metal-sheets',
        '/products/insulated-sheets',
        '/products/roofing-accessories',
        '/products/pvc-upvc-sheets',
        '/products/purlins',
        '/products/polycarbonate-sheets',
        '/products/ventilators',
        '/products/peb-fabrication',
        '/products/decking-sheet',
        '/products/shingles',
        '/products/metal-tile-sheet',
        '/products/rockwool-glasswool',
        '/products/high-roof-seam',
        '/products/aerolam-sheet',
        '/products/pvc-tile-sheet',
        '/products/multiwall-sheets',
        '/products/upvc-high-rib-sheets',
        '/products/synthetic-roof',
        '/products/upvc-sheets',
        '/products/structural-painting',
        '/products/solar-installation',

        // Location SEO pages
        '/industrial-roofing-contractors-in-mumbai',
        '/industrial-roofing-contractors-in-panvel',
        '/industrial-roofing-contractors-in-thane',
        '/industrial-roofing-contractors-in-taloja',
        '/industrial-roofing-contractors-in-ambarnath',
        '/industrial-roofing-contractors-in-navi-mumbai',
        '/industrial-roofing-contractors-in-dombivli',
        '/puf-panel-manufacturer-navi-mumbai'
      ],
      renderer: '@prerenderer/renderer-jsdom',
      rendererOptions: {
        maxConcurrentRoutes: 1,
        renderAfterDocumentEvent: 'render-event',
        renderAfterTime: 5000 
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
