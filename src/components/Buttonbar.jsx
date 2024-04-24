import './buttonbar.css';

export function Buttonbar() {
    return (
        <div className="flex justify-center mt-8 mb-40 md:mb-24" id='buttonbar'>
            <div className="bg-[url('https://asset.cloudinary.com/dgp2hrhld/7a9e9c17bb0c56bcbdf4e8cf8a7e7672')] h-20 w-screen bg-contain flex justify-center">
                <div className="w-screen grid grid-cols-2 md:justify-center md:flex text-white gap-3 p-4 ">
                    <a href="#" className="relative w-11/12 md:w-52 group h-20 md:h-28 block bg-no-repeat bg-cover bg-center overflow-hidden rounded-md" style={{ backgroundImage: "url('https://asset.cloudinary.com/dgp2hrhld/7a9e9c17bb0c56bcbdf4e8cf8a7e7672')" }}>
                        <div className="overlay absolute inset-0"></div>
                        <div className="relative p-2 z-20 flex justify-between">
                            <div className="flex flex-col ml-3">
                                <div className="flex flex-col h-12">
                                    <div className="text-white text-lg md:text-base font-medium">Book</div>
                                    <div className="text-white text-lg md:text-base font-medium" >A Show</div>
                                </div>
                                <div className="hidden md:block md:flex items-center gap-1 mt-2 text-xs">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-3 h-3 text-white">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                                    </svg>
                                    Read More
                                </div>
                            </div>
                            <img src='https://shorturl.at/krEN9' className='w-7 h-7 md:w-10 md:h-10 m-2'></img>
                        </div>
                    </a>
                    <a href="#" className="relative w-11/12 md:w-52 group h-20 md:h-28 block bg-no-repeat bg-cover bg-center overflow-hidden rounded-md" style={{ backgroundImage: "url('/image--1.jpg')" }}>
                        <div className="overlay absolute inset-0"></div>
                        <div className="relative p-2 z-20 flex justify-between">
                            <div className="flex flex-col ml-3">
                                <div className="flex flex-col h-12">
                                    <div className="text-white text-lg md:text-base font-medium">Corporate</div>
                                    <div className="text-white text-lg md:text-base font-medium">Events</div>
                                </div>
                                <div className="hidden md:display md:flex items-center gap-1 mt-2 text-xs">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-3 h-3 text-white">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                                    </svg>
                                    Read More
                                </div>
                            </div>
                            <img src='https://rb.gy/cd4w95' className='w-7 h-7 md:w-10 md:h-10 m-2'></img>
                        </div>
                    </a>
                    <a href="#" className="relative w-11/12 md:w-52 group h-20 md:h-28 block bg-no-repeat bg-cover bg-center overflow-hidden rounded-md" style={{ backgroundImage: "url('/image--1.jpg')" }}>
                        <div className="overlay absolute inset-0"></div>                        <div className="relative p-2 z-20 flex justify-between">
                            <div className="flex flex-col ml-3">
                                <div className="flex flex-col h-12">
                                    <div className="text-white text-lg md:text-base font-medium">Become</div>
                                    <div className="text-white text-lg md:text-base font-medium">Affiliate</div>
                                </div>
                                <div className="hidden md:display md:flex items-center gap-1 mt-2 text-xs">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-3 h-3 text-white">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                                    </svg>
                                    Read More
                                </div>
                            </div>
                            <img src='https://rb.gy/ac9ln5' className='w-10 h-10 m-2'></img>

                        </div>
                    </a>
                    <a href="#" className="relative w-11/12 md:w-52 group h-20 md:h-28 block bg-no-repeat bg-cover bg-center overflow-hidden rounded-md" style={{ backgroundImage: "url('/image--1.jpg')" }}>
                        <div className="overlay absolute inset-0"></div>                        <div className="relative p-2 z-20 flex justify-between">
                            <div className="flex flex-col ml-3">
                                <div className="flex flex-col h-12">
                                    <div className="text-white text-lg md:text-base font-medium mt-2">Store</div>
                                </div>
                                <div className="hidden md:display md:flex items-center gap-1 mt-2 text-xs">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-3 h-3 text-white">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                                    </svg>
                                    Read More
                                </div>
                            </div>
                            <img src='https://rb.gy/t9xwm8' className='w-7 h-7 md:w-10 md:h-10 m-2'></img>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

