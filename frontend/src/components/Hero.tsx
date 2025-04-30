import React from "react";

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="h-screen flex flex-col justify-center items-start px-8 md:px-24 bg-primary"
    >
      <div className="container mx-auto">
        <p className="text-accent font-mono mb-5">Hi, my name is</p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-textLight mb-4">
          Harshith Bezawada.
        </h1>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-text mb-6">
          I build things for the web.
        </h2>
        <p className="text-text max-w-xl mb-12 text-lg">
          I'm a software engineering student specializing in full-stack development
          with expertise in building exceptional digital experiences.
          Currently focused on building accessible, responsive web applications
          with modern technologies.
        </p>
        <a
          href="#projects"
          className="border border-accent text-accent hover:bg-accent hover:bg-opacity-10 px-6 py-4 rounded font-mono text-sm transition-all duration-300"
        >
          Check out my work!
        </a>
      </div>
    </section>
  );
};

export default Hero;