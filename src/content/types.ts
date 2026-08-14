export interface DetailGroup {
  title: string;
  description?: string;
  items?: string[];
}

export interface DetailScope {
  heading: string;
  groups: DetailGroup[];
}

export interface HookPage {
  slug: string;
  pageTitle: string;
  tagline?: string;
  hook: string;
  solution: string[];
  capabilitiesHeading: string;
  capabilities: string[];
  detailScope?: DetailScope;
  businessImpactHeading?: string;
  businessImpact: string;
}

export interface Category {
  slug: string;
  name: string;
  intro?: string;
  pages: HookPage[];
}

export interface Industry {
  slug: string;
  name: string;
  shortTagline: string;
  section: HookPage;
}
