const fs = require('fs');
const path = require('path');

const routes = [
  '/',
  '/tours',
  '/tours/:tourName',
  '/merch',
  '/merch/:merchName',
  '/contact',
  '/about',
];

const baseUrl = 'https://stagefrightband.us'; 

function generateSitemapXml(routes, baseUrl) {
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  routes.forEach(route => {
    xml += '  <url>\n';
    xml += `    <loc>${baseUrl}${route}</loc>\n`;
    xml += '    <changefreq>weekly</changefreq>\n';
    xml += '    <priority>0.8</priority>\n';
    xml += '  </url>\n';
  });
  
  xml += '</urlset>';
  return xml;
}

function saveSitemap(xml, outputPath) {
  fs.writeFileSync(outputPath, xml);
  console.log(`Sitemap has been generated at ${outputPath}`);
}

const sitemapXml = generateSitemapXml(routes, baseUrl);
saveSitemap(sitemapXml, path.resolve('./public/sitemap.xml'));
