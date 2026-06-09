import React from 'react'

const Retail = () => {

  return (

    <section className='flex flex-col lg:flex-row items-center gap-10 lg:gap-16 p-6 md:p-10 bg-gray-100'>

      {/* Image */}
      <div className='w-full lg:w-1/2'>

        <img
          className='w-full h-[50vh] md:h-[70vh] object-cover rounded-3xl'
          src="src/assets/img/luxury.jpg"
          alt=""
        />

      </div>

      {/* Content */}
      <div className='w-full lg:w-1/2 flex flex-col gap-6 text-center lg:text-left'>

        <h6 className='text-sm tracking-[4px] uppercase text-gray-500'>
          Fashion Avenue
        </h6>

        <h1 className='text-4xl md:text-6xl font-bold leading-tight'>
          Redefining <br /> luxury
        </h1>

        <p className='text-base md:text-lg text-gray-600 max-w-lg mx-auto lg:mx-0'>
          More than 200 of the most covetable luxury brands at
          Fashion Avenue ready for you to discover.
        </p>

        <button className='border border-black w-fit px-6 py-3 hover:bg-black hover:text-white transition mx-auto lg:mx-0'>
          Explore More
        </button>

      </div>

    </section>
  )
}

export default Retail