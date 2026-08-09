import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/skills", label: "Skills" },
  { to: "/projects", label: "Projects" },
  { to: "/internships", label: "Internships" },
  { to: "/achievements", label: "Achievements" },
  { to: "/certificates", label: "Certifications" },
  { to: "/hobbies", label: "Hobbies" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const location = useLocation();

  return (
    <motion.nav
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex flex-col justify-between min-h-screen w-full md:w-72 bg-gradient-to-b from-[#050615] via-[#090b14] to-[#0f1220] px-6 py-10 border-r border-purple-900/30 shadow-[0_0_80px_rgba(124,58,237,0.16)]"
    >
      <div>
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-purple-400 mb-2">Karna Apurupa</h1>
          <div className="text-sm text-gray-400">
            <p>
              <span className="text-purple-300 font-semibold">Btech-AIML</span>
              <span className="mx-2 text-gray-400">|</span>
              <span className="text-purple-300 font-semibold">Diploma</span>
            </p>
            <p className="mt-1">Full Stack Developer | ML Engineer | AI Enthusiast</p>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          {links.map((link, index) => {
            const isActive = location.pathname === link.to;
            return (
              <motion.div
                key={link.to}
                custom={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05, duration: 0.35 }}
              >
                <Link
                  to={link.to}
                  className={`block rounded-2xl px-4 py-3 text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-purple-500/15 text-white shadow-[0_0_20px_rgba(124,58,237,0.12)]"
                      : "text-gray-300 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-5 text-sm text-gray-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
        <p className="font-semibold text-purple-300 mb-2">Quick Tip</p>
        <p className="leading-relaxed">Use the sidebar to quickly navigate through the portfolio. The active page is highlighted with a glowing accent.</p>
      </div>
    </motion.nav>
  );
};

export default Navbar;
