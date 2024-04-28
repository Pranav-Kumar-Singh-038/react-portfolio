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
                <img className='w-14 h-14 rounded-full' src='https://res.cloudinary.com/dxwlsrgwj/image/upload/v1713243483/samples/woman-on-a-football-field.jpg'></img>
              </div>
              <div>
                <div className='text-gray-700 font-medium text-base pl-4'>Dummy Name</div>
                <div className='text-gray-500 pl-4 tex-sm'>
                  dummy position<br></br>
                  dummy company
                </div>
              </div>
            </div>
          </div>
          <div className='text-gray-700 font-light italic rounded-xl bg-gray-300 p-4 bg-opacity-30'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec libero quis nunc malesuada aliquet. Nullam vehicula, nisi non vehicula ultrices, risus augue pellentesque augue, nec lacinia nunc sem in odio. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed posuere, metus a mollis blandit, est quam fermentum nisi, sit amet auctor nulla diam vel felis. Curabitur sit amet massa nisi</div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec libero quis nunc malesuada aliquet. Nullam vehicula, nisi non vehicula ultrices, risus augue pellentesque augue, nec lacinia nunc sem in odio. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed posuere, metus a mollis blandit, est quam fermentum nisi, sit amet auctor nulla diam vel felis. Curabitur sit amet massa nisi</SwiperSlide>
        <SwiperSlide className='h-96 text-sm text-center rounded-md border border-white shadow-md p-4 bg-white'>
          <div className='pb-10'>
            <div className='flex'>
              <div>
                <img className='w-14 h-14 rounded-full' src='https://res.cloudinary.com/dxwlsrgwj/image/upload/v1713243484/samples/upscale-face-1.jpg'></img>
              </div>
              <div>
                <div className='text-gray-700 font-medium text-base pl-4'>
                  Dummy<br></br>
                 name
                </div>
                <div className='text-gray-500 pl-4 tex-sm'>
                 dummy position
                </div>
              </div>
            </div>
          </div>
          <div className='text-gray-700 font-light italic rounded-xl bg-gray-300 p-4 bg-opacity-30'>
           Consequat qui nostrud incididunt et amet proident. Veniam enim et esse consectetur nostrud veniam non ad voluptate duis. Duis cupidatat laboris irure proident deserunt enim officia nulla exercitation proident commodo dolor eiusmod velit. Voluptate qui in ad ut est Lorem irure. Veniam officia sunt mollit qui et do amet duis. Ea ea id veniam sint ex enim.</div>
        </SwiperSlide>
        <SwiperSlide className='h-96 text-sm text-center rounded-md border border-white shadow-md p-4 bg-white'>
          <div className='pb-10'>
            <div className='flex'>
              <div>
                <img className='w-14 h-14 rounded-full' src='https://res.cloudinary.com/dxwlsrgwj/image/upload/v1713243481/samples/man-portrait.jpg'></img>
              </div>
              <div>
                <div className='text-gray-700 font-medium text-base pl-4'>
                  Dummy<br></br>
                 Name
                </div>
                <div className='text-gray-500 pl-4 tex-sm'>
                 dummy position
                </div>
              </div>
            </div>
          </div>
          <div className='text-gray-700 font-light italic rounded-xl bg-gray-300 p-4 bg-opacity-30'>
          Sunt excepteur laboris non id Lorem proident. Sit id enim commodo qui et pariatur excepteur nisi cillum deserunt reprehenderit. Sint ullamco ullamco ex magna magna Lorem. Excepteur veniam irure incididunt est exercitation. Sit duis pariatur pariatur commodo consequat occaecat cillum qui deserunt ea. Deserunt nisi ut tempor exercitation ea aliqua ipsum commodo enim est ea irure.</div>
        </SwiperSlide>
        <SwiperSlide className='h-96 text-sm text-center rounded-md border border-white shadow-md p-4 bg-white'>
          <div className='pb-10'>
            <div className='flex'>
              <div>
                <img className='w-14 h-14 rounded-full' src='https://res.cloudinary.com/dxwlsrgwj/image/upload/v1713243478/samples/smile.jpg'></img>
              </div>
              <div>
                <div className='text-gray-700 font-medium text-base pl-4'>Dummy Name</div>
                <div className='text-gray-500 pl-4 tex-sm'>
                 dummy position
                </div>
              </div>
            </div>
          </div>
          <div className='text-gray-700 font-light italic rounded-xl bg-gray-300 p-4 bg-opacity-30'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec libero quis nunc malesuada aliquet. Nullam vehicula, nisi non vehicula ultrices, risus augue pellentesque augue, nec lacinia nunc sem in odio. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed posuere, metus a mollis blandit, est quam fermentum nisi, sit amet auctor nulla diam vel felis. Curabitur sit amet massa nisi</div>
        </SwiperSlide>
        <SwiperSlide className='h-96 text-sm text-center rounded-md border border-white shadow-md p-4 bg-white'>
          <div className='pb-10'>
            <div className='flex'>
              <div>
                <img className='w-14 h-14 rounded-full' src='https://res.cloudinary.com/dxwlsrgwj/image/upload/v1713243456/samples/people/smiling-man.jpg'></img>
              </div>
              <div>
                <div className='text-gray-700 font-medium text-base pl-4'>Dummy Name</div>
                <div className='text-gray-500 pl-4 tex-sm'>
                  dummy position<br></br>
                  Dummy place
                </div>
              </div>
            </div>
          </div>
          <div className=' text-gray-700 font-light italic rounded-xl bg-gray-300 p-4 bg-opacity-30'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec libero quis nunc malesuada aliquet. Nullam vehicula, nisi non vehicula ultrices, risus augue pellentesque augue, nec lacinia nunc sem in odio. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed posuere, metus a mollis blandit, est quam fermentum nisi, sit amet auctor nulla diam vel felis. Curabitur sit amet massa nisi</div>
        </SwiperSlide>

      </Swiper>
      {/* <div className=" w-full h-10 pl-96 ml-96">
        <div className="flex  swiper-pagination"></div>
      </div> */}
    </div>
  );
}
