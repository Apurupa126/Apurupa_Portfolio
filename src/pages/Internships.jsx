import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Internships = () => {
  return (
    <div className="min-h-screen bg-black text-white px-6 md:px-10 py-20">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl md:text-5xl font-bold text-center mb-12 md:mb-16 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 text-transparent bg-clip-text"
      >
        Internships
      </motion.h1>

      <div className="grid gap-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-white/5 border border-gray-800 rounded-3xl p-8"
        >
          <h2 className="text-2xl font-semibold text-purple-300 mb-4">Acharya Interns — Python Programming</h2>
          <p className="text-gray-400 mb-4">
            During my diploma, I completed an internship with Acharya Interns in their Python Programming program.
            I developed a chatbot project during this internship, building hands-on experience in Python development, conversation handling, and practical AI-related workflow.
          </p>
          <p className="text-gray-400">Project type: Chatbot application using Python.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="bg-white/5 border border-gray-800 rounded-3xl p-8"
        >
          <h2 className="text-2xl font-semibold text-purple-300 mb-4">Infosys Springboard — Project Developer</h2>
          <p className="text-gray-400 mb-4">
            During my degree, I completed an internship with Infosys Springboard as a Project Developer. I worked on the EcoPackAI project,
            an AI-powered sustainable packaging recommendation platform.
          </p>
          <div className="text-gray-400 mb-4">Certificate: Infosys Springboard Internship certificate is available on the Certifications page.</div>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/projects/eco-pack-ai"
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 text-sm"
            >
              View EcoPackAI Project
            </Link>
            <a
              href="https://github.com/Apurupa126/EcoPack-AI"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-xl border border-gray-700 text-sm"
            >
              GitHub
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="bg-white/5 border border-gray-800 rounded-3xl p-8"
        >
          <h2 className="text-2xl font-semibold text-purple-300 mb-4">Smart Bridge — Project Developer</h2>
          <p className="text-gray-400 mb-4">
            I also completed an internship with Smart Bridge as a Project Developer. During this internship, I built the AI Debt Relief project,
            delivering AI-enabled debt relief recommendations and user onboarding features.
          </p>
          <div className="text-gray-400 mb-4">Certificate: Smart Bridge internship certificate is available on the Certifications page.</div>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/projects/ai-debt-relief"
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 text-sm"
            >
              View AI Debt Relief Project
            </Link>
            <a
              href="https://github.com/Apurupa126/AI-Powered-Debt-Relief-Platform"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-xl border border-gray-700 text-sm"
            >
              GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Internships;
