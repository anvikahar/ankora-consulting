"use client";
import { motion } from "framer-motion";
import { ArrowRight, Braces, Check, Clapperboard } from "lucide-react";

const services = [
  { icon: Braces, type: "software", title: "SOFTWARE & WEB DEVELOPMENT", subtitle: "Custom Digital Solutions to Power Your Business", features: ["Custom Web Applications", "Website Development", "E-commerce Development", "Mobile App Development", "Backend/API Development", "Admin Dashboards", "Cloud Solutions", "UI/UX Design", "Database Development", "Software Maintenance"], action: "Explore Software Services", image: "/images/software-development.png" },
  { icon: Clapperboard, type: "creative", title: "CREATIVE & DIGITAL SERVICES", subtitle: "Creative Content & Marketing Solutions", features: ["Video Editing", "Promotional Videos", "Social Media Content", "Digital Marketing", "SEO", "Social Media Marketing", "Brand Content", "Motion Graphics", "Digital Campaigns", "Content Strategy"], action: "Explore Digital Services", image: "/images/creative-studio.png" },
];

export function ServiceShowcase() {
 return <section id="services" className="showcase"><div className="showcase-grid">{services.map(({ icon: Icon, type, title, subtitle, features, action, image }, index) => <motion.article key={title} className={`showcase-card ${type}`} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} whileHover={{ y: -5 }} viewport={{ once: true }} transition={{ delay: index * .12 }}><div className="showcase-copy"><div className="showcase-title"><span><Icon size={22}/></span><div><h2>{title}</h2><p>{subtitle}</p></div></div><ul>{features.map(feature => <li key={feature}><Check size={13}/>{feature}</li>)}</ul><a href="#contact" className="showcase-action">{action} <ArrowRight size={16}/></a></div><div className="showcase-image" style={{ backgroundImage: `linear-gradient(90deg, var(--card-fade), transparent 65%), url('${image}')` }}><div className="tech-bubbles"><i>⌘</i><i>JS</i><i>◈</i></div></div></motion.article>)}</div></section>;
}
