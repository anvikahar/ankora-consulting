import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ankora Consulting — Software & Audio Video Solutions.",
  description: "Ankora Consulting delivers custom software, mobile apps, UI/UX design, audio video systems, digital signage and live streaming solutions worldwide.",
  openGraph: { title: "Ankora Consulting — Software & Audio Video Solutions.", description: "Software development and professional audio video solutions from Maldives to the world.", type: "website" },
  twitter: { card: "summary_large_image", title: "Ankora Consulting", description: "Software. AV. Solutions." },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
