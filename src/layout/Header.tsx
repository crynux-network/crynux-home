import ThemeToggle from "@/components/ThemeToggle";
import Button from "@/components/ui/button";

const links = [
  {
    label: "Apps",
    href: "https://docs.crynux.io/application-development/how-to-run-llm-using-crynux-network",
  },
  { label: "Nodes", href: "https://docs.crynux.io/node-hosting/start-a-node" },
  { label: "Docs", href: "https://docs.crynux.io" },
  { label: "Blog", href: "https://blog.crynux.io" },
];

export default function Header() {
  return (
    <header className="fixed top-4 inset-x-0 z-40 px-4">
      <div className="mx-auto flex h-16 max-w-4xl items-center justify-between rounded-full border border-foreground/[0.08] bg-surface/70 pl-5 pr-2.5 shadow-[0_8px_32px_-12px_rgba(16,21,27,0.15)] backdrop-blur-xl">
        <a href="/" className="flex items-center gap-2.5">
          {/* biome-ignore lint/performance/noImgElement: static svg */}
          <img src="/crynux_logo.svg" alt="Crynux" className="h-7 w-auto" />
          <span className="text-lg font-bold tracking-tight">Crynux</span>
        </a>
        <nav className="hidden items-center gap-7 text-sm font-medium text-muted md:flex">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-1.5">
          <ThemeToggle />
          <Button
            href="https://portal.crynux.io"
            className="px-5 py-2.5 text-sm"
          >
            Portal
          </Button>
        </div>
      </div>
    </header>
  );
}
