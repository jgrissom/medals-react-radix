import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/aws-apps/medals-radix-02/",
  plugins: [react()],
})
