import React, { useState } from 'react';
import { SalleDispo } from '.';
import axios from 'axios';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    studentFullName: '',
    studentSurName: '',
   
    studentDateOfBirth: '',
    studentLieu: '',
    
    studentGender: '',
    studentAddress: '',
    studentClass: '',
    parentFullName: '',
    parentPhoneNumber: '',
    parentEmail: '',
    // Ajoutez d'autres champs ici
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:6001/students', formData);
      console.log('élèves enregistré: ', response.data)
      
    } catch (error) {
      console.error(`Erreur lors de l\'enregistrement de l\'élève : ${error} `, error);
      
    }

  };

  return (
    <div className=" shadow-inner shadow-gray-900 p-4 text-black w-full bg-gradient-to-r from-gray-800 via-gray-600 to-gray-800 ...">
      <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
        {/* Informations de l'élève */}
        <h2 className=" text-xl font-bold mb-4 mt-5 text-center border-b-[2px] border-gray-800 py-2 text-green-500 ">INSCRIPTION DE L'ÉLÈVE</h2>
        <div className=" gap-4">
            <div className='flex gap-[40px]'>
            <div>
            <label htmlFor="studentFullName" className="block mb-3 font-semibold">Nom complet</label>
            <input
              type="text"
              id="studentFullName"
              name="studentFullName"
              value={formData.studentFullName}
              onChange={handleInputChange}
              className="w-full border rounded-md py-2 px-3"
              required
            />
          </div>
          <div>
            <label htmlFor="studentFullName" className=" flex mb-3 font-semibold">Prenom</label>
            <input
              type="text"
              id="studentSurName"
              name="studentSurName"
              value={formData.studentSurName}
              onChange={handleInputChange}
              className="w-full border rounded-md py-2 px-3"
              required
            />
          </div>

            </div>
          <div className='flex gap-[40px]'>
          

          <div>
            <label htmlFor="studentDateOfBirth" className="  mt-3 block mb-3 font-semibold">Date de naissance</label>
            <input
              type="date"
              id="studentDateOfBirth"
              name="studentDateOfBirth"
              value={formData.studentDateOfBirth}
              onChange={handleInputChange}
              className="w-full border rounded-md py-2 px-3 block"
              required
            />
          </div>
          <div>
            <label htmlFor="studentFullName" className=" mt-3 mb-3 font-semibold flex">Lieu de Naissance</label>
            <input
              type="text"
              id="studentLieu"
              name="studentLieu"
              value={formData.studentLieu}
              onChange={handleInputChange}
              className="w-full border rounded-md py-2 px-3"
              required
            />
          </div>

          </div>
          
          <div>
            <label htmlFor="studentGender" className="block mt-3  mb-3 font-semibold">Genre</label>
            <select
              id="studentGender"
              name="studentGender"
              value={formData.studentGender}
              onChange={handleInputChange}
              className="w-full border rounded-md py-2 px-3"
              required
            >
              <option value="">Sélectionner le genre</option>
              <option value="male">Masculin</option>
              <option value="female">Féminin</option>
            </select>
          </div>
          <div>
            <label htmlFor="studentFullName" className="block  mt-3  mb-3 font-semibold">Adresse de Résidence</label>
            <input
              type="text"
              id="studentAddress"
              name="studentAddress"
              value={formData.studentAddress}
              onChange={handleInputChange}
              className="w-full border rounded-md py-2 px-3"
              required
            />
          </div>
          <div>
            <label htmlFor="studentGender" className="block   mt-3  mb-3 font-semibold">Salle affecté :</label>
            <select
              id="studentClass"
              name="studentClass"
              value={formData.studentClass}
              onChange={handleInputChange}
              className="w-full border rounded-md py-2 px-3"
              required
            >
              <option value={null}>Sélectionner le Salle de l'élève</option>
             
             {SalleDispo.map((Salle) => (
                 <option value={Salle.id}>{Salle.id}</option>)
             )}
            
              
            </select>
          </div>
          <div>
            {/* Ajoutez d'autres champs ici */}
          </div>
        </div>

        {/* Informations du parent */}
        <h2 className="text-lg font-semibold mt-6 mb-4 text-green-500 border-b-[2px] py-2 border-gray-800">Informations du parent</h2>
        <div className="grid grid-cols-2 gap-10">
        <div>
            <label htmlFor="parentFullName" className="block mb-3 font-semibold">Nom du parent</label>
            <input
              type="text"
              id="parentFullName"
              name="parentFullName"
              value={formData.parentFullName}
              onChange={handleInputChange}
              className="w-full border rounded-md py-2 px-3"
              required
            />
          </div>
          <div>
            <label htmlFor="parentPhoneNumber" className="block mb-3 font-semibold">Numero du parents</label>
            <input
              type="text"
              id="parentFullName"
              name="parentPhoneNumber"
              value={formData.parentPhoneNumber}
              onChange={handleInputChange}
              className="w-full border rounded-md py-2 px-3"
              required
            />
          </div>
          <div>
            {/* Ajoutez les champs de formulaire pour les informations du parent ici */}
          </div>
          <div>
            {/* Ajoutez d'autres champs ici */}
          </div>
        </div>

        <button
          type="submit"
          className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 mt-6 mx-[180px] "
          onClick={handleSubmit}

        >
          Enregistrer
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
