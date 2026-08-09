import React, {useState} from "react";
import { useParams, Link } from "react-router-dom";
import { projects } from "../data/Projects";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);
  const [lightbox, setLightbox] = useState({ open: false, src: null });

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <div className="text-center">
          <h2 className="text-2xl font-bold">Project not found</h2>
          <Link to="/projects" className="mt-4 inline-block text-sm text-cyan-400">Back to Projects</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white px-6 md:px-14 py-16">

      <div className="max-w-5xl mx-auto bg-gradient-to-br from-[#071226]/60 to-[#0b0f16]/60 rounded-3xl p-8 backdrop-blur-md border border-gray-800">

        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/2">
            <img src={project.thumbnail} alt={project.title} className="w-full rounded-2xl shadow-lg" />
          </div>

          <div className="md:w-1/2">
            <h1 className="text-3xl font-bold mb-2 text-purple-300">{project.title}</h1>
            <p className="text-gray-300 mb-4">{project.description}</p>

            <div className="mb-4">
              <h3 className="text-sm text-gray-400 uppercase">Tech Stack</h3>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.stack.map((s, i) => (
                  <span key={i} className="text-xs px-3 py-1 bg-white/5 rounded-full text-purple-200">{s}</span>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <h3 className="text-sm text-gray-400 uppercase">Problem</h3>
              <p className="text-gray-300">{project.problem}</p>
            </div>

            <div className="mb-4">
              <h3 className="text-sm text-gray-400 uppercase">Solution</h3>
              <p className="text-gray-300">{project.solution}</p>
            </div>

            <div className="flex gap-3 mt-4">
              <a href={project.github} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-md bg-gradient-to-r from-purple-600 to-pink-500">GitHub</a>
              <a href={project.docs} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-md bg-white/5 border border-gray-700">Docs</a>
            </div>

          </div>
        </div>

        {/* Gallery */}
        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-4">Gallery</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {project.gallery?.map((g, idx) => (
              <button key={idx} onClick={() => setLightbox({ open: true, src: g })} className="rounded-xl overflow-hidden">
                <img src={g} alt={`gallery-${idx}`} className="w-full h-48 object-cover rounded-xl" />
              </button>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-4">Features</h3>
          <ul className="list-disc list-inside text-gray-300">
            {project.features?.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
        </div>

        {/* Future Enhancements placeholder */}
        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-4">Future Enhancements</h3>
          <p className="text-gray-300">Planned improvements, scaling notes, and further research directions will be added here.</p>
        </div>

      </div>

      {/* Lightbox */}
      {lightbox.open && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center" onClick={() => setLightbox({ open: false, src: null })}>
          <img src={lightbox.src} alt="lightbox" className="max-w-[90%] max-h-[90%] rounded-lg shadow-2xl" />
        </div>
      )}

    </div>
  );
};

export default ProjectDetail;