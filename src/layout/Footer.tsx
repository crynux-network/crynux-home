const columns = [
  {
    title: "Network",
    links: [
      {
        label: "Run a node",
        href: "https://docs.crynux.io/node-hosting/start-a-node",
      },
      { label: "Stake to a node", href: "https://portal.crynux.io/staking" },
      { label: "Portal", href: "https://portal.crynux.io" },
    ],
  },
  {
    title: "Developers",
    links: [
      {
        label: "Build apps",
        href: "https://crynux-as.xyz",
      },
      { label: "Documentation", href: "https://docs.crynux.io" },
    ],
  },
  {
    title: "Community",
    links: [
      { label: "GitHub", href: "https://github.com/crynux-network" },
      { label: "Discord", href: "https://discord.gg/Ug2AHUbrrm" },
      { label: "X", href: "https://x.com/crynuxio" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-foreground/[0.08] bg-surface/60">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-[1fr_auto] md:gap-24">
        <div>
          <div className="flex items-center gap-2.5">
            {/* biome-ignore lint/performance/noImgElement: static svg */}
            <img src="/crynux_logo.svg" alt="Crynux" className="h-8 w-auto" />
            <span className="text-xl font-bold tracking-tight">Crynux</span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
            Decentralized orchestration layer on EdgeAI. Permissionless,
            trustless, and built for everyone.
          </p>
          <p className="mt-8 text-xs text-muted">
            &copy; 2023-2026 Crynux. All rights reserved.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 sm:gap-16">
          {columns.map((col) => (
            <div key={col.title}>
              <div className="text-sm font-semibold">{col.title}</div>
              <ul className="mt-4 space-y-3 text-sm text-muted">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      target="_blank"
                      rel="noreferrer"
                      className="transition-colors hover:text-foreground"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
