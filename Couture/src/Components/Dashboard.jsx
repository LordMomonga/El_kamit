// src/components/Dashboard.js
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
const Dashboard = () => {
    const [activeMenu, setActiveMenu] = useState(null);
    const handleMenuHover = (menuIndex) => {
        setActiveMenu(menuIndex);
        // Code pour afficher le sous-menu correspondant
      };
  return (
    <div className="bg-gray-800 text-white h-screen w-64 flex flex-col">
      <div className="p-4">
        <h1 className="text-2xl font-semibold mt-[20px]">Admin</h1>
      </div>
      <div><input type="text" name="" id="" className='text-center ml-4 rounded bg-gray-600 text-[16px] mt-[20px]' placeholder='Quick search'/></div>
      <nav className="flex-grow">
        <ul className="space-y-2 p-4">
          
          <h1 className="text-2xl font-semibold border-b-[2px] py-1 border-black">Operations</h1>
          <li className="hover:bg-gray-700 p-3 rounded" onMouseEnter={() => handleMenuHover(0)}
            onMouseLeave={() => handleMenuHover(null)}>
            <a href="#">Ajouter </a>
            <div className={`absolute w-[200px] ${
                activeMenu === 0 ? 'block' : 'hidden'
              }  rounded group-hover:block bg-gray-600 text-white py-2 px-4 mt-1`}>
              <Link to="Releves" className='block mb-[10px] border-b-[1px] pb-[8px] hover:text-green-500'>Élèves</Link>
              <Link to="enseignant" className='block hover:text-green-500'>Maitre</Link>
              
            </div>
          </li>
          <li className="hover:bg-gray-700 p-3 rounded" onMouseEnter={() => handleMenuHover(1)}
            onMouseLeave={() => handleMenuHover(null)}>
            <a href="#">Consulter </a>
            <div className={`absolute w-[200px]  ${
                activeMenu === 1 ? 'block' : 'hidden'
              }  rounded group-hover:block bg-gray-600 text-white py-2 px-4 mt-1`}>
              <Link to="Eleves" className='block mb-[10px] border-b-[1px] pb-[8px] hover:text-green-500'>Élèves</Link>
              <Link to="Prof" className='block hover:text-green-500'>Maitre</Link>
              
            </div>
          </li>
          <h1 className="text-2xl font-semibold border-b-[2px] py-1 mt-[5px] border-black">Gestion</h1>
          <li className="hover:bg-gray-700 p-3 rounded">
            <Link to="evaluation" >Évaluation</Link>
          </li>
          <li className="hover:bg-gray-700 p-3 rounded ">
            <Link to='Cour'>Cours </Link>
          </li>
          <li className="hover:bg-gray-700 p-3 rounded">
            <Link to="Bulletin"> Bulletins </Link>
          </li>
          
          <h1 className="text-2xl font-semibold border-b-[2px] py-1 mt-[5px] border-black">Autres</h1>
          <li className="hover:bg-gray-700 p-3 rounded">
            <a href="#">Emploi du temps </a>
          </li>
          <li className="hover:bg-gray-700 p-3 rounded">
            <a href="#">Avis et annonces</a>
          </li>
          {/* Ajoutez d'autres liens ici */}
        </ul>
      </nav>
      
    </div>
  );
};

export default Dashboard;
