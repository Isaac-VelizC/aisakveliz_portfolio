import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(),],
  base: '/static/',        // Importante para que Vite genere URLs que comienzan con /static/
  build: {
    outDir: 'dist',          // Carpeta de salida (puede ser 'static' o 'dist')
    assetsDir: 'assets',     // Carpeta para JS, CSS dentro de dist
    // base puede ayudar a corregir rutas en producción:
  },
})
