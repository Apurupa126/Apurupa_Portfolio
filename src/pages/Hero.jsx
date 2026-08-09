import { motion } from "framer-motion";

const Home = () => {

  return (

    <div className="h-screen flex flex-col justify-center items-center text-center">

      <motion.img
        src="/profile.jpg"
        className="w-40 h-40 rounded-full mb-6"
        initial={{scale:0}}
        animate={{scale:1}}
        transition={{duration:0.6}}
      />

      <motion.h1
        className="text-5xl font-bold"
        initial={{opacity:0,y:30}}
        animate={{opacity:1,y:0}}
      >
        Hi I'm <span className="text-purple-500">Apurupa</span>
      </motion.h1>

      <div className="text-gray-400 mt-4">
        <motion.p
          className=""
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{delay:0.2}}
        >
          AIML | Diploma
        </motion.p>

        <motion.p
          className="mt-2"
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{delay:0.4}}
        >
          Full Stack Developer | ML Engineer | AI Enthusiast
        </motion.p>
      </div>

    </div>

  );

};

export default Home;