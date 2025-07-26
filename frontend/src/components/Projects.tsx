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
      image: "/assets/images/travel-planner.jpg",
      githubLink: "https://github.com/Harshith20B/HAC_WebDev"
    },
    {
      title: "AI-Based Stock Trading Web App",
      description: "A full-stack trading simulator built with React and Flask, capable of processing 200+ mock trades. Features real-time stock analysis, AI-driven buy/sell decision support using LSTM models, and NLP-based sentiment analysis from financial news.",
      techStack: ["MongoDB", "Python", "Flask", "REST APIs", "React.js"],
      period: "Dec 2024 - Jan 2025",
      image: "/assets/images/stock-trading-app.jpg",
      githubLink: "https://github.com/Harshith20B/Stock-Analysis"
    },
    {
      title: "E-Commerce Platform",
      description: "A scalable e-commerce solution with real-time inventory management and dynamic product categorization capabilities. Implemented secure user authentication, shopping cart functionality, and automated price calculations.",
      techStack: ["HTML", "CSS", "JavaScript", "Node", "MongoDB", "Express"],
      period: "Feb 2024 - Apr 2024",
      image: "/assets/images/ecommerce.jpg",
      githubLink: "https://github.com/Harshith20B/E_Commerce"
    },
    {
      title: "Cinemate: Movie Review Platform",
      description: "A responsive movie review platform with real-time rating updates and interactive user engagement features. Implemented MySQL for structured data storage and built a RESTful API using Node.js for CRUD operations.",
      techStack: ["HTML", "CSS", "JavaScript", "MySQL", "Node.js"],
      period: "Jun 2023 - Aug 2023",
      image: "/assets/images/cinemate.jpg",
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
                <div className="w-full relative z-10 mb-4">
                  <div className="relative overflow-hidden rounded-lg">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover"
                      onError={handleImageError}
                    />
                  </div>
                </div>
                
                <div className="w-full z-20">
                  <div className="bg-secondary p-5 rounded-lg shadow-xl">
                    <p className="text-accent font-mono text-sm mb-2">Featured Project</p>
                    <h3 className="text-lg font-bold text-textLight mb-3">{project.title}</h3>
                    <div className="bg-primary p-4 rounded-lg mb-4">
                      <p className="text-text text-sm">{project.description}</p>
                    </div>
                    <ul className="flex flex-wrap gap-2 mb-4">
                      {project.techStack.map((tech, techIndex) => (
                        <li key={techIndex} className="text-text font-mono text-xs">
                          {tech}
                        </li>
                      ))}
                    </ul>
                    <div className="flex gap-4">
                      {project.githubLink && (
                        <a
                          href={project.githubLink}
                          className="text-textLight hover:text-accent transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`GitHub repository for ${project.title}`}
                        >
                          <FaGithub size={18} />
                        </a>
                      )}
                      {project.demoLink && (
                        <a
                          href={project.demoLink}
                          className="text-textLight hover:text-accent transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Live demo for ${project.title}`}
                        >
                          <FaExternalLinkAlt size={18} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Desktop Layout - Alternating layout */}
              <div className={`hidden md:flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center gap-8`}>
                {/* Project Image */}
                <div className="w-3/5 relative z-10">
                  <div className="relative group overflow-hidden rounded-lg">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                      onError={handleImageError}
                    />
                    <div className="absolute inset-0 bg-accent bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="w-2/5 relative z-20">
                  <div className={`bg-secondary p-8 rounded-lg shadow-xl ${
                    index % 2 === 0 ? 'text-right' : 'text-left'
                  }`}>
                    <p className="text-accent font-mono mb-2">Featured Project</p>
                    <h3 className="text-2xl font-bold text-textLight mb-4">{project.title}</h3>
                    <div className="bg-primary p-6 rounded-lg mb-4">
                      <p className="text-text">{project.description}</p>
                    </div>
                    <ul className={`flex flex-wrap gap-3 mb-6 ${
                      index % 2 === 0 ? 'justify-end' : 'justify-start'
                    }`}>
                      {project.techStack.map((tech, techIndex) => (
                        <li key={techIndex} className="text-text font-mono text-sm">
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
                          className="text-textLight hover:text-accent transition-colors"
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
                          className="text-textLight hover:text-accent transition-colors"
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;