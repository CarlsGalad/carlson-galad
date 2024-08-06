import TestimonialSlider from "@/components/TestimonialSlider";

//framer motion
import { motion } from "framer-motion";
import { fadeIn } from "@/components/variants";

const Testimonials = () => {
    return <div>
        <div className="h-full bg-primary/30 py-32 text-center sm:pt-23 sm:mt-32">
            < div className='container mx-auto h-full flex flex-col justify-center'>
                {/* title */}

                <motion.h2
                    variants={fadeIn('down', 0.2)}
                    initial='hidden'
                    animate='show'
                    exit='hidden'
                    className="h2 mb-8 xl:be-8">
                    Clients <span className="text-accent">testimonies</span>
                </motion.h2>
                {/* slider */}

                <div>
                    <TestimonialSlider />
                </div>
            </div>
        </div>
    </div>;
};

export default Testimonials;
