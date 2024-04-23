import SwipeTestimonials from "./SwipeTestimonials";

export const Testimonial = () => {
    return (
        <div className="relative mb-16" id="testimonials">
            <div
                className="absolute inset-0 bg-cover bg-center bg-white"
                style={{ backgroundImage: "url('/testimonialBg.avif')" }}
            />
            <div className="relative">
                <div className="p-3">
                    <div className="text-white flex justify-center items-center pb-3">
                        <div className="flex items-center">
                            <div className="border border-gray-500 w-96"></div>
                            <div className="ml-3 mr-3 text-4xl text-black font-semibold">Testimonials</div>
                            <div className="border border-gray-500 w-96"></div>
                        </div>
                    </div>
                    <div className="flex justify-center text-gray-600 text-lg pb-4">Trusted By</div>
                </div>
                <div className="flex justify-center items-center">
                    <div className="w-7/12">
                        <SwipeTestimonials />
                    </div>
                </div>
            </div>
        </div>
    );
};
