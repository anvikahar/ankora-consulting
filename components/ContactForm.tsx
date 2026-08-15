"use client";

import type { FormEvent } from "react";
import { Sparkles, Send } from "lucide-react";
import { useState } from "react";

const projectStarters: Record<string, string> = {
  "Website Design & Development": "I need a modern, responsive website for my business. It should clearly present our services, build trust with visitors and make it easy for customers to contact us. I would like help with the design, development and launch.",
  "Website Handling & Maintenance": "I need ongoing support for my existing website, including content updates, performance checks, security maintenance and help keeping everything current and reliable.",
  "Custom Software": "I need a custom digital tool to streamline a business process. The solution should be easy for our team to use, secure and able to grow as our needs develop.",
  "Mobile Applications": "I want to build a user-friendly mobile app that helps customers access our service quickly. I need support with planning, UX/UI design, development and launch.",
  "Digital Marketing": "I want to improve my online visibility and attract the right customers through a focused digital marketing strategy, including content, social media and search optimisation.",
  "Cloud & Infrastructure": "I need support with a secure, scalable cloud setup for my digital product, including reliable deployment, infrastructure improvements and ongoing technical support.",
};

export function ContactForm({ email }: { email: string }) {
  const [service, setService] = useState("Website Design & Development");
  const [message, setMessage] = useState("");
  const [isSuggesting, setIsSuggesting] = useState(false);

  function suggestProjectBrief() {
    setIsSuggesting(true);
    window.setTimeout(() => {
      setMessage(projectStarters[service]);
      setIsSuggesting(false);
    }, 420);
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = `New project enquiry from ${data.get("name")}`;
    const body = [
      `Name: ${data.get("name")}`,
      `Email: ${data.get("email")}`,
      `Company: ${data.get("company") || "Not provided"}`,
      `Service: ${data.get("service")}`,
      "",
      `Project details:\n${data.get("message")}`,
    ].join("\n");
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return <form className="contact-form" onSubmit={submit}>
    <div className="contact-fields"><label>Name<input name="name" autoComplete="name" placeholder="Your name" required/></label><label>Email<input name="email" type="email" autoComplete="email" placeholder="you@company.com" required/></label></div>
    <div className="contact-fields"><label>Company<input name="company" autoComplete="organization" placeholder="Company name"/></label><label>Service<select name="service" value={service} onChange={event => setService(event.target.value)}><option>Website Design & Development</option><option>Website Handling & Maintenance</option><option>Custom Software</option><option>Mobile Applications</option><option>Digital Marketing</option><option>Cloud & Infrastructure</option></select></label></div>
    <div className="project-message"><div className="project-message-head"><label htmlFor="project-message">Tell us about your project</label><button type="button" onClick={suggestProjectBrief} disabled={isSuggesting}><Sparkles size={13}/>{isSuggesting ? "Creating suggestion…" : "AI suggestion"}</button></div><textarea id="project-message" name="message" value={message} onChange={event => setMessage(event.target.value)} placeholder="What would you like to build?" required rows={4}/><p>Choose a service, then use AI suggestion to start a polished project brief.</p></div>
    <button type="submit">Send Project Enquiry <Send size={16}/></button><small>Your email app will open with the enquiry pre-filled.</small>
  </form>;
}
