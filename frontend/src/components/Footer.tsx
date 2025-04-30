import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary py-8 px-8 text-center">
      <div className="container mx-auto">
        <p className="text-text font-mono text-sm">
          Designed & Built by Harshith Bezawada
        </p>
        <p className="text-text font-mono text-sm mt-2">
          &copy; {new Date().getFullYear()} All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;