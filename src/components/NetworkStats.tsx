const RELAY = "https://relay.crynux.io";

// ISR: re-fetch relay stats at most every 2 minutes.
const revalidate = 120;

type Stats = { tflops: number; nodes: number; tasks: number };

const fmt = (n: number) => Math.floor(n).toLocaleString("en-US");

async function getStats(): Promise<Stats | null> {
  try {
    const [network, nodes, tasks] = await Promise.all([
      fetch(`${RELAY}/v1/network`, { next: { revalidate } }).then((r) => r.json()),
      fetch(`${RELAY}/v1/network/nodes/number`, { next: { revalidate } }).then((r) => r.json()),
      fetch(`${RELAY}/v1/network/tasks/number`, { next: { revalidate } }).then((r) => r.json()),
    ]);
    return {
      tflops: network.data.tflops,
      nodes: nodes.data.all_nodes,
      tasks: tasks.data.total_tasks,
    };
  } catch {
    return null; // relay unreachable: keep placeholders
  }
}

export default async function NetworkStats() {
  const stats = await getStats();

  const items = [
    {
      label: "Computing power",
      value: stats ? fmt(stats.tflops) : "--,---",
      unit: "TFLOPS",
    },
    { label: "Nodes online", value: stats ? fmt(stats.nodes) : "-,---" },
    { label: "Tasks executed", value: stats ? fmt(stats.tasks) : "-,---,---" },
  ];

  return (
    <a
      href="https://portal.crynux.io/"
      target="_blank"
      rel="noreferrer"
      className="group mx-auto block max-w-7xl px-6 pb-8"
    >
      <div className="grid divide-y divide-foreground/[0.08] border-y border-foreground/[0.08] sm:grid-cols-3 sm:divide-x sm:divide-y-0">
        {items.map((item) => (
          <div key={item.label} className="py-8 sm:px-8 sm:first:pl-0">
            <div className="text-sm text-muted">{item.label}</div>
            <div className="mt-2 text-4xl font-bold tracking-tight tabular-nums">
              {item.value}
              {item.unit && (
                <span className="ml-2 text-base font-semibold text-muted">
                  {item.unit}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 text-sm text-muted transition-colors group-hover:text-primary">
        Live from the Crynux relay. View full network stats
      </div>
    </a>
  );
}
