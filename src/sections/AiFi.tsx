import FancyText from "@/components/FancyText";
import Reveal from "@/components/Reveal";

const items = [
  {
    title: "On chain, end to end",
    body: "Every transaction, from inference to fine-tuning, executes transparently on the blockchain. Revenue flows to model token holders directly, with no intermediaries.",
  },
  {
    title: "AI assets",
    body: "Tokenize models and get community backing from the token market. Contribute data to training and earn rewards, with data protected by Federated Learning and Multi-Party Computation.",
  },
  {
    title: "Modular by design",
    body: "Deploy AI-Fi apps alongside the Crynux blockchain, or connect AI assets to existing DeFi apps on other chains through cross-chain communication.",
  },
];

export default function AiFi() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
      <div className="grid gap-12 lg:grid-cols-[5fr_7fr] lg:gap-20">
        <Reveal>
          <h2 className="text-4xl font-extrabold tracking-tight text-balance md:text-5xl lg:sticky lg:top-32">
            An <FancyText>AI-Fi</FancyText> ecosystem like never before
          </h2>
        </Reveal>
        <div className="space-y-5">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <div className="rounded-[2rem] border border-foreground/[0.08] bg-surface p-8 transition-shadow duration-300 hover:shadow-[0_16px_40px_-20px_rgba(29,73,145,0.25)]">
                <div className="text-xl font-bold tracking-tight">
                  {item.title}
                </div>
                <p className="mt-3 leading-relaxed text-muted">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
