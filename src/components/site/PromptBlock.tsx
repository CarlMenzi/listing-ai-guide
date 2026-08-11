import { Check, Copy } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function useCopy() {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const t = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(t);
  }, [copied]);

  const copy = async (text: string) => {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(text);
      } else {
        const el = document.createElement("textarea");
        el.value = text;
        el.setAttribute("readonly", "");
        el.style.position = "fixed";
        el.style.opacity = "0";
        document.body.appendChild(el);
        el.select();
        document.execCommand("copy");
        document.body.removeChild(el);
      }
      setCopied(true);
    } catch {
      setCopied(false);
    }
  };

  return { copied, copy };
}

export function CopyButton({
  text,
  label = "Copy Prompt",
  className,
}: {
  text: string;
  label?: string;
  className?: string;
}) {
  const { copied, copy } = useCopy();
  return (
    <button
      type="button"
      onClick={() => copy(text)}
      aria-live="polite"
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        className,
      )}
    >
      {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
      {copied ? "Copied!" : label}
    </button>
  );
}

export function PromptBlock({
  title,
  description,
  content,
}: {
  title: string;
  description?: string;
  content: string;
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-muted/50">
      <div className="flex flex-wrap items-start justify-between gap-3 border-b border-border bg-card px-5 py-4">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
            Copy &amp; Paste Prompt
          </p>
          <h3 className="mt-1 text-sm font-semibold text-foreground">{title}</h3>
          {description && (
            <p className="mt-1 text-sm text-muted-foreground">{description}</p>
          )}
        </div>
        <CopyButton text={content} />
      </div>
      <pre className="max-h-[420px] overflow-auto whitespace-pre-wrap break-words px-5 py-4 font-mono text-[13px] leading-relaxed text-foreground">
        {content}
      </pre>
    </div>
  );
}
