import React, { useState } from "react";

// icons
import {
    FaReact,
    FaDocker,
    FaAws,
    FaGitAlt,
} from "react-icons/fa";

import {
    SiNextdotjs,
    SiFlutter,
    SiDart,
    SiGo,
    SiPostgresql,
    SiRedis,
    SiSolidity,
    SiPolygon,
    SiTerraform,
    SiNginx,
    SiFirebase,
    SiTailwindcss,
    SiFigma,
} from "react-icons/si";

import { TbBrandCSharp } from "react-icons/tb";

//  data
export const aboutData = [
    {
        title: 'skills',
        info: [
            {
                title: 'Backend Development',
                icons: [
                    'SiGo',
                    'TbBrandCSharp',
                    'SiPostgresql',
                    'SiRedis',
                ],
            },
            {
                title: 'Blockchain & Smart Contracts',
                icons: [
                    'SiSolidity',
                    'SiPolygon',
                ],
            },
            {
                title: 'Frontend & Mobile',
                icons: [
                    'FaReact',
                    'SiNextdotjs',
                    'SiFlutter',
                    'SiDart',
                    'SiTailwindcss',
                ],
            },
            {
                title: 'DevOps & Infrastructure',
                icons: [
                    'FaDocker',
                    'SiTerraform',
                    'SiNginx',
                    'FaGitAlt',
                    'FaAws',
                ],
            },
            {
                title: 'UI/UX & Design',
                icons: [
                    'SiFigma',
                ],
            },
        ],
    },
    {
        title: 'experience',
        info: [
            {
                title: 'Team Lead & Systems Architect - Beyle Technologies',
                stage: '2022 - Present',
            },
            {
                title: 'Backend Engineer - Enterprise & Blockchain Projects',
                stage: '2020 - Present',
            },
            {
                title: 'Full-Stack Developer - Multi-Platform Applications',
                stage: '2019 - 2022',
            },
        ],
    },
    {
        title: 'certifications',
        info: [
            {
                title: 'Dart Programming - Programming Hub',
                stage: '2023',
            },
            {
                title: 'Flutter Development - Programming Hub',
                stage: '2023',
            },
            {
                title: 'DevOps Fundamentals - Programming Hub',
                stage: '2023',
            },
            {
                title: 'Artificial Intelligence - Programming Hub',
                stage: '2023',
            },
            {
                title: 'Firebase - Programming Hub',
                stage: '2023',
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

//counter
import CountUp from "react-countup";

const About = () => {
    const [index, setIndex] = useState(0);

    const renderIcon = (iconName) => {
        switch (iconName) {
            case 'FaReact': return <FaReact />;
            case 'FaDocker': return <FaDocker />;
            case 'FaAws': return <FaAws />;
            case 'FaGitAlt': return <FaGitAlt />;
            case 'SiNextdotjs': return <SiNextdotjs />;
            case 'SiFlutter': return <SiFlutter />;
            case 'SiDart': return <SiDart />;
            case 'SiGo': return <SiGo />;
            case 'TbBrandCSharp': return <TbBrandCSharp />;
            case 'SiPostgresql': return <SiPostgresql />;
            case 'SiRedis': return <SiRedis />;
            case 'SiSolidity': return <SiSolidity />;
            case 'SiPolygon': return <SiPolygon />;
            case 'SiTerraform': return <SiTerraform />;
            case 'SiNginx': return <SiNginx />;
            case 'SiFirebase': return <SiFirebase />;
            case 'SiTailwindcss': return <SiTailwindcss />;
            case 'SiFigma': return <SiFigma />;
            default: return null;
        }
    };

    return (
        <div className="min-h-full bg-primary/30 py-32 xl:py-52 text-center xl:text-left overflow-y-auto">
            <Circles />
            {/* avatar */}
          <motion.div
    variants={fadeIn('right', 0.2)}
    initial='hidden'
    animate='show'
    exit='hidden'
    className="hidden xl:flex absolute bottom-0 right-7 bg-blend-color-dodge opacity-10 z-0">
    <Avatar />
</motion.div>
            {/*text*/}
            <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6 relative z-10">
                {/*text*/}
                <div className='flex-2  flex flex-col justify-center  xl:px-16 '>
                    <motion.h2
                        variants={fadeIn('right', 0.2)}
                        initial='hidden'
                        animate='show'
                        exit='hidden'
                        className="h2 text-base text-2x1 xl:text-3xl">
                        Building <span className="text-accent">Trust Infrastructure</span> for Digital Economies
                    </motion.h2>

                    <motion.p
                        variants={fadeIn('right', 0.4)}
                        initial='hidden'
                        animate='show'
                        exit='hidden'
                        className="max-w[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:p-0 text-justify text-sm">
                        We are <span className="text-base text-accent">Beyle Technologies</span>, an enterprise software development firm specializing in blockchain financial infrastructure, multi-stakeholder platforms, and mission-critical systems. Led by <span className="text-accent">Adams Kingsley</span>, our team architects production-grade solutions that power corporate treasury operations, decentralized applications, and service economy platforms across Africa and beyond. From smart contract development to AI-powered marketplaces, we build systems where security, scalability, and regulatory compliance are non-negotiable.
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
                            {/*projects*/}
                            <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                                <div className=" 'text-2xl xl:text-4xl text-accent font-extrabold mb-2">
                                    <CountUp start={0} end={4} duration={5} />
                                </div>
                                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                                    Flagship Products</div>
                            </div>
                            {/*tech stack*/}
                            <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                                <div className=" 'text-2xl xl:text-4xl text-accent font-extrabold mb-2">
                                    <CountUp start={0} end={15} duration={5} /> +
                                </div>
                                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                                    Technologies Mastered</div>
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
                    className="flex flex-col w-full xl:max-w-[48%] xl:h-[480px]">
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
                                <div key={itemIndex} className="flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60 mx-auto xl:mx-0">
    {/* title */}
    <div className="font-light mb-2 md:mb-0 text-center xl:text-left">{item.title}</div>
    <div className="hidden md:flex">-</div>
    <div>{item.stage}</div>

    <div className="flex gap-x-4 items-center justify-center xl:justify-start">
        {item.icons?.map((iconName) => {
            return <div key={iconName} className="text-2xl text-white">{renderIcon(iconName)}</div>
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