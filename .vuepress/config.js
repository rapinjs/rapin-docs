module.exports = {
  title: "Rapin JS",
  description: "Framework for creating REST API",
  head: [
    ['link', { rel: 'icon', href: '/favicon-16x16.png' }]
  ],
  gtm: "GTM-P6RXWS6",
  themeConfig: {
    repo: "rapinjs/rapin",
    nav: [
        { text: 'Home', link: '/' },
        { text: 'Guide', link: '/guide/' },
        { text: 'Api', link: '/api/' },
    ],
  },
  plugins: {
    "vuepress-plugin-google-tag-manager": {},
    sitemap: {
      hostname: "https://rapinjs.netlify.com"
    }
  }
};
