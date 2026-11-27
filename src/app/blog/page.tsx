import type { Metadata } from "next";
import Link from "next/link";
import SectionPage from "../../components/SectionPage";

export const metadata: Metadata = { title: "Writing", alternates: { canonical: "/blog" } };

export default function Blog() {
  return (
    <SectionPage title="Writing" intro="Engineering notes on systems, architecture, and the process of learning by experimentation.">
      <article className="list-item">
        <time className="date" dateTime="2026-11-27">November 27, 2026 · Distributed systems</time>
        <h3><Link href="/blog/why-cloud-systems-separate-control-plane-and-data-plane">Why Cloud Systems Separate the Control Plane and Data Plane</Link></h3>
        <p>How local state, delegated authority and independent failure boundaries help distributed systems keep serving workloads during infrastructure failures.</p>
        <p><Link className="text-link" href="/blog/why-cloud-systems-separate-control-plane-and-data-plane">Read the article</Link></p>
      </article>
    </SectionPage>
  );
}
