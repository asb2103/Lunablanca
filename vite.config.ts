// vite.config.ts
import { defineConfig } from 'vite';

export default defineConfig({
  base: '/', // Si está en raíz del dominio
  build: {
    outDir: 'docs', // GitHub Pages usa esta carpeta por defecto
  }
});