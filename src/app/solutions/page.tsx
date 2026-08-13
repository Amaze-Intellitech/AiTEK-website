import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Hero from "@/components/ui/Hero";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import CTABand from "@/components/ui/CTABand";
import Button from "@/components/ui/Button";
import { solutions, solutionsOverview } from "@/content/solutions";
import { closingCta } from "@/content/home";

export const metadata: Metadata = {
  title: "Solutions",
  description: solutionsOverview.paragraphs[0],
};

export default function SolutionsPage() {
  return (
    <>
      <Hero eyebrow="Solutions" heading={solutionsOverview.heading} paragraphs={solutionsOverview.paragraphs} />

      <section className="py-20 sm:py-24">
        <Container>
          <SectionHeading heading="Explore Our Capabilities" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {solutions.map((solution) => (
              <Link key={solution.slug} href={`/solutions/${solution.slug}`} className="group">
                <Card className="h-full">
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary">
                    {solution.tagline ?? solution.pageTitle}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{solution.hook}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                    View Solution
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
