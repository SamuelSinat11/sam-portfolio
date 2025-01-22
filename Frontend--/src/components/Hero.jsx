import React from "react";
import Profile from '../assets/Profile.jpg'; 
import { motion } from "motion/react"

const Hero = () => { 

    const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of 
    hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, 
    PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

    return (
        <>
            <div className="border-b border-neutral-900 pb-4 lg:mb-35"> 
                <div className="flex flex-wrap">
                    <div className="w-full lg:w-1/2">   
                        <div className="flex flex-col items-center lg:items-start">
                            <motion.h1 initial={{ x: -100, opacity: 0}} animate={{ x: 0, opacity: 1}} transition={{duration: 0.5 , delay: 1}} className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">Sinat Samuel</motion.h1>
                            <motion.span initial={{ x: -100, opacity: 0}} animate={{ x: 0, opacity: 1}} transition={{duration: 0.5 , delay: 2}} className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent"> Full Stack Developer </motion.span>
                            <motion.p initial={{ x: -100, opacity: 0}} animate={{ x: 0, opacity: 1}} transition={{duration: 0.5 , delay: 3}} className="my-2 max-w-xl py-6 font-light tracking-tighter">{HERO_CONTENT}</ motion.p>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 lg:p-8">
                        <div className="flex justify-center"> 
                            <motion.img initial={{ x: 100, opacity: 0}} animate={{ x: 0, opacity: 1}} transition={{duration: 1 , delay: 1}}  className="w-30 h-30 rounded-full" src={Profile} alt="Profile" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero; 