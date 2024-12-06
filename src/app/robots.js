export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/'
    },
    sitemap: 'https://manmeets.vercel.app/sitemap.xml',
    host: 'https://manmeets.vercel.app'
  }
}
