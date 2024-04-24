import { useEffect, useRef, useState } from "react";

export const Form = () => {
    const [vedioplayer, setVedioplayer] = useState(false)
    const [, setIsPlaying] = useState(false);
    // const [currentTime, setCurrentTime] = useState(0);
    // const [duration, setDuration] = useState(0);
    const videoRef = useRef(null);

    useEffect(() => {
        if (vedioplayer) {
            const video = videoRef.current;
            // Autoplay the video when vedioplayer is true
            video.play().then(() => {
                setIsPlaying(true);
            }).catch(error => {
                console.error('Autoplay failed:', error);
                // Handle autoplay error here, such as showing a play button for user interaction
            });
            // Cleanup
            return () => {
                video.pause();
            };
        }
    }, [vedioplayer]);

    const handleSubmit = (event) => {
        event.preventDefault();
        // Set vedioplayer to true when the form is submitted
        setVedioplayer(true);
        // Add your form submission logic here
    };

    return (
        <div className="flex-col justify-center items-center mb-20">
            {vedioplayer && (
                <div className="relative w-screen h-screen">
                    <div className="absolute z-30 inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                        <div className={` flex justify-center items-center ${vedioplayer ? 'block' : 'hidden'}`} id="vedioplayer">
                            <video
                                className='w-6/12'
                                ref={videoRef}
                                src="vedio2.mp4"
                                controls={true}
                                muted
                                playsInline
                            />
                        </div>
                    </div>
                </div>
            )}
            <div className={`${vedioplayer ? 'hidden' : 'bg-[url("https://res.cloudinary.com/dgp2hrhld/image/upload/v1712573511/bg-1_jco0b2.webp")] bg-cover pb-20 mb-20'}`} id="form">
                <div className='flex items-center justify-center pt-4'>
                    <div className="border-white w-10 md:w-56 border"></div>
                    <div className='ml-4 mr-4 text-white text-xl md:text-5xl'>Be a Part of the Family</div>
                    <div className="border-white w-10 md:w-56 border"></div>
                </div>
                <div className='text-white mt-14'>
                    <div className='flex justify-center'>
                        Submit your Details get in touch Shortly
                    </div>
                    <div>
                        <div className='p-5 md:p-0 mt-10'>
                            <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
                                <div className="relative z-0 w-full mb-5 group p-5 md:p-0">
                                    <input type="Email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                    <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300
                                     transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4
                                      rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500
                                       peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75
                                        peer-focus:-translate-y-6">Email address</label>
                                </div>
                                <div className="grid md:grid-cols-2 md:gap-6 ">
                                    <div className="relative z-0 w-full mb-5 group p-5 md:p-0">
                                        <input type="text" name="floating_first_name" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                        <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400
                                         duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 
                                         rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500
                                          peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75
                                           peer-focus:-translate-y-6">First name</label>
                                    </div>
                                    <div className="relative z-0 w-full mb-5 group p-5 md:p-0">
                                        <input type="text" name="floating_last_name" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                        <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400
                                         duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0
                                          rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500
                                           peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75
                                            peer-focus:-translate-y-6">Last name</label>
                                    </div>
                                </div>
                                <div className="relative z-0 w-full mb-5 group p-5 md:p-0">
                                    <input type="tel" name="floating_phone" id="floating_phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                    <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300
                                     transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4
                                      peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100
                                       peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number</label>
                                </div>
                                <div className="relative z-0 w-full mb-5 group p-5 md:p-0">
                                    <input type="text" name="floating_company" id="floating_company" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                    <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400
                                     duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0
                                      rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500
                                       peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75
                                        peer-focus:-translate-y-6">Message</label>
                                </div>
                                <div className='flex justify-center items-center mb-2'>
                                    <input type="checkbox" name="your-consent" value="1" className="" aria-invalid="false" />
                                    <span className='pl-2'>
                                        I accept the
                                        <a className='text-red-950 pl-2 font-semibold' href="#" target="_blank">
                                            terms & condition
                                        </a>
                                    </span>
                                </div>
                                <div className="flex justify-center items-center p-20 md:p-0">
                                    <button
                                        type="submit"
                                        className="text-white bg-amber-700 hover:bg-amber-800 focus:ring-4 
                                                   focus:outline-none font-medium rounded text-sm w-full
                                                   sm:w-auto px-8 py-2.5 text-center">
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
