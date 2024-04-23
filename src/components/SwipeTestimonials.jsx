// import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';

export default function SwipeTestimonials() {
  return (
    <div className='relative mb-14'>
      <Swiper
        slidesPerView={1}
        spaceBetween={1}
        breakpoints={{
          '@0.00': {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          '@0.75': {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          '@1.00': {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          '@1.50': {
            slidesPerView: 4,
            spaceBetween: 10,
          },
        }}
        autoplay={{
          delay: '3000',
          disableOnInteraction: false
        }}

        modules={[Autoplay]}
        loop={true}
        className="mySwiper"
      >
        <SwiperSlide className='h-96 text-sm text-center rounded-md border border-white shadow-md p-4 bg-white'>
          <div className='pb-10'>
            <div className='flex'>
              <div>
                <img className='w-14 h-14 rounded-full' src='http://sonusharma.in/wp-content/uploads/2022/03/WhatsApp-Image-2022-03-31-at-5.14.21-PM.jpeg'></img>
              </div>
              <div>
                <div className='text-gray-700 font-medium text-base pl-4'>Ravi Saraf</div>
                <div className='text-gray-500 pl-4 tex-sm'>
                  President<br></br>
                  Agratrade, Chennai
                </div>
              </div>
            </div>
          </div>
          <div className='text-gray-700 font-light italic rounded-xl bg-gray-300 p-4 bg-opacity-30'>
            The topic couldn’t have been better
            than Believe In Yourself and we
            could see the energy inside
            the auditorium, Mr. Sharma happened
            to charge all of us so much that
            we are still living in that moment.
            We are thankful to Mr. Sonu Sharma
            and his team for such a amazing
            show and we look forward to
            future engagement soon.</div>
        </SwiperSlide>
        <SwiperSlide className='h-96 text-sm text-center rounded-md border border-white shadow-md p-4 bg-white'>
          <div className='pb-10'>
            <div className='flex'>
              <div>
                <img className='w-14 h-14 rounded-full' src='http://sonusharma.in/wp-content/uploads/2022/03/WhatsApp-Image-2022-03-29-at-9.46.18-AM.jpeg'></img>
              </div>
              <div>
                <div className='text-gray-700 font-medium text-base pl-4'>
                  Amol<br></br>
                  Chitlangia
                </div>
                <div className='text-gray-500 pl-4 tex-sm'>
                  Director(BN Chem)
                </div>
              </div>
            </div>
          </div>
          <div className='text-gray-700 font-light italic rounded-xl bg-gray-300 p-4 bg-opacity-30'>
            I got the opportunity to arrange
            a motivational seminar for my club
            and Member’s demanded to have
            it of Mr Sonu Sharma. The
            2 hour session at Taj Wellington
            Chennai was jam packed, and at times
            there was pin drop silence.
            The personality of Mr. Sonu
            Sharma is very charming, but at
            the same time his connection with
            the audience is amazing.</div>
        </SwiperSlide>
        <SwiperSlide className='h-96 text-sm text-center rounded-md border border-white shadow-md p-4 bg-white'>
          <div className='pb-10'>
            <div className='flex'>
              <div>
                <img className='w-14 h-14 rounded-full' src='http://sonusharma.in/wp-content/uploads/2022/03/WhatsApp-Image-2022-03-28-at-7.10.00-PM.jpeg'></img>
              </div>
              <div>
                <div className='text-gray-700 font-medium text-base pl-4'>
                  Mr Manish<br></br>
                  Khandelwal
                </div>
                <div className='text-gray-500 pl-4 tex-sm'>
                  M.D(Biomech)
                </div>
              </div>
            </div>
          </div>
          <div className='text-gray-700 font-light italic rounded-xl bg-gray-300 p-4 bg-opacity-30'>
            Low confidence and lower self
            esteem can usually be seen among
            people these days. Want to tackle
            it? Listen to him once. I’m very
            sure you’ll get the positive response
            to all your self-doubts and you’ll
            emerge as a completely new and much
            more confident human being with a
            higher self-esteem.</div>
        </SwiperSlide>
        <SwiperSlide className='h-96 text-sm text-center rounded-md border border-white shadow-md p-4 bg-white'>
          <div className='pb-10'>
            <div className='flex'>
              <div>
                <img className='w-14 h-14 rounded-full' src='http://sonusharma.in/wp-content/uploads/2022/03/WhatsApp-Image-2022-03-28-at-7.21.06-PM.jpeg'></img>
              </div>
              <div>
                <div className='text-gray-700 font-medium text-base pl-4'>Asmita Patel</div>
                <div className='text-gray-500 pl-4 tex-sm'>
                  Founder APGST
                </div>
              </div>
            </div>
          </div>
          <div className='text-gray-700 font-light italic rounded-xl bg-gray-300 p-4 bg-opacity-30'>
            Just listen to him once and you’ll
            be motivated on another level.
            Attending is seminars has always
            been completely motivating, satisfying
            and rewarding as well. You’ll get to
            learn a lot from him if you listen
            to him patiently.</div>
        </SwiperSlide>
        <SwiperSlide className='h-96 text-sm text-center rounded-md border border-white shadow-md p-4 bg-white'>
          <div className='pb-10'>
            <div className='flex'>
              <div>
                <img className='w-14 h-14 rounded-full' src='http://sonusharma.in/wp-content/uploads/2022/03/WhatsApp-Image-2022-03-28-at-7.18.48-PM.jpeg'></img>
              </div>
              <div>
                <div className='text-gray-700 font-medium text-base pl-4'>Ashish Adarsh</div>
                <div className='text-gray-500 pl-4 tex-sm'>
                  Founder Director<br></br>
                  (Arcade College)
                </div>
              </div>
            </div>
          </div>
          <div className=' text-gray-700 font-light italic rounded-xl bg-gray-300 p-4 bg-opacity-30'>
            Direction, positive attitude and
            confidence- all what I’ve got from
            him. What else I can say? I would
            have never believed in what a
            difference. I now have a direction,
            a positive attitude and confidence
            in myself and my abilities.
            By applying his motivational advices
            to your life, you can become a better
            person than ever before.</div>
        </SwiperSlide>

      </Swiper>
      {/* <div className=" w-full h-10 pl-96 ml-96">
        <div className="flex  swiper-pagination"></div>
      </div> */}
    </div>
  );
}
