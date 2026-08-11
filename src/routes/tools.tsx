import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink } from "lucide-react";
import { tools } from "@/data/tools";

export const Route = createFileRoute("/tools")({
  head: () => ({
    meta: [
      { title: "AI Tools for Realtors — AI Academy" },
      {
        name: "description",
        content:
          "AI tools for writing, design, research, content creation, and productivity in real estate.",
      },
      { property: "og:title", content: "AI Tools for Realtors" },
      {
        property: "og:description",
        content: "Explore vetted AI tools that help real estate professionals work faster.",
      },
    ],
  }),
  component: ToolsPage,
});

function ToolsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-extrabold tracking-tight text-foreground">
        AI Tools for Realtors
      </h1>
      <p className="mt-2 max-w-2xl text-base text-muted-foreground">
        Explore AI tools that can help with writing, design, research, content creation, and
        productivity.
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {tools.map((tool) => (
          <article
            key={tool.id}
            className="flex flex-col rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
          >
            <span
              aria-hidden="true"
              className="flex h-11 w-11 items-center justify-center rounded-lg bg-secondary text-sm font-bold text-secondary-foreground"
            >
              {tool.initials}
            </span>
            <h2 className="mt-4 text-lg font-semibold text-foreground">{tool.name}</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {tool.description}
            </p>
            <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Best for
            </p>
            <p className="text-sm text-foreground">{tool.bestFor}</p>
            <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Recommended use cases
            </p>
            <ul className="mt-1 space-y-1">
              {tool.useCases.map((u) => (
                <li key={u} className="flex gap-2 text-sm text-muted-foreground">
                  <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand" />
                  {u}
                </li>
              ))}
            </ul>
            <a
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              Open {tool.name} <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </article>
        ))}
      </div>
    </div>
  );
}
