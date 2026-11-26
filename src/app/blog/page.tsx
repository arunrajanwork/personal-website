import type { Metadata } from "next";
import SectionPage from "../../components/SectionPage";

export const metadata: Metadata = { title: "Writing", alternates: { canonical: "/blog" } };

export default function Blog() {
  return (
    <SectionPage title="Writing" intro="Engineering notes on systems, architecture, and the process of learning by experimentation.">
      <p className="prose">Articles will appear here as the Systems Lab projects take shape.</p>
    </SectionPage>
  );
}
