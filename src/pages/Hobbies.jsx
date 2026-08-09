import { motion } from "framer-motion";
import hobbies from "../data/hobbies.js";

export default function Hobbies() {
  return (
    <div className="min-h-screen bg-black text-white px-6 md:px-10 py-16">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 text-transparent bg-clip-text">Hobbies & Interests</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {hobbies.map((h, i) => (
            <motion.div key={i} whileHover={{ scale: 1.03 }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06 }} className="p-6 bg-white/5 rounded-xl border border-gray-800">
              <h3 className="text-lg font-semibold text-purple-300">{h.title}</h3>
              <p className="text-gray-400 mt-3 text-sm">{h.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Image and Video Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6 text-purple-300">Hands-On Expression</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
            {/* Image */}
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="rounded-xl overflow-hidden border border-gray-800 shadow-[0_10px_60px_rgba(124,58,237,0.06)]">
              <img src="/images/hobbies/Woolen_craft.jpeg" alt="Woolen craft hands-on" className="w-full h-64 object-contain bg-black hover:scale-105 transition-transform duration-300" />
            </motion.div>

            {/* Video */}
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="rounded-xl overflow-hidden border border-gray-800 shadow-[0_10px_60px_rgba(124,58,237,0.06)]">
              <video
                src="/images/hobbies/kamu.mp4"
                preload="metadata"
                poster="/images/hobbies/Woolen_craft.jpeg"
                controls
                className="w-full h-64 object-contain bg-black"
              />
            </motion.div>
          </div>
        </div>

      </div>
    </div>
  );
}