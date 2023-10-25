import { defineConfig } from 'vite'
import { VitePWA } from "vite-plugin-pwa";
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
      VitePWA({
        // Manifest configuration
        manifest: {
          name: 'Routinr',
          short_name: 'Routinr',
          start_url: '/',
          display: 'standalone',
          background_color: '#ffffff',
          theme_color: '#000000',
          icons: [
            {
              src: '/logo.png',
              sizes: '192x192',
              type: 'image/png',
            },
            // Add more icons as needed
          ],
        },
      }),
  ],

  css: {
    postcss: './postcss.config.js',
  },

  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'service-worker': ['src/serviceWorker.js'],
        },
      },
    },
  },
})
