import type { ReactNode } from "react";

export default function SectionPage({ title, intro, children }: {
  title: string; intro: string; children: ReactNode;
}) {
  return (
    <>
      <div className="page-heading"><h1>{title}</h1><p className="lead">{intro}</p></div>
      <div className="page-body">{children}</div>
    </>
  );
}
