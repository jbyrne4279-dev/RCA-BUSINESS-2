import Link from 'next/link'
import GuideHero from '../components/GuideHero'
import GuideOverview from '../components/GuideOverview'
import GuideTrustBand from '../components/GuideTrustBand'
import RelatedGuides from '../components/RelatedGuides'
import ContactSection from '../components/ContactSection'
import FaqSection from '../components/FaqSection'

export const metadata = {
  title: 'What Happens If My Property Is Underinsured?',
  description: 'A plain-English explanation of the average clause and proportional claim settlement, with a worked example - and how a Reinstatement Cost Assessment protects you from being caught out.',
  alternates: { canonical: '/what-happens-if-my-property-is-underinsured' },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://stearlingreinstatement.com/what-happens-if-my-property-is-underinsured',
    siteName: 'Stearling Reinstatement',
    title: 'What Happens If My Property Is Underinsured?',
    description: 'A plain-English explanation of the average clause and proportional claim settlement, with a worked example, and why an accurate Reinstatement Cost Assessment matters.',
    images: [{ url: '/rca-surveyor-site-visit.webp', width: 1200, height: 630, alt: 'What happens if my property is underinsured' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'What Happens If My Property Is Underinsured?',
    description: 'A plain-English explanation of underinsurance and the average clause, with a worked example.',
    images: ['/rca-surveyor-site-visit.webp'],
  },
}

const faqItems = [
  { question: 'Does the average clause apply to every claim, or only total losses?', answer: 'Every claim. It applies proportionally regardless of the size of the loss, which surprises most homeowners - even a relatively minor claim, like a burst pipe causing a few thousand pounds of damage, gets reduced by the same percentage as your underinsurance.' },
  { question: "How do I find out if my current sum insured is right?", answer: "The only reliable way is a professional Reinstatement Cost Assessment. Comparing your sum insured to what you paid for the property or its current market value won't tell you anything useful - see Reinstatement Cost vs Market Value for why." },
  { question: 'Do all UK insurers apply the average clause?', answer: "Most standard UK buildings insurance policies include an average clause, though the exact wording varies. Always check your policy document, but assume it applies unless you've specifically confirmed otherwise." },
  { question: 'What should I do right now if I think I might be underinsured?', answer: "Get a current Reinstatement Cost Assessment. It's a fixed, modest cost that either confirms your existing sum insured is correct, or gives you an accurate figure to update it - either way, you'll know where you stand before you ever need to make a claim." },
]

export default function UnderinsuredPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://stearlingreinstatement.com/' },
          { '@type': 'ListItem', position: 2, name: 'What Happens If My Property Is Underinsured?', item: 'https://stearlingreinstatement.com/what-happens-if-my-property-is-underinsured' },
        ],
      },
    ],
  }

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <GuideHero
        image="/rca-surveyor-site-visit.webp"
        imageAlt="What happens if my property is underinsured"
        headlineMain="What happens if my property is"
        headlineAccent="underinsured?"
        subtitle={`Most homeowners have never heard of the "average clause" until they make a claim and find out their payout has been cut. Here's exactly how it works.`}
        primaryLabel="Check My Cover"
        secondaryHref="/what-is-a-reinstatement-cost-assessment"
        secondaryLabel="What Is an RCA?"
      />

      <GuideOverview
        kicker="The Average Clause"
        heading="Insurers don't just refuse to pay,"
        headingAccent="they pay less on everything."
        description="If your sum insured is lower than your property's true reinstatement cost, most UK policies reduce every claim payout by the same proportion. That applies to every claim, however small, not just total losses."
      />

      {/* THE FORMULA */}
      <section className="py-16 sm:py-24 px-6 md:px-10 border-t border-[#e2e8f0]" style={{background:'rgba(122,31,61,0.08)'}}>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#64748b] text-base leading-relaxed mb-6">The formula insurers use is straightforward:</p>
          <div className="rounded-2xl p-6" style={{background:'linear-gradient(135deg, #7A1F3D 0%, #5C1730 100%)'}}>
            <p className="text-white font-semibold text-base md:text-lg">
              Payout = Claim Amount &times; (Sum Insured &divide; True Reinstatement Cost)
            </p>
          </div>
        </div>
      </section>

      {/* WORKED EXAMPLE */}
      <section className="bg-white py-16 sm:py-24 px-6 md:px-10 border-t border-[#e2e8f0]">
        <div className="max-w-4xl mx-auto">
          <span className="badge badge-blue mb-4">Worked Example</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#2b0b14] leading-tight mb-8">
            A <span className="text-shine">real-world example</span>.
          </h2>

          <div className="bg-white rounded-2xl border border-[#e2e8f0] p-6 sm:p-8 space-y-5" style={{boxShadow:'0 8px 32px rgba(122,31,61,0.10)'}}>
            <p className="text-[#64748b] text-sm leading-relaxed">
              Your home's true reinstatement cost is <strong className="text-[#2b0b14]">£400,000</strong>, but your policy's sum insured is only <strong className="text-[#2b0b14]">£300,000</strong>. That means you're only insured for 75% of what it would actually cost to rebuild.
            </p>
            <p className="text-[#64748b] text-sm leading-relaxed">
              A kitchen fire causes <strong className="text-[#2b0b14]">£20,000</strong> of damage. You might expect your insurer to pay the full £20,000 since it's well within your sum insured. Under the average clause, they don't:
            </p>
            <div className="rounded-xl p-5" style={{background:'linear-gradient(135deg, #7A1F3D 0%, #5C1730 100%)'}}>
              <p className="text-sm text-white/80 mb-1">£20,000 &times; (£300,000 &divide; £400,000)</p>
              <p className="text-3xl font-bold text-white leading-none mt-2 mb-1">= £15,000</p>
              <p className="text-sm text-white/80">paid out, not £20,000</p>
            </div>
            <p className="text-[#64748b] text-sm leading-relaxed">
              You're left to find the remaining <strong className="text-[#2b0b14]">£5,000</strong> yourself, out of pocket, for a claim that was well within your policy limit. The 25% shortfall in your sum insured cost you 25% of every claim you'll ever make on that policy.
            </p>
          </div>
        </div>
      </section>

      {/* PROTECT YOURSELF */}
      <section className="py-16 sm:py-24 px-6 md:px-10 border-t border-[#e2e8f0]" style={{background:'rgba(122,31,61,0.08)'}}>
        <div className="max-w-4xl mx-auto">
          <span className="badge badge-blue mb-4">Protecting Yourself</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#2b0b14] leading-tight mb-5">
            The fix is <span className="text-shine">straightforward</span>.
          </h2>
          <p className="text-[#64748b] text-base leading-relaxed mb-4">
            A RICS-regulated Reinstatement Cost Assessment gives you the true, current rebuild cost of your property, so you can set your sum insured correctly and protect yourself from the average clause on every future claim.
          </p>
          <p className="text-[#64748b] text-base leading-relaxed">
            Not sure if this applies to you? Start with <Link href="/do-i-need-a-reinstatement-cost-assessment" className="text-[#7A1F3D] font-medium hover:underline">Do I Need a Reinstatement Cost Assessment?</Link> or see <Link href="/reinstatement-cost-assessment-cost" className="text-[#7A1F3D] font-medium hover:underline">what it costs to find out</Link>.
          </p>
        </div>
      </section>

      <GuideTrustBand background="#ffffff" />

      <RelatedGuides currentSlug="/what-happens-if-my-property-is-underinsured" background="rgba(122,31,61,0.08)" />

      <ContactSection heading="Get an accurate figure before you need to claim." flip />
      <FaqSection description="Questions homeowners ask about underinsurance and the average clause." items={faqItems} flip />
    </main>
  )
}
