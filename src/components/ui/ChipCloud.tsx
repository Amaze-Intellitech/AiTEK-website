export default function ChipCloud({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <span
          key={item}
          className="rounded-full bg-surface-raised px-3.5 py-1.5 text-sm text-foreground/90"
        >
          {item}
        </span>
      ))}
    </div>
  );
}
