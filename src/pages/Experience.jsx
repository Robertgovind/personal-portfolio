import React from "react";
import { motion } from "framer-motion";

const experienceData = [
  {
    role: "Backend & DevOps Engineer",
    company: "TechCorp Inc.",
    period: "Jan 2023 - Present",
    description:
      "Developed scalable backend systems using Node.js, Express, and MongoDB. Implemented CI/CD pipelines and managed cloud infrastructure on AWS.",
    logo: "/assets/company-placeholder.png",
  },
  {
    role: "Software Developer Intern",
    company: "CloudSolutions Ltd.",
    period: "Jun 2022 - Dec 2022",
    description:
      "Assisted in building microservices and REST APIs. Learned DevOps best practices and cloud deployment strategies.",
    logo: "/assets/company-placeholder.png",
  },
  {
    role: "Freelance Developer",
    company: "Self-Employed",
    period: "Mar 2021 - May 2022",
    description:
      "Built custom web applications for clients, integrating frontend, backend, and cloud services. Focused on automation and scalability.",
    logo: "/assets/company-placeholder.png",
  },
];

export default function Experience() {
  return (
    <section className="relative py-20 px-6 md:px-12 text-purple-200">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center mb-16"
      >
        <h2 className="text-4xl font-bold text-purple-400 mb-4">My Experience</h2>
        <p className="text-purple-100 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
          A journey through my professional experiences in backend, DevOps, and fullstack development.
        </p>
      </motion.div>

      <div className="relative max-w-4xl mx-auto">
        {/* Vertical glowing timeline line */}
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500 via-purple-700 to-pink-500 rounded-full shadow-lg"></div>

        {experienceData.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className={`mb-16 flex flex-col md:flex-row items-center w-full relative ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            {/* Timeline node */}
            <div className="z-10 w-8 h-8 rounded-full bg-purple-500 border-4 border-purple-700 shadow-[0_0_20px_rgba(147,51,234,0.7)] absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0 animate-pulse"></div>

            {/* Card */}
            <motion.div
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(40, 0, 60, 0.85)",
                transition: { duration: 0.4 },
              }}
              className="bg-purple-900/20 backdrop-blur-md p-6 rounded-2xl shadow-lg shadow-purple-500/30 w-full md:w-1/2 hover:cursor-pointer relative z-10"
            >
              <div className="flex items-center mb-4 space-x-4">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-purple-500 shadow-md flex-shrink-0">
                  <img
                    src={exp.logo}
                    alt={exp.company}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-purple-300">{exp.role}</h3>
                  <p className="text-purple-400 text-sm italic">{exp.company}</p>
                  <p className="text-purple-500 text-xs">{exp.period}</p>
                </div>
              </div>
              <p className="text-purple-200 text-sm">{exp.description}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
