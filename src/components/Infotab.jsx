// import React, { useRef, useState } from 'react';
import CountUp from 'react-countup';
import { Particle } from './Particle';
export function Infotab() {

    return (
        <div className='flex justify-center h-fit m-4 mt-14'>
            <div className='p-8 relative '>
                <Particle></Particle>
                <CountUp
                    start={0}
                    end={22}
                    duration={2.75}
                    separator=" "
                    decimals={0} >
                    {({ countUpRef }) => (
                        <div>
                            <span className="text-9xl drop-shadow-lg font-bold text-red-400 h-24 flex items-center justify-center" ref={countUpRef} />
                        </div>
                    )}
                </CountUp>
            </div>
            <div className="p-2">
                <div className=" text-3xl font-normal text-gray-800 mb-3">
                    <div>Years of </div>
                    <div>experience</div>
                </div>
                <div className="text-gray-700 font-normal">Glorious 22 years of<br></br> experience and success in<br></br> changing lives.</div>
                <div>
                    <a href='#form'>
                        <button className="bg-red-400 text-white p-2 rounded-md mt-6 ml-8">
                            <div>Get In Touch</div>
                        </button>
                    </a>
                </div>
            </div>
            <div className='flex w-1/3 h-96 '>
                <div className='flex-col justify-center'>
                    <CountUp
                        start={0}
                        end={22}
                        duration={2.75}
                        separator=" "
                        prefix=""
                        suffix="+"
                        decimals={0} >
                        {({ countUpRef }) => (
                            <div className='flex-col justify-center items-center'>
                                <span className="text-6xl drop-shadow-lg font-normal text-slate-500 h-24 flex items-center justify-center" ref={countUpRef} />
                                <div className='text-xl font-normal text-slate-600 ml-12 mt-4'>Countries</div>
                            </div>
                        )}
                    </CountUp>
                    <div className='border border-slate-400 mx-2'></div>
                    <CountUp
                        start={0}
                        end={4.4}
                        duration={2.75}
                        separator=" "
                        prefix=""
                        suffix="M+"
                        decimals={1} >
                        {({ countUpRef }) => (
                            <div>
                                <span className="text-6xl drop-shadow-lg font-normal text-slate-500 h-24 flex items-center justify-center" ref={countUpRef} />
                                <div className='text-xl font-normal text-slate-600 ml-12 mt-4'>Participants</div>

                            </div>
                        )}
                    </CountUp>

                </div>
                <div className='border border-slate-400 mx-2 h-80'></div>
                <div>
                    <CountUp
                        start={0}
                        end={1600}
                        duration={2.75}
                        separator=","
                        prefix=""
                        suffix="+"
                        decimals={0} >
                        {({ countUpRef }) => (
                            <div className=' grid grid-cols-1'>
                                <span className="text-6xl drop-shadow-lg font-normal text-slate-500 h-24 flex items-center justify-center" ref={countUpRef} />
                                <div className='text-xl font-normal text-slate-600 ml-12 mt-4'>Workshops</div>
                            </div>
                        )}
                    </CountUp>
                    <div className='border border-slate-400 mx-2'></div>
                    <CountUp
                        start={0}
                        end={3800}
                        duration={2.75}
                        separator=","
                        prefix=""
                        suffix="+"
                        decimals={0} >
                        {({ countUpRef }) => (
                            <div>
                                <span className="text-6xl drop-shadow-lg font-normal text-slate-500 h-24 flex items-center justify-center" ref={countUpRef} />
                                <div className='text-xl font-normal text-slate-600 ml-12 mt-4'>Events</div>
                            </div>
                        )}
                    </CountUp>
                </div>
            </div>
        </div>
    )
}