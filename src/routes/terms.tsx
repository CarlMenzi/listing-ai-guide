import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Support — AI Academy for Realtors" },
      {
        name: "description",
        content: "Terms of use and support information for the AI Academy for Realtors.",
      },
      { property: "og:title", content: "Terms & Support — AI Academy for Realtors" },
      { property: "og:description", content: "Terms of use and support contacts." },
    ],
  }),
  component: Terms,
});

function Terms() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-extrabold tracking-tight text-foreground">
        Terms &amp; Support
      </h1>
      <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground">
        <p>
          The AI Academy for Realtors is an internal resource center. Guides, prompts, and
          tool recommendations are provided for educational purposes and do not constitute
          legal, financial, or compliance advice.
        </p>
        <p>
          AI output must always be reviewed by a licensed professional before it is shared
          with a client or published. Verify every fact, figure, and property detail, and
          follow fair housing guidance and your brokerage's advertising policies.
        </p>
        <p>
          Do not enter client personal, financial, or transaction-identifying information
          into third-party AI tools.
        </p>
        <p>
          <span className="font-medium text-foreground">Support:</span> contact your
          brokerage marketing team to request a new resource, report an issue, or suggest a
          tool for the directory.
        </p>
      </div>
    </div>
  );
}
