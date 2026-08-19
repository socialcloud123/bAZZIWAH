import fs from 'fs';
import path from 'path';

const BASE_URL = 'https://www.buzziwah.com';

const staticRoutes = [
  '/',
  '/about',
  '/services',
  '/branding',
  '/performance-marketing',
  '/social-media',
  '/seo',
  '/website-development',
  '/content-solution',
  '/video-production',
  '/influencer-marketing',
  '/outdoor-marketing',
  '/case-studies',
  '/seo-case-studies',
  '/contact',
  '/careers',
  '/blogs'
];

function extractKeysFromFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const regex = /^[ ]+"([a-z0-9-]+)":\s*\{/gm;
  const keys = [];
  let match;
  while ((match = regex.exec(content)) !== null) {
    keys.push(match[1]);
  }
  return keys;
}

function generateSitemap() {
  const blogsPath = path.resolve('./src/blogs/index.jsx');
  const caseStudiesPath = path.resolve('./src/case-studies/index.jsx');

  const blogSlugs = extractKeysFromFile(blogsPath);
  const caseStudySlugs = extractKeysFromFile(caseStudiesPath);

  const dynamicRoutes = [
    ...blogSlugs.map(slug => `/blog/${slug}`),
    ...caseStudySlugs.map(slug => `/case-study/${slug}`)
  ];

  const allRoutes = [...staticRoutes, ...dynamicRoutes];

  const today = new Date().toISOString().split('T')[0];

  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

  allRoutes.forEach(route => {
    // Priorities and changefreq can be tweaked, but setting a baseline is good.
    const priority = route === '/' ? '1.0' : route.startsWith('/blog/') || route.startsWith('/case-study/') ? '0.8' : '0.9';
    const changefreq = route === '/' || route === '/blogs' || route === '/case-studies' ? 'weekly' : 'monthly';
    
    xml += `  <url>\n`;
    xml += `    <loc>${BASE_URL}${route}</loc>\n`;
    xml += `    <lastmod>${today}</lastmod>\n`;
    xml += `    <changefreq>${changefreq}</changefreq>\n`;
    xml += `    <priority>${priority}</priority>\n`;
    xml += `  </url>\n`;
  });

  xml += `</urlset>\n`;

  // Write to public folder (will be copied to dist during build)
  const destPath = path.resolve('./public/sitemap.xml');
  fs.writeFileSync(destPath, xml, 'utf-8');
  console.log(`✅ Generated sitemap.xml with ${allRoutes.length} URLs`);
}

generateSitemap();
