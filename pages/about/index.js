import React, { useState } from "react";

// icons
import {
    FaHtml5,
    FaCss3,
    FaJs,
    FaReact,
    FaFigma,
} from "react-icons/fa";

import {
    SiNextdotjs,
    SiFramer,
    SiAdobexd,
    SiAdobephotoshop,
    SiDart,
    SiFlutter,
    SiFirebase,
    SiNativescript,
    SiCanva,

} from "react-icons/si";


//  data
export const aboutData = [
    {
        title: 'skills',
        info: [
            {
                title: 'Web Development',
                icons: [
                    <SiDart />,
                    <FaCss3 />,
                    <FaJs />,
                    <FaReact />,
                    <SiNextdotjs />,
                    <SiFramer />,
                    <SiFlutter />,
                ],
            },
            {
                title: 'Mobile Development Andriod & iOS',
                icons: [
                    <SiDart />,
                    <SiFlutter />,
                    <SiNativescript />,
                    <SiFirebase />,
                ],
            },
            {
                title: 'UI/UX Design',
                icons: [<FaFigma />, <SiAdobexd />, <SiAdobephotoshop />, <SiCanva />],
            },
        ],
    },
    {
        title: 'awards',
        info: [
            {
                title: 'Webby Awards - Honoree',
                stage: '2011 - 2012',
            },
            {
                title: 'Adobe Design Achievement Awards - Finalist',
                stage: '2009 - 2010',
            },
        ],
    },
    {
        title: 'experience',
        info: [
            {
                title: 'UX/UI Designer - XYZ Company',
                stage: '2012 - 2023',
            },
            {
                title: 'Web Developer - ABC Agency',
                stage: '2010 - 2012',
            },
            {
                title: 'Intern - DEF Corporation',
                stage: '2008 - 2010',
            },
        ],
    },
    {
        title: 'credentials',
        info: [
            {
                title: 'Web Development - ABC University, LA, CA',
                stage: '2011',
            },
            {
                title: 'Computer Science Diploma - AV Technical Institute',
                stage: '2009',
            },
            {
                title: 'Certified Graphic Designer - ABC Institute, Los Angeles, CA',
                stage: '2006',
            },
        ],
    },
];

//components
import Avatar from "@/components/Avatar";
import Circles from "@/components/Circles";


//motion from framer
import { motion } from "framer-motion";
import { fadeIn } from "@/components/variants";
import { RiRadarFill } from "react-icons/ri";

//counter
import CountUp from "react-countup";


const About = () => {
    const [index, setIndex] = useState(0);
    console.log(index);

    return (

        <div className="h-full bg-primary/30 py-52 text-center xl:text-left ">
            <Circles />
            {/* avatar */}
            <motion.div
                variants={fadeIn('right', 0.2)}
                initial='hidden'
                animate='show'
                exit='hidden'
                className="hidden xl:flex absolute bottom-0 right-7 bg-blend-color-dodge">
                <Avatar />
            </motion.div>
            {/*text*/}
            <div className=" container mx-auto h-full flex flex-col items-center xl:flex-row
            gap-x-6">
                {/*text*/}
                <div className='flex-2  flex flex-col justify-center  xl:px-16 '>
                    <motion.h2
                        variants={fadeIn('right', 0.2)}
                        initial='hidden'
                        animate='show'
                        exit='hidden'
                        className="h2 text-base text-2x1 xl:text-3xl">
                        Crafting <span className="text-accent">Digital Experiences</span> with Precision and Passion</motion.h2>

                    <motion.p
                        variants={fadeIn('right', 0.4)}
                        initial='hidden'
                        animate='show'
                        exit='hidden'
                        className="max-w[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:p-0 text-justify text-sm">I am <span className="text-base
                         text-accent"> Adams Kingsley</span> a seasoned developer with over 5 years of experience
                        specializing in Flutter, React, and CSS for both mobile and web applications. My passion lies in creating seamless user experiences and efficient, scalable
                        solutions. Throughout my career, I have successfully delivered numerous projects, consistently blending innovation with technical expertise to meet and exceed client expectations.
                    </motion.p>
                    {/* counters*/}
                    <motion.div
                        variants={fadeIn('right', 0.6)}
                        initial='hidden'
                        animate='show'
                        exit='hidden'
                        className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-0">
                        <div className="flex flex-1 xl:gap-x-6">
                            {/*experience*/}
                            <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                                <div className=" 'text-2xl xl:text-4xl text-accent font-extrabold mb-2">
                                    <CountUp start={0} end={5} duration={5} /> +
                                </div>
                                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Years of experience</div>
                            </div>
                            {/*clients*/}
                            <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                                <div className=" 'text-2xl xl:text-4xl text-accent font-extrabold mb-2">
                                    <CountUp start={0} end={92} duration={5} /> +
                                </div>
                                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                                    Satisfied Client</div>
                            </div>{/*Completed jobs*/}
                            <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                                <div className=" 'text-2xl xl:text-4xl text-accent font-extrabold mb-2">
                                    <CountUp start={0} end={137} duration={5} /> +
                                </div>
                                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                                    Completed Projects</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
                {/*info*/}
                <motion.div
                    variants={fadeIn('left', 0.4)}
                    initial='hidden'
                    animate='show'
                    exit='hidden'
                    className="flex flex-col w-full xl:max-w-[48%} h-[480px}">
                    <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
                        {aboutData.map((item, itemIndex) => {
                            return (
                                <div
                                    key={itemIndex}
                                    className={`${index === itemIndex && 'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'} 
                                    cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:bottom-1 after:left-0`}
                                    onClick={() => setIndex(itemIndex)}
                                >
                                    {item.title}
                                </div>
                            );
                        })}
                    </div>
                    <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4
                    items-center xl:items-start">
                        {aboutData[index].info.map((item, itemIndex) => {
                            return (
                                <div key={itemIndex} className="flex-1 flex-col md:flex-row max-w-max gap-x-2  items-center text-white/60">
                                    {/* title */}
                                    <div className="font-light mb-2 md:mb-0">{item.title}</div>
                                    <div className="hidden md:flex">-</div>
                                    <div>{item.stage}</div>

                                    <div className="flex gap-x-4 items-center">
                                        {/* icon*/}
                                        {item.icons?.map((icon, itemIndex) => {
                                            return <div className="text-2xl text-white">{icon}</div>
                                        })}
                                    </div>

                                </div>);
                        })}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default About;
