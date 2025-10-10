import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import {
  SiJavascript,
  SiPython,
  SiCplusplus,
  SiExpress,
  SiMongodb,
  SiGraphql,
  SiDocker,
  SiGithub,
  SiAwsamplify,
  SiFlutter,
  SiHtml5,
  SiCss3,
  SiLinux,
} from "react-icons/si";

const skillsData = [
  {
    category: "Languages",
    items: [
      { name: "JavaScript", icon: <SiJavascript className="w-8 h-8 text-yellow-400" /> },
      { name: "Python", icon: <SiPython className="w-8 h-8 text-blue-400" /> },
      { name: "C++", icon: <SiCplusplus className="w-8 h-8 text-blue-600" /> },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Express.js", icon: <SiExpress className="w-8 h-8 text-gray-300" /> },
      { name: "MongoDB", icon: <SiMongodb className="w-8 h-8 text-green-500" /> },
      { name: "GraphQL", icon: <SiGraphql className="w-8 h-8 text-pink-500" /> },
      { name: "REST APIs", icon: <SiExpress className="w-8 h-8 text-blue-400" /> },
    ],
  },
  {
    category: "Cloud & DevOps",
    items: [
      { name: "AWS", icon: <SiAwsamplify className="w-8 h-8 text-orange-400" /> },
      { name: "Git", icon: <SiGithub className="w-8 h-8 text-gray-300" /> },
      { name: "Docker", icon: <SiDocker className="w-8 h-8 text-blue-500" /> },
      { name: "Linux", icon: <SiLinux className="w-8 h-8 text-purple-400" /> },
    ],
  },
  {
    category: "Frontend & Mobile",
    items: [
      { name: "Flutter", icon: <SiFlutter className="w-8 h-8 text-blue-400" /> },
      { name: "HTML", icon: <SiHtml5 className="w-8 h-8 text-orange-500" /> },
      { name: "CSS", icon: <SiCss3 className="w-8 h-8 text-blue-600" /> },
      { name: "JavaScript", icon: <SiJavascript className="w-8 h-8 text-yellow-400" /> },
    ],
  },
  {
    category: "Concepts",
    items: [
      { name: "DSA", icon: <SiPython className="w-8 h-8 text-blue-400" /> },
      { name: "System Design", icon: <SiJavascript className="w-8 h-8 text-yellow-400" /> },
      { name: "Microservices", icon: <SiDocker className="w-8 h-8 text-blue-500" /> },
    ],
  },
];

export default function Skills() {
  return (
    <section className="py-20 px-6 md:px-12 text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-purple-400 mb-8 text-center">
          My Skills
        </h2>
        <p className="text-lg text-purple-300 mb-12 text-center max-w-2xl mx-auto">
          These are some of the technologies and tools I work with daily to build scalable systems and modern applications.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {skillsData.map((skill, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05, backgroundColor: "rgba(40, 0, 60, 0.85)" }}
            className="bg-purple-900/20 backdrop-blur-md p-6 rounded-xl shadow-lg shadow-purple-500/30 cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <h3 className="text-2xl font-bold text-purple-300 mb-6">{skill.category}</h3>
            <div className="flex flex-wrap gap-4">
              {skill.items.map((item, i) => (
                <motion.div
                  key={i}
                  className="flex flex-col items-center justify-center bg-purple-900/50 p-3 rounded-2xl hover:bg-purple-700/70 transition-all duration-300 shadow-md"
                  whileHover={{ scale: 1.1 }}
                >
                  {item.icon}
                  <span className="mt-2 text-purple-200 text-sm">{item.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
      </div>
    </section>
  );
}
