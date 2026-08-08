"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Button } from "./ui/Button";
export function CTA(){return <section className="cta-section"><div className="cta-grid"/><motion.div className="cta-shape" animate={{rotate:360}} transition={{duration:30,repeat:Infinity,ease:"linear"}}/><div className="container cta-content"><p className="eyebrow">START A CONVERSATION</p><h2>Ready to Build What&apos;s Next?</h2><p>Tell us about your software, mobile app, audio video or digital signage project.</p><div><a href="#contact"><Button arrow>Start a Project</Button></a><a href="#contact" className="text-button light">Contact Us <ArrowUpRight size={16}/></a></div></div></section>}
