import { BrowserRouter,Routes,Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import Contact from "./pages/Contact";
import Achievements from "./pages/Achievements";
import Certificates from "./pages/Certificates";
import Hobbies from "./pages/Hobbies";
import Internships from "./pages/Internships";
import ChatBot from "./components/ChatBot";

function App(){
  return(
    <BrowserRouter>
      <div className="flex flex-col md:flex-row min-h-screen">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/skills" element={<Skills/>}/>
            <Route path="/projects" element={<Projects/>}/>
            <Route path="/projects/:id" element={<ProjectDetail/>} />
            <Route path="/achievements" element={<Achievements/>} />
            <Route path="/certificates" element={<Certificates/>} />
            <Route path="/hobbies" element={<Hobbies/>} />
            <Route path="/internships" element={<Internships/>} />
            <Route path="/contact" element={<Contact/>}/>
          </Routes>
        </main>
        <ChatBot />
      </div>
    </BrowserRouter>
  )
}

export default App;