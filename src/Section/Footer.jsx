import React from 'react'
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaGooglePlay,
  FaApple
} from "react-icons/fa"

const Footer = () => {
  return (

    <footer className='bg-black text-white pt-16 pb-10 px-6 md:px-10'>

      {/* Top Section */}
       <div className='max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-gray-700 pb-12'>

        {/* Brand */}
        <div>

          <h1 className='text-4xl font-bold mb-6'>
            Imperial Center
          </h1>

          <p className='text-gray-400 leading-7'>
            Discover luxury shopping, premium dining,
            world-class entertainment and unforgettable
            experiences — all in one destination.
          </p>

          {/* Social */}
          <div className='flex gap-4 mt-8'>

            <div className='border border-gray-600 p-3 rounded-full hover:bg-white hover:text-black transition cursor-pointer'>
              <FaFacebookF />
            </div>

            <div className='border border-gray-600 p-3 rounded-full hover:bg-white hover:text-black transition cursor-pointer'>
              <FaInstagram />
            </div>

            <div className='border border-gray-600 p-3 rounded-full hover:bg-white hover:text-black transition cursor-pointer'>
              <FaTwitter />
            </div>

            <div className='border border-gray-600 p-3 rounded-full hover:bg-white hover:text-black transition cursor-pointer'>
              <FaYoutube />
            </div>

          </div>

        </div>

        {/* Newsletter */}
        <div>

          <h2 className='text-2xl font-semibold mb-6'>
            RECEIVE OUR NEWSLETTER
          </h2>

          <div className='flex flex-col gap-4'>

            <input
              type="email"
              placeholder='Email Address'
              className='bg-transparent border border-gray-600 px-5 py-4 outline-none rounded-lg'
            />

            <button className='bg-white text-black py-4 rounded-lg font-medium hover:bg-gray-200 transition'>
              Subscribe
            </button>

          </div>

          {/* Apps */}
          <div className='mt-8'>

            <h3 className='text-lg mb-4'>
              Download the app
            </h3>

            <div className='flex gap-4 flex-wrap'>

              <button className='flex items-center gap-2 border border-gray-600 px-4 py-3 rounded-lg hover:bg-white hover:text-black transition'>
                <FaApple />
                App Store
              </button>

              <button className='flex items-center gap-2 border border-gray-600 px-4 py-3 rounded-lg hover:bg-white hover:text-black transition'>
                <FaGooglePlay />
                Google Play
              </button>

            </div>

          </div>

        </div>

        {/* Visitor Info */}
        <div>

          <h2 className='text-2xl font-semibold mb-6'>
            Visitor Information
          </h2>

          <ul className='space-y-4 text-gray-400'>

            <li className='hover:text-white cursor-pointer'>Services</li>
            <li className='hover:text-white cursor-pointer'>Mall Map</li>
            <li className='hover:text-white cursor-pointer'>Gift Card</li>
            <li className='hover:text-white cursor-pointer'>The Lounge</li>
            <li className='hover:text-white cursor-pointer'>Parking FAQs</li>

          </ul>

        </div>

        {/* More Links */}
        <div>

          <h2 className='text-2xl font-semibold mb-6'>
            More from Imperial
          </h2>

          <ul className='space-y-4 text-gray-400'>

            <li className='hover:text-white cursor-pointer'>About Us</li>
            <li className='hover:text-white cursor-pointer'>Media Centre</li>
            <li className='hover:text-white cursor-pointer'>Careers</li>
            <li className='hover:text-white cursor-pointer'>Privacy Policy</li>
            <li className='hover:text-white cursor-pointer'>Terms & Conditions</li>

          </ul>

        </div>

      </div>

      {/* Bottom Section */}
      <div className='max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 pt-8 text-gray-400 text-sm text-center md:text-left'>

        <div className='flex flex-col gap-2'>

          <p>
            GLOBEL: 800 Imperial Center (800 38224 6255)
          </p>

          <p>
            enquiry@theImperialCentermall.com
          </p>

        </div>

          <button className='border border-gray-600 px-6 py-3 rounded-full hover:bg-white hover:text-black transition'>
          Chat with Us
        </button>

      </div>

    </footer>
  )
}

export default Footer