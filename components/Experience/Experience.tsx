import { FiBriefcase } from "react-icons/fi";
import "./Experience.scss";

const Experience = () => {
  return (
    <section className="experience" id="experience">
      <div className="experience__container">

        <div className="experience__label">
          <span></span>
          EXPERIENCE
        </div>

        <h2 className="experience__title">
          My Professional Journey
        </h2>

        <div className="experience__timeline">

          {/* LEFT DATE */}
          <div className="experience__date">

            <div className="experience__timeline-dot">
              <FiBriefcase />
            </div>

            <div className="experience__date-text">
              <span>
                Sep 2024 – Present
              </span>

              <small>
                (1.8+ Years)
              </small>
            </div>

          </div>

          {/* RIGHT CONTENT */}
          <div className="experience-card">

            <h3>
              Frontend Developer
            </h3>

            <div className="experience-card__company">
              Source Tech - Mumbai, Maharashtra
            </div>

            <ul>
              <li>
                Developing responsive and interactive web interfaces using React.js and modern JavaScript (ES6+).
              </li>

              <li>
                Building and integrating RESTful APIs to connect frontend applications with backend services.
              </li>

              <li>
                Developing full-stack features using Node.js, Express.js and MongoDB within the MERN stack.
              </li>

              <li>
                Creating reusable React components and writing clean, scalable and maintainable code.
              </li>

              <li>
                Collaborating with team members using Git and GitHub while following version control and development best practices.
              </li>
            </ul>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Experience;