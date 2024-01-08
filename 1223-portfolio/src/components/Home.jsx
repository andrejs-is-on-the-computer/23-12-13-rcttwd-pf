import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name="home" className='w-full h-screen bg-[#44403c]'>
        
        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-12 ml-10 flex flex-col justify-center h-full'>
            <p className='text-pink-600 select-none'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold py-1 text-[#ccd6f6] select-none
                         hover:bg-pink-600 hover:text-[#1c1917] duration-1000'>
                Andrejs Bicevskis
            </h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0] select-none
                            hover:bg-pink-600 hover:text-[#1c1917] duration-1000'>
                Front End Developer.
            </h2>
            <p className='text-[#8892b0] py-4 max-w-[700px] select-none'>
                I'm a front-end developer...
            </p>
            <div>
                <button className='group text-white border-2 px-6 py-3 my-2 flex items-center 
                                   hover:bg-pink-600 hover:border-pink-600 hover:font-bold duration-300'>
                    View Work 
                    <span className='group-hover:rotate-90 duration-300'>
                        <HiArrowNarrowRight className='ml-3' />
                    </span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Home