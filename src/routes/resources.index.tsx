import { createFileRoute, Link } from "@tanstack/react-router";
import { zodValidator, fallback } from "@tanstack/zod-adapter";
import { z } from "zod";
import { useMemo } from "react";
import { Search } from "lucide-react";
import { resources, categories, levels, resourceTypes, allToolNames } from "@/data/resources";
import { filterResources } from "@/lib/resource-utils";
import { ResourceCard } from "@/components/site/ResourceCard";
import { FilterSelect, EmptyState } from "./index";

const searchSchema = z.object({
  q: fallback(z.string(), "").default(""),
  category: fallback(z.string(), "all").default("all"),
  level: fallback(z.string(), "all").default("all"),
  tool: fallback(z.string(), "all").default("all"),
  type: fallback(z.string(), "all").default("all"),
  sort: fallback(z.string(), "newest").default("newest"),
});

export const Route = createFileRoute("/resources/")({
  validateSearch: zodValidator(searchSchema),
  head: () => ({
    meta: [
      { title: "All Resources — AI Academy for Realtors" },
      {
        name: "description",
        content:
          "Explore practical AI guides, tutorials, and prompts built for real estate professionals.",
      },
      { property: "og:title", content: "All Resources — AI Academy for Realtors" },
      {
        property: "og:description",
        content: "Search and filter AI guides, tutorials, and prompts for real estate.",
      },
    ],
  }),
  component: ResourcesPage,
});

function ResourcesPage() {
  const search = Route.useSearch();
  const navigate = Route.useNavigate();

  const set = (patch: Record<string, string>) =>
    navigate({ search: (prev: Record<string, string>) => ({ ...prev, ...patch }) });

  const results = useMemo(() => filterResources(resources, search), [search]);

  const filtersActive =
    search.q !== "" ||
    search.category !== "all" ||
    search.level !== "all" ||
    search.tool !== "all" ||
    search.type !== "all";

  const clear = () =>
    navigate({
      search: { q: "", category: "all", level: "all", tool: "all", type: "all", sort: "newest" },
    });

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <header>
        <h1 className="text-3xl font-extrabold tracking-tight text-foreground">
          {filtersActive ? "Resources" : "All Resources"}
        </h1>
        <p className="mt-2 max-w-2xl text-base text-muted-foreground">
          Explore practical AI guides, tutorials, and prompts built for real estate
          professionals.
        </p>
      </header>

      <div className="mt-8 rounded-xl border border-border bg-card p-4">
        <label htmlFor="resource-search" className="sr-only">
          Search resources
        </label>
        <div className="relative">
          <Search
            className="pointer-events-none absolute left-4 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-muted-foreground"
            aria-hidden="true"
          />
          <input
            id="resource-search"
            type="search"
            value={search.q}
            onChange={(e) => set({ q: e.target.value })}
            placeholder="Search resources, prompts, or topics..."
            className="h-12 w-full rounded-md border border-input bg-background pl-11 pr-4 text-base outline-none placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring"
          />
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-3">
          <FilterSelect
            id="f-category"
            label="Category"
            value={search.category}
            onChange={(v) => set({ category: v })}
            options={[{ value: "all", label: "All Categories" }, ...categories.map((c) => ({ value: c, label: c }))]}
          />
          <FilterSelect
            id="f-level"
            label="Level"
            value={search.level}
            onChange={(v) => set({ level: v })}
            options={[{ value: "all", label: "All Levels" }, ...levels.map((l) => ({ value: l, label: l }))]}
          />
          <FilterSelect
            id="f-tool"
            label="Tool"
            value={search.tool}
            onChange={(v) => set({ tool: v })}
            options={[{ value: "all", label: "All Tools" }, ...allToolNames.map((t) => ({ value: t, label: t }))]}
          />
          <FilterSelect
            id="f-type"
            label="Resource Type"
            value={search.type}
            onChange={(v) => set({ type: v })}
            options={[{ value: "all", label: "All Types" }, ...resourceTypes.map((t) => ({ value: t, label: t }))]}
          />
          <FilterSelect
            id="f-sort"
            label="Sort"
            value={search.sort}
            onChange={(v) => set({ sort: v })}
            options={[
              { value: "newest", label: "Newest" },
              { value: "az", label: "A-Z" },
            ]}
          />
          {filtersActive && (
            <button
              type="button"
              onClick={clear}
              className="rounded-md border border-input px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              Clear Filters
            </button>
          )}
        </div>
      </div>

      <p className="mt-6 text-sm text-muted-foreground" aria-live="polite">
        {results.length} {results.length === 1 ? "resource" : "resources"}
      </p>

      {results.length === 0 ? (
        <EmptyState onClear={clear} />
      ) : (
        <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((r) => (
            <ResourceCard key={r.id} resource={r} />
          ))}
        </div>
      )}

      <p className="mt-10 text-sm text-muted-foreground">
        Looking for prompts only?{" "}
        <Link to="/prompts" className="font-medium text-brand hover:underline">
          Open the Prompt Library
        </Link>
        .
      </p>
    </div>
  );
}
