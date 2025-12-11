import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
    base: '/ZubedaNurdin-portfolio/', // very important for correct routing
  server: {
    watch: {
      usePolling: true,
      interval: 1000,
    },
  },
})
