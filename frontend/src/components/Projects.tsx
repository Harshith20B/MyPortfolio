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

  return (
    <section
      id="projects"
      className="py-24 px-8 md:px-24 bg-primary"
    >
      <div className="container mx-auto">
        <h2 className="flex items-center text-2xl md:text-3xl font-bold text-textLight mb-16">
          <span className="text-accent font-mono mr-2">03.</span> Projects
          <div className="ml-4 h-px bg-gray-600 flex-grow"></div>
        </h2>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <div key={index} className={`relative flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}>
              {/* Project Image */}
              <div className={`w-full md:w-3/5 relative z-10 ${index % 2 === 0 ? 'md:right-0' : 'md:left-0'}`}>
                <div className="relative group overflow-hidden rounded-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Project Info */}
              <div className={`w-full md:w-1/2 absolute md:relative z-20 ${
                index % 2 === 0 ? 'md:left-0' : 'md:right-0'
              } p-6 md:p-0`}>
                <div className={`bg-secondary p-6 md:p-8 rounded-lg shadow-xl ${
                  index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                }`}>
                  <p className="text-accent font-mono mb-2">Featured Project</p>
                  <h3 className="text-xl md:text-2xl font-bold text-textLight mb-4">{project.title}</h3>
                  <div className="bg-primary p-6 rounded-lg mb-4">
                    <p className="text-text">{project.description}</p>
                  </div>
                  <ul className={`flex flex-wrap gap-3 mb-6 ${
                    index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'
                  }`}>
                    {project.techStack.map((tech, techIndex) => (
                      <li key={techIndex} className="text-text font-mono text-sm">
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <div className={`flex gap-4 ${
                    index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'
                  }`}>
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        className="text-textLight hover:text-accent transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
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
                      >
                        <FaExternalLinkAlt size={20} />
                      </a>
                    )}
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