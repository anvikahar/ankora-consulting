import { ArrowUpRight } from "lucide-react";
import type { ButtonHTMLAttributes, ReactNode } from "react";

export function Button({ children, className = "", arrow = false, ...props }: ButtonHTMLAttributes<HTMLButtonElement> & { children: ReactNode; arrow?: boolean }) {
  return <button className={`button ${className}`} {...props}>{children}{arrow && <ArrowUpRight size={17} />}</button>;
}
