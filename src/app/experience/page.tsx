import type { Metadata } from "next";
import SectionPage from "../../components/SectionPage";
import { experience } from "../../lib/site";

export const metadata: Metadata = { title: "Experience", alternates: { canonical: "/experience" } };

export default function Experience() {
  return (
    <SectionPage title="Experience" intro="My professional journey across cloud infrastructure, enterprise systems, and data platforms.">
      {experience.map((item) => (
        <article key={item.company + item.role} className="list-item">
          <span className="date">{item.dates}</span><h3>{item.company}</h3>
          <strong>{item.role}</strong><p>{item.description}</p>
        </article>
      ))}
    </SectionPage>
  );
}
