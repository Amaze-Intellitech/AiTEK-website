export default function StatCallout({ value, label }: { value: string; label?: string }) {
  return (
    <div className="inline-flex flex-col items-start rounded-2xl bg-surface-raised px-6 py-5 shadow-lg shadow-black/20">
      <span className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">{value}</span>
      {label && <span className="mt-1 text-sm text-muted">{label}</span>}
    </div>
  );
}
