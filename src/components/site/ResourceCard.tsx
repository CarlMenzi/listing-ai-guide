import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { Resource } from "@/data/types";
import { LevelBadge, MetaBadge } from "./Badges";

export function ResourceCard({ resource }: { resource: Resource }) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-ring/40 hover:shadow-md focus-within:ring-2 focus-within:ring-ring">
      <div className="relative aspect-[3/2] overflow-hidden bg-muted">
        <img
          src={resource.thumbnail}
          alt={resource.thumbnailAlt}
          loading="lazy"
          width={1200}
          height={800}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        {resource.isNew && (
          <span className="absolute left-3 top-3 rounded-md bg-primary px-2 py-1 text-[11px] font-semibold uppercase tracking-wide text-primary-foreground">
            New
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex flex-wrap items-center gap-2">
          <MetaBadge>{resource.category}</MetaBadge>
          <LevelBadge level={resource.level} />
          <MetaBadge variant="quiet">{resource.resourceType}</MetaBadge>
        </div>

        <h3 className="mt-3 text-base font-semibold leading-snug tracking-tight text-foreground">
          <Link
            to="/resources/$slug"
            params={{ slug: resource.slug }}
            className="after:absolute after:inset-0 focus-visible:outline-none"
          >
            {resource.title}
          </Link>
        </h3>

        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
          {resource.description}
        </p>

        <div className="mt-4 flex items-center justify-between gap-3 border-t border-border pt-4">
          <span className="truncate text-xs font-medium text-muted-foreground">
            {resource.tools.join(" · ")}
          </span>
          <span className="inline-flex shrink-0 items-center gap-1 text-sm font-medium text-foreground transition-colors group-hover:text-accent-foreground">
            Open Resource
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </span>
        </div>
      </div>
    </article>
  );
}
