import React from 'react';
import CountUp from 'react-countup';
import { Particle } from './Particle'; // Assuming this path is correct

export function Infotab() {
    return (
        <div className='flex justify-center h-fit m-4 mt-14'>
            <div className='p-8 relative '>
                <Particle />
                {/* <CountUp end={100} /> */}
                <span className="text-9xl drop-shadow-lg font-bold text-blue-400 h-24 flex items-center justify-center" >
                    <CountUp
                        start={0}
                        end={11}
                        duration={2.75}
                        separator=" "
                        decimals={0}>
                    </CountUp>
                </span>

            </div>
            <div className="p-2">
                <div className=" text-3xl font-normal text-gray-800 mb-3">
                    <div>Years of </div>
                    <div>experience</div>
                </div>
                <div className="text-gray-700 font-normal">Glorious 11 years of<br /> experience and success in<br /> changing lives.</div>
                <div>
                    <button className="bg-blue-400 text-white p-2 rounded-md mt-6 ml-8" onClick={() => { window.location.href = '#form'; }}>
                        Get In Touch
                    </button>
                </div>
            </div>
            <div className='flex w-1/3 h-96 '>
                <div className='flex-col justify-center'>

                    <div className='flex-col justify-center items-center'>
                        <span className="text-6xl drop-shadow-lg font-normal text-slate-500 h-24 flex items-center justify-center">
                            <CountUp
                                start={0}
                                end={2}
                                duration={2.75}
                                separator=" "
                                prefix=""
                                suffix="+"
                                decimals={0}>
                            </CountUp>
                        </span>
                        <div className='text-xl font-normal text-slate-600 ml-12 mt-4'>Countries</div>
                    </div>

                    <div className='border border-slate-400 mx-2'></div>

                    <div>
                        <span className="text-6xl drop-shadow-lg font-normal text-slate-500 h-24 flex items-center justify-center">                    <CountUp
                            start={0}
                            end={7.5}
                            duration={2.75}
                            separator=" "
                            prefix=""
                            suffix="M+"
                            decimals={1}>
                        </CountUp>
                        </span>
                        <div className='text-xl font-normal text-slate-600 ml-12 mt-4'>Participants</div>
                    </div>

                </div>
                <div className='border border-slate-400 mx-2 h-80'></div>
                <div>

                    <div className=' grid grid-cols-1'>
                        <span className="text-6xl drop-shadow-lg font-normal text-slate-500 h-24 flex items-center justify-center">
                            <CountUp
                                start={0}
                                end={100}
                                duration={2.75}
                                separator=","
                                prefix=""
                                suffix="+"
                                decimals={0}>
                            </CountUp></span>
                        <div className='text-xl font-normal text-slate-600 ml-12 mt-4'>Workshops</div>
                    </div>

                    <div className='border border-slate-400 mx-2'></div>

                    <div>
                        <span className="text-6xl drop-shadow-lg font-normal text-slate-500 h-24 flex items-center justify-center" >
                            <CountUp
                                start={0}
                                end={380}
                                duration={2.75}
                                separator=","
                                prefix=""
                                suffix="+"
                                decimals={0}>
                            </CountUp>
                        </span>
                        <div className='text-xl font-normal text-slate-600 ml-12 mt-4'>Events</div>
                    </div>

                </div>
            </div>
        </div>
    )
}