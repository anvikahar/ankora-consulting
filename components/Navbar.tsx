"use client";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { BRAND, navItems } from "../lib/constants";
export function Navbar() {
 const [open, setOpen] = useState(false); const { scrollY } = useScroll(); const [scrolled, setScrolled] = useState(false); scrollY.on("change", y => setScrolled(y > 30));
 const close = () => setOpen(false);
 return <header className={`nav-wrap ${scrolled ? "scrolled" : ""}`}><nav className="nav" aria-label="Main navigation"><a href="#home" className="brand" onClick={close}><b>{BRAND.name}</b><span>CONSULTING</span></a><div className="desktop-nav">{navItems.slice(0, -1).map(i => <a key={i.href} href={i.href}>{i.label}</a>)}</div><a className="nav-cta desktop-cta" href="#contact">Start a Project</a><button className="menu-button" onClick={() => setOpen(!open)} aria-label="Toggle navigation" aria-expanded={open}>{open ? <X /> : <Menu />}</button></nav>
 <AnimatePresence>{open && <motion.div className="mobile-menu" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}><div>{navItems.map(i => <a key={i.href} href={i.href} onClick={close}>{i.label}</a>)}<a href="#contact" className="nav-cta" onClick={close}>Start a Project</a></div></motion.div>}</AnimatePresence></header>;
}
