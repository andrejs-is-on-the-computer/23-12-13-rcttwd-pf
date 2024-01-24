import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import {HiArrowNarrowRight} from 'react-icons/hi'
import { Link } from 'react-scroll'
import { aishirt } from '../assets'
import { worldmap } from '../assets'
import map from './WorldMap.svg'

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#44403c]">

        <div className='h-screen w-full inline-flex flex-nowrap absolute overflow-hidden 
                        opacity-20 blur-sm'>
            <div className='h-screen flex items-center justify-center align-middle 
            md:justify-start [&_img]:mx-8 [&_img]:max-w-none animate-infinite-scroll'
            >
                <img className='h-screen' style={{height: '120vh'}} src={worldmap} />
            </div>
            <div className="flex items-center justify-center md:justify-start align-middle 
            [&_img]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
                <img className='h-screen' style={{height: '120vh'}} src={worldmap} />
            </div>
        </div>

        {/* margin: auto;
        position: absolute;
        top: 0; left: 0; bottom: 0; right: 0; */}
            

        {/* <div className='h-full w-full fixed inline-flex flex-nowrap z-0'>
            <img className='object-none z-0' src={worldmap} />
        </div> */}

        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-16 flex flex-col justify-center h-full z-20 relative'>
            {/* <p className='text-pink-600 select-none'>Hi, my name is</p> */}

            <div className='text-center sm:text-left'>
                <h1 className='text-4xl sm:text-7xl font-bold py-1 text-[#ccd6f6] select-none
                            hover:bg-[#00c9af] hover:text-[#1c1917] duration-1000'>
                    Andrejs Bicevskis
                </h1>
                <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0] select-none
                                hover:bg-[#00c9af] hover:text-[#1c1917] duration-1000'>
                    Front End Developer.
                </h2>
            </div>
            
            <p className='text-[#8892b0] py-4 max-w-[700px] select-none'>
                I develop solutions, user interfaces and web applications
            </p>
            <Link
                to="work"
                smooth={true}
                duration={500}
            >
                <div className='flex justify-center items-center'>
                    <button className='group text-white border-2 px-6 py-3 my-2 flex items-center 
                                    hover:bg-[#00c9af] hover:border-[#00c9af] hover:text-[#1c1917] hover:font-bold duration-500'>
                        View Work 
                        &nbsp;
                        <span className='group-hover:rotate-90 duration-500'>
                            <HiArrowNarrowRight className='' />
                        </span>
                    </button>
                </div>
            </Link>
                    {/* Socials */}

            <div className='sm:hidden flex pt-10'>
                <a className='p-2 rounded-lg mr-4 hover:bg-[#0a66c2] hover:scale-110 duration-500'
                    href="https://www.linkedin.com/in/andrei-bicevskis-68253192/" target="_blank" >
                    <FaLinkedin className='text-gray-300' size={30} />
                </a>

                <a className='p-2 rounded-full hover:bg-[#67625e]  hover:scale-110 duration-500'
                    href="https://github.com/andrejs-is-on-the-computer" target="_blank">
                    <FaGithub className='text-gray-300' size={30} />
                </a>
            </div>
        </div>
    </div>
  )
}

export default Home