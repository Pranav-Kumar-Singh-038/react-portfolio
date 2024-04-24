import { useState, useRef, useEffect } from 'react';

export const About = () => {
    const [, setIsPlaying] = useState(false);
    // const [currentTime, setCurrentTime] = useState(0);
    // const [duration, setDuration] = useState(0);
    const videoRef = useRef(null);

    useEffect(() => {
        const video = videoRef.current;
        // Autoplay the video when the component mounts
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
    }, []);

    // const togglePlay = () => {
    //     setIsPlaying(prevState => !prevState);
    //     if (isPlaying) {
    //         videoRef.current.pause();
    //     } else {
    //         videoRef.current.play();
    //     }
    // }

    // const updateTime = () => {
    //     setCurrentTime(videoRef.current.currentTime);
    //     setDuration(videoRef.current.duration);
    // };


    return (
        <div>
            <div className='text-center mt-20' id='about'>
                <div className="flex justify-center items-center text-xl md:text-5xl font-medium pt-4">
                    <div className="bg-gradient-to-r to-blue-500 from-white w-52 h-1"></div>
                    <div className='ml-3 mr-3'>Navigating the Digital Frontier Fueled by Affiliate partnerships</div>
                    <div className="bg-gradient-to-r from-blue-500 to-white w-52 h-1"></div>
                </div>
                <div className='text-lg md:text-2xl pt-8 text-gray-800 h-4 p-8'>
                    ABX User has spent over 22 years navigating the digital frontier, powered by affiliate partnerships
                </div>
            </div>
            <div className="grid md:flex justify-center gap-6 mt-20 md:mt-16">
                <div className='overflow-hidden relative h-96 '>
                    <video
                        className=' w-full h-full'
                        ref={videoRef}
                        src="https://res.cloudinary.com/dfyusbisg/video/upload/v1713970921/Modi_ji_distracted_by_Mamata_didi_funny_meme_video_edit_modi_speech_meme_teleprompter_meme_fsdlhi.mp4"
                        controls={true}
                        muted
                        playsInline
                    />
                </div>

                <div className='hidden md:block w-2/6 font-light text-lg leading-loose text-gray-700'>
                    Mr. <b>Sonu Sharma</b>&nbsp;is the founder of&nbsp;<b>
                        Dynamic India Group.</b>&nbsp;An&nbsp;<b>Author, Educator, Business Counselor,
                    </b>and Productive Business Eantruprinor, he’s a way sought- after
                    <b>speaker.</b>&nbsp;These days he is one of the <b>youngest sacred Speakers
                    </b> in India. He <b>conjures up</b> and <b>encourages peoples </b>
                    to <b>appreciate</b>&nbsp;their&nbsp;<b>true potential.</b>&nbsp;
                    He has taken his dynamic person message to the opposite side of the
                    world. His two decades of&nbsp;<b>analysis</b> and understanding within
                    the <b>Direct Sales Business</b>&nbsp;has placed several organisations on
                    a&nbsp;<b>path of growth </b>and <b>fulfillment. </b>More than a
                    <b>million individuals</b> have benefited from his <b>dynamic workshops
                    </b> in our many states of India and 1 billion have watched him on
                    <b>Social Media</b> and various other <b>online platforms</b>&nbsp;
                    across&nbsp;<b>114 countries.</b>
                </div>
                <div className='md:hidden text-gray-700 leading-loose text-base font-light text-center p-10'>
                Mr. Sonu Sharma is the founder of Dynamic India Group. An Author, Educator, Business Counselor, and Productive Business Eantruprinor, he’s a way sought- after speaker. These days he is one of the youngest sacred Speakers in India. He conjures up and encourages peoples to appreciate their true potential. He has taken his dynamic person message to the opposite side of the world. His two decades of analysis and understanding within the Direct Sales Business has placed several organisations on a path of growth and fulfillment. More than a million individuals have benefited from his dynamic workshops in our many states of India and 1 billion have watched him on Social Media and various other online platforms across 114 countries.
                </div>
            </div>
        </div>
    );
}
