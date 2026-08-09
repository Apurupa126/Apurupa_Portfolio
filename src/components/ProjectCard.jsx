import { motion } from "framer-motion";

const ProjectCard = ({project}) => {

return(

<motion.div
whileHover={{scale:1.05}}
className="border border-gray-700 p-6 rounded-xl"
>

<h2 className="text-xl font-bold mb-2">
{project.title}
</h2>

<p className="text-gray-400 mb-4">
{project.description}
</p>

<div className="flex gap-4">

<a
href={project.demo}
className="px-4 py-2 bg-purple-600 rounded"
>
Live Demo
</a>

<a
href={project.github}
className="px-4 py-2 border border-gray-500 rounded"
>
GitHub
</a>

</div>

</motion.div>

);

};

export default ProjectCard;