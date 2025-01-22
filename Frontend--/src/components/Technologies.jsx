import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { motion } from "motion/react"; 
import { SiJavascript } from 'react-icons/si';


const technologies = [
  { icon: <RiReactjsLine className="text-7xl text-cyan-400" />, name: "React.js" },
  { icon: <SiMongodb className="text-7xl text-cyan-400" />, name: "MongoDB" },
  { icon: <FaNodeJs className="text-7xl text-cyan-400" />, name: "Node.js" },
  { icon: <BiLogoPostgresql className="text-7xl text-cyan-400" />, name: "PostgreSQL" },
  { icon: <SiJavascript className="text-7xl text-cyan-400" />, name: "JavaScript" },
  
];

const Technologies = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1  whileInView={{opacity: 1, x: 0 }} initial={{opacity: 0, x: 0}} transition={{duration: 0.5}} className="my-20 text-center text-4xl">Technologies</motion.h1>
      <motion.div whileInView={{opacity: 1, x: 0 }} initial={{opacity: 0, x: 0}} transition={{duration: 0.5}}  className="flex flex-wrap items-center justify-center gap-4">
        {technologies.map((tech, index) => (
          <div
            key={index}
            className="rounded-2xl border-4 border-neutral-900 p-4 text-center"
          >
            {tech.icon}
            <p className="mt-2 text-sm text-neutral-400">{tech.name}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Technologies;
