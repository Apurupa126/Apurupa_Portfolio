import { useState } from "react";
import { motion } from "framer-motion";
import { FaComments, FaPaperPlane } from "react-icons/fa";

const defaultMessages = [
  { from: "bot", text: "Hi! I am the portfolio assistant. Ask me about internships, projects, or a summary of the portfolio." },
];

const getBotResponse = (message) => {
  const lower = message.toLowerCase();

  if (lower.includes("intern") || lower.includes("internship")) {
    return (
      "I completed three important internships: \n" +
      "1. Acharya Interns (Python Programming) - built a chatbot project. \n" +
      "2. Infosys Springboard (Project Developer) - developed EcoPackAI (sustainable packaging AI project). \n" +
      "3. Smart Bridge (Project Developer) - built AI Debt Relief, an AI-enabled debt relief solution."
    );
  }

  if (lower.includes("summary") || lower.includes("portfolio")) {
    return (
      "This portfolio showcases my journey as a developer with full-stack and AI projects, internships, achievements, certifications, and creative hobbies. " +
      "It includes Home, About, Skills, Projects, Internships, Achievements, Certifications, Hobbies, and Contact sections. " +
      "My highlighted projects are EcoPackAI, AI Debt Relief, Travel Trip, Smart Health Surveillance, and a College Website."
    );
  }

  if (lower.includes("hobby") || lower.includes("hobbies")) {
    return (
      "The Hobbies section describes my interests in cooking, paper craft, woolen craft, chess, learning new technologies, and problem solving. " +
      "I also showcase a hands-on image and video example of my woolen craft work."
    );
  }

  if (lower.includes("achiev") || lower.includes("award") || lower.includes("prize") || lower.includes("selected")) {
    return (
      "My Achievements section highlights several recognitions, including Smart India Hackathon 2025 selection, National Science Fair selection, " +
      "2nd Prize in an Ideathon for Automated Flood Rescue, 1st Prize in a college chess competition, Oracle AI Foundations certification, and NPTEL HCI Elite Gold."
    );
  }

  if (lower.includes("certif") || lower.includes("certificate") || lower.includes("certification")) {
    return (
      "The Certifications section showcases your professional development: Oracle AI Foundations Certified and NPTEL HCI Elite Gold. " +
      "These demonstrate your AI and human-computer interaction expertise."
    );
  }

  if (lower.includes("project")) {
    return (
      "I have worked on multiple projects: EcoPackAI for sustainable packaging recommendations, " +
      "AI Debt Relief for debt management, Travel Trip for travel planning, Smart Health Surveillance for IoT health monitoring, " +
      "and a responsive college website. Ask me to open any project page!"
    );
  }

  if (lower.includes("skills")) {
    return (
      "My skills include Python, JavaScript, React, Flask, Django, Machine Learning, AI, Cloud Computing, and more. " +
      "You can view the Skills page for a full list."
    );
  }

  if (lower.includes("contact") || lower.includes("email")) {
    return (
      "To get in touch, use the Contact page or click the email button there. " +
      "You can send a direct message to apurupa126@gmail.com."
    );
  }

  if (lower.includes("hello") || lower.includes("hi") || lower.includes("hey")) {
    return "Hello! I can help you explore this portfolio. Try asking about internships or asking for a summary.";
  }

  return (
    "I can help with internships, projects, skills, and a portfolio summary. " +
    "Try asking something like 'Tell me about your internships' or 'Summarize your portfolio'."
  );
};

const ChatBot = () => {
  const [open, setOpen] = useState(true);
  const [messages, setMessages] = useState(defaultMessages);
  const [input, setInput] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed) return;

    const userMessage = { from: "user", text: trimmed };
    const botReply = { from: "bot", text: getBotResponse(trimmed) };

    setMessages((prev) => [...prev, userMessage, botReply]);
    setInput("");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-end"
      >
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
            className="mb-4 min-w-[320px] max-w-[calc(100vw-2rem)] rounded-3xl border border-purple-500/20 bg-gradient-to-br from-[#111827] via-[#101827] to-[#0b1220] shadow-[0_30px_80px_rgba(124,58,237,0.25)] backdrop-blur-xl"
          >
            <div className="border-b border-purple-500/20 px-4 py-4 text-sm font-semibold text-white flex items-center justify-between">
              <div>
                <div className="text-base font-semibold">Portfolio Chat Assistant</div>
                <div className="text-xs text-gray-400">Ask about internships or portfolio summary</div>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="text-gray-400 hover:text-white"
                aria-label="Close chat"
              >
                ✕
              </button>
            </div>
            <div className="max-h-72 space-y-3 overflow-y-auto px-4 py-4 text-sm text-gray-200">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`rounded-2xl p-3 ${
                    msg.from === "bot"
                      ? "bg-white/10 text-gray-200"
                      : "ml-auto bg-gradient-to-r from-purple-600 to-pink-500 text-white"
                  }`}
                >
                  <p className="whitespace-pre-line">{msg.text}</p>
                </div>
              ))}
            </div>
            <form onSubmit={sendMessage} className="border-t border-purple-500/20 px-4 py-3">
              <div className="flex gap-2">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about internships or portfolio..."
                  className="flex-1 rounded-2xl border border-gray-700 bg-[#1b2332] px-3 py-2 text-sm text-white outline-none placeholder:text-gray-500 focus:border-purple-400"
                />
                <button
                  type="submit"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-r from-purple-600 to-pink-500 text-white transition hover:scale-105"
                >
                  <FaPaperPlane />
                </button>
              </div>
            </form>
          </motion.div>
        )}

        <button
          onClick={() => setOpen((prev) => !prev)}
          className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-xl shadow-purple-500/20 transition hover:scale-105"
          aria-label="Toggle chat bot"
        >
          <FaComments />
        </button>
      </motion.div>
    </div>
  );
};

export default ChatBot;
