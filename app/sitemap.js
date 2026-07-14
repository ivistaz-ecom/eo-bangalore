const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://eobangalore.com'

const routes = [
  { path: '/', priority: 1, changeFrequency: 'weekly' },
  { path: '/eo-bangalore', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/what-is-eo', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/membership', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/my-eo', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/gsea', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/chapter-officers', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/contact-us', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/privacy-policy', priority: 0.3, changeFrequency: 'yearly' },
]

export default function sitemap() {
  const lastModified = new Date()

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${siteUrl}${path === '/' ? '' : path}`,
    lastModified,
    changeFrequency,
    priority,
  }))
}
