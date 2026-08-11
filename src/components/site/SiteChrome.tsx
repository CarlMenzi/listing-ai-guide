import { Link, useNavigate, useRouterState } from "@tanstack/react-router";
import { Menu, Search, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", label: "Home" },
  { to: "/resources", label: "Resources" },
  { to: "/prompts", label: "Prompt Library" },
  { to: "/tools", label: "Tools" },
  { to: "/whats-new", label: "What's New" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [term, setTerm] = useState("");
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    setOpen(false);
    setSearchOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (searchOpen) inputRef.current?.focus();
  }, [searchOpen]);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate({ to: "/resources", search: { q: term, category: "all", level: "all", tool: "all", type: "all", sort: "newest" } });
    setTerm("");
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/75">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-4 px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
          <span className="flex h-9 w-9 items-center justify-center rounded-md bg-primary text-xs font-semibold tracking-tight text-primary-foreground">
            AI
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-semibold tracking-tight text-foreground">
              AI Academy for Realtors
            </span>
            <span className="hidden text-xs text-muted-foreground sm:block">
              Practical AI resources for real estate professionals
            </span>
          </span>
        </Link>

        <nav aria-label="Main" className="ml-auto hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              activeProps={{ className: "text-foreground bg-secondary" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2 lg:ml-2">
          <form onSubmit={submit} className="hidden items-center md:flex" role="search">
            <label htmlFor="header-search" className="sr-only">
              Search resources
            </label>
            <div className="relative">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                id="header-search"
                value={term}
                onChange={(e) => setTerm(e.target.value)}
                placeholder="Search resources..."
                className="h-9 w-44 rounded-md border border-input bg-card pl-9 pr-3 text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground focus:w-60 focus-visible:ring-2 focus-visible:ring-ring lg:w-52"
              />
            </div>
          </form>

          <button
            type="button"
            onClick={() => setSearchOpen((v) => !v)}
            aria-expanded={searchOpen}
            aria-label="Toggle search"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-input text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring md:hidden"
          >
            <Search className="h-4 w-4" />
          </button>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Toggle navigation menu"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-input text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring lg:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {searchOpen && (
        <div className="border-t border-border px-4 py-3 md:hidden">
          <form onSubmit={submit} role="search">
            <label htmlFor="mobile-search" className="sr-only">
              Search resources
            </label>
            <div className="relative">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                ref={inputRef}
                id="mobile-search"
                value={term}
                onChange={(e) => setTerm(e.target.value)}
                placeholder="Search resources, prompts, or topics..."
                className="h-11 w-full rounded-md border border-input bg-card pl-9 pr-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
              />
            </div>
          </form>
        </div>
      )}

      <div className={cn("border-t border-border lg:hidden", open ? "block" : "hidden")}>
        <nav aria-label="Mobile" className="mx-auto max-w-7xl px-4 py-2">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              className="block rounded-md px-3 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              activeProps={{ className: "text-foreground bg-secondary" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-8 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <div>
          <p className="text-sm font-semibold text-foreground">AI Academy for Realtors</p>
          <p className="text-sm text-muted-foreground">
            Practical AI resources for real estate professionals.
          </p>
        </div>
        <nav aria-label="Footer" className="flex gap-6 text-sm">
          <Link to="/terms" className="text-muted-foreground transition-colors hover:text-foreground">
            Terms &amp; Support
          </Link>
          <Link to="/privacy" className="text-muted-foreground transition-colors hover:text-foreground">
            Privacy Policy
          </Link>
        </nav>
      </div>
    </footer>
  );
}
