import { ReactNode } from "react";
import Container from "./Container";

export default function CTABand({
  heading,
  subheading,
  text,
  cta,
}: {
  heading: string;
  subheading?: string;
  text?: string;
  cta: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-t border-border bg-surface">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute inset-0 bg-radial-fade" />
      <Container className="relative py-20 text-center">
        <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          {heading}
        </h2>
        {subheading && (
          <p className="mx-auto mt-3 max-w-2xl text-lg font-medium text-foreground/90">
            {subheading}
          </p>
        )}
        {text && (
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted">
            {text}
          </p>
        )}
        <div className="mt-8 flex flex-wrap justify-center gap-4">{cta}</div>
      </Container>
    </section>
  );
}
