import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { SiGmail, SiLinkedin, SiGithub } from "react-icons/si";

const contactData = [
  {
    name: "Email",
    icon: <SiGmail className="w-8 h-8 text-red-500" />,
    link: "mailto:govind803556@gmail.com",
  },
  {
    name: "LinkedIn",
    icon: <SiLinkedin className="w-8 h-8 text-blue-500" />,
    link: "https://www.linkedin.com/in/govind-kr-yadav-715b9426a/",
  },
  {
    name: "GitHub",
    icon: <SiGithub className="w-8 h-8 text-gray-300" />,
    link: "https://github.com/Robertgovind",
  },
];

export default function Contact() {
  return (
    <section className="py-20 px-6 md:px-12 text-purple-200">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center mb-16"
      >
        <h2 className="text-4xl font-bold text-purple-400 mb-4">Contact Me</h2>
        <p className="text-purple-100 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
          I’m open to opportunities and collaborations. Reach out to me via email or connect with me on LinkedIn and GitHub.
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {contactData.map((contact, index) => (
          <motion.a
            key={index}
            href={contact.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center p-6 bg-purple-900/20 backdrop-blur-md rounded-2xl shadow-lg shadow-purple-500/30 transition-transform cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            {contact.icon}
            <h3 className="text-purple-300 font-semibold mt-4">{contact.name}</h3>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
