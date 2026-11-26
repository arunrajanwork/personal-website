import type { Metadata } from "next";
import SectionPage from "../../components/SectionPage";
import { education } from "../../lib/site";

export const metadata: Metadata = { title: "Education", alternates: { canonical: "/education" } };

export default function Education() {
  return (
    <SectionPage title="Education" intro="Academic foundations and continuing studies in computer science and advanced systems.">
      {education.map((item) => <article className="list-item" key={item.school}><span className="date">{item.dates}</span><h3>{item.school}</h3><p>{item.program}</p></article>)}
    </SectionPage>
  );
}
