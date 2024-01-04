import {AiFillGithub} from 'react-icons/ai';
import {FaLinkedinIn, FaInstagram} from 'react-icons/fa';
import {FiTwitter} from 'react-icons/fi';
import img from '../assets/IMG_30.jpg'

const About = () => {
    
  return (
      <div id='about' className='lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg:text-start flex lg:flex-row flex-col justify-between lg:gap-28 items-center'>
        <img data-aos="fade-down" src={img} width={290} height={290} className='rounded border-2 p-1 border-fuchsia-500 img_glow' alt=''/>
        <div className='h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white'>
            <h1 data-aos="fade-right" className='text-[52px] font-semibold mb-8 leading-normal uppercase text-fuchsia-500'>About Me</h1>
            <p data-aos="fade-left">I’m a student at Samriddhi College pursuing a BCA program. I have knowledge of frontend development using HTML, CSS, JavaScript and react. I have a keen interest in web development and aspire to work on innovative projects in the future. I’m also a fast learner who can adapt to new technologies and challenges.</p>
            <div className='flex mt-8 gap-2'>
                <div className='flex items-center justify-center'>
                    <div className='flex space-x-2'>
                        <button className='neno-button shadow-xl hover:shadow-fuchsia-800/50 text-white border-2 hover:bg-fuchsia-800 border-fuchsia-800 rounded-lg py-4 px-8 uppercase relative overflow-hidden'>Resume</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About