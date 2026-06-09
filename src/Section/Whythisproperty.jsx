 import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

const Whythisproperty = () => {

  const slides = [
  {
    image: "src/assets/img/img 4.jpg",
    head: "EVENT",
    heading: "YOU SHOP. WE DELIVER.",
    paragraph:
      "Enjoy a seamless shopping experience with our delivery service."
  },

  {
    image: "src/assets/img/img 1.jpg",
    head: "OFFER",
    heading: "SHOP.EARN.FLY",
    paragraph:
      "Eeam Skywards Miles when you stops at Dubai Mall. Shopping has never been his rewarding." 
  }
]

  return (
    <section className="p-4 md:p-10 bg-gray-100">

      <div className="max-w-7xl mx-auto rounded-3xl overflow-hidden">

        <Swiper
  modules={[Navigation, Autoplay]}
  loop={true}
  slidesPerView={1}
  autoplay={{
    delay: 3000,
    disableOnInteraction: false
  }}
  speed={800}
  className="h-[60vh] md:h-[80vh]"
>

         {slides.map((slide, index) => (

            <SwiperSlide key={index}>

  <div className="relative w-full h-[60vh] md:h-[80vh]">

    
    <img
  src={slide.image}
  alt=""
  className="w-full h-full object-cover"
/>

    
    <div className="absolute inset-0 bg-black/30"></div>

    
    <div className="absolute inset-0 flex flex-col justify-center items-start text-white px-6 md:px-16">

     <div className='w-full border-b'>
       <p>{slide.head}</p>

     <h1 className="text-3xl md:text-6xl font-bold mb-6">
       {slide.heading}
      </h1>
     </div>

     <p className="text-sm md:text-xl max-w-xl text-gray-200 mt-6 leading-7">
      {slide.paragraph}
      </p>

      <button className=' border hover:bg-white hover:text-black w-28 mt-5 p-2'>
        <a className='text-[13px]' href="">LEARN MORE</a>
      </button>

    </div>

  </div>

</SwiperSlide>

          ))}

        </Swiper>

      </div>

    </section>
  )
}

export default Whythisproperty