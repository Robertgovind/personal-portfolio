import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const projectsData = [
  {
    title: "Sports Arena",
    description: "SportsArena is a fullstack MERN-based web application that helps colleges organize and manage sports events.",
    image: "/projects/sports-arena.png", 
    link: "https://github.com/Robertgovind/SportsArena",
  },
  {
    title: "Tagify",
    description: "A robust backend CMS(Content Management System)API for a modern blog platform with categories, tags, and advanced filtering. Built with Node.js, Express, and MongoDB.",
    image: "/projects/tagify.png",
    link: "https://github.com/Robertgovind/Tagify",
  },
  {
    title: "Authverse",
    description: `AuthVerse is a modular, backend-only authentication API built using Node.js, Express, 
    MongoDB, and JWT.This project implements a secure authentication based on Email/Password-based 
    authentication system, OAuth (Social Login), Magic Link Authentication, 
    OTP based Login, 2FA`,
    image: "/projects/authverse.png",
    link: "https://github.com/Robertgovind/AuthVerse",
  },
  {
    title: "ProgressFeed",
    description: "A mobile application that establishes clear transpancy between Cotnractor, Government authority and General public.",
    image: "/projects/progress-feed.png",
    link: "https://github.com/Robertgovind/Tagify",
  },
];

export default function Projects() {
  return (
    <section className="relative py-20 px-6 md:px-12 text-purple-200">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center mb-16"
      >
        <h2 className="text-4xl font-bold text-purple-400 mb-4">My Projects</h2>
        <p className="text-purple-100 text-lg md:text-xl leading-relaxed">
          These are some of the projects I have built to solve real-world problems and showcase my skills in backend, frontend, and DevOps.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projectsData.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05, backgroundColor: "rgba(40, 0, 60, 0.85)" }}
            className="bg-purple-900/20 backdrop-blur-md rounded-xl shadow-lg shadow-purple-500/30 cursor-pointer overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div className="w-full h-48 overflow-hidden rounded-t-xl">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-purple-300 mb-3">{project.title}</h3>
              <p className="text-purple-200 text-sm mb-4">{project.description}</p>
              <a
                href={project.link}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition duration-300"
              >
                View Project
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
