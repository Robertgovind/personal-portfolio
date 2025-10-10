import ThemeToggle from "./ThemeToggle";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { to: "home", text: "Home" },
    { to: "about", text: "About" },
    { to: "skills", text: "Skills" },
    { to: "projects", text: "Projects" },
    { to: "experience", text: "Experience" },
    { to: "certifications", text: "Certifications" },
    { to: "contact", text: "Contact" },
  ];

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setOpen(false);
    }
  };

  return (
    <nav className="bg-gray-900/90 position-fixed backdrop-blur-md text-white sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleScroll("home");
          }}
          className="text-xl font-bold text-blue-400 tracking-wide"
        >
          GovindYadav
        </a>

        <div className="hidden md:flex space-x-6 items-center">
          {links.map((link) => (
            <button
              key={link.to}
              onClick={() => handleScroll(link.to)}
              className="hover:text-blue-400 transition-colors duration-200"
            >
              {link.text}
            </button>
          ))}
          <ThemeToggle />
        </div>

        <button
          className="md:hidden text-blue-400 focus:outline-none"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-gray-800 px-6 pb-4 space-y-3 animate-fadeIn">
          {links.map((link) => (
            <button
              key={link.to}
              onClick={() => handleScroll(link.to)}
              className="block w-full text-left hover:text-blue-400 transition-colors duration-200"
            >
              {link.text}
            </button>
          ))}
          <ThemeToggle />
        </div>
      )}
    </nav>
  );
}
