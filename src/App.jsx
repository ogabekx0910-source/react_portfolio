import React from 'react'

import Navbar from './components/Navbar'
import Header from './components/Header'
import Logos from './components/Logos'
import Design from './components/design'
import LatestWork from './components/LatestWork'
import Testimonial from './components/Testimonial'
import Footer from './components/Footer'

import './index.css'


const App = () => {
  return (
    <div className='font-epilogue w-full bg-gray-800 flex flex-col items-center'>
      <div className='bg-amber-50 w-7xl text-black'>
        <Navbar />
        <Header />
        <Logos />
        <div className='flex justify-around py-11.5'>
          
           {Array.from({ length: 3 }).map((_, index) => (
                    <Design  key={index} />
                ))}
        </div>
        <LatestWork />
        <Testimonial />
        <Footer />
      </div>
    </div>
  )
}

export default App;

