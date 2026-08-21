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
              Full-Stalk Developer
            </h3>

            <div className="experience-card__company">
              Source Tech-i Mumbai, Maharashtra
            </div>

            <ul>
              <li>
               Developing responsive and scalable web applications using React.js, Next.js, and modern JavaScript (ES6+).
              </li>

              <li>
               Designing and integrating RESTful APIs using Node.js and Express.js for seamless frontend-backend communication.
              </li>

              <li>
              Developing full-stack features with Next.js, Node.js, Express.js, and MongoDB across the MERN stack.
              </li>

              <li>
               Building reusable React components and maintaining clean, scalable, and maintainable application architecture.
              </li>

              <li>
               Collaborating with development teams using Git and GitHub while following industry-standard development practices.
              </li>
            </ul>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Experience;