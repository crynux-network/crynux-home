"use client";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useReducedMotion,
} from "motion/react";
import { useRef } from "react";

// ponytail: JS marquee instead of CSS animation-play-state, which snaps back
// a few px on pause (compositor/main-thread desync in Chromium)
export default function Marquee({
  children,
  speed = 60, // px per second
  className = "",
}: {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}) {
  const x = useMotionValue(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const hovered = useRef(false);
  const velocity = useRef(speed);
  const reduce = useReducedMotion();

  useAnimationFrame((_, delta) => {
    if (reduce || !trackRef.current) return;
    // ease velocity toward 0 on hover, back to full speed on leave
    const target = hovered.current ? 0 : speed;
    velocity.current += (target - velocity.current) * Math.min(1, delta / 250);
    const half = trackRef.current.scrollWidth / 2;
    let next = x.get() - velocity.current * (delta / 1000);
    if (half > 0 && next <= -half) next += half;
    x.set(next);
  });

  return (
    // biome-ignore lint/a11y/noStaticElementInteractions: hover only slows a decorative marquee
    <div
      className={`overflow-hidden ${className}`}
      onMouseEnter={() => {
        hovered.current = true;
      }}
      onMouseLeave={() => {
        hovered.current = false;
      }}
    >
      <motion.div
        ref={trackRef}
        style={{ x }}
        className="flex w-max items-center"
      >
        {children}
      </motion.div>
    </div>
  );
}
