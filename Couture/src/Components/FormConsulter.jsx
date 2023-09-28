import React, { useEffect } from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useState } from 'react';
import { SalleDispo } from './constants';
import { OpEleve } from './constants';
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
  
  
const FormConsulter = () => {
  const [elevesDonnees, setElevesDonnees] = useState([])
  const[elevesNormal, setElevesNormal] = useState([])
    const [filteredStudents, setFilteredStudents] = useState(students);
    const [classroomFilter, setClassroomFilter] = useState('');

    useEffect(() => {
      // Effectuez la requête GET vers votre endpoint /scolaire
      axios.get('http://localhost:5000/Eleve')
        .then(response => {
          // Mettez à jour l'état local avec les données récupérées
          setElevesNormal(response.data);
          console.log('tout est bon');

        })
        .catch(error => {
          console.error('Erreur lors de la récupération des années scolaires :', error);
          setError('Erreur lors de la récupération des années scolaires.');
        });
    }, []);

    useEffect(() => {
      axios.get(`http://localhost:5000/Eleve/CM1`)
          .then((response) => {
              const elevesData = response.data;
              setElevesDonnees(elevesData);
          })
          .catch((error) => {
              console.error('Erreur lors de la récupération des élèves pour cette salle :', error);
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
    <div className='ml-[280px] text-black  '>
        <div className=' items-center flex justify-around h-[80px] my-[10px] border-b-[2px] py-7'>
            <input type="text" className='w-[300px]  h-[30px] bg-gray-300 rounded-2xl shadow-inner shadow-gray-350 text-center text-[13px] ' placeholder='Rechercher eleves'/>
            <div className='flex gap-10'>
                {OpEleve.map((eleve) => (
                 <div className={` ${eleve.color} hover:bg-gray-400 text-white w-[100px]  rounded-xl h-[40px] flex justify-center items-center`} > <p className='text-center font-semibold'>{eleve.title}</p></div>
                ))}
           
            
            </div>
           
        </div>

   
    <div className=" flex justify-center items-center   w-full text-black mt-[80px]">
      
    <div className="bg-white rounded-lg shadow-2xl shadow-gray-400 p-6 w-full md:w-3/4 lg:w-2/3 ">
      <h2 className="text-2xl font-semibold mb-6 text-center border-b-[2px] pb-4">Liste des étudiants</h2>
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
              <th className="px-4 py-2">Prénom</th>
              <th className="px-4 py-2">Nom</th>
              <th className="px-4 py-2">Date de naissance</th>
              <th className="px-4 py-2">Lieu de naissance</th>
              <th className="px-4 py-2">Salle d'affectation</th>
            </tr>
          </thead>
          <tbody>
            {elevesNormal.map(student => (
              <tr key={student.id} className="odd:bg-gray-100">
                <td className="px-4 py-2">{student.studentFullName}</td>
                <td className="px-4 py-2">{student.studentSurName}</td>
                <td className="px-4 py-2">{student.studentDateOfBirth}</td>
                <td className="px-4 py-2">{student.studentLieu}</td>
                <td className="px-4 py-2">{student.studentClass}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div> </div>
  )
}

export default FormConsulter
