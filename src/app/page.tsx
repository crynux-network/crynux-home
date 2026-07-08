import AiFi from "@/sections/AiFi";
import Features from "@/sections/Features";
import GetStarted from "@/sections/GetStarted";
import Hero from "@/sections/Hero";
import Partners from "@/sections/Partners";
import Roadmap from "@/sections/Roadmap";
import Services from "@/sections/Services";

export default function Home() {
  return (
    <>
      <Hero />
      <Partners />
      <Features />
      <Services />
      <AiFi />
      <Roadmap />
      <GetStarted />
    </>
  );
}
