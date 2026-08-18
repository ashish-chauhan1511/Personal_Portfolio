import {
  FiArrowRight,
  FiGithub,
  FiLinkedin,
  FiMail, 
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import "./Hero.scss";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero__container">

        {/* Left Content */}
        <div className="hero__content">
          <span className="hero__hello">
            Hello, I'm
          </span>

          <h1 className="hero__title">
            Ashish Chauhan
          </h1>

          <h2 className="hero__role">
            MERN & Next.js Developer
          </h2>

          <p className="hero__description">
            I build modern, responsive and scalable web applications
            using the MERN, Next.js  and mordern web technologies.
          </p>

          <div className="hero__buttons">
            <a href="#projects" className="hero__btn hero__btn--primary">
              <span>View My Work</span>
              <FiArrowRight />
            </a>

            <a href="#contact" className="hero__btn hero__btn--outline">
              <span>Contact Me</span>
              <FiArrowRight />
            </a>
          </div>

          <div className="hero__social">
            <a
              href="https://github.com/ashish-chauhan1511"
              target="_blank"
              rel="noreferrer"
            >
              <FiGithub />
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              <FiLinkedin />
            </a>

              <a
              href="https://wa.me/919795051511"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              >
             <FaWhatsapp/>
            </a>

            <a 
            href="https://mail.google.com/mail/?view=cm&amp;fs=1&amp;to=ashishchauhan.mail30@gmail.com" 
            target="_blank"
            >
              <FiMail />
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="hero__visual">
          <div className="hero__circle hero__circle--one"></div>
          <div className="hero__circle hero__circle--two"></div>
          <div className="hero__dots"></div>
          <div className="hero__image-wrapper">
            <div className="hero__glow"></div>
            <img
              src="/images/profile/ashish2.png"
              alt="Ashish Chauhan"
              className="hero__image"
              loading="lazy"
            />
            <span className="hero__dot hero__dot--one"></span>
            <span className="hero__dot hero__dot--two"></span>
            <span className="hero__dot hero__dot--three"></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;