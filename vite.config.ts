import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '~pages': path.resolve('src/pages'),
      '~hooks': path.resolve('src/hooks'),
      '~components': path.resolve('src/components'),
      '~api': path.resolve('src/api'),
    },
  },
})
