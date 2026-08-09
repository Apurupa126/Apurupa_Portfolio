import { motion } from "framer-motion";

const certs = [
  { title: "Oracle Cloud Infrastructure AI Foundations Associate", detail: "Oracle University (July 2025)", img: "/images/certificates/Oracel.jpeg" },
  { title: "NPTEL: Human-Computer Interaction (HCI)", detail: "Score: 98% — Elite + Gold", img: "/images/certificates/nptel-hci.jpeg" },
  { title: "NPTEL: Programming in Java", detail: "Score: 76% — Elite + Silver", img: "/images/certificates/nptel-java.jpg" },
  { title: "Naandi Employability Skills", detail: "Professional employability skills program", img: "/images/certificates/Naandi_Foundation.png" },
  { title: "Infosys Springboard Internship", detail: "Virtual Internship 6.0", img: "/images/certificates/infosys.png" },
  { title: "Smart Bridge Internship", detail: "Project Developer", img: "/images/certificates/SmartBridge.png" },
  { title: "Industrial Python Training", detail: "Aacharya — Diploma training", img: "/images/certificates/Skill.jpeg" },
];

export default function Certificates(){
  return (
    <div className="min-h-screen bg-black text-white px-6 md:px-10 py-16">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 text-transparent bg-clip-text">Certifications</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certs.map((c, i) => {
            // extract percentage if present
            const match = (c.detail || '').match(/(\d+)%/);
            const pct = match ? match[1] : null;
            return (
              <motion.div key={i} initial={{opacity:0, y:20}} animate={{opacity:1,y:0}} transition={{delay:i*0.06}} whileHover={{scale:1.02}} className="bg-gradient-to-br from-[#071226] to-[#0b0f16] rounded-2xl border border-gray-800 overflow-hidden">
                <img src={c.img} alt={c.title} className="w-full h-44 md:h-56 object-cover" />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-white">{c.title}</h3>
                  {pct ? (
                    <div className="mt-2 text-3xl font-bold text-purple-300">{pct}%</div>
                  ) : (
                    <p className="text-gray-400 mt-2 text-sm">{c.detail}</p>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </div>
  );
}