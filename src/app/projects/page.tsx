import type { Metadata } from "next";
import SectionPage from "../../components/SectionPage";
import { projectIdeas } from "../../lib/site";

export const metadata: Metadata = { title: "Systems Lab", alternates: { canonical: "/projects" } };

export default function Projects() {
  return (
    <SectionPage title="Systems Lab" intro="Hands-on experiments in distributed systems, with planned deployments on AWS and Oracle Cloud Infrastructure.">
      <div className="project-grid">
        {projectIdeas.map((project) => (
          <article key={project.title} className="project-card">
            <span className="status">Planned</span><h3>{project.title}</h3>
            <p>{project.description}</p><small>{project.topics}</small>
          </article>
        ))}
      </div>
    </SectionPage>
  );
}
