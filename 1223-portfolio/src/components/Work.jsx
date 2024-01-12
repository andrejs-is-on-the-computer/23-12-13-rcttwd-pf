import React from 'react'

import aiShirt from '../assets/projects/aitshirt_square.png'
import video from '../assets/projects/metoobe-square.png'

const Work = () => {
  return (
    <div name="work" className='w-full md:h-screen text-gray-300 bg-[#292524] text-gray-300'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
                    Work
                </p>
                <p className='py-6'>
                    // Check out some of my previous projects
                </p>
            </div>
            {/* Container */}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

                {/* Grid Item */}
                <div 
                    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                    style={{backgroundImage: `url(${aiShirt})`}} 
                >

                    {/* Hover effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            React JS Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://teal-bublanina-352d32.netlify.app" target="_blank">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/andrejs-is-on-the-computer/AI-tshirt-designer--react-3js" target="_blank">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div 
                    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                    style={{backgroundImage: `url(${video})`}} 
                >

                    {/* Hover effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            React JS Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://celadon-dragon-007068.netlify.app/" target="_blank">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/andrejs-is-on-the-computer/youtube-clone/tree/main" target="_blank">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>

                        
                    </div>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Work