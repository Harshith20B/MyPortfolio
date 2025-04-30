import React from "react";

interface Education {
  school: string;
  degree: string;
  period: string;
  location: string;
  details?: string;
}

const Education: React.FC = () => {
  const educations: Education[] = [
    {
      school: "Ramaiah Institute of Technology",
      degree: "B.Tech - Information Science and Engineering",
      period: "2022 - 2026",
      location: "Bengaluru, Karnataka",
      details: "CGPA: 9.53"
    },
    {
      school: "Sri Chaitanya Techno College",
      degree: "MPC (Mathematics, Physics, Chemistry)",
      period: "2018 - 2022",
      location: "Bengaluru, Karnataka",
      details: "12th Percentage: 84.8, 10th Percentage: 93.8"
    }
  ];

  return (
    <section
      id="education"
      className="py-24 px-8 md:px-24 bg-primary"
    >
      <div className="container mx-auto">
        <h2 className="flex items-center text-2xl md:text-3xl font-bold text-textLight mb-16">
          <span className="text-accent font-mono mr-2">05.</span> Education
          <div className="ml-4 h-px bg-gray-600 flex-grow"></div>
        </h2>

        <div className="space-y-12 max-w-3xl mx-auto">
          {educations.map((edu, index) => (
            <div
              key={index}
              className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-accent"
            >
              <div className="absolute left-0 top-0 w-2 h-2 rounded-full bg-accent translate-x-[-4px]"></div>
              <div className="mb-2">
                <span className="text-accent font-mono text-sm">{edu.period}</span>
              </div>
              <h3 className="text-xl text-textLight mb-1">{edu.school}</h3>
              <p className="text-text mb-1">{edu.degree}</p>
              <p className="text-text mb-2">{edu.location}</p>
              {edu.details && <p className="text-text italic">{edu.details}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;