"use client";

import { useState } from "react";
import ChipCloud from "./ChipCloud";
import type { DetailScope } from "@/content/types";

function AccordionGroup({ title, items, description }: { title: string; items?: string[]; description?: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-lg border border-border bg-surface-raised">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between px-5 py-4 text-left"
        aria-expanded={open}
      >
        <span className="text-sm font-semibold text-foreground">{title}</span>
        <span
          className="ml-4 shrink-0 text-primary transition-transform duration-200"
          style={{ transform: open ? "rotate(45deg)" : "rotate(0deg)" }}
          aria-hidden
        >
          +
        </span>
      </button>

      {open && (
        <div className="border-t border-border px-5 pb-5 pt-4">
          {description && (
            <p className="mb-3 text-sm leading-relaxed text-muted">{description}</p>
          )}
          {items && <ChipCloud items={items} />}
        </div>
      )}
    </div>
  );
}

export default function DetailScopeSection({ scope }: { scope: DetailScope }) {
  return (
    <div>
      <h3 className="text-xl font-semibold text-foreground">{scope.heading}</h3>
      <div className="mt-5 space-y-3">
        {scope.groups.map((group) => (
          <AccordionGroup
            key={group.title}
            title={group.title}
            items={group.items}
            description={group.description}
          />
        ))}
      </div>
    </div>
  );
}
