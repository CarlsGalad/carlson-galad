//components
import WorkSlider from '@/components/WorkSlider';
import Bulb from '@/components/Bulb';
import Circles from '@/components/Circles';

//framer motion
import { motion } from 'framer-motion';
import { fadeIn } from '@/components/variants';

const Work = () => {
    return (
        <div className='h-full bg-primary/30 py-36 sm:pt-80 flex items-center'>
            <Circles />
            <div className=' container mx-auto'>
                <div className='flex flex-col xl:flex-row gap-x-8'>
                    {/* text */}
                    <div className='text-center flex xl:w-[30vw] flex-col lg:text-left mb-4
                    xl:mb-0 group items-center'>
                        <motion.h2
                            variants={fadeIn('down', 0.2)}
                            initial='hidden'
                            animate='show'
                            exit='hidden'
                            className='h2 xl:mt-12'>
                            Our Work<span className='text-accent'>
                                .
                            </span>
                        </motion.h2>
                        <motion.p
                            variants={fadeIn('down', 0.4)}
                            initial='hidden'
                            animate='show'
                            exit='hidden'
                            className='mb-4 max-w-[400px] mx-auto lg:mx-8 xl:px-0 text-sm' >
                            From corporate treasury platforms managing digital assets to decentralized applications powering regenerative economies—explore the systems we&apos;ve built for clients across finance, blockchain, and enterprise technology.
                        </motion.p>
                    </div>
                    <motion.div
                        variants={fadeIn('up', 0.3)}
                        initial='hidden'
                        animate='show'
                        exit='hidden'
                        className='w-full xl:max-w-[65%]'>
                        {/* slider*/}
                        <WorkSlider />
                    </motion.div>
                </div>
            </div>
            <Bulb />
        </div>);
};

export default Work;