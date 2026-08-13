import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Hero from "@/components/ui/Hero";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import NumberedStep from "@/components/ui/NumberedStep";
import CTABand from "@/components/ui/CTABand";
import Button from "@/components/ui/Button";
import {
  industries,
  industriesOverview,
  transformationModel,
  whyLeadersChoose,
} from "@/content/industries";
import { closingCta } from "@/content/home";

export const metadata: Metadata = {
  title: "Industries",
  description: industriesOverview.text,
};

export default function IndustriesPage() {
  return (
    <>
      <Hero eyebrow="Industries" heading={industriesOverview.heading} paragraphs={[industriesOverview.text]} />

      <section className="py-20 sm:py-24">
        <Container>
          <SectionHeading heading={transformationModel.heading} />
          <div className="mt-6 max-w-3xl space-y-4">
            {transformationModel.paragraphs.map((p) => (
              <p key={p} className="text-base leading-relaxed text-muted">
                {p}
              </p>
            ))}
          </div>
          <div className="mt-10 grid gap-10 sm:grid-cols-3">
            {transformationModel.steps.map((step, i) => (
              <NumberedStep key={step.title} index={i + 1} title={step.title} desc={step.desc} />
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-border bg-surface py-20 sm:py-24">
        <Container>
          <SectionHeading heading={whyLeadersChoose.heading} />
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {whyLeadersChoose.items.map((item) => (
              <Card key={item.title}>
                <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.desc}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <SectionHeading heading="Explore by Industry" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => (
              <Link key={industry.slug} href={`/industries/${industry.slug}`} className="group">
                <Card className="h-full">
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary">
                    {industry.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{industry.shortTagline}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                    Explore
                    <svg viewBox="0 0 12 12" className="h-3 w-3" fill="none" aria-hidden>
                      <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </Card>
              </Link>
            ))}
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
