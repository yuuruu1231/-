import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  // css: {
  //   preprocessorOptions: {
  //     scss: {
  //       additionalData: `
  //         @import "./src/assets/scss/_prepends.scss";
  //       `
  //     }
  //   }
  // },
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
