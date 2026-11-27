import type { CareerRole as Role } from "../lib/site";

export default function CareerRole({ item, detailed = false }: { item: Role; detailed?: boolean }) {
  return (
    <article className="career-role">
      <div className="career-role-heading">
        <div>
          <h3>{item.company}</h3>
          <p className="career-position">{item.role}</p>
        </div>
        <div className="career-meta">
          <span>{item.dates}</span>
          <span>{item.location}</span>
        </div>
      </div>
      {detailed ? (
        <>
          <p className="career-description">{item.description}</p>
          <div className="career-projects">
            {item.projects.map((project) => (
              <section className="career-project" key={project.title}>
                <h4>{project.title}</h4>
                <ul className="career-bullets">
                  {project.accomplishments.map((point) => <li key={point}>{point}</li>)}
                </ul>
              </section>
            ))}
          </div>
        </>
      ) : (
        <ul className="career-bullets">
          {item.resumeHighlights.map((point) => <li key={point}>{point}</li>)}
        </ul>
      )}
    </article>
  );
}
