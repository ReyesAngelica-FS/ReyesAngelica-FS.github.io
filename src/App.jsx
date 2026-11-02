
import {
  Mail,
  MapPin,
  Code2,
  Palette,
  BriefcaseBusiness,
  ShieldCheck,
  GraduationCap,
  Database,
  Wrench,
  Award,
  ExternalLink,
  FileText,
  Download,
} from "lucide-react";

import { FaGithub } from "react-icons/fa";
import GitHubProjects from "./componets/GitHubProjects";

import "./App.css";

const highlights = [
  {
    title: "Technical Expertise",
    description:
      "Responsive applications, modern JavaScript, React, databases, and web development tools.",
    icon: Code2,
  },
  {
    title: "Military Leadership",
    description:
      "20 years of U.S. Army service leading personnel, coordinating logistics, and managing complex operations.",
    icon: ShieldCheck,
  },
  {
    title: "Professional Experience",
    description:
      "Customer service, administrative coordination, technical troubleshooting, and process improvement.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Education",
    description:
      "Bachelor of Science program in Web Development at Full Sail University.",
    icon: GraduationCap,
  },
];

const skillGroups = [
  {
    title: "Front-End Development",
    icon: Code2,
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React",
      "Vue",
      "Vite",
      "Responsive Design",
      "Accessibility",
    ],
  },
  {
    title: "Back-End & Databases",
    icon: Database,
    skills: [
      "Node.js",
      "Express",
      "PostgreSQL",
      "Supabase",
      "MySQL",
      "MongoDB",
      "REST APIs",
    ],
  },
  {
    title: "Tools & Testing",
    icon: Wrench,
    skills: [
      "Git",
      "GitHub",
      "GitHub Actions",
      "VS Code",
      "Jest",
      "Postman",
      "Jira",
      "Agile / Scrum",
    ],
  },
  {
    title: "CMS & Design",
    icon: Palette,
    skills: [
      "WordPress",
      "PHP",
      "Figma",
      "Adobe Creative Cloud",
      "Canva",
      "SEO",
      "UI / UX",
    ],
  },
];

const experience = [
  {
    role: "Service Department — Customer Service & Work Orders",
    organization: "Commercial Residential Aluminum",
    dates: "2024 – 2025",
    details:
      "Coordinated service requests, repair scheduling, customer communications, and documentation for residential construction projects. Worked with homeowners, builders, and internal teams.",
  },
  {
    role: "WordPress Developer Intern",
    organization: "ERA Solutions / WPConnects",
    dates: "2023",
    details:
      "Supported WordPress development, debugging, database configuration, SEO, and website maintenance while working with Agile workflows and development tools.",
  },
  {
    role: "Transportation, Logistics & Operations Leader",
    organization: "United States Army",
    dates: "2003 – 2023",
    details:
      "Led personnel, managed transportation operations, coordinated mission requirements, trained soldiers, and analyzed processes to support complex logistics operations.",
  },
];

function App() {
  return (
    <>
      <header className="site-header">
        <a className="brand" href="#home">
          Angelica Reyes
        </a>

        <nav aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#github-projects">GitHub</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        {/* HERO */}
        <section className="hero" id="home">
          <p className="eyebrow">
            WELCOME TO MY PROFESSIONAL PORTFOLIO
          </p>

          <h1>Angelica Reyes</h1>

          <p className="hero-subtitle">
            U.S. Army Veteran | Web Developer |
            Technology & Operations Professional
          </p>

          <p className="hero-description">
            Combining 20 years of military leadership
            and operations experience with modern web
            development, technical problem-solving,
            and user-focused digital solutions.
          </p>

          <div className="hero-actions">
            <a className="primary-button" href="#projects">
              Explore My Work
            </a>

            <a
              className="secondary-button"
              href="https://github.com/ReyesAngelica-FS"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={18} />
              View GitHub
            </a>
          </div>
        </section>

        {/* ABOUT */}
        <section className="content-section" id="about">
          <p className="eyebrow">GET TO KNOW ME</p>
          <h2>About Me</h2>

          <div className="about-layout">
            <div className="about-photo-wrapper">
              <img
                src={`${import.meta.env.BASE_URL}images/angelica-professional.png`}
                alt="Professional portrait of Angelica Reyes"
                className="about-photo"
              />
            </div>
            <div className="about-copy">
            <p>
              I'm Angelica Reyes, a U.S. Army veteran,
              web developer, and technology professional
              with 20 years of military leadership,
              logistics, and operations experience.
            </p>

            <p>
              After retiring from the Army, I pursued
              my passion for technology through Web
              Development studies at Full Sail University.
              My technical experience includes building
              responsive web applications, working with
              databases, and creating interactive user
              interfaces using React, JavaScript,
              HTML, and CSS.
            </p>

            <p>
              Throughout my military and civilian
              careers, I've managed complex operations,
              coordinated teams, analyzed processes,
              trained personnel, and solved problems
              in fast-paced environments.
            </p>

            <p>
              Today, I combine that experience with
              software development, technical
              troubleshooting, and creative design
              to build practical, user-focused solutions.
            </p>

            <p className="about-goal">
              I'm particularly interested in opportunities
              involving web development, application
              support, IT, and business analysis.
            </p>
          </div>

          </div>

          <div className="highlight-grid">
            {highlights.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  className="highlight-card"
                  key={item.title}
                >
                  <div className="highlight-icon">
                    <Icon size={25} aria-hidden="true" />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              );
            })}
          </div>
        </section>

        {/* TECHNICAL SKILLS */}
        <section
          className="content-section skills-section"
          id="skills"
        >
          <p className="eyebrow">WHAT I WORK WITH</p>
          <h2>Technical Expertise</h2>

          <p className="section-intro">
            A combination of hands-on development
            experience, formal training, and technical
            tools used to create and maintain
            digital solutions.
          </p>

          <div className="skills-grid">
            {skillGroups.map((group) => {
              const Icon = group.icon;

              return (
                <article
                  className="skill-card"
                  key={group.title}
                >
                  <div className="skill-heading">
                    <Icon size={23} aria-hidden="true" />
                    <h3>{group.title}</h3>
                  </div>

                  <div className="skill-tags">
                    {group.skills.map((skill) => (
                      <span
                        className="skill-tag"
                        key={skill}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* MILITARY LEADERSHIP */}
        <section className="content-section military-section">
          <p className="eyebrow">SERVICE & LEADERSHIP</p>
          <h2>Military Leadership</h2>

          <p className="section-intro">
            My Army career developed the leadership,
            accountability, adaptability, and
            problem-solving skills that I bring
            to every professional opportunity.
          </p>

          <div className="achievement-grid">
            <article className="achievement-card">
              <strong>20 Years</strong>
              <span>Active-Duty Army Service</span>
            </article>

            <article className="achievement-card">
              <strong>250+</strong>
              <span>Soldiers Licensed & Trained</span>
            </article>

            <article className="achievement-card">
              <strong>300K+</strong>
              <span>Tons of Equipment Moved</span>
            </article>


          </div>

          <div className="military-summary">
            <Award size={25} aria-hidden="true" />
            <p>
              My experience includes transportation
              planning, distribution management,
              training, personnel leadership,
              operational coordination, and
              process improvement.
            </p>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section
          className="content-section experience-section"
          id="experience"
        >
          <p className="eyebrow">CAREER BACKGROUND</p>
          <h2>Professional Experience</h2>

          <div className="experience-list">
            {experience.map((job) => (
              <article
                className="experience-card"
                key={job.organization}
              >
                <div className="experience-header">
                  <div>
                    <h3>{job.role}</h3>
                    <p className="experience-organization">
                      {job.organization}
                    </p>
                  </div>

                  <span className="experience-dates">
                    {job.dates}
                  </span>
                </div>

                <p>{job.details}</p>
              </article>
            ))}
          </div>
        </section>

        {/* EDUCATION */}
        <section className="content-section education-section">
          <p className="eyebrow">CONTINUOUS LEARNING</p>
          <h2>Education & Development</h2>

          <article className="education-card">
            <GraduationCap
              size={32}
              aria-hidden="true"
            />

            <div>
              <h3>Full Sail University</h3>
              <p className="education-program">
                Bachelor of Science — Web Development
              </p>
              <p>
                Coursework and projects involving
                front-end development, back-end
                technologies, databases, application
                testing, responsive design, and
                software development practices.
              </p>
            </div>
          </article>
        </section>

        {/* FEATURED PROJECTS */}
        <section className="content-section projects-section" id="projects">
          <p className="eyebrow">SELECTED WORK</p>
          <h2>Explore My Portfolio</h2>
          <p className="section-intro">
            Explore live applications and websites I've developed.
          </p>

          <div className="featured-projects-grid">
            <article className="featured-project">
              <p className="eyebrow">FEATURED APPLICATION</p>
              <h3>Family Heritage Tree Demo</h3>
              <p>
                An interactive family genealogy application built with React,
                Vite, React Flow, and Supabase. This public demonstration uses
                fictional family records and a read-only database experience.
              </p>
              <div className="featured-links">
                <a
                  className="primary-button"
                  href="https://reyesangelica-fs.github.io/family-heritage-tree-demo/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink size={17} aria-hidden="true" />
                  Live Demo
                </a>
                <a
                  className="secondary-button"
                  href="https://github.com/ReyesAngelica-FS/family-heritage-tree-demo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub size={17} aria-hidden="true" />
                  Source Code
                </a>
              </div>
            </article>

            <article className="featured-project">
              <p className="eyebrow">COMMUNITY WEBSITE</p>
              <h3>PACC Website</h3>
              <p>
                A website demo for the Navigator Academy of Leadership parent
                community, designed to share school activities, announcements,
                and opportunities for family involvement.
              </p>
              <div className="featured-links">
                <a
                  className="primary-button"
                  href="https://reyesangelica-fs.github.io/PACC-Site_Valrico/#/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink size={17} aria-hidden="true" />
                  Visit Live Site
                </a>
              </div>
            </article>
          </div>
        </section>

        {/* EXISTING GITHUB GALLERY — PRESERVED */}
        <GitHubProjects />

        {/* CONTACT */}
        <section
          className="content-section contact-section"
          id="contact"
        >
          <p className="eyebrow">LET'S CONNECT</p>
          <h2>Contact Me</h2>

          <p className="section-intro">
            Interested in connecting, discussing
            opportunities, or learning more about
            my work? I would love to hear from you.
          </p>

          <div className="contact-links">
            <a href="mailto:angelica.reyes1.work@gmail.com">
              <Mail size={18} />
              Email Me
            </a>

            <a
              href="https://github.com/ReyesAngelica-FS"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={18} />
              GitHub
            </a>

            <span>
              <MapPin size={18} />
              Valrico, Florida
            </span>
          </div>

          <div className="contact-resume-actions">
            <a
              className="primary-button"
              href={`${import.meta.env.BASE_URL}Angelica_Reyes_Resume_2026.pdf`}
              download
            >
              <Download size={18} aria-hidden="true" />
              Download Resume
            </a>
            <a
              className="secondary-button"
              href={`${import.meta.env.BASE_URL}Angelica_Reyes_Resume_2026.pdf`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FileText size={18} aria-hidden="true" />
              View Resume
            </a>
          </div>
        </section>
      </main>

      <footer>
        © {new Date().getFullYear()} Angelica Reyes.
        All rights reserved.
      </footer>
    </>
  );
}

export default App;
