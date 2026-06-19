import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { FileText, Github, Linkedin, Mail, MapPin } from "lucide-react";
import "./styles.css";
import mqttpic from "./blog_images/mqtt.png";
import mqttpic2 from "./blog_images/mqtt2.png";
import letter_report from "./blog_images/letter_report.png";

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
]

const posts = [
  {
    date: "June 19, 2026",
    title: "Sample pick up day and report generator work",
    body: `Today was a different day than usual. I had to drive early morning and pick up sample products from the testing facility, so I could make some adjustments to them at the office. I decided that I'll do all that handiwork this weekend, so that I can focus on the initial steps for the report generator by creating some generic templates using Python Google Sheets APIbased on what I've learned so far about how the reports look. 
    
    The formulas were pretty standard and consistent throughout the sheets, so it was mostly just a matter of translating them into Python and making sure I can populate the right cells with the right data. I also started drafting up some documentation for how to use the report generator, so that it's easier for other people on the team to use and understand how it works. Overall, it was a productive day and I'm excited to see how the report generator will help our team in the long run!`,
  },
  {
    date: "June 18, 2026",
    title: "IoT Learning Day 1 - MQTT pub/sub",
    body: `Today I tinkered around with MQTT using Mosquitto pub/sub architecture on Ubuntu

- MQTT Topics and how we can use them to filter and route messages to clients efficiently
- MQTT Wildcards and how we can use them to subscribe to multiple channels of the same category
- Sending JSON payloads instead of plain text messages to simulate real-world structured IoT data and metadata
- Debugging messages to inspect packets exchanged between the client and the broker.
- How to configure listeners and add rules by modifying the configuration files`,
    images: [
      { src: mqttpic, alt: "MQTT terminal output" },
      { src: mqttpic2, alt: "MQTT subscriber output" },
    ],
  },
  {
    date: "June 17, 2026",
    title: "AI for report building",
    body: "Had a meeting with the team today to discuss how we can use AI to help our report building process. It's incredibly time consuming for our analysts to build out the reports, so we're hoping to use AI to help speed up the process. However, first we had to understand the current process and understand the different components of the reports. We went through the different sections and talked about how we can use AI to help with each part. Our plan is to start with a small proof of concept for the easier sections of the report process, and then expand and piece together the different components as we go. I'm excited to see how this will help our team and make the report building process more efficient. Similar to my last project, I'll be working with Google Sheets API again.",
    images: [
      {
        src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
        alt: "Laptop with code open on a desk",
      },
    ],
  },
  {
    date: "June 17, 2026",
    title: "Certification meeting",
    body: "Had a meeting today with the testing company to go over certification regulations with our new PCB cases. It was interesting to learn about the different requirements (UL vs CSA for HVAC and electrical equipment) and how they impact our development process. Trying to get into the habit of staying very organized, as regulations always require specific details to get certified. I drafted up most of the letter report response already, so now I'm just waiting on some more information before I send it off.",
    images: [{ src: letter_report, alt: "Letter report response" }],
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
              {post.images?.map((image) => (
                <img
                  key={image.src}
                  src={image.src}
                  alt={image.alt ?? ""}
                  className="post-image"
                  loading="lazy"
                />
              ))}
            </article>
          ))}
        </section>
      )}
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
