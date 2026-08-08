"use client";
import { motion } from "framer-motion";
import { AnimatedCounter } from "./ui/AnimatedCounter";
const stats = [[10,"+","Years Experience"],[150,"+","Businesses Supported"],[25,"+","Digital Specialists"],[95,"%","Client Satisfaction"]] as const;
export function Stats(){return <section className="stats"><div className="container stats-grid">{stats.map(([v,s,l],i)=><motion.div key={l} className="stat" initial={{opacity:0,y:14}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.1}}><strong><AnimatedCounter value={v} suffix={s}/></strong><span>{l}</span></motion.div>)}</div></section>}
