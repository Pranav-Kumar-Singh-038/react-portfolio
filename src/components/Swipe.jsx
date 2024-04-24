// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';


// import required modules
import { Autoplay, EffectCube, Navigation, Pagination } from 'swiper/modules';

export function Swipe() {
    return (
        <div className='flex justify-center mb-36 md:mb-0'>
            <Swiper
                effect={'cube'}
                grabCursor={true}
                loop={true}
                navigation={{
                    nextEl: '.custom-swiper-button-prev',
                    prevEl: '.custom-swiper-button-next',
                }}
                cubeEffect={{
                    shadow: true,
                    slideShadows: true,
                    shadowOffset: 20,
                    shadowScale: 0.94,
                }}
                autoplay={{
                    delay: '3000',
                    disableOnInteraction: false
                }}
                modules={[EffectCube, Pagination, Navigation, Autoplay]}
                className="w-full h-1/2 absolute md:mt-40 p-10"
            >
                <SwiperSlide className='flex justify-center items-center'>
                    <img className='relative w-100 h-full object-cover' src="https://res.cloudinary.com/dfyusbisg/image/upload/v1712058912/samples/balloons.jpg" />
                </SwiperSlide>
                <SwiperSlide className='flex justify-center items-center'>
                    <img className='relative w-100 h-full' alt='hii' src="https://res.cloudinary.com/dfyusbisg/image/upload/v1712058896/samples/ecommerce/accessories-bag.jpg" />
                </SwiperSlide>
                <SwiperSlide className='flex justify-center items-center'>
                    <img className='relative w-100 h-full' src="https://res.cloudinary.com/dfyusbisg/image/upload/v1712058892/samples/people/boy-snow-hoodie.jpg" />
                </SwiperSlide>
                <SwiperSlide className='flex justify-center items-center'>
                    <img className='relative w-100 h-full' src="https://res.cloudinary.com/dfyusbisg/image/upload/v1712058891/samples/bike.jpg" />
                </SwiperSlide>
                <SwiperSlide className='flex justify-center items-center'>
                    <img className='relative w-100 h-full' src="https://res.cloudinary.com/dfyusbisg/image/upload/v1712058888/samples/animals/reindeer.jpg" />
                </SwiperSlide>
                <SwiperSlide className='flex justify-center items-center'>
                    <img className='relative w-100 h-full' src="https://res.cloudinary.com/dfyusbisg/image/upload/v1712058886/samples/ecommerce/analog-classic.jpg" />
                </SwiperSlide>
                <SwiperSlide className='flex justify-center items-center'>
                    <img className='relative w-100 h-full' src="https://res.cloudinary.com/dfyusbisg/image/upload/v1712058897/samples/imagecon-group.jpg" />
                </SwiperSlide>
            </Swiper>
            <div className='hidden md:block w-screen md:flex gap-96 mt-96'>
                <div className="z-10 top-1/2 left-4 pl-96">
                    <button
                        className="custom-swiper-button-next bg-gray-400 opacity-40 hover:opacity-100 hover:bg-black rounded-full w-8 h-8 flex justify-center items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-6 h-6 text-white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                        </svg>
                    </button>
                </div>
                <div className="z-10 top-1/2 right-4 pl-96 ml-72">
                    <button
                        className="custom-swiper-button-prev bg-gray-400 opacity-40 hover:opacity-100 hover:bg-black rounded-full w-8 h-8 flex justify-center items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentcolor" className="w-6 h-6 text-white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>




    );
}
