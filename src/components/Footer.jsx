import React from 'react'
import { FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='bg-slate-800 text-white lg:px-4 py-20'>
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4'>
        <div className='mb-4 md:mb-0'>
          <span className='text-3xl font-semibold text-fuchsia-800 py-2 uppercase'>Logo</span>
          <p className='text-[16px] my-4'>I’m a student at Samriddhi College pursuing a BCA program. I have knowledge of frontend development using HTML, CSS, JavaScript and react.</p>
        </div>
        <div>
          <h2 className='text-[22px] font-semibold text-fuchsia-800 py-2 uppercase'>Services</h2>
          <ul className='text-[16px] my-4'>
            <li className='my-2'>Web Design</li>
            <li className='my-2'>Web Development</li>
            <li className='my-2'>SEO</li>
            <li className='my-2'>E-Commerce</li>
          </ul>
        </div>
        <div className='mb-4 md:mb-0'>
          <h2 className='text-[22px] font-semibold text-fuchsia-800 py-2 uppercase'>Contact</h2>
          <p className='text-[16px] my-4'>Email: ghimireprashanna11@gmail.com</p>
          <p className='text-[16px] my-4'>9863781422</p>
        </div>
        <div>
        <h2 className='text-[22px] font-semibold text-fuchsia-800 py-2 uppercase'>follow me</h2>
        <div className='flex space-x-4'>
          <a href="" className='text-white hover:text-fuchsia-800 transition-all duration-150 ease-in-out'>
            <FaGithub />
          </a>
          <a href="" className='text-white hover:text-fuchsia-800 transition-all duration-150 ease-in-out'>
            <FaLinkedinIn />
          </a>
          <a href="" className='text-white hover:text-fuchsia-800 transition-all duration-150 ease-in-out'>
            <FaTwitter />
          </a>
          <a href="" className='text-white hover:text-fuchsia-800 transition-all duration-150 ease-in-out'>
            <FaInstagram />
          </a>
          
        </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer