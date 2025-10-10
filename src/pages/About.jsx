import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const educationData = [
  {
    level: "University",
    institution: "IOE, Pashchimanchal Campus (WRC), Tribhuwan University",
    year: "March 2022 - Present",
    description: "Bachelor in Electronics, Communication, and Information Engineering. Received Government Scholarship on merit basis.",
    courses: [
      "Mathematics: Engineering Mathematics I-III, Probability & Statistics, Applied Math, Discrete Structures, Digital Signal Analysis",
      "Computer Science: Programming, OOP, DSA, Computer Graphics, DBMS, AI, Enterprise Cloud Computing, Big Data, Multimedia Systems"
    ],
  },
  {
    level: "College",
    institution: "Model Multiple College, Janakpur, Dhanusha",
    year: "June 2018 - July 2020",
    description: "Intermediate Science focused on Mathematics and Computer Science.",
  },
  {
    level: "School",
    institution: "Shree Mohan Model Secondary School, Ramnagar Mirchaiya, Siraha",
    year: "Completed SEE",
    description: "Graduated with GPA 3.80/4.",
  },
];

export default function AboutSection() {
  return (
    <section className="relative py-20 px-6 md:px-12  text-purple-200">
      {/* About Me */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center mb-16"
      >
        <h2 className="text-4xl font-bold text-purple-400 mb-4">About Me</h2>
        <p className="text-purple-100 text-lg md:text-xl leading-relaxed">
          I am Govind Kumar Yadav, a backend developer passionate about building scalable APIs and backend systems using Node.js, Express.js, and MongoDB. Experienced in mentoring, DevOps practices, and cloud platforms like AWS, with a strong foundation in DSA and system design.
        </p>
      </motion.div>

      {/* Education Timeline */}
      <div className="relative max-w-4xl mx-auto">
        {/* Vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-purple-700/30"></div>

        {educationData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className={`mb-12 flex flex-col md:flex-row items-center w-full relative ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            {/* Timeline circle */}
            <div className="z-10 w-6 h-6 rounded-full bg-purple-500 border-4 border-purple-700/50 shadow-lg shadow-purple-700/40 absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0"></div>

            {/* Card */}
            <motion.div
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(40, 0, 60, 0.85)",
                transition: { duration: 0.4 },
              }}
              className="bg-purple-900/20 backdrop-blur-md p-6 rounded-xl shadow-lg shadow-purple-500/30 w-full md:w-1/2 hover:cursor-pointer"
            >
              <h3 className="text-xl font-semibold text-purple-300 mb-1">{item.level}</h3>
              <p className="text-purple-200 font-medium">{item.institution}</p>
              <p className="text-purple-400 text-sm italic mb-2">{item.year}</p>
              <p className="text-purple-100 mb-2">{item.description}</p>
              {item.courses && (
                <ul className="list-disc list-inside text-purple-200 text-sm">
                  {item.courses.map((course, i) => (
                    <li key={i}>{course}</li>
                  ))}
                </ul>
              )}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
