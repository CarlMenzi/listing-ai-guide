import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowRight, Search, Sparkles } from "lucide-react";
import { resources, categories, levels, allToolNames } from "@/data/resources";
import { filterResources, formatDate } from "@/lib/resource-utils";
import { ResourceCard } from "@/components/site/ResourceCard";
import { LevelBadge, MetaBadge } from "@/components/site/Badges";
import { CopyButton } from "@/components/site/PromptBlock";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AI Academy for Realtors — Practical AI for Real Estate" },
      {
        name: "description",
        content:
          "Search practical AI guides, copy-ready prompts, and recommended tools built for real estate professionals.",
      },
      { property: "og:title", content: "AI Academy for Realtors" },
      {
        property: "og:description",
        content:
          "Practical AI guides, prompts, and tools designed to help real estate professionals work smarter.",
      },
    ],
  }),
  component: Home,
});

const browseCategories = [
  "Marketing",
  "Listings",
  "Client Communication",
  "Personal Branding",
  "Lead Generation",
  "Productivity",
] as const;

const categoryBlurb: Record<string, string> = {
  Marketing: "Captions, content plans, and campaign ideas",
  Listings: "Descriptions, social content, and open houses",
  "Client Communication": "Follow-ups, updates, and rewrites",
  "Personal Branding": "Headshots, bios, and your online presence",
  "Lead Generation": "Prospecting and nurture resources",
  Productivity: "Planning, notes, and admin time savers",
};

function Home() {
  const [q, setQ] = useState("");
  const [category, setCategory] = useState("all");
  const [level, setLevel] = useState("all");
  const [tool, setTool] = useState("all");
  const [sort, setSort] = useState("newest");

  const results = useMemo(
    () => filterResources(resources, { q, category, level, tool, sort }),
    [q, category, level, tool, sort],
  );

  const beginners = resources
    .filter((r) => r.category === "AI Basics" || r.slug === "generate-content-ideas")
    .slice(0, 3);
  const featured = resources.find((r) => r.featured) ?? resources[0];
  const latest = [...resources]
    .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
    .slice(0, 5);
  const quickPrompts = resources
    .filter((r) => r.prompts.length)
    .slice(0, 4)
    .map((r) => ({ resource: r, prompt: r.prompts[0] }));

  const filtersActive =
    q !== "" || category !== "all" || level !== "all" || tool !== "all";

  const clearFilters = () => {
    setQ("");
    setCategory("all");
    setLevel("all");
    setTool("all");
    setSort("newest");
  };

  return (
    <div>
      {/* HERO */}
      <section className="border-b border-border bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <span className="inline-flex items-center gap-2 rounded-md bg-primary-foreground/10 px-3 py-1 text-xs font-medium uppercase tracking-wider">
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
            Internal resource center
          </span>
          <h1 className="mt-5 max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl">
            AI Academy for Realtors
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-primary-foreground/75 sm:text-lg">
            Practical AI guides, prompts, and tools designed to help real estate
            professionals work smarter, create faster, and get more done.
          </p>

          <div className="mt-8 max-w-2xl">
            <label htmlFor="hero-search" className="text-sm font-medium text-primary-foreground/80">
              What are you trying to accomplish?
            </label>
            <div className="relative mt-2">
              <Search
                className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground"
                aria-hidden="true"
              />
              <input
                id="hero-search"
                type="search"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search resources, prompts, or topics..."
                className="h-14 w-full rounded-lg border border-transparent bg-card pl-12 pr-4 text-base text-foreground shadow-sm outline-none placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring"
              />
            </div>
            <p className="mt-3 text-sm text-primary-foreground/60">
              Try: listing descriptions, email follow-up, social media, headshot
            </p>
          </div>
        </div>
      </section>

      {/* NEW TO AI */}
      <section className="border-b border-border bg-card">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-xl font-bold tracking-tight text-foreground">New to AI?</h2>
              <p className="mt-1 text-sm text-muted-foreground">Start with these resources.</p>
            </div>
            <Link
              to="/resources"
              className="inline-flex items-center gap-1 text-sm font-medium text-brand hover:underline"
            >
              Explore All Resources <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <ol className="mt-6 grid gap-4 md:grid-cols-3">
            {beginners.map((r, i) => (
              <li key={r.id}>
                <Link
                  to="/resources/$slug"
                  params={{ slug: r.slug }}
                  className="group flex h-full gap-4 rounded-xl border border-border bg-background p-5 transition-all hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <span className="text-sm font-semibold text-muted-foreground">
                    0{i + 1}
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-foreground">
                      {r.title}
                    </span>
                    <span className="mt-1 block text-sm text-muted-foreground">
                      {r.description}
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* BROWSE BY NEED */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold tracking-tight text-foreground">
            What can AI help you with?
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Browse resources by the work you need to get done.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {browseCategories.map((c) => {
              const count = resources.filter((r) => r.category === c).length;
              return (
                <Link
                  key={c}
                  to="/resources"
                  search={{
                    q: "",
                    category: c,
                    level: "all",
                    tool: "all",
                    type: "all",
                    sort: "newest",
                  }}
                  className="group rounded-xl border border-border bg-card p-5 transition-all hover:-translate-y-0.5 hover:border-ring/40 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-semibold text-foreground">{c}</h3>
                    <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">{categoryBlurb[c]}</p>
                  <p className="mt-4 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                    {count} {count === 1 ? "resource" : "resources"}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* FEATURED */}
      <section className="border-b border-border bg-card">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Featured Resource
          </p>
          <div className="mt-4 grid gap-8 rounded-2xl border border-border bg-background p-6 md:grid-cols-2 md:p-8">
            <img
              src={featured.thumbnail}
              alt={featured.thumbnailAlt}
              width={1200}
              height={800}
              className="aspect-[4/3] w-full rounded-xl object-cover"
            />
            <div className="flex flex-col justify-center">
              <div className="flex flex-wrap gap-2">
                <MetaBadge>{featured.category}</MetaBadge>
                <LevelBadge level={featured.level} />
              </div>
              <h2 className="mt-4 text-2xl font-bold tracking-tight text-foreground">
                {featured.title}
              </h2>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                {featured.description}
              </p>
              <div className="mt-6">
                <Link
                  to="/resources/$slug"
                  params={{ slug: featured.slug }}
                  className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  Explore Guide <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ALL RESOURCES + LATEST */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_280px]">
            <div>
              <h2 className="text-xl font-bold tracking-tight text-foreground">All Resources</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Practical guides and prompts built for real estate professionals.
              </p>

              <div className="mt-5 flex flex-wrap items-center gap-3">
                <FilterSelect
                  id="home-category"
                  label="Category"
                  value={category}
                  onChange={setCategory}
                  options={[{ value: "all", label: "All Categories" }, ...categories.map((c) => ({ value: c, label: c }))]}
                />
                <FilterSelect
                  id="home-level"
                  label="Level"
                  value={level}
                  onChange={setLevel}
                  options={[{ value: "all", label: "All Levels" }, ...levels.map((l) => ({ value: l, label: l }))]}
                />
                <FilterSelect
                  id="home-tool"
                  label="Tool"
                  value={tool}
                  onChange={setTool}
                  options={[{ value: "all", label: "All Tools" }, ...allToolNames.map((t) => ({ value: t, label: t }))]}
                />
                <FilterSelect
                  id="home-sort"
                  label="Sort"
                  value={sort}
                  onChange={setSort}
                  options={[
                    { value: "newest", label: "Newest" },
                    { value: "az", label: "A-Z" },
                  ]}
                />
                {filtersActive && (
                  <button
                    type="button"
                    onClick={clearFilters}
                    className="rounded-md border border-input px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                  >
                    Clear Filters
                  </button>
                )}
              </div>

              <p className="mt-4 text-sm text-muted-foreground" aria-live="polite">
                {results.length} {results.length === 1 ? "resource" : "resources"}
              </p>

              {results.length === 0 ? (
                <EmptyState onClear={clearFilters} />
              ) : (
                <div className="mt-5 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                  {results.map((r) => (
                    <ResourceCard key={r.id} resource={r} />
                  ))}
                </div>
              )}
            </div>

            <aside className="lg:pt-1">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                Latest Updates
              </h2>
              <ul className="mt-4 divide-y divide-border rounded-xl border border-border bg-card">
                {latest.map((r) => (
                  <li key={r.id}>
                    <Link
                      to="/resources/$slug"
                      params={{ slug: r.slug }}
                      className="block p-4 transition-colors hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      <span className="block text-sm font-medium text-foreground">
                        {r.title}
                      </span>
                      <span className="mt-1 block text-xs text-muted-foreground">
                        {r.category} · {formatDate(r.createdAt)}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                to="/whats-new"
                className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-brand hover:underline"
              >
                See what's new <ArrowRight className="h-4 w-4" />
              </Link>
            </aside>
          </div>
        </div>
      </section>

      {/* QUICK PROMPTS */}
      <section>
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-xl font-bold tracking-tight text-foreground">Quick Prompts</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Copy-ready prompts for everyday real estate tasks.
              </p>
            </div>
            <Link
              to="/prompts"
              className="inline-flex items-center gap-1 text-sm font-medium text-brand hover:underline"
            >
              Open Prompt Library <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {quickPrompts.map(({ resource, prompt }) => (
              <div
                key={resource.id}
                className="flex flex-col justify-between gap-4 rounded-xl border border-border bg-card p-5"
              >
                <div>
                  <Link
                    to="/resources/$slug"
                    params={{ slug: resource.slug }}
                    className="text-sm font-semibold text-foreground hover:underline"
                  >
                    {prompt.title}
                  </Link>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {prompt.description ?? resource.description}
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <CopyButton text={prompt.content} />
                  <span className="text-xs text-muted-foreground">
                    {resource.tools.join(" · ")}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export function FilterSelect({
  id,
  label,
  value,
  onChange,
  options,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: { value: string; label: string }[];
}) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="h-10 rounded-md border border-input bg-card px-3 text-sm text-foreground outline-none transition-colors hover:bg-secondary focus-visible:ring-2 focus-visible:ring-ring"
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export function EmptyState({ onClear }: { onClear: () => void }) {
  return (
    <div className="mt-6 rounded-xl border border-dashed border-border bg-card p-10 text-center">
      <p className="text-base font-semibold text-foreground">No resources found</p>
      <p className="mt-1 text-sm text-muted-foreground">
        Try another search or browse by category.
      </p>
      <button
        type="button"
        onClick={onClear}
        className="mt-5 inline-flex items-center rounded-md border border-input px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
      >
        Clear Filters
      </button>
    </div>
  );
}
