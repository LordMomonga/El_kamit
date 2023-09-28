import React from 'react'
import { useState } from 'react';
import { SalleDispo } from './constants';
import { Matieres } from './constants';
import { Sequences } from './constants';
import { Etudiants } from './constants';
import axios from 'axios';

const initialEvaluations = [
    {
      student: 'John Doe',
      subject: 'Mathematics',
      grade: 'A',
      Sequence: 'Sequence 1',
      Appreciation: 'très bien',
    },
    {
      student: 'Jane Smith', 
      subject: 'Science',
      grade: 'B+',
      Sequence: 'Sequence 2',
      Appreciation: 'très bien',
    },
    // Ajoutez d'autres évaluations ici
  ];
const Evaluation = () => {
    const [evaluations, setEvaluations] = useState(initialEvaluations);
    const [showEvaluation, setShowEvaluation] = useState(false);
    const [showAddForm, setShowAddForm] = useState(false);
    const [filteredStudents, setFilteredStudents] = useState(Etudiants);
    const [classroomFilter, setClassroomFilter] = useState('');
    const [matieres, setMatieres] = useState('');
    const [exam, setExam] = useState('');
    const handleMatiere = (event) =>{

    }
    const handleFilterChange = (event) => {
        const { value } = event.target;
        setClassroomFilter(value);
    
        if (value === '') {
          setFilteredStudents(Etudiants);
        } else {
          const filtered = Etudiants.filter(student => student.classroom === value);
          setFilteredStudents(filtered);
        }
      };
      
  // État pour gérer le formulaire d'ajout
  const [newEvaluation, setNewEvaluation] = useState({
    student: '',
    subject: '',
    grade: '',
    Sequence: '',
  });

  // Gestionnaire de changement pour les champs du formulaire
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewEvaluation(prevEvaluation => ({
      ...prevEvaluation,
      [name]: value,
    }));
  };

  // Ajouter une nouvelle évaluation
  const addEvaluation = () => {
    setEvaluations(prevEvaluations => [...prevEvaluations, newEvaluation]);
    setNewEvaluation({
      student: '',
      subject: '',
      grade: '',
      Sequence: '',
      Appreciation: '',
    });
  };

  // Modifier une évaluation existante
  const editEvaluation = (index, updatedEvaluation) => {
    const updatedEvaluations = evaluations.map((evaluation, i) =>
      i === index ? updatedEvaluation : evaluation
    );
    setEvaluations(updatedEvaluations);
  };

  // Supprimer une évaluation
  const deleteEvaluation = (index) => {
    const updatedEvaluations = evaluations.filter((_, i) => i !== index);
    setEvaluations(updatedEvaluations);
  };
  return (
    <div className='bg-white px-6 pt-6 text-gray-600 left-10  md:ml-[250px]'>
       <div className=" p-2 md:p-5 ">
      <h2 className="text-xl font-semibold mb-4 text-center pb-5 border-b-[2px] ">Gestion des évaluations</h2>
      {/* Formulaire d'ajout */}
      <div className=' gap-[50px] bg-green-100 text-center p-2 mb-5 shadow shadow-blue-100 '>
        <button className={`${showEvaluation ? 'bg-gray-500' : 'bg-blue-500'} text-white  rounded-lg text-[12px] md:text-[16px] p-2 md:mr-[40px] hover:bg-gray-500`}  onClick={() => setShowEvaluation(!showEvaluation)}>
        {showEvaluation ? 'Annuler entrer individuelle' : 'Entrer individuelle '}</button>
        <button className={` ${showAddForm ? 'bg-gray-500' : 'bg-green-500'} text-[12px] md:text-[16px]  text-white rounded-lg p-2 ml-[40px] hover:bg-gray-500`} onClick={() => setShowAddForm(!showAddForm)}>
        {showAddForm? 'Annuler entrer en masse' : 'Entrer en masse '} </button>

        
      </div>
      {!showAddForm && (
         <div>
         <input type="text" placeholder='Rechercher eleves ' className=' bg-gray-200 rounded-full  text-center py-3 w-[200px] md:w-[370px] h-[30px] mb-8 shadow-inner text-[13px]' />
       </div>
      )}
     
      {showEvaluation && ( <div className=" md:rounded-none rounded-xl mb-4 px-10 text-center mb-10 shadow-xl shadow-green-300 md:shadow-none pb-5 ">
        <h3 className="text-lg font-semibold mb-2 text-center mb-5">Ajouter une évaluation</h3>
        <input
          type="text"
          name="student"
          placeholder="Étudiant"
          value={newEvaluation.student}
          onChange={handleInputChange}
          className=" shadow border rounded p-1 md-p-2 mr-2 mb-3 text-center"
        />
        <input
          type="text"
          name="subject"
          placeholder="Matière"
          value={newEvaluation.subject}
          onChange={handleInputChange}
          className=" shadow border rounded p-1 md-p-2 mr-2 mb-3 text-center"
        />
        <input
          type="text"
          name="grade"
          placeholder="Note"
          value={newEvaluation.grade}
          onChange={handleInputChange}
          className=" shadow border rounded p-1 md-p-2 mr-2 mb-3 text-center"
        />
        <input
          type="text"
          name="Sequence"
          placeholder="Sequence"
          value={newEvaluation.Sequence}
          onChange={handleInputChange}
          className=" shadow border rounded p-1 md-p-2 mr-2 mb-3 text-center"
        />
        <input
          type="text"
          name="Appreciation"
          placeholder="Appreciation"
          value={newEvaluation.Appreciation}
          onChange={handleInputChange}
          className=" shadow border rounded p-1 md-p-2 mr-2 mb-3 text-center"
        />
        <select name="" id="" className='border-[2px] p-2 rounded-md shadow'>
        <option value="">Année Scolaire</option>

        </select>
        <button onClick={addEvaluation} className="bg-blue-500 text-white px-4  py-1 md:py-2 rounded">
          Ajouter
        </button>
      </div>)}
      {showAddForm && (
        <div  className='mt-[50px]'> <h1 className='text-center font-bold text-[17px] border-b-[1px] pb-2'>GÉNÉRER SELECTEUR  </h1>
        <div className='flex items-center gap-5 mt-5  mb-[50px]'> <h1 className='font-semibold '>Sélection par classe : </h1>
        <select 
        id="classroomFilter"
        value={classroomFilter}
        onChange={handleFilterChange}
        className="border rounded p-2 border-black"> <option value={null} className='text-black'>Sélectionnez une classe </option>
            {SalleDispo.map((salle => (
                <option value={salle.id}> {salle.id}</option>
            )) )}
        </select>
        <h1 className='font-semibold '>Sélectionner la matière : </h1>
        <select className="border rounded p-2 border-black" 
        value={matieres}
        onChange={(e) => setMatieres(e.target.value)}
        > <option value={null} className='text-black'>Entrer la matière </option>
            {Matieres.map((mat => (
                <option value={mat}> {mat}</option>
            )) )}
        </select>
        <h1 className='font-semibold '>Sélectionner la Sequence : </h1>
        <select className="border rounded p-2 border-black "
        value={exam}
        onChange={(e) => setExam(e.target.value)}
        > <option value={null} className='text-black'>Entrer la Sequence </option>
            {Sequences.map((Seq => (
                <option value={Seq}> {Seq}</option>
            )) )}
        </select>

        <button className='bg-blue-500 text-white rounded p-2 '>valider</button>
        </div>

        <div className='text-center shadow-lg py-5'>
        <table className='border-[1px] border-black mx-[200px]  '>
           <tr className='bg-blue-600 text-white'><th className='  w-[200px]'>Noms</th>
            <th className='  w-[200px] py-2'>Notes</th>
            <th className='  w-[200px] py-2'>Matières</th>
            <th className='  w-[200px]'>Sequences </th>
            <th className='  w-[200px]'>Appreciation </th></tr> 
            {filteredStudents.map(eleve => (
                 
                    <tr className='bg-gray-700 text-white'>
                        <td className='py-3'>{eleve.firstName}</td>
                        <td className='py-3'><input type="text" placeholder=' ?/20' className='text-center  py-2'/></td>
                        <td className='py-3'> {matieres}</td>
                        <td className='py-3'>{exam}</td>
                        <td className='py-3 pr-5'><input type="text" placeholder=' grade eleves ' className='text-center rounded  py-2'/></td>
                    </tr>
                ))}
                <tr className=' bg-green-300'><td className='border-b-[2px] py-2'></td></tr>
                
         
           
        </table>

        </div>
        
        </div>
        
      )}
     
      {/* Liste des évaluations */}
      {!showAddForm && (<div>
        <h3 className="text-lg font-semibold mb-2 text-center ">Liste des évaluations</h3>
      <ul className="space-y-4">
        {evaluations.map((evaluation, index) => (
          <li key={index} className="bg-white p-4 rounded-lg shadow-md flex items-center text-gray-600 text-[12px] md:text-[14px]">
            <div className="flex-grow ">
              <p className='mb-2'><strong>Étudiant:</strong> {evaluation.student}</p>
              <p className='mb-2'><strong>Matière:</strong> {evaluation.subject}</p>
              <p className='mb-2'><strong>Note:</strong> {evaluation.grade}</p>
              <p className='mb-2'><strong>Sequence:</strong> {evaluation.Sequence}</p>
            </div>
            <button onClick={() => editEvaluation(index, updatedEvaluations)} className="bg-green-500 text-white px-4 py-2 rounded mr-2">
              Modifier
            </button>
            <button onClick={() => deleteEvaluation(index)} className="bg-red-500 text-white px-4 py-2 rounded">
              Supprimer
            </button>
          </li>
        ))}
      </ul>
      </div>)}
     
    </div>
    </div>
  )
}

export default Evaluation
