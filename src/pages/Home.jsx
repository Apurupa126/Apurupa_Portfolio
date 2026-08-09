import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import UniverseBackground from "../components/UniverseBackground";
import TypingAnimation from "../components/Hero/TypingAnimation";
import profile from "../assets/appu.jpg";

export default function Home() {

  return (

    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">

      {/* 🌌 Background */}
      <UniverseBackground />

      {/* MAIN CONTENT */}
      <div className="grid md:grid-cols-2 gap-12 items-center px-6 md:px-10 max-w-7xl z-10">

        {/* LEFT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >

          <img
            src={profile}
            alt="Karna Apurupa"
            className="
              w-72 md:w-[28rem]
              h-72 md:h-[28rem]
              rounded-3xl
              object-cover
              border-4 border-purple-500
              shadow-[0_0_60px_rgba(168,85,247,0.6)]
              hover:scale-105
              transition duration-500
            "
          />

        </motion.div>

        {/* RIGHT TEXT */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white"
        >

          <p className="text-lg text-gray-300 mb-2">Hello, I'm</p>

          <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-transparent bg-clip-text">
            Karna Apurupa
          </h1>

          <div className="mt-4">
            <p className="text-gray-300 mb-2">AI & Machine Learning Undergraduate</p>
            <div className="flex items-center gap-4">
              <span className="text-gray-400">Role:</span>
              <div className="flex items-center">
                <TypingAnimation words={["AI & Machine Learning Undergraduate","Python Developer","Full Stack Developer","Machine Learning Enthusiast","Cloud Learner"]} />
              </div>
            </div>
          </div>

          <p className="text-gray-400 mt-6 max-w-lg leading-relaxed text-lg">
            I build AI-powered applications, intelligent web platforms, and data-driven solutions to solve real-world challenges. I focus on creating production-ready systems using Python, Machine Learning, React, Flask, Django, PostgreSQL and cloud technologies.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-wrap gap-4 mt-8">
            <a href="/resume.pdf" className="px-5 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 hover:scale-105 transition shadow-lg text-sm">Download Resume</a>
            <a href="/projects" className="px-5 py-3 rounded-xl border border-gray-700 hover:bg-white/5 transition text-sm">View Projects</a>
            <a href="#contact" className="px-5 py-3 rounded-xl bg-transparent border border-purple-600 hover:translate-y-[-2px] transition text-sm">Hire Me</a>
          </div>

          {/* SOCIAL ICONS */}
          <div className="flex gap-4 mt-6 text-2xl items-center">
            <a href="mailto:apurupa126@gmail.com" className="text-gray-300 hover:text-white transition">Email</a>
            <a href="tel:+917993251535" className="text-gray-300 hover:text-white transition">+91 79932 51535</a>
            <a href="https://github.com/apurupa126" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-white transition">GitHub</a>
            <a href="https://www.linkedin.com/in/karna-apurupa-9ba9682b5" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-white transition">LinkedIn</a>
          </div>

        </motion.div>

      </div>

    </div>

  );
}