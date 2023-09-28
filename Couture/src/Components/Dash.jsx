import React from 'react'
import { logo } from '../assets'
import { portrait } from '../assets'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'


const Dash = () => {
  const [userData, setUserData] = useState({});
  const [error, setError] = useState(null);
  const [token, setToken] = useState('');

  useEffect(() => {
    
      const lotoken = localStorage.getItem('token');

      if(lotoken){
       axios.get('http://localhost:5000/protected', {
        headers: { Authorization: `Bearer ${lotoken}`},
       }).then(response => {
       
        setUserData(response.data)
        console.log("j'ai rien trouv", userData.name);
       })
          
        .catch (error=>
          console.error('Erreur lors du décodage du jeton :', error)
          
        )}
      
      
   
      

   

   /* if(storedToken) {
      setToken(storedToken)
   
      const headers = { Authorization: `Bearer ${storedToken}` };
      axios.get('http://localhost:5000/protected', {storedToken}
    
      )
      .then((response) => {
        console.log('voila une autre erreur ');
        setUserData(response.data);
      })
      .catch((error) => {
        setError('Accès refusé. Veuillez vous connecter.');
        console.log('erreur de code', error);
      });

    }*/
    // Effectuez une requête sécurisée pour récupérer les données de l'utilisateur
   
  }, []);

  return (
    <div class="bg-white  w-full " >
    <aside
      class="  fixed top-0 z-10 ml-[-100%] flex h-screen w-full flex-col justify-between border-r bg-white px-6 pb-3 transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%] "
    >
      <div>
        <div class="-mx-6 px-6 py-4 border-b">
          <a href="#" title="home">
            <img src={logo} class="w-32" alt="el-kamit" />
          </a>
        </div>

        <div class="mt-8 text-center">
          <img
            src={portrait}
            alt=""
            class="m-auto h-10 w-10 rounded-full object-cover lg:h-28 lg:w-28"
          />
         <h5 class="mt-4 hidden text-xl font-semibold text-gray-600 lg:block ">{!userData ? 'Kamisi j. Pierre' : userData.name}</h5>
         
          <span class="hidden text-gray-600 lg:block">{userData.status}</span>
        </div>

        <ul class="mt-8 space-y-2 tracking-wide">
          <li>
            <a
              href="#"
              aria-label="dashboard"
              class="relative flex items-center space-x-4 rounded-xl bg-gradient-to-r from-sky-600 to-cyan-400 px-4 py-3 text-white"
            >
              <svg class="-ml-1 h-6 w-6" viewBox="0 0 24 24" fill="none">
                <path
                  d="M6 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8ZM6 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-1Z"
                  class="dark:fill-slate-600 fill-current text-cyan-400"
                ></path>
                <path
                  d="M13 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2V8Z"
                  class="fill-current text-cyan-200 group-hover:text-cyan-300"
                ></path>
                <path
                  d="M13 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-1Z"
                  class="fill-current group-hover:text-sky-300"
                ></path>
              </svg>
              <span class="-mr-1 font-medium text-[14px]">Dashboard</span>
            </a>
          </li>
          <li>
            <span className='text-[12px] font-bold '>Data</span>
          </li>
          <li className={`${userData.status !== 'Administateur' ? '' : 'hidden'}`}>
            <a
              href="#"
              class="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600 "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  class="fill-current text-gray-300 group-hover:text-cyan-300"
                  fill-rule="evenodd"
                  d="M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z"
                  clip-rule="evenodd"
                />
                <path
                  class="fill-current text-gray-600 group-hover:text-cyan-600 dark:group-hover:text-sky-400"
                  d="M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z"
                />
              </svg>
              <Link to="/Menu" class="group-hover:text-gray-700 text-[14px]">Categories</Link>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600 "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  class="fill-current text-gray-300 group-hover:text-cyan-300"
                  fill-rule="evenodd"
                  d="M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z"
                  clip-rule="evenodd"
                />
                <path
                  class="fill-current text-gray-600 group-hover:text-cyan-600 dark:group-hover:text-sky-400"
                  d="M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z"
                />
              </svg>
              <Link to="/evaluation"class="group-hover:text-gray-700 text-[14px]">Évaluation</Link>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600 "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  class="fill-current text-gray-600 group-hover:text-cyan-600 dark:group-hover:text-sky-400"
                  fill-rule="evenodd"
                  d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
                  clip-rule="evenodd"
                />
                <path
                  class="fill-current text-gray-300 group-hover:text-cyan-300"
                  d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"
                />
              </svg>
              <Link to='/Bulletin'><span class="group-hover:text-gray-700 text-[14px] ">Reports</span></Link>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600 dark:text-gray-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  class="fill-current text-gray-600 group-hover:text-cyan-600 dark:group-hover:text-cyan-400"
                  d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"
                />
                <path
                  class="fill-current text-gray-300 group-hover:text-cyan-300"
                  d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"
                />
              </svg>
              <span class="group-hover:text-gray-700  text-gray-600 text-[14px] ">Other data</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600 dark:text-gray-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  class="fill-current text-gray-600 group-hover:text-cyan-600 dark:group-hover:text-cyan-400"
                  d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"
                />
                <path
                  class="fill-current text-gray-300 group-hover:text-cyan-300"
                  d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"
                />
              </svg>
              <Link  to="/User" class="group-hover:text-gray-700  text-gray-600 text-[14px] ">Add Users</Link>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600 "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  class="fill-current text-gray-300 group-hover:text-cyan-300"
                  d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"
                />
                <path
                  class="fill-current text-gray-600 group-hover:text-cyan-600 dark:group-hover:text-sky-400"
                  fill-rule="evenodd"
                  d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
                  clip-rule="evenodd"
                />
              </svg>
              <span class="group-hover:text-gray-700 text-gray-600 text-[14px]">Finance</span>
            </a>
          </li>
        </ul>
      </div>

      <div class="-mx-6 flex items-center justify-between border-t px-6 pt-4 ">
        <button class="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
            />
          </svg>
          <span class="group-hover:text-gray-700 text-gray-600 ">Logout</span>
        </button>
      </div>
    </aside>
    
  </div>
  )
}

export default Dash
