import type { Metadata } from "next";
import Link from "next/link";
import SectionPage from "../../components/SectionPage";
import CareerRole from "../../components/CareerRole";
import { education, experience, linkedin, patents, recognition, technicalSkills } from "../../lib/site";

export const metadata: Metadata = {
  title: "Resume",
  description: "Arun Rajan’s professional resume: distributed systems, cloud infrastructure, data engineering, AI infrastructure, technical expertise, education, and patents.",
  alternates: { canonical: "/resume" },
};

export default function Resume() {
  return (
    <SectionPage title="Arun Rajan" intro="Principal Member of Technical Staff · Oracle AI Data Platform">
      <div className="resume-contact">
        <a className="text-link" href={linkedin}>LinkedIn profile</a>
        <Link className="text-link" href="/experience">Detailed engineering experience</Link>
      </div>
      <div className="career-layout resume-layout">
        <div className="career-main">
          <section className="resume-section">
            <h2>Professional profile</h2>
            <p className="career-description">Principal engineer with a background in distributed systems, enterprise storage, cloud data platforms, and AI infrastructure. My experience includes architectural design, technical ownership, cross-team engineering leadership, and the operational evolution of production systems.</p>
          </section>
          <section className="resume-section">
            <h2>Professional experience</h2>
            {experience.map((item) => <CareerRole key={item.company + item.role} item={item} />)}
          </section>
          <section className="resume-section">
            <h2>Education</h2>
            {education.map((item) => (
              <article key={item.school} className="list-item">
                <span className="date">{item.dates}</span><h3>{item.school}</h3><p>{item.program}</p>
              </article>
            ))}
          </section>
        </div>
        <aside className="career-aside">
          <section className="career-sidebar">
            <h2>Technical expertise</h2>
            {technicalSkills.map((group) => (
              <div className="skill-group" key={group.category}>
                <h3>{group.category}</h3>
                <p>{group.skills.join(" · ")}</p>
              </div>
            ))}
          </section>
          <section className="career-sidebar">
            <h2>Patents</h2>
            <ul className="career-bullets">{patents.map((patent) => <li key={patent.number}><a href={patent.href}>U.S. Patent {patent.number}</a></li>)}</ul>
            <Link className="text-link" href="/patents">View patents</Link>
          </section>
          <section className="career-sidebar">
            <h2>Recognition</h2>
            <ul className="career-bullets">{recognition.map((item) => <li key={item}>{item}</li>)}</ul>
          </section>
        </aside>
      </div>
    </SectionPage>
  );
}
