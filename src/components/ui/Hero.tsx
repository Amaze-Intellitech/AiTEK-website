import { ReactNode } from "react";
import Image from "next/image";
import { heroArchitecture } from "@/content/images";

export default function Hero({
  eyebrow,
  heading,
  paragraphs,
  cta,
  size = "lg",
  image,
  id,
}: {
  eyebrow?: string;
  heading: string;
  paragraphs: string[];
  cta?: ReactNode;
  size?: "lg" | "md";
  image?: { src: string; alt: string };
  id?: string;
}) {
  const heroImage = image || heroArchitecture;

  return (
    <section id={id} className="relative overflow-hidden border-b border-border bg-background">
      <div className="absolute inset-0">
        <Image src={heroImage.src} alt={heroImage.alt} fill priority className="object-cover lg:object-right" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-r from-background from-0% via-background/95 via-40% to-transparent to-100%" />
        <div className="absolute inset-0 bg-gradient-to-t from-background from-0% via-background/20 via-30% to-transparent" />
      </div>
      <div
        className={`relative mx-auto w-full px-6 lg:px-8 ${
          size === "lg" ? "py-24 sm:py-32" : "py-16 sm:py-20"
        }`}
      >
        <div className="max-w-3xl">
          {eyebrow && (
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">
              {eyebrow}
            </p>
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
