"use client";

import { ArrowLeft, ArrowRight, ArrowUpRight, Cloud, Code2, Palette, Pause, Play, Rocket, Smartphone, Sparkles, Wrench } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

const slides = [
  { icon: Code2, number: "01", label: "ENGINEERING", title: "Custom Software", text: "Purpose-built platforms, portals and internal tools that simplify your work and scale with your business.", tags: ["Web apps", "Dashboards", "APIs"], color: "blue" },
  { icon: Palette, number: "02", label: "WEB DESIGN", title: "Websites That Perform", text: "Clear, responsive and conversion-focused websites that make a confident first impression on every screen.", tags: ["Web design", "E-commerce", "SEO ready"], color: "cyan" },
  { icon: Wrench, number: "03", label: "WEBSITE CARE", title: "Website Handling", text: "Reliable updates, content changes, performance reviews and ongoing care that keep your website working at its best.", tags: ["Updates", "Maintenance", "Support"], color: "violet" },
  { icon: Smartphone, number: "04", label: "MOBILE", title: "Mobile Experiences", text: "Intuitive applications that put your service in your customers’ hands—designed for everyday use and lasting engagement.", tags: ["iOS & Android", "UX design", "App launch"], color: "violet" },
  { icon: Rocket, number: "05", label: "MARKETING", title: "Digital Marketing", text: "Focused campaigns, social content and search strategy that help the right audience find and choose your brand.", tags: ["SEO", "Social media", "Campaigns"], color: "mint" },
  { icon: Cloud, number: "06", label: "CLOUD", title: "Cloud & Growth", text: "Secure foundations, dependable deployment and smart improvements that keep your digital product moving forward.", tags: ["Cloud setup", "Automation", "Support"], color: "blue" },
];

export function ServicesSlider({ hero = false }: { hero?: boolean }) {
  const [active, setActive] = useState(0);
  const [userPaused, setUserPaused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const paused = userPaused || isHovered;
  const select = useCallback((index: number) => setActive((index + slides.length) % slides.length), []);

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => setActive(current => (current + 1) % slides.length), 5500);
    return () => window.clearInterval(timer);
  }, [paused]);

  const slide = slides[active];
  const Icon = slide.icon;
  const card = <article className={`service-slider-card ${slide.color}`} key={slide.number} aria-label={`${slide.title}: ${slide.text}`}>
    <div className="slider-orb one"/><div className="slider-orb two"/><div className="slider-grid"/>
    <div className="slider-card-top"><span>{slide.number}</span><span className="slider-label"><Sparkles size={13}/>{slide.label}</span></div>
    <div className="slider-icon"><Icon/></div><h3>{slide.title}</h3><p>{slide.text}</p><div className="slider-tags">{slide.tags.map(tag => <span key={tag}>{tag}</span>)}</div><a href="#contact">Explore this service <ArrowUpRight size={16}/></a>
    <Rocket className="slider-rocket" aria-hidden="true"/><span className={`slider-progress ${paused ? "is-paused" : ""}`} key={slide.number}/>
  </article>;
  const dots = <div className="slider-dots" role="tablist" aria-label="Choose a service">{slides.map((item, index) => <button type="button" key={item.number} className={active === index ? "active" : ""} onClick={() => select(index)} aria-label={`Show ${item.title}`} aria-selected={active === index} role="tab"/>)}</div>;
  const controls = <div className="hero-slider-controls"><button type="button" onClick={() => select(active - 1)} aria-label="Previous service"><ArrowLeft size={16}/></button><button type="button" className="slider-pause" onClick={() => setUserPaused(value => !value)} aria-label={userPaused ? "Resume automatic slide rotation" : "Pause automatic slide rotation"}>{userPaused ? <Play size={14}/> : <Pause size={14}/>}</button><button type="button" onClick={() => select(active + 1)} aria-label="Next service"><ArrowRight size={16}/></button></div>;
  if (hero) return <div className="hero-service-slider" aria-roledescription="carousel" aria-label="Featured services" onPointerEnter={() => setIsHovered(true)} onPointerLeave={() => setIsHovered(false)} onFocusCapture={() => setIsHovered(true)} onBlurCapture={() => setIsHovered(false)}>{card}{controls}{dots}</div>;
  return <section className="slider-section" aria-label="Featured services"><div className="container slider-wrap">
    <div className="slider-intro"><p className="eyebrow">FEATURED CAPABILITIES</p><h2>One partner.<br/><em>Many possibilities.</em></h2><p>Explore a few of the ways WakeUpGLOBAL can help turn ambitious ideas into real-world results.</p><div className="slider-controls"><button type="button" onClick={() => select(active - 1)} aria-label="Previous service"><ArrowLeft size={18}/></button><button type="button" onClick={() => select(active + 1)} aria-label="Next service"><ArrowRight size={18}/></button></div></div>
    {card}{dots}
  </div></section>;
}
