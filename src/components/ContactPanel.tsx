"use client";

import { useState } from "react";
import ContactForm from "./ContactForm";
import BookingWidget from "./ui/BookingWidget";

const tabs = [
  { key: "message", label: "Send a Message" },
  { key: "call", label: "Book a Call" },
] as const;

export default function ContactPanel() {
  const [active, setActive] = useState<(typeof tabs)[number]["key"]>("message");

  return (
    <div>
      <div className="mb-6 inline-flex rounded-full border border-border bg-surface-raised p-1">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            type="button"
            onClick={() => setActive(tab.key)}
            aria-current={active === tab.key ? "page" : undefined}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
              active === tab.key ? "bg-primary text-primary-foreground" : "text-muted hover:text-foreground"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {active === "message" ? <ContactForm /> : <BookingWidget mode="inline" />}
    </div>
  );
}
