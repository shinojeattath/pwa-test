import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  base: '/pwa-test/',
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
      manifest: {
        name: 'My React PWA',
        short_name: 'ReactPWA',
        description: 'My Progressive Web App built with React and Vite',
        theme_color: '#ffffff',
        icons: [
          {
            src: '1.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '5.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ]
      }
    })
  ]
})