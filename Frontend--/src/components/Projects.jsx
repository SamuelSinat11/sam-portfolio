import React from "react";
import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import { motion } from "motion/react"; 

const Projects = () => {
  const PROJECTS = [
    {
      title: "E-Commerce Website",
      image: project1,
      description:
        "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
      technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
    },
    {
      title: "Task Management App",
      image: project2,
      description:
        "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
      technologies: ["HTML", "CSS", "Angular", "Firebase"],
    },
    {
      title: "Portfolio Website",
      image: project3,
      description:
        "A personal portfolio website showcasing projects, skills, and contact information.",
      technologies: ["HTML", "CSS", "React", "Bootstrap"],
    },
    {
      title: "Blogging Platform",
      image: project4,
      description:
        "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
      technologies: ["HTML", "CSS", "Vue.js", "Express", "MySQL"],
    },
  ];

  return (
    <div className="border-b border-neutral-900 pb-8">
      <h1 className="my-20 text-center text-4xl">Projects</h1>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4">
              <motion.img
                whileInView={{opacity: 1, x: 0 }}
                initial={{opacity: 0, x: -100}}
                transition={{duration: 0.5}}
                src={project.image}
                width={150}
                height={150}
                alt={project.title}
                className="rounded mb-6 shadow-md"
              />
            </div>
            <div>
              <motion.div   
                whileInView={{opacity: 1, x: 0 }}
                initial={{opacity: 0, x: -100}}
                transition={{duration: 0.5}} className="w-full max-w-xl lg:w-3/4">
                <h6 className="mb-2 text-xl font-semibold text-white">
                  {project.title}
                </h6>
                <p className="mb-4 text-neutral-400">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="rounded bg-neutral-900 px-3 py-1 text-sm font-medium text-purple-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
