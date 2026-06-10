import React from 'react'
import { motion } from 'framer-motion'

const opportunitiesData = [
  {
    title: 'Leasing Opportunities',
    heading: 'Position Your Brand at the Center of Millions',
    description:
      'Premium retail environments designed for flagship stores, luxury boutiques, and next-generation shopping experiences.',
    points: [
      'Luxury retail spaces',
      'Pop-up activation zones',
      'High-footfall storefronts',
      'Global audience reach',
    ],
    button: 'Explore Leasing',
  },

  {
    title: 'Sponsorship Platform',
    heading: 'Connect With a Massive Global Audience',
    description:
      'Create unforgettable campaigns through immersive sponsorships, digital experiences, and high-visibility brand placements.',
    points: [
      'Digital media displays',
      'Event sponsorships',
      'Seasonal campaigns',
      'Experiential activations',
    ],
    button: 'Become a Partner',
  },

  {
    title: 'Event Hosting',
    heading: 'Built for World-Class Experiences',
    description:
      'From concerts to product launches, Imperial Center delivers scalable venues designed for unforgettable events.',
    points: [
      'Concert-ready venues',
      'Corporate events',
      'Fashion shows',
      'Brand launch spaces',
    ],
    button: 'Book an Event',
  },

  {
    title: 'Venue Capacity',
    heading: 'Scalable Spaces for Every Experience',
    description:
      'Flexible entertainment and expo venues engineered for large-scale audience engagement.',
    points: [
      'Grand Arena — 20,000 Capacity',
      'Expo Hall — 8,000 Capacity',
      'Luxury Atrium — 2,500 Capacity',
      'Outdoor Plaza — 15,000 Capacity',
    ],
    button: 'View Venues',
  },
]

const Opportunities = () => {
  return (
    <section className="w-full bg-black text-white mb-5 py-6 px-4 md:px-10">
      
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-5xl mb-20"
      >
        <p className="uppercase tracking-[3px] text-gray-400 mb-4">
          Commercial Opportunities
        </p>

        <h1 className="text-5xl md:text-5xl font-bold leading-tight">
          A Global Platform for Retail,
          Entertainment & Brand Growth
        </h1>
      </motion.div>

      {/* Cards */}
     <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

        {opportunitiesData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 hover:bg-white/10 transition-all duration-500 max-w-[550px]"
          >

            {/* Small Title */}
            <p className="uppercase tracking-[4px] text-sm text-gray-400 mb-4">
              {item.title}
            </p>

            {/* Main Heading */}
            <h2 className="text-xl md:text-2xl font-semibold leading-tight mb-4">
              {item.heading}
            </h2>

            {/* Description */}
           <p className="text-gray-300 text-sm leading-relaxed mb-5">
              {item.description}
            </p>

            {/* Points */}
            <div className="space-y-2 mb-6">
              {item.points.map((point, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 text-gray-200"
                >
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                  <p>{point}</p>
                </div>
              ))}
            </div>

            {/* Button */}
            <button className="px-5 py-2 rounded-full text-sm border border-white/20 hover:bg-white hover:text-black transition-all duration-300">
              {item.button}
            </button>

            {/* Hover Glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-white/5 via-transparent to-white/5 pointer-events-none"></div>
          </motion.div>
        ))}

      </div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-32 text-center"
      >
        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          Be Part of the Future of Destination Retail
        </h2>

        <p className="text-gray-400 max-w-3xl mx-auto mb-10">
          Join the world’s leading brands, entertainment partners,
          and global audiences at Imperial Center.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <button className="px-8 py-4 rounded-full bg-white text-black hover:scale-105 transition duration-300">
            Contact Commercial Team
          </button>

          <button className="px-8 py-4 rounded-full border border-white/20 hover:bg-white hover:text-black transition duration-300">
            Schedule Presentation
          </button>
        </div>
      </motion.div>

    </section>
  )
}

export default Opportunities