//swiper
import { Swiper, SwiperSlide } from 'swiper/react';

//
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// icons
import {
    RxCube,
    RxLockClosed,
    RxDashboard,
    RxLayers,
    RxCode,
    RxArrowTopRight
} from "react-icons/rx";

//modules
import { FreeMode, Pagination } from 'swiper/modules';

// data
const serviceData = [
    {
        icon: <RxCube />,
        title: 'Blockchain Infrastructure',
        description: 'Smart contract development, multi-signature wallets, and DeFi integrations on EVM-compatible chains.',
    },
    {
        icon: <RxLockClosed />,
        title: 'Financial Systems',
        description: 'Corporate treasury platforms, payment orchestration, and escrow systems for high-stakes transactions.',
    },
    {
        icon: <RxDashboard />,
        title: 'Enterprise Platforms',
        description: 'Multi-stakeholder systems with role-based access, compliance frameworks, and audit trails.',
    },
    {
        icon: <RxLayers />,
        title: 'Marketplace Solutions',
        description: 'AI-powered matching engines, unified wallets, and federated logistics for service economies.',
    },
    {
        icon: <RxCode />,
        title: 'Custom Development',
        description: 'End-to-end system architecture from backend APIs to mobile applications with production-grade security.',
    },
];

const ServiceSlider = () => {
    return (
        <Swiper
            breakpoints={{
                320: {
                    slidesPerView: 1,
                    spaceBetween: 15
                },
                640: {
                    slidesPerView: 3,
                    spaceBetween: 15
                },
            }}
            freeMode={true}
            pagination={{
                clickable: true
            }}
            modules={[FreeMode, Pagination]}
            className='h-[240px] sm:h-[340px]'
        >
            {serviceData.map((item, index) => {
                return (
                    <SwiperSlide key={index}>
                        <div className='bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex
                        sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300'>
                            {/*icon*/}
                            <div className='text-4xl text-accent mb-4'>{item.icon}</div>
                            {/* title and desc*/}
                            <div className='mb-8'>
                                <div className='mb-2 text-lg'>{item.title}</div>
                                <p className='max-w-[345px] leading-normal'>{item.description}</p>
                            </div>
                            {/*arrow*/}
                            <div className='text-3xl'>
                                <RxArrowTopRight className='group-hover:rotate-45 group-hover:text-accent transition-all duration-300' />
                            </div>
                        </div>
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
};

export default ServiceSlider;