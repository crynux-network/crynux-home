import { Code2, Coins, Server } from "lucide-react";
import type { CSSProperties } from "react";
import { shapes } from "@/components/crynux-shards";
import Reveal from "@/components/Reveal";

const paths = [
  {
    icon: Server,
    title: "Start a node",
    body: "Run the node app on your GPU and earn CNX rewards for the compute you contribute.",
    cta: "Run a node",
    href: "https://docs.crynux.io/node-hosting/start-a-node",
    featured: false,
  },
  {
    icon: Coins,
    title: "Stake to a node",
    body: "No hardware required. Stake CNX to a node operator and share in the rewards they earn.",
    cta: "Stake now",
    href: "https://portal.crynux.io/staking",
    featured: true,
  },
  {
    icon: Code2,
    title: "Use the API",
    body: "Build apps on production-ready, decentralized AI inference. Everything as an API.",
    cta: "Start building",
    href: "https://crynux-as.xyz",
    featured: false,
  },
];

export default function GetStarted() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-24 lg:pb-32">
      <Reveal>
        <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl">
          Join the Crynux mainnet
        </h2>
        <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted">
          Contribute compute, stake to a node, or build on the network.
        </p>
      </Reveal>
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {paths.map((p, i) => {
          const Icon = p.icon;
          return (
            <Reveal key={p.title} delay={i * 0.08} className="h-full">
              {/* hairline shell: gradient for the featured card, plain for the rest */}
              <div
                className={`h-full rounded-[2rem] p-px transition-colors duration-300 ${
                  p.featured
                    ? "bg-gradient-to-br from-accent/60 via-primary/50 to-secondary/60"
                    : "bg-foreground/[0.08] hover:bg-foreground/[0.18]"
                }`}
              >
                <a
                  href={p.href}
                  target="_blank"
                  rel="noreferrer"
                  className="gs-card group relative flex h-full flex-col overflow-hidden rounded-[calc(2rem-1px)] bg-surface p-8"
                >
                  <span
                    aria-hidden
                    className="card-sheen pointer-events-none absolute inset-0 -translate-x-full bg-[linear-gradient(105deg,transparent_30%,rgba(10,169,252,0.05)_45%,rgba(59,219,254,0.04)_55%,transparent_70%)]"
                  />
                  {p.featured && (
                    <svg
                      aria-hidden="true"
                      role="presentation"
                      viewBox="0 0 119.38 82.691332"
                      className="shard-cluster pointer-events-none absolute right-6 bottom-6 w-28"
                    >
                      {shapes.map((s) => {
                        const style = {
                          "--sx": `${s.c.ox}px`,
                          "--sy": `${s.c.oy}px`,
                          transitionDelay: `${s.c.rc * 30}ms`,
                        } as CSSProperties;
                        return s.type === "path" ? (
                          <path key={s.d} d={s.d} fill={s.fill} style={style} />
                        ) : (
                          <polygon
                            key={s.points}
                            points={s.points}
                            fill={s.fill}
                            style={style}
                          />
                        );
                      })}
                    </svg>
                  )}
                  <div className="relative flex flex-1 flex-col">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <Icon size={22} strokeWidth={1.75} />
                    </div>
                    <div className="mt-6 text-xl font-bold tracking-tight">
                      {p.title}
                    </div>
                    <p className="mt-3 flex-1 leading-relaxed text-muted">
                      {p.body}
                    </p>
                    <div className="mt-6 flex items-center gap-2 font-semibold text-primary">
                      {p.cta}
                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        &rarr;
                      </span>
                    </div>
                  </div>
                </a>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
