// utils/seoGenerator.js
const fs = require('fs');
const path = require('path');
const { format } = require('date-fns');

const generateSeoFiles = () => {
  try {
    const currentDate = format(new Date(), 'yyyy-MM-dd');
    const publicPath = path.join(__dirname, '../../client/public');

    // Проверяем и создаем папку public если ее нет
    if (!fs.existsSync(publicPath)) {
      fs.mkdirSync(publicPath, { recursive: true });
    }

    // Генерация sitemap.xml
    const sitemap = generateSitemap(currentDate);
    fs.writeFileSync(path.join(publicPath, 'sitemap.xml'), sitemap);

    // Генерация robots.txt
    const robots = generateRobotsTxt();
    fs.writeFileSync(path.join(publicPath, 'robots.txt'), robots);

    console.log('SEO файлы успешно обновлены');
    return true;
  } catch (error) {
    console.error('Ошибка при генерации SEO файлов:', error);
    return false;
  }
};

const generateSitemap = (currentDate) => {
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
        <loc>https://hooliganmma.ru/</loc>
        <lastmod>${currentDate}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>https://hooliganmma.ru/about</loc>
        <lastmod>${currentDate}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
    </url>
    <url>
        <loc>https://hooliganmma.ru/events</loc>
        <lastmod>${currentDate}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
    </url>
    <url>
        <loc>https://hooliganmma.ru/online-store</loc>
        <lastmod>${currentDate}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
    </url>
    <url>
        <loc>https://hooliganmma.ru/contact</loc>
        <lastmod>${currentDate}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
    </url>
    <url>
        <loc>https://hooliganmma.ru/press-center</loc>
        <lastmod>${currentDate}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
    </url>
    <url>
        <loc>https://hooliganmma.ru/price</loc>
        <lastmod>${currentDate}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
    </url>
    <url>
        <loc>https://hooliganmma.ru/schedule</loc>
        <lastmod>${currentDate}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
    </url>
    <url>
        <loc>https://hooliganmma.ru/attendance-journal</loc>
        <lastmod>${currentDate}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
    </url>
    <url>
        <loc>https://hooliganmma.ru/waiting-list</loc>
        <lastmod>${currentDate}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
    </url>
    <url>
        <loc>https://www.hooliganmma.ru/mma</loc>
        <lastmod>${currentDate}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
    </url>
    <url>
        <loc>https://www.hooliganmma.ru/grappling</loc>
        <lastmod>${currentDate}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
    </url>
    <url>
        <loc>https://www.hooliganmma.ru/boxing</loc>
        <lastmod>${currentDate}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
    </url>
    <url>
        <loc>https://www.hooliganmma.ru/kickboxing</loc>
        <lastmod>${currentDate}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
    </url>
    <url>
        <loc>https://www.hooliganmma.ru/hand-to-hand-combat</loc>
        <lastmod>${currentDate}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
    </url>
    <url>
        <loc>https://www.hooliganmma.ru/karate</loc>
        <lastmod>${currentDate}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
    </url>
    <url>
        <loc>https://www.hooliganmma.ru/womens-self-defense</loc>
        <lastmod>${currentDate}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
    </url>
</urlset>`;
};

const generateRobotsTxt = () => {
  return `User-agent: *
Disallow: /authorization-account
Disallow: /admin-dashboard
Disallow: /schedule-editor
Disallow: /admin/attendance-journal
Disallow: /admin-price
Disallow: /admin-products
Disallow: /edit-ad
Sitemap: https://www.hooliganmma.ru/sitemap.xml`;
};

module.exports = {
  generateSeoFiles,
  generateSitemap,
  generateRobotsTxt
};