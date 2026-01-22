import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 注意：API Key 现在通过 Vercel Serverless Function 保护，不再需要在客户端注入
  // Note: API Key is now protected via Vercel Serverless Function, no longer needs client-side injection
});