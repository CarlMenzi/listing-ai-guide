import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — AI Academy for Realtors" },
      {
        name: "description",
        content: "How the AI Academy for Realtors handles data and third-party AI tools.",
      },
      { property: "og:title", content: "Privacy Policy — AI Academy for Realtors" },
      { property: "og:description", content: "Data handling and third-party AI tool guidance." },
    ],
  }),
  component: Privacy,
});

function Privacy() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-extrabold tracking-tight text-foreground">Privacy Policy</h1>
      <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground">
        <p>
          This resource center does not require an account and does not collect personal
          information from you. Searching, filtering, and copying prompts all happen in your
          browser.
        </p>
        <p>
          External AI tools linked from this site are operated by third parties and are
          governed by their own privacy policies and terms. Review them before uploading any
          photo, document, or client information.
        </p>
        <p>
          Treat anything you paste into a third-party AI tool as potentially retained. Never
          include client names, addresses tied to private details, financial data, or
          contract documents.
        </p>
      </div>
    </div>
  );
}
