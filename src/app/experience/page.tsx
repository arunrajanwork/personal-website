import type { Metadata } from "next";
import Link from "next/link";
import SectionPage from "../../components/SectionPage";
import CareerRole from "../../components/CareerRole";
import { careerMetrics, experience, recognition } from "../../lib/site";

export const metadata: Metadata = {
  title: "Experience",
  description: "Arun Rajan’s engineering experience at Oracle Cloud Infrastructure and VMware, including distributed data platforms, AI infrastructure, and lifecycle management.",
  alternates: { canonical: "/experience" },
};

export default function Experience() {
  return (
    <SectionPage title="Experience" intro="My professional journey spans distributed cloud infrastructure, enterprise data platforms, storage systems, and AI infrastructure. I have taken systems from proof of concept and design to production delivery and ongoing operation.">
      <div className="career-metrics" aria-label="Selected engineering outcomes">
        {careerMetrics.map((metric) => (
          <div className="career-metric" key={metric.label}>
            <strong>{metric.value}</strong>
            <span>{metric.label}</span>
          </div>
        ))}
      </div>
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
