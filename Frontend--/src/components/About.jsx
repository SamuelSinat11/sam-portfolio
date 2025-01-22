import React from "react";
import Work from "../assets/Work.jpg"
import { motion } from "motion/react"
const About = () => { 

    const ABOUT_TEXT = `ដំណើររបស់ខ្ញុំក្នុងការអភិវឌ្ឍន៍គេហទំព័របានចាប់ផ្តើមជាមួយនឹងការចង់ដឹងចង់ឃើញយ៉ាងជ្រាលជ្រៅសម្រាប់របៀបដែលអ្វីៗដំណើរការ ហើយវាបានវិវត្តទៅជាអាជីពមួយដែលខ្ញុំបន្តខិតខំរៀនសូត្រ 
    និងសម្របខ្លួនទៅនឹងបញ្ហាប្រឈមថ្មីៗ។ ខ្ញុំ​រីក​ចម្រើន​ក្នុង​បរិយាកាស​សហការ​គ្នា ហើយ​រីករាយ​នឹង​ការ​ដោះស្រាយ​បញ្ហា​ស្មុគស្មាញ​ដើម្បី​ផ្តល់​ដំណោះស្រាយ​ដែល​មាន​គុណភាព​ខ្ពស់។ 
    ក្រៅ​ពី​ការ​សរសេរ​កូដ ខ្ញុំ​រីករាយ​នឹង​ការ​បន្ត​សកម្ម ស្វែង​រក​បច្ចេក​វិទ្យា​ថ្មី និង​ចូល​រួម​ចំណែក​ក្នុង​គម្រោង​ប្រភព​បើកចំហ។`;

    return (
        <> 
            <div className="border-b border-neutral-900 pb-4">
                <motion.h1   whileInView={{opacity: 1, x: 0 }}
                initial={{opacity: 0, x: -100}}
                transition={{duration: 0.5}} 
                className="my-20 text-center text-4xl"> About <span className="text-neutral-500"> Me </span></motion.h1> 
            </div>

            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex items-center justify-center">
                        <motion.img  whileInView={{opacity: 1, x: 0 }}
                        initial={{opacity: 0, x: -100}}
                        transition={{duration: 0.5}} className="rounded-2xl w-15 h-15" src={Work} alt="" />
                    </div>
                </div>
                <div className="w-full lg:w-1/2">
                    <div className="flex justify-center lg:justify-start">
                        <motion.p  whileInView={{opacity: 1, x: 0 }}
                        initial={{opacity: 0, x: 100}}
                        transition={{duration: 0.5}} className="my-2 max-w-xl py-6 font-light tracking-wide battambang text-2xl ">{ABOUT_TEXT}</motion.p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About; 