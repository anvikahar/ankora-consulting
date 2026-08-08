"use client";
import { motion } from "framer-motion";
import { BarChart3, Compass, Lightbulb, Medal } from "lucide-react";
import { SectionHeading } from "./ui/SectionHeading";
const reasons=[[Compass,"One Connected Team","Design, development, creative and growth expertise working toward one clear outcome."],[Medal,"Built Around Your Brand","Thoughtful digital work that feels aligned with your goals, audience and identity."],[BarChart3,"Performance Minded","We use insight and measurement to keep improving the work that matters."],[Lightbulb,"Practical Delivery","Clear communication and useful solutions from the first idea through launch."]];
export function WhyChooseUs(){return <section id="why-us" className="why"><div className="particles"><i/><i/><i/><i/></div><div className="container"><SectionHeading dark label="THE ANKORA DIFFERENCE" title="Why Businesses Choose Ankora"/><div className="reasons-grid">{reasons.map(([I,t,d],i)=>{const Icon=I as typeof Compass;return <motion.article key={t as string} initial={{opacity:0,y:18}} whileInView={{opacity:1,y:0}} transition={{delay:i*.1}}><Icon/><h3>{t as string}</h3><p>{d as string}</p></motion.article>})}</div></div></section>}
