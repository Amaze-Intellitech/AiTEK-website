import Link from "next/link";
import Container from "@/components/ui/Container";
import PhotoHero from "@/components/ui/PhotoHero";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import NumberedStep from "@/components/ui/NumberedStep";
import CTABand from "@/components/ui/CTABand";
import Button from "@/components/ui/Button";
import StatCallout from "@/components/ui/StatCallout";
import FramedImage from "@/components/ui/FramedImage";
import Reveal from "@/components/ui/Reveal";
import {
  hero,
  inflectionPoint,
  whyFails,
  digitalBusinessEngineering,
  corePillars,
  industryIntelligence,
  getStartedPromo,
  mdpSection,
  closingCta,
} from "@/content/home";
import { industries } from "@/content/industries";
import { heroArchitecture, engineeringSupport } from "@/content/images";

export default function Home() {
  return (
    <>
      <PhotoHero
        heading={hero.heading}
        paragraphs={[hero.subhead]}
        image={heroArchitecture}
        cta={
          <>
            <Button href="/contact">Start a Discovery Session</Button>
            <Button href="/expertise" variant="secondary">
              Explore Our Expertise
            </Button>
          </>
        }
      />

      {/* Digital Inflection Point */}
      <section className="py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="The Digital Inflection Point"
            heading={inflectionPoint.heading}
            text={inflectionPoint.text}
          />
          <p className="mt-10 text-sm font-semibold uppercase tracking-widest text-muted">
            {inflectionPoint.lead}
          </p>
          <Reveal className="mt-6 grid gap-4 sm:grid-cols-2">
            {inflectionPoint.shifts.map((shift) => (
              <Card key={shift.from} className="flex items-center gap-4">
                <span className="shrink-0 rounded-full border border-border px-3 py-1 text-sm text-muted">
                  {shift.from}
                </span>
                <svg viewBox="0 0 20 10" className="h-3 w-5 shrink-0 text-primary" fill="none" aria-hidden>
                  <path d="M0 5h18M13 1l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-sm font-medium text-foreground">{shift.to}</span>
              </Card>
            ))}
          </Reveal>
        </Container>
      </section>

      {/* Why Traditional Transformation Fails */}
      <section className="border-t border-border bg-surface py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow={whyFails.eyebrow}
            heading={whyFails.heading}
            subheading={whyFails.subheading}
            text={whyFails.text}
          />
          <Reveal className="mt-8">
            <StatCallout value="70%" label="of digital initiatives fail to deliver expected value" />
          </Reveal>
          <Reveal className="mt-10 grid gap-6 sm:grid-cols-3" delay={0.1}>
            {whyFails.problems.map((problem) => (
              <Card key={problem.title}>
                <h3 className="text-lg font-semibold text-foreground">{problem.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{problem.desc}</p>
                <p className="mt-4 border-t border-border pt-4 text-xs font-medium uppercase tracking-wide text-primary">
                  Business Impact
                </p>
                <p className="mt-1 text-sm text-foreground/90">{problem.impact}</p>
              </Card>
            ))}
          </Reveal>
        </Container>
      </section>

      {/* Digital Business Engineering */}
      <section className="py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow={digitalBusinessEngineering.eyebrow}
            heading={digitalBusinessEngineering.heading}
            subheading={digitalBusinessEngineering.subheading}
            text={digitalBusinessEngineering.text}
          />
          <Reveal className="mt-10 grid gap-10 sm:grid-cols-3">
            {digitalBusinessEngineering.pillars.map((pillar, i) => (
              <NumberedStep key={pillar.title} index={i + 1} title={pillar.title} desc={pillar.desc} />
            ))}
          </Reveal>
          <Reveal delay={0.1}>
            <FramedImage
              src={engineeringSupport.src}
              alt={engineeringSupport.alt}
              className="mt-14 aspect-[21/9] w-full"
            />
          </Reveal>
          <Reveal delay={0.15} className="mt-8">
            <Link
              href="/digital-business-engineering"
              className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
            >
              Explore Digital Business Engineering
              <svg viewBox="0 0 12 12" className="h-3 w-3" fill="none" aria-hidden>
                <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </Reveal>
        </Container>
      </section>

      {/* Core Pillars */}
      <section className="border-t border-border bg-surface py-20 sm:py-24">
        <Container>
          <SectionHeading heading={corePillars.heading} />
          <Reveal className="mt-10 grid gap-6 sm:grid-cols-2">
            {corePillars.pillars.map((pillar) => (
              <Card key={pillar.title}>
                <h3 className="text-lg font-semibold text-foreground">{pillar.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{pillar.desc}</p>
              </Card>
            ))}
          </Reveal>
        </Container>
      </section>

      {/* Deep Industry Intelligence */}
      <section className="py-20 sm:py-24">
        <Container>
          <SectionHeading eyebrow={industryIntelligence.eyebrow} heading={industryIntelligence.text} />
          <Reveal className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => (
              <Link key={industry.slug} href={`/industries/${industry.slug}`} className="group">
                <Card className="h-full">
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary">
                    {industry.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{industry.shortTagline}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary transition-transform group-hover:translate-x-0.5">
                    Explore
                    <svg viewBox="0 0 12 12" className="h-3 w-3" fill="none" aria-hidden>
                      <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </Card>
              </Link>
            ))}
          </Reveal>
        </Container>
      </section>

      {/* Get started promo */}
      <section className="border-t border-border bg-surface py-20 sm:py-24">
        <Container>
          <Reveal className="flex flex-col items-center gap-6 text-center">
            <SectionHeading
              eyebrow={getStartedPromo.eyebrow}
              heading={getStartedPromo.heading}
              text={getStartedPromo.text}
              align="center"
            />
            <Button href="/contact">Get Started</Button>
          </Reveal>
        </Container>
      </section>

      {/* MDP */}
      <section className="py-20 sm:py-24">
        <Container>
          <SectionHeading
            heading={mdpSection.heading}
            subheading={mdpSection.subheading}
            text={mdpSection.text}
          />
        </Container>
      </section>

      <CTABand
        heading={closingCta.heading}
        subheading={closingCta.subheading}
        text={closingCta.text}
        cta={
          <>
            <Button href="/contact">Start Your Discovery Session</Button>
            <Button href="/book" variant="secondary">
              Book a Call
            </Button>
          </>
        }
      />
    </>
  );
}
