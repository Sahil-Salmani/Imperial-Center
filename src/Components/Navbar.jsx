import React, { useState } from 'react'
import { HiMenuAlt3, HiX } from "react-icons/hi"

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false)

  return (

    <header className='sticky top-0 z-50'>

      <nav className='bg-black/80 backdrop-blur-md text-white border-b border-white/10'>

        <div className='max-w-7xl mx-auto h-20 flex items-center justify-between px-6'>

          {/* Logo */}
          <a href="#Hero" className='cursor-pointer z-50'>

            <h1 className='text-2xl font-semibold tracking-wide'>

              Imperial <span className='font-light'>Center</span>

            </h1>

          </a>

          {/* Desktop Menu */}
          <ul className='hidden md:flex items-center gap-12 text-[15px] font-medium tracking-wide'>

            <li>
              <a
                href="#Brands"
                className="relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
              >
                Shopping
              </a>
            </li>

            <li>
              <a
                href="#Foods"
                className="relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
              >
                Food + Drink
              </a>
            </li>

            <li>
              <a
                href="#Entertainment"
                className="relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
              >
                Entertainment
              </a>
            </li>

            <li>
              <a
                href="#Whythisproperty"
                className="relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
              >
                Plan Visit
              </a>
            </li>

            <li>
              <a
                href="#Opportunities"
                className="relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
              >
                Services
              </a>
            </li>

          </ul>

          {/* Desktop Button */}
          <button className='hidden md:block border border-white/30 px-5 py-2 rounded-full hover:bg-white hover:text-black transition duration-300 text-sm'>

            Explore Mall

          </button>

          {/* Mobile Menu Icon */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className='md:hidden text-3xl z-50'
          >

            {menuOpen ? <HiX /> : <HiMenuAlt3 />}

          </button>

        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden absolute top-0 left-0 w-full bg-black transition-all duration-500 overflow-hidden ${
            menuOpen ? "h-screen pt-28" : "h-0"
          }`}
        >

          <ul className='flex flex-col items-center gap-10 text-xl'>

            <li><a href="#Brands">Shopping</a></li>

            <li><a href="#Foods">Food + Drink</a></li>

            <li><a href="#Entertainment">Entertainment</a></li>

            <li><a href="#Whythisproperty">Plan Visit</a></li>

            <li><a href="#Opportunities">Services</a></li>

            <button className='border border-white px-6 py-3 rounded-full mt-6 hover:bg-white hover:text-black transition'>

              Explore Mall

            </button>

          </ul>

        </div>

      </nav>

    </header>
  )
}

export default Navbar