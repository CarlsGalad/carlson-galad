import Circles from "@/components/Circles";

import { BsArrowRight } from "react-icons/bs";
//module
import { motion } from "framer-motion";

//variant
import { fadeIn } from "@/components/variants";


const Contact = () => {

    return <div className='h-full bg-primary/30'>
        <div className=" container mx-auto py-32 text-center xl:text-left flex
        items-center justity-center h-full">
            {/* text and form */}
            <div className="flex flex-col wful max-w-[700px]">
                <motion.h2
                    variants={fadeIn('up', 0.2)}
                    initial='hidden'
                    
                    animate='show'
                    exit='hidden'
                    className="h2 text-center mb-12 ">
                    Lets
                    <span className="text-accent"> Connect.</span>

                </motion.h2>
                {/* form */}
                <motion.form
                    variants={fadeIn('up', 0.2)}
                    initial='hidden'

                    animate='show'
                    exit='hidden'
                    className="flex-1 flex flex-col gap-6 w-full mx-auto">
                    {/* form group */}
                    <div className="flex gap-x-6 w-full">
                        <input type=" text" placeholder="Name" className="input" />
                        <input type=" email" placeholder="Email" className="input" />
                    </div>
                    <input type=" email" placeholder="Subject" className="input" />
                    <textarea placeholder="message" className="textarea rounded-lg"></textarea>
                    <button className="btn  rounded-full border border-white/50 max-w-[170px]
                    px-8 transition-all duration-300 flex items-center justify-center overflow-hidden
                    hover:border-accent group">
                        <span className="group-hover:-translate-y-[120%] group-hover:opacity-0
                        transition-all duration-500">Lets talk</span>
                        < BsArrowRight className="translate-y-[120%] opacity-0 group-hover:flex
                        group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute teext-[22px]"/>
                    </button>
                </motion.form>
            </div>

        </div>
    </div>;
};

export default Contact;
