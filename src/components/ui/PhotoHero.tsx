import Image from "next/image";
import { ReactNode } from "react";

export default function PhotoHero({
  eyebrow,
  heading,
  paragraphs,
  image,
  cta,
}: {
  eyebrow?: string;
  heading: string;
  paragraphs: string[];
  image: { src: string; alt: string };
  cta?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="absolute inset-0">
        <Image src={image.src} alt={image.alt} fill priority className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>
      <div className="relative mx-auto w-full px-6 py-24 sm:py-32 lg:px-8">
        <div className="max-w-2xl">
          {eyebrow && (
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">{eyebrow}</p>
          )}
          <h1 className="text-balance text-4xl font-medium tracking-tight text-foreground sm:text-5xl">
            {heading}
          </h1>
          {paragraphs.map((p, i) => (
            <p key={i} className="mt-5 text-lg leading-relaxed text-foreground/80">
              {p}
            </p>
          ))}
          {cta && <div className="mt-8 flex flex-wrap gap-4">{cta}</div>}
        </div>
      </div>
    </section>
  );
}
