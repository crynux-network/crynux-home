"use client";
// Temporary chooser page — visit /logo-preview, pick a variant, then delete this file.
import { useState } from "react";
import CrynuxLogo, { type LogoAnim } from "@/components/CrynuxLogo";

const variants: { id: LogoAnim; label: string }[] = [
  { id: "bloom", label: "1 · bloom (pop in place, left→right)" },
  { id: "centerOut", label: "2 · centerOut (ripple from middle)" },
  { id: "assemble", label: "3 · assemble (fly in & settle)" },
  { id: "rise", label: "4 · rise (fade up from below)" },
];

export default function LogoPreview() {
  const [k, setK] = useState(0);
  return (
    <div className="min-h-screen p-12">
      <button
        type="button"
        onClick={() => setK((n) => n + 1)}
        className="mb-10 rounded-xl bg-primary px-6 py-3 font-medium text-white hover:bg-accent"
      >
        Replay
      </button>
      <div className="grid grid-cols-2 gap-12">
        {variants.map((v) => (
          <figure key={v.id} className="flex flex-col items-center gap-4">
            <CrynuxLogo key={v.id + k} variant={v.id} className="w-80 h-auto" />
            <figcaption className="text-lg font-medium">{v.label}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
