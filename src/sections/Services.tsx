import { ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";

const services = [
  {
    title: "Model as a Service",
    body: "Hosting, inference, fine-tuning, training. Everything as an API, no local hardware required.",
  },
  {
    title: "All modalities supported",
    body: "Text, image, music and video models. From 405B parameters down to n-bit quantization.",
  },
  {
    title: "On edge, for edge",
    body: "Computing power composed entirely of edge devices. Mobile devices run models beyond their own capabilities.",
  },
];

export default function Services() {
  return (
    <section className="bg-ink text-white dark:border-y dark:border-white/10">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-[5fr_7fr] lg:py-32">
        <Reveal>
          <h2 className="text-4xl font-extrabold tracking-tight text-balance md:text-5xl">
            Production-ready AI cloud, on the edge
          </h2>
          <a
            href="https://docs.crynux.io/application-development/how-to-run-llm-using-crynux-network"
            target="_blank"
            rel="noreferrer"
            className="group mt-8 inline-flex items-center gap-3 rounded-full bg-primary px-6 py-3 font-semibold text-white transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-secondary hover:text-ink active:scale-[0.98]"
          >
            Use the API today
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15 transition-transform duration-300 group-hover:translate-x-0.5">
              <ArrowRight size={16} strokeWidth={2} />
            </span>
          </a>
        </Reveal>
        <div className="divide-y divide-white/10">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08}>
              <div className="py-8 first:pt-0 last:pb-0">
                <div className="text-xl font-bold tracking-tight">
                  {s.title}
                </div>
                <p className="mt-2 max-w-lg leading-relaxed text-white/60">
                  {s.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
