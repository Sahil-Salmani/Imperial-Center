import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'

const Brands = () => {

  const Brandslides = [
    { image: "/brands/images-1.png" },
    { image: "/brands/images-2.jpeg" },
    { image: "/brands/images-3.jpeg" },
    { image: "/brands/images-4.jpg" },
    { image: "/brands/images-5.jpg" },
    { image: "/brands/images-6.png" },
    { image: "/brands/images-7.jpg" },
    { image: "/brands/images-8.jpeg" },
    { image: "/brands/images-9.jpeg" },
    { image: "/brands/images-10.png" },
    { image: "/brands/images-11.jpeg" },
    { image: "/brands/images-12.jpeg" },
    { image: "/brands/images-13.jpg" },
    { image: "/brands/images-14.jpg" },
    { image: "/brands/images-15.png" }
  ]

  return (

    <section id='Brands' className='w-full py-16 bg-white overflow-hidden'>

      {/* Heading */}
      <div className='flex flex-col items-center text-center mb-14 px-6'>

        <h1 className='text-4xl md:text-5xl font-bold border-b pb-5 w-full md:w-[80vw]'>
          Shopping Brands
        </h1>

        <p className='mt-6 max-w-3xl text-gray-600 text-base md:text-lg border-b pb-6 leading-8'>
          A one-stop destination for every shopping enthusiast
          and a home to coveted international brands for a
          world class luxury shopping experience.
        </p>

      </div>

      {/* Slider Section */}
      <div className='max-w-7xl mx-auto px-4'>

        {/* Buttons */}
        <div className='flex justify-end gap-4 mb-8'>

          <button className='swiper-button-prev-custom border border-gray-300 w-12 h-12 rounded-full text-xl hover:bg-black hover:text-white transition duration-300'>

            ←

          </button>

          <button className='swiper-button-next-custom border border-gray-300 w-12 h-12 rounded-full text-xl hover:bg-black hover:text-white transition duration-300'>

            →

          </button>

        </div>

        {/* Swiper */}
        <Swiper
          modules={[Autoplay, Navigation]}

          navigation={{
            prevEl: '.swiper-button-prev-custom',
            nextEl: '.swiper-button-next-custom'
          }}

          autoplay={{
            delay: 2000,
            disableOnInteraction: false
          }}

          loop={true}
          speed={900}
          spaceBetween={20}

          breakpoints={{

            320: {
              slidesPerView: 1
            },

            640: {
              slidesPerView: 2
            },

            768: {
              slidesPerView: 3
            },

            1024: {
              slidesPerView: 5
            }

          }}
        >

          {Brandslides.map((img, index) => (

            <SwiperSlide key={index}>

              <div className='h-[35vh] md:h-[45vh] flex items-center justify-center bg-white rounded-2xl overflow-hidden'>

                <img
                  src={img.image}
                  alt=""
                  className='w-full h-full object-contain hover:scale-105 transition duration-500'
                />

              </div>

            </SwiperSlide>

          ))}

        </Swiper>

      </div>

    </section>
  )
}

export default Brands