/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
      "./public/index.html"
    ],
    theme: {
      extend: {
        colors: {
          primary: "#0a192f",
          secondary: "#112240",
          accent: "#64ffda",
          text: "#8892b0",
          textLight: "#ccd6f6",
        },
        fontFamily: {
          sans: ["Roboto", "sans-serif"],
          mono: ["Fira Code", "monospace"],
        },
      },
    },
    plugins: [],
  }