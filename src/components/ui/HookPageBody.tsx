import Card from "./Card";
import CheckList from "./CheckList";
import DetailScopeSection from "./DetailScopeSection";
import Reveal from "./Reveal";
import type { HookPage } from "@/content/types";

export default function HookPageBody({ page }: { page: HookPage }) {
  return (
    <Reveal className="space-y-12">
      <p className="max-w-3xl text-lg font-medium text-foreground/90">{page.hook}</p>

      <div className="max-w-3xl space-y-4">
        {page.solution.map((p) => (
          <p key={p} className="text-base leading-relaxed text-muted">
            {p}
          </p>
        ))}
      </div>

      <div>
        <h3 className="text-xl font-semibold text-foreground">{page.capabilitiesHeading}</h3>
        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          {page.capabilities.map((cap) => (
            <Card key={cap}>
              <p className="text-sm leading-relaxed text-foreground/90">{cap}</p>
            </Card>
          ))}
        </div>
      </div>

      {page.detailScope && <DetailScopeSection scope={page.detailScope} />}

      <div>
        <h3 className="text-xl font-semibold text-foreground">{page.businessImpactHeading ?? "Business Impact"}</h3>
        <div className="mt-5 max-w-2xl">
          <CheckList items={[page.businessImpact]} />
        </div>
      </div>
    </Reveal>
  );
}
