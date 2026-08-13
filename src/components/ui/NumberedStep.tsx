export default function NumberedStep({
  index,
  title,
  desc,
}: {
  index: number;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex flex-col gap-3">
      <span className="font-mono text-sm font-semibold text-primary">
        {String(index).padStart(2, "0")}
      </span>
      <h3 className="text-lg font-semibold text-foreground">{title}</h3>
      <p className="text-sm leading-relaxed text-muted">{desc}</p>
    </div>
  );
}
