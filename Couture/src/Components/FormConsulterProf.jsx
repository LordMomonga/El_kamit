import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useState } from 'react';
import { SalleDispo } from './constants';
import { OpEleve } from './constants';
import { useEffect } from 'react';
import axios from 'axios';

const students = [
    {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      birthDate: '1999-05-15',
      birthPlace: 'New York',
      classroom: 'CM1',
    },
    
    {
      id: 2,
      firstName: 'Jane',
      lastName: 'Smith',
      birthDate: '2000-02-10',
      birthPlace: 'Los Angeles',
      classroom: 'Sil',
    },
    {
        id: 3,
        firstName: 'Johnas',
        lastName: 'Doe',
        birthDate: '1999-05-15',
        birthPlace: 'New York',
        classroom: 'CP',
      },
      {
        id: 4,
        firstName: 'jean',
        lastName: 'phillip',
        birthDate: '1999-05-15',
        birthPlace: 'New York',
        classroom: 'CP',
      },
    // ... Ajoutez d'autres étudiants ici
  ];
  
  
const FormConsulterProf = () => {
    const [filteredStudents, setFilteredStudents] = useState(students);
    const [classroomFilter, setClassroomFilter] = useState('');
    const[prof, setProf] = useState([])
  
    useEffect(() => {
      // Effectuez la requête GET vers votre endpoint /scolaire
      axios.get('http://localhost:5000/Professeur')
        .then(response => {
          // Mettez à jour l'état local avec les données récupérées
          setProf(response.data);
          console.log('tout est bon');

        })
        .catch(error => {
          console.error('Erreur lors de la récupération des années scolaires :', error);
          setError('Erreur lors de la récupération des années scolaires.');
        });
    }, []);

    const handleFilterChange = (event) => {
      const { value } = event.target;
      setClassroomFilter(value);
  
      if (value === '') {
        setFilteredStudents(students);
      } else {
        const filtered = students.filter(student => student.classroom === value);
        setFilteredStudents(filtered);
      }
    };
   
  return (
    <div className=' text-black bg-white ml-[280px]'>
        <div className=' items-center flex justify-around h-[80px] my-[10px] border-b-[2px] py-7'>
            <input type="text" className='w-[300px] shadow-inner  shadow-gray-350 h-[30px] bg-gray-300 rounded-xl text-center ' placeholder='Rechercher enseignants'/>
            <div className='flex gap-10'>
                {OpEleve.map((eleve) => (
                 <div className={` ${eleve.color} hover:bg-gray-400 text-white w-[100px]  rounded-xl h-[40px] flex justify-center items-center`} > <p className='text-center font-semibold'>{eleve.title}</p></div>
                ))}
           
            
            </div>
           
        </div>

   
    <div className=" flex justify-center items-center  bg-white w-full text-black mt-[80px]">
      
    <div className="bg-white rounded-lg shadow-2xl shadow-gray-400 p-6 w-full md:w-3/4 lg:w-2/3 ">
      <h2 className="text-2xl font-semibold mb-6 text-center border-b-[2px] pb-4">Liste des Enseignants</h2>
      <div className="mb-4">
        <label htmlFor="classroomFilter" className="mr-2 font-medium">Filtrer par salle de classe:</label>
        <select
          id="classroomFilter"
          value={classroomFilter}
          onChange={handleFilterChange}
          className="border rounded p-1"
        >
          <option value="">Toutes les salles de classe</option>
          {/* Remplacez par les options réelles de salles de classe */}
          {SalleDispo.map((Salle)=>(
             <option value={`${Salle.id}`}>{Salle.id}</option>
          ))}
         
          
          {/* ... Ajoutez d'autres options ici */}
        </select>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="border-t">
              <th className="px-4 py-2">Nom</th>
              <th className="px-4 py-2">Prenom</th>
              <th className="px-4 py-2">Adresse de residence</th>
              <th className="px-4 py-2">Lieu de naissance</th>
              <th className="px-4 py-2">Salle d'affectation</th>
            </tr>
          </thead>
          <tbody>
            {prof.map(student => (
              <tr key={student.id} className="odd:bg-gray-100 ">
                <td className="px-4 py-2">{student.maitreFullName}</td>
                <td className="px-4 py-2">{student.maitreSurName}</td>
                <td className="px-4 py-2">{student.AdresseResidence}</td>
                <td className="px-4 py-2">{student.maitreNumber}</td>
                <td className="px-4 py-2">{student.maitreClass}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div> </div>
  )
}

export default FormConsulterProf
