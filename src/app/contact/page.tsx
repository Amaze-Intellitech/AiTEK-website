import type { Metadata } from "next";
import { Suspense } from "react";
import Container from "@/components/ui/Container";
import Hero from "@/components/ui/Hero";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import ChipCloud from "@/components/ui/ChipCloud";
import CheckList from "@/components/ui/CheckList";
import LocationBadges from "@/components/ui/LocationBadges";
import ContactPanel from "@/components/ContactPanel";
import {
  contactHero,
  diagnosticAccelerators,
  getInTouch,
  globalPresenceContact,
  howWeCanHelp,
  whyPartner,
  startConversation,
} from "@/content/contact";

export const metadata: Metadata = {
  title: "Contact Us",
  description: contactHero.paragraphs[0],
};

export default function ContactPage() {
  return (
    <>
      <Hero eyebrow="Contact Us" heading={contactHero.heading} paragraphs={contactHero.paragraphs} />

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]">
            <div className="space-y-10">
              <div>
                <h2 className="text-xl font-semibold text-foreground">{getInTouch.heading}</h2>
                <p className="mt-3 text-sm font-medium uppercase tracking-wide text-muted">
                  {getInTouch.hqLabel}
                </p>
                <p className="mt-1 text-base text-foreground/90">{getInTouch.hq}</p>
                <a
                  href={`mailto:${getInTouch.email}`}
                  className="mt-2 inline-block text-base text-primary hover:underline"
                >
                  {getInTouch.email}
                </a>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground">{globalPresenceContact.heading}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">{globalPresenceContact.text}</p>
                <div className="mt-4">
                  <LocationBadges locations={globalPresenceContact.countries} />
                </div>
              </div>
            </div>

            <Suspense fallback={null}>
              <ContactPanel />
            </Suspense>
          </div>
        </Container>
      </section>

      <section className="border-t border-border bg-surface py-16 sm:py-20">
        <Container>
          <SectionHeading heading={diagnosticAccelerators.heading} />
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {diagnosticAccelerators.items.map((item) => (
              <Card key={item.title}>
                <h3 className="font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.desc}</p>
              </Card>
            ))}
          </div>
          <div className="mt-8 max-w-2xl">
            <CheckList items={[diagnosticAccelerators.businessImpact]} />
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading heading={howWeCanHelp.heading} text={howWeCanHelp.text} />
          <div className="mt-8">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-muted">
              {howWeCanHelp.areasHeading}
            </h3>
            <ChipCloud items={howWeCanHelp.areas} />
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="max-w-3xl">
            <SectionHeading heading={whyPartner.heading} />
            <div className="mt-4 space-y-4">
              {whyPartner.paragraphs.map((p) => (
                <p key={p} className="text-base leading-relaxed text-muted">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-border bg-surface py-16 sm:py-20 text-center">
        <Container>
          <SectionHeading heading={startConversation.heading} text={startConversation.text} align="center" />
          <p className="mx-auto mt-2 max-w-2xl text-base font-medium text-foreground/90">
            {startConversation.closing}
          </p>
        </Container>
      </section>
    </>
  );
}
