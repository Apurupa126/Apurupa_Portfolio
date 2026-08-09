
import { motion } from "framer-motion";
import profile from "../assets/appu.jpg";

const About = () => {
  return (
    <div className="min-h-screen px-6 md:px-10 py-20 text-white bg-black">

      <div className="max-w-6xl w-full mx-auto">

        {/* ================= ABOUT SECTION ================= */}

        <div className="grid md:grid-cols-3 gap-10 items-start">

          {/* LEFT: IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center md:justify-start"
          >
            <div className="relative">

              {/* Glow */}
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 blur-2xl opacity-30"></div>

              <img
                src={profile}
                alt="Karna Apurupa"
                className="
                  relative
                  w-64 md:w-72
                  rounded-2xl
                  border-4 border-purple-600
                  shadow-[0_10px_60px_rgba(168,85,247,0.25)]
                  hover:scale-105
                  transition duration-500
                "
              />

            </div>
          </motion.div>


          {/* RIGHT: BIO */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:col-span-2"
          >

            {/* TITLE */}
            <h1
              className="
                text-4xl md:text-5xl
                font-bold mb-6
                bg-gradient-to-r
                from-pink-500
                via-purple-500
                to-blue-500
                text-transparent
                bg-clip-text
              "
            >
              About Me
            </h1>


            {/* INTRODUCTION */}
            <p className="text-gray-300 text-lg leading-relaxed mb-5">
              Hi, I'm <span className="text-purple-400 font-semibold">
                Karna Apurupa
              </span>, a passionate Artificial Intelligence &
              Machine Learning undergraduate at{" "}
              <span className="text-pink-400 font-semibold">
                Vignan's Nirula Institute of Technology and Science for Women
              </span>.
            </p>


            {/* PASSION */}
            <p className="text-gray-300 text-lg leading-relaxed mb-5">
              I am passionate about{" "}
              <span className="text-cyan-400 font-semibold">
                Artificial Intelligence, Machine Learning, Cybersecurity.
              </span>{" "}
                Full-Stack Development. I enjoy exploring new technologies
              and transforming ideas into practical solutions.
            </p>


            {/* EXPERIENCE */}
            <p className="text-gray-300 text-lg leading-relaxed mb-5">
              I enjoy developing AI-powered applications, intelligent web
              platforms, and data-driven solutions that solve real-world
              challenges. My technical experience includes{" "}
              <span className="text-purple-400">
                Python, Machine Learning, React, Flask
                PostgreSQL, and AI Tools.
              </span>{" "}
               
            </p>


            {/* FINAL PARAGRAPH */}
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Through internships, hackathons, and academic projects, I have
              gained hands-on experience in building predictive models,
              full-stack applications, and IoT-based intelligent systems.
              I believe in continuous learning, teamwork, and using technology
              to create meaningful solutions.
            </p>


            {/* ================= STATS ================= */}

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="p-4 rounded-xl bg-white/5 border border-purple-500/20 text-center backdrop-blur-sm"
              >
                <div className="text-xl font-semibold text-purple-300">
                  B.Tech
                </div>
                <div className="text-sm text-gray-400 mt-2">
                  CSE - AIML
                </div>
                <div className="text-sm text-purple-400 mt-1">
                  CGPA 8.95
                </div>
              </motion.div>


              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="p-4 rounded-xl bg-white/5 border border-pink-500/20 text-center backdrop-blur-sm"
              >
                <div className="text-xl font-semibold text-pink-300">
                  Projects
                </div>
                <div className="text-sm text-gray-400 mt-2">
                  4+
                </div>
              </motion.div>


              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="p-4 rounded-xl bg-white/5 border border-cyan-500/20 text-center backdrop-blur-sm"
              >
                <div className="text-xl font-semibold text-cyan-300">
                  Certifications
                </div>
                <div className="text-sm text-gray-400 mt-2">
                  6+
                </div>
              </motion.div>


              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="p-4 rounded-xl bg-white/5 border border-green-500/20 text-center backdrop-blur-sm"
              >
                <div className="text-xl font-semibold text-green-300">
                  Hackathons
                </div>
                <div className="text-sm text-gray-400 mt-2">
                  3+
                </div>
              </motion.div>

            </div>

          </motion.div>

        </div>


        {/* ================= EDUCATION ================= */}

        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24"
        >

          {/* EDUCATION TITLE */}

          <div className="text-center mb-14">

            <p className="text-purple-400 uppercase tracking-[0.3em] text-sm mb-3">
              My Academic Journey
            </p>

            <h2
              className="
                text-4xl md:text-5xl
                font-bold
                bg-gradient-to-r
                from-pink-500
                via-purple-500
                to-cyan-400
                text-transparent
                bg-clip-text
              "
            >
              Education
            </h2>

          </div>


          {/* TIMELINE */}

          <div className="relative max-w-4xl mx-auto">

            {/* CENTER LINE */}

            <div
              className="
                absolute
                left-4 md:left-1/2
                top-0
                bottom-0
                w-[2px]
                bg-gradient-to-b
                from-purple-500
                via-pink-500
                to-cyan-400
                md:-translate-x-1/2
              "
            ></div>


            {/* ================= BTECH ================= */}

            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative mb-16 md:flex md:justify-end"
            >

              {/* TIMELINE DOT */}

              <div
                className="
                  absolute
                  left-[9px]
                  md:left-1/2
                  md:-translate-x-1/2
                  w-4 h-4
                  rounded-full
                  bg-purple-500
                  shadow-[0_0_20px_rgba(168,85,247,0.9)]
                "
              ></div>


              <div className="ml-12 md:ml-0 md:w-[45%]">

                <div
                  className="
                    p-6
                    rounded-2xl
                    bg-white/5
                    border border-purple-500/20
                    backdrop-blur-md
                    hover:border-purple-500/50
                    hover:shadow-[0_0_35px_rgba(168,85,247,0.15)]
                    transition duration-300
                  "
                >

                  <span className="text-purple-400 text-sm font-semibold">
                    2024 - 2027
                  </span>

                  <h3 className="text-2xl font-bold mt-2">
                    Bachelor of Technology
                  </h3>

                  <p className="text-pink-400 font-medium mt-2">
                    Computer Science & Engineering - AIML
                  </p>

                  <p className="text-gray-300 mt-3">
                    Vignan's Nirula Institute of Technology and Science for
                    Women
                  </p>

                  <p className="text-gray-400 mt-1">
                    JNTU Kakinada
                  </p>

                  <div className="mt-4 inline-block px-4 py-2 rounded-lg bg-purple-500/10 border border-purple-500/20">
                    <span className="text-purple-300 font-semibold">
                      CGPA: 8.95
                    </span>
                  </div>

                </div>

              </div>

            </motion.div>


            {/* ================= DIPLOMA ================= */}

            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative mb-16 md:flex md:justify-start"
            >

              {/* TIMELINE DOT */}

              <div
                className="
                  absolute
                  left-[9px]
                  md:left-1/2
                  md:-translate-x-1/2
                  w-4 h-4
                  rounded-full
                  bg-pink-500
                  shadow-[0_0_20px_rgba(236,72,153,0.9)]
                "
              ></div>


              <div className="ml-12 md:ml-0 md:w-[45%]">

                <div
                  className="
                    p-6
                    rounded-2xl
                    bg-white/5
                    border border-pink-500/20
                    backdrop-blur-md
                    hover:border-pink-500/50
                    hover:shadow-[0_0_35px_rgba(236,72,153,0.15)]
                    transition duration-300
                  "
                >

                  <span className="text-pink-400 text-sm font-semibold">
                    Diploma
                  </span>

                  <h3 className="text-2xl font-bold mt-2">
                    Diploma in Computer Science
                  </h3>

                  <p className="text-purple-400 font-medium mt-2">
                    Computer Science & Engineering
                  </p>

                  <p className="text-gray-300 mt-3">
                    Audisankara College of Engineering & Technology
                  </p>

                  <p className="text-gray-400 mt-1">
                    Gudur, Andhra Pradesh
                  </p>

                  <div className="mt-4 inline-block px-4 py-2 rounded-lg bg-pink-500/10 border border-pink-500/20">
                    <span className="text-pink-300 font-semibold">
                      Percentage: 90.15%
                    </span>
                  </div>

                </div>

              </div>

            </motion.div>


            {/* ================= CAREER GOAL ================= */}

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >

              <div
                className="
                  p-6 md:p-8
                  rounded-2xl
                  bg-gradient-to-r
                  from-purple-500/10
                  via-pink-500/10
                  to-cyan-500/10
                  border border-white/10
                  backdrop-blur-md
                  text-center
                "
              >

                <h3 className="text-2xl font-bold mb-3">
                  My Career Goal
                </h3>

                <p className="text-gray-300 leading-relaxed max-w-2xl mx-auto">
                  My goal is to grow as an AI & Machine Learning Engineer
                  while developing strong expertise in Cybersecurity.
                  I aspire to build secure, intelligent,
                  and scalable technologies that solve meaningful
                  real-world problems.
                </p>

              </div>

            </motion.div>

          </div>

        </motion.section>

      </div>

    </div>
  );
};

export default About;

