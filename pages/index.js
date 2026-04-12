import dynamic from 'next/dynamic';
import Image from "next/image";

const ParticlesContainer = dynamic(() => import('@/components/ParticlesContainer'), {
  ssr: false,
});

import ProjectsBtn from "@/components/ProjectsBtn";
import Avatar from "@/components/Avatar";
import { motion } from "framer-motion";
import { fadeIn } from '../components/variants';

const Home = () => {
  return (
    <div className="bg-primary/60 min-h-screen">
      {/* text */}
      <div className="w-full min-h-screen bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left
          min-h-screen container mx-auto px-4 pb-32 xl:pb-0">

          {/* title */}
          <motion.h1
            variants={fadeIn('down', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className="h1 xl:max-w-[900px] pt-32 xl:pt-0"
          >
            Beyond Imagination, Bringing <br /> Your{' '}
            <span className="text-accent">Dreams to Life</span>
          </motion.h1>

          {/* paragraph */}
          <motion.p
            variants={fadeIn('down', 0.3)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16"
          >
            Dreams are the seeds of possibility, planted in the fertile ground of our minds.
            Through the digital canvas, we have the power to nurture these dreams, transforming
            them into a tangible reality. In the synthesis of innovation and imagination, we turn
            aspirations into actionable solutions, proving that with the right tools, our dreams
            can indeed shape the world.
          </motion.p>

          {/* btn - mobile only */}
          <div className="flex justify-center xl:hidden relative z-10 mb-28">
            <ProjectsBtn />
          </div>

          {/* btn - desktop only */}
          <motion.div
            variants={fadeIn('down', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className="hidden xl:flex relative z-10"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>

      {/* image layer */}
      <div className="w-full h-full absolute right-0 bottom-0 pointer-events-none">
        <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0" />
        <ParticlesContainer />
        <motion.div
          variants={fadeIn('up', 0.5)}
          initial='hidden'
          animate='show'
          exit='hidden'
          transition={{ duration: 1, ease: 'easeInOut' }}
          className='w-full h-full max-w-[700px] max-h-[478px] absolute -bottom-[10%] lg:bottom-[20%] lg:right-[0%] hidden xl:flex py-0'
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;