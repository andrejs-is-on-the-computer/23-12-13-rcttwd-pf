import React from 'react'
import { projects } from '../constants'
import { git } from '../assets'

const Work = () => {
  return (
    <div name="work" className='w-full md:h-screen text-gray-300 bg-[#292524] text-gray-300'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4'>
            
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
                    Work
                </p>
                <p className='py-6'>
                    // Check out some of my previous projects
                </p>
            </div>
            {/* Container */}

            <div className='mt-20 flex flex-wrap gap-7'>
                {projects.map((project, index) => (
                    <div className="bg-[#67625e] p-5 rounded-2xl sm:w-[360px] w-full">
                        <div className='relative w-full h-[230px]'>
                            <img
                                src={project.image}
                                alt='project_image'
                                className='w-full h-full object-cover rounded-2xl'
                            />

                            <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
                                <div
                                onClick={() => window.open(project.source_code_link, "_blank")}
                                className='bg-[#67625e] w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
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
                                className={`text-[14px] ${tag.color}`}
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