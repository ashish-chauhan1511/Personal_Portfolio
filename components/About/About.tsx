import Image from "next/image";
import { FaCheck, FaCode, FaDownload } from "react-icons/fa";
import "./About.scss";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container about__container">
        {/* Left Content */}
        <div className="about__content">
          <span className="about__label"><span></span>ABOUT ME</span>

          <h2 className="about__title">
            About <span>Me</span>
          </h2>

          <p className="about__text">
            I'm a Full-Stack JavaScript Developer with a strong foundation in frontend development and hands-on experience building modern web applications with MERN and Next.js. I turn ideas into fast, scalable and user-focused digital products.
          </p>

          <ul className="about__list">
            <li>
              <span className="about__check">
                <FaCheck />
              </span>
              <span>Frontend with React.js &amp; Next.js</span>
            </li>

            <li>
              <span className="about__check">
                <FaCheck />
              </span>
              <span>Backend with Node.js &amp; Express.js</span>
            </li>

            <li>
              <span className="about__check">
                <FaCheck />
              </span>
              <span>Database with MongoDB &amp; Mongoose</span>
            </li>

            <li>
              <span className="about__check">
                <FaCheck />
              </span>
              <span>Building RESTful APIs &amp; Authentication</span>
            </li>
          </ul>

          <a
            href="/images/resume/ashish_resume.pdf"
            className="about__button"
            download="ashish_resume.pdf"
          >
            Download Resume
            <FaDownload />
          </a>
        </div>

        {/* Right Image */}
        <div className="about__visual">
          <div className="about__image-box">
            <Image
              src="/images/profile/ashish1.webp"
              alt="Ashish Chauhan - MERN Developer"
              width={600}
              height={650}
              loading="lazy"
            />

            <div className="about__code">
              <FaCode />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}