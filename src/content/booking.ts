export type BookingProvider = "link" | "calendly" | "cal";

export const booking = {
  // TODO(owner): set to "calendly" or "cal" once a scheduling URL is available.
  provider: "link" as BookingProvider,
  // TODO(owner): paste your Calendly (https://calendly.com/...) or cal.com (https://cal.com/...) URL here.
  url: "",
  heading: "Prefer to talk it through?",
  text: "Book a 30-minute discovery call directly on our calendar and skip the form.",
  ctaLabel: "Book a Call",
};
