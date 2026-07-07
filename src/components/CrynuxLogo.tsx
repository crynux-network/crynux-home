"use client";
import { motion, type Variants } from "motion/react";

import { type Meta, shapes } from "./crynux-shards";
export type LogoAnim = "bloom" | "centerOut" | "assemble" | "rise";

const STEP = 0.1;
const spring = { type: "spring", stiffness: 320, damping: 22 } as const;

const VARIANTS: Record<LogoAnim, Variants> = {
  // 1. each shard pops in place, swept left-to-right
  bloom: {
    hidden: { opacity: 0, scale: 0.4 },
    visible: (c: Meta) => ({
      opacity: 1,
      scale: 1,
      transition: { ...spring, delay: c.r * STEP },
    }),
  },
  // 2. same pop, rippling out from the center
  centerOut: {
    hidden: { opacity: 0, scale: 0.4 },
    visible: (c: Meta) => ({
      opacity: 1,
      scale: 1,
      transition: { ...spring, delay: c.rc * STEP },
    }),
  },
  // 3. shards fly in from outside and settle into place
  assemble: {
    hidden: (c: Meta) => ({ opacity: 0, scale: 0.8, x: c.ox, y: c.oy }),
    visible: (c: Meta) => ({
      opacity: 1,
      scale: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 18,
        delay: c.rc * 0.04,
      },
    }),
  },
  // 4. shards fade up from below, left-to-right
  rise: {
    hidden: { opacity: 0, y: 7 },
    visible: (c: Meta) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut", delay: c.r * STEP },
    }),
  },
};

export default function CrynuxLogo({
  className = "",
  variant = "bloom",
}: {
  className?: string;
  variant?: LogoAnim;
}) {
  const v = VARIANTS[variant];
  return (
    <motion.svg
      viewBox="0 0 119.38 82.691332"
      className={className}
      initial="hidden"
      animate="visible"
      role="img"
      aria-label="Crynux logo"
    >
      <title>Crynux logo</title>
      {shapes.map((s) =>
        s.type === "path" ? (
          <motion.path
            key={s.d}
            d={s.d}
            fill={s.fill}
            variants={v}
            custom={s.c}
            style={{ transformBox: "fill-box", transformOrigin: "center" }}
          />
        ) : (
          <motion.polygon
            key={s.points}
            points={s.points}
            fill={s.fill}
            variants={v}
            custom={s.c}
            style={{ transformBox: "fill-box", transformOrigin: "center" }}
          />
        ),
      )}
    </motion.svg>
  );
}
