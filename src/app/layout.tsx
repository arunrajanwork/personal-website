import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://learnwitharunrajan.com"),
  title: "Learn with Arun Rajan | Distributed Systems & Cloud Engineering",
  description: "Engineering notes and hands-on systems experiments by Arun Rajan.",
  authors: [{ name: "Arun Rajan" }],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
