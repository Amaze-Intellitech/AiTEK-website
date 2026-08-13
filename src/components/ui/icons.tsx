type IconProps = { className?: string };

const base = "h-6 w-6";

export function IconStrategy({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path d="M12 3l8 4-8 4-8-4 8-4z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M4 11l8 4 8-4M4 15l8 4 8-4" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

export function IconArchitecture({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <rect x="4" y="10" width="4" height="10" stroke="currentColor" strokeWidth="1.5" />
      <rect x="10" y="6" width="4" height="14" stroke="currentColor" strokeWidth="1.5" />
      <rect x="16" y="13" width="4" height="7" stroke="currentColor" strokeWidth="1.5" />
      <path d="M3 20h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function IconEngineering({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M12 3v2.2M12 18.8V21M21 12h-2.2M5.2 12H3M18.4 5.6l-1.6 1.6M7.2 16.8l-1.6 1.6M18.4 18.4l-1.6-1.6M7.2 7.2L5.6 5.6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function IconAI({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <circle cx="6" cy="6" r="2" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="18" cy="6" r="2" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="6" cy="18" r="2" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="18" cy="18" r="2" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="2.4" stroke="currentColor" strokeWidth="1.5" />
      <path d="M7.6 7.2l2.8 3M16.4 7.2l-2.8 3M7.6 16.8l2.8-3M16.4 16.8l-2.8-3" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function IconGenAI({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path d="M12 3l1.6 4.4L18 9l-4.4 1.6L12 15l-1.6-4.4L6 9l4.4-1.6L12 3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M18.5 15l.8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8.8-2.2z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
    </svg>
  );
}

export function IconAgentic({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <rect x="4" y="4" width="6" height="6" rx="1.2" stroke="currentColor" strokeWidth="1.5" />
      <rect x="14" y="4" width="6" height="6" rx="1.2" stroke="currentColor" strokeWidth="1.5" />
      <rect x="9" y="14" width="6" height="6" rx="1.2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M7 10v2a2 2 0 002 2M17 10v2a2 2 0 01-2 2" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function IconData({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <ellipse cx="12" cy="6" rx="7" ry="2.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M5 6v12c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5V6M5 12c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function IconAutomation({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <circle cx="9" cy="9" r="3" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M9 3v1.3M9 12.7V14M14.7 9h-1.3M3.3 9H2M13 5l-.9.9M4.9 12.1L4 13M13 13l-.9-.9M4.9 5.9L4 5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path d="M14 15l6 6M20 15l-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function IconSAP({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M7 15V9l4 6V9M14 9h3.5a1.5 1.5 0 010 3H14v3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconSun({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M12 2.5v2.2M12 19.3v2.2M21.5 12h-2.2M4.7 12H2.5M18.4 5.6l-1.6 1.6M7.2 16.8l-1.6 1.6M18.4 18.4l-1.6-1.6M7.2 7.2L5.6 5.6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function IconMoon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M20 14.2A8.5 8.5 0 119.8 4a6.8 6.8 0 0010.2 10.2z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconLinkedIn({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="2.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M7.8 10v6.2M7.8 7.6v.02" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path
        d="M11.2 16.2V10M11.2 12.6c0-1.4 1-2.6 2.4-2.6s2.2 1 2.2 2.6v3.6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export const expertiseIcons: Record<string, (props: IconProps) => React.ReactElement> = {
  "enterprise-strategy": IconStrategy,
  "digital-business-engineering": IconEngineering,
  "enterprise-architecture": IconArchitecture,
  "ai-machine-learning": IconAI,
  "generative-ai": IconGenAI,
  "agentic-ai": IconAgentic,
  "data-engineering": IconData,
  "intelligent-automation": IconAutomation,
  "sap-business-ai": IconSAP,
};
