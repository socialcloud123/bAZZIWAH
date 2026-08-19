import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DIST_DIR = path.resolve(__dirname, '../dist');
const BASE_URL = 'https://www.buzziwah.com';

function extractData(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const items = {};
  
  // Basic regex to find slugs
  const slugRegex = /^[ ]+"([a-z0-9-]+)":\s*\{/gm;
  let match;
  while ((match = slugRegex.exec(content)) !== null) {
    const slug = match[1];
    
    // Extract block for this slug
    const blockStart = match.index;
    let blockEnd = content.indexOf('content:', blockStart);
    if (blockEnd === -1) blockEnd = content.length;
    
    const block = content.substring(blockStart, blockEnd);
    
    const titleMatch = block.match(/title:\s*"([^"]+)"/);
    const descMatch = block.match(/description:\s*"([^"]+)"/);
    const imgMatch = block.match(/image:\s*"([^"]+)"/);
    
    items[slug] = {
      title: titleMatch ? titleMatch[1] : 'Buzziwah',
      description: descMatch ? descMatch[1] : 'Buzziwah - Creative Marketing Agency',
      image: imgMatch ? imgMatch[1] : '/favicon.ico'
    };
  }
  
  return items;
}

function runPrerender() {
  console.log('Starting lightweight SSG...');
  
  const templatePath = path.join(DIST_DIR, 'index.html');
  if (!fs.existsSync(templatePath)) {
    console.error('dist/index.html not found. Did you run vite build?');
    process.exit(1);
  }
  const templateHtml = fs.readFileSync(templatePath, 'utf-8');
  
  const blogsData = extractData(path.resolve(__dirname, '../src/blogs/index.jsx'));
  const caseStudiesData = extractData(path.resolve(__dirname, '../src/case-studies/index.jsx'));
  
  // Combine all routes
  const routesToRender = [];
  
  for (const [slug, data] of Object.entries(blogsData)) {
    routesToRender.push({ path: `/blog/${slug}`, ...data });
  }
  for (const [slug, data] of Object.entries(caseStudiesData)) {
    routesToRender.push({ path: `/case-study/${slug}`, ...data });
  }
  
  // Add static main routes just to have directories fallback nicely
  const staticRoutes = [
    { path: '/about', title: 'About Us | Buzziwah', description: 'About Buzziwah Marketing' },
    { path: '/services', title: 'Services | Buzziwah', description: 'Our Services' },
    { path: '/blogs', title: 'Blogs | Buzziwah', description: 'Read our latest insights' },
    { path: '/case-studies', title: 'Case Studies | Buzziwah', description: 'See our previous work' }
  ];
  
  routesToRender.push(...staticRoutes);

  for (const route of routesToRender) {
    const routeDir = path.join(DIST_DIR, route.path);
    if (!fs.existsSync(routeDir)) {
      fs.mkdirSync(routeDir, { recursive: true });
    }
    
    const pageUrl = `${BASE_URL}${route.path}`;
    const imgUrl = route.image ? (route.image.startsWith('http') ? route.image : `${BASE_URL}${route.image}`) : `${BASE_URL}/favicon.ico`;
    
    // Inject Meta Tags
    let html = templateHtml;
    html = html.replace(/<title>(.*?)<\/title>/, `<title>${route.title}</title>`);
    
    const metaTags = `
      <meta name="description" content="${route.description}" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="${pageUrl}" />
      <meta property="og:title" content="${route.title}" />
      <meta property="og:description" content="${route.description}" />
      <meta property="og:image" content="${imgUrl}" />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="${pageUrl}" />
      <meta property="twitter:title" content="${route.title}" />
      <meta property="twitter:description" content="${route.description}" />
      <meta property="twitter:image" content="${imgUrl}" />
    `;
    
    html = html.replace('</head>', `${metaTags}\n</head>`);
    
    fs.writeFileSync(path.join(routeDir, 'index.html'), html, 'utf-8');
    console.log(`✅ Statically injected tags for ${route.path}`);
  }
  
  console.log('Lightweight SSG complete!');
}

runPrerender();
