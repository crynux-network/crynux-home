import Marquee from "@/components/Marquee";

const partners = [
  ["nyu", "NYU"],
  ["xar", "XAR"],
  ["invoiceview-ai", "InvoiceView"],
  ["camel-ai", "CamelAI"],
  ["openlayer", "OpenLayer"],
  ["mit", "MIT"],
  ["cake", "Cake"],
  ["cam", "Cambridge"],
  ["irys", "Irys"],
  ["near", "Near"],
  ["aurora", "Aurora"],
  ["aggregata", "Aggregata"],
] as const;

export default function Partners() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center text-sm font-medium text-muted">
          Trusted by teams and institutions across AI and web3
        </div>
      </div>
      <Marquee className="mt-10 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        {[0, 1].map((copy) => (
          <div
            key={copy}
            className="flex items-center"
            aria-hidden={copy === 1}
          >
            {partners.map(([slug, name]) => (
              <span
                key={`${copy}-${slug}`}
                className="group relative mx-10 inline-block"
              >
                {/* biome-ignore lint/performance/noImgElement: small static logos */}
                <img
                  src={`/partners/${slug}-gray.png`}
                  alt={name}
                  className="h-8 w-auto opacity-70 transition-opacity duration-300 group-hover:opacity-0 dark:invert"
                />
                {/* biome-ignore lint/performance/noImgElement: small static logos */}
                <img
                  src={`/partners/${slug}.png`}
                  alt=""
                  className="absolute inset-0 h-8 w-auto opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
              </span>
            ))}
          </div>
        ))}
      </Marquee>
    </section>
  );
}
