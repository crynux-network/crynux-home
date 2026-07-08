import CrynuxLogo from "@/components/CrynuxLogo";
import Reveal from "@/components/Reveal";

export default function Features() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
      <Reveal>
        <h2 className="max-w-2xl text-4xl font-extrabold tracking-tight md:text-5xl">
          Permissionless. Trustless. Fast.
        </h2>
      </Reveal>
      <div className="mt-14 grid gap-5 lg:grid-cols-12">
        {/* vssML: the hero cell */}
        <Reveal className="lg:col-span-7">
          <div className="relative h-full overflow-hidden rounded-[2rem] border border-primary/15 bg-gradient-to-br from-primary/[0.08] via-secondary/[0.06] to-transparent p-8 md:p-12">
            <CrynuxLogo
              className="pointer-events-none absolute -right-10 -bottom-10 w-64 opacity-[0.07]"
              variant="rise"
            />
            <div className="text-2xl font-bold tracking-tight">vssML</div>
            <p className="mt-4 max-w-md leading-relaxed text-muted">
              A consensus protocol built on Zero-Knowledge Proofs and Verifiable
              Random Functions. Computation stays correct and the network keeps
              running even under extreme malicious conditions, with Sybil-attack
              resistance built in.
            </p>
          </div>
        </Reveal>
        <div className="grid gap-5 lg:col-span-5">
          <Reveal delay={0.08}>
            <div className="rounded-[2rem] border border-foreground/[0.08] bg-surface p-8">
              <div className="text-2xl font-bold tracking-tight">
                Scales to millions
              </div>
              <p className="mt-3 leading-relaxed text-muted">
                No signup, no whitelist. Install the node app and you are
                already powering thousands of applications with AI.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.16}>
            <div className="rounded-[2rem] border border-foreground/[0.08] bg-gradient-to-br from-surface to-secondary/[0.08] p-8">
              <div className="text-2xl font-bold tracking-tight">
                ~10% consensus overhead
              </div>
              <p className="mt-3 leading-relaxed text-muted">
                Speed that rivals centralized platforms, while staying fully
                decentralized and permissionless.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
