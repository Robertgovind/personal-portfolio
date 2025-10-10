import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const certificationsData = [
  {
    title: "Flutter & Dart - The Complete Flutter Development Course",
    issuer: "Udemy, Instructed by Hussain Mustafa",
    year: "April 2024",
    image: "/personal-portfolio/certificates/cf6.jpg",
  },
  {
    title: "Microsoft Learn Student Ambassador",
    issuer: "pablo Veramendi",
    year: "2023",
    image: "/personal-portfolio/certificates/cf5.png",
  },
  {
    title: "Backend Development with Node.js",
    issuer: "Udemy, Instructed by Pierre-Henry Soria",
    year: "20Nov 202422",
    image: "/personal-portfolio/certificates/cf7.jpg",
  },
  {
    title: "Microsoft Learn Student Ambassador-Alpha",
    issuer: "Pablo Veramendi",
    year: "2023",
    image: "/personal-portfolio/certificates/cf3.png",
  },
  {
    title: "AWS Fellowship: Cohort 1",
    issuer: "AWS Cloud Club Nepal",
    year: "2024",
    image: "/personal-portfolio/certificates/cf1.png",
  },
  {
    title: "AWS Academy Cloud Foundations",
    issuer: "AWS Academy",
    year: "2025",
    image: "/personal-portfolio/certificates/cf2.png",
  },
];

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section className="py-20 px-6 md:px-12 text-purple-200 relative bg-gradient-to-br from-gray-900 via-[#0d1b2a] to-[#000814]">
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center mb-16"
      >
        <h2 className="text-4xl font-bold text-purple-400 mb-4">Certifications</h2>
        <p className="text-purple-100 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
          These certifications validate my continuous learning in backend, DevOps, and cloud technologies.
        </p>
      </motion.div>

      {/* Certification Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {certificationsData.map((cert, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-purple-900/20 backdrop-blur-md p-4 rounded-2xl shadow-lg shadow-purple-500/30 cursor-pointer border border-purple-800 hover:border-purple-500 transition-all duration-300"
            onClick={() => setSelectedCert(cert.image)}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            {/* Certificate Image */}
            <div className="relative overflow-hidden rounded-xl mb-4">
              <motion.img
                src={cert.image}
                alt={cert.title}
                className="rounded-xl w-full h-48 object-cover opacity-80 hover:opacity-100 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              />
            </div>

            {/* Certificate Info */}
            <div className="text-center">
              <h3 className="text-xl font-semibold text-purple-300 mb-2">
                {cert.title}
              </h3>
              <p className="text-purple-400 text-sm italic">{cert.issuer}</p>
              <p className="text-purple-500 text-xs">{cert.year}</p>

              {/* View Certificate Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="mt-3 px-4 py-1 bg-purple-700/40 text-purple-100 text-sm rounded-lg border border-purple-500 hover:bg-purple-700/60 transition-all"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedCert(cert.image);
                }}
              >
                View Certificate
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      {selectedCert && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedCert(null)}
        >
          <motion.img
            src={selectedCert}
            alt="Certificate"
            className="max-w-4xl max-h-[85vh] rounded-xl shadow-lg border border-purple-700"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
        </div>
      )}
    </section>
  );
}
