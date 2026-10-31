
import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  ArrowRight,
  Mail,
  Menu,
  X,
  Download,
  Code2,
  Layers3,
  Smartphone,
  Globe,
  Sparkles,
  ExternalLink
} from "lucide-react";
import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp
} from "react-icons/fa";


const profile = {
  name: "NJUGUNA COLLINS MBUTHIA",
  role: "Digital Entrepreneur & Developer",
  location: "Kenya",
  email: "collinsnjuguna001@gmail.com",
  whatsapp: "254141828578",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  introduction:
    "I build digital experiences, useful software and solutions that turn ideas into reality.",
  about:
    "I'm a creative developer and digital entrepreneur passionate about technology, business and solving everyday problems. I enjoy turning ideas into practical digital products that make life and work easier."
};

const projects = [
  {
    number: "01",
    name: "DigiUnlock",
    category: "Digital Marketplace",
    description:
      "A platform for discovering and selling digital products, templates and useful resources.",
    stack: "React · Firebase · JavaScript",
    link: "#contact"
  },
  {
    number: "02",
    name: "Castiel Pay",
    category: "Fintech",
    description:
      "A payment solution designed to help digital businesses accept online payments.",
    stack: "React · Node.js · M-Pesa",
    link: "#contact"
  },
  {
    number: "03",
    name: "Shop Teketeke",
    category: "E-commerce",
    description:
      "A modern supermarket shopping experience with product discovery and order management.",
    stack: "React · Firestore · CSS",
    link: "#contact"
  }
];

const skills = [
  "JavaScript",
  "React",
  "Vite",
  "HTML & CSS",
  "Firebase",
  "Firestore",
  "Node.js",
  "Python",
  "UI Design",
  "Digital Product Development"
];

const services = [
  {
    icon: Globe,
    title: "Website Development",
    description: "Modern, responsive websites for individuals and businesses."
  },
  {
    icon: Smartphone,
    title: "Web Applications",
    description: "Useful web apps and installable PWAs for everyday problems."
  },
  {
    icon: Layers3,
    title: "Digital Products",
    description: "Templates, digital tools and products that help people work smarter."
  }
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [installPrompt, setInstallPrompt] = useState(null);
  const [installMessage, setInstallMessage] = useState("");

  useEffect(() => {
    const handleInstall = (event) => {
      event.preventDefault();
      setInstallPrompt(event);
    };

    const handleInstalled = () => {
      setInstallPrompt(null);
      setInstallMessage("Folio has been installed successfully.");
    };

    window.addEventListener("beforeinstallprompt", handleInstall);
    window.addEventListener("appinstalled", handleInstalled);

    return () => {
      window.removeEventListener("beforeinstallprompt", handleInstall);
      window.removeEventListener("appinstalled", handleInstalled);
    };
  }, []);

  async function installApp() {
    if (!installPrompt) {
      setInstallMessage(
        "Open your browser menu and choose Install app or Add to Home screen."
      );
      return;
    }

    installPrompt.prompt();
    const result = await installPrompt.userChoice;

    if (result.outcome === "accepted") {
      setInstallMessage("Installation started.");
    }

    setInstallPrompt(null);
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <div className="app-shell">
      <header className="navbar">
        <a href="#home" className="brand" onClick={closeMenu}>
          NCOLLINSM<span>.</span>
        </a>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#services" onClick={closeMenu}>Services</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>

        <button className="install-button" onClick={installApp}>
          <Download size={17} />
          <span>Install app</span>
        </button>

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <main>
        <section className="hero section" id="home">
          <div className="hero-content">
            <div className="availability">
              <span className="availability-dot"></span>
              OPEN TO OPPORTUNITIES
            </div>

            <p className="eyebrow">HELLO, I'M {profile.name.toUpperCase()}</p>

            <h1>
              Ideas into
              <br />
              <span>digital reality.</span>
            </h1>

            <p className="hero-description">
              {profile.introduction}
            </p>

            <div className="hero-actions">
              <a href="#projects" className="primary-button">
                Explore my work <ArrowUpRight size={19} />
              </a>

              <a href="#contact" className="secondary-button">
                Let's talk <ArrowRight size={18} />
              </a>
            </div>

            <div className="hero-location">
              <span>BASED IN {profile.location.toUpperCase()}</span>
              <span className="location-line"></span>
              <span>AVAILABLE WORLDWIDE</span>
            </div>
          </div>

          <div className="hero-art">
            <div className="art-circle">
              <div className="art-inner">
                <Code2 size={72} strokeWidth={1.1} />
                <span>CREATE.</span>
                <span>BUILD.</span>
                <span>IMPACT.</span>
              </div>
            </div>
            <div className="floating-card card-top">
              <Sparkles size={17} />
              <span>Creative thinking</span>
            </div>
            <div className="floating-card card-bottom">
              <Code2 size={17} />
              <span>Building solutions</span>
            </div>
            <div className="art-number">01 / 04</div>
          </div>
        </section>

        <section className="intro-strip">
          <p>
            DESIGNING IDEAS <span>✳</span> BUILDING PRODUCTS <span>✳</span>
            SOLVING PROBLEMS <span>✳</span> THINKING FORWARD
          </p>
        </section>

        <section className="section about-section" id="about">
          <div className="section-heading">
            <p className="eyebrow">01 — ABOUT ME</p>
            <h2>Curious mind.<br /><span>Builder's mindset.</span></h2>
          </div>

          <div className="about-content">
            <p className="about-text">{profile.about}</p>

            <div className="about-facts">
              <div>
                <strong>01</strong>
                <span>Creative problem solving</span>
              </div>
              <div>
                <strong>02</strong>
                <span>Digital product building</span>
              </div>
              <div>
                <strong>03</strong>
                <span>Continuous learning</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section skills-section">
          <div className="section-heading">
            <p className="eyebrow">02 — MY TOOLKIT</p>
            <h2>Skills & <span>technologies.</span></h2>
          </div>

          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div className="skill-chip" key={skill}>
                <span className="skill-index">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {skill}
                <ArrowUpRight size={16} />
              </div>
            ))}
          </div>
        </section>

        <section className="section projects-section" id="projects">
          <div className="section-heading project-heading">
            <div>
              <p className="eyebrow">03 — SELECTED WORK</p>
              <h2>Things I've <span>built.</span></h2>
            </div>
            <p className="heading-note">
              A selection of ideas and products I'm working on.
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-top">
                  <span>{project.number} / PROJECT</span>
                  <ArrowUpRight size={21} />
                </div>

                <div className="project-visual">
                  <span className="visual-symbol">✳</span>
                  <span className="visual-name">{project.name}</span>
                </div>

                <p className="project-category">{project.category}</p>
                <h3>{project.name}</h3>
                <p className="project-description">
                  {project.description}
                </p>
                <p className="project-stack">{project.stack}</p>

                <a href={project.link} className="project-link">
                  View project <ExternalLink size={16} />
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="section services-section" id="services">
          <div className="section-heading">
            <p className="eyebrow">04 — WHAT I DO</p>
            <h2>Ideas deserve <span>to be built.</span></h2>
          </div>

          <div className="services-grid">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <article className="service-card" key={service.title}>
                  <span className="service-number">
                    0{index + 1}
                  </span>
                  <Icon size={31} strokeWidth={1.4} />
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <a href="#contact">
                    Discuss a project <ArrowUpRight size={16} />
                  </a>
                </article>
              );
            })}
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-inner">
            <p className="eyebrow">05 — GET IN TOUCH</p>
            <h2>
              Have an idea?
              <br />
              <span>Let's build it.</span>
            </h2>
            <p>
              Have a project, opportunity or interesting problem?
              I'd love to hear from you.
            </p>

            <a
              href={`mailto:${profile.email}`}
              className="primary-button contact-button"
            >
              Send me an email <Mail size={18} />
            </a>

            <div className="social-links">
  <a href={profile.github} target="_blank" rel="noreferrer">
    <FaGithub size={20} />
    GitHub
  </a>

  <a href={profile.linkedin} target="_blank" rel="noreferrer">
    <FaLinkedin size={20} />
    LinkedIn
  </a>

  <a
    href={`https://wa.me/${profile.whatsapp}`}
    target="_blank"
    rel="noreferrer"
  >
    <FaWhatsapp size={20} />
    WhatsApp
  </a>
</div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <a href="#home" className="brand">NCOLLINSM<span>.</span></a>
        <p>© {new Date().getFullYear()} {profile.name}. Built with purpose.</p>
        <a href="#home" className="back-top">BACK TO TOP ↑</a>
      </footer>

      {installMessage && (
        <div className="install-message" role="status">
          {installMessage}
          <button onClick={() => setInstallMessage("")} aria-label="Close">
            <X size={16} />
          </button>
        </div>
      )}
    </div>
  );
}
