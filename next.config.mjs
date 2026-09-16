/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    root: '.',
  },
  async redirects() {
    return [
      { source: '/reinstatement-cost-vs-market-value', destination: '/rebuild-cost-vs-market-value', permanent: true },
      { source: '/reinstatement-cost-assessment-cost', destination: '/rebuild-cost-assessment-cost', permanent: true },
      { source: '/what-is-a-reinstatement-cost-assessment', destination: '/what-is-a-rebuild-cost-assessment', permanent: true },
      { source: '/do-i-need-a-reinstatement-cost-assessment', destination: '/do-i-need-a-rebuild-cost-assessment', permanent: true },
      { source: '/block-managers-reinstatement-cost-assessments', destination: '/block-managers-rebuild-cost-assessments', permanent: true },
      { source: '/commercial-reinstatement-costs', destination: '/commercial-rebuild-costs', permanent: true },
      { source: '/portfolio-reinstatement-assessments', destination: '/portfolio-rebuild-assessments', permanent: true },
    ];
  },
};

export default nextConfig;
