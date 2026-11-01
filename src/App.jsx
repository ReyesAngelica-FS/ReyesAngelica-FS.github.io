
import {
  Mail,
  MapPin,
  Code2,
  Palette,
  BriefcaseBusiness,
} from "lucide-react";

import { FaGithub } from "react-icons/fa";
import GitHubProjects from "./components/GitHubProjects";

import "./App.css";

// Portfolio categories
const sections = [
  {
    title: "Web Development",
    description:
      "Explore my programming projects, applications, and GitHub repositories.",
    icon: Code2,
  },
  {
    title: "Website Projects",
    description:
      "Websites developed for organizations and community initiatives.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Graphic Design",
    description:
      "Branding, promotional materials, digital graphics, and visual communication.",
    icon: Palette,
  },
];

function App() {
  return (
    <>
      {/* Navigation */}
      <header className="site-header">
        <a className="brand" href="#home">
          Angelica Reyes
        </a>

        <nav aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#github-projects">GitHub</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="hero" id="home">
          <p className="eyebrow">
            WELCOME TO MY PROFESSIONAL PORTFOLIO
          </p>

          <h1>Angelica Reyes</h1>

          <p className="hero-subtitle">
            U.S. Army Veteran | Web Development |
            Technical Support &amp; Operations
          </p>

          <p className="hero-description">
            Combining 20 years of military leadership
            and operations experience with web
            development, technical problem-solving,
            and creative design.
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

        {/* About Me */}
        <section className="content-section" id="about">
          <p className="eyebrow">GET TO KNOW ME</p>

          <h2>About Me</h2>

          <p className="section-intro">
            I am a retired U.S. Army veteran with
            20 years of experience in leadership,
            logistics, customer service, and
            administrative coordination.
            My background in web development has
            expanded my skills in building websites,
            troubleshooting technical issues,
            and creating practical digital solutions.
          </p>
        </section>

        {/* Portfolio Categories */}
        <section
          className="content-section projects-section"
          id="projects"
        >
          <p className="eyebrow">SELECTED WORK</p>

          <h2>Explore My Portfolio</h2>

          <div className="project-grid">
            {sections.map((section) => {
              const Icon = section.icon;

              return (
                <article
                  className="project-card"
                  key={section.title}
                >
                  <div className="project-icon">
                    <Icon size={26} />
                  </div>

                  <h3>{section.title}</h3>

                  <p>{section.description}</p>
                </article>
              );
            })}
          </div>
        </section>

        {/* Live GitHub Repository Gallery */}
        <GitHubProjects />

        {/* Contact Section */}
        <section
          className="content-section contact-section"
          id="contact"
        >
          <p className="eyebrow">LET'S CONNECT</p>

          <h2>Contact Me</h2>

          <p className="section-intro">
            Interested in connecting, discussing
            opportunities, or learning more about my
            work? I would love to hear from you.
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
              Brandon, Florida
            </span>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer>
        © {new Date().getFullYear()} Angelica Reyes.
        All rights reserved.
      </footer>
    </>
  );
}

export default App;
