import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
const initialCourses = [
    {
      id: 1,
      name: 'Mathematics',
      teacher: 'John Smith',
      classroom: 'A101',
      schedule: 'Mon, Wed, Fri 9:00 AM - 10:30 AM',
      date:'01/02/2023',
    },
    {
      id: 2,
      name: 'Science',
      teacher: 'Jane Doe',
      classroom: 'B203',
      schedule: 'Tue, Thu 11:00 AM - 12:30 PM',
      date:'01/02/2023',
    },
    // Ajoutez d'autres cours ici
  ];

const Cours = () => {
    const [courses, setCourses] = useState(initialCourses);
    const [showCourseList, setShowCourseList] = useState(false);
    const [showAddForm, setShowAddForm] = useState(false);
    const [selectedCourse, setSelectedCourse] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
   
    
  
  
    const handleAddCourse = (newCourse) => {
      setCourses([...courses, newCourse]);
      setShowAddForm(false);
    };
  
    const handleEditCourse = (index, updatedCourse) => {
      const updatedCourses = [...courses];
      updatedCourses[index] = updatedCourse;
      setCourses(updatedCourses);
      setSelectedCourse(null);
    };
  
    const handleDeleteCourse = (index) => {
      const updatedCourses = courses.filter((_, i) => i !== index);
      setCourses(updatedCourses);
    };
  
    const handleShowDetails = (course) => {
      setSelectedCourse(course);
    };
  
    const handleSearch = (event) => {
      setSearchTerm(event.target.value);
    };
  
    const filteredCourses = courses.filter(course =>
      (course.name.toLowerCase().includes(searchTerm.toLowerCase()),
      course.teacher.toLowerCase().includes(searchTerm.toLowerCase()),
      course.classroom.toLowerCase().includes(searchTerm.toLowerCase()),
      course.date.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
    
  
  return (
    <div className=" bg-white  md:ml-[280px] p-5 ">
      <h2 className="text-xl font-semibold mb-4 text-gray-600 text-center mb-10 border-b-[2px] pb-5">Gestion des cours</h2>
      <div className="mb-6 text-center">
        <button onClick={() => setShowCourseList(!showCourseList)} className="bg-blue-500 text-white px-4 py-2 rounded mb-2 ">
          {showCourseList ? 'Masquer la liste des cours' : 'Afficher la liste des cours'}
        </button>
        <button onClick={() => setShowAddForm(!showAddForm)} className="bg-green-500 text-white px-4 py-2 rounded ml-4">
          {showAddForm ? 'Annuler l\'ajout' : 'Ajouter un nouveau cours'}
        </button>
      </div>
      
      {showAddForm && (
        <CourseForm onSubmit={handleAddCourse} />
      )}

      {showCourseList && (
        <div className="">
          <input
            type="text"
            placeholder="Rechercher un cours"
            value={searchTerm}
            onChange={handleSearch}
            className="border rounded p-2 mb-20 bg-gray-200 w-[300px] text-align text-black"
          />
          <ul className="space-y-4">
           
            {filteredCourses.map((course, index) => (
              <li key={course.id} className="bg-white p-4 rounded-lg shadow-md flex items-center justify-between text-black">
                <div>
                  <p><strong>Cours:</strong> {course.name}</p>
                  <p><strong>Professeur:</strong> {course.teacher}</p>
                  <p><strong>Salle de classe:</strong> {course.classroom}</p>
                  <p><strong>Date:</strong> {course.date}</p>
                </div>
                <div>
                  <button onClick={() => handleShowDetails(course)} className="bg-blue-500 text-white px-4 py-2 rounded mr-2">
                    Détails
                  </button>
                  <button onClick={() => handleEditCourse(index, updatedCourse)} className="bg-green-500 text-white px-4 py-2 rounded mr-2">
                    Modifier
                  </button>
                  <button onClick={() => handleDeleteCourse(index)} className="bg-red-500 text-white px-4 py-2 rounded">
                    Supprimer
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}

      {selectedCourse && (
        <CourseDetails course={selectedCourse} onClose={() => setSelectedCourse(null)} />
      )}
    </div>
  );
};

const CourseForm = () => {

  const [newCourse, setNewCourse] = useState({
    name: '',
    teacher: '',
    classroom: '',
    schedule: '',
    date:'',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewCourse(prevCourse => ({
      ...prevCourse,
      [name]: value,
    }));
  };
  const [nameCourse, setNameCourse] = useState('');
  const [Horaire, setHoraire] = useState('');
  const [salleCour, setSalleCour] = useState('');
 
  const [detailleCour, setDetailleCour] = useState('');
  const [profCour, setProfCour] = useState('');
  const [dateCour, setDateCour] = useState('');
  const [salle, setSall] = useState('')
  const[isScol, setIsScol] = useState(true)
  const [annScol, setAnnScol] = useState('')


  const handleCour = async (e) => {
    e.preventDefault();
    try {
  const response = await axios.post("http://localhost:5000/Cour", {
  NomCour:nameCourse,
  SalleClasse:salleCour,
  ProfesseurCours:profCour,
  Horaire:Horaire,
  DateCour:dateCour,
  DetailleCour:detailleCour
      });
      console.log('Données enregistrées :', response.data);
      setNameCourse('');
      setSalleCour('')
      setHoraire('')
      setDetailleCour('')
      setProfCour('')
      setDateCour('')
      
    } catch (error) {
      console.error('Erreur lors de l\'enregistrement :', error);
      
    }
  };

  const [choixSalle, setChoixSalle] = useState([''])
 useEffect(() => {
        // Lorsque l'année scolaire sélectionnée change, obtenir les SalleDispo correspondants
        if (annScol) {
          axios.get(`http://localhost:5000/scolaire/${annScol}`)
            .then((response) => {
              setChoixSalle(response.data);
              console.log('tout est bon mon pote tu peux essayer ', choixSalle);
              console.log(choixSalle);
             
            })
            .catch((err) => {
              setError('Erreur lors de la récupération des SalleDispo.');
              console.log('Erreur lors de la récupération des SalleDispo.');
              console.error(err); // Afficher l'erreur dans la console
            });
        } else {
          // Réinitialiser les SalleDispo si aucune année n'est sélectionnée
          setChoixSalle('NONE');
        }
      }, [annScol]);
 

  return (
    

    <form  action="" onSubmit={handleCour} className="mb-4 text-center">
    { isScol && (
       <div className='flex flex-col items-center absolute inset-x-1/3 w-1/2 px-5 rounded-md bg-gray-500 shadow border py-5'>
       <label htmlFor="" className='text-white py-2'>Année Scolaire:</label>
       <input type="text" placeholder="20XX-20XY" className='border-[2px] shadow rounded-md text-center p-2'
       value={annScol}
       onChange={(e) => setAnnScol(e.target.value)}
       />
       <button className='text-white bg-blue-500 p-2 rounded-md mt-5 px-5 hover:bg-blue-300' type='submit' onClick={(e) => {
        
        e.preventDefault();
        setIsScol(!isScol);
        }}>valider</button>
     </div>)

    } 
      <h3 className="text-lg font-semibold mb-2 text-black mb-5">Ajouter un nouveau cours</h3>
      <input
        type="text"
        name="name"
        placeholder="Nom du cours"
        value={nameCourse}
        onChange={(e) => setNameCourse(e.target.value)}
        className="border rounded p-2 mr-2 text-black"
      />
      <input
        type="text"
        name="teacher"
        placeholder="Professeur"
        value={profCour}
        onChange={(e) => setProfCour(e.target.value)}
        className="border rounded p-2 mr-2 text-black" 
      />
      <input
        type="text"
        name="classroom"
        placeholder="Salle de classe"
        value={salleCour}
        onChange={(e => setSalleCour(e.target.value))}
        className="border rounded p-2 mr-2 text-black"
      />
      <select name="" id="" value={salleCour}>
        <option value=""> salle </option>
    { /*   {choixSalle.map((sal) => (
           <option value={sal} className='text-gray-600'>{sal}</option>
        ))}*/}
     
      </select> 
      <input
        type="text"
        name="schedule"
        placeholder="Horaire"
        value={Horaire}
        onChange={(e) => setHoraire(e.target.value)}
        className="border rounded p-2 mr-2 text-black"
      />
       <input
        type="date"
        name="date"
        placeholder="Horaire"
        value={dateCour}
        onChange={(e) => setDateCour(e.target.value)}
        className="border rounded p-2 mr-2 text-black"
      />
      
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Ajouter
      </button>
    </form>
  );
};

/*const CourseDetails = ({ course, onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center text-black">
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-2">{course.name}</h3>
        <p><strong>Professeur:</strong> {course.teacher}</p>
        <p><strong>Salle de classe:</strong> {course.classroom}</p>
        <p><strong>Horaire:</strong> {course.schedule}</p>
        <p><strong>Date:</strong> {course.date}</p>
        <button onClick={onClose} className="bg-blue-500 text-white px-4 py-2 rounded mt-2">
          Fermer
        </button>
      </div>
    </div>
  );
};*/

export default Cours
