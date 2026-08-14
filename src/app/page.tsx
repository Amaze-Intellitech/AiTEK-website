import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import PhotoHero from "@/components/ui/PhotoHero";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import NumberedStep from "@/components/ui/NumberedStep";
import CheckList from "@/components/ui/CheckList";
import CTABand from "@/components/ui/CTABand";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { dbeHero, keyOfferings, transformationLifecycle, dbeBusinessImpact } from "@/content/dbe";
import { dbeImage } from "@/content/images";

export const metadata: Metadata = {
  title: "Digital Business Engineering",
  description: dbeHero.hook,
};

export default function DigitalBusinessEngineeringPage() {
  return (
    <>
      <PhotoHero
        eyebrow={dbeHero.eyebrow}
        heading={dbeHero.heading}
        paragraphs={[dbeHero.hook]}
        image={dbeImage}
      />

      <section className="py-16 sm:py-20">
        <Container>
          <Reveal className="max-w-3xl space-y-4">
            {dbeHero.solution.map((p) => (
              <p key={p} className="text-base leading-relaxed text-muted">
                {p}
              </p>
            ))}
          </Reveal>
        </Container>
      </section>

      <section className="border-t border-border bg-surface py-16 sm:py-20">
        <Container>
          <SectionHeading heading={keyOfferings.heading} />
          <Reveal className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {keyOfferings.items.map((item) => (
              <Card key={item.title}>
                <h3 className="font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.desc}</p>
              </Card>
            ))}
          </Reveal>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading heading={transformationLifecycle.heading} />
          <Reveal className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
            {transformationLifecycle.stages.map((stage, i) => (
              <NumberedStep key={stage.title} index={i + 1} title={stage.title} desc={stage.desc} />
            ))}
          </Reveal>
        </Container>
      </section>

      <section className="border-t border-border bg-surface py-16 sm:py-20">
        <Container>
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">{dbeBusinessImpact.heading}</h2>
            <div className="mt-5">
              <CheckList items={[dbeBusinessImpact.text]} />
            </div>
          </div>
        </Container>
      </section>

      <CTABand
        heading="Ready to engineer your digital business?"
        text="Start with a Digital Assessment, Audit & Path Finder engagement to establish your baseline and business case."
        cta={<Button href="/contact">Start Your Discovery Session</Button>}
      />
    </>
  );
}
