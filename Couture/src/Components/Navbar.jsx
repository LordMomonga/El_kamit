import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { menu, close} from '../assets'
import { navLinks } from './constants'
import Dashboard from './Dashboard'

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    const [active, setActive] = useState(' ');
   
    const handleLinkClick = () => {
      setToggle(false); // Ferme le menu au clic sur le lien
      setActive(''); // Réinitialise l'état "active"
    };
  

  return (
  
    <nav className={`p-4 ${toggle ? 'hidden' : ''} bg-gray-800 `}>
      <div className="container mx-auto flex items-center justify-between text-black border-black">
        {/* Logo */}
        <div className="flex items-center gap-5">
          <div className="sm:hidden">
            <img
              src={toggle ? close : menu}
              alt="menu"
              className="cursor-pointer object-contain w-[28px] h-[28px] fill-black"
              onClick={() => setToggle(!toggle)}
            />
            <div
              className={`${
                !toggle ? 'hidden' : 'flex'
              } p-2 black-gradient absolute my-2 left-0 top-20 z-10 border-r-2 border-purple-500 bg-[#adadad]`}
            >
              <ul className="flex-col justify-end">
                {navLinks.map((nav) => (
                  <li
                    className="mb-3 text-[17px] font-['arial'] font-semibold hover:text-purple-600"
                    key={nav.id}
                  >
                    {nav.title}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <Link
            to="/"
            className="text-3xl font-bold font-serif text-green-500"
            onClick={() => {
              setToggle(false); // Ferme le menu au clic sur le logo
              setActive('');
            }}
          >
            El-<span className="text-black font-italian-classy text-white">Kamit</span>
          </Link>
        </div>

        {/* Menu */}
        <ul className="hidden sm:flex space-x-5 gap-2">
          {navLinks.map((nav) => (
            <li
              onClick={() => {
                setActive(nav.title);
                setToggle(false); // Ferme le menu au clic sur un lien
              }}
              key={nav.id}
            >
              <Link
                to={nav.id}
                className={`${
                  active === nav.title ? 'text-green-500' : 'tex-black'
                } hover:text-green-500 font-medium text-white`}
                onClick={handleLinkClick} // Appelle la fonction pour fermer le menu
              >
                {nav.title}
              </Link>
            </li>
          ))}
        </ul>

        {/* Bouton de connexion */}
        <div className="flex gap-5 text-black">
          <Link>
            <button>
              <svg
                className="w-6 h-6 hover:text-green-500"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.70711 15.2929C4.07714 15.9229 4.52331 17 5.41421 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 17.8954 5.89543 17 7 17C8.10457 17 9 17.8954 9 19Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </Link>
          <Link
            to="/Sign"
            className={`${active === 'Sign' ? 'text-green-500' : 'text-white'}`}
            onClick={() => {
              setActive('Sign');
              setToggle(!toggle); // Ferme le menu au clic sur le lien
            }}
          >
            <button>
              <svg
                className="w-6 h-6 mx-1 hover:text-green-500"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8C17 10.7614 14.7614 13 12 13C9.23858 13 7 10.7614 7 8ZM12 11C13.6569 11 15 9.65685 15 8C15 6.34315 13.6569 5 12 5C10.3431 5 9 6.34315 9 8C9 9.65685 10.3431 11 12 11Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M6.34315 16.3431C4.84285 17.8434 4 19.8783 4 22H6C6 20.4087 6.63214 18.8826 7.75736 17.7574C8.88258 16.6321 10.4087 16 12 16C13.5913 16 15.1174 16.6321 16.2426 17.7574C17.3679 18.8826 18 20.4087 18 22H20C20 19.8783 19.1571 17.8434 17.6569 16.3431C16.1566 14.8429 14.1217 14 12 14C9.87827 14 7.84344 14.8429 6.34315 16.3431Z"
                  fill="currentColor"
                ></path>
              </svg>
            </button>
          </Link>
        </div>
      </div>

    </nav>
   
    


  )
}

export default Navbar
