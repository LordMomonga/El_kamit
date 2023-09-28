import React, { useState } from 'react';
import { SalleDispo } from './constants';

const RegistForm = () => {
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

  const handleSubmit = (event) => {
    event.preventDefault();
    // Traitez les données du formulaire ici
    console.log(formData);
  };

  return (
    <div className=" shadow-inner shadow-gray-900   p-4 text-black w-full text-black bg-gray-100 justify-center flex ">
      <form className=" w-[800px] items-center bg-white  px-10 rounded " onSubmit={handleSubmit}>
        {/* Informations de l'élève */}
        <h2 className="text-xl font-bold mb-4 mt-5 text-center border-b-[2px] border-gray-800 py-2 text-black ">AJOUT D'UN ENSEIGNANTS </h2>
        <div className=" gap-4">
            <div className='flex gap-[40px]'>
            <div>
            <label htmlFor="studentFullName" className="block mb-3 font-semibold">Nom complet</label>
            <input
              type="text"
              placeholder='Entrer votre nom'
              id="studentFullName"
              name="studentFullName"
              value={formData.studentFullName}
              onChange={handleInputChange}
              className="w-[300px] border rounded-md py-2 px-3"
              required
            />
          </div>
          <div>
            <label htmlFor="studentFullName" className=" flex mb-3 font-semibold">Prenom</label>
            <input
              type="text"
              placeholder='Entrer votre prenom'
              id="studentSurName"
              name="studentSurName"
              value={formData.studentSurName}
              onChange={handleInputChange}
              className="w-[250px] border rounded-md py-2 px-3"
              required
            />
          </div>

            </div>
          <div className='flex gap-[130px]'>
          

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
              placeholder='Entrer votre lieu de naissance '
              id="studentLieu"
              name="studentLieu"
              value={formData.studentLieu}
              onChange={handleInputChange}
              className="w-[250px] border rounded-md py-2 px-3 w-[250px]"
              required
            />
          </div>

          </div>
          <div className='flex gap-20'>
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
            <label htmlFor="studentGender" className="block mt-3  mb-3 font-semibold">Statut</label>
            <select
              id="studentGender"
              name="studentGender"
              value={formData.studentGender}
              onChange={handleInputChange}
              className="w-full border rounded-md py-2 px-3"
              required
            >
              <option value="">Sélectionner votre Statut </option>
              <option value="male">Marié</option>
              <option value="female">Celibataire</option>
            </select>
          </div>
          </div>
         
          <div className='flex gap-20'>
          <div>
            <label htmlFor="studentFullName" className="block  mt-3  mb-3 font-semibold">Adresse de Résidence</label>
            <input
              type="text"
              placeholder='lieu de residence'
              id="studentAddress"
              name="studentAddress"
              value={formData.studentAddress}
              onChange={handleInputChange}
              className="w-full border rounded-md py-2 px-3"
              required
            />
          </div>
          <div>
            <label htmlFor="studentFullName" className="block  mt-3  mb-3 font-semibold">Numero de telephone</label>
            <input
              type="text"
              id="studentAddress"
              placeholder='69999xxxx'
              name="studentAddress"
              value={formData.studentAddress}
              onChange={handleInputChange}
              className="w-full border rounded-md py-2 px-3"
              required
            />
          </div>

          </div>
          <div className='flex gap-10'>
          <div>
            <label htmlFor="studentGender" className="block   mt-3  mb-3 font-semibold">Salle affecté :</label>
            <select
              id="studentGender"
              name="studentGender"
              value={formData.studentGender}
              onChange={handleInputChange}
              className="w-full border rounded-md py-2 px-3"
              required
            >
              <option value="">Sélectionner le Salle de l'élève</option>
             
             {SalleDispo.map((Salle) => (
                 <option value="maternelle">{Salle.id}</option>)
             )}
            
              
            </select>
          </div>
          <div>
            <label htmlFor="studentFullName" className="block  mt-3  mb-3 font-semibold">Année Scolaire</label>
            <input
              type="text"
              id="studentAddress"
              placeholder='69999xxxx'
              name="studentAddress"
              value={formData.studentAddress}
              onChange={handleInputChange}
              className="w-full border rounded-md py-2 px-3"
              required
            />
          </div>
          </div>
          
          <div>
            <label htmlFor="" className="  mt-3 block mb-3 font-semibold">Dernier diplome obtenu :</label>
            <input
              type="text"
              placeholder='Entrer votre dernier diplom obtenu'
              id=""
              name=""
              value={formData.studentDateOfBirth}
              onChange={handleInputChange}
              className="w-full border rounded-md py-2 px-3 block"
              required
            />
          </div>
          <div>
            <label htmlFor="" className="  mt-3 block mb-3 font-semibold">Email :</label>
            <input
              type="text"
              placeholder='MonEmail@email.com'
              id=""
              name=""
              value={formData.studentDateOfBirth}
              onChange={handleInputChange}
              className="w-full border rounded-md py-2 px-3 block"
              required
            />
          </div>
        
        </div>

        {/* Informations du parent */}

       

        <button
          type="submit"
          className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 mt-6 mx-[180px] "
        >
          Enregistrer
        </button>
      </form>
    </div>
  );
};

export default RegistForm;
