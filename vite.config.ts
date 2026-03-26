import netlify from '@netlify/vite-plugin'
import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'

import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    netlify(),
    vue({
      template: {
        compilerOptions: {
          isCustomElement: tag => tag.startsWith('css-doodle'),
        },
      },
    }),
  ],
})
