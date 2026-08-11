import { cn } from "@/lib/utils";
import type { Level } from "@/data/types";

export function MetaBadge({
  children,
  variant = "default",
  className,
}: {
  children: React.ReactNode;
  variant?: "default" | "quiet";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md px-2 py-0.5 text-[11px] font-medium uppercase tracking-wide",
        variant === "default"
          ? "bg-secondary text-secondary-foreground"
          : "border border-border text-muted-foreground",
        className,
      )}
    >
      {children}
    </span>
  );
}

const levelStyles: Record<Level, string> = {
  Beginner: "bg-level-beginner-soft text-level-beginner",
  Intermediate: "bg-level-intermediate-soft text-level-intermediate",
  Advanced: "bg-level-advanced-soft text-level-advanced",
};

export function LevelBadge({ level, className }: { level: Level; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-md px-2 py-0.5 text-[11px] font-medium uppercase tracking-wide",
        levelStyles[level],
        className,
      )}
    >
      <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-current" />
      {level}
    </span>
  );
}
