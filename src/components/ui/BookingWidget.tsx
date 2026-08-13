"use client";

import Script from "next/script";
import { useState } from "react";
import Card from "./Card";
import Button from "./Button";
import { booking, type BookingProvider } from "@/content/booking";

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

const linkButtonClasses =
  "inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 hover:scale-[1.02] active:scale-[0.98]";

export default function BookingWidget({
  mode = "inline",
  provider = booking.provider,
  url = booking.url,
  className = "",
}: {
  mode?: "inline" | "popup";
  provider?: BookingProvider;
  url?: string;
  className?: string;
}) {
  const [scriptReady, setScriptReady] = useState(false);

  if (!url) {
    return (
      <Card className={className}>
        <h3 className="text-lg font-semibold text-foreground">{booking.heading}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{booking.text}</p>
        <div className="mt-5">
          <Button href="/contact">Go to Contact Form</Button>
        </div>
      </Card>
    );
  }

  if (provider === "calendly") {
    if (mode === "popup") {
      return (
        <>
          <Script
            src="https://assets.calendly.com/assets/external/widget.js"
            strategy="lazyOnload"
            onReady={() => setScriptReady(true)}
          />
          <Button
            onClick={() => {
              if (scriptReady) window.Calendly?.initPopupWidget({ url });
            }}
            className={className}
          >
            {booking.ctaLabel}
          </Button>
        </>
      );
    }
    return (
      <>
        <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" />
        <div className={`calendly-inline-widget min-h-[700px] w-full ${className}`} data-url={url} />
      </>
    );
  }

  if (provider === "cal") {
    if (mode === "popup") {
      return (
        <a href={url} target="_blank" rel="noopener noreferrer" className={`${linkButtonClasses} ${className}`}>
          {booking.ctaLabel}
        </a>
      );
    }
    return (
      <iframe
        src={`${url}?embed=true`}
        className={`min-h-[700px] w-full rounded-2xl border border-border ${className}`}
        title="Book a call"
      />
    );
  }

  return (
    <Card className={className}>
      <h3 className="text-lg font-semibold text-foreground">{booking.heading}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{booking.text}</p>
      <div className="mt-5">
        <a href={url} target="_blank" rel="noopener noreferrer" className={linkButtonClasses}>
          {booking.ctaLabel}
        </a>
      </div>
    </Card>
  );
}
