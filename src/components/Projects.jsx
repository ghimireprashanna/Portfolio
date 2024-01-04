import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'
import img4 from '../assets/img4.jpg'

const Projects = () => {
  return (
    <div id='projects' className='p-20 flex flex-col items-center justify-center'>
      <h1 data-aos="fade-right" className='text-[52px] font-semibold mb-20 leading-normal uppercase text-fuchsia-500'>Projects</h1>
      <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-around gap-10'>
        <img height={350} width={250} data-aos="fade-up" className=' text-[26px] flex items-center justify-center rounded-3xl h-32 w-46 p-1 border-2 border-fuchsia-800 b_glow' src={img1} alt=''/>
        <img height={350} width={250} data-aos="fade-down" className=' text-[26px] flex items-center justify-center rounded-3xl h-32 w-46  p-1 border-2 border-fuchsia-800 b_glow' src={img2} alt=''/>
        <img height={350} width={250} data-aos="fade-up" className=' text-[26px] flex items-center justify-center rounded-3xl h-32 w-46 p-1 border-2 border-fuchsia-800 b_glow' src={img3} alt=''/>
        <img height={350} width={250} data-aos="fade-down" className=' text-[26px] flex items-center justify-center rounded-3xl h-32 w-46 p-1 border-2 border-fuchsia-800 b_glow' src={img4} alt=''/>
      </div>
    </div>
  )
}

export default Projects