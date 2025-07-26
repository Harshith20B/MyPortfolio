import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

interface Project {
  title: string;
  description: string;
  techStack: string[];
  period: string;
  image: string;
  demoLink?: string;
  githubLink?: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: "Travel Planner with Social Features",
      description: "A full-stack travel platform utilizing the MERN stack, incorporating location-based search functionality and custom database integration. Features collaborative planning, itinerary sharing, and real-time updates.",
      techStack: ["MongoDB", "Express", "React", "Node", "JavaScript", "CSS"],
      period: "Oct 2024 - Nov 2024",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop&auto=format",
      githubLink: "https://github.com/Harshith20B/HAC_WebDev"
    },
    {
      title: "AI-Based Stock Trading Web App",
      description: "A full-stack trading simulator built with React and Flask, capable of processing 200+ mock trades. Features real-time stock analysis, AI-driven buy/sell decision support using LSTM models, and NLP-based sentiment analysis from financial news.",
      techStack: ["MongoDB", "Python", "Flask", "REST APIs", "React.js"],
      period: "Dec 2024 - Jan 2025",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=600&fit=crop&auto=format",
      githubLink: "https://github.com/Harshith20B/Stock-Analysis"
    },
    {
      title: "E-Commerce Platform",
      description: "A scalable e-commerce solution with real-time inventory management and dynamic product categorization capabilities. Implemented secure user authentication, shopping cart functionality, and automated price calculations.",
      techStack: ["HTML", "CSS", "JavaScript", "Node", "MongoDB", "Express"],
      period: "Feb 2024 - Apr 2024",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop&auto=format",
      githubLink: "https://github.com/Harshith20B/E_Commerce"
    },
    {
      title: "Cinemate: Movie Review Platform",
      description: "A responsive movie review platform with real-time rating updates and interactive user engagement features. Implemented MySQL for structured data storage and built a RESTful API using Node.js for CRUD operations.",
      techStack: ["HTML", "CSS", "JavaScript", "MySQL", "Node.js"],
      period: "Jun 2023 - Aug 2023",
      image: "https://images.unsplash.com/photo-1489599134-1ec46089d6c3?w=800&h=600&fit=crop&auto=format",
      githubLink: "https://github.com/Harshith20B/CineMate"
    }
  ];

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600' viewBox='0 0 800 600'%3E%3Crect width='800' height='600' fill='%23112240'/%3E%3Ctext x='400' y='300' text-anchor='middle' fill='%2364ffda' font-family='monospace' font-size='24'%3EProject Image%3C/text%3E%3C/svg%3E";
  };

  return (
    <section
      id="projects"
      className="py-12 md:py-24 px-4 md:px-24 bg-primary"
    >
      <div className="container mx-auto max-w-7xl">
        <h2 className="flex items-center text-xl md:text-3xl font-bold text-textLight mb-8 md:mb-16">
          <span className="text-accent font-mono mr-2">03.</span> Projects
          <div className="ml-4 h-px bg-gray-600 flex-grow"></div>
        </h2>

        <div className="space-y-16 md:space-y-32">
          {projects.map((project, index) => (
            <div key={index} className="relative">
              {/* Mobile Layout - Stack vertically for all projects */}
              <div className="md:hidden flex flex-col">
                <div className="w-full relative z-10 mb-6">
                  <div className="relative overflow-hidden rounded-lg aspect-video bg-secondary">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      onError={handleImageError}
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-accent bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
                
                <div className="w-full z-20">
                  <div className="bg-secondary p-6 rounded-lg shadow-xl border border-gray-700">
                    <p className="text-accent font-mono text-sm mb-2">Featured Project</p>
                    <h3 className="text-xl font-bold text-textLight mb-3">{project.title}</h3>
                    <p className="text-xs font-mono text-gray-400 mb-3">{project.period}</p>
                    <div className="bg-primary p-4 rounded-lg mb-4 border border-gray-700">
                      <p className="text-text text-sm leading-relaxed">{project.description}</p>
                    </div>
                    <ul className="flex flex-wrap gap-3 mb-6">
                      {project.techStack.map((tech, techIndex) => (
                        <li key={techIndex} className="text-text font-mono text-xs bg-primary px-2 py-1 rounded border border-gray-700">
                          {tech}
                        </li>
                      ))}
                    </ul>
                    <div className="flex gap-4">
                      {project.githubLink && (
                        <a
                          href={project.githubLink}
                          className="text-textLight hover:text-accent transition-colors duration-300 transform hover:scale-110"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`GitHub repository for ${project.title}`}
                        >
                          <FaGithub size={20} />
                        </a>
                      )}
                      {project.demoLink && (
                        <a
                          href={project.demoLink}
                          className="text-textLight hover:text-accent transition-colors duration-300 transform hover:scale-110"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Live demo for ${project.title}`}
                        >
                          <FaExternalLinkAlt size={20} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Desktop Layout - Alternating layout */}
              <div className={`hidden md:grid grid-cols-12 gap-8 items-center ${index % 2 === 0 ? '' : 'text-right'}`}>
                {/* Project Image */}
                <div className={`col-span-7 relative z-10 ${index % 2 === 0 ? 'order-1' : 'order-2'}`}>
                  <div className="relative group overflow-hidden rounded-lg aspect-video bg-secondary shadow-2xl">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                      onError={handleImageError}
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-accent bg-opacity-30 opacity-60 group-hover:opacity-0 transition-opacity duration-300"></div>
                  </div>
                </div>

                {/* Project Info */}
                <div className={`col-span-6 relative z-20 ${index % 2 === 0 ? 'order-2 -ml-8' : 'order-1 -mr-8'}`}>
                  <div className={`bg-secondary p-8 rounded-lg shadow-2xl border border-gray-700 ${
                    index % 2 === 0 ? 'text-right' : 'text-left'
                  }`}>
                    <p className="text-accent font-mono text-sm mb-2">Featured Project</p>
                    <h3 className="text-2xl font-bold text-textLight mb-2">{project.title}</h3>
                    <p className="text-sm font-mono text-gray-400 mb-4">{project.period}</p>
                    <div className="bg-primary p-6 rounded-lg mb-6 shadow-inner border border-gray-700">
                      <p className="text-text leading-relaxed">{project.description}</p>
                    </div>
                    <ul className={`flex flex-wrap gap-3 mb-6 ${
                      index % 2 === 0 ? 'justify-end' : 'justify-start'
                    }`}>
                      {project.techStack.map((tech, techIndex) => (
                        <li key={techIndex} className="text-text font-mono text-sm bg-primary px-3 py-1 rounded border border-gray-700 hover:border-accent transition-colors duration-300">
                          {tech}
                        </li>
                      ))}
                    </ul>
                    <div className={`flex gap-4 ${
                      index % 2 === 0 ? 'justify-end' : 'justify-start'
                    }`}>
                      {project.githubLink && (
                        <a
                          href={project.githubLink}
                          className="text-textLight hover:text-accent transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`GitHub repository for ${project.title}`}
                        >
                          <FaGithub size={22} />
                        </a>
                      )}
                      {project.demoLink && (
                        <a
                          href={project.demoLink}
                          className="text-textLight hover:text-accent transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Live demo for ${project.title}`}
                        >
                          <FaExternalLinkAlt size={22} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;