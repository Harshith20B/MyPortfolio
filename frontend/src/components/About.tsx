import React from "react";

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="py-24 px-8 md:px-24 bg-primary"
    >
      <div className="container mx-auto">
        <h2 className="flex items-center text-2xl md:text-3xl font-bold text-textLight mb-16">
          <span className="text-accent font-mono mr-2">01.</span> About Me
          <div className="ml-4 h-px bg-gray-600 flex-grow"></div>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            <p className="text-text mb-4">
              Hello! I'm Harshith, a software engineering student at Ramaiah Institute of Technology 
              with a passion for building web applications and solving real-world problems through technology.
            </p>
            <p className="text-text mb-4">
              My journey in programming began during my early college years, and I've since developed a 
              strong foundation in full-stack development, API architecture, and data structures. I enjoy 
              working with both frontend and backend technologies to create seamless user experiences.
            </p>
            <p className="text-text mb-4">
              Currently, I'm focused on expanding my knowledge in cloud technologies and building 
              scalable web solutions. I'm passionate about writing efficient, maintainable code and 
              continuously improving my development skills.
            </p>
            <p className="text-text">
              When I'm not coding, you can find me contributing to the Web3onwards Club as a Backend Developer
              and participating in hackathons to challenge myself with new problems.
            </p>
          </div>

          <div className="relative group">
            <div className="bg-accent w-full h-full absolute rounded-md top-4 left-4 -z-10 group-hover:top-2 group-hover:left-2 transition-all duration-300"></div>
            <div className="overflow-hidden rounded-md bg-secondary">
              <img
                src="/assets/images/profile.jpg"
                alt="Harshith Bezawada"
                className="w-full h-full transition-all hover:grayscale-0"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;