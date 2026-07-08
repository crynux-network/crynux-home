import Reveal from "@/components/Reveal";

type Status = "released" | "current" | "upcoming";

const milestones: {
  name: string;
  status: Status;
  items: string[];
  highlight?: string;
}[] = [
  {
    name: "Hydrogen",
    status: "released",
    items: ["Consensus protocol", "On-chain orchestration", "Stable Diffusion"],
  },
  {
    name: "Helium",
    status: "released",
    items: [
      "Decentralized edge inference engine",
      "GPT / LLM inference",
      "Incentivized testnet",
    ],
  },
  {
    name: "Lithium",
    status: "current",
    highlight: "The first mainnet",
    items: [
      "Verifiable secret sampling",
      "Model fine-tuning and training",
      "Multi-chain architecture",
      "The first mainnet",
    ],
  },
  {
    name: "Beryllium",
    status: "upcoming",
    items: [
      "Decentralized AI workflow",
      "Model tokenization",
      "Multi-modality support",
      "Cross-chain model assets",
    ],
  },
];

const statusLabel: Record<Status, string> = {
  released: "Released",
  current: "Current",
  upcoming: "Upcoming",
};

export default function Roadmap() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
      <Reveal>
        <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl">
          Roadmap
        </h2>
      </Reveal>
      <div className="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-0">
        {milestones.map((m, i) => (
          <Reveal key={m.name} delay={i * 0.08} className="lg:pr-8">
            <div className="relative border-t-2 border-foreground/10 pt-6 lg:border-t-0 lg:pt-0">
              {/* timeline dot conveys milestone status */}
              <div className="hidden items-center lg:flex">
                <span
                  className={`h-3 w-3 rounded-full ${
                    m.status === "upcoming"
                      ? "bg-foreground/20"
                      : m.status === "current"
                        ? "bg-primary ring-4 ring-primary/20"
                        : "bg-accent"
                  }`}
                />
                <span className="ml-3 h-px flex-1 bg-foreground/10" />
              </div>
              <div className="lg:mt-6">
                <div className="text-sm font-medium text-muted">
                  {statusLabel[m.status]}
                </div>
                <div className="mt-1 text-2xl font-bold tracking-tight">
                  {m.name}
                </div>
                <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted">
                  {m.items.map((item) =>
                    item === m.highlight ? (
                      <li key={item} className="font-semibold text-primary">
                        {item}
                      </li>
                    ) : (
                      <li key={item}>{item}</li>
                    ),
                  )}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
