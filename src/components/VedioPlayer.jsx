import { useEffect, useRef, useState } from "react";

export const VedioPlayer = () => {
    const [, setIsPlaying] = useState(false);
    const videoRef = useRef(null);

    // useEffect(() => {
    //     const video = videoRef.current;
    //     video.play().then(() => {
    //         setIsPlaying(true);
    //     }).catch(error => {
    //         console.error('Autoplay failed:', error);
    //     });
    //     return () => {
    //         video.pause();
    //     };
    // }, []);

    return <div className="" id="vedioplayer">
        <video
            className=' w-full h-full'
            ref={videoRef}
            src="AboutVedio.mp4"
            controls={true}
            muted
            playsInline
        />
    </div>
}