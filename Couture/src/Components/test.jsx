import React from 'react'
import { useState } from 'react';
import axios from 'axios';

const Test = () => {
    // State pour stocker les valeurs du formulaire
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [status, setStatus] = useState('');
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      const userData = { name, password, status };
  
      try {
        const response = await axios.post('https://el-kamit-back.vercel.app/register', userData);
        console.log(response.data.message);
      } catch (error) {
        console.error('Erreur lors de l\'enregistrement de l\'utilisateur :', error);
      }
    };
  // Rendu du composant
  return (
    
    <div className="flex justify-center items-center w-full ">
      <div className="bg-white p-8 rounded shadow-gray-500 shadow-md w-96">
        <h1 className="text-2xl font-semibold mb-4">Enregistrement d'utilisateur</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Nom:</label>
            {/* Champ de saisie pour le nom */}
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="mt-1 p-2 block w-full rounded border border-gray-300"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Mot de Passe:</label>
            {/* Champ de saisie pour l'email */}
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 p-2 block w-full rounded border border-gray-300"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Status:</label>
            {/* Champ de saisie pour l'email */}
           <select name="" id="" value={status}
           onChange={(e) => setStatus(e.target.value)}
           className='p-2 border rounded-md'
           >
            <option value="">Status</option>
            <option value="Administrateur"> Administrateur</option>
            <option value="Utilisateur">Utilisateur </option>

           </select>
          </div>
          {/* Bouton de soumission du formulaire */}
          <div className='text-center mt-5'>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 "
          >
            Enregistrer
          </button>

          </div>
          
        </form>
      </div>
    </div>
    );
}

export default Test
