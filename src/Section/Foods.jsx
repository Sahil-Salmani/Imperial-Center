import React from 'react'

const Foods = () => {

  return (

    <section id='Foods' className='flex flex-col lg:flex-row gap-6 p-6 md:p-10 bg-gray-100'>

      {/* First Card */}
      <div className='relative w-full lg:w-1/2 h-[50vh] md:h-[70vh] overflow-hidden rounded-3xl'>

        <img
          className='w-full h-full object-cover hover:scale-105 transition duration-700'
          src="/foods/food-13.jpg"
          alt=""
        />

        <div className='absolute inset-0 bg-black/40'></div>

        <div className='absolute bottom-8 left-6 md:left-10 text-white'>

          <h1 className='text-3xl md:text-5xl font-bold mb-4'>
            Luxury Dining
          </h1>

          <p className='max-w-md text-sm md:text-lg text-gray-200 leading-7'>
            Experience fine dining with world-class chefs
            and unforgettable flavors.
          </p>

        </div>

      </div>

      {/* Second Card */}
      <div className='relative w-full lg:w-1/2 h-[50vh] md:h-[70vh] overflow-hidden rounded-3xl'>

        <img
          className='w-full h-full object-cover hover:scale-105 transition duration-700'
          src="/img/img-5.jpg"
          alt=""
        />

        <div className='absolute inset-0 bg-black/40'></div>

        <div className='absolute bottom-8 left-6 md:left-10 text-white'>

          <h1 className='text-3xl md:text-5xl font-bold mb-4'>
            Premium Cafés
          </h1>

          <p className='max-w-md text-sm md:text-lg text-gray-200 leading-7'>
            Relax and enjoy handcrafted coffee,
            desserts, and modern café culture.
          </p>

        </div>

      </div>

    </section>
  )
}

export default Foods