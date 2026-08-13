export default function OptionGrid({
  options,
  value,
  onChange,
  columns = 2,
}: {
  options: { id: string; label: string }[];
  value: string;
  onChange: (id: string) => void;
  columns?: 1 | 2;
}) {
  return (
    <div className={`grid gap-3 ${columns === 2 ? "sm:grid-cols-2" : ""}`}>
      {options.map((option) => (
        <button
          key={option.id}
          type="button"
          onClick={() => onChange(option.id)}
          aria-pressed={value === option.id}
          className={`rounded-xl border p-4 text-left text-sm font-medium transition-all ${
            value === option.id
              ? "border-primary bg-surface-raised text-foreground"
              : "border-border text-foreground/90 hover:border-primary/50 hover:bg-surface-raised"
          }`}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
