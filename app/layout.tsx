import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nexora Digital — Technology • Creativity • Growth",
  description: "Nexora Digital delivers websites, mobile apps, creative production, digital marketing, UI/UX and custom technology solutions from Maldives to the world.",
  openGraph: { title: "Nexora Digital — Digital Technology & Creative Solutions", description: "Professional digital solutions for businesses in Maldives and worldwide.", type: "website" },
  twitter: { card: "summary_large_image", title: "Nexora Digital", description: "Technology • Creativity • Growth" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
