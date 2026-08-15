import type { Metadata } from "next";
import "./globals.css";
import "./overrides.css";

export const metadata: Metadata = {
  title: "WakeUpGLOBAL — Technology • Creativity • Growth",
  description: "WakeUpGLOBAL delivers websites, mobile apps, creative production, digital marketing, UI/UX and custom technology solutions from Maldives to the world.",
  openGraph: { title: "WakeUpGLOBAL — Digital Technology & Creative Solutions", description: "Professional digital solutions for businesses worldwide.", type: "website" },
  twitter: { card: "summary_large_image", title: "WakeUpGLOBAL", description: "Technology • Creativity • Growth" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
