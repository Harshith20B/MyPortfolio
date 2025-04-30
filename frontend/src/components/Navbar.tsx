import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navItems = [
    { name: "About", to: "about" },
    { name: "Skills", to: "skills" },
    { name: "Projects", to: "projects" },
    { name: "Experience", to: "experience" },
    { name: "Education", to: "education" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-primary bg-opacity-95 shadow-lg py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <Link
          to="hero"
          smooth={false}
          duration={100}
          className="text-2xl font-bold text-accent cursor-pointer"
        >
          HB
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.to}
              smooth={true}
              duration={500}
              offset={-70}
              className="text-textLight hover:text-accent cursor-pointer font-mono text-sm tracking-wider transition-colors"
            >
              <span className="text-accent">{`0${index + 1}. `}</span>
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-accent focus:outline-none"
          >
            {mobileMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-secondary py-4 px-4">
          <div className="flex flex-col space-y-4">
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.to}
                smooth={true}
                duration={500}
                offset={-70}
                onClick={() => setMobileMenuOpen(false)}
                className="text-textLight hover:text-accent cursor-pointer font-mono text-sm tracking-wider transition-colors py-2"
              >
                <span className="text-accent">{`0${index + 1}. `}</span>
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;