import { skillCategories } from "../data/skills";
import SkillCard from "../components/SkillCard";

const Skills = () => {
  return (
    <div className="px-6 md:px-10 py-20 min-h-screen bg-black text-white">
      <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 text-transparent bg-clip-text">Technical Skills</h1>

      <div className="grid gap-8">
        {skillCategories.map((cat, idx) => (
          <div key={idx} className="">
            <h2 className="text-xl font-semibold mb-4">{cat.category}</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {cat.skills.map((s, i) => (
                <SkillCard key={i} skill={s} />
              ))}
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Skills;