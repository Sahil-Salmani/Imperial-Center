import { useState } from 'react'
import 'swiper/css'
import 'swiper/css/navigation'
import Navbar from './Components/Navbar'
import Hero from './Section/Hero'
import Whythisproperty from './Section/Whythisproperty'
import Entertainment from './Section/Entertainment'
import Retail from './Section/Retail'
import Brands from './Section/Brands'
import Foods from './Section/Foods'
import Footer from './Section/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Hero/>
    <Whythisproperty/>
    <Entertainment/>
    <Retail/>
    <Brands/>
    <Foods/>
    <Footer/>
    </>
  )
}

export default App
