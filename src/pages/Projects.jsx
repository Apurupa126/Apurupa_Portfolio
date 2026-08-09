import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { projects } from "../data/Projects";

const Projects = () => {
  return (
    <div className="min-h-screen bg-black text-white px-6 md:px-10 py-20">

      {/* HEADING */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="
          text-4xl md:text-5xl font-bold text-center mb-12 md:mb-16
          bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400
          text-transparent bg-clip-text
        "
      >
        My Projects
      </motion.h1>

      {/* PROJECT GRID */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.12 }}
            className="
              relative
              bg-gradient-to-br from-[#071226] to-[#0b0f16]
              border border-gray-800
              rounded-3xl
              p-6
              hover:border-purple-500
              hover:shadow-[0_10px_30px_rgba(124,58,237,0.12)]
              transform hover:-translate-y-2
              transition duration-400
            "
          >
            {/* IMAGE */}
            <div className="h-40 md:h-44 mb-4 rounded-2xl overflow-hidden bg-gray-900">
              <img src={p.thumbnail} alt={p.title} className="w-full h-full object-cover" />
            </div>

            {/* TITLE */}
            <h2 className="text-lg md:text-xl font-semibold mb-2 text-white">{p.title}</h2>

            {/* DESCRIPTION */}
            <p className="text-gray-400 text-sm mb-4 line-clamp-3">{p.description}</p>

            {/* TECH STACK */}
            <div className="flex flex-wrap gap-2 mb-4">
              {p.stack?.slice(0,4).map((t, idx) => (
                <span key={idx} className="text-xs px-3 py-1 bg-white/5 rounded-full text-purple-300">{t}</span>
              ))}
            </div>

            {/* ACTIONS */}
            <div className="flex gap-3">
              <a href={p.github} target="_blank" rel="noreferrer" className="px-3 py-2 rounded-md bg-gradient-to-r from-purple-600 to-pink-500 text-sm">GitHub</a>
              <Link to={`/projects/${p.id}`} className="ml-auto px-3 py-2 rounded-md bg-white/5 border border-gray-700 text-sm">Details</Link>
            </div>
          </motion.div>
        ))}
      </div>

    </div>
  );
};

export default Projects;