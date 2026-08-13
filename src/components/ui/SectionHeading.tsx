export default function SectionHeading({
  eyebrow,
  heading,
  subheading,
  text,
  align = "left",
}: {
  eyebrow?: string;
  heading: string;
  subheading?: string;
  text?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
          {eyebrow}
        </p>
      )}
      <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        {heading}
      </h2>
      {subheading && (
        <p className="mt-3 text-lg font-medium text-foreground/90">{subheading}</p>
      )}
      {text && <p className="mt-4 text-base leading-relaxed text-muted">{text}</p>}
    </div>
  );
}
