import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  // Required for GitHub Pages deployment under https://goitomyalemu.github.io/portfolio/
  base: '/portfolio/',
  plugins: [
    react(),
    tailwindcss(),
    {
      name: 'dev-root-fallback',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          // Allow dev preview to seamlessly serve at root '/' while keeping base: '/portfolio/'
          if (req.url === '/' || req.url === '') {
            req.url = '/portfolio/';
          } else if (req.url && !req.url.startsWith('/portfolio/') && !req.url.startsWith('/@') && !req.url.startsWith('/node_modules/')) {
            req.url = `/portfolio${req.url.startsWith('/') ? '' : '/'}${req.url}`;
          }
          next();
        });
      },
    },
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    },
  },
  server: {
    // HMR is disabled in AI Studio via DISABLE_HMR env var.
    // Do not modify—file watching is disabled to prevent flickering during agent edits.
    hmr: process.env.DISABLE_HMR !== 'true',
    // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
    watch: process.env.DISABLE_HMR === 'true' ? null : {},
  },
});
