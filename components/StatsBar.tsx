"use client";
import { motion } from "framer-motion";
import { Clock3, ShieldCheck, Smile, Users } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";
const icons=[Users,Smile,ShieldCheck,Clock3];
export function StatsBar(){return <section className="stats-bar"><div className="stats-bar-inner">{siteConfig.stats.map(({value,label},index)=>{const Icon=icons[index];return <motion.div key={label} initial={{opacity:0,y:12}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:index*.08}}><Icon/><strong>{value}</strong><span>{label}</span></motion.div>})}<em>Your Vision. My Code.<br/>Perfect Delivery.</em></div></section>}
