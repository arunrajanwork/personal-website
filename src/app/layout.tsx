import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { github, linkedin, navigation, siteUrl } from "../lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Learn with Arun Rajan | Distributed Systems & Cloud Engineering", template: "%s | Learn with Arun Rajan" },
  description: "Engineering notes and hands-on systems experiments by Arun Rajan.",
  authors: [{ name: "Arun Rajan", url: siteUrl }],
  openGraph: { siteName: "Learn with Arun Rajan", type: "website", locale: "en_US" },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#content">Skip to content</a>
        <header className="site-header">
          <div className="shell header-inner">
            <Link className="wordmark" href="/">learn<span>with</span>arun</Link>
            <nav aria-label="Main navigation">
              {navigation.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
            </nav>
          </div>
        </header>
        <main id="content" className="shell">{children}</main>
        <footer className="site-footer">
          <div className="shell footer-inner">
            <span>Learn with Arun Rajan · Personal engineering journal</span>
            <div className="footer-links">
              <a href={linkedin}>LinkedIn</a>
              <a href={github}>GitHub</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
