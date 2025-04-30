import React from "react";
import { 
  DiJavascript1, DiPython, DiJava, DiReact, DiNodejs, DiMongodb, DiGit
} from "react-icons/di";
import { 
  SiExpress, SiTypescript, SiHtml5, SiCss3, SiTailwindcss, SiMysql
} from "react-icons/si";

const Skills: React.FC = () => {
  const skills = [
    { name: "JavaScript", icon: <DiJavascript1 className="text-5xl text-yellow-400" /> },
    { name: "Python", icon: <DiPython className="text-5xl text-blue-500" /> },
    { name: "Java", icon: <DiJava className="text-5xl text-red-500" /> },
    { name: "React", icon: <DiReact className="text-5xl text-blue-400" /> },
    { name: "Node.js", icon: <DiNodejs className="text-5xl text-green-500" /> },
    { name: "Express", icon: <SiExpress className="text-5xl text-gray-100" /> },
    { name: "MongoDB", icon: <DiMongodb className="text-5xl text-green-400" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-5xl text-blue-600" /> },
    { name: "HTML5", icon: <SiHtml5 className="text-5xl text-orange-500" /> },
    { name: "CSS3", icon: <SiCss3 className="text-5xl text-blue-400" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-5xl text-teal-400" /> },
    { name: "MySQL", icon: <SiMysql className="text-5xl text-blue-500" /> },
    { name: "Git", icon: <DiGit className="text-5xl text-red-500" /> }
  ];

  return (
    <section
      id="skills"
      className="py-24 px-8 md:px-24 bg-secondary"
    >
      <div className="container mx-auto">
        <h2 className="flex items-center text-2xl md:text-3xl font-bold text-textLight mb-16">
          <span className="text-accent font-mono mr-2">02.</span> Skills
          <div className="ml-4 h-px bg-gray-600 flex-grow"></div>
        </h2>

        <div className="mb-12">
          <h3 className="text-xl text-textLight mb-6">Technical Expertise</h3>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {["Data Structures", "Object-Oriented Programming (OOP)", "API Development", 
              "Database Management", "Version Control", "Web Development"].map((item, index) => (
              <li key={index} className="flex items-center text-text">
                <span className="text-accent mr-2">▹</span> {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xl text-textLight mb-6">Technologies</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {skills.map((skill, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center justify-center bg-primary p-6 rounded-lg hover:transform hover:-translate-y-2 transition-all duration-300"
              >
                {skill.icon}
                <p className="mt-2 text-text">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;