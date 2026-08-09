import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  const handleSubmit = (e) => {
  e.preventDefault();
  const form = e.target;
  const name = encodeURIComponent(form.name.value.trim());
  const email = encodeURIComponent(form.email.value.trim());
  const subject = encodeURIComponent(form.subject.value.trim() || "Contact from Portfolio");
  const message = encodeURIComponent(form.message.value.trim());

  const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0A${message}`;
  window.location.href = `mailto:apurupa126@gmail.com?subject=${subject}&body=${body}`;
  };

  return (

    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6 py-20">

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="
          bg-[#111]
          p-10
          rounded-3xl
          shadow-2xl
          border border-gray-800
          max-w-3xl
          w-full
        "
      >

        {/* HEADING */}
        <h1 className="
          text-4xl md:text-5xl font-bold mb-6 text-center
          bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500
          text-transparent bg-clip-text
        ">
          Contact Me
        </h1>

        <div className="grid md:grid-cols-2 gap-6">

          <div>
            <p className="text-gray-400 mb-4 text-lg">Feel free to connect with me for projects, collaborations, or opportunities. Download my resume or use the contact form to get in touch.</p>

            <div className="grid gap-4">
              <a href="/resume.pdf" className="px-4 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 text-center">Download Resume</a>

              <a href="mailto:apurupa126@gmail.com" className="px-4 py-3 rounded-xl border border-gray-700 text-center">Email: apurupa126@gmail.com</a>

              <a href="tel:+917993251535" className="px-4 py-3 rounded-xl border border-gray-700 text-center">Phone: +91 79932 51535</a>

              <div className="flex gap-4 mt-4">
                <a href="https://github.com/apurupa126" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-white">GitHub</a>
                <a href="https://www.linkedin.com/in/karna-apurupa-9ba9682b5" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-white">LinkedIn</a>
              </div>

            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-white/5 p-6 rounded-xl border border-gray-800">
            <label className="block text-sm text-gray-300">Name</label>
            <input name="name" required className="w-full mt-2 mb-3 p-2 rounded bg-transparent border border-gray-700" />
  
            <label className="block text-sm text-gray-300">Email</label>
            <input name="email" type="email" required className="w-full mt-2 mb-3 p-2 rounded bg-transparent border border-gray-700" />
  
            <label className="block text-sm text-gray-300">Subject</label>
            <input name="subject" required className="w-full mt-2 mb-3 p-2 rounded bg-transparent border border-gray-700" />
  
            <label className="block text-sm text-gray-300">Message</label>
            <textarea name="message" rows="5" required className="w-full mt-2 mb-3 p-2 rounded bg-transparent border border-gray-700" />
 
            <button 
              type="submit" 
              className="w-full mt-2 px-4 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500"
            >
              Open Email App
            </button>
          </form>

        </div>

      </motion.div>

    </div>

  );
};

export default Contact;