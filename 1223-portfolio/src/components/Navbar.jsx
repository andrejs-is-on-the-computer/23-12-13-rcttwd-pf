import React, { useState } from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import Logo from '../assets/logo1.png'
import {Link} from 'react-scroll'

const Navbar = () => {

    const[nav, setNav]  = useState(false);
    const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 
                bg-[#292524]  text-gray-300 border-b-[#44403c] border-b-2
                z-50'>
        <div>
            <img src={Logo} alt="Logo Image" style={{width: '50px'}} />
        </div>

        {/* Menu */}
        <ul className='hidden md:flex justify-center'>
            <li className="text-center hover:bg-pink-600">
            <Link 
                to="home" 
                smooth={true} 
                duration={500}>
                Home
                </Link>
            </li>
            <li className='hover:bg-pink-600'>
            <Link 
                to="about" 
                smooth={true} 
                duration={500}>
                About
                </Link>
            </li>
            <li>
            <Link 
                to="skills" 
                smooth={true} 
                duration={500}>
                Skills
                </Link>
            </li>
            <li>
            <Link 
                to="work" 
                smooth={true} 
                duration={500}>
                Work
                </Link>
            </li>
            <li>
            <Link 
                to="contact" 
                smooth={true} 
                duration={500}>
                Contact
                </Link>
            </li>
        </ul>
        

        {/* Hamburger */}
        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars /> : <FaTimes />}
        </div>

        {/* Mobile Menu */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl'>
            <Link 
                onClick={handleClick}
                to="home" 
                smooth={true} 
                duration={500}>
                Home
                </Link>
            </li>
            <li className='py-6 text-4xl'>
            <Link 
                onClick={handleClick}
                to="skills" 
                smooth={true} 
                duration={500}>
                Skills
                </Link>
            </li>
            <li className='py-6 text-4xl'>
            <Link 
                onClick={handleClick}
                to="skills" 
                smooth={true} 
                duration={500}>
                Skills
                </Link>
            </li>
            <li className='py-6 text-4xl'>
            <Link 
                onClick={handleClick}
                to="work" 
                smooth={true} 
                duration={500}>
                Work
                </Link>
            </li>
            <li className='py-6 text-4xl'>
            <Link 
                onClick={handleClick}
                to="contact" 
                smooth={true} 
                duration={500}>
                Contact
                </Link>
            </li>
        </ul>

        {/* Social Icons */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0a66c2]'>
                    <a className='flex justify-between items-center w-full text-gray-300'
                        href="/">
                        Linkedin <FaLinkedin size={30} />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333]'>
                    <a className='flex justify-between items-center w-full text-gray-300'
                        href="/">
                        Github <FaGithub size={30} />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#bd8e5b]'>
                    <a className='flex justify-between items-center w-full text-gray-300'
                        href="/">
                        Email <HiOutlineMail size={30} />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                    <a className='flex justify-between items-center w-full text-gray-300'
                        href="/">
                        Resume <BsFillPersonLinesFill size={30} />
                    </a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar