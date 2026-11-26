import type { Metadata } from "next";
import SectionPage from "../../components/SectionPage";
import { patents } from "../../lib/site";

export const metadata: Metadata = { title: "Patents", alternates: { canonical: "/patents" } };

export default function Patents() {
  return (
    <SectionPage title="Patents" intro="Granted United States patents naming me as an inventor, from my time at VMware.">
      {patents.map((item) => <article className="list-item" key={item.number}><h3>U.S. Patent {item.number}</h3><a href={item.href}>Read patent record</a></article>)}
    </SectionPage>
  );
}
