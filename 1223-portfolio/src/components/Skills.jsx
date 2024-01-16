import React from 'react'

import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import JavaScript from '../assets/javascript.png'
import ReactImg from '../assets/react.png'
import Node from '../assets/node.png'
import GitHub from '../assets/github.png'
import Tailwind from '../assets/tailwind.png'
// import Mongo from '../assets/mongo.png'
// import FireBase from '../assets/firebase.png'
// import AWS from '../assets/aws.png'

const Skills = () => {
  return (
    // Padding X on small screens
    <div name="skills" className='w-full h-screen bg-[#44403c] text-gray-300 sm:px-20'>
      {/* Conatiner */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full overflow-x-hidden'>

        <div>
          <p className='text-4xl font-bold inline border-b-4  border-pink-600'>Skills</p>
          <p className='py-4'>// These are some of the technologies I've worked with</p>
        </div>

        <div className='stage-cube-cont flex my-40 select-none'>
          <div className='cubespinner'>
              <div className='face1'>
                <div className='bg-[#e79c25] relative flex h-[10px] w-screen items-center justify-center 
                                hover:bg-[#e79c25] duration-1000'>
                  <img className='z-10 w-20 mx-auto opacity-100' src={HTML} alt="HTML icon" />
                </div>
              </div>

              <div className='face2'>
                <div className='bg-[#e79c25] relative flex h-[10px] w-screen items-center justify-center 
                                hover:bg-[#e79c25] duration-1000'>
                  <img className='z-10 w-20 mx-auto opacity-100' src={CSS} alt="HTML icon" />
                </div>
              </div>

              <div className='face3'>
                <div className='bg-[#e79c25] relative flex h-[10px] w-screen items-center justify-center 
                                hover:bg-[#e79c25] duration-1000'>
                  <img className='z-10 w-20 mx-auto opacity-100' src={JavaScript} alt="HTML icon" />
                </div>
              </div>

              <div className='face4'>
                <div className='bg-[#e79c25] relative flex h-[10px] w-screen items-center justify-center 
                                hover:bg-[#e79c25] duration-1000'>
                  <img className='z-10 w-20 mx-auto opacity-100' src={ReactImg} alt="HTML icon" /> 
                </div>
              </div>

              <div className='face5'>
                <div className='bg-[#e79c25] relative flex h-[10px] w-screen items-center justify-center 
                                hover:bg-[#e79c25] duration-1000'>
                  <img className='z-10 w-20 mx-auto opacity-100' src={Node} alt="HTML icon" />
                </div>
              </div>

              <div className='face6'>
                <div className='bg-[#e79c25] relative flex h-[10px] w-screen items-center justify-center 
                                hover:bg-[#e79c25] duration-1000'>
                  <img className='z-10 w-20 mx-auto opacity-100' src={Tailwind} alt="HTML icon" />
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills