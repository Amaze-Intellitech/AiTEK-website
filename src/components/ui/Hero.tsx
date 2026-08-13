import { ReactNode } from "react";
import FramedImage from "./FramedImage";

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
  return (
    <section id={id} className="relative scroll-mt-24 overflow-hidden border-b border-border bg-surface">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute inset-0 bg-radial-fade" />
      <div
        className={`relative mx-auto w-full px-6 lg:px-8 ${
          size === "lg" ? "py-24 sm:py-32" : "py-16 sm:py-20"
        }`}
      >
        <div className={image ? "grid items-center gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]" : ""}>
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
              <p key={i} className="mt-5 text-lg leading-relaxed text-muted">
                {p}
              </p>
            ))}
            {cta && <div className="mt-8 flex flex-wrap gap-4">{cta}</div>}
          </div>
          {image && (
            <FramedImage
              src={image.src}
              alt={image.alt}
              priority
              className="hidden aspect-[4/3] w-full lg:block"
            />
          )}
        </div>
      </div>
    </section>
  );
}
