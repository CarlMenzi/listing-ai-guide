import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { resources } from "@/data/resources";
import { formatDate } from "@/lib/resource-utils";
import { LevelBadge, MetaBadge } from "@/components/site/Badges";

export const Route = createFileRoute("/whats-new")({
  head: () => ({
    meta: [
      { title: "What's New — AI Academy for Realtors" },
      {
        name: "description",
        content: "Recently added AI guides, tutorials, and prompts for real estate professionals.",
      },
      { property: "og:title", content: "What's New — AI Academy for Realtors" },
      {
        property: "og:description",
        content: "See the newest resources added to the AI Academy for Realtors.",
      },
    ],
  }),
  component: WhatsNew,
});

function WhatsNew() {
  const sorted = [...resources].sort((a, b) => b.createdAt.localeCompare(a.createdAt));

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-extrabold tracking-tight text-foreground">What's New</h1>
      <p className="mt-2 text-base text-muted-foreground">
        Recently added resources, newest first.
      </p>

      <ul className="mt-8 space-y-4">
        {sorted.map((r) => (
          <li
            key={r.id}
            className="group relative rounded-xl border border-border bg-card p-5 transition-all hover:-translate-y-0.5 hover:shadow-md"
          >
            <div className="flex flex-wrap items-center gap-2">
              {r.isNew && (
                <span className="rounded-md bg-primary px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-primary-foreground">
                  New
                </span>
              )}
              <MetaBadge>{r.category}</MetaBadge>
              <LevelBadge level={r.level} />
              <span className="ml-auto text-xs text-muted-foreground">
                Added {formatDate(r.createdAt)}
              </span>
            </div>
            <h2 className="mt-3 text-lg font-semibold text-foreground">
              <Link
                to="/resources/$slug"
                params={{ slug: r.slug }}
                className="after:absolute after:inset-0 focus-visible:outline-none"
              >
                {r.title}
              </Link>
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">{r.description}</p>
            <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-brand">
              Open Resource <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
