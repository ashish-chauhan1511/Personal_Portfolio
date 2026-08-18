import {
  FiAward,
  FiBookOpen,
  FiCheck,
} from "react-icons/fi";
import "./Certification.scss";
const Certifications = () => {
  return (
    <section
      className="certifications"
      id="certifications"
    >
      <div className="certifications__container">

        <div className="section-label">
          CERTIFICATIONS & LEARNING
        </div>

        <div className="certifications__grid">

          {/* CERTIFICATION */}
          <div className="cert-card">

            <div className="cert-card__icon">
              <FiAward />
            </div>

            <div className="cert-card__content">

              <h3>
                Front End Development Certification
              </h3>

              <p>
                HTML, CSS, JavaScript, React.js
              </p>

              <span className="cert-card__badge">
                Certified
              </span>

            </div>
          </div>

          {/* MCA */}
          <div className="cert-card">

            <div className="cert-card__icon">
              <FiBookOpen />
            </div>

            <div className="cert-card__content">

              <h3>
                Currently Pursuing MCA
              </h3>

              <p>
                Master of Computer Applications
              </p>

              <span className="cert-card__badge cert-card__badge--progress">
                In Progress
              </span>

            </div>
          </div>

          {/* KEY STRENGTHS */}
          <div className="strengths-card">

            <h3>
              KEY STRENGTHS
            </h3>

            <ul>

              <li>
                <FiCheck />
                Problem Solving & Logical Thinking
              </li>

              <li>
                <FiCheck />
                Clean, Scalable & Maintainable Code
              </li>

              <li>
                <FiCheck />
                Responsive & User-Centered Design
              </li>

              <li>
                <FiCheck />
                Web Performance Optimization
              </li>

              <li>
                <FiCheck />
                Team Collaboration & Communication
              </li>

            </ul>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Certifications;