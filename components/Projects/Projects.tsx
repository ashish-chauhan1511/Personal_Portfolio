import { FiArrowRight, FiExternalLink } from "react-icons/fi";
import "./Projects.scss";

const projects = [
  {
    id: 1,
    title: "Todo App",
    description:
      "Full stack todo app with authentication, CRUD operations, and real-time updates.",
    image: "/images/project/todo.webp",
    tags: ["Next.js", "TypeScript", "jwt", "Vercel"],
    link: "https://todo-app-six-chi-78.vercel.app/",
  },
  {
    id: 2,
    title: "E-Commerce",
    description:
      "Dynamic e-commerce website with product browsing, filtering and responsive UI.",
    image: "/images/project/ecom.webp",
    tags: ["React", "Node.js", "MongoDB", "Express.js"],
    link: "https://react-dynamic-e-com-zcpx.vercel.app/",
  },
  {
    id: 3,
    title: "Personal Portfolio",
    description:
      "My personal portfolio built with React and SCSS.",
    image: "/images/project/portfolio.webp",
    tags: ["Next.js", "React", "TypeScript", "React Icons"],
    link: "https://ashishchauhan.tech/",
  },
];

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <div className="projects__container">

        {/* Heading */}
        <div className="projects__heading">
          <div>
            <div className="projects__label">
              <span></span>
              PROJECTS
            </div>

            <h2>My Recent Projects</h2>
          </div>

          <a href="#projects" className="projects__view-all">
            <span>View All Projects</span>
            <FiArrowRight />
          </a>
        </div>

        {/* Cards */}
        <div className="projects__grid">
          {projects.map((project) => (
            <article className="project-card" key={project.id}>

              <div className="project-card__image">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                />

                <a
                  href={project.link}
                  className="project-card__external"
                  aria-label={`Open ${project.title}`}
                >
                  <FiExternalLink />
                </a>
              </div>

              <div className="project-card__body">
                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="project-card__tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>

            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;