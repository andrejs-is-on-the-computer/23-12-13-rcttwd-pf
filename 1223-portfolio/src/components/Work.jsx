import React from 'react'
import { projects } from '../constants'
import { git } from '../assets'
import { FaGlobe, FaGithub } from "react-icons/fa"

const Work = () => {
  return (
    <div name="work" className="min-h-screen w-full bg-[#292524] text-gray-300 py-20 sm:px-10 mx-auto">
        {/* Container */}
        <div className='mx-auto p-4 flex flex-col w-full h-full justify-center items-center'>
            
            <div className='max-w-[1000px]'>
                <p className='text-4xl font-bold inline border-b-4 border-[#00c9af]'>
                    Work
                </p>
                <p className='pt-6'>
                    // Check out some of my previous projects
                </p>
            </div>
            {/* Container */}
            <div className='mt-10 flex flex-wrap justify-center gap-4'>
                {projects.map((project, index) => (
                    <div className="bg-[#44403c] shadow-lg p-5 rounded-2xl max-w-[462px] cursor-pointer
                                     hover:bg-[#514538] hover:shadow-[#56423c] duration-500
                                     transition ease-in-out hover:-translate-y-1 hover:scale-105"
                        onClick={() => window.open(project.source_code_link, "_blank")}
                        index={project.name}
                        >
                        <div className='relative w-full h-[230px]'>
                            <img
                                src={project.image}
                                alt='project_image'
                                className='w-full h-full object-cover rounded-2xl'
                            />

                            <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
                                <div
                                onClick={() => window.open(project.live_web_link, "_blank")}
                                className='mx-2 w-9 h-9 rounded-full flex justify-center items-center cursor-pointer
                                        group bg-[#4b7160] hover:bg-[#d3fbd8] duration-500'
                                >
                                {/* <img
                                    src={project.webicon}
                                    alt='live project link'
                                    className='h-7 object-contain'
                                /> */}
                                <FaGlobe 
                                    className='text-[#00ac94] group-hover:text-[#005b4a] duration-500' 
                                    size={28} />
                                </div>
                                <div
                                onClick={() => window.open(project.source_code_link, "_blank")}
                                className='w-9 h-9 rounded-full flex justify-center items-center cursor-pointer
                                        group bg-[#67625e] hover:bg-[#b2ada8] duration-500'
                                >
                                {/* <img
                                    src={git}
                                    alt='source code'
                                    className='w-1/2 h-1/2 object-contain'
                                /> */}
                                <FaGithub 
                                    className='text-gray-300 group-hover:text-[#44403c] duration-500' 
                                    size={28} />
                                </div>
                            </div>
                            </div>

                            <div className='mt-5'>
                            <h3 className='text-white font-bold text-[24px]'>{project.name}</h3>
                            <p className='mt-2 text-secondary text-[14px]'>{project.description}</p>
                            </div>

                            <div className='mt-4 flex flex-wrap gap-2'>
                            {project.tags.map((tag) => (
                                <p
                                key={`${tag.name}`}
                                className={`text-[14px] ${tag.color} italic`}
                                >
                                #{tag.name}
                                </p>
                            ))}
                            </div>
                    </div>
                ))}
            </div>         
        </div>
    </div>
  )
}

export default Work