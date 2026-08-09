import { motion } from "framer-motion";

const SkillCard = ({ skill }) => {
  const Icon = skill.icon;
  return (
    <motion.div whileHover={{ scale: 1.03 }} className="p-6 bg-white/5 border border-gray-800 rounded-xl text-center shadow-sm hover:shadow-[0_10px_40px_rgba(124,58,237,0.12)] transition">

      <div className="flex flex-col items-center justify-center gap-3">
        {Icon ? <Icon size={34} className="text-purple-400" /> : null}
        <h3 className="text-md font-medium">{skill.name}</h3>
      </div>

    </motion.div>
  );
};

export default SkillCard;