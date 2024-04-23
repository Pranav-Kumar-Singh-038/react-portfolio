import { useRecoilValue, useSetRecoilState } from "recoil"
import { ImageNumber } from "../store-s/atoms-s/ImageSlide"
import { Left, Right } from "../svgs/Slider"

export const ImageSlider = () => {
    const setImageNumber = useSetRecoilState(ImageNumber)
    const getImageNumber = useRecoilValue(ImageNumber)
    function IncreaseNumber() {
        setImageNumber((prev) => {
            if (prev == 5) { return 1 }
            else { return prev + 1 }
        }
        )
    }
    function DecreaseNumber() {
        setImageNumber((prev) => {
            if (prev == 1) { return 5 }
            else { return prev - 1 }
        }
        )
    }
    return (

        <div className="relative h-screen w-screen p-4 flex justify-center items-center">
            <div className="absolute z-10 top-1/2 right-8 h-10 w-10 flex justify-center items-center bg-gray-500 opacity-30 hover:opacity-70 bg-gray-600 rounded-full" onClick={IncreaseNumber}>
                <Right />
            </div>
            <div className="absolute z-10 top-1/2 left-8 h-10 w-10 flex justify-center items-center bg-gray-500 opacity-30 hover:opacity-70 bg-gray-600 rounded-full" onClick={DecreaseNumber}>
                <Left />
            </div>
            <div className="overflow-hidden h-full w-full translate-x-4">
                <img src={`image${getImageNumber}.jpg`} className="h-full w-full object-cover"/>
            </div>
        </div>
    );
}