import {
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss,
  SiSass,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiJsonwebtokens,
  SiMongoose,
  SiGit,
  SiGithub,
  SiVsco,
  SiPostman,
  SiVercel,
  SiNpm,
} from "react-icons/si";
import {
  TbApi,
  TbTerminal2,
  TbBrandWindows,
} from "react-icons/tb";
import "./Skills.scss";

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="skills__container">

        <div className="skills__label">
          <span></span>
          SKILLS
        </div>

        <h2 className="skills__title">
          My Technical Skills
        </h2>

        <div className="skills__grid">

          {/* FRONT END */}
          <div className="skills-card">
            <div className="skills-card__heading">
              <span className="skills-card__icon">
                {"</>"}
              </span>

              <span>FRONT END</span>
            </div>

            <div className="skills-card__items">

              <SkillItem
                icon={<SiReact />}
                name="React.js"
              />

              <SkillItem
                icon={<SiNextdotjs />}
                name="Next.js"
              />

              <SkillItem
                icon={<SiJavascript />}
                name="JavaScript"
              />

              <SkillItem
                icon={<SiTypescript />}
                name="TypeScript"
              />

              <SkillItem
                icon={<SiHtml5 />}
                name="HTML5"
              />

              <SkillItem
                icon={<SiCss />}
                name="CSS3"
              />

              <SkillItem
                icon={<SiSass />}
                name="SCSS"
              />

              <SkillItem
                icon={<SiTailwindcss />}
                name="Tailwind CSS"
              />

            </div>
          </div>

          {/* BACK END */}
          <div className="skills-card">

            <div className="skills-card__heading">
              <span className="skills-card__icon">
                ☷
              </span>

              <span>BACK END</span>
            </div>

            <div className="skills-card__items">

              <SkillItem
                icon={<SiNodedotjs />}
                name="Node.js"
              />

              <SkillItem
                icon={<SiExpress />}
                name="Express.js"
              />

              <SkillItem
                icon={<TbApi />}
                name="REST API"
              />

              <SkillItem
                icon={<SiMongodb />}
                name="MongoDB"
              />

              <SkillItem
                icon={<SiJsonwebtokens />}
                name="JWT"
              />

              <SkillItem
                icon={<SiMongoose />}
                name="Mongoose"
              />

              <SkillItem
                icon={<TbBrandWindows />}
                name="Bcrypt"
              />

              <SkillItem
                icon={<TbTerminal2 />}
                name="Dotenv"
              />

            </div>
          </div>

          {/* OTHER TOOLS */}
          <div className="skills-card">

            <div className="skills-card__heading">
              <span className="skills-card__icon">
                ✂
              </span>

              <span>OTHER TOOLS</span>
            </div>

            <div className="skills-card__items">

              <SkillItem
                icon={<SiGit />}
                name="Git"
              />

              <SkillItem
                icon={<SiGithub />}
                name="GitHub"
              />

              <SkillItem
                icon={<SiVsco />}
                name="VS Code"
              />

              <SkillItem
                icon={<TbTerminal2 />}
                name="Thunder Client"
              />

              <SkillItem
                icon={<SiVercel />}
                name="Vercel"
              />

              <SkillItem
                icon={<SiPostman />}
                name="Postman"
              />

              <SkillItem
                icon={<SiNpm />}
                name="ESLint"
              />

              <SkillItem
                icon={<SiNpm />}
                name="NPM"
              />

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

const SkillItem = ({ icon, name }: { icon: React.ReactNode; name: string }) => {
  return (
    <div className="skill-item">
      <div className="skill-item__icon">
        {icon}
      </div>

      <span>{name}</span>
    </div>
  );
};

export default Skills;