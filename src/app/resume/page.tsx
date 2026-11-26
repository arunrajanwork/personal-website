import type { Metadata } from "next";
import Link from "next/link";
import SectionPage from "../../components/SectionPage";
import { education, experience, linkedin } from "../../lib/site";

export const metadata: Metadata = { title: "Resume", alternates: { canonical: "/resume" } };

export default function Resume() {
  return (
    <SectionPage title="Arun Rajan" intro="Distributed systems and data-platform engineer. Principal Member of Technical Staff at Oracle Cloud Infrastructure.">
      <p className="prose"><a href={linkedin}>LinkedIn profile</a></p>
      <h2>Professional experience</h2>
      {experience.map((item) => <article key={item.company + item.role} className="list-item"><span className="date">{item.dates}</span><h3>{item.company}</h3><strong>{item.role}</strong><p>{item.description}</p></article>)}
      <h2>Education</h2>
      {education.map((item) => <article key={item.school} className="list-item"><span className="date">{item.dates}</span><h3>{item.school}</h3><p>{item.program}</p></article>)}
      <p><Link href="/patents">Patents and research</Link></p>
    </SectionPage>
  );
}
