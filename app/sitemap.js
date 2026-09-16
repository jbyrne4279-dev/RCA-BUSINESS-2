const SITE_URL = 'https://stearlingreinstatement.com'

export default function sitemap() {
  return [
    {
      url: `${SITE_URL}/`,
      lastModified: new Date('2026-07-07'),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/services`,
      lastModified: new Date('2026-07-07'),
      changeFrequency: 'monthly',
      priority: 0.95,
    },
    {
      url: `${SITE_URL}/blocks-of-flats`,
      lastModified: new Date('2026-07-07'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/managing-agents-insurance-valuations`,
      lastModified: new Date('2026-07-07'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/freeholders-leaseholders`,
      lastModified: new Date('2026-07-07'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/listed-buildings`,
      lastModified: new Date('2026-07-07'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/block-managers-rebuild-cost-assessments`,
      lastModified: new Date('2026-07-07'),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/commercial-rebuild-costs`,
      lastModified: new Date('2026-07-07'),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/portfolio-rebuild-assessments`,
      lastModified: new Date('2026-07-07'),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: new Date('2026-07-07'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/what-is-a-rebuild-cost-assessment`,
      lastModified: new Date('2026-08-25'),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/rebuild-cost-vs-market-value`,
      lastModified: new Date('2026-08-25'),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/do-i-need-a-rebuild-cost-assessment`,
      lastModified: new Date('2026-08-25'),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/rebuild-cost-assessment-cost`,
      lastModified: new Date('2026-08-25'),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/what-happens-if-my-property-is-underinsured`,
      lastModified: new Date('2026-08-25'),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
  ]
}
