import ChipCloud from "./ChipCloud";
import type { DetailScope } from "@/content/types";

export default function DetailScopeSection({ scope }: { scope: DetailScope }) {
  return (
    <div>
      <h3 className="text-xl font-semibold text-foreground">{scope.heading}</h3>
      <div className="mt-5 space-y-6">
        {scope.groups.map((group) => (
          <div key={group.title}>
            <h4 className="text-sm font-semibold text-foreground/90">{group.title}</h4>
            {group.description && (
              <p className="mt-2 text-sm leading-relaxed text-muted">{group.description}</p>
            )}
            {group.items && (
              <div className="mt-2">
                <ChipCloud items={group.items} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
