import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { federation } from '@module-federation/vite';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/testBase',
  plugins: [
    react(),
    federation({
      filename: 'remoteEntry.js',
      name: 'mf2_vite_react',
      manifest: true,
      exposes: {
        './home': './src/export-app.jsx'
      },
      remotes: {},
      shared: {
        // react:{singleton: true} // If you comment this and restart the project, it will display normal  but console error always show
      }
    })
  ],
  server: {
    host: 'localhost',
    port: 3688,
    open: true,
    hmr: false,
    origin: 'http://localhost:3686'
  },
})
