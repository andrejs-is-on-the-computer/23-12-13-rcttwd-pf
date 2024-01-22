import React, { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import {Link} from 'react-scroll';
import { ab_sm } from '../assets';

const Navbar = () => {

    const[nav, setNav]  = useState(false);
    const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[60px] sm:h-[80px] flex justify-between items-center px-2 sm:px-4 
                bg-[#292524]  text-gray-300 border-b-[#44403c] border-b-2
                z-50'>
        <div 
            onClick={() => window.open("https://www.linkedin.com/in/andrei-bicevskis-68253192/", "_blank")}
            className='rounded-full p-1 cursor-pointer select-none text-xl font-black
                     group bg-[#375e63] hover:bg-[#00c9af] duration-500'
        >
            <img src={ab_sm} alt="Logo Image" style={{width: '45px'}} className='rounded-full group-hover:bg-[#d3fbd8] duration-500' />
            {/* AB */}
        </div>

        {/* Menu */}
        <ul className='hidden sm:flex h-full'>
            <Link 
                to="home" 
                smooth={true} 
                duration={500}
                className="py-[24px] w-[90px] cursor-pointer h-full text-center
                        hover:bg-[#00c9af] hover:text-black duration-500">
                    <li>
                        Home
                    </li>
            </Link>
            
            <Link 
                to="about" 
                smooth={true} 
                duration={500}
                className="py-[24px] w-[90px] cursor-pointer h-full text-center
                        hover:bg-[#00c9af] hover:text-black duration-500">
                    <li>
                        About
                    </li>
            </Link>

            <Link 
                to="skills" 
                smooth={true} 
                duration={500}
                className="py-[24px] w-[90px] cursor-pointer h-full text-center
                        hover:bg-[#00c9af] hover:text-black duration-500">
                    <li>
                        Skills
                    </li>
            </Link>

            <Link 
                to="work" 
                smooth={true} 
                duration={500}
                className="py-[24px] w-[90px] cursor-pointer h-full text-center
                        hover:bg-[#00c9af] hover:text-black duration-500">
                    <li>
                        Work
                    </li>
            </Link>

            <Link 
                to="contact" 
                smooth={true} 
                duration={500}
                className="py-[24px] w-[90px] cursor-pointer h-full text-center
                        hover:bg-[#00c9af] hover:text-black duration-500">
                    <li>
                        Contact
                    </li>
            </Link>
        </ul>
        

        {/* Hamburger */}
        <div onClick={handleClick} className='sm:hidden z-10 bg-[#59564c] p-3 rounded-md'>
            {!nav ? <FaBars /> : <FaTimes />}
        </div>

        {/* Mobile Menu */}

        
        <ul className={!nav ? 'hidden opacity-0 w-0' : 
            `absolute top-[58px] right-0 flex flex-col justify-center items-center rounded-bl-lg w-40 bg-[#67625e]`}>
            <Link 
                onClick={handleClick}
                to="home" 
                smooth={true} 
                duration={500}
                className='py-4 w-full cursor-pointer border-b-[1px] border-[#44403c]'
            >
                <li>
                    Home
                </li>
                
            </Link>

            <Link 
                onClick={handleClick}
                to="about" 
                smooth={true} 
                duration={500}
                className='py-4 w-full cursor-pointer border-b-[1px] border-[#44403c]'
            >
                <li>
                    About
                </li>
                
            </Link>

            <Link 
                onClick={handleClick}
                to="skills" 
                smooth={true} 
                duration={500}
                className='py-4 w-full cursor-pointer border-b-[1px] border-[#44403c]'
            >
                <li>
                    Skills
                </li>
                
            </Link>

            <Link 
                onClick={handleClick}
                to="work" 
                smooth={true} 
                duration={500}
                className='py-4 w-full cursor-pointer border-b-[1px] border-[#44403c]'
            >
                <li>
                    Work
                </li>
                
            </Link>

            <Link 
                onClick={handleClick}
                to="contact" 
                smooth={true} 
                duration={500}
                className='py-4 w-full cursor-pointer'
            >
                <li>
                    Contact
                </li>
                
            </Link>
        </ul>

        {/* Social Icons */}
        <div className='hidden sm:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0a66c2]'>
                    <a className='flex justify-between items-center w-full text-gray-300'
                        href="https://www.linkedin.com/in/andrei-bicevskis-68253192/" target="_blank" >
                        Linkedin <FaLinkedin size={30} />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333]'>
                    <a className='flex justify-between items-center w-full text-gray-300'
                        href="https://github.com/andrejs-is-on-the-computer" target="_blank">
                        Github <FaGithub size={30} />
                    </a>
                </li>
                <Link
                    to="contact" 
                    smooth={true} 
                    duration={500}>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#2d9b8c]'>
                        <a className='flex justify-between items-center w-full text-gray-200'>
                            Email <HiOutlineMail size={30} />
                        </a>
                    </li>
                </Link>
                
            </ul>
        </div>
    </div>
  )
}

{/* <Link 
                to="contact" 
                smooth={true} 
                duration={500}
                className="py-[24px] w-[90px] cursor-pointer h-full text-center
                        hover:bg-[#00c9af] hover:text-black duration-500">
                    <li>
                        Contact
                    </li>
            </Link> */}

export default Navbar