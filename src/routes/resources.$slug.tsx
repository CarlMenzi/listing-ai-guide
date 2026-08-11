import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Download, ExternalLink } from "lucide-react";
import { resources, getResourceBySlug } from "@/data/resources";
import type { Resource } from "@/data/types";
import { toolByName } from "@/data/tools";
import { getRelated } from "@/lib/resource-utils";
import { LevelBadge, MetaBadge } from "@/components/site/Badges";
import { PromptBlock } from "@/components/site/PromptBlock";
import { ResourceCard } from "@/components/site/ResourceCard";

export const Route = createFileRoute("/resources/$slug")({
  loader: ({ params }) => {
    const resource = getResourceBySlug(params.slug);
    if (!resource) throw notFound();
    return { resource };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Resource not found — AI Academy for Realtors" }, { name: "robots", content: "noindex" }],
      };
    }
    const r = loaderData.resource;
    return {
      meta: [
        { title: `${r.title} — AI Academy for Realtors` },
        { name: "description", content: r.description },
        { property: "og:title", content: r.title },
        { property: "og:description", content: r.description },
      ],
    };
  },
  notFoundComponent: ResourceNotFound,
  component: ResourceDetail,
});

function ResourceNotFound() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-24 text-center">
      <h1 className="text-2xl font-bold text-foreground">Resource not found</h1>
      <p className="mt-2 text-muted-foreground">
        This resource may have been moved or renamed.
      </p>
      <Link
        to="/resources"
        className="mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
      >
        Browse all resources
      </Link>
    </div>
  );
}

function ResourceDetail() {
  const { resource } = Route.useLoaderData() as { resource: Resource };
  const related = getRelated(resources, resource, 3);

  return (
    <article className="pb-16">
      <div className="border-b border-border bg-card">
        <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
          <Link
            to="/resources"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" /> All resources
          </Link>
          <div className="mt-5 flex flex-wrap gap-2">
            <MetaBadge>{resource.category}</MetaBadge>
            <LevelBadge level={resource.level} />
            <MetaBadge variant="quiet">{resource.resourceType}</MetaBadge>
          </div>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            {resource.title}
          </h1>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
            {resource.description}
          </p>
          <p className="mt-4 text-sm text-muted-foreground">
            <span className="font-medium text-foreground">Recommended tools:</span>{" "}
            {resource.tools.join(", ")}
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-4xl space-y-12 px-4 py-10 sm:px-6 lg:px-8">
        <section>
          <h2 className="text-xl font-bold tracking-tight text-foreground">
            What you'll learn
          </h2>
          <p className="mt-3 leading-relaxed text-muted-foreground">{resource.overview}</p>
          <ul className="mt-4 space-y-2">
            {resource.whatYouWillLearn.map((item) => (
              <li key={item} className="flex gap-3 text-sm text-foreground">
                <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold tracking-tight text-foreground">
            What you'll need
          </h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {resource.whatYouNeed.map((item) => (
              <li
                key={item}
                className="rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground"
              >
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold tracking-tight text-foreground">
            Step-by-step guide
          </h2>
          <ol className="mt-5 space-y-5">
            {resource.steps.map((step) => (
              <li
                key={step.number}
                className="rounded-xl border border-border bg-card p-5 sm:p-6"
              >
                <p className="text-xs font-semibold uppercase tracking-widest text-brand">
                  Step {String(step.number).padStart(2, "0")}
                </p>
                <h3 className="mt-2 text-lg font-semibold text-foreground">{step.title}</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">{step.content}</p>
                {step.images?.map((img) => (
                  <img
                    key={img.src}
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="mt-4 w-full rounded-lg object-cover"
                  />
                ))}
              </li>
            ))}
          </ol>
        </section>

        {resource.prompts.length > 0 && (
          <section>
            <h2 className="text-xl font-bold tracking-tight text-foreground">Prompts</h2>
            <div className="mt-5 space-y-6">
              {resource.prompts.map((p) => (
                <PromptBlock
                  key={p.title}
                  title={p.title}
                  description={p.description}
                  content={p.content}
                />
              ))}
            </div>
          </section>
        )}

        {resource.examples && resource.examples.length > 0 && (
          <section>
            <h2 className="text-xl font-bold tracking-tight text-foreground">Examples</h2>
            {resource.examples.map((ex) => (
              <div key={ex.label} className="mt-5 grid gap-5 sm:grid-cols-2">
                {[ex.before, ex.after].map((img) => (
                  <figure key={img.src + img.alt} className="overflow-hidden rounded-xl border border-border bg-card">
                    <img
                      src={img.src}
                      alt={img.alt}
                      loading="lazy"
                      className="aspect-[4/5] w-full object-cover"
                    />
                    <figcaption className="px-4 py-3 text-sm text-muted-foreground">
                      {img.caption}
                    </figcaption>
                  </figure>
                ))}
              </div>
            ))}
          </section>
        )}

        <section>
          <h2 className="text-xl font-bold tracking-tight text-foreground">
            Recommended tools
          </h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {resource.recommendedTools.map((name) => {
              const tool = toolByName(name);
              if (!tool) return null;
              return (
                <div key={tool.id} className="rounded-xl border border-border bg-card p-5">
                  <h3 className="text-base font-semibold text-foreground">{tool.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{tool.description}</p>
                  <a
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 rounded-md border border-input px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    Open {tool.name} <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              );
            })}
          </div>
        </section>

        {resource.pdfUrl && (
          <section>
            <h2 className="text-xl font-bold tracking-tight text-foreground">Download guide</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Take this guide with you as a printable PDF.
            </p>
            <a
              href={resource.pdfUrl}
              download
              className="mt-4 inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <Download className="h-4 w-4" /> Download PDF
            </a>
          </section>
        )}

        {related.length > 0 && (
          <section>
            <div className="flex flex-wrap items-end justify-between gap-3">
              <h2 className="text-xl font-bold tracking-tight text-foreground">
                You may also like
              </h2>
              <Link
                to="/resources"
                className="inline-flex items-center gap-1 text-sm font-medium text-brand hover:underline"
              >
                All resources <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="mt-5 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((r) => (
                <ResourceCard key={r.id} resource={r} />
              ))}
            </div>
          </section>
        )}
      </div>
    </article>
  );
}
