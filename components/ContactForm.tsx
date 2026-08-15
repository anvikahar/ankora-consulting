"use client";

import type { FormEvent } from "react";
import { Send } from "lucide-react";

export function ContactForm({ email }: { email: string }) {
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
    <div className="contact-fields"><label>Company<input name="company" autoComplete="organization" placeholder="Company name"/></label><label>Service<select name="service" defaultValue="Website Design & Development"><option>Website Design & Development</option><option>Website Handling & Maintenance</option><option>Custom Software</option><option>Mobile Applications</option><option>Digital Marketing</option><option>Cloud & Infrastructure</option></select></label></div>
    <label>Tell us about your project<textarea name="message" placeholder="What would you like to build?" required rows={4}/></label>
    <button type="submit">Send Project Enquiry <Send size={16}/></button><small>Your email app will open with the enquiry pre-filled.</small>
  </form>;
}
