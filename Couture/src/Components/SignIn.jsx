import React from 'react';
import { portrait } from '../assets';
import { logo } from '../assets';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import axios from 'axios';




const SignIn = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();  // Ajoutez un état pour la redirection

 useEffect(() => {
    
    if (token) {
      try {
        navigate('/Menu'); 
        console.log('reussi requete')
        
      } catch (error) {
        console.log('erreur ')
        
      }
      // Redirige lorsque le token est présent
    }
  }, [token]);

  
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://el-kamit-back.vercel.app/login', { 
        
      name, 
      password });
      setToken(response.data.token);
      console.log('connexion reussi');
     
      if (response.status === 200) {
        
        localStorage.setItem('token', response.data.token);

        console.log(response.data.message);
       console.log('connexion reussi');
      } else {
        console.error('Erreur lors de l\'enregistrement de l\'utilisateur :', response.data.message);
      }
    } catch (error) {
      setMessage('Échec de la connexion. Vérifiez vos informations d\'identification.');
      console.log('connexion echoué')
    }
  };

  const handleProtectedRequest = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.get('http://localhost:5000/protected', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setMessage(response.data.message);
    } catch (error) {
      setMessage('Accès refusé. Veuillez vous connecter.');
    }
  };
 


  return (
    <div className=' bg-gray-50 w-full flex flex-col md:flex-row justify-center items-center'>
      <div className='md:w-1/2 p-4'>
        <img src={portrait} alt='Portrait' className='max-w-full h-auto' />
      </div>
      
      <div className=' bg-white w-full md:w-1/2 p-4 flex flex-col justify-center items-center md:h-[400px] shadow-xl shadow-green-200 md:py-[20px]'>
      <Link to='/'><img src={logo} className='h-[25px] cursor-pointer' /></Link>
        <h1 className='text-2xl font-bold mb-4 text-black text-center border-b-[2px] py-2 mb-5 w-full md:w-1/2 mx-[80px]'>Connectez-vous</h1>
        <form className='flex flex-col gap-4 md:w-1/2' onSubmit={handleLogin}>
          <input
            type='text'
            placeholder='Entrez votre identifiant'
            className='p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type='password'
            placeholder='Entrez votre mot de passe'
            className='p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300'
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
          />
          <button type='submit' className='bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300'>
            Entrer
          </button>
        </form>
        <span className='text-black md:mt-5 text-[12px] mt-2 md:text-[15px]'>Je n'ai pas de <Link to='/Signup'><span className='text-red-500 text-bold hover:text-gray-500 cursor-pointer'>compte</span></Link>.</span>
      </div>
      
    </div>
  );
}

export default SignIn;
