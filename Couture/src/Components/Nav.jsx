import React from 'react'
import { logo } from '../assets'
import { off } from '../assets'
import { menu } from '../assets'
import { useState } from 'react'
import { close } from '../assets' 
import { Link } from 'react-router-dom'
const Nav = () => {
    const [showmenu, setShowMenu] = useState(false)
  return (
    <div className='bg-white w-full h-[80px] border-b'>
        <div className='max-w-[400px] md:max-w-[1490px]  w-full h-full m-auto flex justify-between items-center'>
        <img src={logo} className=' h-[31px] md:h-[40px]'/> 
        <div className='hidden md:flex items-center text-black'>
            <ul className='flex gap-[30px] font-semibold'>
                <li >Home</li>
                <li>About</li>
                <li>Support</li>
            </ul> 
        </div>
        <div className=' hidden md:flex gap-5'>
            
            
          <Link to='/Sign'>  <button className='hover:bg-green-500 hover:text-white rounded t p-1 px-4 flex items-center text-[14px] justify-between gap-2 bg-transparent text-black font-bold shadow-sm shadow-gray-500'>
                <img src={off} className='h-[23px] ' />
                Login</button></Link>  
              <Link to='/Signup'><button className='bg-green-500 hover:bg-transparent hover:text-black rounded text-white p-1 px-4 font-bold text-[14px] shadow-sm shadow-gray-500' >sign-up for free </button></Link>  
        </div>
         <div className='text-black md:hidden' onClick={() => setShowMenu(!showmenu)}>
            <img src={ showmenu ? close : menu}  className={`filter black `} />
           
         </div>

        </div>
        <div className={` ${showmenu ? 'absolute z-10 px-8 py-2 bg-white rounded text-black font-semibold text-[14px] w-full md:hidden ' : 'hidden'} `}>
            <ul>
            <li className='p-4 hover:bg-gray-100 rounded'>Home</li>
            <li className='p-4 hover:bg-gray-100 rounded'>About</li>
             <li className='p-4 hover:bg-gray-100 rounded'>Support</li>
            <div className='flex flex-col my-4 gap-4'>
           <Link to='/Sign' className='bg-green-500 rounded t p-1 px-4 flex items-center text-[14px] justify-center gap-2 bg-transparent text-black font-bold shadow-sm shadow-gray-500'>
                <img src={off} className='h-[23px] ' />
                Login</Link>
            
           <Link to='/Signup' className=' text-center bg-green-500 rounded text-white p-1 px-4 font-bold text-[14px] shadow-sm shadow-gray-500' >sign-up for free </Link> 

            </div>
           
            </ul>
         </div>
       
      
    </div>
  )
}

export default Nav
