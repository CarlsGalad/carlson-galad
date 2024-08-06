import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { FaQuoteLeft } from 'react-icons/fa';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const testimonialData = [
    {
        image: '/t-avt-1.png',
        name: 'Anne Smith',
        position: 'Customer',
        message:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
    },
    {
        image: '/t-avt-2.png',
        name: 'Jane Doe',
        position: 'Customer',
        message:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
    },
    {
        image: '/t-avt-3.png',
        name: 'Jhon Doe',
        position: 'Customer',
        message:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
    },
];

import { motion } from 'framer-motion';
import { fadeIn } from './variants';

const TestimonialSlider = () => {
    return (
        <Swiper
            navigation={true}
            spaceBetween={10}
            pagination={{
                clickable: true,
            }}
            modules={[
                Navigation,
                Pagination]}
            className='h-[400px] sm:h-[480px]'
        >
            {testimonialData.map((person, index) => (
                <SwiperSlide key={index}>
                    <div className='flex flex-col md:flex-row h-full px-4 sm:px-16'>
                        {/* Avatar, name, position */}
                        <motion.div
                            variants={fadeIn('right', 0.4)}
                            initial='hidden'
                            animate='show'
                            exit='hidden'
                            className='w-full md:w-1/3 flex flex-col items-center md:items-start mb-4 md:mb-0'>
                            <div className='w-20 h-20 mb-2'>
                                <Image src={person.image} alt={person.name} width={80} height={80} className='rounded-full' />
                            </div>
                            <h4 className='text-xl font-bold'>{person.name}</h4>
                            <p className='text-[12px] uppercase font-extralight tracking-widest text-gray-500'>{person.position}</p>
                        </motion.div>

                        {/* Message & quote */}
                        <motion.div
                            variants={fadeIn('left', 0.6)}
                            initial='hidden'
                            animate='show'
                            exit='hidden'
                            className='w-full md:w-2/3 p-6 flex flex-col justify-center xl:pb-48 xl:h-[350px] lg:h-[300px] md:h-[250px] sm:h-[200px] h-[150px] md:pt-0'>
                            <FaQuoteLeft className='text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0' />
                            <p className='text-2x1 text-center md:text-left'>{person.message}</p>
                        </motion.div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default TestimonialSlider;