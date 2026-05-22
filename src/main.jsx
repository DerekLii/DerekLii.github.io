import React from "react";
import { createRoot } from "react-dom/client";
import { FileText, Github, Linkedin, Mail, MapPin } from "lucide-react";
import "./styles.css";

const contactLinks = [
  {
    label: "Toronto, ON",
    icon: MapPin,
  },
  {
    label: "Resume",
    href: "/resume.pdf",
    icon: FileText,
  },
  {
    label: "Email",
    href: "mailto:derekli.work@gmail.com",
    icon: Mail,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/derek-li7/",
    icon: Linkedin,
  },
  {
    label: "GitHub",
    href: "https://github.com/DerekLii",
    icon: Github,
  },
];

const projects = [
  {
    name: "Project Atlas",
    href: "https://example.com",
    thumbnail:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Campus Connect",
    href: "https://example.com",
    thumbnail:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Portfolio Engine",
    href: "https://example.com",
    thumbnail:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Data Lens",
    href: "https://example.com",
    thumbnail:
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Task Flow",
    href: "https://example.com",
    thumbnail:
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Cloud Notes",
    href: "https://example.com",
    thumbnail:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Fit Tracker",
    href: "https://example.com",
    thumbnail:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Market Pulse",
    href: "https://example.com",
    thumbnail:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Study Buddy",
    href: "https://example.com",
    thumbnail:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80",
  },
];

function App() {
  return (
    <main className="page-shell">
      <header className="site-header" aria-labelledby="page-title">
        <h1 id="page-title">Derek Li</h1>
        <nav className="contact-row" aria-label="Contact links">
          {contactLinks.map(({ label, href, icon: Icon }) => (
            <a key={label} href={href} className="contact-link">
              <Icon size={16} aria-hidden="true" />
              <span>{label}</span>
            </a>
          ))}
        </nav>
      </header>

      <section className="project-grid" aria-label="Projects">
        {projects.map((project) => (
          <a
            key={project.name}
            href={project.href}
            className="project-card"
            aria-label={`Open ${project.name}`}
          >
            <img src={project.thumbnail} alt="" loading="lazy" />
            <div className="project-card__footer">
              <h2>{project.name}</h2>
            </div>
          </a>
        ))}
      </section>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
