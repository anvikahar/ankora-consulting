"use client";
import { animate, motion, useInView, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
export function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
 const ref = useRef<HTMLSpanElement>(null); const inView = useInView(ref, { once: true }); const count = useMotionValue(0); const rounded = useTransform(count, v => Math.round(v));
 useEffect(() => { if (inView) { const c = animate(count, value, { duration: 1.5, ease: "easeOut" }); return c.stop; } }, [inView, value, count]);
 return <span ref={ref}><motion.span>{rounded}</motion.span>{suffix}</span>;
}
