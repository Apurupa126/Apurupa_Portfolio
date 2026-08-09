import { motion } from "framer-motion";

const achievements = [
  "Smart India Hackathon 2025 - Selected",
  "National Science Fair - Selected",
  "2nd Prize - Ideathon (Automated Flood Rescue)",
  "1st Prize - College Chess Competition",
  "Oracle AI Foundations Certified",
  "NPTEL HCI - Elite Gold"
];

export default function Achievements(){
  return (
    <div className="min-h-screen bg-black text-white px-6 md:px-10 py-16">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 text-transparent bg-clip-text">Achievements</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievements.map((a, i) => (
            <motion.div key={i} initial={{opacity:0, y:20}} animate={{opacity:1,y:0}} transition={{delay:i*0.05}} whileHover={{scale:1.02}} className="p-6 bg-white/5 rounded-xl border border-gray-800">
              <h3 className="text-lg font-semibold text-purple-300">{a}</h3>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}