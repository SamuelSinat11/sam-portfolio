import React from "react";
import Profile from '../assets/Profile.jpg'; 
import { motion } from "motion/react"

const Hero = () => { 

    const HERO_CONTENT = `ខ្ញុំជាអ្នកបង្កើតកម្មវិធីពេញមួយរូបដែលមានទេពកោសល្យក្នុងការបង្កើតកម្មវិធីគេហទំព័រដ៏រឹងមាំ និងអាចធ្វើមាត្រដ្ឋានបាន។ ជាមួយនឹងបទពិសោធន៍ 5 ឆ្នាំនៃការប្រើដៃ ខ្ញុំបានពង្រឹងជំនាញរបស់ខ្ញុំនៅក្នុងបច្ចេកវិទ្យាខាងមុខដូចជា 
    React និង Next.js ក៏ដូចជាបច្ចេកវិទ្យា back-end ដូចជា Node.js, MySQL, PostgreSQL និង MongoDB ។ 
    គោលដៅរបស់ខ្ញុំគឺដើម្បីបង្កើនជំនាញរបស់ខ្ញុំដើម្បីបង្កើតដំណោះស្រាយប្រកបដោយភាពច្នៃប្រឌិតដែលជំរុញកំណើនអាជីវកម្ម និងផ្តល់នូវបទពិសោធន៍អ្នកប្រើប្រាស់ពិសេស។`;

    return (
        <>
            <div className="border-b border-neutral-900 pb-4 lg:mb-35"> 
                <div className="flex flex-wrap">
                    <div className="w-full lg:w-1/2">   
                        <div className="flex flex-col items-center lg:items-start">
                            <motion.h1 initial={{ x: -100, opacity: 0}} animate={{ x: 0, opacity: 1}} transition={{duration: 0.5 , delay: 1}} className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl bayon"> សុីណាត សាំយ៉ូអែល </motion.h1>
                            <motion.span initial={{ x: -100, opacity: 0}} animate={{ x: 0, opacity: 1}} transition={{duration: 0.5 , delay: 2}} className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight leading-loose text-transparent">  <span className="battambang">អ្នក​បង្កើតគេហទំព័រ -   </span>Full Stack Developer </motion.span>
                            <motion.p initial={{ x: -100, opacity: 0}} animate={{ x: 0, opacity: 1}} transition={{duration: 0.5 , delay: 3}} className="my-2 max-w-xl py-6 font-light tracking-wide battambang text-2xl  ">ចេះមក​ពី​រៀន​ {HERO_CONTENT}</ motion.p>
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