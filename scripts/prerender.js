import puppeteer from 'puppeteer';
import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = 3000;
const DIST_DIR = path.resolve(__dirname, '../dist');

// Read all URLs from the generated sitemap
function getRoutesFromSitemap() {
  const sitemapPath = path.join(DIST_DIR, 'sitemap.xml');
  const xml = fs.readFileSync(sitemapPath, 'utf-8');
  const locRegex = /<loc>https:\/\/www\.buzziwah\.com(.*?)<\/loc>/g;
  const routes = [];
  let match;
  while ((match = locRegex.exec(xml)) !== null) {
    routes.push(match[1] === '' ? '/' : match[1]);
  }
  return routes;
}

async function runPrerender() {
  console.log('Starting prerender static site generation...');
  
  // 1. Serve the built assets
  const app = express();
  
  // Custom middleware to serve index.html for all non-file requests (SPA fallback)
  app.use(express.static(DIST_DIR, { index: false }));
  app.use((req, res) => {
    res.sendFile(path.join(DIST_DIR, 'index.html'));
  });

  const server = app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
  });

  // 2. Launch Puppeteer
  const browser = await puppeteer.launch({
    headless: "new",
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const routes = getRoutesFromSitemap();
  console.log(`Found ${routes.length} routes to prerender.`);

  // 3. Crawl and save HTML for each route
  for (const route of routes) {
    console.log(`Prerendering ${route}...`);
    const page = await browser.newPage();
    
    // Intercept unnecessary requests to speed up rendering
    await page.setRequestInterception(true);
    page.on('request', (req) => {
      const resourceType = req.resourceType();
      if (['image', 'media', 'font'].includes(resourceType)) {
        req.abort();
      } else {
        req.continue();
      }
    });

    try {
      await page.goto(`http://localhost:${PORT}${route}`, {
        waitUntil: 'networkidle0', // Wait until React renders and network requests finish
        timeout: 30000,
      });

      // Wait an extra brief moment to ensure `useSEO` finishes updating the DOM
      await new Promise(r => setTimeout(r, 500));

      const html = await page.content();

      // Ensure directory exists
      let destPath;
      if (route === '/') {
        destPath = path.join(DIST_DIR, 'index.html');
      } else {
        const routeDir = path.join(DIST_DIR, route);
        if (!fs.existsSync(routeDir)) {
          fs.mkdirSync(routeDir, { recursive: true });
        }
        destPath = path.join(routeDir, 'index.html');
      }

      fs.writeFileSync(destPath, html, 'utf-8');
      console.log(`✅ Saved ${route}`);
    } catch (e) {
      console.error(`❌ Failed to prerender ${route}`, e);
    } finally {
      await page.close();
    }
  }

  // 4. Cleanup
  await browser.close();
  server.close();
  console.log('Prerendering complete!');
}

runPrerender().catch(err => {
  console.error(err);
  process.exit(1);
});
