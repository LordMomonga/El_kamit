import React from 'react'
import { de } from '../assets'
import { classroom } from '../assets'
import { innovation } from '../assets'
import { problem } from '../assets'
const Confession = () => {
  return (
    <div className='w-full bg-white py-[50px]'>
        <div className='md:max-w-[1480px] m-auto max-w-[600px] md:mt-[10px] mt-[90px]'>
            <h1 className='text-center text-xl md:text-3xl font-bold text-[#536E96] border-b py-5'>Welcome to Elkamit Primary School</h1>

        </div>
        <div className='flex justify-between'>
        <img src={de} className='h-[50px]'/>
        <img src={de} className='h-[50px]'/>
        </div>
        <div className='px-[150px]  block md:flex gap-5'>
        <div className=' flex-col flex   items-center justify-center gap-5'>
            <img src={classroom} className=' md:h-[280px] mt-10' />
            <span className='text-blue-500 font-semibold text-[13px] md:text-[15px] mt-5 border-b shadow p-2 rounded-full'>Our Vision</span>
            <p className= ' w-[320px] md:w-[500px] p-2 shadow-xl rounded text-gray-500 px-4 leading-loose text-[12px] md:text-md'> <span className='font-bold text-green-600 text-[20px]'>Elkamit</span> Primary School is more than an academic institution; it's a hub of inspiration. Our vision is to cultivate compassionate global citizens who are confident in their abilities, compassionate in their interactions, and courageous in their pursuit of knowledge. We strive to nurture not only academically successful individuals but also empathetic individuals who contribute positively to society.</p>
        </div>
        <div className=' flex-col flex   items-center justify-center gap-5 '>
            <img src={innovation} className=' md:h-[280px] mt-10' />
            <span className=' text-center text-blue-500 font-semibold text-[13px] md:text-[15px] mt-5 border-b shadow p-2 rounded-full'>A Beacon of innovation</span>
            <p className= ' w-[320px] md:w-[500px] p-2 shadow-xl rounded text-gray-500 px-4 leading-loose text-[12px] md:text-md'> <span className='font-bold text-green-600 text-[20px]'>Elkamit</span> isn't content with traditional norms; we're pioneering innovation in education. We're the school that doesn't just keep up with the times; we set the pace. With a commitment to embracing technology and modern pedagogical approaches, we ensure our students are equipped with the skills they need to thrive in a rapidly evolving world.</p>
        </div>
        <div className=' flex-col flex   items-center justify-center gap-5'>
            <img src={problem} className=' md:h-[280px] mt-10' />
            <span className='text-blue-500 font-semibold text-[13px] text-center md:text-[15px] mt-5 border-b shadow p-2 rounded-full'>Elevating Education</span>
            <p className= ' w-[320px] md:w-[500px] p-2 shadow-xl rounded text-gray-500 px-4 leading-loose text-[12px] md:text-md'>At  <span className='font-bold text-green-600 text-[20px]'>Elkamit</span>, education is an art form, carefully crafted by dedicated educators who are not just teachers but also mentors. Our courses are meticulously designed to nurture intellectual growth while fostering essential life skills. We believe in empowering students to think critically, collaborate effectively, and approach challenges with resilience. Each classroom is a dynamic space where dialogue, exploration, and creativity flourish.</p>
        </div>

        </div>
       
        
      
    </div>
  )
}

export default Confession
