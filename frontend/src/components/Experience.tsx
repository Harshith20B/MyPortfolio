import React, { useState } from "react";

interface Experience {
  company: string;
  position: string;
  period: string;
  responsibilities: string[];
}

const Experience: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const experiences: Experience[] = [
    {
      company: "NFThing",
      position: "Backend Developer Intern",
      period: "Jan 2024 - Dec 2024",
      responsibilities: [
        "Engineered and optimized RESTful APIs, resulting in improved application performance and reduced response times.",
        "Implemented efficient routing solutions and API optimizations, reducing the number of calls required for complex operations.",
        "Collaborated on database schema design and management using MongoDB, ensuring data integrity and optimal performance."
      ]
    },
    // {
    //   company: "Web3onwards Club",
    //   position: "Backend Developer",
    //   period: "Ongoing",
    //   responsibilities: [
    //     "Contributing to club projects by developing backend solutions for web3 applications.",
    //     "Collaborating with team members to design and implement efficient API architectures.",
    //     "Helping fellow members understand backend development concepts and best practices."
    //   ]
    // }
  ];

  return (
    <section
      id="experience"
      className="py-24 px-8 md:px-24 bg-secondary"
    >
      <div className="container mx-auto">
        <h2 className="flex items-center text-2xl md:text-3xl font-bold text-textLight mb-16">
          <span className="text-accent font-mono mr-2">04.</span> Experience
          <div className="ml-4 h-px bg-gray-600 flex-grow"></div>
        </h2>

        <div className="flex flex-col md:flex-row gap-8 max-w-3xl mx-auto">
          {/* Tabs */}
          <div className="md:w-1/4 flex md:flex-col overflow-x-auto md:overflow-visible">
            {experiences.map((exp, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-4 py-3 text-left font-mono text-sm whitespace-nowrap border-b-2 md:border-b-0 md:border-l-2 transition-all ${
                  activeTab === index
                    ? "text-accent border-accent bg-secondary md:bg-primary"
                    : "text-text border-gray-700 hover:bg-primary hover:text-textLight"
                }`}
              >
                {exp.company}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="md:w-3/4 pt-6 md:pt-0">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`${activeTab === index ? "block" : "hidden"}`}
              >
                <h3 className="text-xl text-textLight mb-1">
                  {exp.position} <span className="text-accent">@ {exp.company}</span>
                </h3>
                <p className="text-text font-mono text-sm mb-4">{exp.period}</p>
                <ul className="space-y-4">
                  {exp.responsibilities.map((item, i) => (
                    <li key={i} className="flex">
                      <span className="text-accent mr-2 mt-1">▹</span>
                      <span className="text-text">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;