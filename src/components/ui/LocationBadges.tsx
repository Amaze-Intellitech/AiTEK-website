export default function LocationBadges({ locations }: { locations: string[] }) {
  return (
    <ul className="flex flex-wrap gap-3">
      {locations.map((loc) => (
        <li
          key={loc}
          className="flex items-center gap-2 rounded-full bg-surface-raised px-4 py-2 text-sm text-foreground/90"
        >
          <span className="h-2 w-2 rounded-full bg-primary" />
          {loc}
        </li>
      ))}
    </ul>
  );
}
