import React from 'react'

const Entertainment = () => {

  const underwater = [
    {
      image: "src/assets/img/underwater.jpg",
      head: "ENTERTAIN",
      heading: "Imperial Aquarium & Underwater Zoo",
      paragraph:
        "Marvel at the wonders of nature up-close, with more than 33,000 animals to admire."
    }
  ]

  return (

    <section className='w-full relative overflow-hidden'>

      <img
        className='w-full h-[60vh] md:h-[75vh] object-cover'
        src={underwater[0].image}
        alt=""
      />

      {/* Overlay */}
      <div className='absolute inset-0 bg-black/40'></div>

      {/* Content */}
      <div className='absolute inset-0 flex flex-col justify-center text-white px-6 md:px-20'>

        <p className='text-xs md:text-sm tracking-[4px] mb-3'>
          {underwater[0].head}
        </p>

        <h1 className='text-3xl md:text-6xl font-bold mb-4 max-w-3xl leading-tight'>
          {underwater[0].heading}
        </h1>

        <p className='text-sm md:text-xl text-gray-200 max-w-xl leading-7'>
          {underwater[0].paragraph}
        </p>

      </div>

    </section>
  )
}

export default Entertainment