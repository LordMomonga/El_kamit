import React from 'react'
import { enf } from '../assets'
import { enfant } from '../assets'
const Hero = () => {
  return (
    <div className='w-full bg-white py-10 md:py-24'>
        <div className='max-w-[1080px] md:max-w-[1480px] m-auto text-black flex justify-between'>
            <div className=' shadow-xl md:shadow-md  shadow-gray-300 rounded px-5 py-8'>
                <p className=' text-xl md:text-2xl text-[#20B486] font-medium py-3 border-b '> Discover, Learn, and Grow Together</p>
                <h1 className=' text-3xl md:text-5xl font-semibold mt-3 '> Building <span className='text-[#20B486]'>Bridges</span> to <p className='mt-3'>Knowledge, Lifelong </p>  <p className='mt-3'> <span className='text-[#20B486]'> Adventures</span>  Begin.</p> </h1>
                <p className='mt-3 text-gray-500 text-[10px] md:text-lg'>Discover the difference at ElKamit, where quality education and character-building unite to shape confident,<br/> well-rounded individuals.</p>
                <img src={enfant} className=' absolute h-[200px]  md:h-[180px] mt-5 '/>
                
            </div>
            <img src={enf} className='h-[100px]  md:h-[180px] hidden md:flex'/>
            
            
        </div>

      
    </div>
  )
}

export default Hero
