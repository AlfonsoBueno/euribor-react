import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: './', // Cambia esto por el subdirectorio donde alojarás tu proyecto
  plugins: [react()],
})
