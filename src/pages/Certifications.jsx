import React, { useState } from "react";
import { motion } from "framer-motion";

const certificationsData = [
  {
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    year: "2024",
    image: "/assets/aws-certificate.png",
  },
  {
    title: "Docker & Kubernetes Professional",
    issuer: "Udemy",
    year: "2023",
    image: "/assets/docker-k8s-certificate.png",
  },
  {
    title: "Node.js Backend Development",
    issuer: "Coursera",
    year: "2022",
    image: "/assets/nodejs-certificate.png",
  },
];

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section className="py-20 px-6 md:px-12 text-purple-200 relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center mb-16"
      >
        <h2 className="text-4xl font-bold text-purple-400 mb-4">Certifications</h2>
        <p className="text-purple-100 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
          These are some of the certifications I've earned to strengthen my backend, DevOps, and cloud skills.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {certificationsData.map((cert, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-purple-900/20 backdrop-blur-md p-6 rounded-2xl shadow-lg shadow-purple-500/30 cursor-pointer"
            onClick={() => setSelectedCert(cert.image)}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <h3 className="text-xl font-semibold text-purple-300 mb-2">{cert.title}</h3>
            <p className="text-purple-400 text-sm italic">{cert.issuer}</p>
            <p className="text-purple-500 text-xs">{cert.year}</p>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      {selectedCert && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={() => setSelectedCert(null)}
        >
          <motion.img
            src={selectedCert}
            alt="Certificate"
            className="max-w-3xl max-h-[80vh] rounded-xl shadow-lg"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
        </div>
      )}
    </section>
  );
}
