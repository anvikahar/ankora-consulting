"use client";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import { Menu, MessageCircle, Send, X } from "lucide-react";
import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/siteConfig";

const links=[{label:"Home",href:"#home"},{label:"Services",href:"#services"},{label:"About",href:"#about"},{label:"Why Us",href:"#why-us"},{label:"Contact",href:"#contact"}];

export function Navbar(){
 const [open,setOpen]=useState(false); const [scrolled,setScrolled]=useState(false); const {scrollY}=useScroll();
 useEffect(()=>scrollY.on("change",v=>setScrolled(v>16)),[scrollY]);
 return <header className={`ref-nav ${scrolled?"is-scrolled":""}`}><nav><a className="ref-brand" href="#home" aria-label={`${siteConfig.shortName} home`}><span>ND</span><div><b>{siteConfig.shortName}</b><small>{siteConfig.subtitle}</small></div></a><div className="ref-links">{links.map(link=><a key={link.href} href={link.href}>{link.label}</a>)}</div><div className="ref-contact"><MessageCircle/><span>{siteConfig.phone}</span></div><a className="ref-hire" href="#contact">Hire Me <Send size={15}/></a><button type="button" className="ref-menu" onClick={()=>setOpen(value=>!value)} aria-label="Toggle navigation" aria-expanded={open} aria-controls="mobile-navigation">{open?<X/>:<Menu/>}</button></nav><AnimatePresence>{open&&<motion.div id="mobile-navigation" className="ref-mobile" initial={{height:0,opacity:0}} animate={{height:"auto",opacity:1}} exit={{height:0,opacity:0}}>{links.map(link=><a key={link.href} onClick={()=>setOpen(false)} href={link.href}>{link.label}</a>)}<a href="#contact" onClick={()=>setOpen(false)}>Hire Me <Send size={15}/></a></motion.div>}</AnimatePresence></header>;
}
