import React from 'react'
import { projects } from '../constants'
import { git } from '../assets'

const Work = () => {
  return (
    <div name="work" className="min-h-screen w-full bg-[#292524] text-gray-300 py-20 sm:px-10 mx-auto">
        {/* Container */}
        <div className='mx-auto p-4 flex flex-col w-full h-full justify-center items-center'>
            
            <div className='max-w-[1000px]'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
                    Work
                </p>
                <p className='pt-6'>
                    // Check out some of my previous projects
                </p>
            </div>
            {/* Container */}
            {/* <div className='mt-10 grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-2 gap-4'></div> */}
            <div className='mt-10 flex flex-wrap justify-center gap-4'>
                {projects.map((project) => (
                    <div className="bg-[#44403c] shadow-lg p-5 rounded-2xl max-w-[462px] 
                                     hover:bg-[#514538] hover:shadow-[#56423c] duration-500
                                     transition ease-in-out hover:-translate-y-1 hover:scale-105">
                        <div className='relative w-full h-[230px]'>
                            <img
                                src={project.image}
                                alt='project_image'
                                className='w-full h-full object-cover rounded-2xl'
                            />

                            <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
                                <div
                                onClick={() => window.open(project.live_web_link, "_blank")}
                                className='mx-1 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer
                                        bg-[#00aa94] hover:bg-[#d3fbd8] duration-500'
                                >
                                <img
                                    src={project.webicon}
                                    alt='live project link'
                                    className='w-1/2 h-1/2 object-contain'
                                />
                                </div>
                                <div
                                onClick={() => window.open(project.source_code_link, "_blank")}
                                className='w-10 h-10 rounded-full flex justify-center items-center cursor-pointer
                                        bg-[#67625e] hover:bg-[#b2ada8] duration-500'
                                >
                                <img
                                    src={git}
                                    alt='source code'
                                    className='w-1/2 h-1/2 object-contain'
                                />
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

            {/* <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

                
                <div 
                    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                    style={{backgroundImage: `url(${aiShirt})`}} 
                >

                    
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
            </div> */}
            
        </div>
    </div>
  )
}

export default Work