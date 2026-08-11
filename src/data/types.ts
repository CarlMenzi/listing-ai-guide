export type Level = "Beginner" | "Intermediate" | "Advanced";

export type ResourceType = "Guide" | "Tutorial" | "Prompt";

export type Category =
  | "AI Basics"
  | "Marketing"
  | "Listings"
  | "Client Communication"
  | "Personal Branding"
  | "Lead Generation"
  | "Productivity";

export interface Step {
  number: number;
  title: string;
  content: string;
  images?: { src: string; alt: string }[];
}

export interface Prompt {
  title: string;
  description?: string;
  content: string;
  copyEnabled?: boolean;
}

export interface ExamplePair {
  label: string;
  before: { src: string; alt: string; caption?: string };
  after: { src: string; alt: string; caption?: string };
}

export interface Resource {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: Category;
  level: Level;
  resourceType: ResourceType;
  tools: string[];
  thumbnail: string;
  thumbnailAlt: string;
  featured?: boolean;
  isNew?: boolean;
  createdAt: string;
  overview: string;
  whatYouWillLearn: string[];
  whatYouNeed: string[];
  steps: Step[];
  prompts: Prompt[];
  examples?: ExamplePair[];
  recommendedTools: string[];
  pdfUrl?: string;
  relatedResources?: string[];
  tags: string[];
}

export interface Tool {
  id: string;
  name: string;
  description: string;
  bestFor: string;
  useCases: string[];
  url: string;
  initials: string;
}
