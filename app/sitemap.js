const SITE_URL = 'https://stearlingreinstatement.com'

export default function sitemap() {
  return [
    {
      url: `${SITE_URL}/`,
      lastModified: new Date('2026-07-05'),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/services`,
      lastModified: new Date('2026-07-05'),
      changeFrequency: 'monthly',
      priority: 0.95,
    },
    {
      url: `${SITE_URL}/blocks-of-flats`,
      lastModified: new Date('2026-07-05'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/managing-agents-insurance-valuations`,
      lastModified: new Date('2026-07-05'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/freeholders-leaseholders`,
      lastModified: new Date('2026-07-05'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/listed-buildings`,
      lastModified: new Date('2026-07-05'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/block-managers-reinstatement-cost-assessments`,
      lastModified: new Date('2026-07-05'),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/commercial-reinstatement-costs`,
      lastModified: new Date('2026-07-05'),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/portfolio-reinstatement-assessments`,
      lastModified: new Date('2026-07-05'),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: new Date('2026-07-05'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]
}
