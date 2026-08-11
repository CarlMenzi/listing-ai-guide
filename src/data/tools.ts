import type { Tool } from "./types";

export const tools: Tool[] = [
  {
    id: "chatgpt",
    name: "ChatGPT",
    description:
      "General-purpose AI assistant for writing, rewriting, summarizing, planning, and generating images.",
    bestFor: "Writing and everyday drafting",
    useCases: [
      "Listing descriptions and property copy",
      "Client emails and follow-ups",
      "Social captions and content plans",
      "AI headshots and image generation",
    ],
    url: "https://chatgpt.com",
    initials: "GP",
  },
  {
    id: "claude",
    name: "Claude",
    description:
      "AI assistant known for long-form reasoning and careful, natural-sounding writing.",
    bestFor: "Long documents and nuanced tone",
    useCases: [
      "Rewriting sensitive client messages",
      "Summarizing long disclosures or notes",
      "Drafting seller update letters",
    ],
    url: "https://claude.ai",
    initials: "CL",
  },
  {
    id: "gemini",
    name: "Gemini",
    description:
      "Google's AI assistant with strong research capabilities and tight integration with Google tools.",
    bestFor: "Research and market context",
    useCases: [
      "Neighborhood and market research",
      "Turning notes into structured summaries",
      "Drafting content inside Google Workspace",
    ],
    url: "https://gemini.google.com",
    initials: "GE",
  },
  {
    id: "canva",
    name: "Canva",
    description:
      "Design platform with templates and built-in AI features for real estate graphics and print pieces.",
    bestFor: "Design and branded graphics",
    useCases: [
      "Just Listed / Open House graphics",
      "Social posts and story templates",
      "Flyers, postcards, and listing packets",
    ],
    url: "https://www.canva.com",
    initials: "CA",
  },
  {
    id: "capcut",
    name: "CapCut",
    description:
      "Video editor with auto-captions, templates, and simple tools for short-form listing videos.",
    bestFor: "Short-form video editing",
    useCases: [
      "Listing walkthrough reels",
      "Captioned market update videos",
      "Quick edits from phone footage",
    ],
    url: "https://www.capcut.com",
    initials: "CC",
  },
  {
    id: "gamma",
    name: "Gamma",
    description:
      "AI presentation builder that turns an outline into a polished, on-brand deck.",
    bestFor: "Presentations and listing decks",
    useCases: [
      "Listing presentations",
      "Buyer consultation decks",
      "Market update presentations",
    ],
    url: "https://gamma.app",
    initials: "GA",
  },
  {
    id: "elevenlabs",
    name: "ElevenLabs",
    description: "AI voice generation for natural-sounding narration and audio content.",
    bestFor: "Voiceover and narration",
    useCases: [
      "Narration for listing videos",
      "Audio versions of market updates",
      "Neighborhood tour voiceovers",
    ],
    url: "https://elevenlabs.io",
    initials: "EL",
  },
];

export const toolByName = (name: string) =>
  tools.find((t) => t.name.toLowerCase() === name.toLowerCase());
