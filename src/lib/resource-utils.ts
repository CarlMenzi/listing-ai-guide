import type { Resource } from "@/data/types";

export interface Filters {
  q?: string;
  category?: string;
  level?: string;
  tool?: string;
  type?: string;
  sort?: string;
}

const haystack = (r: Resource) =>
  [
    r.title,
    r.description,
    r.category,
    r.level,
    r.resourceType,
    r.overview,
    ...r.tags,
    ...r.tools,
    ...r.whatYouWillLearn,
    ...r.steps.map((s) => `${s.title} ${s.content}`),
    ...r.prompts.map((p) => `${p.title} ${p.content}`),
  ]
    .join(" ")
    .toLowerCase();

export function filterResources(list: Resource[], f: Filters): Resource[] {
  const q = (f.q ?? "").trim().toLowerCase();
  const terms = q ? q.split(/\s+/) : [];

  let out = list.filter((r) => {
    if (f.category && f.category !== "all" && r.category !== f.category) return false;
    if (f.level && f.level !== "all" && r.level !== f.level) return false;
    if (f.tool && f.tool !== "all" && !r.tools.includes(f.tool)) return false;
    if (f.type && f.type !== "all" && r.resourceType !== f.type) return false;
    if (terms.length) {
      const hay = haystack(r);
      if (!terms.every((t) => hay.includes(t))) return false;
    }
    return true;
  });

  if (f.sort === "az") {
    out = [...out].sort((a, b) => a.title.localeCompare(b.title));
  } else {
    out = [...out].sort((a, b) => b.createdAt.localeCompare(a.createdAt));
  }
  return out;
}

export function getRelated(all: Resource[], resource: Resource, limit = 3): Resource[] {
  const explicit = (resource.relatedResources ?? [])
    .map((slug) => all.find((r) => r.slug === slug))
    .filter((r): r is Resource => Boolean(r) && r!.slug !== resource.slug);

  if (explicit.length >= limit) return explicit.slice(0, limit);

  const scored = all
    .filter((r) => r.slug !== resource.slug && !explicit.some((e) => e.slug === r.slug))
    .map((r) => {
      let score = 0;
      if (r.category === resource.category) score += 3;
      score += r.tags.filter((t) => resource.tags.includes(t)).length * 2;
      score += r.tools.filter((t) => resource.tools.includes(t)).length;
      return { r, score };
    })
    .sort((a, b) => b.score - a.score)
    .map((s) => s.r);

  return [...explicit, ...scored].slice(0, limit);
}

export function formatDate(iso: string) {
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
}
