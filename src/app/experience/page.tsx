import type { Metadata } from "next";
import Link from "next/link";
import SectionPage from "../../components/SectionPage";
import CareerRole from "../../components/CareerRole";
import { experience, recognition } from "../../lib/site";

export const metadata: Metadata = {
  title: "Experience",
  description: "Arun Rajan’s engineering experience at Oracle AI Data Platform and VMware, including distributed data platforms, AI infrastructure, and lifecycle management.",
  alternates: { canonical: "/experience" },
};

export default function Experience() {
  return (
    <SectionPage title="Experience" intro="My work centers on the architecture and evolution of distributed systems, from enterprise storage and infrastructure management to cloud data platforms and AI infrastructure. I am particularly interested in the decisions that make complex systems reliable, maintainable, and useful at scale.">
      <div className="career-layout">
        <div className="career-main">
          <h2>Professional history</h2>
          {experience.map((item) => <CareerRole key={item.company + item.role} item={item} detailed />)}
        </div>
        <aside className="career-aside">
          <section className="career-sidebar">
            <h2>Recognition</h2>
            <ul className="career-bullets">{recognition.map((item) => <li key={item}>{item}</li>)}</ul>
            <Link className="text-link" href="/patents">Explore patents</Link>
          </section>
          <section className="career-sidebar">
            <h2>Resume</h2>
            <p>A condensed view of my experience, technical expertise, education, and patents.</p>
            <Link className="text-link" href="/resume">View my resume</Link>
          </section>
        </aside>
      </div>
    </SectionPage>
  );
}
