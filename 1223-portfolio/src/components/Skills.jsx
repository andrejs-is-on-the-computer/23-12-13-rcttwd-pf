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
    <div name="skills" className='w-full h-screen bg-[#44403c] text-gray-300 px-20'>
      {/* Conatiner */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>

        <div>
          <p className='text-4xl font-bold inline border-b-4  border-pink-600'>Skills</p>
          <p className='py-4'>// These are some of the technologies I've worked with</p>
        </div>

        <div className='stage-cube-cont mt-10'>
                    <div className='cubespinner'>
                        <div className='face1'>
                          <div className='bg-[#e79c25] relative flex h-[10px] w-screen items-center justify-center before:absolute before:h-[110px] before:w-[110px] before:rounded-full before:bg-[#e79c25] before:bg-opacity-50'>
                            <img className='z-10 w-20 mx-auto opacity-100' src={HTML} alt="HTML icon" />
                          </div>
                        </div>

                        <div className='face2'>
                          <div className='bg-[#e79c25] relative flex h-[10px] w-screen items-center justify-center before:absolute before:h-[110px] before:w-[110px] before:rounded-full before:bg-[#e79c25] before:bg-opacity-50'>
                            <img className='z-10 w-20 mx-auto opacity-100' src={CSS} alt="HTML icon" />
                          </div>
                        </div>

                        <div className='face3'>
                          <div className='bg-[#e79c25] relative flex h-[10px] w-screen items-center justify-center before:absolute before:h-[110px] before:w-[110px] before:rounded-full before:bg-[#e79c25] before:bg-opacity-50'>
                            <img className='z-10 w-20 mx-auto opacity-100' src={JavaScript} alt="HTML icon" />
                          </div>
                        </div>

                        <div className='face4'>
                          <div className='bg-[#e79c25] relative flex h-[10px] w-screen items-center justify-center before:absolute before:h-[110px] before:w-[110px] before:rounded-full before:bg-[#e79c25] before:bg-opacity-50'>
                            <img className='z-10 w-20 mx-auto opacity-100' src={ReactImg} alt="HTML icon" /> 
                          </div>
                        </div>

                        <div className='face5'>
                          <div className='bg-[#e79c25] relative flex h-[10px] w-screen items-center justify-center before:absolute before:h-[110px] before:w-[110px] before:rounded-full before:bg-[#e79c25] before:bg-opacity-50'>
                            <img className='z-10 w-20 mx-auto opacity-100' src={Node} alt="HTML icon" />
                          </div>
                        </div>

                        <div className='face6'>
                          <div className='bg-[#e79c25] relative flex h-[10px] w-screen items-center justify-center before:absolute before:h-[110px] before:w-[110px] before:rounded-full before:bg-[#e79c25] before:bg-opacity-50'>
                            <img className='z-10 w-20 mx-auto opacity-100' src={Tailwind} alt="HTML icon" />
                          </div>
                        </div>
                    </div>
                </div>

        {/* <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8 px-10'>

          <div className='py-4 bg-[#59564C] shadow-md shadow-[#040c16] 
                          hover:scale-110 hover:bg-[#6A6D5E] duration-500'>
            <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
            <p className='mt-4'>HTML</p>
          </div>

          <div className='py-4 bg-[#59564C] shadow-md shadow-[#040c16] 
                          hover:scale-110 hover:bg-[#6A6D5E] duration-500'>
            <img className='w-20 mx-auto' src={CSS} alt="CSS icon" />
            <p className='mt-4'>CSS</p>
          </div>

          <div className='py-4 bg-[#59564C] shadow-md shadow-[#040c16] 
                          hover:scale-110 hover:bg-[#6A6D5E] duration-500'>
            <img className='w-20 mx-auto' src={JavaScript} alt="JavaScript icon" />
            <p className='mt-4'>JavaScript</p>
          </div>

          <div className='py-4 bg-[#59564C] shadow-md shadow-[#040c16] 
                          hover:scale-110 hover:bg-[#6A6D5E] duration-500'>
            <img className='w-20 mx-auto' src={ReactImg} alt="React icon" />
            <p className='mt-4'>React</p>
          </div>

          <div className='py-4 bg-[#59564C] shadow-md shadow-[#040c16] 
                          hover:scale-110 hover:bg-[#6A6D5E] duration-500'>
            <img className='w-20 mx-auto' src={Node} alt="Node icon" />
            <p className='mt-4'>Node</p>
          </div>

          <div className='py-4 bg-[#59564C] shadow-md shadow-[#040c16] 
                          hover:scale-110 hover:bg-[#6A6D5E] duration-500'>
            <img className='w-20 mx-auto' src={Tailwind} alt="Tailwind icon" />
            <p className='mt-4'>Tailwind</p>
          </div>

        </div> */}

      </div>
    </div>
  )
}

export default Skills