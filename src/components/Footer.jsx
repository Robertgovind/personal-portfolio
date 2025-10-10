import React from "react";
import { SiGithub, SiLinkedin, SiGmail } from "react-icons/si";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Link } from "react-scroll";

export default function Footer() {
  const socialLinks = [
    {
      name: "GitHub",
      icon: <SiGithub className="w-6 h-6" />,
      link: "https://github.com/Robertgovind",
    },
    {
      name: "LinkedIn",
      icon: <SiLinkedin className="w-6 h-6" />,
      link: "https://www.linkedin.com/in/govind-kr-yadav-715b9426a/",
    },
    {
      name: "Email",
      icon: <SiGmail className="w-6 h-6" />,
      link: "mailto:govind803556@gmail.com",
    },
  ];

  const footerNav = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Experience", id: "experience" },
    { name: "Certifications", id: "certifications" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-[#0d1b2a] to-[#000814] text-purple-200 py-12 px-6 md:px-12 overflow-hidden">
      {/* Animated background circles */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse -z-10"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl animate-pulse delay-700 -z-10"></div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Info */}
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-bold text-purple-400 mb-1">Govind Kr Yadav</h3>
          <p className="text-purple-300">Backend & DevOps Engineer</p>
        </div>

        {/* Footer Navbar */}
        <nav className="flex gap-3 flex-wrap justify-center">
          {footerNav.map((item, index) => (
            <Link
              key={index}
              to={item.id}
              smooth={true}
              duration={500}
              className="px-4 py-2 rounded-lg bg-purple-900/30 hover:bg-purple-800/50 
              transition-all duration-300 cursor-pointer shadow-lg shadow-purple-500/20 
              text-purple-200 font-small"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Social Links */}
        <div className="flex gap-6">
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-900/30 hover:bg-purple-800/50 transition-all duration-300 shadow-lg shadow-purple-500/20"
              whileHover={{ scale: 1.2, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
            >
              {social.icon}
            </motion.a>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-purple-700/40 mt-8 pt-6 text-center text-sm text-purple-400">
        &copy; {new Date().getFullYear()} Govind Kr Yadav. All rights reserved.
      </div>
    </footer>
  );
}
