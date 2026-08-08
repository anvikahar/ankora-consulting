"use client";
import { motion } from "framer-motion";
export function SectionHeading({ label, title, description, dark = false }: {label: string; title: string; description?: string; dark?: boolean}) {
 return <motion.div className={`section-heading ${dark ? "dark" : ""}`} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .55 }}>
  <p className="eyebrow">{label}</p><h2>{title}</h2>{description && <p className="section-description">{description}</p>}
 </motion.div>;
}
