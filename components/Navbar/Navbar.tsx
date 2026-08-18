"use client";

import {
  useEffect,
  useState,
  type MouseEvent,
} from "react";

import {
  FiDownload,
  FiHome,
  FiUser,
  FiCode,
  FiBriefcase,
  FiFolder,
  FiMail,
} from "react-icons/fi";

import "./Navbar.scss";

interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
}

const navItems: NavItem[] = [
  {
    id: "home",
    label: "Home",
    icon: <FiHome />,
  },
  {
    id: "about",
    label: "About",
    icon: <FiUser />,
  },
  {
    id: "skills",
    label: "Skills",
    icon: <FiCode />,
  },
  {
    id: "experience",
    label: "Experience",
    icon: <FiBriefcase />,
  },

  {
    id: "projects",
    label: "Projects",
    icon: <FiFolder />,
  },
  {
    id: "contact",
    label: "Contact",
    icon: <FiMail />,
  },
];

const Navbar = () => {
  const [activeSection, setActiveSection] =
    useState<string>("home");

  const [isMenuOpen, setIsMenuOpen] =
    useState<boolean>(false);

  /*
   * ========================================================
   * FIND ACTIVE SECTION WHILE SCROLLING
   * ========================================================
   */

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition =
        window.scrollY + 120;

      let currentSection = "home";

      navItems.forEach((item) => {
        const section =
          document.getElementById(item.id);

        if (!section) return;

        const sectionTop = section.offsetTop;

        const sectionBottom =
          sectionTop + section.offsetHeight;

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionBottom
        ) {
          currentSection = item.id;
        }
      });

      /*
       * Contact becomes active at bottom
       */

      const reachedBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 30;

      if (reachedBottom) {
        currentSection = "contact";
      }

      setActiveSection(currentSection);
    };

    handleScroll();

    window.addEventListener(
      "scroll",
      handleScroll,
      { passive: true }
    );

    window.addEventListener(
      "resize",
      handleScroll
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );

      window.removeEventListener(
        "resize",
        handleScroll
      );
    };
  }, []);

  /*
   * ========================================================
   * NAVIGATION CLICK
   * ========================================================
   */

  const handleNavClick = (
    event: MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    event.preventDefault();

    const section =
      document.getElementById(id);

    if (!section) return;

    /*
     * Active section
     */

    setActiveSection(id);

    /*
     * Close mobile menu
     */

    setIsMenuOpen(false);

    /*
     * Navbar height
     */

    const navbarHeight =
      window.innerWidth <= 768
        ? 62
        : 58;

    const sectionTop =
      section.getBoundingClientRect().top +
      window.scrollY -
      navbarHeight;

    window.scrollTo({
      top: sectionTop,
      behavior: "smooth",
    });

    /*
     * Update URL hash
     */

    window.history.replaceState(
      null,
      "",
      `#${id}`
    );
  };

  /*
   * ========================================================
   * LOGO CLICK
   * ========================================================
   */

  const handleLogoClick = (
    event: MouseEvent<HTMLAnchorElement>
  ) => {
    event.preventDefault();

    setActiveSection("home");

    setIsMenuOpen(false);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    window.history.replaceState(
      null,
      "",
      "#home"
    );
  };

  /*
   * ========================================================
   * HAMBURGER TOGGLE
   * ========================================================
   */

  const toggleMobileMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="navbar">
      <div className="navbar__container">

        {/* ==================================================
            LOGO
        ================================================== */}

        <a
          href="#home"
          className="navbar__logo"
          onClick={handleLogoClick}
          aria-label="Ashish Chauhan Home"
        >
          <span className="navbar__logo-ac">
            AC
          </span>

          <span className="navbar__logo-name">
            Ashish Chauhan
          </span>
        </a>

        {/* ==================================================
            NAVIGATION
        ================================================== */}

        <nav
          className={`navbar__menu ${isMenuOpen ? "is-open" : ""
            }`}
          aria-label="Main Navigation"
        >
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`navbar__link ${activeSection === item.id
                  ? "active"
                  : ""
                }`}
              onClick={(event) =>
                handleNavClick(
                  event,
                  item.id
                )
              }
            >
              <span className="navbar__link-icon">
                {item.icon}
              </span>

              <span className="navbar__link-text">
                {item.label}
              </span>
            </a>
          ))}
        </nav>

        <a
          href="/images/resume/ashish_resume.pdf"
          download="ashish_resume.pdf"
          className="navbar__cv"
        >
          <span>
            Download CV
          </span>

          <FiDownload />
        </a>

        {/* ==================================================
            MOBILE BUTTON
        ================================================== */}

        <button
          type="button"
          className={`navbar__mobile ${isMenuOpen ? "is-open" : ""
            }`}
          onClick={toggleMobileMenu}
          aria-label={
            isMenuOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>
    </header>
  );
};

export default Navbar;