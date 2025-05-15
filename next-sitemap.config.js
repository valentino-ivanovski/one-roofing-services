/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://one-roofing.vercel.app', // 🔁 Replace with your real domain
  generateRobotsTxt: true,
  sitemapSize: 7000,
  outDir: './public',

  // 👇 Add this if you're using the App Router
  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date().toISOString(),
      alternateRefs: [],
    };
  },

  // 👇 Manually define routes if needed
  additionalPaths: async (config) => [
    await config.transform(config, '/'),
    await config.transform(config, '/about'),
    await config.transform(config, '/services'),
    await config.transform(config, '/contact'),
    // Add all important routes here
  ],
};