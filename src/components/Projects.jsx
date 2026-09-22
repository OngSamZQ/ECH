import { MainConList, TilingList, PlumbingList, MinorSewer } from "../constants";

const sections = [
  { id: "MainCon", chinese: "永進行(號)建築私人有限公司", title: "Eng Chin Hang Construction Pte Ltd", projects: MainConList },
  { id: "Tiling", chinese: "永進行(號)地磚建築私人有限公司", title: "Eng Chin Hang Tiling Construction Pte Ltd", projects: TilingList },
  { id: "Plumbing", chinese: "永進行(號)卫生水喉私人有限公司", title: "Eng Chin Hang Plumbing & Sanitary Pte Ltd", projects: PlumbingList },
  { id: "MinorSewer", title: "Minor Sewer works", projects: MinorSewer },
];

export default function Projects() {
  return (
    <div>
      <h1 className="sr-only">Our projects</h1>
      {sections.map(({ id, chinese, title, projects }) => (
        <section key={id} id={id} aria-labelledby={id + "-heading"} className="bg-gray-100 py-12">
          <div className="container mx-auto px-4">
            <h2 id={id + "-heading"} className="text-3xl text-center mb-8 text-[#6C2E93]">
              {chinese && <><span lang="zh">{chinese}</span><br /></>}
              {title}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <article key={project.project} className={"p-6 shadow-lg rounded-lg hover:shadow-2xl transition-all duration-300 motion-safe:hover:scale-105 " + (project.status === "Completed" ? "bg-violet-100" : "bg-white")}>
                  <h3 className="text-2xl font-semibold text-[#6C2E93] mb-1">{project.project}</h3>
                  <p className="text-lg font-medium text-gray-700 mb-1"><span className="font-bold">Scope of Work:</span> {project.scope}</p>
                  <p className="text-base font-medium text-gray-600"><span className="font-bold">Status:</span> {project.status}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
