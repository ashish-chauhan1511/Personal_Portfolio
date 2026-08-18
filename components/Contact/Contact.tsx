import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiArrowRight,
} from "react-icons/fi";
import "./Contact.scss";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact__container">

        {/* Left */}
        <div className="contact__content">

          <div className="contact__label">
            <span></span>
            CONTACT
          </div>

          <h2>Let's Work Together</h2>

          <p>
            I'm currently open to new opportunities. Whether you have a
            question or just want to say hi, I'll try my best to get back
            to you.
          </p>

        </div>

        {/* Middle */}
        <div className="contact__details">

          <a
            href="https://mail.google.com/mail/?view=cm&amp;fs=1&amp;to=ashishchauhan.mail30@gmail.com"
            target="_blank"
          >
            <FiMail />
            <span>ashishchauhan.mail30@gmail.com</span>
          </a>

          <a href="tel:+919580351511">
            <FiPhone />
            <span>+91 9580351511</span>
          </a>

          <div>
            <FiMapPin />
            <span>
              Mumbai, Maharashtra, India
            </span>
          </div>

        </div>

        {/* Button */}
        <div className="contact__action">
          <a
            href="https://mail.google.com/mail/?view=cm&amp;fs=1&amp;to=ashishchauhan.mail30@gmail.com"
            target="_blank"
          >
            <span>Get In Touch</span>
            <FiArrowRight />
          </a>
        </div>

      </div>

      <footer className="contact__footer">

        <div>
          © 2026 Ashish Chauhan. All Rights Reserved.
        </div>

      </footer>
    </section>
  );
};

export default Contact;