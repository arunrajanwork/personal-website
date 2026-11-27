import type { Metadata } from "next";
import Link from "next/link";
import { github, linkedin, projectIdeas, siteUrl } from "../lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const person = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Arun Rajan",
  url: siteUrl,
  jobTitle: "Principal Member of Technical Staff",
  worksFor: { "@type": "Organization", name: "Oracle" },
  sameAs: [linkedin, github],
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }} />
      <section className="hero">
        <div>
          <p className="eyebrow">A personal engineering journal</p>
          <h1>Learning<br />by <em>building.</em></h1>
          <p className="hero-copy">Exploring distributed systems, cloud infrastructure, and data engineering through practical experiments, thoughtful design, and shared discoveries.</p>
          <div className="actions">
            <Link className="primary-button" href="/projects">Explore the Systems Lab</Link>
            <Link className="text-link" href="/blog">Read the journal</Link>
          </div>
        </div>
        <aside className="profile-card">
          <div className="profile-mark" aria-hidden="true">ar.</div>
          <h2>Arun Rajan</h2>
          <p>Principal Member of Technical Staff at Oracle, working on the AI Data Platform.</p>
          <p className="muted">Previously at VMware. Interested in how reliable, large-scale systems are designed and operated.</p>
          <div className="profile-links">
            <a href={linkedin}>LinkedIn</a>
            <a href={github}>GitHub</a>
            <Link href="/experience">Experience</Link>
          </div>
        </aside>
      </section>
      <section className="section-block" aria-labelledby="lab-title">
        <div className="section-heading">
          <div><p className="eyebrow">Systems Lab</p><h2 id="lab-title">From design to deployment</h2></div>
          <Link className="text-link" href="/projects">View the roadmap</Link>
        </div>
        <p className="section-intro">A growing collection of planned systems experiments on AWS and OCI, with an emphasis on reproducible results and trade-offs.</p>
        <div className="project-grid">
          {projectIdeas.map((project) => (
            <article className="project-card" key={project.title}>
              <span className="status">Planned</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <small>{project.topics}</small>
            </article>
          ))}
        </div>
      </section>
      <section className="section-block journal-row">
        <div>
          <p className="eyebrow">Writing</p>
          <h2>Notes from the workbench</h2>
          <p className="section-intro">Technical articles will follow each experiment, from the initial problem and design decisions to measured results and lessons learned.</p>
        </div>
        <Link className="text-link" href="/blog">Visit the journal</Link>
      </section>
    </>
  );
}
