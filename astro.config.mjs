import { defineConfig } from 'astro/config';
import fs from 'node:fs';
import path from 'node:path';

export default defineConfig({
  site: 'https://vitrine-landing-pages-six.vercel.app',
  vite: {
    plugins: [
      {
        name: 'public-dir-index',
        configureServer(server) {
          server.middlewares.use((req, res, next) => {
            const url = req.url?.split('?')[0] ?? '';
            if (url.endsWith('/') && url !== '/') {
              const indexPath = path.join(process.cwd(), 'public', url, 'index.html');
              if (fs.existsSync(indexPath)) {
                res.setHeader('Content-Type', 'text/html; charset=utf-8');
                fs.createReadStream(indexPath).pipe(res);
                return;
              }
            }
            next();
          });
        },
      },
    ],
  },
});
