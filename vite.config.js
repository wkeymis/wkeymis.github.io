import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Base path for GitHub Pages deployment
  // For user/organization sites (username.github.io): use '/'
  // For project sites (username.github.io/repo-name): use '/repo-name/'
  base: '/',
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    // Ensure proper MIME types for all assets
    rollupOptions: {
      output: {
        // Ensure proper chunking and file naming
        manualChunks: undefined,
      }
    }
  }
})
