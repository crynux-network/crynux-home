import CrynuxLogo from "@/components/CrynuxLogo";
import FancyText from "@/components/FancyText";
import NetworkStats from "@/components/NetworkStats";
import Reveal from "@/components/Reveal";
import Button from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* soft brand glow behind the headline */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[36rem] w-[64rem] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(10,169,252,0.14),transparent)]"
      />
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 pt-40 pb-20 lg:grid-cols-[7fr_5fr] lg:pt-48">
        <Reveal>
          <h1 className="text-5xl font-extrabold tracking-tight text-balance md:text-6xl lg:text-7xl">
            Decentralized Orchestration Layer on <FancyText>EdgeAI</FancyText>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            Permissionless AI inference, fine-tuning and training, powered by a
            global network of edge devices.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="https://crynux-as.xyz">
              Start building
            </Button>
            <Button
              variant="secondary"
              href="https://docs.crynux.io/node-hosting/start-a-node"
            >
              Run a node
            </Button>
            <Button
              variant="secondary"
              href="https://portal.crynux.io/staking"
            >
              Stake to a node
            </Button>
          </div>
        </Reveal>
        <CrynuxLogo
          className="mx-auto w-64 max-w-full sm:w-80 lg:w-full"
          variant="assemble"
        />
      </div>
      <NetworkStats />
    </section>
  );
}
