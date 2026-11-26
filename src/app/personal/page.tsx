import type { Metadata } from "next";
import SectionPage from "../../components/SectionPage";

export const metadata: Metadata = { title: "Personal", alternates: { canonical: "/personal" } };

export default function Personal() {
  return <SectionPage title="Personal" intro="A space for interests and experiences beyond engineering."><p className="prose">More to come.</p></SectionPage>;
}
