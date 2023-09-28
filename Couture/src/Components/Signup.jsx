import React from 'react'
import { inscription } from '../assets'
import { Link } from 'react-router-dom'
import { logo } from '../assets'
import { portrait } from '../assets'
const Signup = () => {
  return (
    <div className='bg-white w-full flex flex-col flex-row md:flex-row justify-center items-center' >

      <div className='md:w-1/2 bg-white pr-4'>
        <img src={inscription} alt='portrait' className='max-w-full h-auto md:h-screen '/>
      </div>
      <div className='bg-white w-full md:w-1/2 p-4 flex flex-col justify-center items-center md:h-[400px] shadow-xl shadow-green-200 md:py-[20px]'>
      <Link to='/'><img src={logo} className='h-[25px] cursor-pointer mb-2' /></Link>
      <h1 className='text-2xl font-bold mb-4 text-black text-center border-b-[2px] py-2 mb-5 w-full md:w-1/2 mx-[80px]'> Register </h1>
      <form className='flex flex-col gap-4 md:w-1/2'>
          <input
            type='text'
            placeholder='Entrez votre nom'
            className=' text-center p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300'
          />
          <input
            type='text'
            placeholder="Entrez identifiant de l'élèves  "
            className='p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300'
          />
            <input
            type='password'
            placeholder="votre mot de passe  "
            className=' text-center p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300'
          />
          <button className='bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300'>
            Valider
          </button>
        </form>

      </div>
    </div>
  )
}

export default Signup
