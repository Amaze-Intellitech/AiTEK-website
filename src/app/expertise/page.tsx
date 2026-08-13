import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Hero from "@/components/ui/Hero";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import CTABand from "@/components/ui/CTABand";
import Button from "@/components/ui/Button";
import { IconStrategy, IconAI, IconEngineering, IconAgentic } from "@/components/ui/icons";
import { expertiseIntro, aiForEnterprise, consultingCategory, domainCategory, functionsCategory, whyAitek } from "@/content/expertise";
import { closingCta } from "@/content/home";

export const metadata: Metadata = {
  title: "Expertise",
  description: expertiseIntro.paragraphs[0],
};

const categoryCards = [
  {
    href: `/expertise/${consultingCategory.slug}`,
    name: consultingCategory.name,
    intro: consultingCategory.intro,
    count: consultingCategory.pages.length,
    Icon: IconStrategy,
  },
  {
    href: `/expertise/${domainCategory.slug}`,
    name: domainCategory.name,
    intro: domainCategory.intro,
    count: domainCategory.pages.length,
    Icon: IconAI,
  },
  {
    href: `/expertise/${functionsCategory.slug}`,
    name: functionsCategory.name,
    intro: functionsCategory.intro,
    count: functionsCategory.pages.length,
    Icon: IconEngineering,
  },
];

export default function ExpertisePage() {
  return (
    <>
      <Hero eyebrow="Expertise" heading={expertiseIntro.heading} paragraphs={expertiseIntro.paragraphs} />

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading heading="Explore by Category" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categoryCards.map(({ href, name, intro, count, Icon }) => (
              <Link key={href} href={href} className="group">
                <Card className="h-full">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-primary/30 bg-surface-raised text-primary">
                    <Icon />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-foreground group-hover:text-primary">{name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{intro}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                    {count} areas
                    <svg viewBox="0 0 12 12" className="h-3 w-3" fill="none" aria-hidden>
                      <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </Card>
              </Link>
            ))}
          </div>

          <div className="mt-6">
            <Link href={`/expertise/${aiForEnterprise.slug}`} className="group block">
              <Card className="h-full">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-primary/30 bg-surface-raised text-primary">
                  <IconAgentic />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground group-hover:text-primary">
                  {aiForEnterprise.tagline ?? aiForEnterprise.pageTitle}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{aiForEnterprise.hook}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                  Read more
                  <svg viewBox="0 0 12 12" className="h-3 w-3" fill="none" aria-hidden>
                    <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </Card>
            </Link>
          </div>
        </Container>
      </section>

      <section className="border-t border-border bg-surface py-16 sm:py-20">
        <Container>
          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">Why AITEK</h2>
            <p className="mt-4 text-base leading-relaxed text-muted">{whyAitek}</p>
          </div>
        </Container>
      </section>

      <CTABand
        heading={closingCta.heading}
        subheading={closingCta.subheading}
        text={closingCta.text}
        cta={<Button href="/contact">Start Your Discovery Session</Button>}
      />
    </>
  );
}
