import { IconLinkedIn } from "./icons";

function initials(name: string) {
  return name
    .replace(/^Dr\.\s*/, "")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((n) => n[0])
    .join("")
    .toUpperCase();
}

export default function LeadershipCard({
  name,
  title,
  bio,
  linkedin,
}: {
  name: string;
  title: string;
  bio?: string;
  linkedin?: string;
}) {
  return (
    <div className="flex h-full flex-col items-center gap-4 rounded-2xl border border-border bg-surface p-6 text-center">
      <div className="flex h-20 w-20 items-center justify-center rounded-full border border-primary/40 bg-surface-raised text-xl font-semibold text-primary">
        {initials(name)}
      </div>
      <div>
        <p className="font-semibold text-foreground">{name}</p>
        <p className="text-sm text-muted">{title}</p>
      </div>
      {bio && <p className="text-sm leading-relaxed text-muted">{bio}</p>}
      {linkedin ? (
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${name} on LinkedIn`}
          className="mt-auto inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-primary hover:text-primary"
        >
          <IconLinkedIn className="h-4 w-4" />
        </a>
      ) : (
        <span
          aria-label={`${name} on LinkedIn — profile coming soon`}
          title="LinkedIn profile coming soon"
          className="mt-auto inline-flex h-9 w-9 cursor-not-allowed items-center justify-center rounded-full border border-border text-muted"
        >
          <IconLinkedIn className="h-4 w-4" />
        </span>
      )}
    </div>
  );
}
