import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { resources, categories, allToolNames } from "@/data/resources";
import { CopyButton } from "@/components/site/PromptBlock";
import { MetaBadge } from "@/components/site/Badges";
import { FilterSelect } from "./index";

export const Route = createFileRoute("/prompts")({
  head: () => ({
    meta: [
      { title: "Prompt Library — AI Academy for Realtors" },
      {
        name: "description",
        content: "Copy-ready AI prompts designed for everyday real estate tasks.",
      },
      { property: "og:title", content: "Prompt Library — AI Academy for Realtors" },
      {
        property: "og:description",
        content: "Copy-ready AI prompts for listings, marketing, and client communication.",
      },
    ],
  }),
  component: PromptLibrary,
});

const allPrompts = resources.flatMap((r) =>
  r.prompts.map((p) => ({ resource: r, prompt: p })),
);

function PromptLibrary() {
  const [q, setQ] = useState("");
  const [category, setCategory] = useState("all");
  const [tool, setTool] = useState("all");

  const results = useMemo(() => {
    const term = q.trim().toLowerCase();
    return allPrompts.filter(({ resource, prompt }) => {
      if (category !== "all" && resource.category !== category) return false;
      if (tool !== "all" && !resource.tools.includes(tool)) return false;
      if (!term) return true;
      return [
        prompt.title,
        prompt.description ?? "",
        prompt.content,
        resource.title,
        resource.category,
        ...resource.tags,
        ...resource.tools,
      ]
        .join(" ")
        .toLowerCase()
        .includes(term);
    });
  }, [q, category, tool]);

  const clear = () => {
    setQ("");
    setCategory("all");
    setTool("all");
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-extrabold tracking-tight text-foreground">Prompt Library</h1>
      <p className="mt-2 max-w-2xl text-base text-muted-foreground">
        Copy-ready AI prompts designed for everyday real estate tasks.
      </p>

      <div className="mt-8 rounded-xl border border-border bg-card p-4">
        <label htmlFor="prompt-search" className="sr-only">
          Search prompts
        </label>
        <div className="relative">
          <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            id="prompt-search"
            type="search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search prompts..."
            className="h-12 w-full rounded-md border border-input bg-background pl-11 pr-4 text-base outline-none focus-visible:ring-2 focus-visible:ring-ring"
          />
        </div>
        <div className="mt-4 flex flex-wrap gap-3">
          <FilterSelect
            id="p-category"
            label="Category"
            value={category}
            onChange={setCategory}
            options={[{ value: "all", label: "All Categories" }, ...categories.map((c) => ({ value: c, label: c }))]}
          />
          <FilterSelect
            id="p-tool"
            label="Tool"
            value={tool}
            onChange={setTool}
            options={[{ value: "all", label: "All Tools" }, ...allToolNames.map((t) => ({ value: t, label: t }))]}
          />
          {(q || category !== "all" || tool !== "all") && (
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
        {results.length} {results.length === 1 ? "prompt" : "prompts"}
      </p>

      {results.length === 0 ? (
        <div className="mt-4 rounded-xl border border-dashed border-border bg-card p-10 text-center">
          <p className="text-base font-semibold text-foreground">No prompts found</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Try another search or browse by category.
          </p>
        </div>
      ) : (
        <div className="mt-4 grid gap-6 lg:grid-cols-2">
          {results.map(({ resource, prompt }) => (
            <div
              key={resource.id + prompt.title}
              className="flex flex-col rounded-xl border border-border bg-card p-5 shadow-sm"
            >
              <div className="flex flex-wrap gap-2">
                <MetaBadge>{resource.category}</MetaBadge>
                <MetaBadge variant="quiet">{resource.tools.join(" · ")}</MetaBadge>
              </div>
              <h2 className="mt-3 text-base font-semibold text-foreground">
                <Link
                  to="/resources/$slug"
                  params={{ slug: resource.slug }}
                  className="hover:underline"
                >
                  {prompt.title}
                </Link>
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                {prompt.description ?? resource.description}
              </p>
              <pre className="mt-4 max-h-40 flex-1 overflow-auto whitespace-pre-wrap break-words rounded-lg border border-border bg-muted/50 p-4 font-mono text-[12px] leading-relaxed text-foreground">
                {prompt.content}
              </pre>
              <div className="mt-4 flex flex-wrap items-center gap-3">
                <CopyButton text={prompt.content} />
                <Link
                  to="/resources/$slug"
                  params={{ slug: resource.slug }}
                  className="text-sm font-medium text-brand hover:underline"
                >
                  Open resource
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
