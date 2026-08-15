"use client";

import { useEffect } from "react";

const revealSelector = ".section-head, .service-grid, .split, .reason-grid, .process-grid, .work-grid, .stats-grid, .cta .container, .footer-grid";

export function ScrollReveal() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const elements = Array.from(document.querySelectorAll<HTMLElement>(revealSelector));
    elements.forEach(element => element.classList.add("reveal-ready"));
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px" });
    elements.forEach(element => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return null;
}
