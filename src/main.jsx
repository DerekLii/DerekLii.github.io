import React, { useState } from "react";
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

const posts = [
  {
    date: "May 22, 2026",
    title: "Starting fresh",
    body: "I rebuilt this portfolio to feel lighter, faster, and easier to keep current. The next step is making the work and writing live together without getting in each other's way.",
  },
  {
    date: "May 18, 2026",
    title: "Small interfaces",
    body: "I keep coming back to interfaces that do one thing clearly. Less chrome, better defaults, and enough personality to make the tool feel cared for.",
  },
  {
    date: "June 16, 2026",
    title: "Technical project manager",
    body: "Both technical project managers have left the company, so I'll be taking over the responsibilities. I get to help the team make better decisions and keep the work moving forward. Keeping track of the work and helping the team stay organized is new to me, but I'm excited to take it on. I hope to keep learning more about the technical side of things and continue to grow as both a technical project manager and a developer.",
  },
];

function App() {
  const [activeTab, setActiveTab] = useState("projects");

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

      <nav className="tab-row" aria-label="Portfolio sections">
        {["projects", "blog"].map((tab) => (
          <button
            key={tab}
            type="button"
            className={`tab-button ${activeTab === tab ? "is-active" : ""}`}
            aria-pressed={activeTab === tab}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </nav>

      {activeTab === "projects" ? (
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
      ) : (
        <section className="post-thread" aria-label="Blog posts">
          {posts.map((post) => (
            <article key={`${post.date}-${post.title}`} className="post-card">
              <time dateTime={new Date(post.date).toISOString()}>
                {post.date}
              </time>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </article>
          ))}
        </section>
      )}
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
